<template>

  <div  id="show-blog" v-theme:column="'narrow'">
    <div class="shows">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索...">
      <div class="single-blog" v-for="blog in filteredBlogs">
        <router-link :to="'/blog/' + blog.id">
          <h3 v-rainbow>{{blog.id}}、{{ blog.title }}</h3>
          <h5>作者： {{ blogs.id }}</h5>
          <p>{{ blog.body | to-short}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "showBlog",

    data() {
      return {
         blogs:[],
        search:''
      }
    },
    created() {
      this.$http.get ('/posts.json')
      .then(res => {
        console.log('now：' + res.body.slice(0, 10));
        this.blogs = res.body.slice(0, 10)

      })
    },
    computed:{
      filteredBlogs:function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        })
      }
    },
    filters:{
      // 'to-appercase':(value) => {
      //     return value.toUpperCase()
      // },
      toShort (value) {
        return value.slice(0, 50) + '.......'
      }
    }
  }
</script>

<style scoped>
  .shows{
    max-width: 570px;
    min-height: 700px;
    margin: 0 auto;
    padding: 10px 50px;
    background: rgba(27,167,132,1);
    /*background: rgba(27,167,132,0.1);*/
    /*box-shadow: 0px 0px 16px #f1c4cd;*/
  }

  #show-blog a{
     color: #444444;
    text-decoration: none;
  }

.single-blog{
  box-sizing: border-box;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  -moz-box-shadow: 5px 5px 5px #888888; /* 老的 Firefox */
  box-shadow: 5px 5px 3px 5px  #888888;
  background: #f1c4cd;

}

.single-blog:hover{
  box-shadow: 0px 0px 1px 1px #888888,3px 3px 3px #888888;;
  cursor: pointer;
}

input{
  margin-bottom: 20px;
  background-clip: initial;
  background:#aaaaaa;
  border-radius: 5px;
  height: 40px;
  width: auto;
  padding: 0 8px 0 8px;
  font-size: 15px;
  border: 1px solid #aaaaaa;
}

input:hover{
  border: 1px solid #eeeeee;
}
  h5,h3,p{
    padding: 2px;
    margin: 0;
  }
  #show-blog{
    background: rgba(27,167,132,1);
  }
  /*@media screen and (max-width:800px){*/
  /*  .Cal{*/
  /*    display:none;*/
  /*  }*/
  /*}*/
</style>
