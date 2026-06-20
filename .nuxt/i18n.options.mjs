
// @ts-nocheck
import locale_en_46json_9ba74584 from "#nuxt-i18n/9ba74584";
import locale_es_46json_2e9b22d2 from "#nuxt-i18n/2e9b22d2";
import locale_id_46json_8d0c6bbe from "#nuxt-i18n/8d0c6bbe";
import locale_de_46json_3dca9755 from "#nuxt-i18n/3dca9755";
import locale_fr_46json_9b0f26e5 from "#nuxt-i18n/9b0f26e5";
import locale_ar_46json_4c948213 from "#nuxt-i18n/4c948213";
import locale_zh_46json_bd64fce6 from "#nuxt-i18n/bd64fce6";
import locale_pt_46json_60b9d3ca from "#nuxt-i18n/60b9d3ca";
import locale_az_46json_ace4786f from "#nuxt-i18n/ace4786f";
import locale_nl_46json_ec15f944 from "#nuxt-i18n/ec15f944";

export const localeCodes =  [
  "en",
  "es",
  "id",
  "de",
  "fr",
  "ar",
  "zh",
  "pt",
  "az",
  "nl"
]

export const localeLoaders = {
  en: [
    {
      key: "locale_en_46json_9ba74584",
      load: () => Promise.resolve(locale_en_46json_9ba74584),
      cache: true
    }
  ],
  es: [
    {
      key: "locale_es_46json_2e9b22d2",
      load: () => Promise.resolve(locale_es_46json_2e9b22d2),
      cache: true
    }
  ],
  id: [
    {
      key: "locale_id_46json_8d0c6bbe",
      load: () => Promise.resolve(locale_id_46json_8d0c6bbe),
      cache: true
    }
  ],
  de: [
    {
      key: "locale_de_46json_3dca9755",
      load: () => Promise.resolve(locale_de_46json_3dca9755),
      cache: true
    }
  ],
  fr: [
    {
      key: "locale_fr_46json_9b0f26e5",
      load: () => Promise.resolve(locale_fr_46json_9b0f26e5),
      cache: true
    }
  ],
  ar: [
    {
      key: "locale_ar_46json_4c948213",
      load: () => Promise.resolve(locale_ar_46json_4c948213),
      cache: true
    }
  ],
  zh: [
    {
      key: "locale_zh_46json_bd64fce6",
      load: () => Promise.resolve(locale_zh_46json_bd64fce6),
      cache: true
    }
  ],
  pt: [
    {
      key: "locale_pt_46json_60b9d3ca",
      load: () => Promise.resolve(locale_pt_46json_60b9d3ca),
      cache: true
    }
  ],
  az: [
    {
      key: "locale_az_46json_ace4786f",
      load: () => Promise.resolve(locale_az_46json_ace4786f),
      cache: true
    }
  ],
  nl: [
    {
      key: "locale_nl_46json_ec15f944",
      load: () => Promise.resolve(locale_nl_46json_ec15f944),
      cache: true
    }
  ]
}

export const vueI18nConfigs = [
  () => import("#nuxt-i18n/05e0a8f3" /* webpackChunkName: "config_i18n_46config_46ts_05e0a8f3" */)
]

export const nuxtI18nOptions = {
  restructureDir: "i18n",
  experimental: {
    localeDetector: "",
    switchLocalePathLinkSSR: false,
    autoImportTranslationFunctions: false,
    typedPages: true,
    typedOptionsAndMessages: false,
    generatedLocaleFilePathFormat: "absolute",
    alternateLinkCanonicalQueries: false,
    hmr: true
  },
  bundle: {
    compositionOnly: true,
    runtimeOnly: false,
    fullInstall: true,
    dropMessageCompiler: false,
    optimizeTranslationDirective: false
  },
  compilation: {
    strictMessage: true,
    escapeHtml: false
  },
  customBlocks: {
    defaultSFCLang: "json",
    globalSFCScope: false
  },
  locales: [
    {
      code: "en",
      name: "English",
      files: [
        {
          path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/en.json",
          cache: undefined
        }
      ]
    },
    {
      code: "es",
      name: "Español",
      files: [
        {
          path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/es.json",
          cache: undefined
        }
      ]
    },
    {
      code: "id",
      name: "Indonesian",
      files: [
        {
          path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/id.json",
          cache: undefined
        }
      ]
    },
    {
      code: "de",
      name: "German",
      files: [
        {
          path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/de.json",
          cache: undefined
        }
      ]
    },
    {
      code: "fr",
      name: "Francais",
      files: [
        {
          path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/fr.json",
          cache: undefined
        }
      ]
    },
    {
      code: "ar",
      name: "Arabic",
      files: [
        {
          path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/ar.json",
          cache: undefined
        }
      ]
    },
    {
      code: "zh",
      name: "Chinese",
      files: [
        {
          path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/zh.json",
          cache: undefined
        }
      ]
    },
    {
      code: "pt",
      name: "Portuguese",
      files: [
        {
          path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/pt.json",
          cache: undefined
        }
      ]
    },
    {
      code: "az",
      name: "Azerbaijani",
      files: [
        {
          path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/az.json",
          cache: undefined
        }
      ]
    },
    {
      code: "nl",
      name: "Nederlands",
      files: [
        {
          path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/nl.json",
          cache: undefined
        }
      ]
    }
  ],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  trailingSlash: false,
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_and_default",
  lazy: false,
  langDir: "locales",
  rootRedirect: undefined,
  detectBrowserLanguage: {
    alwaysRedirect: false,
    cookieCrossOrigin: false,
    cookieDomain: null,
    cookieKey: "i18n_redirected",
    cookieSecure: false,
    fallbackLocale: "",
    redirectOn: "root",
    useCookie: true
  },
  differentDomains: false,
  baseUrl: "",
  customRoutes: "page",
  pages: {},
  skipSettingLocaleOnNavigate: false,
  types: "composition",
  debug: false,
  parallelPlugin: false,
  multiDomainLocales: false,
  i18nModules: []
}

