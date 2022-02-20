<template>

  <b-container class="my-4">
    <h1 class="text-center text-success font-weight-bold">News App</h1>
    <!-- Filters -->
    <div class="mb-3">
        <b-input-group prepend="Filter by source" class="mt-3">
            <b-form-input v-model="source" @keyup.enter="bySource"></b-form-input>
            <b-input-group-append>
              <b-button v-on:click="bySource" variant="info">Button</b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group prepend="Filter by title" class="mt-3">
            <b-form-input v-model="title" @keyup.enter="byTitle"></b-form-input>
            <b-input-group-append>
              <b-button v-on:click="byTitle" variant="info">Button</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>

    <!-- Scroll Button  -->
    <b-icon  id="topBtn" icon="arrow-up" animation="cylon-vertical" font-scale="2" class="text-dark bg-danger" v-on:click="goTop"></b-icon>

    <!-- Cards -->
    <main>
      <div v-for="(item, index) in news" :key="index" class="py-3 cardHover">

        <a :href="item.url">
          <b-card
          data-aos="fade-right"
          data-aos-delay="70"
          overlay
          :img-src="item.urlToImage"
          img-alt="image.png"
          text-variant="white"
          :title="item.source.name "
          :sub-title="'By' + ' ' + item.author"
        >
        <b-button :href="item.url" variant="primary" class="text-white float-right"
            >Read More
        </b-button>
          <b-card-text class="mt-5">
            {{ item.content }}
          </b-card-text>
        </b-card>
        </a>
        
      </div>
      
    </main> 
  
  </b-container>

</template>

<script>
import axios from "axios";

export default {
  name: "Home",

  data() {
    return {
      news: [],
      source: "",
      title: "",
    };
  },

  async created() {
    window.addEventListener('scroll', this.topScroll);

    try {
      const res = await axios.get("http://localhost:3000/news");
      this.news = res.data;
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    topScroll() {
      let topBtn = document.querySelector('#topBtn')
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          topBtn.style.display = "block";
          } else {
          topBtn.style.display = "none";
        }
    }, 

    goTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    },

    async byTitle() {
      const res = await axios.get("http://localhost:3000/news/" + this.title);
      this.news = res.data;
      this.title = "";
    },

    bySource() {
      let source = this.news.filter(p => this.source === p.source.name);
      this.news = source;
      this.source = "";
    }
  },

};
</script>


<style scoped>
  .cardHover {
    transition: 0.3s ease-in;

  }
  .cardHover:hover {
    transform: scale(1.075);
    transition: 0.3s ease-in;
  }
  #topBtn {
    display: none;
    position: fixed; 
    z-index: 99;
    bottom: 20px; 
    right: 30px; 
    cursor: pointer; 
    border-radius: 10px; 
  }
</style>
