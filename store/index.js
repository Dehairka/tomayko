export const state = () => ({
    loading: false
  })
  
  export const mutations = {
    setLoading(state) {
      state.loading = !state.loading
    }
  }