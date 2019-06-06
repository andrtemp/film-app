<template>
  <div class="hello text-center">
    <div class="jumbotron">
      <img class="main-image" alt="Vue" src="../assets/logo.png">
      <div class="description">
        <h2>Создано при помощи <a href="https://vuejs.org/">VueJS</a></h2>
      </div>
    </div>
    <div class="jumbotron">
      <h2>{{name}}</h2>
      <p>{{sex}}</p>
      <span>{{age}}</span>
      <p>
        <a class="btn btn-danger btn-sm" rel="publisher"
           href="https://plus.google.com/+ahmshahnuralam">
          Google
        </a>
        <a class="btn btn-primary btn-sm" rel="publisher"
           href="https://plus.google.com/shahnuralam">
          Facebook
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function(){
    return {
      name: 'Анна Иванова',
      sex: 'Женский',
      age: '20 лет'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
