import{a as zt,b as Bt,c as Ft,d as Ot,e as Nt,i as jt,j as Ut,k as Vt,l as At}from"./chunk-LINLZL6E.js";import{D as q,F as W}from"./chunk-KO52UKXF.js";import{a as Tt,c as Et,t as Dt,x as Mt,y as x}from"./chunk-CXFZ3G62.js";import"./chunk-XOFWPMIU.js";import{Ha as wt,Ia as St,Ja as It,Ka as Pt,ba as xt,c as gt,ca as Ct,d as mt,e as ht,f as ft,g as vt,ga as kt,i as w,w as yt,x as _t}from"./chunk-APEOJHZD.js";import{Bc as _,Cc as d,Da as E,Dc as f,Ec as k,Gb as ot,Gc as dt,Hc as st,Ic as ct,Lb as D,Oc as Q,Pc as ut,Qc as X,Vb as s,Wb as a,Xb as r,Yb as h,ac as R,bc as H,ca as I,cb as l,cc as it,da as V,fc as $,fd as v,ga as K,ha as B,ib as F,kc as g,la as nt,na as P,nc as u,oa as T,ob as y,oc as rt,od as m,pa as et,pb as A,pc as at,pd as bt,qc as O,rd as pt,sb as L,sc as N,tc as j,ub as p,xb as C,yc as lt,zc as U}from"./chunk-L6VKQ3O5.js";import{f as tt}from"./chunk-MTBLVN3Q.js";var Lt=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Jt=`
    ${Lt}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Kt={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":Et(t.value())&&String(t.value()).length===1,"p-badge-dot":Tt(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},Rt=(()=>{class t extends q{name="badge";theme=Jt;classes=Kt;static \u0275fac=(()=>{let n;return function(e){return(n||(n=E(t)))(e||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var Y=(()=>{class t extends W{styleClass=v();badgeSize=v();size=v();severity=v();value=v();badgeDisabled=v(!1,{transform:m});_componentStyle=B(Rt);static \u0275fac=(()=>{let n;return function(e){return(n||(n=E(t)))(e||t)}})();static \u0275cmp=y({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(o,e){o&2&&(_(e.cn(e.cx("root"),e.styleClass())),lt("display",e.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[Q([Rt]),L],decls:1,vars:1,template:function(o,e){o&1&&d(0),o&2&&f(e.value())},dependencies:[w,x],encapsulation:2,changeDetection:0})}return t})(),Ht=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=A({type:t});static \u0275inj=V({imports:[Y,x,x]})}return t})();var $t=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var tn=["content"],nn=["loadingicon"],en=["icon"],on=["*"],qt=t=>({class:t});function rn(t,i){t&1&&it(0)}function an(t,i){if(t&1&&h(0,"span"),t&2){let n=u(3);_(n.cx("loadingIcon")),D("aria-hidden",!0)("data-pc-section","loadingicon")}}function ln(t,i){if(t&1&&(et(),h(0,"svg",7)),t&2){let n=u(3);_(n.cn(n.cx("loadingIcon"),n.spinnerIconClass())),s("spin",!0),D("aria-hidden",!0)("data-pc-section","loadingicon")}}function dn(t,i){if(t&1&&(R(0),p(1,an,1,4,"span",3)(2,ln,1,5,"svg",6),H()),t&2){let n=u(2);l(),s("ngIf",n.loadingIcon),l(),s("ngIf",!n.loadingIcon)}}function sn(t,i){}function cn(t,i){if(t&1&&p(0,sn,0,0,"ng-template",8),t&2){let n=u(2);s("ngIf",n.loadingIconTemplate||n._loadingIconTemplate)}}function un(t,i){if(t&1&&(R(0),p(1,dn,3,2,"ng-container",2)(2,cn,1,1,null,5),H()),t&2){let n=u();l(),s("ngIf",!n.loadingIconTemplate&&!n._loadingIconTemplate),l(),s("ngTemplateOutlet",n.loadingIconTemplate||n._loadingIconTemplate)("ngTemplateOutletContext",X(3,qt,n.cx("loadingIcon")))}}function bn(t,i){if(t&1&&h(0,"span"),t&2){let n=u(2);_(n.cx("icon")),D("data-pc-section","icon")}}function pn(t,i){}function gn(t,i){if(t&1&&p(0,pn,0,0,"ng-template",8),t&2){let n=u(2);s("ngIf",!n.icon&&(n.iconTemplate||n._iconTemplate))}}function mn(t,i){if(t&1&&(R(0),p(1,bn,1,3,"span",3)(2,gn,1,1,null,5),H()),t&2){let n=u();l(),s("ngIf",n.icon&&!n.iconTemplate&&!n._iconTemplate),l(),s("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)("ngTemplateOutletContext",X(3,qt,n.cx("icon")))}}function hn(t,i){if(t&1&&(a(0,"span"),d(1),r()),t&2){let n=u();_(n.cx("label")),D("aria-hidden",n.icon&&!n.label)("data-pc-section","label"),l(),f(n.label)}}function fn(t,i){if(t&1&&h(0,"p-badge",9),t&2){let n=u();s("value",n.badge)("severity",n.badgeSeverity)}}var vn={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,i])=>!!i).reduce((i,[n])=>i+` ${n}`,"p-button-loading-icon"),label:"p-button-label"},Qt=(()=>{class t extends q{name="button";theme=$t;classes=vn;static \u0275fac=(()=>{let n;return function(e){return(n||(n=E(t)))(e||t)}})();static \u0275prov=I({token:t,factory:t.\u0275fac})}return t})();var yn=(()=>{class t extends W{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=v(void 0,{transform:m});onClick=new C;onFocus=new C;onBlur=new C;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=B(Ut,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=B(Qt);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"content":this._contentTemplate=n.template;break;case"icon":this._iconTemplate=n.template;break;case"loadingicon":this._loadingIconTemplate=n.template;break;default:this._contentTemplate=n.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,n])=>!!n).reduce((n,[o])=>n+` ${o}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let n;return function(e){return(n||(n=E(t)))(e||t)}})();static \u0275cmp=y({type:t,selectors:[["p-button"]],contentQueries:function(o,e,c){if(o&1&&(O(c,tn,5),O(c,nn,5),O(c,en,5),O(c,Mt,4)),o&2){let b;N(b=j())&&(e.contentTemplate=b.first),N(b=j())&&(e.loadingIconTemplate=b.first),N(b=j())&&(e.iconTemplate=b.first),N(b=j())&&(e.templates=b)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",m],loading:[2,"loading","loading",m],loadingIcon:"loadingIcon",raised:[2,"raised","raised",m],rounded:[2,"rounded","rounded",m],text:[2,"text","text",m],plain:[2,"plain","plain",m],severity:"severity",outlined:[2,"outlined","outlined",m],link:[2,"link","link",m],tabindex:[2,"tabindex","tabindex",bt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",m],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[Q([Qt]),L],ngContentSelectors:on,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(o,e){o&1&&(rt(),a(0,"button",0),g("click",function(b){return e.onClick.emit(b)})("focus",function(b){return e.onFocus.emit(b)})("blur",function(b){return e.onBlur.emit(b)}),at(1),p(2,rn,1,0,"ng-container",1)(3,un,3,5,"ng-container",2)(4,mn,3,5,"ng-container",2)(5,hn,2,5,"span",3)(6,fn,1,2,"p-badge",4),r()),o&2&&(_(e.cn(e.cx("root"),e.styleClass,e.buttonProps==null?null:e.buttonProps.styleClass)),s("ngStyle",e.style||(e.buttonProps==null?null:e.buttonProps.style))("disabled",e.disabled||e.loading||(e.buttonProps==null?null:e.buttonProps.disabled))("pAutoFocus",e.autofocus||(e.buttonProps==null?null:e.buttonProps.autofocus)),D("type",e.type||(e.buttonProps==null?null:e.buttonProps.type))("aria-label",e.ariaLabel||(e.buttonProps==null?null:e.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",e.tabindex||(e.buttonProps==null?null:e.buttonProps.tabindex)),l(2),s("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),l(),s("ngIf",e.loading),l(),s("ngIf",!e.loading),l(),s("ngIf",!e.contentTemplate&&!e._contentTemplate&&e.label),l(),s("ngIf",!e.contentTemplate&&!e._contentTemplate&&e.badge))},dependencies:[w,ht,vt,ft,Vt,jt,zt,Ht,Y,x],encapsulation:2,changeDetection:0})}return t})(),Wt=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=A({type:t});static \u0275inj=V({imports:[w,yn,x,x]})}return t})();var M=class M{constructor(){this.visible=!0;this.itemName="this item";this.confirm=new C;this.cancel=new C}onConfirm(){this.confirm.emit(),this.visible=!1}onCancel(){this.cancel.emit(),this.visible=!1}onDismiss(){this.cancel.emit(),this.visible=!1}};M.\u0275fac=function(n){return new(n||M)},M.\u0275cmp=y({type:M,selectors:[["app-delete-confirm"]],outputs:{confirm:"confirm",cancel:"cancel"},decls:14,vars:2,consts:[["alignment","center",3,"visibleChange","dismiss","visible"],[1,"modal-title"],[1,"btn","btn-secondary",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(n,o){n&1&&(a(0,"c-modal",0),ct("visibleChange",function(c){return st(o.visible,c)||(o.visible=c),c}),g("dismiss",function(){return o.onDismiss()}),a(1,"c-modal-header")(2,"h5",1),d(3,"Confirm Delete"),r()(),a(4,"c-modal-body"),d(5," Are you sure you want to delete "),a(6,"strong"),d(7),r(),d(8,"? "),r(),a(9,"c-modal-footer")(10,"button",2),g("click",function(){return o.onCancel()}),d(11,"Cancel"),r(),a(12,"button",3),g("click",function(){return o.onConfirm()}),d(13,"Delete"),r()()()),n&2&&(dt("visible",o.visible),l(7),f(o.itemName))},dependencies:[Pt,It,wt,St],encapsulation:2});var Z=M;var S=class S{constructor(i,n){this.appRef=i;this.environmentInjector=n}confirm(i="this item"){return new Promise(n=>{let o=pt(Z,{environmentInjector:this.environmentInjector});o.instance.itemName=i,o.instance.visible=!0,o.instance.confirm.subscribe(()=>{n(!0),this.destroyModal(o)}),o.instance.cancel.subscribe(()=>{n(!1),this.destroyModal(o)}),this.appRef.attachView(o.hostView);let e=o.hostView.rootNodes[0];document.body.appendChild(e)})}destroyModal(i){this.appRef.detachView(i.hostView),i.destroy()}};S.\u0275fac=function(n){return new(n||S)(K(ot),K(nt))},S.\u0275prov=I({token:S,factory:S.\u0275fac,providedIn:"root"});var J=S;var Cn=()=>[];function kn(t,i){if(t&1&&d(0),t&2){let n=i.rowIndex;k(" ",n+1," ")}}function wn(t,i){if(t&1&&d(0),t&2){let n=i.row;k(" ",n.name," ")}}function Sn(t,i){if(t&1&&(a(0,"span",20),d(1),r()),t&2){let n=i.row;s("ngClass",n.isActive?"bg-success":"bg-danger"),l(),k(" ",n.isActive?"Active":"Inactive"," ")}}function In(t,i){if(t&1){let n=$();a(0,"button",21),g("click",function(){let e=P(n).row,c=u();return T(c.editUser(e.id))}),h(1,"span",22),r(),a(2,"button",23),g("click",function(){let e=P(n).row,c=u();return T(c.deleteUser(e))}),h(3,"span",24),r()}}function Pn(t,i){if(t&1){let n=$();a(0,"div",25)(1,"c-card",26)(2,"c-card-body")(3,"div",27)(4,"h5")(5,"strong"),d(6),r()(),a(7,"div")(8,"button",28),g("click",function(){let e=P(n).$implicit,c=u();return T(c.editUser(e.id))}),h(9,"span",22),r(),a(10,"button",29),g("click",function(){let e=P(n).$implicit,c=u();return T(c.deleteUser(e))}),h(11,"span",24),r()()(),a(12,"p",30)(13,"strong"),d(14,"Email:"),r(),d(15),r(),a(16,"p",30)(17,"strong"),d(18,"Role:"),r(),d(19),r(),a(20,"span",20),d(21),r()()()()}if(t&2){let n=i.$implicit;l(6),f(n.name),l(9),k(" ",n.email),l(4),k(" ",n.role),l(),s("ngClass",n.isActive?"bg-success":"bg-danger"),l(),k(" ",n.isActive?"Active":"Inactive"," ")}}function Tn(t,i){if(t&1){let n=$();a(0,"li",17)(1,"a",18),g("click",function(){let e=P(n).index,c=u();return T(c.changePage(e+1))}),d(2),r()()}if(t&2){let n=i.index,o=u();U("active",o.currentPage===n+1),l(2),f(n+1)}}var z=class z{constructor(i,n,o,e){this.userservice=i;this.messageService=n;this.router=o;this.deleteConfirmService=e;this.users=[];this.currentPage=1;this.pageSize=3}ngOnInit(){this.loadUsers()}loadUsers(){this.userservice.getUsers().subscribe({next:i=>{i.length>0&&(this.users=i)},error:i=>{debugger}})}get totalPages(){return Math.ceil(this.users.length/this.pageSize)}get pagedUsers(){let i=(this.currentPage-1)*this.pageSize;return this.users.slice(i,i+this.pageSize)}changePage(i){i>=1&&i<=this.totalPages&&(this.currentPage=i)}editUser(i){debugger;this.router.navigate([`/settings/users/edit/${i}`])}deleteUser(i){return tt(this,null,function*(){(yield this.deleteConfirmService.confirm(` : ${i.name}`))?this.userservice.deleteUser(i.id).subscribe({next:()=>{this.messageService.add({severity:"success",summary:"Deleted",detail:"User deleted successfully"}),this.loadUsers()},error:o=>{this.messageService.add({severity:"error",summary:"Error",detail:o.error?.message||"Delete failed"})}}):console.log("Delete cancelled")})}};z.\u0275fac=function(n){return new(n||z)(F(At),F(Dt),F(yt),F(J))},z.\u0275cmp=y({type:z,selectors:[["app-userslist"]],decls:30,vars:15,consts:[[1,"d-flex","justify-content-end","align-items-center","mb-3"],["routerLink","/settings",1,"btn","btn-outline-secondary","me-3"],["routerLink","create",1,"btn","btn-primary"],[1,"d-none","d-md-block"],[1,"bootstrap",3,"rows","columnMode","headerHeight","footerHeight","rowHeight","limit"],["name","#",3,"width","sortable"],["ngx-datatable-cell-template",""],["name","Name"],["name","Email","prop","email"],["name","Role","prop","role"],["name","Status"],["name","Actions"],[1,"d-block","d-md-none"],[1,"row"],["class","col-12",4,"ngFor","ngForOf"],[1,"mt-3"],[1,"pagination","justify-content-center"],[1,"page-item"],[1,"page-link",3,"click"],["class","page-item",3,"active",4,"ngFor","ngForOf"],[1,"badge",3,"ngClass"],["title","Edit User",1,"btn","btn-outline-secondary","me-2",3,"click"],[1,"pi","pi-user-edit"],["title","Delete User",1,"btn","btn-outline-danger",3,"click"],[1,"pi","pi-trash"],[1,"col-12"],[1,"mb-3","shadow-sm"],[1,"d-flex","justify-content-between"],["title","Edit User",1,"btn","btn-outline-secondary","btn-sm","me-1",3,"click"],["title","Delete User",1,"btn","btn-outline-danger","btn-sm",3,"click"],[1,"mb-1"]],template:function(n,o){n&1&&(a(0,"div")(1,"div",0)(2,"button",1),d(3," \u2190 Back "),r(),a(4,"button",2),d(5," + Add New User "),r()(),a(6,"div",3)(7,"ngx-datatable",4)(8,"ngx-datatable-column",5),p(9,kn,1,1,"ng-template",6),r(),a(10,"ngx-datatable-column",7),p(11,wn,1,1,"ng-template",6),r(),h(12,"ngx-datatable-column",8)(13,"ngx-datatable-column",9),a(14,"ngx-datatable-column",10),p(15,Sn,2,2,"ng-template",6),r(),a(16,"ngx-datatable-column",11),p(17,In,4,0,"ng-template",6),r()()(),a(18,"div",12)(19,"div",13),p(20,Pn,22,5,"div",14),r(),a(21,"nav",15)(22,"ul",16)(23,"li",17)(24,"a",18),g("click",function(){return o.changePage(o.currentPage-1)}),d(25,"Previous"),r()(),p(26,Tn,3,3,"li",19),a(27,"li",17)(28,"a",18),g("click",function(){return o.changePage(o.currentPage+1)}),d(29,"Next"),r()()()()()()),n&2&&(l(7),s("rows",o.users)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",5),l(),s("width",50)("sortable",!1),l(12),s("ngForOf",o.pagedUsers),l(3),U("disabled",o.currentPage===1),l(3),s("ngForOf",ut(14,Cn).constructor(o.totalPages)),l(),U("disabled",o.currentPage===o.totalPages))},dependencies:[Nt,Ot,Ft,Bt,w,gt,mt,_t,Ct,kt,xt,Wt],styles:["table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:middle}c-card[_ngcontent-%COMP%]{border-radius:1rem}ngx-datatable.bootstrap[_ngcontent-%COMP%]{font-size:1rem}ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-body-cell[_ngcontent-%COMP%]{font-size:1rem}ngx-datatable.bootstrap[_ngcontent-%COMP%]   .datatable-header-cell[_ngcontent-%COMP%]{font-size:1rem;font-weight:600}[_nghost-%COMP%]     ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-label{font-weight:700}[_nghost-%COMP%]     ngx-datatable .datatable-body .datatable-row .datatable-cell{border:.5px solid rgba(0,0,0,.1)}[_nghost-%COMP%]     ngx-datatable .datatable-header .datatable-header-cell{border-right:.5px solid rgba(0,0,0,.1)}[_nghost-%COMP%]     ngx-datatable .datatable-header .datatable-header-cell:last-child, [_nghost-%COMP%]     ngx-datatable .datatable-body .datatable-row .datatable-cell:last-child{border-right:none}"]});var Gt=z;export{Gt as UserslistComponent};
