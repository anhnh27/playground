import i18nConfig from "@/i18nConfig";
import { createInstance, i18n, Resource } from "i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

export default async function initTranslations(
  locale: string,
  namespaces: string[],
  i18nInstance?: i18n,
  resources?: Resource
) {
  i18nInstance = i18nInstance || createInstance();
  i18nInstance.use(initReactI18next);

  await i18nInstance.use(ChainedBackend).init({
    backend: {
      backends: [HttpBackend],
      backendOptions: [
        {
          loadPath: `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${process.env.I18NEXUS_API_KEY}`,
        },
      ],
    },
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
