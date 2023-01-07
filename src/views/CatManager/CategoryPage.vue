<template>

    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="pt-3">Category list</h2>
                <router-link :to="{name: 'CreateCategory'}">
                    <button class="btn btn-secondary">Create Category</button>
                </router-link>
            </div>
        </div>
        <!-- <div>{{categories}}</div> -->

        <div class="row">
            <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
                <CateBox :category="category"></CateBox>
            </div>
       </div>
    </div>
</template>

<script>

import CateBox from '../../components/Manager/CateBox.vue'

export default {
    name: "CategoryPage",
    props: ["categories"],
    components: {CateBox},

   data() {
        return {
             homeUrl: "https://akatsuki-resource.azurewebsites.net",
            
             
        };
   },
   methods: {
    // async getAllcategory() {
    //     await axios.get(`${this.homeUrl}/category/list`)
    //     .then(res => this.categories = res.data)
    //     .catch(err => console.log(err))
    // }
   },

   mounted() {
     //this.getAllcategory();
   }
   
};

</script>

<style scoped></style>