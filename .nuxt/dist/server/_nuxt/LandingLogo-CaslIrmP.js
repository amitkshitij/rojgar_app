import { _ as __nuxt_component_0 } from "./nuxt-link-CCbinDlN.js";
import { defineComponent, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { f as useLocalePath } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingLogo",
  __ssrInlineRender: true,
  setup(__props) {
    const localePath = useLocalePath();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<h1${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: "bg-none font-bold text-fl-lg font-logo uppercase tracking-widest",
        "active-class": "bg-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-transparent bg-gradient-to-br from-violet-800 to-fuchsia-700 bg-clip-text hover:opacity-80"${_scopeId}> CvFy </span>`);
          } else {
            return [
              createVNode("span", { class: "text-transparent bg-gradient-to-br from-violet-800 to-fuchsia-700 bg-clip-text hover:opacity-80" }, " CvFy ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/LandingLogo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=LandingLogo-CaslIrmP.js.map
