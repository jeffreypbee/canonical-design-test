<template>
  <div class="p-card">
    <a :href="post.link" target="_blank">{{ post.title.rendered }}</a>    
    <img class="p-card__image" :src="post.featured_media" alt="">
    By {{ post._embedded.author[0].name }} {{ post.date }}
  </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style>

</style>