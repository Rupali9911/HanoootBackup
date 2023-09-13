
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import { Store } from '../screens/Store';
import * as RNLocalize from 'react-native-localize';

//=========================== Language Contant(Array) =============================
export const languageArray = [
  {
    language_id: 0,
    language_name: 'en',
    isSelected: true
  },
  {
    language_id: 1,
    language_name: 'ar',
    isSelected: true
  }
];

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

//=========================== Get Locales(language) Function =============================
export const regionLanguage = RNLocalize.getLocales()
  .map(a => a.languageCode)
  .values()
  .next().value;

export const regionCountry = RNLocalize.getCountry()


//=========================== SetI18nConfig (Language) Function =============================
export function setI18nConfig(tag) {
  const translationGetters = {
    en: () => Store.getState().languageReducer.en,
    ar: () => Store.getState().languageReducer.ar
  };
  const fallback = { languageTag: tag || 'en' };
  const { languageTag } = fallback;
  translate.cache.clear();
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
}