import { createStore } from 'vuex'
import { faqCategories } from '../../db.json'

export default createStore({
  state: {
    categories: [],
    view: '',
    id: null,
    answerId: null
  },
  actions: {
    fetchCategories({ commit }) {
      const categories = faqCategories
      commit('SET_CATEGORIES', categories)
    },
    componentView({ commit }, view) {
      commit('changeView', view)
    },
    questionId({ commit }, id) {
      commit('getId', id)
    },
    answerId({ commit }, id) {
      commit('getAnswerId', id)
    }
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    changeView(state, view) {
      state.view = view
    },
    myQuestionId(state, id) {
      state.id = id
    },
    myAnswerId(state, id) {
      state.answerId = id
    }
  },
  getters: {
    $allCategories(state) {
      return state.categories
    },
    $returnView(state) {
      return state.view
    },
    $returnId(state) {
      return state.id
    },
    $returnAnswerId(state) {
      return state.answerId
    }
  }
})
