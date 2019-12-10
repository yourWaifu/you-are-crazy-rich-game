<script lang="ts">
import { Component, Prop, Vue, Mixins } from 'vue-property-decorator';
import { Line, mixins } from 'vue-chartjs';
import { Chart, ChartData, ChartOptions } from 'chart.js';

@Component
export default class LineChart extends Mixins(Line, mixins.reactiveProp) {
	@Prop() options?: ChartOptions;
	mounted() {
		this.renderChart(this.chartData, this.options);
	}
}
</script>