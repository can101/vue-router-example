<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link :to="{ name: 'Help' }">Help</router-link>
      <div>
        <button @click="redirect">Redirect</button>
        <button @click="back">Go back</button>
        <button @click="forward">Go forWard</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
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
button {
  border: none;
  margin: 20px 10px 0 0;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease-in;
  font-weight: 600;
  letter-spacing: 1px;
}
button:hover {
  background: #42b983;
  color: #fff;
}
</style>
