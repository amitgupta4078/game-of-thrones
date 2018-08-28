import Vue from 'vue'
import Vuex from 'vuex'

import httpService from '@/services/http-common.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	allbooks: [],
    loading: false,
    books: []
  },
  getters: {
    books: (state) => {
      return state.books;
    },
    showLoading: (state) => {
      return state.loading;
    }
  },
  mutations: {
    setLoading (state, status) {
      state.loading = status;
    },
    setData (state, data) {
      state.allbooks = data;
      state.books = state.allbooks;
    }
  },
  actions: {
    filterBooks ({state, getters, commit, dispatch}, payload) {
      state.books = state.allbooks.filter((book) => {
       return (book.name.toLowerCase().indexOf(payload.query) !== -1);
      });
    },
  	getAllBooks ({state, getters, commit, dispatch}) {
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
