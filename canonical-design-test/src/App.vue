<template>
  <div id="app">
    
  </div>
</template>

<script>
import postService from './services/PostService.js'

export default {
  data() {
    return {
      posts: []
    }
  },
  created() {
    postService.get().then((response) => {
      this.posts = response.data;
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
