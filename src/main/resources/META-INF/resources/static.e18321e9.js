parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zQ7y":[function(require,module,exports) {
!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function u(n){return r(4,n,function(r){return function(t){return function(e){return function(u){return n(r,t,e,u)}}}})}function a(n){return r(5,n,function(r){return function(t){return function(e){return function(u){return function(a){return n(r,t,e,u,a)}}}}})}function i(n){return r(6,n,function(r){return function(t){return function(e){return function(u){return function(a){return function(i){return n(r,t,e,u,a,i)}}}}}})}function o(n){return r(7,n,function(r){return function(t){return function(e){return function(u){return function(a){return function(i){return function(o){return n(r,t,e,u,a,i,o)}}}}}}})}function f(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function c(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function s(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function v(n,r,t,e,u,a){return 5===n.a?n.f(r,t,e,u,a):n(r)(t)(e)(u)(a)}function d(n,r,t,e,u,a,i,o){return 7===n.a?n.f(r,t,e,u,a,i,o):n(r)(t)(e)(u)(a)(i)(o)}function b(n,r){for(var t,e=[],u=l(n,r,0,e);u&&(t=e.pop());u=l(t.a,t.b,0,e));return u}function l(n,r,t,e){if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&j(5),!1;if(t>100)return e.push(g(n,r)),!0;for(var u in 0>n.$&&(n=gr(n),r=gr(r)),n)if(!l(n[u],r[u],t+1,e))return!1;return!0}function $(n,r,t){if("object"!=typeof n)return n===r?0:r>n?-1:1;if(void 0===n.$)return(t=$(n.a,r.a))?t:(t=$(n.b,r.b))?t:$(n.c,r.c);for(;n.b&&r.b&&!(t=$(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var h=t(function(n,r){var t=$(n,r);return 0>t?lr:t?br:dr});function g(n,r){return{a:n,b:r}}function m(n){return n}function p(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}var y={$:0};function L(n,r){return{$:1,a:n,b:r}}var E=t(L);function w(n){for(var r=y,t=n.length;t--;)r=L(n[t],r);return r}var k=e(function(n,r,t){for(var e=[];r.b&&t.b;r=r.b,t=t.b)e.push(f(n,r.a,t.a));return w(e)}),A=e(function(n,r,t){for(var e=[],u=0;n>u;u++)e[u]=t(r+u);return e}),N=t(function(n,r){for(var t=[],e=0;n>e&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,g(t,r)});function j(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var T=Math.ceil,_=Math.floor,C=Math.log,R=t(function(n,r){return r.split(n)}),H=t(function(n,r){return r.join(n)}),P=t(function(n,r){for(var t=r.length;t--;){var e=r[t],u=r.charCodeAt(t);if(56320>u||u>57343||(e=r[--t]+e),!n(m(e)))return!1}return!0});function S(n){return{$:2,b:n}}var K=S(function(n){return"number"!=typeof n?U("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?Er(n):!isFinite(n)||n%1?U("an INT",n):Er(n)}),O=S(function(n){return"boolean"==typeof n?Er(n):U("a BOOL",n)}),B=(S(function(n){return"number"==typeof n?Er(n):U("a FLOAT",n)}),S(function(n){return Er(Z(n))}),S(function(n){return"string"==typeof n?Er(n):n instanceof String?Er(n+""):U("a STRING",n)})),F=t(function(n,r){return{$:6,d:n,b:r}});function Y(n,r){return{$:9,f:n,g:r}}var x=t(function(n,r){return{$:10,b:r,h:n}}),z=t(function(n,r){return Y(n,[r])}),q=e(function(n,r,t){return Y(n,[r,t])}),M=t(function(n,r){try{return D(n,JSON.parse(r))}catch(n){return mr(f(pr,"This is not valid JSON! "+n.message,Z(r)))}}),G=t(function(n,r){return D(n,nn(r))});function D(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Er(n.c):U("null",r);case 3:return J(r)?W(n.b,r,w):U("a LIST",r);case 4:return J(r)?W(n.b,r,I):U("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return U("an OBJECT with a field named `"+t+"`",r);var e=D(n.b,r[t]);return st(e)?e:mr(f(yr,t,e.a));case 7:var u=n.e;return J(r)?r.length>u?(e=D(n.b,r[u]),st(e)?e:mr(f(Lr,u,e.a))):U("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):U("an ARRAY",r);case 8:if("object"!=typeof r||null===r||J(r))return U("an OBJECT",r);var a=y;for(var i in r)if(r.hasOwnProperty(i)){if(e=D(n.b,r[i]),!st(e))return mr(f(yr,i,e.a));a=L(g(i,e.a),a)}return Er(Mr(a));case 9:for(var o=n.f,c=n.g,s=0;c.length>s;s++){if(e=D(c[s],r),!st(e))return e;o=o(e.a)}return Er(o);case 10:return e=D(n.b,r),st(e)?D(n.h(e.a),r):e;case 11:for(var v=y,d=n.g;d.b;d=d.b){if(e=D(d.a,r),st(e))return e;v=L(e.a,v)}return mr(wr(Mr(v)));case 1:return mr(f(pr,n.a,Z(r)));case 0:return Er(n.a)}}function W(n,r,t){for(var e=r.length,u=[],a=0;e>a;a++){var i=D(n,r[a]);if(!st(i))return mr(f(Lr,a,i.a));u[a]=i.a}return Er(t(u))}function J(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function I(n){return f(ct,n.length,function(r){return n[r]})}function U(n,r){return mr(f(pr,"Expecting "+n,Z(r)))}function Q(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return Q(n.b,r.b);case 6:return n.d===r.d&&Q(n.b,r.b);case 7:return n.e===r.e&&Q(n.b,r.b);case 9:return n.f===r.f&&V(n.g,r.g);case 10:return n.h===r.h&&Q(n.b,r.b);case 11:return V(n.g,r.g)}}function V(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;t>e;e++)if(!Q(n[e],r[e]))return!1;return!0}var X=t(function(n,r){return JSON.stringify(nn(r),null,n)+""});function Z(n){return n}function nn(n){return n}var rn=e(function(n,r,t){return t[n]=nn(r),t});function tn(n){return{$:0,a:n}}function en(n){return{$:2,b:n,c:null}}Z(null);var un=t(function(n,r){return{$:3,b:n,d:r}}),an=0;function on(n){var r={$:0,e:an++,f:n,g:null,h:[]};return bn(r),r}function fn(n){return en(function(r){r(tn(on(n)))})}function cn(n,r){n.h.push(r),bn(n)}var sn=t(function(n,r){return en(function(t){cn(n,r),t(tn(0))})}),vn=!1,dn=[];function bn(n){if(dn.push(n),!vn){for(vn=!0;n=dn.shift();)ln(n);vn=!1}}function ln(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,bn(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var $n={};function hn(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function gn(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,a=n.e,i=n.f;function o(n){return f(un,o,{$:5,b:function(r){var o=r.a;return 0===r.$?c(u,t,o,n):a&&i?s(e,t,o.i,o.j,n):c(e,t,a?o.i:o.j,n)}})}return t.h=on(f(un,o,n.b))}var mn=t(function(n,r){return en(function(t){n.g(r),t(tn(0))})}),pn=t(function(n,r){return f(sn,n.h,{$:0,a:r})});function yn(n){return function(r){return{$:1,k:n,l:r}}}function Ln(n){return{$:2,m:n}}var En,wn=[],kn=!1;function An(n,r,t){if(wn.push({p:n,q:r,r:t}),!kn){kn=!0;for(var e;e=wn.shift();)Nn(e.p,e.q,e.r);kn=!1}}function Nn(n,r,t){var e={};for(var u in jn(!0,r,e,null),jn(!1,t,e,null),n)cn(n[u],{$:"fx",a:e[u]||{i:y,j:y}})}function jn(n,r,t,e){switch(r.$){case 1:var u=r.k,a=function(n,t,e){function u(n){for(var r=e;r;r=r.t)n=r.s(n);return n}return f(n?$n[t].e:$n[t].f,u,r.l)}(n,u,e);return void(t[u]=function(n,r,t){return t=t||{i:y,j:y},n?t.i=L(r,t.i):t.j=L(r,t.j),t}(n,a,t[u]));case 2:for(var i=r.m;i.b;i=i.b)jn(n,i.a,t,e);return;case 3:return void jn(n,r.o,t,{s:r.n,t:e})}}var Tn="undefined"!=typeof document?document:{};function _n(n,r){n.appendChild(r)}function Cn(n){return{$:0,a:n}}var Rn=t(function(n,r){return t(function(t,e){for(var u=[],a=0;e.b;e=e.b){var i=e.a;a+=i.b||0,u.push(i)}return a+=u.length,{$:1,c:r,d:On(t),e:u,f:n,b:a}})})(void 0);t(function(n,r){return t(function(t,e){for(var u=[],a=0;e.b;e=e.b){var i=e.a;a+=i.b.b||0,u.push(i)}return a+=u.length,{$:2,c:r,d:On(t),e:u,f:n,b:a}})})(void 0);var Hn,Pn=t(function(n,r){return{$:"a0",n:n,o:r}}),Sn=t(function(n,r){return{$:"a2",n:n,o:r}}),Kn=t(function(n,r){return{$:"a3",n:n,o:r}});function On(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var i=r[e]||(r[e]={});"a3"===e&&"class"===u?Bn(i,u,a):i[u]=a}else"className"===u?Bn(r,u,nn(a)):r[u]=nn(a)}return r}function Bn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function Fn(n,r){var t=n.$;if(5===t)return Fn(n.k||(n.k=n.m()),r);if(0===t)return Tn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:r};return(i=Fn(e,a)).elm_event_node_ref=a,i}if(3===t)return Yn(i=n.h(n.g),r,n.d),i;var i=n.f?Tn.createElementNS(n.f,n.c):Tn.createElement(n.c);En&&"a"==n.c&&i.addEventListener("click",En(i)),Yn(i,r,n.d);for(var o=n.e,f=0;o.length>f;f++)_n(i,Fn(1===t?o[f]:o[f].b,r));return i}function Yn(n,r,t){for(var e in t){var u=t[e];"a1"===e?xn(n,u):"a0"===e?Mn(n,r,u):"a3"===e?zn(n,u):"a4"===e?qn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function xn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function zn(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function qn(n,r){for(var t in r){var e=r[t],u=e.f,a=e.o;void 0!==a?n.setAttributeNS(u,t,a):n.removeAttributeNS(u,t)}}function Mn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var a=t[u],i=e[u];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(u,i)}i=Gn(r,a),n.addEventListener(u,i,Hn&&{passive:2>lt(a)}),e[u]=i}else n.removeEventListener(u,i),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Hn=!0}}))}catch(n){}function Gn(n,r){function t(r){var e=t.q,u=D(e.a,r);if(st(u)){for(var a,i=lt(e),o=u.a,f=i?3>i?o.a:o.q:o,c=1==i?o.b:3==i&&o.U,s=(c&&r.stopPropagation(),(2==i?o.b:3==i&&o.R)&&r.preventDefault(),n);a=s.j;){if("function"==typeof a)f=a(f);else for(var v=a.length;v--;)f=a[v](f);s=s.p}s(f,c)}}return t.q=r,t}function Dn(n,r){return n.$==r.$&&Q(n.a,r.a)}function Wn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Jn(n,r,t,e){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void Wn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=[],u=0;t>u;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,o=r.l,f=i.length,c=f===o.length;c&&f--;)c=i[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var s=[];return Jn(n.k,r.k,s,0),void(s.length>0&&Wn(t,1,e,s));case 4:for(var v=n.j,d=r.j,b=!1,l=n.k;4===l.$;)b=!0,"object"!=typeof v?v=[v,l.j]:v.push(l.j),l=l.k;for(var $=r.k;4===$.$;)b=!0,"object"!=typeof d?d=[d,$.j]:d.push($.j),$=$.k;return b&&v.length!==d.length?void Wn(t,0,e,r):((b?function(n,r){for(var t=0;n.length>t;t++)if(n[t]!==r[t])return!1;return!0}(v,d):v===d)||Wn(t,2,e,d),void Jn(l,$,t,e+1));case 0:return void(n.a!==r.a&&Wn(t,3,e,r.a));case 1:return void In(n,r,t,e,Qn);case 2:return void In(n,r,t,e,Vn);case 3:if(n.h!==r.h)return void Wn(t,0,e,r);var h=Un(n.d,r.d);h&&Wn(t,4,e,h);var g=r.i(n.g,r.g);return void(g&&Wn(t,5,e,g))}}}function In(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var a=Un(n.d,r.d);a&&Wn(t,4,e,a),u(n,r,t,e)}else Wn(t,0,e,r)}function Un(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var a=n[u],i=r[u];a===i&&"value"!==u&&"checked"!==u||"a0"===t&&Dn(a,i)||((e=e||{})[u]=i)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var o=Un(n[u],r[u]||{},u);o&&((e=e||{})[u]=o)}for(var f in r)f in n||((e=e||{})[f]=r[f]);return e}function Qn(n,r,t,e){var u=n.e,a=r.e,i=u.length,o=a.length;i>o?Wn(t,6,e,{v:o,i:i-o}):o>i&&Wn(t,7,e,{v:i,e:a});for(var f=o>i?i:o,c=0;f>c;c++){var s=u[c];Jn(s,a[c],t,++e),e+=s.b||0}}function Vn(n,r,t,e){for(var u=[],a={},i=[],o=n.e,f=r.e,c=o.length,s=f.length,v=0,d=0,b=e;c>v&&s>d;){var l=(N=o[v]).a,$=(j=f[d]).a,h=N.b,g=j.b,m=void 0,p=void 0;if(l!==$){var y=o[v+1],L=f[d+1];if(y){var E=y.a,w=y.b;p=$===E}if(L){var k=L.a,A=L.b;m=l===k}if(m&&p)Jn(h,A,u,++b),Zn(a,u,l,g,d,i),b+=h.b||0,nr(a,u,l,w,++b),b+=w.b||0,v+=2,d+=2;else if(m)b++,Zn(a,u,$,g,d,i),Jn(h,A,u,b),b+=h.b||0,v+=1,d+=2;else if(p)nr(a,u,l,h,++b),b+=h.b||0,Jn(w,g,u,++b),b+=w.b||0,v+=2,d+=1;else{if(!y||E!==k)break;nr(a,u,l,h,++b),Zn(a,u,$,g,d,i),b+=h.b||0,Jn(w,A,u,++b),b+=w.b||0,v+=2,d+=2}}else Jn(h,g,u,++b),b+=h.b||0,v++,d++}for(;c>v;){var N;nr(a,u,(N=o[v]).a,h=N.b,++b),b+=h.b||0,v++}for(;s>d;){var j,T=T||[];Zn(a,u,(j=f[d]).a,j.b,void 0,T),d++}(u.length>0||i.length>0||T)&&Wn(t,8,e,{w:u,x:i,y:T})}var Xn="_elmW6BL";function Zn(n,r,t,e,u,a){var i=n[t];if(!i)return a.push({r:u,A:i={c:0,z:e,r:u,s:void 0}}),void(n[t]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var o=[];return Jn(i.z,e,o,i.r),i.r=u,void(i.s.s={w:o,A:i})}Zn(n,r,t+Xn,e,u,a)}function nr(n,r,t,e,u){var a=n[t];if(a){if(0===a.c){a.c=2;var i=[];return Jn(e,a.z,i,u),void Wn(r,9,u,{w:i,A:a})}nr(n,r,t+Xn,e,u)}else{var o=Wn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:o}}}function rr(n,r,t,e){return 0===t.length?n:(function n(r,t,e,u){!function r(t,e,u,a,i,o,f){for(var c=u[a],s=c.r;s===i;){var v=c.$;if(1===v)n(t,e.k,c.s,f);else if(8===v)c.t=t,c.u=f,(d=c.s.w).length>0&&r(t,e,d,0,i,o,f);else if(9===v){c.t=t,c.u=f;var d,b=c.s;b&&(b.A.s=t,(d=b.w).length>0&&r(t,e,d,0,i,o,f))}else c.t=t,c.u=f;if(!(c=u[++a])||(s=c.r)>o)return a}var l=e.$;if(4===l){for(var $=e.k;4===$.$;)$=$.k;return r(t,$,u,a,i+1,o,t.elm_event_node_ref)}for(var h=e.e,g=t.childNodes,m=0;h.length>m;m++){var p=1===l?h[m]:h[m].b,y=++i+(p.b||0);if(!(i>s||s>y||(c=u[a=r(g[m],p,u,a,i,y,f)])&&(s=c.r)<=o))return a;i=y}return a}(r,t,e,0,0,t.b,u)}(n,r,t,e),tr(n,t))}function tr(n,r){for(var t=0;r.length>t;t++){var e=r[t],u=e.t,a=er(u,e);u===n&&(n=a)}return n}function er(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=Fn(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return Yn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return tr(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;t.i>e;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,a=n.childNodes[e=t.v];u.length>e;e++)n.insertBefore(Fn(u[e],r.u),a);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var i=t.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=tr(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=Tn.createDocumentFragment(),e=0;n.length>e;e++){var u=n[e].A;_n(t,2===u.c?u.s:Fn(u.z,r.u))}return t}}(t.y,r);n=tr(n,t.w);for(var u=t.x,a=0;u.length>a;a++){var i=u[a],o=i.A,f=2===o.c?o.s:Fn(o.z,r.u);n.insertBefore(f,n.childNodes[i.r])}return e&&_n(n,e),n}(n,r);case 5:return r.s(n);default:j(10)}}var ur=u(function(n,r,t,e){return function(n,r,t,e,u,a){var i=f(G,n,Z(r?r.flags:void 0));st(i)||j(2);var o={},c=(i=t(i.a)).a,s=a(d,c),v=function(n,r){var t;for(var e in $n){var u=$n[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=gn(u,r)}return t}(o,d);function d(n,r){s(c=(i=f(e,n,c)).a,r),An(o,i.b,u(c))}return An(o,i.b,u(c)),v?{ports:v}:{}}(r,e,n.aK,n.aZ,n.aV,function(r,t){var e=n.S&&n.S(r),u=n.t,a=Tn.title,i=Tn.body,o=function n(r){if(3===r.nodeType)return Cn(r.textContent);if(1!==r.nodeType)return Cn("");for(var t=y,e=r.attributes,u=e.length;u--;){var a=e[u];t=L(f(Kn,a.name,a.value),t)}var i=r.tagName.toLowerCase(),o=y,s=r.childNodes;for(u=s.length;u--;)o=L(n(s[u]),o);return c(Rn,i,t,o)}(i);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(ar(e),r(n),1)}return function(u,a){n=u,a?(r(n),2===t&&(t=1)):(0===t&&ar(e),t=2)}}(t,function(n){En=e;var t=u(n),f=Rn("body")(y)(t.L),c=function(n,r){var t=[];return Jn(n,r,t,0),t}(o,f);i=rr(i,o,c,r),o=f,En=0,a!==t.aX&&(Tn.title=a=t.aX)})})}),ar=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});"undefined"!=typeof document&&document,"undefined"!=typeof window&&window;var ir=e(function(n,r,t){return en(function(e){function u(n){e(r(t.E.a(n)))}var a=new XMLHttpRequest;a.addEventListener("error",function(){u(St)}),a.addEventListener("timeout",function(){u(Bt)}),a.addEventListener("load",function(){u(function(n,r){return f(r.status>=200&&300>r.status?Pt:Rt,function(n){return{K:n.responseURL,aT:n.status,aU:n.statusText,aH:or(n.getAllResponseHeaders())}}(r),n(r.response))}(t.E.b,a))}),xt(t.aY)&&function(n,r,t){r.upload.addEventListener("progress",function(e){r.c||on(f(zt,n,g(t,Ot({aS:e.loaded,at:e.total}))))}),r.addEventListener("progress",function(e){r.c||on(f(zt,n,g(t,Kt({aQ:e.loaded,at:e.lengthComputable?kr(e.total):Ar}))))})}(n,a,t.aY.a);try{a.open(t.aL,t.K,!0)}catch(n){return u(Ht(t.K))}return function(n,r){for(var t=r.aH;t.b;t=t.b)n.setRequestHeader(t.a.a,t.a.b);n.timeout=r.aW.a||0,n.responseType=r.E.d,n.withCredentials=r.aB}(a,t),t.L.a&&a.setRequestHeader("Content-Type",t.L.a),a.send(t.L.b),function(){a.c=!0,a.abort()}})});function or(n){if(!n)return Yt;for(var r=Yt,t=n.split("\r\n"),e=t.length;e--;){var u=t[e],a=u.indexOf(": ");if(a>0){var i=u.substring(0,a),o=u.substring(a+2);r=c(re,i,function(n){return kr(xt(n)?o+", "+n.a:o)},r)}}return r}var fr=e(function(n,r,t){return{$:0,d:n,b:r,a:t}}),cr=t(function(n,r){return{$:0,d:r.d,b:r.b,a:function(t){return n(r.a(t))}}});function sr(n){return new DataView(n)}var vr=t(function(n,r){return{$:0,a:n,b:r}}),dr=1,br=2,lr=0,$r=E,hr=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,a=c(n,t.b,t.c,c(hr,n,r,t.e));n=u,r=a,t=e}}),gr=function(n){return c(hr,e(function(n,r,t){return f($r,g(n,r),t)}),y,n)},mr=function(n){return{$:1,a:n}},pr=t(function(n,r){return{$:3,a:n,b:r}}),yr=t(function(n,r){return{$:0,a:n,b:r}}),Lr=t(function(n,r){return{$:1,a:n,b:r}}),Er=function(n){return{$:0,a:n}},wr=function(n){return{$:2,a:n}},kr=function(n){return{$:0,a:n}},Ar={$:1},Nr=P,jr=X,Tr=function(n){return n+""},_r=t(function(n,r){return f(H,n,function(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}(r))}),Cr=t(function(n,r){return w(f(R,n,r))}),Rr=function(n){return f(_r,"\n    ",f(Cr,"\n",n))},Hr=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,a=f(n,t.a,r);n=u,r=a,t=e}}),Pr=function(n){return c(Hr,t(function(n,r){return r+1}),0,n)},Sr=k,Kr=e(function(n,r,t){for(;;){if($(n,r)>=1)return t;var e=n,u=r-1,a=f($r,r,t);n=e,r=u,t=a}}),Or=t(function(n,r){return c(Kr,n,r,y)}),Br=t(function(n,r){return c(Sr,n,f(Or,0,Pr(r)-1),r)}),Fr=function(n){var r=n.charCodeAt(0);return 55296>r||r>56319?r:1024*(r-55296)+n.charCodeAt(1)-56320+65536},Yr=function(n){var r=Fr(n);return r>=97&&122>=r},xr=function(n){var r=Fr(n);return 90>=r&&r>=65},zr=function(n){return Yr(n)||xr(n)},qr=function(n){return Yr(n)||xr(n)||function(n){var r=Fr(n);return 57>=r&&r>=48}(n)},Mr=function(n){return c(Hr,$r,y,n)},Gr=t(function(n,r){return"\n\n("+Tr(n+1)+") "+Rr(Dr(r))}),Dr=function(n){return f(Wr,n,y)},Wr=t(function(n,r){n:for(;;)switch(n.$){case 0:var t=n.a,e=n.b,u=function(){var n,r,e=(r=(n=t).charCodeAt(0),isNaN(r)?Ar:kr(55296>r||r>56319?g(m(n[0]),n.slice(1)):g(m(n[0]+n[1]),n.slice(2))));if(1===e.$)return!1;var u=e.a,a=u.b;return zr(u.a)&&f(Nr,qr,a)}();n=e,r=f($r,u?"."+t:"['"+t+"']",r);continue n;case 1:e=n.b;var a="["+Tr(n.a)+"]";n=e,r=f($r,a,r);continue n;case 2:var i=n.a;if(i.b){if(i.b.b){var o=(r.b?"The Json.Decode.oneOf at json"+f(_r,"",Mr(r)):"Json.Decode.oneOf")+" failed in the following "+Tr(Pr(i))+" ways:";return f(_r,"\n\n",f($r,o,f(Br,Gr,i)))}n=e=i.a,r=r;continue n}return"Ran into a Json.Decode.oneOf with no possibilities"+(r.b?" at json"+f(_r,"",Mr(r)):"!");default:var c=n.a,s=n.b;return(o=r.b?"Problem with the value at json"+f(_r,"",Mr(r))+":\n\n    ":"Problem with the given value:\n\n")+Rr(f(jr,4,s))+"\n\n"+c}}),Jr=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),Ir=[],Ur=T,Qr=t(function(n,r){return C(r)/C(n)}),Vr=Ur(f(Qr,2,32)),Xr=s(Jr,0,Vr,Ir,Ir),Zr=A,nt=t(function(n,r){return r(n)}),rt=_,tt=function(n){return n.length},et=t(function(n,r){return $(n,r)>0?n:r}),ut=N,at=t(function(n,r){for(;;){var t=f(ut,32,n),e=t.b,u=f($r,{$:0,a:t.a},r);if(!e.b)return Mr(u);n=e,r=u}}),it=t(function(n,r){for(;;){var t=Ur(r/32);if(1===t)return f(ut,32,n).a;n=f(at,n,y),r=t}}),ot=t(function(n,r){if(r.a){var t=32*r.a,e=rt(f(Qr,32,t-1)),u=n?Mr(r.d):r.d,a=f(it,u,r.a);return s(Jr,tt(r.c)+t,f(et,5,e*Vr),a,r.c)}return s(Jr,tt(r.c),Vr,Ir,r.c)}),ft=a(function(n,r,t,e,u){for(;;){if(0>r)return f(ot,!1,{d:e,a:t/32|0,c:u});var a={$:1,a:c(Zr,32,r,n)};n=n,r-=32,t=t,e=f($r,a,e),u=u}}),ct=t(function(n,r){if(n>0){var t=n%32;return v(ft,r,n-t-32,n,y,c(Zr,t,n-t,r))}return Xr}),st=function(n){return!n.$},vt=z,dt=q,bt=function(n){return{$:0,a:n}},lt=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},$t=function(n){return n},ht=tn,gt=ht(0),mt=u(function(n,r,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var i=a.a,o=a.b;if(o.b){var v=o.a,d=o.b;if(d.b){var b=d.b;return f(n,u,f(n,i,f(n,v,f(n,d.a,t>500?c(Hr,n,r,Mr(b)):s(mt,n,r,t+1,b)))))}return f(n,u,f(n,i,f(n,v,r)))}return f(n,u,f(n,i,r))}return f(n,u,r)}return r}),pt=e(function(n,r,t){return s(mt,n,r,0,t)}),yt=t(function(n,r){return c(pt,t(function(r,t){return f($r,n(r),t)}),y,r)}),Lt=un,Et=t(function(n,r){return f(Lt,function(r){return ht(n(r))},r)}),wt=e(function(n,r,t){return f(Lt,function(r){return f(Lt,function(t){return ht(f(n,r,t))},t)},r)}),kt=function(n){return c(pt,wt($r),ht(y),n)},At=mn,Nt=t(function(n,r){var t=r;return fn(f(Lt,At(n),t))});$n.Task=hn(gt,e(function(n,r){return f(Et,function(){return 0},kt(f(yt,Nt(n),r)))}),e(function(){return ht(0)}),t(function(n,r){return f(Et,n,r)})),yn("Task");var jt,Tt=ur,_t=function(n){return{$:2,a:n}},Ct=M,Rt=t(function(n,r){return{$:3,a:n,b:r}}),Ht=function(n){return{$:0,a:n}},Pt=t(function(n,r){return{$:4,a:n,b:r}}),St={$:2},Kt=function(n){return{$:1,a:n}},Ot=function(n){return{$:0,a:n}},Bt={$:1},Ft={$:-2},Yt=Ft,xt=function(n){return!n.$},zt=pn,qt=h,Mt=t(function(n,r){n:for(;;){if(-2===r.$)return Ar;var t=r.c,e=r.d,u=r.e;switch(f(qt,n,r.b)){case 0:n=n,r=e;continue n;case 1:return kr(t);default:n=n,r=u;continue n}}}),Gt=a(function(n,r,t,e,u){return{$:-1,a:n,b:r,c:t,d:e,e:u}}),Dt=a(function(n,r,t,e,u){if(-1!==u.$||u.a){if(-1!==e.$||e.a||-1!==e.d.$||e.d.a)return v(Gt,n,r,t,e,u);var a=e.d;return i=e.e,v(Gt,0,e.b,e.c,v(Gt,1,a.b,a.c,a.d,a.e),v(Gt,1,r,t,i,u))}var i,o=u.b,f=u.c,c=u.d,s=u.e;return-1!==e.$||e.a?v(Gt,n,o,f,v(Gt,0,r,t,e,c),s):v(Gt,0,r,t,v(Gt,1,e.b,e.c,e.d,i=e.e),v(Gt,1,o,f,c,s))}),Wt=e(function(n,r,t){if(-2===t.$)return v(Gt,0,n,r,Ft,Ft);var e=t.a,u=t.b,a=t.c,i=t.d,o=t.e;switch(f(qt,n,u)){case 0:return v(Dt,e,u,a,c(Wt,n,r,i),o);case 1:return v(Gt,e,u,r,i,o);default:return v(Dt,e,u,a,i,c(Wt,n,r,o))}}),Jt=e(function(n,r,t){var e=c(Wt,n,r,t);return-1!==e.$||e.a?e:v(Gt,1,e.b,e.c,e.d,e.e)}),It=function(n){if(-1===n.$&&-1===n.d.$&&-1===n.e.$){if(-1!==n.e.d.$||n.e.d.a){var r=n.d,t=n.e;return i=t.b,o=t.c,e=t.d,s=t.e,v(Gt,1,n.b,n.c,v(Gt,0,r.b,r.c,r.d,r.e),v(Gt,0,i,o,e,s))}var e,u=n.d,a=n.e,i=a.b,o=a.c,f=(e=a.d).d,c=e.e,s=a.e;return v(Gt,0,e.b,e.c,v(Gt,1,n.b,n.c,v(Gt,0,u.b,u.c,u.d,u.e),f),v(Gt,1,i,o,c,s))}return n},Ut=function(n){if(-1===n.$&&-1===n.d.$&&-1===n.e.$){if(-1!==n.d.d.$||n.d.d.a){var r=n.d,t=n.e;return c=t.b,s=t.c,d=t.d,b=t.e,v(Gt,1,e=n.b,u=n.c,v(Gt,0,r.b,r.c,r.d,o=r.e),v(Gt,0,c,s,d,b))}var e=n.b,u=n.c,a=n.d,i=a.d,o=a.e,f=n.e,c=f.b,s=f.c,d=f.d,b=f.e;return v(Gt,0,a.b,a.c,v(Gt,1,i.b,i.c,i.d,i.e),v(Gt,1,e,u,o,v(Gt,0,c,s,d,b)))}return n},Qt=o(function(n,r,t,e,u,a,i){if(-1!==a.$||a.a){n:for(;;){if(-1===i.$&&1===i.a){if(-1===i.d.$){if(1===i.d.a)return Ut(r);break n}return Ut(r)}break n}return r}return v(Gt,t,a.b,a.c,a.d,v(Gt,0,e,u,a.e,i))}),Vt=function(n){if(-1===n.$&&-1===n.d.$){var r=n.a,t=n.b,e=n.c,u=n.d,a=u.d,i=n.e;if(1===u.a){if(-1!==a.$||a.a){var o=It(n);if(-1===o.$){var f=o.e;return v(Dt,o.a,o.b,o.c,Vt(o.d),f)}return Ft}return v(Gt,r,t,e,Vt(u),i)}return v(Gt,r,t,e,Vt(u),i)}return Ft},Xt=t(function(n,r){if(-2===r.$)return Ft;var t=r.a,e=r.b,u=r.c,a=r.d,i=r.e;if(0>$(n,e)){if(-1===a.$&&1===a.a){var o=a.d;if(-1!==o.$||o.a){var c=It(r);if(-1===c.$){var s=c.e;return v(Dt,c.a,c.b,c.c,f(Xt,n,c.d),s)}return Ft}return v(Gt,t,e,u,f(Xt,n,a),i)}return v(Gt,t,e,u,f(Xt,n,a),i)}return f(Zt,n,d(Qt,n,r,t,e,u,a,i))}),Zt=t(function(n,r){if(-1===r.$){var t=r.a,e=r.b,u=r.c,a=r.d,i=r.e;if(b(n,e)){var o=function(n){for(;;){if(-1!==n.$||-1!==n.d.$)return n;n=n.d}}(i);return-1===o.$?v(Dt,t,o.b,o.c,a,Vt(i)):Ft}return v(Dt,t,e,u,a,f(Xt,n,i))}return Ft}),ne=t(function(n,r){var t=f(Xt,n,r);return-1!==t.$||t.a?t:v(Gt,1,t.b,t.c,t.d,t.e)}),re=e(function(n,r,t){var e=r(f(Mt,n,t));return e.$?f(ne,n,t):c(Jt,n,e.a,t)}),te=e(function(n,r,t){return r(n(t))}),ee=t(function(n,r){return c(fr,"",$t,f(te,r,n))}),ue=t(function(n,r){return r.$?mr(n(r.a)):Er(r.a)}),ae=function(n){return{$:4,a:n}},ie={$:2},oe={$:1},fe=t(function(n,r){switch(r.$){case 0:return mr({$:0,a:r.a});case 1:return mr(oe);case 2:return mr(ie);case 3:return mr({$:3,a:r.a.aT});default:return f(ue,ae,n(r.b))}}),ce=t(function(n,r){return f(ee,n,fe(function(n){return f(ue,Dr,f(Ct,r,n))}))}),se=i(function(n,r,t,e,u,a){return{N:u,z:e,aa:a,ab:r,v:t,ag:n}}),ve=x,de=function(n){return{$:1,a:n}},be=t(function(n,r){return r.$?Ar:kr(n(r.a))}),le=B,$e=t(function(n,r){return r.$?n:r.a}),he=f(ve,function(n){return f($e,function(n){return de("Could not parser actor from "+n)}(n),f(be,bt,function(n){switch(n){case"PLAYER":return kr(1);case"COMPUTER":return kr(0);default:return Ar}}(n)))},le),ge=O,me=f(ve,function(n){return f($e,function(n){return de("Could not parser game strategy from "+n)}(n),f(be,bt,function(n){switch(n){case"RandomPick":return kr(0);case"SmartPick":return kr(1);default:return Ar}}(n)))},le),pe=K,ye=function(n){return{$:3,b:n}},Le=t(function(n,r){return{M:r,Q:n}}),Ee=dt(nt),we=F,ke=e(function(n,r,t){return f(Ee,f(we,n,r),t)}),Ae=c(ke,"actor",he,c(ke,"pinsTaken",pe,bt(Le))),Ne=ye(Ae),je=c(ke,"gameFinished",ge,c(ke,"currentActor",{$:11,g:w([(jt=Ar,{$:5,c:jt}),f(vt,kr,he)])},c(ke,"currentPins",pe,c(ke,"id",le,c(ke,"gameStrategy",me,c(ke,"moveHistory",Ne,bt(se))))))),Te=ye(je),_e={$:0},Ce=function(n){return{$:1,a:n}},Re=t(function(n,r){return{ap:n,au:r}}),He=ht(f(Re,Yt,y)),Pe=function(n){return en(function(r){var t=n.f;2===t.$&&t.c&&t.c(),n.f=null,r(tn(0))})},Se=fn,Ke=e(function(n,r,t){n:for(;;){if(r.b){var e=r.a,u=r.b;if(e.$){var a=e.a;return f(Lt,function(r){var e=a.aY;return c(Ke,n,u,1===e.$?t:c(Jt,e.a,r,t))},Se(c(ir,n,At(n),a)))}var i=e.a,o=f(Mt,i,t);if(1===o.$){n=n,r=u,t=t;continue n}return f(Lt,function(){return c(Ke,n,u,f(ne,i,t))},Pe(o.a))}return ht(t)}}),Oe=u(function(n,r,t,e){return f(Lt,function(n){return ht(f(Re,n,t))},c(Ke,n,r,e.ap))}),Be=e(function(n,r,t){var e=n(r);return e.$?t:f($r,e.a,t)}),Fe=t(function(n,r){return c(pt,Be(n),y,r)}),Ye=u(function(n,r,t,e){var u=e.b;return b(r,e.a)?kr(f(At,n,u(t))):Ar}),xe=e(function(n,r,t){return f(Lt,function(){return ht(t)},kt(f(Fe,c(Ye,n,r.a,r.b),t.au)))}),ze=t(function(n,r){if(r.$){var t=r.a;return Ce({aB:t.aB,L:t.L,E:f(cr,n,t.E),aH:t.aH,aL:t.aL,aW:t.aW,aY:t.aY,K:t.K})}return{$:0,a:r.a}}),qe=t(function(n,r){return{$:0,a:n,b:r}});$n.Http=hn(He,Oe,xe,ze,t(function(n,r){return f(qe,r.a,f(te,r.b,n))}));var Me,Ge=yn("Http"),De=(yn("Http"),function(n){return Ge(Ce({aB:!1,L:n.L,E:n.E,aH:n.aH,aL:n.aL,aW:n.aW,aY:n.aY,K:n.K}))}),We=function(n){return De({L:_e,E:n.E,aH:y,aL:"GET",aW:Ar,aY:Ar,K:n.K})},Je=function(n){return We({E:f(ce,_t,Te),K:n+"/nim-games"})},Ie=function(n){return{$:0,a:n}},Ue=Ln(y),Qe=function(n){return{$:1,a:n}},Ve=function(n){return{$:7,a:n}},Xe=t(function(n,r){return c(fr,"arraybuffer",sr,f(te,r,n))}),Ze=t(function(n,r){return De({L:_e,E:(t=Ve,f(Xe,t,fe(function(){return Er(0)}))),aH:y,aL:"DELETE",aW:Ar,aY:Ar,K:n+"/nim-games/"+r});var t}),nu=function(n){return{$:3,a:n}},ru=t(function(n,r){return We({E:f(ce,nu,je),K:n+"/nim-games/"+r})}),tu=function(n){switch(n.$){case 0:return"BasUrl "+n.a;case 1:return"Timeout";case 2:return"Network Error";case 3:return"Bad Status "+Tr(n.a);default:return"Bad Body "+n.a}},eu=t(function(n,r){return{$:5,a:n,b:r}}),uu=function(n){return 1===n?"PLAYER":"COMPUTER"},au=Z,iu=Z,ou=function(n){return r=w([g("pinsTaken",au(n.Q)),g("actor",iu(uu(n.M)))]),Z(c(Hr,t(function(n,r){return c(rn,n.a,n.b,r)}),{},r));var r},fu=function(n){return De({L:n.L,E:n.E,aH:y,aL:"POST",aW:Ar,aY:Ar,K:n.K})},cu=e(function(n,r,t){return fu({L:(e=ou(t),f(vr,"application/json",f(jr,0,e))),E:f(ce,eu(r),Ae),K:n+"/moves?gid="+r});var e}),su=Ln(y),vu=t(function(n,r){var t=r?"smrt":"rnd";return fu({L:_e,E:f(ce,nu,je),K:n+"/nim-games?gs="+t})}),du=t(function(n,r){switch(n.$){case 0:return n.a.$?g(p(r,{t:n.a}),su):g(p(r,{t:Ie(n.a.a)}),Je(r.m));case 1:return g(r,f(vu,r.m,1));case 2:return g(p(r,n.a.$?{i:w([tu(n.a.a)])}:{i:y,t:Ie(n.a.a)}),su);case 3:return g(p(r,n.a.$?{i:w([tu(n.a.a)])}:{i:y,t:Qe(n.a.a)}),su);case 4:return g(r,c(cu,r.m,t=n.b,n.a));case 5:if(n.b.$)return g(p(r,{i:w([tu(n.b.a)])}),su);var t=n.a;return g(p(r,{i:y}),f(ru,r.m,t));case 7:return n.a.$?g(p(r,{i:w([tu(n.a.a)])}),su):g(p(r,{i:y}),Je(r.m));case 6:return g(r,f(Ze,r.m,t=n.a));default:return g(p(r,{i:y}),su)}}),bu=t(function(n,r){return f(Sn,n,iu(r))}),lu=bu("className"),$u=Rn("div"),hu=Rn("h1"),gu=Rn("p"),mu=Rn("h2"),pu=Cn,yu=t(function(n,r){return f($u,w([lu("box")]),w([f(mu,w([lu("title")]),w([pu(n)])),f($u,w([lu("content")]),w([r]))]))}),Lu=t(function(n,r){return{$:4,a:n,b:r}}),Eu=Rn("button"),wu=Z,ku=t(function(n,r){return f(Sn,n,wu(r))})("disabled"),Au=Pn,Nu=t(function(n,r){return f(Au,n,{$:0,a:r})}),ju=function(n){return f(Nu,"click",bt(n))},Tu=Rn("strong"),_u=Rn("table"),Cu=Rn("td"),Ru=Rn("tr"),Hu=Rn("h3"),Pu=function(n){return f(Cu,y,w([f($u,w([lu("box")]),w([f(mu,y,w([pu("Pins")])),pu(Tr(n.Q)),f(Hu,y,w([pu("Actor")])),pu(uu(n.M))]))]))},Su=Rn("abbr"),Ku=Rn("tbody"),Ou=Rn("tfoot"),Bu=Rn("th"),Fu=Rn("thead"),Yu=bu("title"),xu=f(Ru,y,w([f(Cu,y,y),f(Cu,y,y),f(Cu,y,y),f(Cu,y,y),f(Cu,y,w([f(Eu,w([lu("button is-info"),ju({$:1})]),w([pu("Start New Game")]))]))])),zu=function(n){return{$:0,a:n}},qu=Rn("a"),Mu=bu("alt"),Gu=Rn("i"),Du=Rn("span"),Wu=function(n){return f(Ru,y,w([f(Cu,y,w([pu(n.v)])),f(Cu,y,w([pu((t=n.aa,t?"true":"false"))])),f(Cu,y,w([pu(Tr(n.z))])),f(Cu,y,w([pu(f($e,"no actor yes",f(be,uu,n.N)))])),f(Cu,y,w([f(Du,w([lu("icon")]),w([f(qu,w([ju(zu(Qe(n))),Mu("View")]),w([f(Gu,w([lu("fas fa-list")]),y)]))])),f(Du,w([lu("icon has-text-danger")]),w([f(qu,w([ju((r=n.v,{$:6,a:r}))]),w([f(Gu,w([lu("fas fa-ban"),Mu("Delete")]),y)]))]))]))]));var r,t},Ju=function(n){if(n.$){var r=n.a;return f(yu,"Game "+r.v,function(n){var r,e,u,a=t(function(n,r){return ku($(n,r)>0)});return f($u,y,w([f($u,w([lu("content")]),w([f(_u,w([lu("table is-narrow")]),w([f(Ru,y,w([f(Cu,y,w([f(Tu,y,w([pu("Current Actor")]))])),f(Cu,y,w([pu(f($e,"no Actor yet",f(be,uu,n.N)))]))])),f(Ru,y,w([f(Cu,y,w([f(Tu,y,w([pu("Current Pins")]))])),f(Cu,y,w([pu(Tr(n.z))]))])),f(Ru,y,w([f(Cu,y,w([f(Tu,y,w([pu("Gmae Strategy")]))])),f(Cu,y,w([pu((u=n.ab,u?"SmartPick":"RandomPick"))]))]))]))])),f($u,w([lu("content")]),w([f(gu,w([lu("title is-2")]),w([pu("Move History")])),f(gu,w([lu("subtitle is-3")]),y)])),(r=n.ag,e=r.b?f(yt,Pu,r):w([f(Cu,y,w([pu("no moves yet")]))]),f($u,w([lu("table-container")]),w([f(_u,y,w([f(Ru,y,e)]))]))),f($u,w([lu("content")]),w([f(gu,w([lu("title is-2")]),w([pu("Next Move")])),f(gu,w([lu("subtitle is-3")]),y)])),f($u,w([lu("columns is-mobile is-centered")]),w([f($u,w([lu("column  is-2")]),w([f(Eu,w([lu("button is-link"),ju(f(Lu,f(Le,1,1),n.v)),f(a,1,n.z)]),w([pu("Take 1")]))])),f($u,w([lu("column  is-2")]),w([f(Eu,w([lu("button is-link"),ju(f(Lu,f(Le,2,1),n.v)),f(a,2,n.z)]),w([pu("Take 2")]))])),f($u,w([lu("column is-2")]),w([f(Eu,w([lu("button is-link"),ju(f(Lu,f(Le,3,1),n.v)),f(a,3,n.z)]),w([pu("Take 3")]))]))]))]))}(r))}return f(yu,"Games",function(n){return f($u,w([lu("container")]),w([f(_u,w([lu("table is-hoverable")]),w([f(Fu,y,w([f(Ru,y,w([f(Bu,y,w([f(Su,w([Yu("Id")]),w([pu("Id")]))])),f(Bu,y,w([f(Su,w([Yu("Finished")]),w([pu("Has Finished")]))])),f(Bu,y,w([f(Su,w([Yu("Remaining Pins")]),w([pu("Pins")]))])),f(Bu,y,w([f(Su,w([Yu("Current Actor")]),w([pu("Actor")]))])),f(Bu,y,w([f(Su,w([Yu("Actions")]),w([pu("Actions")]))]))]))])),f(Ku,y,f(yt,Wu,n))])),f(Ou,y,w([xu]))]))}(n.a))},Iu=Rn("section"),Uu=Rn("li"),Qu=Rn("nav"),Vu=Rn("ul"),Xu=f(Qu,w([lu("breadcrumb is-right")]),w([f(Vu,y,w([f(Uu,y,w([f(qu,w([ju(zu(Ie(y))),lu("is-active")]),w([pu("Games")]))]))]))])),Zu={$:8},na=function(n){return f($u,w([lu("notification is-danger is-light")]),w([f(Eu,w([lu("delete"),ju(Zu)]),y),f(Tu,y,w([pu(n)]))]))};Me={Main:{init:Tt({aK:function(n){var r={m:n,i:y,t:Ie(y)};return g(r,Je(r.m))},aV:function(){return Ue},aZ:du,t:function(n){return{L:w([f(Iu,w([lu("section")]),w([f($u,w([lu("container")]),w([f(hu,w([lu("title")]),w([pu("Nim Game")])),f(gu,w([lu("subtitle")]),w([pu("Coding Assesment")])),Xu,Ju(n.t)])),f($u,w([lu("container is-size-1-mobile")]),(r=n.i,f(yt,na,r)))]))]),aX:"Nim Game"};var r}})(le)(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?j(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,Me):n.Elm=Me}(this);
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("../src/Main.elm");e.Elm.Main.init({node:document.getElementById("main"),flags:"http://localhost:8080"});
},{"../src/Main.elm":"zQ7y"}]},{},["Focm"], null)
//# sourceMappingURL=/static.e18321e9.js.map