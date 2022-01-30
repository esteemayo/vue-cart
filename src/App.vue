<template>
  <Loading v-if="loading" />
  <main v-else>
    <Navbar />
    <CartContainer />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import Navbar from '@/components/Navbar.vue';
import Loading from '@/components/Loading.vue';
import CartContainer from '@/components/CartContainer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Loading,
    CartContainer,
  },
  computed: mapGetters(['loading']),
};
</script>

<style></style>