export const normalizedLocales = [
  {
    code: "en",
    name: "English",
    files: [
      {
        path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/en.json",
        cache: undefined
      }
    ]
  },
  {
    code: "es",
    name: "Español",
    files: [
      {
        path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/es.json",
        cache: undefined
      }
    ]
  },
  {
    code: "id",
    name: "Indonesian",
    files: [
      {
        path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/id.json",
        cache: undefined
      }
    ]
  },
  {
    code: "de",
    name: "German",
    files: [
      {
        path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/de.json",
        cache: undefined
      }
    ]
  },
  {
    code: "fr",
    name: "Francais",
    files: [
      {
        path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/fr.json",
        cache: undefined
      }
    ]
  },
  {
    code: "ar",
    name: "Arabic",
    files: [
      {
        path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/ar.json",
        cache: undefined
      }
    ]
  },
  {
    code: "zh",
    name: "Chinese",
    files: [
      {
        path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/zh.json",
        cache: undefined
      }
    ]
  },
  {
    code: "pt",
    name: "Portuguese",
    files: [
      {
        path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/pt.json",
        cache: undefined
      }
    ]
  },
  {
    code: "az",
    name: "Azerbaijani",
    files: [
      {
        path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/az.json",
        cache: undefined
      }
    ]
  },
  {
    code: "nl",
    name: "Nederlands",
    files: [
      {
        path: "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/i18n/locales/nl.json",
        cache: undefined
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false
export const hasPages = true

export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
/** client **/
if(import.meta.hot) {

function deepEqual(a, b, ignoreKeys = []) {
  // Same reference?
  if (a === b) return true

  // Check if either is null or not an object
  if (a == null || b == null || typeof a !== 'object' || typeof b !== 'object') {
    return false
  }

  // Get top-level keys, excluding ignoreKeys
  const keysA = Object.keys(a).filter(k => !ignoreKeys.includes(k))
  const keysB = Object.keys(b).filter(k => !ignoreKeys.includes(k))

  // Must have the same number of keys (after ignoring)
  if (keysA.length !== keysB.length) {
    return false
  }

  // Check each property
  for (const key of keysA) {
    if (!keysB.includes(key)) {
      return false
    }

    const valA = a[key]
    const valB = b[key]

    // Compare functions stringified
    if (typeof valA === 'function' && typeof valB === 'function') {
      if (valA.toString() !== valB.toString()) {
        return false
      }
    }
    // If nested, do a normal recursive check (no ignoring at deeper levels)
    else if (typeof valA === 'object' && typeof valB === 'object') {
      if (!deepEqual(valA, valB)) {
        return false
      }
    }
    // Compare primitive values
    else if (valA !== valB) {
      return false
    }
  }

  return true
}



async function loadCfg(config) {
  const nuxt = useNuxtApp()
  const { default: resolver } = await config()
  return typeof resolver === 'function' ? await nuxt.runWithContext(() => resolver()) : resolver
}


  import.meta.hot.accept("../i18n/locales/en.json", async mod => {
    localeLoaders["en"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("en")
  })

  import.meta.hot.accept("../i18n/locales/es.json", async mod => {
    localeLoaders["es"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("es")
  })

  import.meta.hot.accept("../i18n/locales/id.json", async mod => {
    localeLoaders["id"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("id")
  })

  import.meta.hot.accept("../i18n/locales/de.json", async mod => {
    localeLoaders["de"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("de")
  })

  import.meta.hot.accept("../i18n/locales/fr.json", async mod => {
    localeLoaders["fr"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("fr")
  })

  import.meta.hot.accept("../i18n/locales/ar.json", async mod => {
    localeLoaders["ar"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("ar")
  })

  import.meta.hot.accept("../i18n/locales/zh.json", async mod => {
    localeLoaders["zh"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("zh")
  })

  import.meta.hot.accept("../i18n/locales/pt.json", async mod => {
    localeLoaders["pt"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("pt")
  })

  import.meta.hot.accept("../i18n/locales/az.json", async mod => {
    localeLoaders["az"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("az")
  })

  import.meta.hot.accept("../i18n/locales/nl.json", async mod => {
    localeLoaders["nl"][0].load = () => Promise.resolve(mod.default)
    await useNuxtApp()._nuxtI18nDev.resetI18nProperties("nl")
  })

  import.meta.hot.accept("../i18n/i18n.config.ts", async mod => {
    const [oldData, newData] = await Promise.all([loadCfg(vueI18nConfigs[0]), loadCfg(() => Promise.resolve(mod))]);
    vueI18nConfigs[0] = () => Promise.resolve(mod)
    if(deepEqual(oldData, newData, ['messages', 'numberFormats', 'datetimeFormats'])) {
      return await useNuxtApp()._nuxtI18nDev.resetI18nProperties()
    }
    import.meta.hot.send('i18n:options-complex-invalidation', {})
  })

}
/** client-end **/