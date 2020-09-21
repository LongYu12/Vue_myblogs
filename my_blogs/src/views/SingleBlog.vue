<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <hr/>
    <p>{{blog.body}}</p>
  </div>
</template>

<script>
  export default {
    name: "SingleBlog",
    data(){
      return {
        id:null,
        blog:{}
      }
    },
    created() {
      // this.$http.get('/posts/json' + this.id)
      this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id )
      .then(res => {
        this.blog = res.body;
      })
    }
  }

</script>

<style scoped>
#single-blog{
  max-width: 650px;
  margin: 0 auto;
  padding: 40px;
  background: #eee;
  box-sizing: border-box;
  font-size: 15px;
  border: 1px solid #aaa;
  min-height: 750px;
}
</style>
