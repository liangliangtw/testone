<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/mixin">Mixin</router-link>|
      <router-link to="/review">Review</router-link>|
      <router-link to="/chuanzhi">Chuanzhi</router-link>|
      <router-link to="/crossDomain">跨域</router-link>|
      <router-link to="/">vuex</router-link>|
      <router-link to="/router">router</router-link>|
      <router-link to="/buju">布局</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/multiplechoice">多选</router-link>|
      <router-link to="/git">git操作</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
