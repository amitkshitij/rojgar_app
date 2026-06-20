const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/es",
                "_sitemap": "es",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/id",
                "_sitemap": "id",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/de",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/fr",
                "_sitemap": "fr",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/ar",
                "_sitemap": "ar",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/zh",
                "_sitemap": "zh",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/pt",
                "_sitemap": "pt",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/az",
                "_sitemap": "az",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/nl",
                "_sitemap": "nl",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/"
                    }
                ]
            },
            {
                "loc": "/create",
                "_sitemap": "en",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/create"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es/create"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id/create"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/create"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/create"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar/create"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh/create"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt/create"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az/create"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl/create"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/create"
                    }
                ]
            },
            {
                "loc": "/es/create",
                "_sitemap": "es",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/create"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es/create"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id/create"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/create"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/create"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar/create"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh/create"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt/create"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az/create"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl/create"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/create"
                    }
                ]
            },
            {
                "loc": "/id/create",
                "_sitemap": "id",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/create"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es/create"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id/create"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/create"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/create"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar/create"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh/create"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt/create"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az/create"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl/create"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/create"
                    }
                ]
            },
            {
                "loc": "/de/create",
                "_sitemap": "de",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/create"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es/create"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id/create"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/create"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/create"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar/create"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh/create"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt/create"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az/create"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl/create"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/create"
                    }
                ]
            },
            {
                "loc": "/fr/create",
                "_sitemap": "fr",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/create"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es/create"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id/create"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/create"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/create"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar/create"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh/create"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt/create"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az/create"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl/create"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/create"
                    }
                ]
            },
            {
                "loc": "/ar/create",
                "_sitemap": "ar",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/create"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es/create"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id/create"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/create"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/create"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar/create"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh/create"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt/create"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az/create"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl/create"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/create"
                    }
                ]
            },
            {
                "loc": "/zh/create",
                "_sitemap": "zh",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/create"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es/create"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id/create"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/create"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/create"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar/create"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh/create"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt/create"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az/create"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl/create"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/create"
                    }
                ]
            },
            {
                "loc": "/pt/create",
                "_sitemap": "pt",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/create"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es/create"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id/create"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/create"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/create"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar/create"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh/create"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt/create"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az/create"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl/create"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/create"
                    }
                ]
            },
            {
                "loc": "/az/create",
                "_sitemap": "az",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/create"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es/create"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id/create"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/create"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/create"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar/create"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh/create"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt/create"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az/create"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl/create"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/create"
                    }
                ]
            },
            {
                "loc": "/nl/create",
                "_sitemap": "nl",
                "alternatives": [
                    {
                        "hreflang": "en",
                        "href": "/create"
                    },
                    {
                        "hreflang": "es",
                        "href": "/es/create"
                    },
                    {
                        "hreflang": "id",
                        "href": "/id/create"
                    },
                    {
                        "hreflang": "de",
                        "href": "/de/create"
                    },
                    {
                        "hreflang": "fr",
                        "href": "/fr/create"
                    },
                    {
                        "hreflang": "ar",
                        "href": "/ar/create"
                    },
                    {
                        "hreflang": "zh",
                        "href": "/zh/create"
                    },
                    {
                        "hreflang": "pt",
                        "href": "/pt/create"
                    },
                    {
                        "hreflang": "az",
                        "href": "/az/create"
                    },
                    {
                        "hreflang": "nl",
                        "href": "/nl/create"
                    },
                    {
                        "hreflang": "x-default",
                        "href": "/create"
                    }
                ]
            },
            {
                "loc": "/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/en/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/es/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/id/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/de/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/fr/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/ar/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/zh/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/pt/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/az/sitemap.xml",
                "_sitemap": "en"
            },
            {
                "loc": "/nl/sitemap.xml",
                "_sitemap": "en"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
