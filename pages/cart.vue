<template>
  <div>
    <div class="w-4/5 sm:w-1/2 mx-auto">
      <h1 class="m-5 font-bold text-lg">Your Cart</h1>
    </div>
    <div
      v-for="item in getCart"
      :key="item.id"
      class="w-4/5 sm:w-1/2 flex items-center space-x-3 mx-auto shadow-lg m-5 p-3"
    >
      <div>
        <img class="h-24" :src="`http://esteve.xyz:1337${item.img[0].url}`" alt="" />
      </div>
      <div>
        <p>
          {{ item.name }}
        </p>
        <p>
          {{ item.quantity | formatQuantity }}
        </p>
        <button class="button--delete" @click="deleteCartItem(item.id)">
          Delete
        </button>
      </div>
    </div>
    <div class="w-4/5 sm:w-1/2 mb-2 mx-auto">
      <p>
        <span>Total: </span> {{ formatCartTotal(getCartTotal) | formatPrice }}
      </p>
      <button
        v-show="getCartTotal > 0"
        class="button--green mx-auto"
        @click="handleSubmit"
      >
        checkout
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import {loadStripe} from '@stripe/stripe-js';

export default {
  filters: {
    formatPrice(price) {
      return `${price}€`
    },
    formatQuantity(num) {
      const qtyNum = num === 1 ? `${num} unit` : `${num} units`
      return qtyNum
    },
  },
  data() {
    return {
      dataItems: {},
      session: {},
      stripe: {},
      stripePromise: {},
    }
  },
  computed: {
    ...mapGetters(['getCart', 'getCartTotal']),
  },
  mounted() {
    this.displayMessage()
  },

methods: {
    async handleSubmit(e) {
      e.preventDefault()
      const response = await this.$http.$post(
        `http://esteve.xyz:1337/orders`,
        {
          cartDetail: this.getCart,
          cartTotal: this.getCartTotal.toFixed(2),
        }
      )
    //   console.log('Please wait...')
      // stripe logic
      const stripePromise = loadStripe(
       'pk_test_51JY8tdH80gByby7vYCS7aRY5Bf0caoRQcAHFi8ehFz4ThYilYNmY4DJMg2o8pNAP88cg2F2GH3vwkfNyfff1b66m00tmY18ikY'
      )
      const session = response
      const stripe = await stripePromise
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      })
    //   console.log(response)
      if (result.error) {
        this.$nuxt.context.error(result.error.message)
      }
    },
    // using vue-swal to display messages
    displayMessage() {
      if (this.$route.query.success) {
        // console.log('Order placed !')
      } else if (this.$route.query.canceled) {
        // console.log('Order canceled !')
      }
    },
    formatCartTotal(num) {
      if (num > 0) {
        return num.toFixed(2)
      } else {
        return num
      }
    },
    ...mapActions(['deleteCartItem']),
  }
}
</script>
<style scoped></style>