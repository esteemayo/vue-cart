<template>
  <Loading v-if="loading" />
  <main v-else>
    <modal v-if="isOpen" />
    <navbar />
    <cart-container />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import Modal from '@/components/Modal.vue';
import Navbar from '@/components/Navbar.vue';
import Loading from '@/components/Loading.vue';
import CartContainer from '@/components/CartContainer.vue';

export default {
  name: 'App',
  components: {
    Modal,
    Navbar,
    Loading,
    CartContainer,
  },
  computed: mapGetters(['loading', 'isOpen']),
};
</script>

<style></style>
