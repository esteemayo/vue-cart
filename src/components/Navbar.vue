<template>
  <nav>
    <div class="nav-center">
      <h3>vueCart</h3>
      <div class="nav-container">
        <cart-icon />
        <div class="amount-container">
          <p class="total-amount">{{ amount }}</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import { CartIcon } from '../icons';

export default {
  name: 'Navbar',
  components: { CartIcon },
  computed: mapGetters(['amount']),
};
</script>

<style></style>
