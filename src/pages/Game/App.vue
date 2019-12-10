<template>
  <div id="app">
	<h4>{{ message }}</h4>
	<p>Money per second:<NumberDisplay :value=moneyGenRatePreSec></NumberDisplay>{{ currency }}</p>
	<p>Money count:<NumberDisplay :value=moneyCountDisplay></NumberDisplay>{{ currency }}</p>
	<p>Time Left:<NumberDisplay :value=timeLeftDisplay></NumberDisplay>seconds</p>
	<button v-on:click="onDonate();">Donate {{ donationPower }} {{ currency }}</button>
	<!--Buildings-->
	<br>
	<p>Actions</p>
	<span 
		v-for="(action, index) in availableActions"
		v-on:click="doAction(index)"
		:key="'action' + action.id"
	>
		<button>{{action.name}} +{{action.profit}}{{currency}}</button>{{action.count}}
	</span>
	<!--
	<button v-on:click=";">Make items on Amazon cheaper</button>
	<button v-on:click=";">Less employees working in the warehouses</button>
	<button v-on:click=";">Sell a Amazon warehouse</button>
	<button v-on:click=";">Make AWS cheaper</button>
	<button v-on:click=";">Make Amazon.com slower</button>
	-->
	<!--UPGRADES-->
	<p>Upgrades</p>
	<button 
		v-for="(upgrade, index) in upgradesShop"
		v-on:click="buyUpgrade(index)"
		:key="upgrade.name"
	>
		{{upgrade.name}} +{{upgrade.profit}}{{currency}}
	</button>
	<!--
	<button v-on:click=";">Free 2 day shipping for everyone</button>
	<button v-on:click=";">Shutdown down Amazon's website</button>
	<button v-on:click=";">Shutdown down Amazon</button>
	-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NumberDisplay from './../../components/NumberDisplay.vue';
import Bar from 'vue-chartjs';

function lerp(oldValue: number, newValue: number, progress: number): number {
	let delta: number = newValue - oldValue;
	//predictedDelta is a perdiction of the different between the final ouput and old value  
	//assuming both old value and new value are from a linear equation like the one below
	//the plus 1 is to combat the output being a bit outdated by predicting it.
	let predictedDelta: number = (1 + progress) * delta;
	return oldValue + predictedDelta;
}

/*
class ReferenceableNumber {
	value : number;
}

class NumberDisplay {
	oldNumber: number;

}
*/

enum ActionID {
	AutoDonator,
	Stocks,
	CheaperPrime,
	CheaperItems,
	LessEmployees,
	SellWarehouse,
	CheaperAWS,
	SlowerAmazonWebsite,
	ShutdownAmazon,
	LastActionID//needed to know how many ActionIDs there are
}

class ActionStats {
	readonly id: ActionID;
	name: string;
	readonly maxCount: number;
	moneyLossPerSecond: number;
	profit: number;

	count: number = 0;

	constructor(id: ActionID, _name: string, _maxCount: number, _moneyLossPerSecond: number, _profit: number) {
		this.id = id;
		this.name = _name;
		this.maxCount = _maxCount;
		this.moneyLossPerSecond = _moneyLossPerSecond;
		this.profit = _profit;
	}
}

class UpgradeStats {
	name: string;
	profit: number;
	canStart: (game: App) => boolean;
	doUpgrade: (game: App) => void;
	constructor(_name: string, _profit: number, _canStart: (game: App) => boolean, _doUpgrade: (game: App) => void) {
		this.name = _name;
		this.profit = _profit;
		this.canStart = _canStart;
		this.doUpgrade = _doUpgrade;
	}
}

@Component({
  components: {
	NumberDisplay
  },
})
export default class App extends Vue {
	moneyCount: number = 112000000000;
	clock: number = 0;
	timeLeft: number = 2629746;
	readonly baseMoneyGenRatePreSec: number = 3000;
	moneyGenRatePreSec: number = this.baseMoneyGenRatePreSec;
	moneyCountOnTrade: number = 0;
	moneyGainedSinceTrade: number = 0;

