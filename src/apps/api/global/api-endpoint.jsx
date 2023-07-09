import CONFIG from './config'

const { BASE_URL, BASE_URL_PREDICTION } = CONFIG

const API_ENDPOINT = {
  AUTHENTICATIONS: `${BASE_URL}/authentications`,
  USERS: `${BASE_URL}/user`,
  USERS_BY_PAGINATE: (page, limit) => `${BASE_URL}/userPaginate?page=${page}&limit=${limit}`,
  USER_BY_ID: (id) => `${BASE_URL}/user/${id}`,
  PREDICTION: `${BASE_URL_PREDICTION}/predict`
}

export default API_ENDPOINT
