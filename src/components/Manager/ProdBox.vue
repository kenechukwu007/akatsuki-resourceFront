<template>
    <div class="card h-100 w-100 ">
        <div class>
            <img class="card-img-top" :src="product.imageURL" alt="Card image cap" />
        </div>
        <div class="card-body">
            <router-link :to="{name: 'ProductDetail', params:{id: product.id}}">
                <h5 class="card-title">{{product.name}}</h5>
            </router-link>
           
            <p class="card-text">
                {{product.description.substring(0, 50)}}...
            </p>
            
            <!-- <button class="btn btn-secondary">Edit</button> -->
        </div>
    </div> 
</template> 
<script>
    export default {
        name: "ProdBox",
        props:["product"],
        methods:{}
    }

</script>

<style scoped>
    .card-img-top {
        object-fit: cover;
    }
</style>