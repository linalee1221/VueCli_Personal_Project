import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// 모듈 추가
// import products from './modules/products.js';

Vue.use(Vuex)

export default new Vuex.Store({
  // modules: {
  //   products
  // },

  state: {
    products: []
  },
  mutations: {
    'SET_STORE'(state, products) {
      state.products = products;
    }
  },
  actions: {
    initStore: (context) => {
      axios.get('/products.json')
        .then((response) => {
          console.log(response.data.products);
          context.commit('SET_STORE', response.data.products);
        });
    }
  },
  getters: {
    products: state => state.products
  }

})
