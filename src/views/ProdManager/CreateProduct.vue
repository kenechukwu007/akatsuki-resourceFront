<template>
    <div class="container">
        <div class="row">
            <div class="col-10 text-center">
                <h3>Create Product</h3>
            </div>
        </div>
        <div class="row">
                <div class="col-3"></div>
                <div class="col-7">
                    <form>
                        <div class="form-group">
                            <label>Category</label>
                            <select class="form-control" v-model="categoryId" required >
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.categoryName}}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Product name</label>
                            <input type="text" class="form-control" v-model="name">
                        </div>
                        <div class="form-group">
                            <label>Product description</label>
                            <input type="text" class="form-control" v-model="description">
                        </div>
                        <div class="form-group">
                            <label>Product image</label>
                            <input type="text" class="form-control" v-model="imageURL">
                        </div>
                        <div class="form-group">
                            <label>Price</label>
                            <input type="number" class="form-control" v-model="price">
                        </div>
                        <button class="btn btn-secondary" @click="createProduct">submit</button>
                    </form>
                </div>
            </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';


export default{

    props: ["homeUrl", "categories"],

    data() {
        return {
            id: null,
            categoryId: null,
            name: null,
            description: null,
            imageURL: null,
            price: null
        }
    },

    methods: {
        createProduct() {
            const newProduct= {
                categoryId: this.categoryId,
                description: this.description,
                name: this.name,
                imageURL: this.imageURL,
                price: this.price
            }

            axios.post(this.homeURL + "product/add", newProduct)
            .then(() =>{
                this.$router.push({name: 'ProductPage'});
                swal({
                    text: " product has been added successfully",
                    icon: "success"
                })
            }).catch((err)=>{
                console.log("err", err)
            } )
           
        }
    }
}
</script>