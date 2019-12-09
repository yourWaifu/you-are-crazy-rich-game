<template>
  <div id="app">
    <h1>No Nut November Sim</h1>
    <h4>{{ message }}</h4>
	<button v-on:click="onNut();">NUT</button>
	<p>Nut count: {{ nutCount }}</p>
	<p>Time til December: {{ timeLeft }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {
	nutCount: number = 100;
	clock: number = 0;
	timeLeft: number = 2629746;
	nutGenRatePreSec: number = 1;
	nutAmmountShotPercentage: number = 0.50;
	hasFailed: boolean = false;
	message: string = "Don't nut for one month";
	onNut(): void {
		this.nutCount = Math.floor(this.nutCount * this.nutAmmountShotPercentage);
		this.hasFailed = true;
		this.message = "You've failed NNN";
	}
	onTick() : void {
		this.nutCount += 1;
		if (!this.hasFailed)
			this.timeLeft -= this.nutGenRatePreSec;
		if (this.timeLeft <= 0)
			this.message = "You've completed NNN!"
	}
	created() : void {
		this.clock = setInterval(this.onTick, 1000);
	}
}
</script>