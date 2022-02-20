<template>
  <header>

    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="http://localhost:8080/news"><img src="../assets/img/news-logo.png" alt="news-logo.png" width="10%" ></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>


        <b-navbar-nav class="ml-auto">
          <b-nav-item href="http://localhost:8080/news" class="border-bottom border-danger navbar active">News</b-nav-item>
          <b-nav-item href="#" class="border-bottom border-warning navbar">About Us</b-nav-item>
          <b-nav-item href="#" class="border-bottom border-success navbar">Contact</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
  </b-navbar>

  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
  .navbar {
    margin: 0px 10px;
  }
</style>