	baseDonationPower: number = 2;
	donationPower: number = this.baseDonationPower;

	hasFailed: boolean = false;
	hasWon: boolean = false;

	message: string = "Spend all your money";

	readonly tickRate: number = 2;
	targetTickTime: number = 1000 /*number of milliseconds in a sec*/ / this.tickRate;
	currency: string = "\u{1f48e}";

	actions: Array<ActionStats> = [
		new ActionStats(ActionID.AutoDonator  , "Make an Auto Donator"        , 999999, 2/3600, 10           ),
		new ActionStats(ActionID.Stocks       , "Sell a stock"                , 999999, 1/36  , 1000         ),
		new ActionStats(ActionID.CheaperPrime , "Make Amazon prime cheaper"   , 120   , 100/3 , 10000000     ),
		new ActionStats(ActionID.CheaperItems , "Make items on Amazon cheaper", 999999, 1/3   , 10000000     ),
		new ActionStats(ActionID.LessEmployees, "Fire an emoployee"           , 566000, 100/36, 1000000      ),
		new ActionStats(ActionID.SellWarehouse, "Sell a warehouse"            , 75    , 100   , 1000000000   ),
		new ActionStats(ActionID.CheaperAWS   , "Lower AWS price"             , 999999, 50    , 1000000000000),
		new ActionStats(ActionID.SlowerAmazonWebsite, "Throw away some Amazon servers", 999999, 100, 3000000000000),
		new ActionStats(ActionID.ShutdownAmazon, "Enter the Amazon Shutdown Code", 1, 21000, 0)
	];

	availableActions: Array<ActionStats> = [];

	//upgrades
	upgradesShop: Array<UpgradeStats> = [];

