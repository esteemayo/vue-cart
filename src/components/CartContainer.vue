<template>
  <section v-if="cart.length === 0" class="cart">
    <header>
      <h2>Your Bag</h2>
      <h4 class="empty-cart">is current empty</h4>
    </header>
  </section>

  <section v-else class="cart">
    <header>
      <h2>Your bag</h2>
    </header>
    <div>
      <CartItem v-for="item in cart" :key="item.id" :item="item" />
    </div>
    <footer>
      <hr />
      <div class="cart-total">
        <h4>
          Total <span>${{ total }}</span>
        </h4>
      </div>
      <button class="btn clear-btn" @click="clearCart">Clear cart</button>
    </footer>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import CartItem from './CartItem.vue';

export default {
  name: 'CartContainer',
  components: { CartItem },
  computed: mapGetters(['cart', 'total']),
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['clearCart']),
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style></style>
