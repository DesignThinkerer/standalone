"use strict";(self.webpackChunkstandalone=self.webpackChunkstandalone||[]).push([[7895],{7895:(q,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>X});var y=m(5861),w=m(4862),h=m(6655),K=m(8034);m(4110);const A=new WeakMap,I=(t,e,s,n=0,o=!1)=>{A.has(t)!==s&&(s?F(t,e,n,o):H(t,e))},F=(t,e,s,n=!1)=>{const o=e.parentNode,r=e.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n&&(r.disabled=!0),o.appendChild(r),A.set(t,r);const d="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${d}px,${s}px,0) scale(0)`},H=(t,e)=>{const s=A.get(t);s&&(A.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},P="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",T=(t,e,s)=>{const n=t[N];n&&clearTimeout(n),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[N]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},U=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&T(e,0,s)},{once:!0})};let g=0;const C="data-ionic-skip-scroll-assist",V=(t,e,s,n,o,r,a,d=!1)=>{const i=r&&(void 0===a||a.mode===K.K.None),S=function(){var u=(0,y.Z)(function*(){e.hasAttribute(C)?e.removeAttribute(C):J(t,e,s,n,o,i,d)});return function(){return u.apply(this,arguments)}}();return t.addEventListener("focusin",S,!0),()=>{t.removeEventListener("focusin",S,!0)}},B=t=>{document.activeElement!==t&&(t.setAttribute(C,"true"),t.focus())},J=function(){var t=(0,y.Z)(function*(e,s,n,o,r,a,d=!1){if(!n&&!o)return;const i=((t,e,s)=>{var n;return((t,e,s,n)=>{const o=t.top,r=t.bottom,a=e.top,i=a+15,u=Math.min(e.bottom,n-s)-50-r,v=i-o,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,o-a),M=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:s,inputSafeY:4-(o-i)}})((null!==(n=t.closest("ion-item,[ion-item]"))&&void 0!==n?n:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(e,n||o,r);if(n&&Math.abs(i.scrollAmount)<4)return B(s),void(a&&null!==n&&(T(n,g),U(s,n,()=>g=0)));if(I(e,s,!0,i.inputSafeY,d),B(s),(0,h.r)(()=>e.click()),a&&n&&(g=i.scrollPadding,T(n,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),n&&(yield(0,w.c)(n,0,i.scrollAmount,i.scrollDuration)),I(e,s,!1,i.inputSafeY),B(s),a&&U(s,n,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(n){const l=yield(0,w.g)(n);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,n,o,r,a,d){return t.apply(this,arguments)}}(),X=function(){var t=(0,y.Z)(function*(e,s){const n=document,o="ios"===s,r="android"===s,a=e.getNumber("keyboardHeight",290),d=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",o),S=e.getBoolean("inputBlurring",o),u=e.getBoolean("scrollPadding",!0),v=Array.from(n.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,W=yield K.a.getResizeMode(),M=function(){var f=(0,y.Z)(function*(c){yield new Promise(D=>(0,h.c)(c,D));const x=c.shadowRoot||c,L=x.querySelector("input")||x.querySelector("textarea"),b=(0,w.f)(c),j=b?null:c.closest("ion-footer");if(L){if(b&&i&&!l.has(c)){const D=((t,e,s)=>{if(!s||!e)return()=>{};const n=d=>{(t=>t===t.getRootNode().activeElement)(e)&&I(t,e,d)},o=()=>I(t,e,!1),r=()=>n(!0),a=()=>n(!1);return(0,h.a)(s,"ionScrollStart",r),(0,h.a)(s,"ionScrollEnd",a),e.addEventListener("blur",o),()=>{(0,h.b)(s,"ionScrollStart",r),(0,h.b)(s,"ionScrollEnd",a),e.removeEventListener("blur",o)}})(c,L,b);l.set(c,D)}if("date"!==L.type&&"datetime-local"!==L.type&&(b||j)&&d&&!_.has(c)){const D=V(c,L,b,j,a,u,W,r);_.set(c,D)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let t=!0,e=!1;const s=document;(0,h.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",a=>{if(e)return void(e=!1);const d=s.activeElement;if(!d||d.matches(P))return;const i=a.target;i!==d&&(i.matches(P)||i.closest(P)||(t=!1,setTimeout(()=>{t||d.blur()},50)))},!1)})();for(const f of v)M(f);n.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),n.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=_.get(f);c&&c(),_.delete(f)}})(f.detail)})});return function(s,n){return t.apply(this,arguments)}}()}}]);