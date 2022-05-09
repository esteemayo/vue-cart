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
        <chevron-up />
      </button>
      <p class="amount">{{ item.amount }}</p>
      <button class="amount-btn" @click="decrement(item.id)">
        <chevron-down />
      </button>
    </div>
  </article>
</template>

<script>
import { mapMutations } from 'vuex';
import { ChevronDown, ChevronUp } from '../icons';

export default {
  name: 'CartItem',
  components: {
    ChevronDown,
    ChevronUp,
  },
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
