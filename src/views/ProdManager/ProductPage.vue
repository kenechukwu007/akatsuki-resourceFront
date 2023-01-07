
<template>
    <div class="container">
        <div class="row ">
            <div class="col-12 text-center">

                <h5>All Products</h5>
                 <router-link :to="{name: 'CreateProduct'}">
                    <button class="btn btn-secondary">Create Product</button>
                </router-link>
            </div>
            
        </div>
        <div class="row">
            <div v-for="product of products" :key="product.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex" >
               <ProdBox :product="product"/>
            </div>
        </div>
    </div>
</template>
<script>

import ProdBox from '../../components/Manager/ProdBox.vue'
export default {
    name: "ProductPage",
    components: {ProdBox},
    props: ["products"]
    
}
</script>

<style>

</style>