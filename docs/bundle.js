var app=function(){"use strict";function t(){}function r(t){return t()}function n(){return Object.create(null)}function e(t){t.forEach(r)}function o(t){return"function"==typeof t}function a(t,r){return t!=t?r==r:t!==r||t&&"object"==typeof t||"function"==typeof t}function c(t,r){t.appendChild(r)}function u(t,r,n){t.insertBefore(r,n||null)}function s(t){t.parentNode.removeChild(t)}function l(t,r){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(r)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function h(){return f("")}function d(t,r,n,e){return t.addEventListener(r,n,e),()=>t.removeEventListener(r,n,e)}function p(t,r,n){null==n?t.removeAttribute(r):t.setAttribute(r,n)}function g(t,r){r=""+r,t.data!==r&&(t.data=r)}function v(t,r,n){t.style.setProperty(r,n)}let b;function $(t){b=t}const N=[],_=[],y=[],P=[],x=Promise.resolve();let w=!1;function C(t){y.push(t)}function j(){const t=new Set;do{for(;N.length;){const t=N.shift();$(t),E(t.$$)}for(;_.length;)_.pop()();for(let r=0;r<y.length;r+=1){const n=y[r];t.has(n)||(n(),t.add(n))}y.length=0}while(N.length);for(;P.length;)P.pop()();w=!1}function E(t){t.fragment&&(t.update(t.dirty),e(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(C))}const z=new Set;let O;function k(){O={r:0,c:[],p:O}}function L(){O.r||e(O.c),O=O.p}function B(t,r){t&&t.i&&(z.delete(t),t.i(r))}function A(t,r,n,e){if(t&&t.o){if(z.has(t))return;z.add(t),O.c.push(()=>{z.delete(t),e&&(n&&t.d(1),e())}),t.o(r)}}const M="undefined"!=typeof window?window:global;function S(t,n,a){const{fragment:c,on_mount:u,on_destroy:s,after_update:l}=t.$$;c.m(n,a),C(()=>{const n=u.map(r).filter(o);s?s.push(...n):e(n),t.$$.on_mount=[]}),l.forEach(C)}function q(t,r){t.$$.fragment&&(e(t.$$.on_destroy),t.$$.fragment.d(r),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function T(t,r){t.$$.dirty||(N.push(t),w||(w=!0,x.then(j)),t.$$.dirty=n()),t.$$.dirty[r]=!0}function D(r,o,a,c,u,s){const l=b;$(r);const i=o.props||{},f=r.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:n(),dirty:null};let m=!1;var h;f.ctx=a?a(r,i,(t,n)=>{f.ctx&&u(f.ctx[t],f.ctx[t]=n)&&(f.bound[t]&&f.bound[t](n),m&&T(r,t))}):i,f.update(),m=!0,e(f.before_update),f.fragment=c(f.ctx),o.target&&(o.hydrate?f.fragment.l((h=o.target,Array.from(h.childNodes))):f.fragment.c(),o.intro&&B(r.$$.fragment),S(r,o.target,o.anchor),j()),$(l)}class F{$destroy(){q(this,1),this.$destroy=t}$on(t,r){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(r),()=>{const t=n.indexOf(r);-1!==t&&n.splice(t,1)}}$set(){}}function G(t,r,n){const e=Object.create(t);return e.crossfoot=r[n],e.i=n,e}function H(t){var r;return{c(){r=f(" / ")},m(t,n){u(t,r,n)},d(t){t&&s(r)}}}function I(t){var r,n,e=t.crossfoot;return{c(){r=i("b"),n=f(e)},m(t,e){u(t,r,e),c(r,n)},p(t,r){t.crossfoots&&e!==(e=r.crossfoot)&&g(n,e)},d(t){t&&s(r)}}}function J(t){var r,n,e,o=t.crossfoot;return{c(){r=i("u"),n=i("b"),e=f(o)},m(t,o){u(t,r,o),c(r,n),c(n,e)},p(t,r){t.crossfoots&&o!==(o=r.crossfoot)&&g(e,o)},d(t){t&&s(r)}}}function K(t){var r,n,e=t.i>0&&H();function o(t){return t.i==t.crossfoots.length-1&&t.i>0?J:I}var a=o(t),c=a(t);return{c(){e&&e.c(),r=m(),c.c(),n=h()},m(t,o){e&&e.m(t,o),u(t,r,o),c.m(t,o),u(t,n,o)},p(t,u){u.i>0?e||((e=H()).c(),e.m(r.parentNode,r)):e&&(e.d(1),e=null),a===(a=o(u))&&c?c.p(t,u):(c.d(1),(c=a(u))&&(c.c(),c.m(n.parentNode,n)))},d(t){e&&e.d(t),t&&s(r),c.d(t),t&&s(n)}}}function Q(r){for(var n,e=r.crossfoots,o=[],a=0;a<e.length;a+=1)o[a]=K(G(r,e,a));return{c(){n=i("div");for(var t=0;t<o.length;t+=1)o[t].c()},m(t,r){u(t,n,r);for(var e=0;e<o.length;e+=1)o[e].m(n,null)},p(t,r){if(t.crossfoots){e=r.crossfoots;for(var a=0;a<e.length;a+=1){const c=G(r,e,a);o[a]?o[a].p(t,c):(o[a]=K(c),o[a].c(),o[a].m(n,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=e.length}},i:t,o:t,d(t){t&&s(n),l(o,t)}}}function R(t){return t.reduce((t,r)=>t+r,0)}function U(t,r,n){let{numbers:e}=r,o=[];return t.$set=(t=>{"numbers"in t&&n("numbers",e=t.numbers)}),t.$$.update=((t={numbers:1,crossfoots:1})=>{if(t.numbers||t.crossfoots){n("crossfoots",o=[]);let t=e.filter(t=>!isNaN(t));do{let r=R(t);n("crossfoots",o=[...o,r]),t=r.toString().split("").map(t=>Number(t))}while(t.length>1)}}),{numbers:e,crossfoots:o}}class V extends F{constructor(t){super(),D(this,t,U,Q,a,["numbers"])}}function W(t,r,n){const e=Object.create(t);return e.charNumber=r[n],e}function X(t,r,n){const e=Object.create(t);return e.char=r[n],e}function Y(t){var r,n,o,a,l,h=t.char;function v(){return t.mouseover_handler(t)}function b(){return t.mouseout_handler(t)}return{c(){r=i("td"),n=f(h),o=m(),p(r,"class",a="char_"+t.char+" svelte-5zyni"),l=[d(r,"mouseover",v),d(r,"mouseout",b)]},m(t,e){u(t,r,e),c(r,n),c(r,o)},p(e,o){t=o,e.chars&&h!==(h=t.char)&&g(n,h),e.chars&&a!==(a="char_"+t.char+" svelte-5zyni")&&p(r,"class",a)},d(t){t&&s(r),e(l)}}}function Z(t){var r,n,o,a,l,h=t.charNumber;function v(){return t.mouseover_handler_1(t)}function b(){return t.mouseout_handler_1(t)}return{c(){r=i("td"),n=f(h),o=m(),p(r,"class",a="num_"+t.charNumber+" svelte-5zyni"),l=[d(r,"mouseover",v),d(r,"mouseout",b)]},m(t,e){u(t,r,e),c(r,n),c(r,o)},p(e,o){t=o,e.charNumbers&&h!==(h=t.charNumber)&&g(n,h),e.charNumbers&&a!==(a="num_"+t.charNumber+" svelte-5zyni")&&p(r,"class",a)},d(t){t&&s(r),e(l)}}}function tt(r){var n;return{c(){(n=i("td")).textContent="?"},m(t,r){u(t,n,r)},p:t,d(t){t&&s(n)}}}function rt(t){var r;function n(t){return isNaN(t.charNumber)?tt:Z}var e=n(t),o=e(t);return{c(){o.c(),r=h()},m(t,n){o.m(t,n),u(t,r,n)},p(t,a){e===(e=n(a))&&o?o.p(t,a):(o.d(1),(o=e(a))&&(o.c(),o.m(r.parentNode,r)))},d(t){o.d(t),t&&s(r)}}}function nt(t){var r,n,e,o=new V({props:{numbers:t.charNumbers}});return{c(){r=i("br"),n=m(),o.$$.fragment.c()},m(t,a){u(t,r,a),u(t,n,a),S(o,t,a),e=!0},p(t,r){var n={};t.charNumbers&&(n.numbers=r.charNumbers),o.$set(n)},i(t){e||(B(o.$$.fragment,t),e=!0)},o(t){A(o.$$.fragment,t),e=!1},d(t){t&&(s(r),s(n)),q(o,t)}}}function et(t){for(var r,n,e,o,a,f,h,d=t.chars,g=[],v=0;v<d.length;v+=1)g[v]=Y(X(t,d,v));var b=t.charNumbers,$=[];for(v=0;v<b.length;v+=1)$[v]=rt(W(t,b,v));var N=t.partCount>1&&nt(t);return{c(){r=i("div"),n=i("table"),e=i("tr");for(var t=0;t<g.length;t+=1)g[t].c();o=m(),a=i("tr");for(t=0;t<$.length;t+=1)$[t].c();f=m(),N&&N.c(),p(n,"class","svelte-5zyni")},m(t,s){u(t,r,s),c(r,n),c(n,e);for(var l=0;l<g.length;l+=1)g[l].m(e,null);c(n,o),c(n,a);for(l=0;l<$.length;l+=1)$[l].m(a,null);c(r,f),N&&N.m(r,null),h=!0},p(t,n){if(t.chars){d=n.chars;for(var o=0;o<d.length;o+=1){const r=X(n,d,o);g[o]?g[o].p(t,r):(g[o]=Y(r),g[o].c(),g[o].m(e,null))}for(;o<g.length;o+=1)g[o].d(1);g.length=d.length}if(t.charNumbers){b=n.charNumbers;for(o=0;o<b.length;o+=1){const r=W(n,b,o);$[o]?$[o].p(t,r):($[o]=rt(r),$[o].c(),$[o].m(a,null))}for(;o<$.length;o+=1)$[o].d(1);$.length=b.length}n.partCount>1?N?(N.p(t,n),B(N,1)):((N=nt(n)).c(),B(N,1),N.m(r,null)):N&&(k(),A(N,1,1,()=>{N=null}),L())},i(t){h||(B(N),h=!0)},o(t){A(N),h=!1},d(t){t&&s(r),l(g,t),l($,t),N&&N.d()}}}function ot(t){for(var r=document.getElementsByClassName(t),n=r.length,e=0;e<n;e++)r[e].classList.add("highlighted")}function at(t){for(var r=document.getElementsByClassName(t),n=r.length,e=0;e<n;e++)r[e].classList.remove("highlighted")}function ct(t,r,n){let{chars:e,charNumbers:o,partCount:a}=r;return t.$set=(t=>{"chars"in t&&n("chars",e=t.chars),"charNumbers"in t&&n("charNumbers",o=t.charNumbers),"partCount"in t&&n("partCount",a=t.partCount)}),{chars:e,charNumbers:o,partCount:a,mouseover_handler:function({char:t}){return ot("char_"+t)},mouseout_handler:function({char:t}){return at("char_"+t)},mouseover_handler_1:function({charNumber:t}){return ot("num_"+t)},mouseout_handler_1:function({charNumber:t}){return at("num_"+t)}}}class ut extends F{constructor(t){super(),D(this,t,ct,et,a,["chars","charNumbers","partCount"])}}const{Object:st}=M;function lt(t,r,n){const e=st.create(t);return e.namePart=r[n],e.i=n,e}function it(t){var r;return{c(){r=f("   ")},m(t,n){u(t,r,n)},d(t){t&&s(r)}}}function ft(t){var r,n,e=t.i>0&&it(),o=new ut({props:{chars:t.charParts[t.i],charNumbers:t.charNumberParts[t.i],partCount:t.charParts.length}});return{c(){e&&e.c(),r=m(),o.$$.fragment.c()},m(t,a){e&&e.m(t,a),u(t,r,a),S(o,t,a),n=!0},p(t,n){n.i>0?e||((e=it()).c(),e.m(r.parentNode,r)):e&&(e.d(1),e=null);var a={};t.charParts&&(a.chars=n.charParts[n.i]),t.charNumberParts&&(a.charNumbers=n.charNumberParts[n.i]),t.charParts&&(a.partCount=n.charParts.length),o.$set(a)},i(t){n||(B(o.$$.fragment,t),n=!0)},o(t){A(o.$$.fragment,t),n=!1},d(t){e&&e.d(t),t&&s(r),q(o,t)}}}function mt(t){for(var r,n,e,o,a,h,b,$,N,_,y,P,x,w,C,j,E,z,O=t.nameParts,M=[],T=0;T<O.length;T+=1)M[T]=ft(lt(t,O,T));const D=t=>A(M[t],1,1,()=>{M[t]=null});var F=new V({props:{numbers:t.charNumberParts.flat()}});return{c(){r=i("h1"),n=f("Name Numerology Calculator "),e=f(t.version),o=m(),a=i("div"),h=i("form"),b=i("input"),$=m(),N=i("hr"),_=m(),y=i("br"),P=m(),x=i("div");for(var c=0;c<M.length;c+=1)M[c].c();w=m(),C=i("br"),j=m(),F.$$.fragment.c(),p(r,"class","centered svelte-1ohdc3v"),p(b,"type","text"),b.autofocus=!0,p(b,"autocomplete","off"),p(b,"autocorrect","off"),p(b,"autocapitalize","off"),p(b,"spellcheck","false"),v(x,"display","flex"),v(x,"flex-direction","row"),v(x,"justify-content","center"),p(a,"class","centered svelte-1ohdc3v"),z=d(b,"input",t.input_input_handler)},m(s,l){u(s,r,l),c(r,n),c(r,e),u(s,o,l),u(s,a,l),c(a,h),c(h,b),b.value=t.name,c(a,$),c(a,N),c(a,_),c(a,y),c(a,P),c(a,x);for(var i=0;i<M.length;i+=1)M[i].m(x,null);c(a,w),c(a,C),c(a,j),S(F,a,null),E=!0,b.focus()},p(t,r){if(E&&!t.version||g(e,r.version),t.name&&b.value!==r.name&&(b.value=r.name),t.charParts||t.charNumberParts||t.nameParts){O=r.nameParts;for(var n=0;n<O.length;n+=1){const e=lt(r,O,n);M[n]?(M[n].p(t,e),B(M[n],1)):(M[n]=ft(e),M[n].c(),B(M[n],1),M[n].m(x,null))}for(k(),n=O.length;n<M.length;n+=1)D(n);L()}var o={};t.charNumberParts&&(o.numbers=r.charNumberParts.flat()),F.$set(o)},i(t){if(!E){for(var r=0;r<O.length;r+=1)B(M[r]);B(F.$$.fragment,t),E=!0}},o(t){M=M.filter(Boolean);for(let t=0;t<M.length;t+=1)A(M[t]);A(F.$$.fragment,t),E=!1},d(t){t&&(s(r),s(o),s(a)),l(M,t),q(F),z()}}}function ht(t,r,n){let{version:e}=r;const o={1:["a","j","s"],2:["b","k","t","ö","ß"],3:["c","l","u"],4:["d","m","v"],5:["e","n","w"],6:["f","o","x","ä"],7:["g","p","y"],8:["h","q","z","ü"],9:["i","r"]},a=new Map(Object.keys(o).flatMap(function(t){return o[t].map(r=>[r,Number(t)])}));let c="",u=[],s=[],l=[];return t.$set=(t=>{"version"in t&&n("version",e=t.version)}),t.$$.update=((t={name:1,nameParts:1,charParts:1})=>{(t.name||t.nameParts||t.charParts)&&(n("nameParts",u=c.toLowerCase().split(" ").filter(t=>""!==t)),n("charParts",s=u.map(t=>[...t.toLowerCase()].filter(t=>" "!==t))),n("charNumberParts",l=s.map(t=>t.map(t=>isNaN(t)?a.get(t):Number(t)))))}),{version:e,name:c,nameParts:u,charParts:s,charNumberParts:l,input_input_handler:function(){c=this.value,n("name",c)}}}return new class extends F{constructor(t){super(),D(this,t,ht,mt,a,["version"])}}({target:document.body,props:{version:"0.2.0"}})}();
//# sourceMappingURL=bundle.js.map
