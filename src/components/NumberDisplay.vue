<template>
	<span class="number-display">
		{{value}}
	</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NumberDisplay extends Vue {
	@Prop() private value!: string;
}
</script>

<style scoped>
span {
	font-family: monospace;
}
</style>