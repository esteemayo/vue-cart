<template>
  <article class="cart-item">
    <img :src="item.img" :alt="item.title" />
    <div>
      <h4>{{ item.title }}</h4>
      <h4 class="item-price">${{ item.price }}</h4>
      <button class="remove-btn" @click="remove(item.id)">Remove</button>
    </div>
    <div>
      <button class="amount-btn" @click="increment(item.id)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"
          />
        </svg>
      </button>
      <p class="amount">{{ item.amount }}</p>
      <button class="amount-btn" @click="decrement(item.id)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </button>
    </div>
  </article>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: mapMutations(['remove', 'increment', 'decrement']),
};
</script>

<style></style>
