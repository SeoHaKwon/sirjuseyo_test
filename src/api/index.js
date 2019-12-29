import axios from 'axios'

const config = {
  baseUrl: 'http://sample.bmaster.kro.kr/'
}

async function getAPIData (payload) {
  return axios.get(`${config.baseUrl}${payload.url}/${payload.data}`)
}

async function postAPIData (payload) {
  return axios.post(`${config.baseUrl}${payload.url}`, payload.data)
}

async function delAPIData (payload) {
  return axios.delete(`${config.baseUrl}${payload.url}/${payload.data}`)
}

export { getAPIData, postAPIData, delAPIData }
