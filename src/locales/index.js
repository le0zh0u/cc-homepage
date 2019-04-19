import Vue from 'vue'
import VueI18N from 'vue-i18n'

Vue.use(VueI18N)

const DEFAULT_LANG = 'zh'
const LOCALE_KEY = 'localeLanguage'

const messages = {
    zh: require('./zh.json'),
    en: require('./en.json')
}

const getLangFromStorage = () => {
    var lang = window.localStorage.getItem(LOCALE_KEY)
    if (lang === undefined || messages[lang] === undefined) {
        lang = DEFAULT_LANG
    }
    return lang
}

const lang = getLangFromStorage()

const i18n = new VueI18N({
    locale: lang,
    messages: messages,
})

const setup = lang => {
    // add lang to localStorage
    window.localStorage.setItem(LOCALE_KEY, lang)

    // add lang class for body element
    Object.keys(messages).forEach(lang => {
        document.body.classList.remove(`lang-${lang}`)
    })
    document.body.classList.add(`lang-${lang}`)
    document.body.setAttribute('lang', lang)

    Vue.config.lang = lang
    i18n.locale = lang
    
}

export const switchLang = () => {
    setup(i18n.locale === 'zh' ? 'en' : 'zh' )
}

setup(lang)
window.i18n = i18n
export default i18n