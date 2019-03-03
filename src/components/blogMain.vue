<template>
  <div class="main">
    <h1>{{ msg }}</h1> 
  </div>
</template>

<script>
export default {
  name: 'blogMain',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 div{
    padding: 0;
    margin: 0;
  }
  .main{

    background: url('../common/image/002.jpg') center center no-repeat;
    background-attachment: fixed;
		background-size: 100% 100%;
  }
</style>
