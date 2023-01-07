<template>
  <TheNavbar :count="count" @resetCount = "resetCount" />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view  :homeUrl="homeUrl"
    :categories="categories"
    :products="products"
    @fetchData = "fetchData"
    
    >
  </router-view>
  <TheFooter />
</template>

<script>
import axios from 'axios';
import TheFooter from './components/TheFooter.vue';
import TheNavbar from './components/TheNavbar.vue';

export default {
  components: {TheFooter, TheNavbar},

  data() {
    return{
      homeUrl: "https://akatsuki-resource.azurewebsites.net",
      products: [],
      categories: [],
      count: 0
    }
   
  },

  methods: {
      async fetchData(){
         await axios.get(this.homeUrl + "/category/list")
         .then(res=> {
            this.categories =res.data
         }).catch((err) => console.log('err', err));

         await axios.get(this.homeUrl + "/product/")
         .then(res=> {
            this.products =res.data
         }).catch((err) => console.log('err', err));

         if(this.token){
          axios.get(`${this.homeUrl}/shoppingcart/getItem?token=${this.token}`)
            .then(res => {
                const field = res.data;
                this.count = field.itemsDtoList.length;
                
            })
            .catch(err => console.log('err', err))
         }
      },

      resetCount(){
        this.count = 0;

      }
    },

  mounted(){
    this.token = localStorage.getItem('token');
    this.fetchData();
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
