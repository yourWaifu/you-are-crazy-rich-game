<template>
  <div id="app">
    <h1>You are CRazY Rich!!</h1>
    <h4>Spend all your money!</h4>
    <form action="game.html">
      <input type="submit" value="PLAy noW" />
    </form>
    <a href="nnn.html">Play prototype</a>
    <a href="">View on GitHub</a>
    <a href="">Sponsor</a>
    This is just a school project to show off what I can do.
    <h2>About</h2>
    After spending lots of your money, you've destroyed some other's county's economy and now they are after you. You only have a month to spend all your money somehow.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './../../components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
