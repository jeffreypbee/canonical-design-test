<template>
  <div class="card">
    <div class="purple"></div>
    <div class="card-content">
      <div>
        <div>CATEGORY</div>
        <hr>
        <img class="p-card__image" :src="post.featured_media" alt="">
        <h4><a :href="post.link" target="_blank">{{ post.title.rendered }}</a></h4>
        
      </div>
      
      <div class="article">
        <div class="italic">By <a href="" target="_blank">{{ post._embedded.author[0].name }}</a> on {{ date }}</div>
        <hr>
        <div>Article</div>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
    props: ['post'],
    computed: {
      date() {
        const date = new Date(this.post.date);
        return date.toLocaleDateString('en-UK', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
      }
    }
}
</script>

<style>
.card {
  border-radius: 3px 3px 0 0;
  box-shadow: 0 1px 5px #0b0b8655;
  padding-top: 0;  
}

.card-content {
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.purple {
  height: 3px;
  border-radius: 3px 3px 0 0;
  background-color: rgb(153, 112, 153);
  width: 100%;
}

.italic {
  font-style: italic;
}
</style>