<template>
    <div class="container">
        <div class="row pt-4">
            <div class="col-md-1"></div>
            <!--image-->
            <div class="col-md-3 col-12">
                <img :src="product.imageURL" class="img-fluid">
            </div>
            <!--information-->
            <div class="col-md-5 col-11 pt-4 pt-md-0">
                <h3><strong>{{ product.name }}</strong></h3>
                <h4>{{ category.categoryName }}</h4>
                <p>{{ product.description }}</p>
                <star-rating :star-size="40" class="p-0 col-4">Rate Seller here</star-rating>

                <div class="d-flex justify-content-around">
                    <div class="input-group col-md-5 p-1">
                        <div class="input-group-prepend">
                            <span class="input-group-text">Volume</span>
                        </div>
                        <input type="number" class="form-control" v-model="volume"/>
                    </div>
                    <div class="input-group col-md-3 p-0 col-4">
                        <button class="btn btn-primary" @click=" addItemsToCart">Add to cart</button>
                    </div>
                </div>

                <h4 class="font-weight-bold">${{ product.price }}</h4>
                <div class="features pt-4">
                    <h4><Strong>Specifications & Info</Strong></h4>
                    <ul>
                        <li>Aliquam consequat libero est, id condimentum nunc hendrerit id.</li>
                        <li>Nam dignissim lorem nec enim tristique imperdiet. </li>
                        <li>Praesent mattis, leo non lacinia volutpat, enim </li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                        <li>non feugiat quis, elementum at neque. Sed aliquet, ante </li>
                        <li>non feugiat quis, elementum at neque. Sed aliquet, ante </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import swal from "sweetalert";
import axios from "axios";
import StarRating from 'vue-star-rating';

export default{

    data(){
        return{
            id: null,
            product: {},
            category: {},
            volume: 1,
            token: null
        }
    },

    props: ["homeUrl", "products", "categories"],
    components: {
        StarRating
    },

    methods: {
        addItemsToCart(productid) {
            if(!this.token) {

                swal({
                    text: "you must have an account to add items to cart",
                    icon: "error"

                });
                return;

            }
            console.log(this.id)
            console.log(this.productid)
            console.log(this.volume)
            axios.post(`${this.homeUrl}/shoppingcart/addItem?token=${this.token}`, {
                productid: this.id,
                volume: this.volume

            }, {"Content-Type" : "application/json"}).then((res) =>{
                if(res.status == 201) {
                    swal({
                        text: "Item added to the cart",
                        icon: "success"
                    });
                    this.$emit("fetchData");
                }
            }).catch(err => console.log('err', err));

        }

    },

    mounted(){
        this.id = this.$route.params.id;
        this.product = this.products.find(product => product.id == this.id);
        this.category = this.categories.find(category => category.id == this.product.categoryId);
        this.token = localStorage.getItem("token");
    }

}

</script>

<style>
.category {
        font-weight: 300;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

</style>