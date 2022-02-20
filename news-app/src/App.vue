<template>
  <div id="app">
    <Header/>

    <Home/>

    <Footer/>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Home,
    Header,
    Footer,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&family=Roboto:wght@100&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  background-color: rgb(75, 72, 72);
}
</style>
