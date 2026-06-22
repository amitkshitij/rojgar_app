<script lang="ts" setup>
const APP_IMAGE = 'https://rozgar.app/CvFy-no-border.png'

const { locale, t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const HREF = `https://rozgar.app${route.path}`

useHead({
  htmlAttrs: {
    lang: locale,
  },
  title: t(String(route.meta.titleI18n)),
  meta: [
    {
      name: 'description',
      content: t('description'),
    },
    {
      name: 'author',
      content: 'claudiabdm',
    },
    {
      property: 'og:image',
      content: APP_IMAGE,
    },
    {
      property: 'og:author',
      content: 'Claudia Benito',
    },
    {
      property: 'og:title',
      content: t('title-tag'),
    },
    {
      property: 'og:description',
      content: t('description'),
    },
    {
      name: 'twitter:creator',
      content: '@claudiabdm',
    },
    {
      name: 'twitter:title',
      content: t('title-tag'),
    },
    {
      name: 'twitter:url',
      content: HREF,
    },
    {
      name: 'twitter:description',
      content: t('description'),
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:image',
      content: APP_IMAGE,
    },
    {
      name: 'twitter:image:alt',
      content: t('description'),
    },
  ],
})
</script>

<template>
  <div class="font-landing min-h-screen bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),_transparent_32%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)] text-fl-xs text-slate-800">
    <div class="max-w-screen-xl mx-auto">
      <header class="p-fl-sm mb-fl-md">
        <nav
          class="font-light flex justify-between items-center gap-4 rounded-3xl border border-white/70 bg-white/80 px-4 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur"
        >
          <LandingLogo />
          <section class="flex items-center gap-3">
            <LandingLangSwitch />
            <LandingLink
              :to="localePath('create')"
              cta
            >
              {{ $t('create-cv') }}
            </LandingLink>
          </section>
        </nav>
      </header>
      <main class="flex">
        <slot />
      </main>
    </div>
  </div>
</template>
