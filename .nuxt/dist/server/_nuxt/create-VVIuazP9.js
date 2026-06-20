import { _ as _sfc_main$p } from "./LandingLogo-CaslIrmP.js";
import { _ as __nuxt_component_0$4 } from "./nuxt-link-CCbinDlN.js";
import { defineComponent, mergeProps, useSSRContext, ref, unref, toRefs, reactive, computed, watch, withCtx, createVNode, withDirectives, createBlock, createTextVNode, openBlock, Fragment, toDisplayString, vModelText, createCommentVNode, vModelCheckbox, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderAttr, ssrRenderClass, ssrRenderSlotInner, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc, g as useI18n, d as useRuntimeConfig, i as useSwitchLocalePath, k as useRoute, u as useHead } from "../server.mjs";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/hookable/dist/index.mjs";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/unctx/dist/index.mjs";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/radix3/dist/index.mjs";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/defu/dist/defu.mjs";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/klona/dist/index.mjs";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/destr/dist/index.mjs";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/consola/dist/index.mjs";
import "/Users/amitsinha/Devzign/iOS Native/hyperhabits/hyper-habits-app/rojgar_app/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$o = defineComponent({
  name: "ExpansionPanel",
  props: {
    panelName: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    togglePanel() {
      this.isOpen = !this.isOpen;
    },
    enter(element) {
      const el = element;
      el.style.height = "auto";
      const height = getComputedStyle(element).height;
      el.style.height = "0";
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        el.style.height = height;
      });
    },
    afterEnter(element) {
      const el = element;
      el.style.height = "auto";
    },
    leave(element) {
      const el = element;
      const height = getComputedStyle(element).height;
      el.style.height = height;
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        el.style.height = "0";
      });
    }
  }
});
const _imports_0 = "" + __buildAssetsURL("sprite.DSFI2w_c.svg");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "expansion-panel" }, _attrs))} data-v-3b29ef5e><div class="expansion-panel__header" data-v-3b29ef5e><div class="expansion-panel__title" data-v-3b29ef5e>`);
  ssrRenderSlot(_ctx.$slots, "title", {}, () => {
    _push(` Título `);
  }, _push, _parent);
  _push(`<button${ssrRenderAttr("id", `expansionPanel${_ctx.panelName}`)} type="button"${ssrRenderAttr("aria-label", `Expansion panel ${_ctx.panelName}`)}${ssrRenderAttr("aria-expanded", `${_ctx.isOpen}`)}${ssrRenderAttr("aria-controls", _ctx.panelName)} data-v-3b29ef5e><svg class="${ssrRenderClass([[
    { "expansion-panel__arrow--open": _ctx.isOpen }
  ], "expansion-panel__arrow"])}" data-v-3b29ef5e><use${ssrRenderAttr("href", _imports_0 + "#panel-arrow")} data-v-3b29ef5e></use></svg></button></div>`);
  ssrRenderSlot(_ctx.$slots, "action-button", {}, null, _push, _parent);
  _push(`</div>`);
  if (_ctx.isOpen) {
    ssrRenderSlotInner(_ctx.$slots, "content", {
      id: _ctx.panelName,
      class: "expansion-panel__panel",
      role: "region",
      ariaLabelledby: `expansionPanel${_ctx.panelName}`
    }, () => {
      _push(` Contenido `);
    }, _push, _parent, null, true);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExpansionPanel.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-3b29ef5e"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "CvProfileImageUploader",
  __ssrInlineRender: true,
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const isPhotoLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}><label tabindex="0" for="profile-image-uploader" class="form__btn basis-full">${ssrInterpolate(unref(isPhotoLoading) ? "Loading..." : _ctx.$t("upload-profile-image"))} <input id="profile-image-uploader" type="file" accept="image/*" name="uploadProfileImage" class="hidden"></label><button class="form__btn flex flex-col justify-center" type="button">${ssrInterpolate(_ctx.$t("clear-profile-image"))}</button></div>`);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvProfileImageUploader.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const LEVELS = [
  "elementary",
  "limited-working",
  "professional-working",
  "full-professional",
  "native-bilingual"
];
const SectionNameList = {
  work: "experience",
  education: "education",
  projects: "projects"
};
const cvSettingTemplate = {
  layout: "two-column",
  profileImageDataUri: "/knope_campaign_rect.webp",
  jobTitle: "Deputy Director of Parks and Recreations",
  name: "Leslie",
  lastName: "Knope",
  email: "lknope@parksdept.com",
  location: "Pawnee, Indiana",
  phoneNumber: "317-660-2160",
  aboutme: "My name is Leslie Knope. I am a passionate, over-achieving government employee who believes the government's #1 job is serving the people. By pairing the right people with the right messaging at the right time, the parks department and your local government can make the world a better place for everyone! I have met Joe Biden, and one day I will become the first female President of the United States.",
  jobSkills: ["Microsoft", "Word", "Excel", "PerfectMind"],
  softSkills: ["Positivity", "Leadership", "Public Speaking"],
  languages: [{ lang: "English", level: LEVELS[4] }],
  interests: ["Politics", "Organize my agenda"],
  linkedin: "leslieknope",
  twitter: "leslieknope",
  github: "",
  website: "MsKnope.com",
  education: [
    {
      id: "1",
      title: "Environmental and Public Affairs",
      location: "Indiana University",
      from: new Date(1993, 9, 1),
      to: new Date(1993, 4, 1),
      current: false,
      summary: "<ul><li><p>Sed ut lorem viverra urna malesuada interdum in ut risus.</p></li><li><p>Duis at sem non justo aliquam iaculis.</p></li><li><p>Quisque lobortis nibh non turpis interdum ornare.</p></li><li><p>Sed et diam nec arcu tempor suscipit sit amet at tellus.</p></li><li><p>Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.</p></li></ul>"
    }
  ],
  work: [
    {
      id: "1",
      title: "Deputy Director of Parks",
      location: "Pawnee, Indiana",
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary: "<ul><li><p>In placerat nisi pellentesque felis blandit, vel varius justo eleifend.</p></li><li><p>Etiam porttitor tortor vel lobortis ultricies.</p></li><li><p>Nam non libero accumsan, sagittis nibh vitae, auctor ligula.</p></li><li><p>Sed hendrerit dui a ante porttitor, vitae tristique ipsum laoreet.</p></li><li><p>Suspendisse interdum mauris a lectus dignissim, vitae aliquet ante tempor.</p></li></ul>"
    },
    {
      id: "2",
      title: "City Councilor",
      location: "Pawnee, Indiana",
      from: new Date(2012, 1, 1),
      to: /* @__PURE__ */ new Date(),
      current: true,
      summary: "<ul><li><p>Sed ut lorem viverra urna malesuada interdum in ut risus.</p></li><li><p>Duis at sem non justo aliquam iaculis.</p></li><li><p>Quisque lobortis nibh non turpis interdum ornare.</p></li><li><p>Sed et diam nec arcu tempor suscipit sit amet at tellus.</p></li><li><p>Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.</p></li></ul>"
    }
  ],
  projects: [
    {
      id: "3",
      title: "Lot 48",
      location: "City of Pawnee, Indiana",
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary: "<ul><li><p>Sed ut lorem viverra urna malesuada interdum in ut risus.</p></li><li><p>Duis at sem non justo aliquam iaculis.</p></li><li><p>Quisque lobortis nibh non turpis interdum ornare.</p></li><li><p>Sed et diam nec arcu tempor suscipit sit amet at tellus.</p></li><li><p>Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.</p></li></ul>"
    }
  ],
  displaySocial: true,
  displayEducation: true,
  displayProjects: true,
  displayJobSkills: true,
  displaySoftSkills: true,
  displayLanguages: true,
  displayInterests: true,
  activeColor: "#5B21B6"
};
const cvSettingsEmptyTemplate = {
  layout: "two-column",
  profileImageDataUri: null,
  jobTitle: "",
  name: "",
  lastName: "",
  email: "",
  location: "",
  phoneNumber: "",
  aboutme: "",
  jobSkills: [],
  softSkills: [],
  languages: [],
  interests: [],
  linkedin: "",
  twitter: "",
  github: "",
  website: "",
  education: [],
  work: [],
  projects: [],
  displaySocial: true,
  displayEducation: true,
  displayProjects: false,
  activeColor: "#5B21B6"
};
const state = reactive({
  formSettings: { ...cvSettingsEmptyTemplate },
  isLoading: true,
  isProfilePhotoLoading: false
});
function useCvState() {
  const i18n = useI18n();
  const config = useRuntimeConfig();
  function getLocaleStorageKey() {
    return `cvSettings-${i18n.locale.value}`;
  }
  function saveToLocalStorage() {
    localStorage.setItem(getLocaleStorageKey(), JSON.stringify(state.formSettings));
  }
  async function loadFromDatabase() {
    const response = await $fetch("/api/cv", {
      query: {
        locale: i18n.locale.value
      }
    });
    return response.payload;
  }
  async function saveToDatabase() {
    await $fetch("/api/cv", {
      method: "PUT",
      body: {
        locale: i18n.locale.value,
        payload: state.formSettings
      }
    });
  }
  async function setUpCvSettings() {
    let cvSettingsObj = null;
    if (config.public.cvStorageDriver === "mysql") {
      try {
        cvSettingsObj = await loadFromDatabase();
      } catch {
        cvSettingsObj = null;
      }
    }
    if (cvSettingsObj == null) {
      const localCvSettings = localStorage.getItem(getLocaleStorageKey());
      cvSettingsObj = localCvSettings ? JSON.parse(localCvSettings) : null;
    }
    if (cvSettingsObj == null) {
      state.formSettings = {
        ...cvSettingTemplate
      };
    } else {
      state.formSettings = { ...cvSettingsEmptyTemplate, ...cvSettingsObj };
      patchId(state.formSettings);
      patchDisplayDate(state.formSettings);
    }
    saveToLocalStorage();
    state.isLoading = false;
  }
  async function saveCurrentSettings() {
    saveToLocalStorage();
    if (config.public.cvStorageDriver !== "mysql") {
      return;
    }
    await saveToDatabase();
  }
  function addSkill(e) {
    if (e.skillType === "languages") {
      if (e.skill.lang.trim() === "")
        return;
      const newLang = e.skill;
      const newLangIdx = state.formSettings.languages.findIndex(
        (lang) => lang.lang === newLang.lang
      );
      if (newLangIdx < 0) {
        state.formSettings.languages = [
          .../* @__PURE__ */ new Set([
            ...state.formSettings.languages,
            { lang: e.skill.lang, level: e.skill.level }
          ])
        ];
      }
    } else {
      if (e.skill.trim() === "")
        return;
      state.formSettings[e.skillType] = [
        .../* @__PURE__ */ new Set([...state.formSettings[e.skillType], e.skill])
      ];
    }
  }
  function removeSkill(e) {
    if (e.skillType === "languages") {
      state.formSettings[e.skillType] = [
        ...state.formSettings[e.skillType].filter(
          (skill) => skill.lang !== e.skill.lang
        )
      ];
    } else {
      state.formSettings[e.skillType] = [
        ...state.formSettings[e.skillType].filter((skill) => skill !== e.skill)
      ];
    }
  }
  function addEntry(e) {
    state.formSettings[e.sectionName].unshift({
      id: crypto.randomUUID(),
      title: "",
      location: "",
      from: /* @__PURE__ */ new Date(),
      to: /* @__PURE__ */ new Date(),
      current: false,
      summary: "",
      displayDate: e.sectionName !== "education"
    });
  }
  function removeEntry(e) {
    state.formSettings[e.sectionName] = state.formSettings[e.sectionName].filter((entry) => entry.id !== e.entry.id);
  }
  function uploadCV(e) {
    const fr = new FileReader();
    fr.onload = (e2) => {
      const data = JSON.parse(e2.target.result);
      state.formSettings = {
        ...cvSettingsEmptyTemplate,
        ...data.formSettings
      };
      patchId(state.formSettings);
      patchDisplayDate(state.formSettings);
    };
    fr.readAsText(e.target.files[0]);
  }
  function resetForm() {
    state.formSettings = {
      ...cvSettingTemplate
    };
    saveToLocalStorage();
  }
  function clearForm() {
    state.formSettings = cvSettingsEmptyTemplate;
    saveToLocalStorage();
  }
  function changeDisplaySection(e) {
    const propName = `display${e.sectionName.slice(0, 1).toUpperCase()}${e.sectionName.slice(1)}`;
    state.formSettings[propName] = e.status;
  }
  function patchId(formSettings) {
    for (const key in SectionNameList) {
      const section = key;
      for (const e of formSettings[section]) {
        if (!e.id) {
          e.id = crypto.randomUUID();
        }
      }
    }
  }
  function patchDisplayDate(formSettings) {
    for (const key in SectionNameList) {
      const section = key;
      for (const e of formSettings[section]) {
        if (e.displayDate == null) {
          e.displayDate = section !== "education";
        }
      }
    }
  }
  return {
    ...toRefs(state),
    setUpCvSettings,
    addSkill,
    removeSkill,
    addEntry,
    removeEntry,
    uploadCV,
    resetForm,
    clearForm,
    changeDisplaySection,
    saveCurrentSettings
  };
}
const _sfc_main$m = defineComponent({
  props: {
    sectionName: {
      type: String,
      default: ""
    },
    displaySection: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const { changeDisplaySection } = useCvState();
    return {
      changeDisplaySection
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "form__display-checkbox checkbox" }, _attrs))}><label class="checkbox__label"><input class="checkbox__input mr-2" type="checkbox"${ssrIncludeBooleanAttr(_ctx.displaySection) ? " checked" : ""}><span class="checkbox__text">${ssrInterpolate(_ctx.$t("display-section"))}</span></label></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvDisplayCheckbox.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "CvInputLang",
  __ssrInlineRender: true,
  setup(__props) {
    const tagInputLang = ref({ lang: "", level: "" });
    useCvState();
    const tagInputLangEmpty = computed(() => {
      return tagInputLang.value.lang === "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full gap-3" }, _attrs))}><input id="languages"${ssrRenderAttr("value", unref(tagInputLang).lang)} class="form__control mt-2 mb-1" type="text" placeholder="Spanish"><select id="level" name="level" class="form__control mt-2 mb-1" aria-label="Language level"><!--[-->`);
      ssrRenderList(unref(LEVELS), (level) => {
        _push(`<option${ssrRenderAttr("value", level)}${ssrIncludeBooleanAttr(Array.isArray(unref(tagInputLang).level) ? ssrLooseContain(unref(tagInputLang).level, level) : ssrLooseEqual(unref(tagInputLang).level, level)) ? " selected" : ""}>${ssrInterpolate(_ctx.$t(level))}</option>`);
      });
      _push(`<!--]--></select><button class="form__btn" type="button"${ssrIncludeBooleanAttr(tagInputLangEmpty.value) ? " disabled" : ""}${ssrRenderAttr("aria-disabled", tagInputLangEmpty.value)} aria-live="assertive">${ssrInterpolate(_ctx.$t("add"))}</button></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvInputLang.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
function useDrag(element, idlist, events) {
  const containerEl = ref(element);
  ref();
  ref();
  return {
    containerEl
  };
}
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "CvInputTags",
  __ssrInlineRender: true,
  props: {
    tagListName: {},
    modelValue: {},
    tagListLabel: {},
    display: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { t } = useI18n();
    const state2 = reactive({
      tagInput: null
    });
    const tagListCopy = ref(formatList(props.modelValue));
    watch(
      () => props.modelValue,
      (value) => tagListCopy.value = formatList(value)
    );
    function formatList(value) {
      const list = [];
      if (value) {
        for (const tag of value) {
          if (typeof tag === "string") {
            list.push(tag);
          } else {
            list.push(`${tag.lang}: ${t(tag.level)}`);
          }
        }
      }
      return list;
    }
    useCvState();
    const tagInputEmpty = computed(() => {
      return state2.tagInput === "";
    });
    const parentEl = ref();
    useDrag(parentEl);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CvDisplayCheckbox = __nuxt_component_5;
      const _component_CvInputLang = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form__group mb-10" }, _attrs))} data-v-29a81cb1><label class="form__label"${ssrRenderAttr("for", __props.tagListName)} data-v-29a81cb1>${ssrInterpolate(__props.tagListLabel)} `);
      _push(ssrRenderComponent(_component_CvDisplayCheckbox, {
        "display-section": __props.display,
        "section-name": `${__props.tagListName}`
      }, null, _parent));
      _push(`</label><div class="flex gap-3" data-v-29a81cb1>`);
      if (__props.tagListName === "languages") {
        _push(ssrRenderComponent(_component_CvInputLang, null, null, _parent));
      } else {
        _push(`<!--[--><input${ssrRenderAttr("id", __props.tagListName)}${ssrRenderAttr("value", unref(state2).tagInput)} class="form__control mt-2 mb-1" type="text" data-v-29a81cb1><button class="form__btn" type="button"${ssrIncludeBooleanAttr(unref(tagInputEmpty)) ? " disabled" : ""}${ssrRenderAttr("aria-disabled", unref(tagInputEmpty))} aria-live="assertive" data-v-29a81cb1>${ssrInterpolate(_ctx.$t("add"))}</button><!--]-->`);
      }
      _push(`</div><ul class="tags" data-v-29a81cb1><!--[-->`);
      ssrRenderList(unref(tagListCopy), (tag) => {
        _push(`<li${ssrRenderAttr("id", tag)} draggable="true" class="tags__tag form__btn" data-v-29a81cb1><span class="tags__tag-text" data-v-29a81cb1>${ssrInterpolate(tag)}</span><button type="button" data-v-29a81cb1><svg class="form__icon" data-v-29a81cb1><use${ssrRenderAttr("href", _imports_0 + "#close")} data-v-29a81cb1></use></svg></button></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvInputTags.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-29a81cb1"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "CvTextEditor",
  __ssrInlineRender: true,
  props: {
    id: { default: void 0 },
    modelValue: { default: "" },
    readOnly: { type: Boolean, default: false },
    class: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const editor = useEditor({
      content: "<p><i>Write something here...</i></p>",
      extensions: [StarterKit],
      editorProps: {
        editable: () => {
          return !props.readOnly;
        },
        attributes: {
          ...props.id && { id: `${String(props.id)}-editor` },
          class: props.class
        }
      },
      onUpdate: () => {
        emit("update:modelValue", editor.value?.getHTML());
      }
    });
    watch(
      () => props.modelValue,
      (value) => {
        const isSame = editor.value?.getHTML() === value;
        if (isSame)
          return;
        editor.value?.commands.setContent(value, false);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(EditorContent), mergeProps({ editor: unref(editor) }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvTextEditor.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "CvDynamicSection",
  __ssrInlineRender: true,
  props: {
    sectionName: {},
    entries: { default: () => [] }
  },
  setup(__props) {
    const { removeEntry } = useCvState();
    function focusEditor(id) {
      const editorElem = (void 0).getElementById(`${id}-editor`);
      if (editorElem)
        editorElem.focus();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_expansion_panel = __nuxt_component_2$1;
      const _component_CvTextEditor = _sfc_main$j;
      if (__props.sectionName) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "dynamic-section" }, _attrs))} data-v-96b9866f><button class="form__btn col-span-full" type="button" data-v-96b9866f>${ssrInterpolate(_ctx.$t("add"))} ${ssrInterpolate(_ctx.$t(__props.sectionName))}</button><ul class="col-span-full" data-v-96b9866f><!--[-->`);
        ssrRenderList(__props.entries, (entry) => {
          _push(`<li data-v-96b9866f>`);
          _push(ssrRenderComponent(_component_expansion_panel, {
            "panel-name": `${entry.title}`,
            class: "mb-3"
          }, {
            title: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="form__legend form__legend--small dynamic-section__title" data-v-96b9866f${_scopeId}><span data-v-96b9866f${_scopeId}>${ssrInterpolate(entry.title)}</span></h3>`);
              } else {
                return [
                  createVNode("h3", { class: "form__legend form__legend--small dynamic-section__title" }, [
                    createVNode("span", null, toDisplayString(entry.title), 1)
                  ])
                ];
              }
            }),
            "action-button": withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button${ssrRenderAttr("aria-label", `Remove ${entry.title} ${_ctx.$t(__props.sectionName)} from CV`)} type="button" class="form__btn form__btn--delete mr-3" data-v-96b9866f${_scopeId}><svg class="form__icon" data-v-96b9866f${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#trash")} data-v-96b9866f${_scopeId}></use></svg></button>`);
              } else {
                return [
                  createVNode("button", {
                    "aria-label": `Remove ${entry.title} ${_ctx.$t(__props.sectionName)} from CV`,
                    type: "button",
                    class: "form__btn form__btn--delete mr-3",
                    onClick: withModifiers(($event) => unref(removeEntry)({ sectionName: __props.sectionName, entry }), ["stop"])
                  }, [
                    (openBlock(), createBlock("svg", { class: "form__icon" }, [
                      createVNode("use", { href: _imports_0 + "#trash" })
                    ]))
                  ], 8, ["aria-label", "onClick"])
                ];
              }
            }),
            content: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="dynamic-section" data-v-96b9866f${_scopeId}><div class="form__group col-span-full" data-v-96b9866f${_scopeId}><label class="form__label"${ssrRenderAttr("for", `entryTitle--${entry.id}`)} data-v-96b9866f${_scopeId}>`);
                if (__props.sectionName === "education") {
                  _push2(`<!--[-->🎓<!--]-->`);
                } else if (__props.sectionName === "projects") {
                  _push2(`<!--[-->✨<!--]-->`);
                } else {
                  _push2(`<!--[-->💼<!--]-->`);
                }
                _push2(` ${ssrInterpolate(_ctx.$t("title"))}</label><input${ssrRenderAttr("id", `entryTitle--${entry.id}`)}${ssrRenderAttr("value", entry.title)} class="form__control" type="text" data-v-96b9866f${_scopeId}></div><div class="form__group col-span-full" data-v-96b9866f${_scopeId}><label class="form__label"${ssrRenderAttr("for", `entryLocation-${entry.id}`)} data-v-96b9866f${_scopeId}>`);
                if (__props.sectionName === "projects") {
                  _push2(`<!--[--> 🔗 Link <!--]-->`);
                } else {
                  _push2(`<!--[--> 📍 ${ssrInterpolate(_ctx.$t("location"))}<!--]-->`);
                }
                _push2(`</label><input${ssrRenderAttr("id", `entryLocation-${entry.id}`)}${ssrRenderAttr("value", entry.location)} class="form__control" type="text" data-v-96b9866f${_scopeId}></div><div class="form__group col-span-full" data-v-96b9866f${_scopeId}><div class="form__label flex justify-between" data-v-96b9866f${_scopeId}><label${ssrRenderAttr("for", `entryFrom-${entry.id}`)} data-v-96b9866f${_scopeId}> 📆 ${ssrInterpolate(_ctx.$t("from"))}</label>`);
                if (__props.sectionName !== "work") {
                  _push2(`<label class="form__label flex items-center" data-v-96b9866f${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(entry.displayDate) ? ssrLooseContain(entry.displayDate, null) : entry.displayDate) ? " checked" : ""} class="form__control form__control--checkbox" type="checkbox" data-v-96b9866f${_scopeId}> ${ssrInterpolate(_ctx.$t("show-date"))}</label>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><input${ssrRenderAttr("id", `entryFrom-${entry.id}`)}${ssrRenderAttr("value", entry.from)} class="form__control" type="date" data-v-96b9866f${_scopeId}></div><div class="form__group col-span-full" data-v-96b9866f${_scopeId}><label class="form__label flex justify-between"${ssrRenderAttr("for", `entryTo-${entry.id}`)} data-v-96b9866f${_scopeId}> 📆 ${ssrInterpolate(_ctx.$t("to"))} <label class="form__label flex items-center" data-v-96b9866f${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(entry.current) ? ssrLooseContain(entry.current, null) : entry.current) ? " checked" : ""} class="form__control form__control--checkbox" type="checkbox" data-v-96b9866f${_scopeId}> ${ssrInterpolate(_ctx.$t("current"))}</label></label>`);
                if (!entry.current) {
                  _push2(`<input${ssrRenderAttr("id", `entryTo-${entry.id}`)}${ssrRenderAttr("value", entry.to)} class="form__control" type="date" data-v-96b9866f${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="form__group col-span-full" data-v-96b9866f${_scopeId}><label class="form__label"${ssrRenderAttr("for", `entrySummary-${entry.id}`)} data-v-96b9866f${_scopeId}>📝 ${ssrInterpolate(_ctx.$t("summary"))}</label>`);
                _push2(ssrRenderComponent(_component_CvTextEditor, {
                  id: `entrySummary-${entry.id}`,
                  modelValue: entry.summary,
                  "onUpdate:modelValue": ($event) => entry.summary = $event,
                  class: "form__control",
                  "read-only": false
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "dynamic-section" }, [
                    createVNode("div", { class: "form__group col-span-full" }, [
                      createVNode("label", {
                        class: "form__label",
                        for: `entryTitle--${entry.id}`
                      }, [
                        __props.sectionName === "education" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode("🎓")
                        ], 64)) : __props.sectionName === "projects" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode("✨")
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createTextVNode("💼")
                        ], 64)),
                        createTextVNode(" " + toDisplayString(_ctx.$t("title")), 1)
                      ], 8, ["for"]),
                      withDirectives(createVNode("input", {
                        id: `entryTitle--${entry.id}`,
                        "onUpdate:modelValue": ($event) => entry.title = $event,
                        class: "form__control",
                        type: "text"
                      }, null, 8, ["id", "onUpdate:modelValue"]), [
                        [vModelText, entry.title]
                      ])
                    ]),
                    createVNode("div", { class: "form__group col-span-full" }, [
                      createVNode("label", {
                        class: "form__label",
                        for: `entryLocation-${entry.id}`
                      }, [
                        __props.sectionName === "projects" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode(" 🔗 Link ")
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode(" 📍 " + toDisplayString(_ctx.$t("location")), 1)
                        ], 64))
                      ], 8, ["for"]),
                      withDirectives(createVNode("input", {
                        id: `entryLocation-${entry.id}`,
                        "onUpdate:modelValue": ($event) => entry.location = $event,
                        class: "form__control",
                        type: "text"
                      }, null, 8, ["id", "onUpdate:modelValue"]), [
                        [vModelText, entry.location]
                      ])
                    ]),
                    createVNode("div", { class: "form__group col-span-full" }, [
                      createVNode("div", { class: "form__label flex justify-between" }, [
                        createVNode("label", {
                          for: `entryFrom-${entry.id}`
                        }, " 📆 " + toDisplayString(_ctx.$t("from")), 9, ["for"]),
                        __props.sectionName !== "work" ? (openBlock(), createBlock("label", {
                          key: 0,
                          class: "form__label flex items-center"
                        }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => entry.displayDate = $event,
                            class: "form__control form__control--checkbox",
                            type: "checkbox"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, entry.displayDate]
                          ]),
                          createTextVNode(" " + toDisplayString(_ctx.$t("show-date")), 1)
                        ])) : createCommentVNode("", true)
                      ]),
                      withDirectives(createVNode("input", {
                        id: `entryFrom-${entry.id}`,
                        "onUpdate:modelValue": ($event) => entry.from = $event,
                        class: "form__control",
                        type: "date"
                      }, null, 8, ["id", "onUpdate:modelValue"]), [
                        [vModelText, entry.from]
                      ])
                    ]),
                    createVNode("div", { class: "form__group col-span-full" }, [
                      createVNode("label", {
                        class: "form__label flex justify-between",
                        for: `entryTo-${entry.id}`
                      }, [
                        createTextVNode(" 📆 " + toDisplayString(_ctx.$t("to")) + " ", 1),
                        createVNode("label", { class: "form__label flex items-center" }, [
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => entry.current = $event,
                            class: "form__control form__control--checkbox",
                            type: "checkbox"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, entry.current]
                          ]),
                          createTextVNode(" " + toDisplayString(_ctx.$t("current")), 1)
                        ])
                      ], 8, ["for"]),
                      !entry.current ? withDirectives((openBlock(), createBlock("input", {
                        key: 0,
                        id: `entryTo-${entry.id}`,
                        "onUpdate:modelValue": ($event) => entry.to = $event,
                        class: "form__control",
                        type: "date"
                      }, null, 8, ["id", "onUpdate:modelValue"])), [
                        [vModelText, entry.to]
                      ]) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "form__group col-span-full" }, [
                      createVNode("label", {
                        class: "form__label",
                        for: `entrySummary-${entry.id}`,
                        onClick: ($event) => focusEditor(`entrySummary-${entry.id}`)
                      }, "📝 " + toDisplayString(_ctx.$t("summary")), 9, ["for", "onClick"]),
                      createVNode(_component_CvTextEditor, {
                        id: `entrySummary-${entry.id}`,
                        modelValue: entry.summary,
                        "onUpdate:modelValue": ($event) => entry.summary = $event,
                        class: "form__control",
                        "read-only": false
                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvDynamicSection.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-96b9866f"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "CvSettingsHistorySection",
  __ssrInlineRender: true,
  props: {
    section: {},
    name: {}
  },
  setup(__props) {
    const props = __props;
    const { formSettings } = useCvState();
    const displaySection = computed(() => `display${props.section[0].toLocaleUpperCase}${props.section.slice(1)}`);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_expansion_panel = __nuxt_component_2$1;
      const _component_CvDisplayCheckbox = __nuxt_component_5;
      const _component_CvDynamicSection = __nuxt_component_2;
      _push(`<fieldset${ssrRenderAttrs(mergeProps({ class: "form__section grid gap-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_expansion_panel, {
        "panel-name": _ctx.$t(__props.name)
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<legend class="form__legend"${_scopeId}>${ssrInterpolate(_ctx.$t(__props.name))}</legend>`);
          } else {
            return [
              createVNode("legend", { class: "form__legend" }, toDisplayString(_ctx.$t(__props.name)), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            if (__props.section !== "work") {
              _push2(ssrRenderComponent(_component_CvDisplayCheckbox, {
                class: "mb-10",
                "display-section": unref(formSettings)[unref(displaySection)],
                "section-name": __props.name
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_CvDynamicSection, {
              "section-name": __props.section,
              entries: unref(formSettings)[__props.section]
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                __props.section !== "work" ? (openBlock(), createBlock(_component_CvDisplayCheckbox, {
                  key: 0,
                  class: "mb-10",
                  "display-section": unref(formSettings)[unref(displaySection)],
                  "section-name": __props.name
                }, null, 8, ["display-section", "section-name"])) : createCommentVNode("", true),
                createVNode(_component_CvDynamicSection, {
                  "section-name": __props.section,
                  entries: unref(formSettings)[__props.section]
                }, null, 8, ["section-name", "entries"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</fieldset>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvSettingsHistorySection.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
function usePrint() {
  const { formSettings } = useCvState();
  const i18n = useI18n();
  ref();
  function downloadPdf() {
    changeDocTitle();
    (void 0).print();
  }
  function changeDocTitle() {
    (void 0).title = `CV_${formSettings.value.name}_${formSettings.value.lastName}_${i18n.locale.value}`;
  }
  return {
    downloadPdf
  };
}
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "CvSettings",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      formSettings,
      saveCurrentSettings
    } = useCvState();
    const switchLocalePath = useSwitchLocalePath();
    const i18n = useI18n();
    usePrint();
    let saveTimeout = null;
    const config = {
      layouts: ["one-column", "two-column"],
      colors: [
        { name: "pink", color: "#9D174D", darker: "#831843" },
        { name: "purple", color: "#5B21B6", darker: "#4C1D95" },
        { name: "blue", color: "#1E40AF", darker: "#1E3A8A" },
        { name: "green", color: "#065F46", darker: "#064E3B" },
        { name: "black", color: "#1F2937", darker: "#111827" }
      ]
    };
    watch(
      () => formSettings.value,
      (newValue, oldValue) => {
        if (newValue.activeColor !== oldValue.activeColor) {
          const newColor = getCurrentColor(newValue.activeColor);
          changeColor(newColor.color, newColor.darker);
        }
        if (saveTimeout) {
          clearTimeout(saveTimeout);
        }
        saveTimeout = setTimeout(() => {
          void saveCurrentSettings();
        }, 700);
      },
      { deep: true }
    );
    const formSettingsHref = computed(() => {
      return `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify({ formSettings: formSettings.value })
      )}`;
    });
    const availableLocales = computed(() => {
      return i18n.localeCodes.value.filter((locale) => !locale.includes("-"));
    });
    function changeColor(color, darker) {
      formSettings.value.activeColor = color;
      (void 0).documentElement.style.setProperty("--primary", color);
      (void 0).documentElement.style.setProperty("--primary-darker", darker);
    }
    function getCurrentColor(colorValue) {
      return config.colors.find((color) => color.color === colorValue) || config.colors[1];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LandingLogo = _sfc_main$p;
      const _component_nuxt_link = __nuxt_component_0$4;
      const _component_expansion_panel = __nuxt_component_2$1;
      const _component_CvProfileImageUploader = _sfc_main$n;
      const _component_CvInputTags = __nuxt_component_4$1;
      const _component_CvDisplayCheckbox = __nuxt_component_5;
      const _component_CvSettingsHistorySection = _sfc_main$h;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "settings" }, _attrs))} data-v-05de4b4b><div class="flex justify-between items-center title pt-2 px-6" data-v-05de4b4b>`);
      _push(ssrRenderComponent(_component_LandingLogo, null, null, _parent));
      _push(`<a class="buy-me-a-coffee" href="https://ko-fi.com/X8X4COWK0" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee" data-v-05de4b4b><img class="buy-me-a-coffee__image" src="https://cdn.ko-fi.com/cdn/kofi5.png?v=3" width="118px" height="30px" alt="Buy me a coffee button" data-v-05de4b4b></a></div><h2 class="flex flex-wrap text-xl/normal pt-10 px-6 tracking-wide uppercase" data-v-05de4b4b><span class="title__text" data-v-05de4b4b>${ssrInterpolate(_ctx.$t("cv-settings"))}</span></h2><form class="form mb-10" autocomplete="on" data-v-05de4b4b><div class="form__section px-6 py-3" data-v-05de4b4b><button class="form__btn form__btn--ghost" type="button" data-v-05de4b4b>${ssrInterpolate(_ctx.$t("reset-settings"))}</button><button class="form__btn form__btn--ghost" type="button" data-v-05de4b4b>${ssrInterpolate(_ctx.$t("clear-settings"))}</button></div><fieldset class="form__section px-6 py-3" data-v-05de4b4b><legend class="form__legend" data-v-05de4b4b>${ssrInterpolate(_ctx.$t("cv-language"))}</legend><div class="flex flex-wrap gap-2 justify-start w-full" data-v-05de4b4b><!--[-->`);
      ssrRenderList(unref(availableLocales), (locale) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: locale,
          class: "form__btn form__btn--ghost",
          to: unref(switchLocalePath)(locale),
          exact: true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(`${locale}-name`))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(`${locale}-name`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></fieldset><fieldset class="form__section px-6 py-3" data-v-05de4b4b><legend class="form__legend" data-v-05de4b4b>${ssrInterpolate(_ctx.$t("layout-theme"))}</legend><div class="flex flex-wrap gap-2 justify-start" data-v-05de4b4b><!--[-->`);
      ssrRenderList(config.layouts, (layout) => {
        _push(`<label tabindex="0" class="${ssrRenderClass([[
          {
            "form__btn--active": layout === unref(formSettings).layout
          }
        ], "form__btn form__btn--ghost capitalize"])}" data-v-05de4b4b>${ssrInterpolate(_ctx.$t(layout))} <input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(formSettings).layout, layout)) ? " checked" : ""}${ssrRenderAttr("value", layout)} type="radio" class="sr-only" data-v-05de4b4b></label>`);
      });
      _push(`<!--]--></div></fieldset><fieldset class="form__section px-6 py-3" data-v-05de4b4b><legend class="form__legend" data-v-05de4b4b>${ssrInterpolate(_ctx.$t("color-theme"))}</legend><div class="flex flex-wrap gap-2 justify-start" data-v-05de4b4b><!--[-->`);
      ssrRenderList(config.colors, (color) => {
        _push(`<label tabindex="0" class="${ssrRenderClass([[
          `form__btn--${color.name}`,
          {
            "form__btn--color-selected": color.color === unref(formSettings).activeColor
          }
        ], "form__btn form__btn--color-theme capitalize"])}" data-v-05de4b4b>${ssrInterpolate(_ctx.$t(color.name))} <input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(formSettings).activeColor, color.color)) ? " checked" : ""} type="radio" class="sr-only"${ssrRenderAttr("value", color.color)} data-v-05de4b4b></label>`);
      });
      _push(`<!--]--></div></fieldset><fieldset class="form__section" data-v-05de4b4b>`);
      _push(ssrRenderComponent(_component_expansion_panel, {
        "panel-name": _ctx.$t("personal-details")
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<legend class="form__legend" data-v-05de4b4b${_scopeId}>${ssrInterpolate(_ctx.$t("personal-details"))}</legend>`);
          } else {
            return [
              createVNode("legend", { class: "form__legend" }, toDisplayString(_ctx.$t("personal-details")), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-2 gap-x-3 gap-y-10" data-v-05de4b4b${_scopeId}><div class="form__group col-span-full" data-v-05de4b4b${_scopeId}><span class="form__label" data-v-05de4b4b${_scopeId}>📷 ${ssrInterpolate(_ctx.$t("profile-image"))}</span>`);
            _push2(ssrRenderComponent(_component_CvProfileImageUploader, {
              modelValue: unref(formSettings).profileImageDataUri,
              "onUpdate:modelValue": ($event) => unref(formSettings).profileImageDataUri = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="form__group col-span-full" data-v-05de4b4b${_scopeId}><label class="form__label" for="job-pos" data-v-05de4b4b${_scopeId}>💼 ${ssrInterpolate(_ctx.$t("job-title"))}</label><input id="job-pos"${ssrRenderAttr("value", unref(formSettings).jobTitle)} class="form__control" type="text" data-v-05de4b4b${_scopeId}></div><div class="form__group" data-v-05de4b4b${_scopeId}><label class="form__label" for="first-name" data-v-05de4b4b${_scopeId}>👤 ${ssrInterpolate(_ctx.$t("first-name"))}</label><input id="first-name"${ssrRenderAttr("value", unref(formSettings).name)} class="form__control" type="text" data-v-05de4b4b${_scopeId}></div><div class="form__group" data-v-05de4b4b${_scopeId}><label class="form__label" for="last-name" data-v-05de4b4b${_scopeId}>👤 ${ssrInterpolate(_ctx.$t("last-name"))}</label><input id="last-name"${ssrRenderAttr("value", unref(formSettings).lastName)} class="form__control" type="text" data-v-05de4b4b${_scopeId}></div><div class="form__group col-span-full" data-v-05de4b4b${_scopeId}><label class="form__label" for="email" data-v-05de4b4b${_scopeId}>✉️ ${ssrInterpolate(_ctx.$t("email"))}</label><input id="email"${ssrRenderAttr("value", unref(formSettings).email)} class="form__control" type="email" data-v-05de4b4b${_scopeId}></div><div class="form__group" data-v-05de4b4b${_scopeId}><label class="form__label" for="location" data-v-05de4b4b${_scopeId}>📍 ${ssrInterpolate(_ctx.$t("location"))}</label><input id="location"${ssrRenderAttr("value", unref(formSettings).location)} class="form__control" type="text" data-v-05de4b4b${_scopeId}></div><div class="form__group" data-v-05de4b4b${_scopeId}><label class="form__label" for="phone" data-v-05de4b4b${_scopeId}>📱 ${ssrInterpolate(_ctx.$t("phone-number"))}</label><input id="phone"${ssrRenderAttr("value", unref(formSettings).phoneNumber)} class="form__control" type="tel" data-v-05de4b4b${_scopeId}></div><div class="form__group col-span-full" data-v-05de4b4b${_scopeId}><label class="form__label" for="aboutme" data-v-05de4b4b${_scopeId}>🌟 ${ssrInterpolate(_ctx.$t("about-me"))}</label><textarea id="aboutme" class="form__control" name="aboutme" cols="30" rows="10" data-v-05de4b4b${_scopeId}>${ssrInterpolate(unref(formSettings).aboutme)}</textarea></div></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-2 gap-x-3 gap-y-10" }, [
                createVNode("div", { class: "form__group col-span-full" }, [
                  createVNode("span", { class: "form__label" }, "📷 " + toDisplayString(_ctx.$t("profile-image")), 1),
                  createVNode(_component_CvProfileImageUploader, {
                    modelValue: unref(formSettings).profileImageDataUri,
                    "onUpdate:modelValue": ($event) => unref(formSettings).profileImageDataUri = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "form__group col-span-full" }, [
                  createVNode("label", {
                    class: "form__label",
                    for: "job-pos"
                  }, "💼 " + toDisplayString(_ctx.$t("job-title")), 1),
                  withDirectives(createVNode("input", {
                    id: "job-pos",
                    "onUpdate:modelValue": ($event) => unref(formSettings).jobTitle = $event,
                    class: "form__control",
                    type: "text"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(formSettings).jobTitle]
                  ])
                ]),
                createVNode("div", { class: "form__group" }, [
                  createVNode("label", {
                    class: "form__label",
                    for: "first-name"
                  }, "👤 " + toDisplayString(_ctx.$t("first-name")), 1),
                  withDirectives(createVNode("input", {
                    id: "first-name",
                    "onUpdate:modelValue": ($event) => unref(formSettings).name = $event,
                    class: "form__control",
                    type: "text"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(formSettings).name]
                  ])
                ]),
                createVNode("div", { class: "form__group" }, [
                  createVNode("label", {
                    class: "form__label",
                    for: "last-name"
                  }, "👤 " + toDisplayString(_ctx.$t("last-name")), 1),
                  withDirectives(createVNode("input", {
                    id: "last-name",
                    "onUpdate:modelValue": ($event) => unref(formSettings).lastName = $event,
                    class: "form__control",
                    type: "text"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(formSettings).lastName]
                  ])
                ]),
                createVNode("div", { class: "form__group col-span-full" }, [
                  createVNode("label", {
                    class: "form__label",
                    for: "email"
                  }, "✉️ " + toDisplayString(_ctx.$t("email")), 1),
                  withDirectives(createVNode("input", {
                    id: "email",
                    "onUpdate:modelValue": ($event) => unref(formSettings).email = $event,
                    class: "form__control",
                    type: "email"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(formSettings).email]
                  ])
                ]),
                createVNode("div", { class: "form__group" }, [
                  createVNode("label", {
                    class: "form__label",
                    for: "location"
                  }, "📍 " + toDisplayString(_ctx.$t("location")), 1),
                  withDirectives(createVNode("input", {
                    id: "location",
                    "onUpdate:modelValue": ($event) => unref(formSettings).location = $event,
                    class: "form__control",
                    type: "text"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(formSettings).location]
                  ])
                ]),
                createVNode("div", { class: "form__group" }, [
                  createVNode("label", {
                    class: "form__label",
                    for: "phone"
                  }, "📱 " + toDisplayString(_ctx.$t("phone-number")), 1),
                  withDirectives(createVNode("input", {
                    id: "phone",
                    "onUpdate:modelValue": ($event) => unref(formSettings).phoneNumber = $event,
                    class: "form__control",
                    type: "tel"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(formSettings).phoneNumber]
                  ])
                ]),
                createVNode("div", { class: "form__group col-span-full" }, [
                  createVNode("label", {
                    class: "form__label",
                    for: "aboutme"
                  }, "🌟 " + toDisplayString(_ctx.$t("about-me")), 1),
                  withDirectives(createVNode("textarea", {
                    id: "aboutme",
                    "onUpdate:modelValue": ($event) => unref(formSettings).aboutme = $event,
                    class: "form__control",
                    name: "aboutme",
                    cols: "30",
                    rows: "10"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(formSettings).aboutme]
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</fieldset><fieldset class="form__section grid gap-3" data-v-05de4b4b>`);
      _push(ssrRenderComponent(_component_expansion_panel, {
        "panel-name": _ctx.$t("skills")
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<legend class="form__legend" data-v-05de4b4b${_scopeId}>${ssrInterpolate(_ctx.$t("skills"))}</legend>`);
          } else {
            return [
              createVNode("legend", { class: "form__legend" }, toDisplayString(_ctx.$t("skills")), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-05de4b4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CvInputTags, {
              modelValue: unref(formSettings).jobSkills,
              "onUpdate:modelValue": ($event) => unref(formSettings).jobSkills = $event,
              "tag-list-name": "jobSkills",
              "tag-list-label": `🛠 ${_ctx.$t("technical-skills")}`,
              display: Boolean(unref(formSettings).displayJobSkills)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CvInputTags, {
              modelValue: unref(formSettings).softSkills,
              "onUpdate:modelValue": ($event) => unref(formSettings).softSkills = $event,
              "tag-list-name": "softSkills",
              "tag-list-label": `🧸 ${_ctx.$t("soft-skills")}`,
              display: Boolean(unref(formSettings).displaySoftSkills)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CvInputTags, {
              modelValue: unref(formSettings).languages,
              "onUpdate:modelValue": ($event) => unref(formSettings).languages = $event,
              "tag-list-name": "languages",
              "tag-list-label": `🌎 ${_ctx.$t("languages")}`,
              display: Boolean(unref(formSettings).displayLanguages)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CvInputTags, {
              modelValue: unref(formSettings).interests,
              "onUpdate:modelValue": ($event) => unref(formSettings).interests = $event,
              "tag-list-name": "interests",
              "tag-list-label": `🧸 ${_ctx.$t("interests")}`,
              display: Boolean(unref(formSettings).displayInterests)
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_CvInputTags, {
                  modelValue: unref(formSettings).jobSkills,
                  "onUpdate:modelValue": ($event) => unref(formSettings).jobSkills = $event,
                  "tag-list-name": "jobSkills",
                  "tag-list-label": `🛠 ${_ctx.$t("technical-skills")}`,
                  display: Boolean(unref(formSettings).displayJobSkills)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "tag-list-label", "display"]),
                createVNode(_component_CvInputTags, {
                  modelValue: unref(formSettings).softSkills,
                  "onUpdate:modelValue": ($event) => unref(formSettings).softSkills = $event,
                  "tag-list-name": "softSkills",
                  "tag-list-label": `🧸 ${_ctx.$t("soft-skills")}`,
                  display: Boolean(unref(formSettings).displaySoftSkills)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "tag-list-label", "display"]),
                createVNode(_component_CvInputTags, {
                  modelValue: unref(formSettings).languages,
                  "onUpdate:modelValue": ($event) => unref(formSettings).languages = $event,
                  "tag-list-name": "languages",
                  "tag-list-label": `🌎 ${_ctx.$t("languages")}`,
                  display: Boolean(unref(formSettings).displayLanguages)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "tag-list-label", "display"]),
                createVNode(_component_CvInputTags, {
                  modelValue: unref(formSettings).interests,
                  "onUpdate:modelValue": ($event) => unref(formSettings).interests = $event,
                  "tag-list-name": "interests",
                  "tag-list-label": `🧸 ${_ctx.$t("interests")}`,
                  display: Boolean(unref(formSettings).displayInterests)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "tag-list-label", "display"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</fieldset><fieldset class="form__section grid gap-3" data-v-05de4b4b>`);
      _push(ssrRenderComponent(_component_expansion_panel, {
        "panel-name": _ctx.$t("social")
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<legend class="form__legend" data-v-05de4b4b${_scopeId}>${ssrInterpolate(_ctx.$t("social"))}</legend>`);
          } else {
            return [
              createVNode("legend", { class: "form__legend" }, toDisplayString(_ctx.$t("social")), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-05de4b4b${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CvDisplayCheckbox, {
              class: "form__display-checkbox mb-10",
              "display-section": unref(formSettings).displaySocial,
              "section-name": "social"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-2 gap-x-3 gap-y-10" data-v-05de4b4b${_scopeId}><div class="form__group col-span-full" data-v-05de4b4b${_scopeId}><label class="form__label flex" for="linkedin" data-v-05de4b4b${_scopeId}><svg class="form__icon rounded mr-1" data-v-05de4b4b${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#linkedin")} data-v-05de4b4b${_scopeId}></use></svg> Linkedin </label><input id="linkedin"${ssrRenderAttr("value", unref(formSettings).linkedin)} class="form__control" type="text" data-v-05de4b4b${_scopeId}></div><div class="form__group col-span-full" data-v-05de4b4b${_scopeId}><label class="form__label flex" for="twitter" data-v-05de4b4b${_scopeId}><svg class="form__icon rounded mr-1" data-v-05de4b4b${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#twitter")} data-v-05de4b4b${_scopeId}></use></svg> Twitter </label><input id="twitter"${ssrRenderAttr("value", unref(formSettings).twitter)} class="form__control" type="text" data-v-05de4b4b${_scopeId}></div><div class="form__group col-span-full" data-v-05de4b4b${_scopeId}><label class="form__label flex" for="github" data-v-05de4b4b${_scopeId}><svg class="form__icon mr-1" data-v-05de4b4b${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#github")} data-v-05de4b4b${_scopeId}></use></svg> GitHub </label><input id="github"${ssrRenderAttr("value", unref(formSettings).github)} class="form__control" type="text" data-v-05de4b4b${_scopeId}></div><div class="form__group col-span-full" data-v-05de4b4b${_scopeId}><label class="form__label flex" for="website" data-v-05de4b4b${_scopeId}><svg class="form__icon mr-1" data-v-05de4b4b${_scopeId}><use${ssrRenderAttr("href", _imports_0 + "#website")} data-v-05de4b4b${_scopeId}></use></svg> Website </label><input id="website"${ssrRenderAttr("value", unref(formSettings).website)} class="form__control" type="text" data-v-05de4b4b${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_CvDisplayCheckbox, {
                  class: "form__display-checkbox mb-10",
                  "display-section": unref(formSettings).displaySocial,
                  "section-name": "social"
                }, null, 8, ["display-section"]),
                createVNode("div", { class: "grid grid-cols-2 gap-x-3 gap-y-10" }, [
                  createVNode("div", { class: "form__group col-span-full" }, [
                    createVNode("label", {
                      class: "form__label flex",
                      for: "linkedin"
                    }, [
                      (openBlock(), createBlock("svg", { class: "form__icon rounded mr-1" }, [
                        createVNode("use", { href: _imports_0 + "#linkedin" })
                      ])),
                      createTextVNode(" Linkedin ")
                    ]),
                    withDirectives(createVNode("input", {
                      id: "linkedin",
                      "onUpdate:modelValue": ($event) => unref(formSettings).linkedin = $event,
                      class: "form__control",
                      type: "text"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(formSettings).linkedin]
                    ])
                  ]),
                  createVNode("div", { class: "form__group col-span-full" }, [
                    createVNode("label", {
                      class: "form__label flex",
                      for: "twitter"
                    }, [
                      (openBlock(), createBlock("svg", { class: "form__icon rounded mr-1" }, [
                        createVNode("use", { href: _imports_0 + "#twitter" })
                      ])),
                      createTextVNode(" Twitter ")
                    ]),
                    withDirectives(createVNode("input", {
                      id: "twitter",
                      "onUpdate:modelValue": ($event) => unref(formSettings).twitter = $event,
                      class: "form__control",
                      type: "text"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(formSettings).twitter]
                    ])
                  ]),
                  createVNode("div", { class: "form__group col-span-full" }, [
                    createVNode("label", {
                      class: "form__label flex",
                      for: "github"
                    }, [
                      (openBlock(), createBlock("svg", { class: "form__icon mr-1" }, [
                        createVNode("use", { href: _imports_0 + "#github" })
                      ])),
                      createTextVNode(" GitHub ")
                    ]),
                    withDirectives(createVNode("input", {
                      id: "github",
                      "onUpdate:modelValue": ($event) => unref(formSettings).github = $event,
                      class: "form__control",
                      type: "text"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(formSettings).github]
                    ])
                  ]),
                  createVNode("div", { class: "form__group col-span-full" }, [
                    createVNode("label", {
                      class: "form__label flex",
                      for: "website"
                    }, [
                      (openBlock(), createBlock("svg", { class: "form__icon mr-1" }, [
                        createVNode("use", { href: _imports_0 + "#website" })
                      ])),
                      createTextVNode(" Website ")
                    ]),
                    withDirectives(createVNode("input", {
                      id: "website",
                      "onUpdate:modelValue": ($event) => unref(formSettings).website = $event,
                      class: "form__control",
                      type: "text"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(formSettings).website]
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</fieldset><!--[-->`);
      ssrRenderList(unref(SectionNameList), (value, key) => {
        _push(ssrRenderComponent(_component_CvSettingsHistorySection, {
          key,
          section: key,
          name: value
        }, null, _parent));
      });
      _push(`<!--]--><div class="form__section flex flex-col p-6 gap-3" data-v-05de4b4b><button type="button" class="form__btn flex flex-col justify-center" data-v-05de4b4b><span data-v-05de4b4b>${ssrInterpolate(_ctx.$t("download-cv-pdf"))}</span></button><label tabindex="0" class="form__btn flex justify-center" data-v-05de4b4b>${ssrInterpolate(_ctx.$t("upload-cv"))} (JSON) <input type="file" accept=".json" name="uploadCV" class="hidden" data-v-05de4b4b></label><a${ssrRenderAttr("href", unref(formSettingsHref))} rel="noopener"${ssrRenderAttr("download", `CV_${unref(formSettings).name}_${unref(formSettings).lastName}_${_ctx.$i18n.locale}.json`)} class="form__btn flex justify-center" data-v-05de4b4b>${ssrInterpolate(_ctx.$t("download-cv-settings"))} (JSON)</a></div></form></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvSettings.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-05de4b4b"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewName",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h2${ssrRenderAttrs(mergeProps({ class: "text-primary text-xl/normal uppercase font-bold tracking-wide" }, _attrs))}>${ssrInterpolate(unref(formSettings).name)} ${ssrInterpolate(unref(formSettings).lastName)}</h2>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewName.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h3${ssrRenderAttrs(mergeProps({ class: "text-base/normal uppercase mb-1 font-bold" }, _attrs))}>${ssrInterpolate(unref(formSettings).jobTitle)}</h3>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewTitle.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewAbout",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cv__section cv__section--main" }, _attrs))}><h4 class="${ssrRenderClass([unref(formSettings).layout === "one-column" && "sr-only", "cv__section-title cv__section-title--main"])}">${ssrInterpolate(_ctx.$t("about-me"))}</h4><p class="font-light"><span class="whitespace-pre-wrap">${ssrInterpolate(unref(formSettings).aboutme)}</span></p></section>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewAbout.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewContact",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    const emailHref = computed(() => {
      return `mailto:${formSettings.value.email}`;
    });
    const phoneNumberHref = computed(() => {
      return `tel:${formSettings.value.phoneNumber}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["cv__section", unref(formSettings).layout === "one-column" && "mt-0"]
      }, _attrs))}><h4 class="${ssrRenderClass([[{ "sr-only": unref(formSettings).layout === "one-column" }], "cv__section-title"])}">${ssrInterpolate(_ctx.$t("contact"))}</h4><div class="${ssrRenderClass([unref(formSettings).layout === "one-column" ? "flex-wrap gap-2" : "flex-col", "flex"])}">`);
      if (unref(formSettings).email) {
        _push(`<div class="cv__icon-wrapper"><svg class="cv__icon"><use${ssrRenderAttr("href", _imports_0 + "#email")}></use></svg><a${ssrRenderAttr("href", unref(emailHref))} rel="noopener">${ssrInterpolate(unref(formSettings).email)}</a></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(formSettings).phoneNumber) {
        _push(`<div class="cv__icon-wrapper"><svg class="cv__icon"><use${ssrRenderAttr("href", _imports_0 + "#phone")}></use></svg><a${ssrRenderAttr("href", unref(phoneNumberHref))} rel="noopener">${ssrInterpolate(unref(formSettings).phoneNumber)}</a></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(formSettings).location) {
        _push(`<div class="cv__icon-wrapper"><svg class="cv__icon"><use${ssrRenderAttr("href", _imports_0 + "#location")}></use></svg><span tabindex="0">${ssrInterpolate(unref(formSettings).location)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewContact.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewSocial",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(formSettings).displaySocial) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "cv__section" }, _attrs))}><h4 class="${ssrRenderClass([unref(formSettings).layout === "one-column" && "sr-only", "cv__section-title"])}">${ssrInterpolate(_ctx.$t("social"))}</h4><div class="${ssrRenderClass([unref(formSettings).layout === "one-column" ? "flex-row flex-wrap gap-2" : "flex-col", "flex"])}">`);
        if (unref(formSettings).linkedin) {
          _push(`<div class="cv__icon-wrapper"><svg class="cv__icon"><use${ssrRenderAttr("href", _imports_0 + "#linkedin-color")}></use></svg><a target="_blank" rel="noopener"${ssrRenderAttr("href", `https://linkedin.com/in/${unref(formSettings).linkedin}`)}>${ssrInterpolate(unref(formSettings).linkedin)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(formSettings).twitter) {
          _push(`<div class="cv__icon-wrapper"><svg class="cv__icon"><use${ssrRenderAttr("href", _imports_0 + "#twitter-color")}></use></svg><a target="_blank" rel="noopener"${ssrRenderAttr("href", `https://twitter.com/${unref(formSettings).twitter}`)}>${ssrInterpolate(unref(formSettings).twitter)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(formSettings).github) {
          _push(`<div class="cv__icon-wrapper"><svg class="cv__icon"><use${ssrRenderAttr("href", _imports_0 + "#github-color")}></use></svg><a target="_blank" rel="noopener"${ssrRenderAttr("href", `https://github.com/${unref(formSettings).github}`)}>${ssrInterpolate(unref(formSettings).github)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(formSettings).website) {
          _push(`<div class="cv__icon-wrapper"><svg class="cv__icon"><use${ssrRenderAttr("href", _imports_0 + "#website")}></use></svg><a target="_blank" rel="noopener"${ssrRenderAttr("href", unref(formSettings).website.includes("https") ? unref(formSettings).website : `https://${unref(formSettings).website}`)}>${ssrInterpolate(unref(formSettings).website)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewSocial.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CvProfileImageViewer",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(formSettings).profileImageDataUri) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          class: "object-cover aspect-square max-w-[212px] max-h-[212px]",
          src: unref(formSettings).profileImageDataUri ?? "",
          alt: "Your profile image"
        }, _attrs))}>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvProfileImageViewer.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewSkill",
  __ssrInlineRender: true,
  props: {
    display: { type: Boolean },
    skills: {},
    skillName: {},
    withTags: { type: Boolean },
    isLanguage: {}
  },
  setup(__props) {
    const { formSettings } = useCvState();
    function formatSkill(skillText, index, length) {
      if (formSettings.value.layout !== "one-column") {
        return skillText;
      }
      return `${skillText}${withPunctuation(index, length)}`;
    }
    function formatLangLevel(langLevel, index, length) {
      if (formSettings.value.layout !== "one-column") {
        return langLevel;
      }
      return ` (${langLevel})${withPunctuation(index, length)}`;
    }
    function withPunctuation(index, length) {
      return formSettings.value.layout === "one-column" && index < length - 1 ? ", " : ".";
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.display) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: ["cv__section preview-skill", unref(formSettings).layout === "one-column" && "inline-block w-full"]
        }, _attrs))} data-v-62073c28><h3 class="${ssrRenderClass([unref(formSettings).layout === "one-column" ? "two-dots inline" : "cv__section-title", "capitalize"])}" data-v-62073c28>${ssrInterpolate(__props.skillName)}</h3><ul class="${ssrRenderClass([[{ inline: unref(formSettings).layout === "one-column" }, { cv__list: unref(formSettings).layout !== "one-column" && !__props.withTags && !__props.isLanguage }, { cv__tags: __props.withTags }], "font-light"])}" data-v-62073c28><!--[-->`);
        ssrRenderList(__props.skills, (skill, i) => {
          _push(`<li class="${ssrRenderClass([{ "flex justify-between": __props.isLanguage && unref(formSettings).layout === "two-column" }, { inline: unref(formSettings).layout === "one-column" }, { cv__tag: __props.withTags }])}" data-v-62073c28>`);
          if (__props.isLanguage) {
            _push(`<!--[--><span class="${ssrRenderClass(unref(formSettings).layout === "one-column" ? "font-light" : "font-medium")}" data-v-62073c28>${ssrInterpolate(skill.lang)}</span><span class="font-light ml-auto whitespace-nowrap" data-v-62073c28>${ssrInterpolate(formatLangLevel(_ctx.$t(skill.level), i, __props.skills.length))}</span><!--]-->`);
          } else {
            _push(`<!--[-->${ssrInterpolate(formatSkill(skill, i, __props.skills.length))}<!--]-->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewSkill.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-62073c28"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewSkills",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CvPreviewSkill = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cv__section" }, _attrs))} data-v-7d147a52><h4 class="${ssrRenderClass([unref(formSettings).layout === "one-column" ? "cv__section-title--main" : "sr-only", "cv__section-title"])}" data-v-7d147a52><span data-v-7d147a52>${ssrInterpolate(_ctx.$t("skills"))}</span>`);
      if (unref(formSettings).displayInterests) {
        _push(`<span class="slash" data-v-7d147a52>/</span>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(formSettings).displayInterests) {
        _push(`<span data-v-7d147a52>${ssrInterpolate(_ctx.$t("interests"))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h4>`);
      _push(ssrRenderComponent(_component_CvPreviewSkill, {
        "skill-name": _ctx.$t("technical-skills"),
        display: unref(formSettings).displayJobSkills,
        skills: unref(formSettings).jobSkills,
        "with-tags": true
      }, null, _parent));
      _push(ssrRenderComponent(_component_CvPreviewSkill, {
        "skill-name": _ctx.$t("soft-skills"),
        display: unref(formSettings).displaySoftSkills,
        skills: unref(formSettings).softSkills
      }, null, _parent));
      _push(ssrRenderComponent(_component_CvPreviewSkill, {
        "skill-name": _ctx.$t("languages"),
        display: unref(formSettings).displayLanguages,
        skills: unref(formSettings).languages,
        "is-language": true
      }, null, _parent));
      _push(ssrRenderComponent(_component_CvPreviewSkill, {
        "skill-name": _ctx.$t("interests"),
        display: unref(formSettings).displayInterests,
        skills: unref(formSettings).interests
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewSkills.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-7d147a52"]]);
function useFormatDate() {
  const i18n = useI18n();
  return function formatDate(date) {
    const options = {
      timeZone: "UTC",
      year: "numeric",
      month: "short"
    };
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString(i18n.locale.value, options);
  };
}
function orderEvents(arr) {
  return [...arr].sort(
    (a, b) => new Date(b.from).getTime() - new Date(a.from).getTime()
  );
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewExperience",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    const formatDate = useFormatDate();
    const workSorted = computed(() => {
      return orderEvents(formSettings.value.work);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CvTextEditor = _sfc_main$j;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cv__section cv__section--main w-full" }, _attrs))}><h4 class="cv__section-title cv__section-title--main">${ssrInterpolate(_ctx.$t("experience"))}</h4><ul class="cv__event"><!--[-->`);
      ssrRenderList(unref(workSorted), (job) => {
        _push(`<li><div class="grid grid-cols-3 gap-3"><h5 class="cv__section-title cv__section-title--sm">${ssrInterpolate(job.title)}</h5><span class="justify-self-center">${ssrInterpolate(job.location)}</span><span class="justify-self-end">${ssrInterpolate(unref(formatDate)(job.from))} – `);
        if (job.current) {
          _push(`<!--[-->${ssrInterpolate(_ctx.$t("current"))}<!--]-->`);
        } else {
          _push(`<!--[-->${ssrInterpolate(unref(formatDate)(job.to))}<!--]-->`);
        }
        _push(`</span></div>`);
        _push(ssrRenderComponent(_component_CvTextEditor, {
          modelValue: job.summary,
          "onUpdate:modelValue": ($event) => job.summary = $event,
          "read-only": true,
          class: "cv__desc"
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewExperience.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewEducation",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    const formatDate = useFormatDate();
    const educationSorted = computed(() => {
      return orderEvents(formSettings.value.education);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CvTextEditor = _sfc_main$j;
      if (unref(formSettings).displayEducation) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "cv__section cv__section--main w-full" }, _attrs))}><h4 class="cv__section-title cv__section-title--main">${ssrInterpolate(_ctx.$t("education"))}</h4><ul class="cv__event"><!--[-->`);
        ssrRenderList(unref(educationSorted), (edu) => {
          _push(`<li><div class="${ssrRenderClass([[edu.displayDate ? "grid grid-cols-3" : "flex justify-between"], "gap-3"])}"><h5 class="cv__section-title cv__section-title--sm">${ssrInterpolate(edu.title)}</h5><span class="justify-self-center">${ssrInterpolate(edu.location)}</span>`);
          if (edu.displayDate) {
            _push(`<span class="justify-self-end flex-shrink-0">${ssrInterpolate(unref(formatDate)(edu.from))} – `);
            if (edu.current) {
              _push(`<!--[-->${ssrInterpolate(_ctx.$t("current"))}<!--]-->`);
            } else {
              _push(`<!--[-->${ssrInterpolate(unref(formatDate)(edu.to))}<!--]-->`);
            }
            _push(`</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_component_CvTextEditor, {
            modelValue: edu.summary,
            "onUpdate:modelValue": ($event) => edu.summary = $event,
            "read-only": true,
            class: "cv__desc"
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewEducation.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewProjectLink",
  __ssrInlineRender: true,
  props: {
    title: {},
    href: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.href) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: "w-fit flex items-center font-medium italic text-underline before:bg-slate-700",
          target: "_blank",
          rel: "noopener",
          href: __props.href,
          "aria-label": `Open ${__props.title} project in new tab`
        }, _attrs))} data-v-63741d16>${ssrInterpolate(__props.href.replace(/https?:\/\//, ""))} <svg class="ml-1 size-4" data-v-63741d16><use${ssrRenderAttr("href", _imports_0 + "#open-in-new-tab")} data-v-63741d16></use></svg></a>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewProjectLink.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-63741d16"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewProjects",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    const projectsSorted = computed(() => {
      return orderEvents(formSettings.value.projects);
    });
    const formatDate = useFormatDate();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CvPreviewProjectLink = __nuxt_component_0$1;
      const _component_CvTextEditor = _sfc_main$j;
      if (unref(formSettings).displayProjects) {
        _push(`<section${ssrRenderAttrs(mergeProps({ class: "cv__section cv__section--main w-full" }, _attrs))}><h4 class="cv__section-title cv__section-title--main">${ssrInterpolate(_ctx.$t("projects"))}</h4><ul class="cv__event"><!--[-->`);
        ssrRenderList(unref(projectsSorted), (project) => {
          _push(`<li><div class="flex justify-between"><h5 class="${ssrRenderClass([[{ "w-full justify-between gap-0": !project.displayDate }], "cv__section-title cv__section-title--sm flex gap-2"])}"><span>${ssrInterpolate(project.title)}</span>`);
          if (unref(formSettings).layout === "one-column") {
            _push(ssrRenderComponent(_component_CvPreviewProjectLink, {
              title: project.title,
              href: project.location
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</h5>`);
          if (project.displayDate) {
            _push(`<span>${ssrInterpolate(unref(formatDate)(project.from))} – `);
            if (project.current) {
              _push(`<!--[-->${ssrInterpolate(_ctx.$t("current"))}<!--]-->`);
            } else {
              _push(`<!--[-->${ssrInterpolate(unref(formatDate)(project.to))}<!--]-->`);
            }
            _push(`</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (unref(formSettings).layout === "two-column") {
            _push(ssrRenderComponent(_component_CvPreviewProjectLink, {
              class: "mb-1",
              title: project.title,
              href: project.location
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(ssrRenderComponent(_component_CvTextEditor, {
            modelValue: project.summary,
            "onUpdate:modelValue": ($event) => project.summary = $event,
            "read-only": true,
            class: "cv__desc"
          }, null, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewProjects.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CvPreviewName = _sfc_main$f;
  const _component_CvPreviewTitle = _sfc_main$e;
  const _component_CvPreviewAbout = _sfc_main$d;
  const _component_CvPreviewContact = _sfc_main$c;
  const _component_CvPreviewSocial = _sfc_main$b;
  const _component_CvProfileImageViewer = _sfc_main$a;
  const _component_CvPreviewSkills = __nuxt_component_4;
  const _component_CvPreviewExperience = _sfc_main$7;
  const _component_CvPreviewEducation = _sfc_main$6;
  const _component_CvPreviewProjects = _sfc_main$4;
  _push(`<!--[--><div class="flex justify-between gap-1" data-v-16dc263e><div class="flex flex-col gap-1 justify-between" data-v-16dc263e><div class="flex flex-col justify-center" data-v-16dc263e>`);
  _push(ssrRenderComponent(_component_CvPreviewName, null, null, _parent));
  _push(ssrRenderComponent(_component_CvPreviewTitle, null, null, _parent));
  _push(ssrRenderComponent(_component_CvPreviewAbout, null, null, _parent));
  _push(`</div><div class="flex gap-2" data-v-16dc263e>`);
  _push(ssrRenderComponent(_component_CvPreviewContact, null, null, _parent));
  _push(ssrRenderComponent(_component_CvPreviewSocial, null, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_CvProfileImageViewer, { class: "rounded ml-2" }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CvPreviewSkills, null, null, _parent));
  _push(ssrRenderComponent(_component_CvPreviewExperience, null, null, _parent));
  _push(ssrRenderComponent(_component_CvPreviewEducation, null, null, _parent));
  _push(ssrRenderComponent(_component_CvPreviewProjects, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewOneColumn.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-16dc263e"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CvPreviewTwoColumn",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings } = useCvState();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CvProfileImageViewer = _sfc_main$a;
      const _component_CvPreviewName = _sfc_main$f;
      const _component_CvPreviewTitle = _sfc_main$e;
      const _component_CvPreviewContact = _sfc_main$c;
      const _component_CvPreviewSkills = __nuxt_component_4;
      const _component_CvPreviewSocial = _sfc_main$b;
      const _component_CvPreviewAbout = _sfc_main$d;
      const _component_CvPreviewExperience = _sfc_main$7;
      const _component_CvPreviewEducation = _sfc_main$6;
      const _component_CvPreviewProjects = _sfc_main$4;
      _push(`<!--[--><div class="${ssrRenderClass([unref(formSettings).profileImageDataUri ? "py-7" : "py-8", "flex flex-col gap-4 p-6 py-7 col-span-1 bg-slate-50"])}" data-v-c59ad454>`);
      _push(ssrRenderComponent(_component_CvProfileImageViewer, { class: "border-white border-8" }, null, _parent));
      _push(`<div data-v-c59ad454>`);
      _push(ssrRenderComponent(_component_CvPreviewName, null, null, _parent));
      _push(ssrRenderComponent(_component_CvPreviewTitle, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_CvPreviewContact, null, null, _parent));
      _push(ssrRenderComponent(_component_CvPreviewSkills, { class: "flex flex-col gap-6" }, null, _parent));
      _push(ssrRenderComponent(_component_CvPreviewSocial, null, null, _parent));
      _push(`</div><div class="pr-8 pl-5 py-8 col-span-2" data-v-c59ad454>`);
      _push(ssrRenderComponent(_component_CvPreviewAbout, null, null, _parent));
      _push(`<hr class="cv__bar" data-v-c59ad454>`);
      _push(ssrRenderComponent(_component_CvPreviewExperience, null, null, _parent));
      if (unref(formSettings).displayEducation) {
        _push(`<hr class="cv__bar" data-v-c59ad454>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CvPreviewEducation, null, null, _parent));
      if (unref(formSettings).displayProjects) {
        _push(`<hr class="cv__bar" data-v-c59ad454>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_CvPreviewProjects, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreviewTwoColumn.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c59ad454"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CvPreview",
  __ssrInlineRender: true,
  setup(__props) {
    const { formSettings, isLoading } = useCvState();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CvPreviewOneColumn = __nuxt_component_0;
      const _component_CvPreviewTwoColumn = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cvWrapper font-normal text-slate-800 text-sm/normal bg-white relative w-full overflow-y-auto overflow-x-hidden p-6 flex flex-col items-center" }, _attrs))} data-v-bd00264d><div style="${ssrRenderStyle({ "min-height": "var(--height)" })}" data-v-bd00264d><div tabindex="0" aria-label="CV preview" class="${ssrRenderClass([[
        { blur: unref(isLoading) },
        unref(formSettings).layout === "one-column" && "p-10 flex flex-col gap-3",
        unref(formSettings).layout === "two-column" && "grid grid-cols-3"
      ], "cv shadow-lg mt-6 bg-white relative"])}" data-v-bd00264d>`);
      if (unref(formSettings).layout === "one-column") {
        _push(ssrRenderComponent(_component_CvPreviewOneColumn, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(formSettings).layout === "two-column") {
        _push(ssrRenderComponent(_component_CvPreviewTwoColumn, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="credit" data-v-bd00264d> Made with ♥️ by <a class="underline" style="${ssrRenderStyle({ color: "var(--primary)" })}" href="https://github.com/claudiabdm" rel="noopener" target="_blank" data-v-bd00264d>claudiabdm</a> using <b data-v-bd00264d>Nuxt.js</b> + <b data-v-bd00264d>TailwindCSS</b></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CvPreview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bd00264d"]]);
const CVFY_IMAGE = "https://cvfy.xyz/CvFy-no-border.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    useCvState();
    const route = useRoute();
    const { t, locale } = useI18n();
    const href = `https://cvfy.xyz${route.path}`;
    useHead({
      htmlAttrs: {
        lang: locale
      },
      title: t("title-tag"),
      link: [
        {
          rel: "preload",
          as: "image",
          href: "https://cdn.ko-fi.com/cdn/kofi5.png?v=3"
        },
        {
          rel: "canonical",
          href
        }
      ],
      meta: [
        {
          name: "description",
          content: t("description")
        },
        {
          name: "author",
          content: "claudiabdm"
        },
        {
          property: "og:image",
          content: CVFY_IMAGE
        },
        {
          property: "og:author",
          content: "Claudia Benito"
        },
        {
          property: "og:title",
          content: t("title-tag")
        },
        {
          property: "og:description",
          content: t("description")
        },
        {
          name: "twitter:creator",
          content: "@claudiabdm"
        },
        {
          name: "twitter:title",
          content: t("title-tag")
        },
        {
          name: "twitter:url",
          content: href
        },
        {
          name: "twitter:description",
          content: t("description")
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:image",
          content: CVFY_IMAGE
        },
        {
          name: "twitter:image:alt",
          content: t("description")
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CvSettings = __nuxt_component_0$3;
      const _component_CvPreview = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "font-app main" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CvSettings, { class: "basis-1/4 min-w-80" }, null, _parent));
      _push(ssrRenderComponent(_component_CvPreview, { class: "basis-3/4" }, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=create-VVIuazP9.js.map
