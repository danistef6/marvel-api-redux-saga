import en from './en'
import es from './es'
import pt from './pt'
import { flatten } from '../utils/helpers'

export default {
  en: flatten({ ...en }),
  es: flatten({ ...es }),
  pt: flatten({ ...pt }),
}
