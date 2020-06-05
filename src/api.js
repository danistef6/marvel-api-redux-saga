import axios from 'axios'
import { publicKey, hash, ts } from './config';
 
export default {
  apiMarvel: {
    fetchAll: (payload) =>
      axios.get('https://gateway.marvel.com/v1/public/characters', {
          params: {
            'ts': ts,
            'apikey': publicKey,
            'hash': hash,
            'offset': 0,
            'limit': 50,
            'nameStartsWith':payload
          }
        })
        .then(res => ({ result : res.data.data.results})),
    fetchCharacter: (payload) =>
        axios.get('https://gateway.marvel.com/v1/public/characters', {
            params: {
              'ts': ts,
              'apikey': publicKey,
              'hash': hash,
              'id':payload
            }
          })
          .then(res => ({ result : res.data.data.results}))  
  }
}
  