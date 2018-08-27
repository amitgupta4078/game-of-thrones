import Vue from 'vue'
import Vuex from 'vuex'

import httpService from '@/services/http-common.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	books: [],
    loading: false,
  },
  getters: {
    allBooks (state) {
      return state.books;
    },
    showLoading (state) {
      return state.loading;
    }
  },
  mutations: {
    setLoading (state, status) {
      console.log('mutate: ', status)
      state.loading = status;
    },
    setData (state, data) {
      state.books = data;
    }
  },
  actions: {
  	getAllBooks ({ state, getters, commit, dispatch }) {
  		console.log('Inside action')
      if (!state.loading) {
        commit('setLoading', true);
        httpService.getBooks().then(response => {
          response.data = response.data.sort(function(a, b) {
              return a.name > b.name;
          });
          commit('setData', response.data);
        })
        .catch(error => {
          console.log('Error occured while fetching the books list: ', error);
        })
        .finally(() => {
          commit('setLoading', false);
        });
      }
  	}
  }
});
