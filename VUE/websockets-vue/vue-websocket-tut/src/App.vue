<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: function () {
    return {
      connection: null,
    };
  },
  created: function () {
    console.log("Starting Connection to Websocket Server");
    this.connection = new WebSocket("wss://echo.websocket.org");

    this.connection.onopen = function (event) {
      console.log(event);
      console.log("Succesfully connected to the echo WebSocket Server");
    };

    this.connection.onmessage = function (event) {
      console.log(event);
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
