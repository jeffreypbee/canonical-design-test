<template>
  <div id="app">
    <div class="row" v-if="dataLoaded">
      <PostOverview v-for="(post, index) in posts" :key="`post-${index}`" :post="post" class="col-4" />      
    </div>
    
  </div>
</template>

<script>
import postService from './services/PostService.js'
import PostOverview from './components/PostOverview.vue'

export default {
  components: {
    PostOverview
  }, 
  data() {
    return {
      dataLoaded: false,
      posts: []
    }
  },
  created() {
    postService.get().then((response) => {
      this.posts = response.data;
      this.dataLoaded = true;
    });
  }
}
</script>

<style>
.row {
  margin: 10px;
}

</style>
