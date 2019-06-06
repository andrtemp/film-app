<template>
  <div>
    <Header />
    <div class="container app">
      <!-- отображаем тут компонент, для которого совпадает маршрут -->
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Film from './components/Film.vue'
import Rated from './components/Rated.vue'
import List from './components/List.vue'
import Latest from './components/Latest.vue'
import Header from './components/template/Header.vue'
import Footer from './components/template/Footer.vue'
import Auth from './components/Auth.vue'

export default {
  name: 'app',
  components: {
    Home, Film, Header, Footer, Rated, List, Latest, Auth
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
