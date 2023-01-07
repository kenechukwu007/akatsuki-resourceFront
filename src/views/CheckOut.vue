<template>
    <div class="text-center">
        <h2>You will be redirected to a payment page</h2>
        <div class="alert alert-primary">
            you can use the following to pay 4242 4242 4242 4242 and 09/24 and a random cvv(3 digits)
        </div>
        <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="pulishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v =>loading = v"
        />
        <button class="checkout_button" @click="submit">Pay now</button>
    </div>
</template>

<script>
import {StripeCheckout} from '@vue-stripe/vue-stripe'

export default {

    name: 'CheckOut',
    components: {
        StripeCheckout
    }, 

   

    data() {
        this.pulishableKey="pk_test_51MMCcvC1TKJ2ig5QqNw97Tz1WpwnuU2Lukm41QCUMRSA1FKUH5sgsqXiZ3TNX38xqmFih6gSoxnAnTeOqsQ7qbPP00RikiYL2u"
        return{
            loading: false,
            lineItems: [
                {
                    price: 'price_1MNOk5C1TKJ2ig5QCn6vBq1o',
                    quantity: 1
                },
                {
                    price: 'price_1MNOilC1TKJ2ig5QDfb4JRkn',
                    quantity: 1
                },
                {
                    price: 'price_1MNOaYC1TKJ2ig5QgJKu4xOs',
                    quantity: 1
                },
                {
                    price: 'price_1MNJptC1TKJ2ig5QRToqlQTR',
                    quantity: 1
                }
            ],

            successURL: 'https://akatsuki-gamez.netlify.app/payment/success',

            cancelURL: 'https://akatsuki-gamez.netlify.app/payment/failed'
        }
    },

    methods: {
        submit(){
            this.$refs.checkoutRef.redirectToCheckout();
        }
           

    }, 

    mounted(){
        
    }

}

</script>