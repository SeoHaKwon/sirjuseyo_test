import Vue from 'vue'
import Vuex from 'vuex'
import { getAPIData, postAPIData, delAPIData } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async GETONEDATA (context, payload) {
      let param = {
        url: 'contacts',
        data: payload
      }
      const res = await getAPIData(param)
      return res.data
    },
    async DELONEDATA (context, payload) {
      let param = {
        url: 'contacts',
        data: payload
      }
      const res = await delAPIData(param)
      return res.data
    },
    async ADDDATA (context, payload) {
      let param = {
        url: 'contacts',
        data: {
          name: payload.name,
          tel: payload.tel,
          address: payload.address
        }
      }
      const res = await postAPIData(param)
      return res.data
    }
  }
})
