
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'CvDisplayCheckbox': typeof import("../../components/CvDisplayCheckbox.vue").default
  'CvDynamicSection': typeof import("../../components/CvDynamicSection.vue").default
  'CvInputLang': typeof import("../../components/CvInputLang.vue").default
  'CvInputTags': typeof import("../../components/CvInputTags.vue").default
  'CvPreview': typeof import("../../components/CvPreview.vue").default
  'CvPreviewAbout': typeof import("../../components/CvPreviewAbout.vue").default
  'CvPreviewContact': typeof import("../../components/CvPreviewContact.vue").default
  'CvPreviewEducation': typeof import("../../components/CvPreviewEducation.vue").default
  'CvPreviewExperience': typeof import("../../components/CvPreviewExperience.vue").default
  'CvPreviewLanguages': typeof import("../../components/CvPreviewLanguages.vue").default
  'CvPreviewName': typeof import("../../components/CvPreviewName.vue").default
  'CvPreviewOneColumn': typeof import("../../components/CvPreviewOneColumn.vue").default
  'CvPreviewProjectLink': typeof import("../../components/CvPreviewProjectLink.vue").default
  'CvPreviewProjects': typeof import("../../components/CvPreviewProjects.vue").default
  'CvPreviewSkill': typeof import("../../components/CvPreviewSkill.vue").default
  'CvPreviewSkills': typeof import("../../components/CvPreviewSkills.vue").default
  'CvPreviewSocial': typeof import("../../components/CvPreviewSocial.vue").default
  'CvPreviewTitle': typeof import("../../components/CvPreviewTitle.vue").default
  'CvPreviewTwoColumn': typeof import("../../components/CvPreviewTwoColumn.vue").default
  'CvProfileImageUploader': typeof import("../../components/CvProfileImageUploader.vue").default
  'CvProfileImageViewer': typeof import("../../components/CvProfileImageViewer.vue").default
  'CvSettings': typeof import("../../components/CvSettings.vue").default
  'CvSettingsHistorySection': typeof import("../../components/CvSettingsHistorySection.vue").default
  'CvTextEditor': typeof import("../../components/CvTextEditor.vue").default
  'ExpansionPanel': typeof import("../../components/ExpansionPanel.vue").default
  'LandingActionBtn': typeof import("../../components/landing/LandingActionBtn.vue").default
  'LandingHeroImage': typeof import("../../components/landing/LandingHeroImage.vue").default
  'LandingLangSwitch': typeof import("../../components/landing/LandingLangSwitch.vue").default
  'LandingLink': typeof import("../../components/landing/LandingLink.vue").default
  'LandingLogo': typeof import("../../components/landing/LandingLogo.vue").default
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue").default
  'NuxtPicture': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue").default
  'NuxtLinkLocale': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default
  'SwitchLocalePathLink': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default
  'SiteLink': typeof import("../../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue").default
  'VitePwaManifest': typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest").default
  'NuxtPwaManifest': typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest").default
  'NuxtPwaAssets': typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets").default
  'PwaAppleImage': typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue").default
  'PwaAppleSplashScreenImage': typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue").default
  'PwaFaviconImage': typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue").default
  'PwaMaskableImage': typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue").default
  'PwaTransparentImage': typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue").default
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyCvDisplayCheckbox': LazyComponent<typeof import("../../components/CvDisplayCheckbox.vue").default>
  'LazyCvDynamicSection': LazyComponent<typeof import("../../components/CvDynamicSection.vue").default>
  'LazyCvInputLang': LazyComponent<typeof import("../../components/CvInputLang.vue").default>
  'LazyCvInputTags': LazyComponent<typeof import("../../components/CvInputTags.vue").default>
  'LazyCvPreview': LazyComponent<typeof import("../../components/CvPreview.vue").default>
  'LazyCvPreviewAbout': LazyComponent<typeof import("../../components/CvPreviewAbout.vue").default>
  'LazyCvPreviewContact': LazyComponent<typeof import("../../components/CvPreviewContact.vue").default>
  'LazyCvPreviewEducation': LazyComponent<typeof import("../../components/CvPreviewEducation.vue").default>
  'LazyCvPreviewExperience': LazyComponent<typeof import("../../components/CvPreviewExperience.vue").default>
  'LazyCvPreviewLanguages': LazyComponent<typeof import("../../components/CvPreviewLanguages.vue").default>
  'LazyCvPreviewName': LazyComponent<typeof import("../../components/CvPreviewName.vue").default>
  'LazyCvPreviewOneColumn': LazyComponent<typeof import("../../components/CvPreviewOneColumn.vue").default>
  'LazyCvPreviewProjectLink': LazyComponent<typeof import("../../components/CvPreviewProjectLink.vue").default>
  'LazyCvPreviewProjects': LazyComponent<typeof import("../../components/CvPreviewProjects.vue").default>
  'LazyCvPreviewSkill': LazyComponent<typeof import("../../components/CvPreviewSkill.vue").default>
  'LazyCvPreviewSkills': LazyComponent<typeof import("../../components/CvPreviewSkills.vue").default>
  'LazyCvPreviewSocial': LazyComponent<typeof import("../../components/CvPreviewSocial.vue").default>
  'LazyCvPreviewTitle': LazyComponent<typeof import("../../components/CvPreviewTitle.vue").default>
  'LazyCvPreviewTwoColumn': LazyComponent<typeof import("../../components/CvPreviewTwoColumn.vue").default>
  'LazyCvProfileImageUploader': LazyComponent<typeof import("../../components/CvProfileImageUploader.vue").default>
  'LazyCvProfileImageViewer': LazyComponent<typeof import("../../components/CvProfileImageViewer.vue").default>
  'LazyCvSettings': LazyComponent<typeof import("../../components/CvSettings.vue").default>
  'LazyCvSettingsHistorySection': LazyComponent<typeof import("../../components/CvSettingsHistorySection.vue").default>
  'LazyCvTextEditor': LazyComponent<typeof import("../../components/CvTextEditor.vue").default>
  'LazyExpansionPanel': LazyComponent<typeof import("../../components/ExpansionPanel.vue").default>
  'LazyLandingActionBtn': LazyComponent<typeof import("../../components/landing/LandingActionBtn.vue").default>
  'LazyLandingHeroImage': LazyComponent<typeof import("../../components/landing/LandingHeroImage.vue").default>
  'LazyLandingLangSwitch': LazyComponent<typeof import("../../components/landing/LandingLangSwitch.vue").default>
  'LazyLandingLink': LazyComponent<typeof import("../../components/landing/LandingLink.vue").default>
  'LazyLandingLogo': LazyComponent<typeof import("../../components/landing/LandingLogo.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue").default>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue").default>
  'LazyNuxtLinkLocale': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale").default>
  'LazySwitchLocalePathLink': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink").default>
  'LazySiteLink': LazyComponent<typeof import("../../node_modules/nuxt-site-config/dist/runtime/nuxt/component/SiteLink.vue").default>
  'LazyVitePwaManifest': LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest").default>
  'LazyNuxtPwaManifest': LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/VitePwaManifest").default>
  'LazyNuxtPwaAssets': LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/NuxtPwaAssets").default>
  'LazyPwaAppleImage': LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleImage.vue").default>
  'LazyPwaAppleSplashScreenImage': LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaAppleSplashScreenImage.vue").default>
  'LazyPwaFaviconImage': LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaFaviconImage.vue").default>
  'LazyPwaMaskableImage': LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaMaskableImage.vue").default>
  'LazyPwaTransparentImage': LazyComponent<typeof import("../../node_modules/@vite-pwa/nuxt/dist/runtime/components/PwaTransparentImage.vue").default>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
