var app=function(){"use strict";function n(){}const e=n=>n;function t(n){return n()}function r(){return Object.create(null)}function a(n){n.forEach(t)}function o(n){return"function"==typeof n}function c(n,e){return n!=n?e==e:n!==e||n&&"object"==typeof n||"function"==typeof n}let u="undefined"!=typeof window?()=>window.performance.now():()=>Date.now(),s=n=>requestAnimationFrame(n);const i=new Set;let l,f=!1;function m(){i.forEach(n=>{n[0](u())||(i.delete(n),n[1]())}),(f=i.size>0)&&s(m)}function p(n){let e;return f||(f=!0,s(m)),{promise:new Promise(t=>{i.add(e=[n,t])}),abort(){i.delete(e)}}}function h(n,e){n.appendChild(e)}function d(n,e,t){n.insertBefore(e,t||null)}function g(n){n.parentNode.removeChild(n)}function b(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function v(n){return document.createElement(n)}function $(n){return document.createTextNode(n)}function _(){return $(" ")}function y(){return $("")}function N(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function M(n,e,t){null==t?n.removeAttribute(e):n.setAttribute(e,t)}function C(n,e){e=""+e,n.data!==e&&(n.data=e)}function x(n,e,t){n.style.setProperty(e,t)}function w(n,e){for(let t=0;t<n.options.length;t+=1){const r=n.options[t];if(r.__value===e)return void(r.selected=!0)}}let P,j=0,k={};function O(n,e){n.style.animation=(n.style.animation||"").split(", ").filter(e?n=>n.indexOf(e)<0:n=>-1===n.indexOf("__svelte")).join(", "),e&&!--j&&s(()=>{if(j)return;let n=l.cssRules.length;for(;n--;)l.deleteRule(n);k={}})}function E(n){P=n}const q=[],z=[],A=[],L=[],S=Promise.resolve();let B,R=!1;function W(n){A.push(n)}function D(){const n=new Set;do{for(;q.length;){const n=q.shift();E(n),F(n.$$)}for(;z.length;)z.pop()();for(let e=0;e<A.length;e+=1){const t=A[e];n.has(t)||(t(),n.add(t))}A.length=0}while(q.length);for(;L.length;)L.pop()();R=!1}function F(n){n.fragment&&(n.update(n.dirty),a(n.before_update),n.fragment.p(n.dirty,n.ctx),n.dirty=null,n.after_update.forEach(W))}function T(n,e,t){n.dispatchEvent(function(n,e){const t=document.createEvent("CustomEvent");return t.initCustomEvent(n,!1,!1,e),t}(`${e?"intro":"outro"}${t}`))}const G=new Set;let H;function I(){H={r:0,c:[],p:H}}function J(){H.r||a(H.c),H=H.p}function K(n,e){n&&n.i&&(G.delete(n),n.i(e))}function Q(n,e,t,r){if(n&&n.o){if(G.has(n))return;G.add(n),H.c.push(()=>{G.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}}function U(t,r,a){let c,s,i=r(t,a),f=!1,m=0;function h(){c&&O(t,c)}function d(){const{delay:r=0,duration:a=300,easing:o=e,tick:d=n,css:g}=i;g&&(c=function(n,e,t,r,a,o,c,u=0){const s=16.666/r;let i="{\n";for(let n=0;n<=1;n+=s){const r=e+(t-e)*o(n);i+=100*n+`%{${c(r,1-r)}}\n`}const f=i+`100% {${c(t,1-t)}}\n}`,m=`__svelte_${function(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}(f)}_${u}`;if(!k[m]){if(!l){const n=v("style");document.head.appendChild(n),l=n.sheet}k[m]=!0,l.insertRule(`@keyframes ${m} ${f}`,l.cssRules.length)}const p=n.style.animation||"";return n.style.animation=`${p?`${p}, `:""}${m} ${r}ms linear ${a}ms 1 both`,j+=1,m}(t,0,1,a,r,o,g,m++)),d(0,1);const b=u()+r,$=b+a;s&&s.abort(),f=!0,W(()=>T(t,!0,"start")),s=p(n=>{if(f){if(n>=$)return d(1,0),T(t,!0,"end"),h(),f=!1;if(n>=b){const e=o((n-b)/a);d(e,1-e)}}return f})}let g=!1;return{start(){g||(O(t),o(i)?(i=i(),(B||(B=Promise.resolve()).then(()=>{B=null}),B).then(d)):d())},invalidate(){g=!1},end(){f&&(h(),f=!1)}}}const V="undefined"!=typeof window?window:global;function X(n,e,r){const{fragment:c,on_mount:u,on_destroy:s,after_update:i}=n.$$;c.m(e,r),W(()=>{const e=u.map(t).filter(o);s?s.push(...e):a(e),n.$$.on_mount=[]}),i.forEach(W)}function Y(n,e){n.$$.fragment&&(a(n.$$.on_destroy),n.$$.fragment.d(e),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={})}function Z(n,e){n.$$.dirty||(q.push(n),R||(R=!0,S.then(D)),n.$$.dirty=r()),n.$$.dirty[e]=!0}function nn(e,t,o,c,u,s){const i=P;E(e);const l=t.props||{},f=e.$$={fragment:null,ctx:null,props:s,update:n,not_equal:u,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:null};let m=!1;var p;f.ctx=o?o(e,l,(n,t)=>{f.ctx&&u(f.ctx[n],f.ctx[n]=t)&&(f.bound[n]&&f.bound[n](t),m&&Z(e,n))}):l,f.update(),m=!0,a(f.before_update),f.fragment=c(f.ctx),t.target&&(t.hydrate?f.fragment.l((p=t.target,Array.from(p.childNodes))):f.fragment.c(),t.intro&&K(e.$$.fragment),X(e,t.target,t.anchor),D()),E(i)}class en{$destroy(){Y(this,1),this.$destroy=n}$on(n,e){const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(e),()=>{const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}$set(){}}function tn(n,{delay:e=0,duration:t=400}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,css:n=>`opacity: ${n*r}`}}const{Object:rn}=V;function an(n,e,t){const r=rn.create(n);return r.mapping=e[t],r}function on(n,e,t){const r=rn.create(n);return r.row=e[t],r}function cn(n,e,t){const r=rn.create(n);return r.number=e[t],r}function un(n){var e,t,r=n.number;return{c(){e=v("th"),t=$(r),M(e,"class","svelte-v742p0")},m(n,r){d(n,e,r),h(e,t)},p(n,e){n.numberMapping&&r!==(r=e.number)&&C(t,r)},d(n){n&&g(e)}}}function sn(n){var e,t,r=n.mapping[n.row]||"";return{c(){e=v("td"),t=$(r)},m(n,r){d(n,e,r),h(e,t)},p(n,e){(n.numberMapping||n.maxCharCount)&&r!==(r=e.mapping[e.row]||"")&&C(t,r)},d(n){n&&g(e)}}}function ln(n){for(var e,t,r=n.Object.values(n.numberMapping),a=[],o=0;o<r.length;o+=1)a[o]=sn(an(n,r,o));return{c(){e=v("tr");for(var n=0;n<a.length;n+=1)a[n].c();t=_()},m(n,r){d(n,e,r);for(var o=0;o<a.length;o+=1)a[o].m(e,null);h(e,t)},p(n,o){if(n.Object||n.numberMapping||n.maxCharCount){r=o.Object.values(o.numberMapping);for(var c=0;c<r.length;c+=1){const u=an(o,r,c);a[c]?a[c].p(n,u):(a[c]=sn(u),a[c].c(),a[c].m(e,t))}for(;c<a.length;c+=1)a[c].d(1);a.length=r.length}},d(n){n&&g(e),b(a,n)}}}function fn(e){for(var t,r,a,o=e.Object.keys(e.numberMapping),c=[],u=0;u<o.length;u+=1)c[u]=un(cn(e,o,u));var s=[...Array(e.maxCharCount).keys()],i=[];for(u=0;u<s.length;u+=1)i[u]=ln(on(e,s,u));return{c(){t=v("table"),r=v("tr");for(var n=0;n<c.length;n+=1)c[n].c();a=_();for(n=0;n<i.length;n+=1)i[n].c();M(t,"class","svelte-v742p0")},m(n,e){d(n,t,e),h(t,r);for(var o=0;o<c.length;o+=1)c[o].m(r,null);h(t,a);for(o=0;o<i.length;o+=1)i[o].m(t,null)},p(n,e){if(n.Object||n.numberMapping){o=e.Object.keys(e.numberMapping);for(var a=0;a<o.length;a+=1){const t=cn(e,o,a);c[a]?c[a].p(n,t):(c[a]=un(t),c[a].c(),c[a].m(r,null))}for(;a<c.length;a+=1)c[a].d(1);c.length=o.length}if(n.Object||n.numberMapping||n.maxCharCount){s=[...Array(e.maxCharCount).keys()];for(a=0;a<s.length;a+=1){const r=on(e,s,a);i[a]?i[a].p(n,r):(i[a]=ln(r),i[a].c(),i[a].m(t,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=s.length}},i:n,o:n,d(n){n&&g(t),b(c,n),b(i,n)}}}function mn(n,e,t){let r,{numberMapping:a}=e;return n.$set=(n=>{"numberMapping"in n&&t("numberMapping",a=n.numberMapping)}),n.$$.update=((n={numberMapping:1})=>{n.numberMapping&&t("maxCharCount",r=Object.keys(a).reduce((n,e)=>Math.max(n,a[e].length),0))}),{numberMapping:a,maxCharCount:r,Object:Object}}class pn extends en{constructor(n){super(),nn(this,n,mn,fn,c,["numberMapping"])}}function hn(n,e,t){const r=Object.create(n);return r.crossfoot=e[t],r.i=t,r}function dn(n){var e;return{c(){e=$(" / ")},m(n,t){d(n,e,t)},d(n){n&&g(e)}}}function gn(n){var e,t,r=n.crossfoot;return{c(){e=v("b"),t=$(r)},m(n,r){d(n,e,r),h(e,t)},p(n,e){n.crossfoots&&r!==(r=e.crossfoot)&&C(t,r)},d(n){n&&g(e)}}}function bn(n){var e,t,r,a=n.crossfoot;return{c(){e=v("u"),t=v("b"),r=$(a)},m(n,a){d(n,e,a),h(e,t),h(t,r)},p(n,e){n.crossfoots&&a!==(a=e.crossfoot)&&C(r,a)},d(n){n&&g(e)}}}function vn(n){var e,t,r=n.i>0&&dn();function a(n){return n.i==n.crossfoots.length-1&&n.i>0?bn:gn}var o=a(n),c=o(n);return{c(){r&&r.c(),e=_(),c.c(),t=y()},m(n,a){r&&r.m(n,a),d(n,e,a),c.m(n,a),d(n,t,a)},p(n,u){u.i>0?r||((r=dn()).c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),o===(o=a(u))&&c?c.p(n,u):(c.d(1),(c=o(u))&&(c.c(),c.m(t.parentNode,t)))},d(n){r&&r.d(n),n&&g(e),c.d(n),n&&g(t)}}}function $n(e){for(var t,r=e.crossfoots,a=[],o=0;o<r.length;o+=1)a[o]=vn(hn(e,r,o));return{c(){t=v("div");for(var n=0;n<a.length;n+=1)a[n].c()},m(n,e){d(n,t,e);for(var r=0;r<a.length;r+=1)a[r].m(t,null)},p(n,e){if(n.crossfoots){r=e.crossfoots;for(var o=0;o<r.length;o+=1){const c=hn(e,r,o);a[o]?a[o].p(n,c):(a[o]=vn(c),a[o].c(),a[o].m(t,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=r.length}},i:n,o:n,d(n){n&&g(t),b(a,n)}}}function _n(n){return n.reduce((n,e)=>n+e,0)}function yn(n,e,t){let{numbers:r}=e,a=[];return n.$set=(n=>{"numbers"in n&&t("numbers",r=n.numbers)}),n.$$.update=((n={numbers:1,crossfoots:1})=>{if(n.numbers||n.crossfoots){t("crossfoots",a=[]);let n=r.filter(n=>!isNaN(n));do{let e=_n(n);t("crossfoots",a=[...a,e]),n=e.toString().split("").map(n=>Number(n))}while(n.length>1)}}),{numbers:r,crossfoots:a}}class Nn extends en{constructor(n){super(),nn(this,n,yn,$n,c,["numbers"])}}function Mn(n,e,t){const r=Object.create(n);return r.charNumber=e[t],r}function Cn(n,e,t){const r=Object.create(n);return r.char=e[t],r}function xn(n){var e,t,r,o,c,u=n.char;function s(){return n.mouseover_handler(n)}function i(){return n.mouseout_handler(n)}return{c(){e=v("td"),t=$(u),r=_(),M(e,"class",o="char_"+n.char+" svelte-1800pq5"),c=[N(e,"mouseover",s),N(e,"mouseout",i)]},m(n,a){d(n,e,a),h(e,t),h(e,r)},p(r,a){n=a,r.chars&&u!==(u=n.char)&&C(t,u),r.chars&&o!==(o="char_"+n.char+" svelte-1800pq5")&&M(e,"class",o)},d(n){n&&g(e),a(c)}}}function wn(n){var e,t,r,o,c,u=n.charNumber;function s(){return n.mouseover_handler_1(n)}function i(){return n.mouseout_handler_1(n)}return{c(){e=v("td"),t=$(u),r=_(),M(e,"class",o="num_"+n.charNumber+" svelte-1800pq5"),c=[N(e,"mouseover",s),N(e,"mouseout",i)]},m(n,a){d(n,e,a),h(e,t),h(e,r)},p(r,a){n=a,r.charNumbers&&u!==(u=n.charNumber)&&C(t,u),r.charNumbers&&o!==(o="num_"+n.charNumber+" svelte-1800pq5")&&M(e,"class",o)},d(n){n&&g(e),a(c)}}}function Pn(e){var t;return{c(){(t=v("td")).textContent="?"},m(n,e){d(n,t,e)},p:n,d(n){n&&g(t)}}}function jn(n){var e;function t(n){return isNaN(n.charNumber)?Pn:wn}var r=t(n),a=r(n);return{c(){a.c(),e=y()},m(n,t){a.m(n,t),d(n,e,t)},p(n,o){r===(r=t(o))&&a?a.p(n,o):(a.d(1),(a=r(o))&&(a.c(),a.m(e.parentNode,e)))},d(n){a.d(n),n&&g(e)}}}function kn(n){var e,t,r,a=new Nn({props:{numbers:n.charNumbers}});return{c(){e=v("br"),t=_(),a.$$.fragment.c()},m(n,o){d(n,e,o),d(n,t,o),X(a,n,o),r=!0},p(n,e){var t={};n.charNumbers&&(t.numbers=e.charNumbers),a.$set(t)},i(n){r||(K(a.$$.fragment,n),r=!0)},o(n){Q(a.$$.fragment,n),r=!1},d(n){n&&(g(e),g(t)),Y(a,n)}}}function On(n){for(var e,t,r,a,o,c,u,s=n.chars,i=[],l=0;l<s.length;l+=1)i[l]=xn(Cn(n,s,l));var f=n.charNumbers,m=[];for(l=0;l<f.length;l+=1)m[l]=jn(Mn(n,f,l));var p=n.partCount>1&&kn(n);return{c(){e=v("div"),t=v("table"),r=v("tr");for(var n=0;n<i.length;n+=1)i[n].c();a=_(),o=v("tr");for(n=0;n<m.length;n+=1)m[n].c();c=_(),p&&p.c(),M(t,"class","svelte-1800pq5")},m(n,s){d(n,e,s),h(e,t),h(t,r);for(var l=0;l<i.length;l+=1)i[l].m(r,null);h(t,a),h(t,o);for(l=0;l<m.length;l+=1)m[l].m(o,null);h(e,c),p&&p.m(e,null),u=!0},p(n,t){if(n.chars){s=t.chars;for(var a=0;a<s.length;a+=1){const e=Cn(t,s,a);i[a]?i[a].p(n,e):(i[a]=xn(e),i[a].c(),i[a].m(r,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=s.length}if(n.charNumbers){f=t.charNumbers;for(a=0;a<f.length;a+=1){const e=Mn(t,f,a);m[a]?m[a].p(n,e):(m[a]=jn(e),m[a].c(),m[a].m(o,null))}for(;a<m.length;a+=1)m[a].d(1);m.length=f.length}t.partCount>1?p?(p.p(n,t),K(p,1)):((p=kn(t)).c(),K(p,1),p.m(e,null)):p&&(I(),Q(p,1,1,()=>{p=null}),J())},i(n){u||(K(p),u=!0)},o(n){Q(p),u=!1},d(n){n&&g(e),b(i,n),b(m,n),p&&p.d()}}}function En(n){for(var e=document.getElementsByClassName(n),t=e.length,r=0;r<t;r++)e[r].classList.add("highlighted")}function qn(n){for(var e=document.getElementsByClassName(n),t=e.length,r=0;r<t;r++)e[r].classList.remove("highlighted")}function zn(n,e,t){let{chars:r,charNumbers:a,partCount:o}=e;return n.$set=(n=>{"chars"in n&&t("chars",r=n.chars),"charNumbers"in n&&t("charNumbers",a=n.charNumbers),"partCount"in n&&t("partCount",o=n.partCount)}),{chars:r,charNumbers:a,partCount:o,mouseover_handler:function({char:n}){return En("char_"+n)},mouseout_handler:function({char:n}){return qn("char_"+n)},mouseover_handler_1:function({charNumber:n}){return En("num_"+n)},mouseout_handler_1:function({charNumber:n}){return qn("num_"+n)}}}class An extends en{constructor(n){super(),nn(this,n,zn,On,c,["chars","charNumbers","partCount"])}}const{Object:Ln}=V;function Sn(n,e,t){const r=Ln.create(n);return r.namePart=e[t],r.i=t,r}function Bn(n){var e,t,r,a,o=new pn({props:{numberMapping:n.mappingNumbers}});return{c(){e=v("span"),o.$$.fragment.c(),M(e,"class","fixedWidth svelte-syp1z2"),a=N(e,"click",n.click_handler_1)},m(n,t){d(n,e,t),X(o,e,null),r=!0},p(n,e){var t={};n.mappingNumbers&&(t.numberMapping=e.mappingNumbers),o.$set(t)},i(n){r||(K(o.$$.fragment,n),t||W(()=>{(t=U(e,tn,{duration:200})).start()}),r=!0)},o(n){Q(o.$$.fragment,n),r=!1},d(n){n&&g(e),Y(o),a()}}}function Rn(n){var e,t,r,a,o=new pn({props:{numberMapping:n.numberMapping}});return{c(){e=v("span"),o.$$.fragment.c(),M(e,"class","fixedWidth svelte-syp1z2"),a=N(e,"click",n.click_handler)},m(n,t){d(n,e,t),X(o,e,null),r=!0},p(n,e){var t={};n.numberMapping&&(t.numberMapping=e.numberMapping),o.$set(t)},i(n){r||(K(o.$$.fragment,n),t||W(()=>{(t=U(e,tn,{duration:200})).start()}),r=!0)},o(n){Q(o.$$.fragment,n),r=!1},d(n){n&&g(e),Y(o),a()}}}function Wn(n){var e;return{c(){e=$("   ")},m(n,t){d(n,e,t)},d(n){n&&g(e)}}}function Dn(n){var e,t,r=n.i>0&&Wn(),a=new An({props:{chars:n.charParts[n.i],charNumbers:n.charNumberParts[n.i],partCount:n.charParts.length}});return{c(){r&&r.c(),e=_(),a.$$.fragment.c()},m(n,o){r&&r.m(n,o),d(n,e,o),X(a,n,o),t=!0},p(n,t){t.i>0?r||((r=Wn()).c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null);var o={};n.charParts&&(o.chars=t.charParts[t.i]),n.charNumberParts&&(o.charNumbers=t.charNumberParts[t.i]),n.charParts&&(o.partCount=t.charParts.length),a.$set(o)},i(n){t||(K(a.$$.fragment,n),t=!0)},o(n){Q(a.$$.fragment,n),t=!1},d(n){r&&r.d(n),n&&g(e),Y(a,n)}}}function Fn(n){var e,t,r,o,c,u,s,i,l,f,m,p,y,P,j,k,O,E,q,z,A,L,S,B,R,D,F=[Rn,Bn],T=[];function G(n){return n.showMapping?0:1}P=G(n),j=T[P]=F[P](n);for(var H=n.nameParts,U=[],V=0;V<H.length;V+=1)U[V]=Dn(Sn(n,H,V));const Z=n=>Q(U[n],1,1,()=>{U[n]=null});var nn=new Nn({props:{numbers:n.charNumberParts.flat()}});return{c(){e=v("h1"),t=$("Name Numerology Calculator "),r=$(n.version),o=_(),c=v("div"),u=v("form"),s=v("div"),i=v("input"),l=$("\n               \n            "),f=v("select"),(m=v("option")).textContent="Chaldean",(p=v("option")).textContent="Phytagorean",y=$("\n               \n            "),j.c(),k=_(),O=v("hr"),E=_(),q=v("br"),z=_(),A=v("div");for(var a=0;a<U.length;a+=1)U[a].c();L=_(),S=v("br"),B=_(),nn.$$.fragment.c(),M(e,"class","centered svelte-syp1z2"),M(i,"type","text"),i.autofocus=!0,M(i,"autocomplete","off"),M(i,"autocorrect","off"),M(i,"autocapitalize","off"),M(i,"spellcheck","false"),m.__value="Chaldean",m.value=m.__value,p.__value="Phytagorean",p.value=p.__value,void 0===n.selectedMapping&&W(()=>n.select_change_handler.call(f)),x(s,"display","flex"),x(s,"flex-direction","row"),x(s,"justify-content","center"),x(s,"align-items","flex-start"),x(A,"display","flex"),x(A,"flex-direction","row"),x(A,"justify-content","center"),M(c,"class","centered svelte-syp1z2"),D=[N(i,"input",n.input_input_handler),N(f,"change",n.select_change_handler)]},m(a,g){d(a,e,g),h(e,t),h(e,r),d(a,o,g),d(a,c,g),h(c,u),h(u,s),h(s,i),i.value=n.name,h(s,l),h(s,f),h(f,m),h(f,p),w(f,n.selectedMapping),h(s,y),T[P].m(s,null),h(c,k),h(c,O),h(c,E),h(c,q),h(c,z),h(c,A);for(var b=0;b<U.length;b+=1)U[b].m(A,null);h(c,L),h(c,S),h(c,B),X(nn,c,null),R=!0,i.focus()},p(n,e){R&&!n.version||C(r,e.version),n.name&&i.value!==e.name&&(i.value=e.name),n.selectedMapping&&w(f,e.selectedMapping);var t=P;if((P=G(e))===t?T[P].p(n,e):(I(),Q(T[t],1,1,()=>{T[t]=null}),J(),(j=T[P])||(j=T[P]=F[P](e)).c(),K(j,1),j.m(s,null)),n.charParts||n.charNumberParts||n.nameParts){H=e.nameParts;for(var a=0;a<H.length;a+=1){const t=Sn(e,H,a);U[a]?(U[a].p(n,t),K(U[a],1)):(U[a]=Dn(t),U[a].c(),K(U[a],1),U[a].m(A,null))}for(I(),a=H.length;a<U.length;a+=1)Z(a);J()}var o={};n.charNumberParts&&(o.numbers=e.charNumberParts.flat()),nn.$set(o)},i(n){if(!R){K(j);for(var e=0;e<H.length;e+=1)K(U[e]);K(nn.$$.fragment,n),R=!0}},o(n){Q(j),U=U.filter(Boolean);for(let n=0;n<U.length;n+=1)Q(U[n]);Q(nn.$$.fragment,n),R=!1},d(n){n&&(g(e),g(o),g(c)),T[P].d(),b(U,n),Y(nn),a(D)}}}function Tn(n,e,t){let r,a,{version:o}=e,c="",u=[],s=[],i=[],l="Chaldean",f=!1;return n.$set=(n=>{"version"in n&&t("version",o=n.version)}),n.$$.update=((n={selectedMapping:1,numberMapping:1,name:1,nameParts:1,charParts:1})=>{if(n.selectedMapping||n.numberMapping||n.name||n.nameParts||n.charParts){switch(l){case"Chaldean":t("numberMapping",r={1:["a","i","j","q","y"],2:["b","k","r"],3:["c","g","l","s"],4:["d","m","t"],5:["e","h","n","x"],6:["u","v","w"],7:["o","z"],8:["f","p"]});break;case"Phytagorean":t("numberMapping",r={1:["a","j","s"],2:["b","k","t","ö","ß"],3:["c","l","u"],4:["d","m","v"],5:["e","n","w"],6:["f","o","x","ä"],7:["g","p","y"],8:["h","q","z","ü"],9:["i","r"]});break;default:alert("No mapping defined for "+l)}t("mappingNumbers",a=Object.keys(r).reduce((n,e)=>(n[e]=[],n),{}));const n=new Map(Object.keys(r).flatMap(function(n){return r[n].map(e=>[e,Number(n)])}));t("nameParts",u=c.toLowerCase().split(" ").filter(n=>""!==n)),t("charParts",s=u.map(n=>[...n.toLowerCase()].filter(n=>" "!==n))),t("charNumberParts",i=s.map(e=>e.map(e=>isNaN(e)?n.get(e):Number(e))))}}),{version:o,numberMapping:r,mappingNumbers:a,name:c,nameParts:u,charParts:s,charNumberParts:i,selectedMapping:l,showMapping:f,input_input_handler:function(){c=this.value,t("name",c)},select_change_handler:function(){l=function(n){const e=n.querySelector(":checked")||n.options[0];return e&&e.__value}(this),t("selectedMapping",l)},click_handler:function(){const n=f=!f;return t("showMapping",f),n},click_handler_1:function(){const n=f=!f;return t("showMapping",f),n}}}return new class extends en{constructor(n){super(),nn(this,n,Tn,Fn,c,["version"])}}({target:document.body,props:{version:"0.4.0"}})}();
//# sourceMappingURL=bundle.js.map
