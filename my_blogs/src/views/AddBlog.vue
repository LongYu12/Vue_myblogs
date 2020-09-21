<template>
  <div class="add-blog" >
    <h1 class="title">添加博客</h1>
    <form v-if="!submited">
      <label >博客标题</label>
      <input type="text" v-model="blog.title" required >

      <label >博客内容</label>
      <textarea cols="30" rows="10" v-model="blog.content" ></textarea>

      <label >博客内容</label>
      <div id="checkboxes">
        <span >Vue.js</span>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <span >Node.js</span>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <span >Reat.js</span>
        <input type="checkbox" value="Reat.js" v-model="blog.categories">
        <span >Angular.js</span>
        <input type="checkbox" value="Angular.js" v-model="blog.categories">
      </div>

      <label >作者</label>
      <select v-model="blog.author" >
        <option v-for="au in blog.authors"> {{ au }} </option>
      </select>

      <div class="btn-wai">
        <button @click.prevent="post">添加博客</button>
      </div>

    </form>

    <div v-if="submited">
      <h3>你的博客添加成功</h3>
    </div>

    <hr>

    <div id="preview">
      <h3><b>博客总览</b></h3>
      <p><b>博客标题：</b> {{ blog.title }}</p>
      <p><b>博客内容：</b></p>
      <p> {{ blog.content }} </p>
      <p>博客标签：</p>
      <ul>
      <li v-for="item in blog.categories">
        {{ item }}
      </li>
      </ul>
      <p><b>作者：</b> {{ blog.author }}</p>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'add-blog',
    props: {
      msg: String
    },
    data(){
      return {
        blog:{
          title:'',
          content:"",
          categories:[

          ],
          authors:[
              "LongYu",
              '罗龙飞'
          ],
          author:''
        },
        submited:false
      }
    },
    methods:{
      post:function () {
        this.$http.post("https://jsonplaceholder.typicode.com/post",{
          blog:this.blog
        }).then( res => {
          if (this.blog.title.length) this.submited = true
          else alert('存在没有填写部分')
        })

        //http://jsonplaceholder.typicode.com/posts
        /*this.$http.post("http://33r3f20996.wicp.vip",{
          title:this.blog.title,
          body:this.blog.content,
          userId:1
        }).then( res => {
          if (this.blog.title.length) this.submited = true
          else alert('存在没有填写部分')
        })*/
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-blog *{
    box-sizing: border-box;
    font-size: 15px;
  }

  .add-blog{
    margin: 0 auto;
    max-width: 600px;
    padding: 20px;
    background: rgba(27,167,132,0.7);
  }

  label{
    display: block;
    margin: 10px 0 10px;
    background: rgba(235,160,179,0.7);
    padding: 5px 0px 5px 5px;
    width: 75px;
    border-radius: 4px;

  }

  input,label,textarea,select,option{
    -moz-box-shadow: 10px 10px 5px #888888; /* 老的 Firefox */
    box-shadow: 5px 5px 5px #888888;
  }

  input[type='text'],textarea,select,option{
    display: block;
    width: 100%;
    padding: 0px;
    border-radius: 8px;
  }

  textarea{
    padding: 10px;
    height: 200px;
    width: 550px;
  }

  span{
    font-size: 20px;
    color: white;
    padding-left: 10px;
  }
  input[type='text'],select{
    padding: 0px;
    height: 30px;
  }

  input[type='text']{
    width: 300px;
  }

  select{
    width: 100px;
  }

  #checkboxes label{
    display: inline-block;
  }

  #checkboxes{
    display: inline-block;
    margin-right: 10px;
  }

  .btn-wai{
    width: 93px;
    height: 43px;
    margin: 30px 0;
    padding-left: 15px;
  }

  button{
    margin: 1.5px;
    background: rgba(166,27,41,1);
    color: white;
    border: 0;
    border-radius: 4px;
    font-size: 15px;
    cursor: pointer;
    width: 90px;
    height: 40px;
  }

  button:hover{
    margin: 0;
    background: rgba(166,27,41,0.9);
    font-size: 17px;
    width: 93px;
    height: 43px;

  }

  .title,.btn-wai{
    margin-right:  39%;
    margin-left: 39%;
  }

  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0 ;
  }

  h3{
    margin-top: 10px;
  }
</style>