	upgrades: Array<UpgradeStats> = [
		new UpgradeStats(
			"Being a teir 2 donator",
			500000,
			(game: App): boolean => {
				return 10 <= game.actions[ActionID.AutoDonator].count;
			},
			(game: App): void => {
				game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
				game.donationPower = 8;
			}
		),
		new UpgradeStats(
			"Being a teir 3 donator",
			1000000,
			(game: App): boolean => {
				return 20 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 8;
			},
			(game: App): void => {
				game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
				game.donationPower = 16;
			}
		),
		new UpgradeStats(
			"Being a teir 4 donator",
			2000000,
			(game: App): boolean => {
				return 40 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 16;
			},
			(game: App): void => {
				game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
				game.donationPower = 64;
			}
		),
		new UpgradeStats(
			"Being a teir 5 donator",
			4000000,
			(game: App): boolean => {
				return 80 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 64;
			},
			(game: App): void => {
				game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
				game.donationPower = 256;
			}
		),
		new UpgradeStats(
			"Being a teir 6 donator",
			8000000,
			(game: App): boolean => {
				return 160 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 256;
			},
			(game: App): void => {
				game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
				game.donationPower = 1024;
			}
		),
		new UpgradeStats(
			"Being a teir 7 donator",
			16000000,
			(game: App): boolean => {
				return 320 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 1024;
			},
			(game: App): void => {
				game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
				game.donationPower = 4096;
			}
		),
		new UpgradeStats(
			"Being a teir 7 donator",
			16000000,
			(game: App): boolean => {
				return 640 <= game.actions[ActionID.AutoDonator].count && game.donationPower == 4096;
			},
			(game: App): void => {
				game.actions[ActionID.AutoDonator].moneyLossPerSecond *= 2;
				game.donationPower = 16384;
			}
		),
		new UpgradeStats(
			"Start selling Stocks",
			1000000,
			(game: App): boolean => {
				return 50 <= game.actions[ActionID.AutoDonator].count;
			},
			(game: App): void => {
				game.availableActions.push(this.actions[ActionID.Stocks]);
			}
		),
		new UpgradeStats(
			"Invest in WeWork",
			5000000,
			(game: App): boolean => {
				return 10 <= game.actions[ActionID.Stocks].count;
			},
			(game: App): void => {
				game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
			}
		),
		new UpgradeStats(
			"Invest in Kmart",
			10000000,
			(game: App): boolean => {
				return 100 <= game.actions[ActionID.Stocks].count;
			},
			(game: App): void => {
				game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
			}
		),
		new UpgradeStats(
			"Invest in Blockbuster",
			50000000,
			(game: App): boolean => {
				return 200 <= game.actions[ActionID.Stocks].count;
			},
			(game: App): void => {
				game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
			}
		),
		new UpgradeStats(
			"Invest in Forever 21",
			100000000,
			(game: App): boolean => {
				return 400 <= game.actions[ActionID.Stocks].count;
			},
			(game: App): void => {
				game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
			}
		),
		new UpgradeStats(
			"Invest in Sears",
			500000000,
			(game: App): boolean => {
				return 800 <= game.actions[ActionID.Stocks].count;
			},
			(game: App): void => {
				game.actions[ActionID.Stocks].moneyLossPerSecond *= 2;
			}
		),
		new UpgradeStats(
			"Start making prime cheaper",
			10000000,
			(game: App): boolean => {
				return game.moneyGenRatePreSec <= 2985;
			},
			(game: App): void => {
				game.availableActions.push(this.actions[ActionID.CheaperPrime]);
			}
		),
		new UpgradeStats(
			"Prime is half off",
			50000000,
			(game: App): boolean => {
				return 60 <= game.actions[ActionID.CheaperPrime].count;
			},
			(game: App): void => {
				game.actions[ActionID.CheaperPrime].moneyLossPerSecond *= 2;
			}
		),
		new UpgradeStats(
			"Prime is free for everyone!",
			0,
			(game: App): boolean => {
				return game.actions[ActionID.CheaperPrime].maxCount <= game.actions[ActionID.CheaperPrime].count;
			},
			(game: App): void => {
				game.actions[ActionID.CheaperPrime].moneyLossPerSecond *= 2;
				//remove from UI
				let index: number = game.availableActions.indexOf(game.actions[ActionID.CheaperPrime]);
				if (index < -1) {
					window.console.error("Can't make remove Prime from avaiable actions")
					return;
				}
				game.availableActions.splice(index, 1);
			}
		),
		new UpgradeStats(
			"Start making items cheaper on amazon",
			100000000,
			(game: App): boolean => {
				return game.moneyGenRatePreSec <= -13500;
			},
			(game: App): void => {
				game.availableActions.push(this.actions[ActionID.CheaperItems]);
			}
		),
		new UpgradeStats(
			"Start firing employees",
			1000000,
			(game: App): boolean => {
				return game.moneyGenRatePreSec <= -4050;
			},
			(game: App): void => {
				game.availableActions.push(this.actions[ActionID.LessEmployees]);
			}
		),
		new UpgradeStats(
			"Start selling warehouses",
			1000000000000,
			(game: App): boolean => {
				return game.moneyGenRatePreSec <= -13327;
			},
			(game: App): void => {
				game.availableActions.push(this.actions[ActionID.SellWarehouse]);
			}
		),
		new UpgradeStats(
			"Sell all warehouses",
			0,
			(game: App): boolean => {
				return game.actions[ActionID.SellWarehouse].maxCount <= game.actions[ActionID.SellWarehouse].count;
			},
			(game: App): void => {
				game.availableActions.push(this.actions[ActionID.SellWarehouse]);
				//remove from UI, for some reason just using filter doesn't work
				game.availableActions = game.availableActions.filter(item => item != game.actions[ActionID.SellWarehouse]);
			}
		),
		new UpgradeStats(
			"Start lowering the price of AWS",
			1000000000000,
			(game: App): boolean => {
				return game.moneyGenRatePreSec <= -21000;
			},
			(game: App): void => {
				game.availableActions.push(this.actions[ActionID.CheaperAWS]);
			}
		),
		new UpgradeStats(
			"Start thowing away Amazon's server",
			5000000000000,
			(game: App): boolean => {
				return game.moneyGenRatePreSec <= -26000;
			},
			(game: App): void => {
				game.availableActions.push(this.actions[ActionID.SlowerAmazonWebsite]);
			}
		),
		new UpgradeStats(
			"Shutdown the Amazon company",
			5000000000000,
			(game: App): boolean => {
				return game.moneyGenRatePreSec <= -42125;
			},
			(game: App): void => {
				game.availableActions.push(this.actions[ActionID.ShutdownAmazon]);
			}
		),
	];

