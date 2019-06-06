<template>
  <div class="hello text-center">
    <div class="jumbotron">
      <img class="main-image" alt="Vue" src="../assets/logo.png">
      <div class="description">
        <h2>Создано при помощи <a href="https://vuejs.org/">VueJS</a></h2>
        <p></p>
      </div>
      <h2></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
