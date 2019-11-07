import Vue from 'vue'
import VueI18n from 'vue-i18n'
import local from '@/plugins/local'
import { LOCALE_KEY, DEFAULT_LANG } from '../common/consts.js'

Vue.use(VueI18n)

const locales = {
  zh_cn: require('@/locales/zh_cn.js'),
  zh_tw: require('@/locales/zh_tw.js'),
  en: require('@/locales/en.js')
}

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales
})

i18n.setLocale = async function (v) {
  await local.setItem(LOCALE_KEY, v)
  this.locale = v
}

export const setup = async () => {
  let lang = await local.getItem(LOCALE_KEY)
  if (locales[lang] === undefined) {
    lang = DEFAULT_LANG
  }
  await local.setItem(LOCALE_KEY, lang)

  Vue.config.lang = lang
  i18n.locale = lang
}

setup()
export default i18n
