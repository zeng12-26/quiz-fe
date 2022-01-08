import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    selectedCityInfo: {
      itemTitle: '南京',
      itemId: '025',
    }
  },
  mutations: {
    [types.SELECTEDCITYINFO]: (state, data) => {
      state.selectedCityInfo = data
    }
  },
})

export default store
