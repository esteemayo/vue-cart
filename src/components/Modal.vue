<template>
  <aside className="modal-container">
    <div className="modal">
      <h4>remove all items from your shopping cart?</h4>
      <div className="btn-container">
        <button
          type="button"
          className="btn confirm-btn"
          @click="
            clearCart();
            closeModal();
          "
        >
          confirm
        </button>
        <button type="button" className="btn clear-btn" @click="closeModal">
          cancel
        </button>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Modal',
  methods: mapMutations(['closeModal', 'clearCart']),
};
</script>

<style></style>
