import { setLocale } from '../src/actions/locale'

require('@formatjs/intl-relativetimeformat/polyfill')
require('@formatjs/intl-relativetimeformat/dist/locale-data/en')
require('@formatjs/intl-relativetimeformat/dist/locale-data/es')
require('@formatjs/intl-relativetimeformat/dist/locale-data/pt')

export const configLanguage = store => {
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
    setLocale(localStorage.alhubLang, store)
  } else {
    setLocale(resultLanguage, store)
  }
}
