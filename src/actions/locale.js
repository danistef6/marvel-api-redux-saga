import { LOCALE_SET } from '../types/types'

export const localeSet = payload => ({
  type: LOCALE_SET,
  payload,
})

export const setLocale = (lang, store = null) => {
  localStorage.alhubLang = lang
  console.log("estas aqui",lang)
  if (store) {
    store.dispatch(localeSet(lang))
    return true
  }
  return localeSet(lang)
}
