import axios from 'axios'

export default (url = null) => {
  if (url) {
    axios.defaults.baseURL = url
  } else {
    delete axios.defaults.baseURL
  }
}
