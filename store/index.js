import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '~/services/EventService'

Vue.use(Vuex)

const SET_COMMON_DATA = 'SET_COMMON_DATA'
const SET_COUNTRIES_DATA = 'SET_COUNTRIES_DATA'
const SET_MOBILE = 'SET_MOBILE'

const store = () => new Vuex.Store({

  state: {
    commonData: null,
    countriesData: null,
    mobile: undefined,
  },
  actions: {
    async getCommonData({commit}) {
      const {data} = await EventService.getCommonData()
      console.log(data)
      commit(SET_COMMON_DATA, data)
    },
    async getCountriesData({commit}) {
      commit(SET_COUNTRIES_DATA, await EventService.getCountriesData())
    },
  },
  mutations: {
    [SET_COMMON_DATA] (state, payload) {
      state.commonData = payload
    },
    [SET_COUNTRIES_DATA] (state, payload) {
      state.countriesData = payload
    },
    [SET_MOBILE] (state, payload) {
      state.mobile = payload
    },
  }
})

export default store
