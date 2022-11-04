import{h as W,c as X,o as k,M,w as C,N as Y,A as j,j as O,B as z,m as p,O as d,z as I,P as $,S as D,T as F,U as N}from"./index.3b29565f.js";import{g as Q,a as _,h as K}from"./scroll.e75d8f3a.js";const G=W("div",{class:"q-space"});var le=X({name:"QSpace",setup(){return()=>G}});function ie(t,e,o){let l;function i(){l!==void 0&&(M.remove(l),l=void 0)}return k(()=>{t.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>o.value===!0,handler:e},M.add(l)}}}const se={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ne=["beforeShow","show","beforeHide","hide"];function ue({showing:t,canShow:e,hideOnRouteChange:o,handleShow:l,handleHide:i,processOnMount:v}){const s=O(),{props:n,emit:u,proxy:V}=s;let a;function R(r){t.value===!0?h(r):L(r)}function L(r){if(n.disable===!0||r!==void 0&&r.qAnchorHandled===!0||e!==void 0&&e(r)!==!0)return;const c=n["onUpdate:modelValue"]!==void 0;c===!0&&(u("update:modelValue",!0),a=r,z(()=>{a===r&&(a=void 0)})),(n.modelValue===null||c===!1)&&P(r)}function P(r){t.value!==!0&&(t.value=!0,u("beforeShow",r),l!==void 0?l(r):u("show",r))}function h(r){if(n.disable===!0)return;const c=n["onUpdate:modelValue"]!==void 0;c===!0&&(u("update:modelValue",!1),a=r,z(()=>{a===r&&(a=void 0)})),(n.modelValue===null||c===!1)&&E(r)}function E(r){t.value!==!1&&(t.value=!1,u("beforeHide",r),i!==void 0?i(r):u("hide",r))}function H(r){n.disable===!0&&r===!0?n["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):r===!0!==t.value&&(r===!0?P:E)(a)}C(()=>n.modelValue,H),o!==void 0&&Y(s)===!0&&C(()=>V.$route.fullPath,()=>{o.value===!0&&t.value===!0&&h()}),v===!0&&j(()=>{H(n.modelValue)});const q={show:L,hide:h,toggle:R};return Object.assign(V,q),q}let m=0,y,b,w,T=!1,A,U,f;function J(t){Z(t)&&I(t)}function Z(t){if(t.target===document.body||t.target.classList.contains("q-layout__backdrop"))return!0;const e=$(t),o=t.shiftKey&&!t.deltaX,l=!o&&Math.abs(t.deltaX)<=Math.abs(t.deltaY),i=o||l?t.deltaY:t.deltaX;for(let v=0;v<e.length;v++){const s=e[v];if(K(s,l))return l?i<0&&s.scrollTop===0?!0:i>0&&s.scrollTop+s.clientHeight===s.scrollHeight:i<0&&s.scrollLeft===0?!0:i>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function x(t){t.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function g(t){T!==!0&&(T=!0,requestAnimationFrame(()=>{T=!1;const{height:e}=t.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(w===void 0||e!==window.innerHeight)&&(w=o-e,document.scrollingElement.scrollTop=l),l>w&&(document.scrollingElement.scrollTop-=Math.ceil((l-w)/8))}))}function B(t){const e=document.body,o=window.visualViewport!==void 0;if(t==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(e);y=Q(window),b=_(window),A=e.style.left,U=e.style.top,e.style.left=`-${y}px`,e.style.top=`-${b}px`,i!=="hidden"&&(i==="scroll"||e.scrollWidth>window.innerWidth)&&e.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||e.scrollHeight>window.innerHeight)&&e.classList.add("q-body--force-scrollbar-y"),e.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",g,d.passiveCapture),window.visualViewport.addEventListener("scroll",g,d.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",x,d.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${t}EventListener`]("wheel",J,d.notPassive),t==="remove"&&(p.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",g,d.passiveCapture),window.visualViewport.removeEventListener("scroll",g,d.passiveCapture)):window.removeEventListener("scroll",x,d.passiveCapture)),e.classList.remove("q-body--prevent-scroll"),e.classList.remove("q-body--force-scrollbar-x"),e.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,e.style.left=A,e.style.top=U,window.scrollTo(y,b),w=void 0)}function ee(t){let e="add";if(t===!0){if(m++,f!==void 0){clearTimeout(f),f=void 0;return}if(m>1)return}else{if(m===0||(m--,m>0))return;if(e="remove",p.is.ios===!0&&p.is.nativeMobile===!0){clearTimeout(f),f=setTimeout(()=>{B(e),f=void 0},100);return}}B(e)}function ae(){let t;return{preventBodyScroll(e){e!==t&&(t!==void 0||e===!0)&&(t=e,ee(e))}}}function de(){let t;const e=O();function o(){clearTimeout(t)}return D(o),k(o),{removeTimeout:o,registerTimeout(l,i){clearTimeout(t),F(e)===!1&&(t=setTimeout(l,i))}}}const S={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},te=Object.keys(S);S.all=!0;function ce(t){const e={};for(const o of te)t[o]===!0&&(e[o]=!0);return Object.keys(e).length===0?S:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}function fe(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function pe(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),N.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ve(t,e,o){return o<=e?e:Math.min(o,Math.max(e,t))}function me(t,e,o){if(o<=e)return e;const l=o-e+1;let i=e+(t-e)%l;return i<e&&(i=l+i),i===0?0:i}export{le as Q,ne as a,de as b,pe as c,ue as d,ie as e,ae as f,ce as g,ve as h,me as n,fe as s,se as u};
