import { r as resource, l as resource$1, m as resource$3, n as resource$2, o as resource$7, q as resource$5, s as resource$8, t as resource$9, v as resource$6, x as resource$4 } from './server.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'mysql2/promise';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'vue-router';
import 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const i18n_config = () => {
  return {
    legacy: false,
    fallbackLocale: "en",
    locale: "en",
    messages: {
      ar: resource$4,
      de: resource$6,
      en: resource$9,
      es: resource$8,
      fr: resource$5,
      id: resource$7,
      pt: resource$2,
      zh: resource$3,
      az: resource$1,
      nl: resource
    }
  };
};

export { i18n_config as default };
//# sourceMappingURL=i18n.config-CzSOmq7P.mjs.map
