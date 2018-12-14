import { join } from 'path'
import i18n from 'i18next'
import ICU from 'i18next-icu'
import Backend from 'i18next-node-fs-backend'
import LanguageDetector from 'i18next-electron-language-detector'

import cs from 'i18next-icu/locale-data/cs'
import da from 'i18next-icu/locale-data/da'
import en from 'i18next-icu/locale-data/en'
import fr from 'i18next-icu/locale-data/fr'
import ca from 'i18next-icu/locale-data/ca'
import ko from 'i18next-icu/locale-data/ko'
import nl from 'i18next-icu/locale-data/nl'
import no from 'i18next-icu/locale-data/no'
import pl from 'i18next-icu/locale-data/pl'
import zh from 'i18next-icu/locale-data/zh'
import pt from 'i18next-icu/locale-data/pt'
import ru from 'i18next-icu/locale-data/ru'

const localeData = [cs, da, ca, en, fr, ko, nl, no, pl, pt, ru, zh]

i18n
  .use(new ICU({ localeData: localeData }))
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: {
      'default': ['en']
    },
    debug: process.env.NODE_ENV !== 'production',
    backend: {
      loadPath: join(__dirname, '../locales/{{lng}}.json')
    }
  })

export default i18n
