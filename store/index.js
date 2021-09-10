export const state = () => ({
  loading: false,
  allProducts: [],
  categories: [],
  category: [],
  saleHome: [],
  categoryActuel: 'Sweats',
  featuredProducts: [],
  menProducts: [],
  womenProducts: [],
  cartItems: [],
})
export const getters = {
  /* 
    return items from store
  */
  allProducts: (state) => state.allProducts,
  featuredProducts: (state) => state.featuredProducts,
  menProducts: (state) => state.menProducts,
  womenProducts: (state) => state.womenProducts,
  getCart: (state) => state.cartItems,
  getCartTotal: (state) =>
    state.cartItems.length < 1
      ? '0'
      : state.cartItems
          .map((el) => el.price * el.quantity)
          .reduce((a, b) => a + b),
}
export const actions = {
  async addItemToCart({ commit }, cartItem) {
    await commit('setCartItem', cartItem)
  },
  async deleteCartItem({ commit }, id) {
    await commit('removeCartItem', id)
  },
}
export const mutations = {
  setLoading(state) { state.loading = !state.loading },
  setProducts: (state, products) => (state.allProducts = products),
  setCategories: (state, categories) => (state.categories = categories),
  setCategory: (state, category) => (state.category = category),
  setSaleHome: (state, saleHome) => (state.saleHome = saleHome),
  setNewHome: (state, newHome) => (state.newHome = newHome),
  setCategoryActuel: (state, categoryActuel) => (state.categoryActuel = categoryActuel),
  setFeaturedProducts: (state, products) => (state.featuredProducts = products),
  setMenProducts: (state, products) => (state.menProducts = products),
  setWomenProducts: (state, products) => (state.womenProducts = products),
  setCartItem: (state, item) => state.cartItems.push(item),
  removeCartItem: (state, id) =>
    state.cartItems.splice(
      state.cartItems.findIndex((el) => el.id === id),
      1
    ),
}