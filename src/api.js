import axios from 'axios'

export default {
  apiMarvel: {
    fetchAll: (number) =>
      axios
        .get(`/marvel api here? id=${number}`)
        .then(res => res.data),
  }
}
