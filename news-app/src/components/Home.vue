<template>

  <b-container class="my-4">
    <h1 class="text-center text-success font-weight-bold">NEWS APP</h1>
    <!-- Filters -->
    <div class="mb-4">
      <b-row>
         <b-input-group prepend="Filter by source" class="mt-3 col-12 col-sm-6">
            <b-form-input v-model="source" @keyup.enter="bySource"></b-form-input>
            <b-input-group-append>
              <b-button v-on:click="bySource" variant="primary">Search</b-button>
            </b-input-group-append>
        </b-input-group>

        <b-input-group prepend="Filter by title" class="mt-3 col-12 col-sm-6">
            <b-form-input v-model="title" @keyup.enter="byTitle"></b-form-input>
            <b-input-group-append>
              <b-button v-on:click="byTitle" variant="primary">Search</b-button>
            </b-input-group-append>
        </b-input-group>

        <div class="col-md-12 mt-2 text-center">
        <b-button v-on:click="byTitle" variant="danger">Reset</b-button>
        </div>

      </b-row>
       
    </div>

    <!-- Scroll Button  -->
    <b-icon  id="topBtn" icon="arrow-up" animation="cylon-vertical" font-scale="2" class="text-dark bg-danger" v-on:click="goTop"></b-icon>

    <!-- Cards -->
    <main>

      <div v-for="(item, index) in news" :key="index" class="py-3 cardHover text-center">
        <b-card bg-variant="dark" no-body class="text-white" data-aos="fade-right" data-aos-delay="70">
          <a :href="item.url" class="text-decoration-none">
            <b-row no-gutters>
              <b-col md="12">
                <b-card-img :src="item.urlToImage" alt="image.png"></b-card-img>
              </b-col>
              <b-col md="12">
                <b-card-body class="text-success" :title="item.title" :sub-title="item.source.name + ' | ' + 'By' + ' ' + item.author">
                  <b-card-text class="text-white">
                    {{item.content}}
                  </b-card-text>
                  <b-button :href="item.url" variant="primary" class="text-white"
                    >Read More
                  </b-button>
                </b-card-body>
              </b-col>
            </b-row>
          </a>
            
        </b-card>
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
      let source = this.news.filter(p => this.source.toLowerCase() === p.source.name.toLowerCase());
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
