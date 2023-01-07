
<template>
  
  
  <div id="homeview">
    <div id="background-con" class="page-holder bg-cover">

      <div class="container py-5">
        <header class="text-black py-4">
          <h2 class="mb-4 rounded" id="welcome-text">Welcome to Akatsuki gamez</h2>
        <p class="lead mb-0 bg-dark p-1 rounded" > 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          
        </p>
        </header>
       
      </div>
      <br/>
   
    </div>
    <div class="container">
        <div class ="row">
          <div class="col-11 text-center">
            <h3 class="pt-4">All categories</h3>
          </div>
        </div>
        <div class="row">
          <div v-for="i in this.category_length" :key="i" class="col-md-6 col-xl-6 col-12 pt-4 justify-content-around d-flex">
            <CateBox  :category="categories[i-1]"></CateBox>
          </div>
        </div>
    </div>

    <hr>

    <div class="container">
        <div class ="row">
          <div class="col-11 text-center">
            <h3 class="pt-4">All Products</h3>
          </div>
        </div>
        <div class="row">
          <div v-for="i in this.product_length" :key="i" class="col-md-6 col-xl-6 col-12 pt-4 justify-content-around d-flex">
            <ProdBox  :product="products[i-1]"></ProdBox>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import CateBox from '../components/Manager/CateBox.vue';
import ProdBox from '../components/Manager/ProdBox.vue';

export default {
  //name: 'HomeView',
  components: { CateBox, ProdBox },
  props: ["categories", "products"],

  data() {

      return {
        category_length: 0,
        product_length: 0
        
        
    }
     
  },

  mounted() {
    this.category_length = Math.min(6, this.categories.length);
    this.product_length = Math.min(10, this.products.length);
  }

}
</script>

<style scoped>
  .page-holder{
    min-height: 90vh;
  }
 

  #background-con {
    background: url("../../public/akalogo.png");
  }
  .bg-cover {
    background-size: cover !important;
  }
  #welcome-text{
    font-weight: 500;
    text-align: center;
    text-decoration-color: aqua;
  }

  #content {
    opacity: 0.8;
  }
</style>
