<template>
    <div class="container">
        <div class="row" >
            <div class="col-12 text-center" >
                <h4 class="pt-3">{{category.categoryName}}</h4>
            </div>
        </div>

        <div class="row">
            <div v-for="product of category.products" :key="product.id" 
            class="col-md-5 col-xl-4 col-11 pt-3 justify-content-around d-flex">
                <ProdBox :product="product" />
            </div>
        </div>
    </div>

</template>

<script>
import ProdBox from '@/components/Manager/ProdBox.vue';



export default{
    components: { ProdBox },

    data() {
        return {
            id: null,
            category: {}
            
        }
    },

    props: ["categories"],

    mounted() {
        console.log("mounted")
        this.id = this.$route.params.id
        this.category = this.categories.find(category => category.id ==  this.id)
    }

   
}
</script>