const state = {
  // json 데이터 가져오기
  products: []
};

const mutations = {
  'SET_STORE'(state, products) {
    state.products = products;
  }
};

// 비동기 함수 호출
const actions = {
  initStore: ({ commit }) => {
    this.$axios.get('/products.json')
      .then((response) => {
        console.log(response.data.products);
        commit('SET_STORE', response.data.products);
      });
  }
};

const getters = {
  products: state => state.products
};

// 모듈 내보내기
export default {
  state,
  getters,
  actions,
  mutations
}
