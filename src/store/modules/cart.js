import { getData } from '@/services/cartService';
// import cartItems from '@/data';

const cart = {
  state: () => ({
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
  }),
  mutations: {
    setData(state, payload) {
      state.cart = payload;
    },
    clearCart(state) {
      state.cart = [];
    },
    remove(state, payload) {
      state.cart = state.cart.filter((item) => item.id !== payload);
    },
    increment(state, payload) {
      state.cart = state.cart.map((item) =>
        item.id === payload ? { ...item, amount: item.amount + 1 } : item
      );
    },
    decrement(state, payload) {
      state.cart = state.cart
        .map((item) =>
          item.id === payload ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount !== 0);
    },
    toggleAmount(state, payload, type) {
      let tempCart = state.cart.map((item) => {
        if (item.id === payload) {
          if (type === 'inc') {
            return { ...item, amount: item.amount + 1 };
          }

          if (type === 'dec') {
            return { ...item, amount: item.amount - 1 };
          }
        }
        return item;
      });

      tempCart.filter((item) => item.amount !== 0);
    },
  },
  actions: {
    async fetchData({ commit }) {
      const { data } = await getData();

      commit('setData', data);
    },
  },
  getters: {
    cart: (state) => state.cart,
    loading: (state) => state.loading,
    amount(state) {
      return state.cart
        .map((item) => item.amount)
        .reduce((cartTotal, cartItem) => (cartTotal += cartItem), 0);
    },
    total(state) {
      let total = state.cart.reduce((cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal += itemTotal;
        return cartTotal;
      }, 0);

      total = parseFloat(total.toFixed(2));
      return total;
    },
  },
};

export default cart;
