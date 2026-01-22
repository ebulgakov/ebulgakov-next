import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

import enJson from "./locates/en.json";

import type { LocaleList } from "@/types/i18n";

const defaultLocateList: LocaleList = enJson;

export default getRequestConfig(async () => {
  const store = await cookies();
  const defaultLocale = "en";
  const localeCookie = store.get("locale")?.value || defaultLocale;
  const availableLocales = ["en", "ru"];
  const locale = availableLocales.includes(localeCookie || "") ? localeCookie : defaultLocale;

  return {
    locale,
    messages: (await import(`./locates/${locale}.json`)).default,
    getMessageFallback: ({ key, namespace }: { key: string; namespace?: string }): string => {
      const keys = namespace ? `${namespace}.${key}`.split('.') : key.split('.');
      let current: string | LocaleList = defaultLocateList;

      for (const k of keys) {
        if (typeof current === 'object' && current !== null && k in current) {
          current = current[k];
        } else {
          return key;
        }
      }

      return typeof current === 'string' ? current : key;
    }
  };
});