	//variables used for rendering or UI
	lastTickTimestamp: DOMHighResTimeStamp = 0;
	oldMoneyCount: number = this.moneyCount; //used for interploation
	moneyCountDisplay: string = String(this.moneyCount);
	oldTimeLeft: number = this.timeLeft;
	timeLeftDisplay: string = String(this.timeLeft);

	//chart UI
	

	onDonate(): void {
		this.moneyCount -= this.donationPower;
	}
	updateMoneyPerSec() : void {
		this.moneyGenRatePreSec = this.baseMoneyGenRatePreSec;
		this.actions.forEach((action: ActionStats) => {
			this.moneyGenRatePreSec -= (action.count * action.moneyLossPerSecond);
		});
	}
	trade(profit: number): void {
		this.moneyCountOnTrade = this.moneyCount;
		this.moneyCount += profit;
	}
	doAction(index: number) : void {
		let action: ActionStats = this.availableActions[index];
		if(action.maxCount <= action.count) {
			action.count = action.maxCount;
			return;
		}
		action.count += 1;
		this.trade(action.profit);
		action.profit *= 1.05;
		this.updateMoneyPerSec();
	}
	buyUpgrade(index: number): void {
		let upgrade: UpgradeStats = this.upgradesShop[index];
		upgrade.doUpgrade(this);
		this.trade(upgrade.profit);
		this.updateMoneyPerSec();
		this.upgradesShop.splice(index, 1);
	}
	onTick() : void {
		//get delta time
		let currentTimestamp = performance.now();
		let deltaTime = (currentTimestamp - this.lastTickTimestamp) / 1000 /*milliseconds in a second*/;

		//remember values from last tick
		this.oldMoneyCount = this.moneyCount;
		this.oldTimeLeft = this.timeLeft;

		//update game data
		this.moneyCount += this.moneyGenRatePreSec * deltaTime;
		if (this.moneyGenRatePreSec <= 0 && this.moneyCount <= 0) {
			this.hasWon = true;
			this.message = "You've spent all your money!"
		}
		if (!this.hasFailed && !this.hasWon)
			this.timeLeft -= 1 * deltaTime;

		this.upgrades.forEach((upgrade:UpgradeStats, index:number): void => {
			if (upgrade.canStart(this)) {
				this.upgradesShop.push(upgrade);
				this.upgrades.splice(index, 1);
			}
		})

		this.moneyGainedSinceTrade = this.moneyCount - this.moneyCountOnTrade;

		this.lastTickTimestamp = performance.now(); //needed for interpolation
	}
	onFrame(timestamp: DOMHighResTimeStamp) : void {
		let timeDelta: number = timestamp - this.lastTickTimestamp;
		let progressTilNextTick: number = timeDelta / this.targetTickTime;
		this.moneyCountDisplay = lerp(this.oldMoneyCount, this.moneyCount, progressTilNextTick).toFixed(2);
		this.timeLeftDisplay = lerp(this.oldTimeLeft, this.timeLeft, progressTilNextTick).toFixed(3);
		window.requestAnimationFrame(this.onFrame);
	}
	mounted(): void {
		//to do add chart
	}
	created() : void {
		//start actions list
		this.availableActions.push(this.actions[ActionID.AutoDonator]);

		this.onTick(); //setInterval doesn't call onTick right away
		this.clock = setInterval(this.onTick, this.targetTickTime);
		window.requestAnimationFrame(this.onFrame);
	}
}
</script>