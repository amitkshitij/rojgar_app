import { _ as __nuxt_component_0 } from './nuxt-link-CCbinDlN.mjs';
import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LandingLink",
  __ssrInlineRender: true,
  props: {
    to: {},
    external: { type: Boolean },
    cta: { type: Boolean },
    icon: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: ["inline-flex justify-center items-center gap-x-1 font-light", [{
          "bg-gradient-to-br from-violet-800 to-fuchsia-700 bg-clip-text hover:text-transparent": !__props.cta && !__props.icon,
          "hover:opacity-80": __props.icon,
          "bg-primary font-normal text-white px-4 py-2 rounded  bg-gradient-to-br from-violet-800 to-fuchsia-700 hover:opacity-80": __props.cta
        }]],
        "active-class": "decoration-violet-800",
        to: __props.to,
        external: __props.external
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/landing/LandingLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=LandingLink-34-GWt2t.mjs.map
