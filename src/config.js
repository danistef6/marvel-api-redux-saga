import { setLocale } from '../src/actions/locale'

require('@formatjs/intl-relativetimeformat/polyfill')
require('@formatjs/intl-relativetimeformat/dist/locale-data/en')
require('@formatjs/intl-relativetimeformat/dist/locale-data/es')
require('@formatjs/intl-relativetimeformat/dist/locale-data/pt')

export const configLanguage = store => {
  console.log("Entro por aqui****")
  const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage ||
    'en'
  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]
  const exitLanguage = ['en', 'es', 'pt'].some(
    lang => lang === languageWithoutRegionCode
  )
  const resultLanguage = (exitLanguage && languageWithoutRegionCode) || 'en'

  if (localStorage.alhubLang) {
    console.log("y luego por aqui")
    setLocale(localStorage.alhubLang, store)
  } else {
    setLocale(resultLanguage, store)
  }
}

export const publicKey= '73a74d03b030aed111b4d9f04194e6b9'
export const hash= '59f32424e4c17e3651297e2cd2d696c8'
export const ts= '86400'

