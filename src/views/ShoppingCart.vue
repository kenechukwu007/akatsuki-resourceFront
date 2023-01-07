<template>
    <div class="container">
        <div class="row">
            <div class="col-10 text-center ">
                <h2 class="pt-4">Shopping Cart</h2>
            </div>

            <div v-for="item in itemsDtoList" :key="item.id" class="row mt-2">
                <div class="col-3"></div>
                <div class="col-md-2">
                    <img :src="item.product1.imageURL" alt="100" class="w-100 embed-responsive" style="object-fit: cover" />
                </div>

                <div class="col-md-4 px-4">
                    <div class="card-block px-2">
                        <h6 class="card-title font-weight-bold">{{ item.product1.name }}</h6>
                        <p class="mb-1 font-weight-bold" id="price">${{ item.product1.price }} per item</p>
                        <p class="mb-1">Volume:{{ item.volume }}</p>
                        <p class="mb-1">Total:<span class=font-weight-bold>${{ item.product1.price * item.volume }}</span></p>
                        <br/>
                        <a href="#" class="text-center" @click="removeItem(item.id)">Remove from cart</a>
                    </div>
                </div>

            </div>

            <div class="total-cost pt-2 text-right">
                <h4>Total: ${{ totalPrice }}</h4>
                <button class="btn btn-primary" @click="placeOrder">Place Order</button>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default{

    data() {
        return{
            itemsDtoList: [],
            token: null,
            totalPrice: 0
        }
    },

    props: ["homeUrl"],
    methods: {
        getCartItems(){
            axios.get(`${this.homeUrl}/shoppingcart/getItem?token=${this.token}`)
            .then(res => {
                const field = res.data;
                this.itemsDtoList = field.itemsDtoList;
                this.totalPrice = field.totalPrice;
            })
            .catch(err => console.log('err', err))
        },

        removeItem(itemId){
            axios.delete(`${this.homeUrl}/shoppingcart/delete/${itemId}/?token=${this.token}`)
            .then(res =>{
                if(res.status == 200){
                    this.$router.go(0);
                }
            }).catch(err => console.log('err', err))

        },

        placeOrder(){
            this.$router.push({name: 'CheckOut'})

        }
    },


    mounted(){
        this.token = localStorage.getItem("token")
        this.getCartItems();
    }

}

</script>