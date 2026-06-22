<script lang="ts" setup>
const localePath = useLocalePath()
definePageMeta({
  titleI18n: 'title-tag',
  layout: 'landing',
})
</script>

<template>
  <section
    class="min-h-[calc(100vh-var(--header-height))] flex flex-col justify-center items-center text-center mx-auto gap-10 flex-wrap font-bold px-fl-md pb-16 pt-8"
  >
    <div class="max-w-4xl rounded-[2rem] border border-white/80 bg-white/85 px-8 py-10 shadow-[0_24px_80px_rgba(79,70,229,0.14)] backdrop-blur">
      <div class="mb-4 inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-4 py-1 text-xs uppercase tracking-[0.2em] text-violet-700">
        Rojgar App
      </div>
      <h2 class="mb-3 text-fl-2xl leading-tight">
        {{ $t('hero-title-1') }} <span
          class="text-nowrap text-transparent bg-gradient-to-bl from-violet-800 to-fuchsia-700 bg-clip-text"
        >{{ $t('hero-title-2') }}</span><br> {{ $t('hero-title-3') }}<span
          class="text-fl-2xl text-transparent bg-gradient-to-br from-violet-800 to-fuchsia-700 bg-clip-text"
        >.</span>
      </h2>
      <p class="mb-6 font-light max-w-2xl mx-auto text-slate-600">
        {{ $t('hero-paragraph') }}
      </p>
      <LandingLink
        :to="localePath('create')"
        cta
      >
        <span>{{ $t('get-started') }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </LandingLink>
    </div>
    <LandingHeroImage />
    <div class="rounded-full border border-violet-100 bg-white/80 px-5 py-2 text-xs font-light text-slate-600 shadow-sm">
      Made by <span class="font-semibold text-violet-700">Rojgar App</span>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
:root {
  --header-height: calc(104px + calc(1.97rem
        /* 31.52px */
        + 4.50 * var(--fluid-bp)));
}
</style>
