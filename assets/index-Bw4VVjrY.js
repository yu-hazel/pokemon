(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Va(e,n){const t=new Set(e.split(","));return s=>t.has(s)}const Re={},Mt=[],pn=()=>{},Sg=()=>!1,wi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Da=e=>e.startsWith("onUpdate:"),De=Object.assign,Wa=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Og=Object.prototype.hasOwnProperty,fe=(e,n)=>Og.call(e,n),re=Array.isArray,Rt=e=>bi(e)==="[object Map]",gl=e=>bi(e)==="[object Set]",he=e=>typeof e=="function",Fe=e=>typeof e=="string",it=e=>typeof e=="symbol",xe=e=>e!==null&&typeof e=="object",ul=e=>(xe(e)||he(e))&&he(e.then)&&he(e.catch),dl=Object.prototype.toString,bi=e=>dl.call(e),Cg=e=>bi(e).slice(8,-1),ml=e=>bi(e)==="[object Object]",Ka=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ns=Va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yi=e=>{const n=Object.create(null);return t=>n[t]||(n[t]=e(t))},Eg=/-(\w)/g,gn=yi(e=>e.replace(Eg,(n,t)=>t?t.toUpperCase():"")),xg=/\B([A-Z])/g,jt=yi(e=>e.replace(xg,"-$1").toLowerCase()),Dn=yi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wi=yi(e=>e?`on${Dn(e)}`:""),tt=(e,n)=>!Object.is(e,n),Hs=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},fl=(e,n,t,s=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:s,value:t})},pa=e=>{const n=parseFloat(e);return isNaN(n)?e:n},_g=e=>{const n=Fe(e)?Number(e):NaN;return isNaN(n)?e:n};let er;const kl=()=>er||(er=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vi(e){if(re(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],i=Fe(s)?Bg(s):vi(s);if(i)for(const a in i)n[a]=i[a]}return n}else if(Fe(e)||xe(e))return e}const Mg=/;(?![^(]*\))/g,Rg=/:([^]+)/,Ng=/\/\*[^]*?\*\//g;function Bg(e){const n={};return e.replace(Ng,"").split(Mg).forEach(t=>{if(t){const s=t.split(Rg);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function st(e){let n="";if(Fe(e))n=e;else if(re(e))for(let t=0;t<e.length;t++){const s=st(e[t]);s&&(n+=s+" ")}else if(xe(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Lg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fg=Va(Lg);function wl(e){return!!e||e===""}const bl=e=>!!(e&&e.__v_isRef===!0),Ae=e=>Fe(e)?e:e==null?"":re(e)||xe(e)&&(e.toString===dl||!he(e.toString))?bl(e)?Ae(e.value):JSON.stringify(e,yl,2):String(e),yl=(e,n)=>bl(n)?yl(e,n.value):Rt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,i],a)=>(t[Ki(s,a)+" =>"]=i,t),{})}:gl(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Ki(t))}:it(n)?Ki(n):xe(n)&&!re(n)&&!ml(n)?String(n):n,Ki=(e,n="")=>{var t;return it(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let an;class vl{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this.parent=an,!n&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}run(n){if(this._active){const t=an;try{return an=this,n()}finally{an=t}}}on(){an=this}off(){an=this.parent}stop(n){if(this._active){let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ps(e){return new vl(e)}function Vg(e,n=an){n&&n.active&&n.effects.push(e)}function Pl(){return an}function dn(e){an&&an.cleanups.push(e)}let mt;class za{constructor(n,t,s,i){this.fn=n,this.trigger=t,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Vg(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,at();for(let n=0;n<this._depsLength;n++){const t=this.deps[n];if(t.computed&&(Dg(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ot()}return this._dirtyLevel>=4}set dirty(n){this._dirtyLevel=n?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let n=et,t=mt;try{return et=!0,mt=this,this._runnings++,nr(this),this.fn()}finally{tr(this),this._runnings--,mt=t,et=n}}stop(){this.active&&(nr(this),tr(this),this.onStop&&this.onStop(),this.active=!1)}}function Dg(e){return e.value}function nr(e){e._trackId++,e._depsLength=0}function tr(e){if(e.deps.length>e._depsLength){for(let n=e._depsLength;n<e.deps.length;n++)jl(e.deps[n],e);e.deps.length=e._depsLength}}function jl(e,n){const t=e.get(n);t!==void 0&&n._trackId!==t&&(e.delete(n),e.size===0&&e.cleanup())}let et=!0,ca=0;const Il=[];function at(){Il.push(et),et=!1}function ot(){const e=Il.pop();et=e===void 0?!0:e}function Ha(){ca++}function $a(){for(ca--;!ca&&ga.length;)ga.shift()()}function Al(e,n,t){if(n.get(e)!==e._trackId){n.set(e,e._trackId);const s=e.deps[e._depsLength];s!==n?(s&&jl(s,e),e.deps[e._depsLength++]=n):e._depsLength++}}const ga=[];function Tl(e,n,t){Ha();for(const s of e.keys()){let i;s._dirtyLevel<n&&(i??(i=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=n),s._shouldSchedule&&(i??(i=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&ga.push(s.scheduler)))}$a()}const Sl=(e,n)=>{const t=new Map;return t.cleanup=e,t.computed=n,t},ni=new WeakMap,ft=Symbol(""),ua=Symbol("");function nn(e,n,t){if(et&&mt){let s=ni.get(e);s||ni.set(e,s=new Map);let i=s.get(t);i||s.set(t,i=Sl(()=>s.delete(t))),Al(mt,i)}}function Bn(e,n,t,s,i,a){const o=ni.get(e);if(!o)return;let r=[];if(n==="clear")r=[...o.values()];else if(t==="length"&&re(e)){const h=Number(s);o.forEach((l,p)=>{(p==="length"||!it(p)&&p>=h)&&r.push(l)})}else switch(t!==void 0&&r.push(o.get(t)),n){case"add":re(e)?Ka(t)&&r.push(o.get("length")):(r.push(o.get(ft)),Rt(e)&&r.push(o.get(ua)));break;case"delete":re(e)||(r.push(o.get(ft)),Rt(e)&&r.push(o.get(ua)));break;case"set":Rt(e)&&r.push(o.get(ft));break}Ha();for(const h of r)h&&Tl(h,4);$a()}function Wg(e,n){const t=ni.get(e);return t&&t.get(n)}const Kg=Va("__proto__,__v_isRef,__isVue"),Ol=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(it)),sr=zg();function zg(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...t){const s=de(this);for(let a=0,o=this.length;a<o;a++)nn(s,"get",a+"");const i=s[n](...t);return i===-1||i===!1?s[n](...t.map(de)):i}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...t){at(),Ha();const s=de(this)[n].apply(this,t);return $a(),ot(),s}}),e}function Hg(e){it(e)||(e=String(e));const n=de(this);return nn(n,"has",e),n.hasOwnProperty(e)}class Cl{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,s){const i=this._isReadonly,a=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return a;if(t==="__v_raw")return s===(i?a?su:Ml:a?_l:xl).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const o=re(n);if(!i){if(o&&fe(sr,t))return Reflect.get(sr,t,s);if(t==="hasOwnProperty")return Hg}const r=Reflect.get(n,t,s);return(it(t)?Ol.has(t):Kg(t))||(i||nn(n,"get",t),a)?r:_e(r)?o&&Ka(t)?r:r.value:xe(r)?i?js(r):mn(r):r}}class El extends Cl{constructor(n=!1){super(!1,n)}set(n,t,s,i){let a=n[t];if(!this._isShallow){const h=ls(a);if(!ti(s)&&!ls(s)&&(a=de(a),s=de(s)),!re(n)&&_e(a)&&!_e(s))return h?!1:(a.value=s,!0)}const o=re(n)&&Ka(t)?Number(t)<n.length:fe(n,t),r=Reflect.set(n,t,s,i);return n===de(i)&&(o?tt(s,a)&&Bn(n,"set",t,s):Bn(n,"add",t,s)),r}deleteProperty(n,t){const s=fe(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&s&&Bn(n,"delete",t,void 0),i}has(n,t){const s=Reflect.has(n,t);return(!it(t)||!Ol.has(t))&&nn(n,"has",t),s}ownKeys(n){return nn(n,"iterate",re(n)?"length":ft),Reflect.ownKeys(n)}}class $g extends Cl{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Ug=new El,Gg=new $g,Yg=new El(!0);const Ua=e=>e,Pi=e=>Reflect.getPrototypeOf(e);function xs(e,n,t=!1,s=!1){e=e.__v_raw;const i=de(e),a=de(n);t||(tt(n,a)&&nn(i,"get",n),nn(i,"get",a));const{has:o}=Pi(i),r=s?Ua:t?Xa:ps;if(o.call(i,n))return r(e.get(n));if(o.call(i,a))return r(e.get(a));e!==i&&e.get(n)}function _s(e,n=!1){const t=this.__v_raw,s=de(t),i=de(e);return n||(tt(e,i)&&nn(s,"has",e),nn(s,"has",i)),e===i?t.has(e):t.has(e)||t.has(i)}function Ms(e,n=!1){return e=e.__v_raw,!n&&nn(de(e),"iterate",ft),Reflect.get(e,"size",e)}function ir(e){e=de(e);const n=de(this);return Pi(n).has.call(n,e)||(n.add(e),Bn(n,"add",e,e)),this}function ar(e,n){n=de(n);const t=de(this),{has:s,get:i}=Pi(t);let a=s.call(t,e);a||(e=de(e),a=s.call(t,e));const o=i.call(t,e);return t.set(e,n),a?tt(n,o)&&Bn(t,"set",e,n):Bn(t,"add",e,n),this}function or(e){const n=de(this),{has:t,get:s}=Pi(n);let i=t.call(n,e);i||(e=de(e),i=t.call(n,e)),s&&s.call(n,e);const a=n.delete(e);return i&&Bn(n,"delete",e,void 0),a}function rr(){const e=de(this),n=e.size!==0,t=e.clear();return n&&Bn(e,"clear",void 0,void 0),t}function Rs(e,n){return function(s,i){const a=this,o=a.__v_raw,r=de(o),h=n?Ua:e?Xa:ps;return!e&&nn(r,"iterate",ft),o.forEach((l,p)=>s.call(i,h(l),h(p),a))}}function Ns(e,n,t){return function(...s){const i=this.__v_raw,a=de(i),o=Rt(a),r=e==="entries"||e===Symbol.iterator&&o,h=e==="keys"&&o,l=i[e](...s),p=t?Ua:n?Xa:ps;return!n&&nn(a,"iterate",h?ua:ft),{next(){const{value:c,done:g}=l.next();return g?{value:c,done:g}:{value:r?[p(c[0]),p(c[1])]:p(c),done:g}},[Symbol.iterator](){return this}}}}function zn(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function qg(){const e={get(a){return xs(this,a)},get size(){return Ms(this)},has:_s,add:ir,set:ar,delete:or,clear:rr,forEach:Rs(!1,!1)},n={get(a){return xs(this,a,!1,!0)},get size(){return Ms(this)},has:_s,add:ir,set:ar,delete:or,clear:rr,forEach:Rs(!1,!0)},t={get(a){return xs(this,a,!0)},get size(){return Ms(this,!0)},has(a){return _s.call(this,a,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:Rs(!0,!1)},s={get(a){return xs(this,a,!0,!0)},get size(){return Ms(this,!0)},has(a){return _s.call(this,a,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:Rs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Ns(a,!1,!1),t[a]=Ns(a,!0,!1),n[a]=Ns(a,!1,!0),s[a]=Ns(a,!0,!0)}),[e,t,n,s]}const[Xg,Zg,Jg,Qg]=qg();function Ga(e,n){const t=n?e?Qg:Jg:e?Zg:Xg;return(s,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(fe(t,i)&&i in s?t:s,i,a)}const eu={get:Ga(!1,!1)},nu={get:Ga(!1,!0)},tu={get:Ga(!0,!1)};const xl=new WeakMap,_l=new WeakMap,Ml=new WeakMap,su=new WeakMap;function iu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function au(e){return e.__v_skip||!Object.isExtensible(e)?0:iu(Cg(e))}function mn(e){return ls(e)?e:Ya(e,!1,Ug,eu,xl)}function Rl(e){return Ya(e,!1,Yg,nu,_l)}function js(e){return Ya(e,!0,Gg,tu,Ml)}function Ya(e,n,t,s,i){if(!xe(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const o=au(e);if(o===0)return e;const r=new Proxy(e,o===2?s:t);return i.set(e,r),r}function kt(e){return ls(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function ls(e){return!!(e&&e.__v_isReadonly)}function ti(e){return!!(e&&e.__v_isShallow)}function Nl(e){return e?!!e.__v_raw:!1}function de(e){const n=e&&e.__v_raw;return n?de(n):e}function qa(e){return Object.isExtensible(e)&&fl(e,"__v_skip",!0),e}const ps=e=>xe(e)?mn(e):e,Xa=e=>xe(e)?js(e):e;class Bl{constructor(n,t,s,i){this.getter=n,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new za(()=>n(this._value),()=>$s(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const n=de(this);return(!n._cacheable||n.effect.dirty)&&tt(n._value,n._value=n.effect.run())&&$s(n,4),Ll(n),n.effect._dirtyLevel>=2&&$s(n,2),n._value}set value(n){this._setter(n)}get _dirty(){return this.effect.dirty}set _dirty(n){this.effect.dirty=n}}function ou(e,n,t=!1){let s,i;const a=he(e);return a?(s=e,i=pn):(s=e.get,i=e.set),new Bl(s,i,a||!i,t)}function Ll(e){var n;et&&mt&&(e=de(e),Al(mt,(n=e.dep)!=null?n:e.dep=Sl(()=>e.dep=void 0,e instanceof Bl?e:void 0)))}function $s(e,n=4,t,s){e=de(e);const i=e.dep;i&&Tl(i,n)}function _e(e){return!!(e&&e.__v_isRef===!0)}function Y(e){return Fl(e,!1)}function ye(e){return Fl(e,!0)}function Fl(e,n){return _e(e)?e:new ru(e,n)}class ru{constructor(n,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?n:de(n),this._value=t?n:ps(n)}get value(){return Ll(this),this._value}set value(n){const t=this.__v_isShallow||ti(n)||ls(n);n=t?n:de(n),tt(n,this._rawValue)&&(this._rawValue,this._rawValue=n,this._value=t?n:ps(n),$s(this,4))}}function Ze(e){return _e(e)?e.value:e}const hu={get:(e,n,t)=>Ze(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const i=e[n];return _e(i)&&!_e(t)?(i.value=t,!0):Reflect.set(e,n,t,s)}};function Vl(e){return kt(e)?e:new Proxy(e,hu)}function ji(e){const n=re(e)?new Array(e.length):{};for(const t in e)n[t]=Dl(e,t);return n}class lu{constructor(n,t,s){this._object=n,this._key=t,this._defaultValue=s,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}get dep(){return Wg(de(this._object),this._key)}}class pu{constructor(n){this._getter=n,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ve(e,n,t){return _e(e)?e:he(e)?new pu(e):xe(e)&&arguments.length>1?Dl(e,n,t):Y(e)}function Dl(e,n,t){const s=e[n];return _e(s)?s:new lu(e,n,t)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nt(e,n,t,s){try{return s?e(...s):e()}catch(i){Ii(i,n,t)}}function cn(e,n,t,s){if(he(e)){const i=nt(e,n,t,s);return i&&ul(i)&&i.catch(a=>{Ii(a,n,t)}),i}if(re(e)){const i=[];for(let a=0;a<e.length;a++)i.push(cn(e[a],n,t,s));return i}}function Ii(e,n,t,s=!0){const i=n?n.vnode:null;if(n){let a=n.parent;const o=n.proxy,r=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const l=a.ec;if(l){for(let p=0;p<l.length;p++)if(l[p](e,o,r)===!1)return}a=a.parent}const h=n.appContext.config.errorHandler;if(h){at(),nt(h,null,10,[e,o,r]),ot();return}}cu(e,t,i,s)}function cu(e,n,t,s=!0){console.error(e)}let cs=!1,da=!1;const Ue=[];let Tn=0;const Nt=[];let Yn=null,gt=0;const Wl=Promise.resolve();let Za=null;function He(e){const n=Za||Wl;return e?n.then(this?e.bind(this):e):n}function gu(e){let n=Tn+1,t=Ue.length;for(;n<t;){const s=n+t>>>1,i=Ue[s],a=gs(i);a<e||a===e&&i.pre?n=s+1:t=s}return n}function Ja(e){(!Ue.length||!Ue.includes(e,cs&&e.allowRecurse?Tn+1:Tn))&&(e.id==null?Ue.push(e):Ue.splice(gu(e.id),0,e),Kl())}function Kl(){!cs&&!da&&(da=!0,Za=Wl.then(Hl))}function uu(e){const n=Ue.indexOf(e);n>Tn&&Ue.splice(n,1)}function du(e){re(e)?Nt.push(...e):(!Yn||!Yn.includes(e,e.allowRecurse?gt+1:gt))&&Nt.push(e),Kl()}function hr(e,n,t=cs?Tn+1:0){for(;t<Ue.length;t++){const s=Ue[t];if(s&&s.pre){if(e&&s.id!==e.uid)continue;Ue.splice(t,1),t--,s()}}}function zl(e){if(Nt.length){const n=[...new Set(Nt)].sort((t,s)=>gs(t)-gs(s));if(Nt.length=0,Yn){Yn.push(...n);return}for(Yn=n,gt=0;gt<Yn.length;gt++){const t=Yn[gt];t.active!==!1&&t()}Yn=null,gt=0}}const gs=e=>e.id==null?1/0:e.id,mu=(e,n)=>{const t=gs(e)-gs(n);if(t===0){if(e.pre&&!n.pre)return-1;if(n.pre&&!e.pre)return 1}return t};function Hl(e){da=!1,cs=!0,Ue.sort(mu);try{for(Tn=0;Tn<Ue.length;Tn++){const n=Ue[Tn];n&&n.active!==!1&&nt(n,null,14)}}finally{Tn=0,Ue.length=0,zl(),cs=!1,Za=null,(Ue.length||Nt.length)&&Hl()}}function fu(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||Re;let i=t;const a=n.startsWith("update:"),o=a&&n.slice(7);if(o&&o in s){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:c,trim:g}=s[p]||Re;g&&(i=t.map(u=>Fe(u)?u.trim():u)),c&&(i=t.map(pa))}let r,h=s[r=Wi(n)]||s[r=Wi(gn(n))];!h&&a&&(h=s[r=Wi(jt(n))]),h&&cn(h,e,6,i);const l=s[r+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,cn(l,e,6,i)}}function $l(e,n,t=!1){const s=n.emitsCache,i=s.get(e);if(i!==void 0)return i;const a=e.emits;let o={},r=!1;if(!he(e)){const h=l=>{const p=$l(l,n,!0);p&&(r=!0,De(o,p))};!t&&n.mixins.length&&n.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}return!a&&!r?(xe(e)&&s.set(e,null),null):(re(a)?a.forEach(h=>o[h]=null):De(o,a),xe(e)&&s.set(e,o),o)}function Ai(e,n){return!e||!wi(n)?!1:(n=n.slice(2).replace(/Once$/,""),fe(e,n[0].toLowerCase()+n.slice(1))||fe(e,jt(n))||fe(e,n))}let Je=null,Ti=null;function si(e){const n=Je;return Je=e,Ti=e&&e.type.__scopeId||null,n}function Qa(e){Ti=e}function eo(){Ti=null}function ke(e,n=Je,t){if(!n||e._n)return e;const s=(...i)=>{s._d&&jr(-1);const a=si(n);let o;try{o=e(...i)}finally{si(a),s._d&&jr(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function zi(e){const{type:n,vnode:t,proxy:s,withProxy:i,propsOptions:[a],slots:o,attrs:r,emit:h,render:l,renderCache:p,props:c,data:g,setupState:u,ctx:f,inheritAttrs:d}=e,b=si(e);let y,P;try{if(t.shapeFlag&4){const O=i||s,E=O;y=An(l.call(E,O,p,c,u,g,f)),P=r}else{const O=n;y=An(O.length>1?O(c,{attrs:r,slots:o,emit:h}):O(c,null)),P=n.props?r:ku(r)}}catch(O){is.length=0,Ii(O,e,1),y=k(on)}let S=y;if(P&&d!==!1){const O=Object.keys(P),{shapeFlag:E}=S;O.length&&E&7&&(a&&O.some(Da)&&(P=wu(P,a)),S=Fn(S,P,!1,!0))}return t.dirs&&(S=Fn(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),y=S,si(b),y}const ku=e=>{let n;for(const t in e)(t==="class"||t==="style"||wi(t))&&((n||(n={}))[t]=e[t]);return n},wu=(e,n)=>{const t={};for(const s in e)(!Da(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function bu(e,n,t){const{props:s,children:i,component:a}=e,{props:o,children:r,patchFlag:h}=n,l=a.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&h>=0){if(h&1024)return!0;if(h&16)return s?lr(s,o,l):!!o;if(h&8){const p=n.dynamicProps;for(let c=0;c<p.length;c++){const g=p[c];if(o[g]!==s[g]&&!Ai(l,g))return!0}}}else return(i||r)&&(!r||!r.$stable)?!0:s===o?!1:s?o?lr(s,o,l):!0:!!o;return!1}function lr(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const a=s[i];if(n[a]!==e[a]&&!Ai(t,a))return!0}return!1}function yu({vnode:e,parent:n},t){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=n.vnode).el=t,n=n.parent;else break}}const no="components",vu="directives";function to(e,n){return so(no,e,!0,n)||e}const Pu=Symbol.for("v-ndc");function ju(e){return Fe(e)&&so(no,e,!1)||e}function Is(e){return so(vu,e)}function so(e,n,t=!0,s=!1){const i=Je||ze;if(i){const a=i.type;if(e===no){const r=wd(a,!1);if(r&&(r===n||r===gn(n)||r===Dn(gn(n))))return a}const o=pr(i[e]||a[e],n)||pr(i.appContext[e],n);return!o&&s?a:o}}function pr(e,n){return e&&(e[n]||e[gn(n)]||e[Dn(gn(n))])}const Iu=e=>e.__isSuspense;function Au(e,n){n&&n.pendingBranch?re(e)?n.effects.push(...e):n.effects.push(e):du(e)}function Si(e,n,t=ze,s=!1){if(t){const i=t[e]||(t[e]=[]),a=n.__weh||(n.__weh=(...o)=>{at();const r=Ts(t),h=cn(n,t,e,o);return r(),ot(),h});return s?i.unshift(a):i.push(a),a}}const Wn=e=>(n,t=ze)=>{(!Ci||e==="sp")&&Si(e,(...s)=>n(...s),t)},io=Wn("bm"),tn=Wn("m"),Tu=Wn("bu"),ao=Wn("u"),vn=Wn("bum"),Ul=Wn("um"),Su=Wn("sp"),Ou=Wn("rtg"),Cu=Wn("rtc");function Eu(e,n=ze){Si("ec",e,n)}function un(e,n){if(Je===null)return e;const t=Ei(Je),s=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[a,o,r,h=Re]=n[i];a&&(he(a)&&(a={mounted:a,updated:a}),a.deep&&Jn(o),s.push({dir:a,instance:t,value:o,oldValue:void 0,arg:r,modifiers:h}))}return e}function ht(e,n,t,s){const i=e.dirs,a=n&&n.dirs;for(let o=0;o<i.length;o++){const r=i[o];a&&(r.oldValue=a[o].value);let h=r.dir[s];h&&(at(),cn(h,t,8,[e.el,r,e,n]),ot())}}function Bt(e,n,t,s){let i;const a=t;if(re(e)||Fe(e)){i=new Array(e.length);for(let o=0,r=e.length;o<r;o++)i[o]=n(e[o],o,void 0,a)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=n(o+1,o,void 0,a)}else if(xe(e))if(e[Symbol.iterator])i=Array.from(e,(o,r)=>n(o,r,void 0,a));else{const o=Object.keys(e);i=new Array(o.length);for(let r=0,h=o.length;r<h;r++){const l=o[r];i[r]=n(e[l],l,r,a)}}else i=[];return i}/*! #__NO_SIDE_EFFECTS__ */function oo(e,n){return he(e)?De({name:e.name},n,{setup:e}):e}const Us=e=>!!e.type.__asyncLoader,ma=e=>e?up(e)?Ei(e):ma(e.parent):null,ts=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ma(e.parent),$root:e=>ma(e.root),$emit:e=>e.emit,$options:e=>ro(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Ja(e.update)}),$nextTick:e=>e.n||(e.n=He.bind(e.proxy)),$watch:e=>Zu.bind(e)}),Hi=(e,n)=>e!==Re&&!e.__isScriptSetup&&fe(e,n),xu={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:a,accessCache:o,type:r,appContext:h}=e;let l;if(n[0]!=="$"){const u=o[n];if(u!==void 0)switch(u){case 1:return s[n];case 2:return i[n];case 4:return t[n];case 3:return a[n]}else{if(Hi(s,n))return o[n]=1,s[n];if(i!==Re&&fe(i,n))return o[n]=2,i[n];if((l=e.propsOptions[0])&&fe(l,n))return o[n]=3,a[n];if(t!==Re&&fe(t,n))return o[n]=4,t[n];fa&&(o[n]=0)}}const p=ts[n];let c,g;if(p)return n==="$attrs"&&nn(e.attrs,"get",""),p(e);if((c=r.__cssModules)&&(c=c[n]))return c;if(t!==Re&&fe(t,n))return o[n]=4,t[n];if(g=h.config.globalProperties,fe(g,n))return g[n]},set({_:e},n,t){const{data:s,setupState:i,ctx:a}=e;return Hi(i,n)?(i[n]=t,!0):s!==Re&&fe(s,n)?(s[n]=t,!0):fe(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(a[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:i,propsOptions:a}},o){let r;return!!t[o]||e!==Re&&fe(e,o)||Hi(n,o)||(r=a[0])&&fe(r,o)||fe(s,o)||fe(ts,o)||fe(i.config.globalProperties,o)},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:fe(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function cr(e){return re(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let fa=!0;function _u(e){const n=ro(e),t=e.proxy,s=e.ctx;fa=!1,n.beforeCreate&&gr(n.beforeCreate,e,"bc");const{data:i,computed:a,methods:o,watch:r,provide:h,inject:l,created:p,beforeMount:c,mounted:g,beforeUpdate:u,updated:f,activated:d,deactivated:b,beforeDestroy:y,beforeUnmount:P,destroyed:S,unmounted:O,render:E,renderTracked:j,renderTriggered:I,errorCaptured:B,serverPrefetch:_,expose:V,inheritAttrs:D,components:T,directives:R,filters:F}=n;if(l&&Mu(l,s,null),o)for(const K in o){const W=o[K];he(W)&&(s[K]=W.bind(t))}if(i){const K=i.call(t,t);xe(K)&&(e.data=mn(K))}if(fa=!0,a)for(const K in a){const W=a[K],q=he(W)?W.bind(t,t):he(W.get)?W.get.bind(t,t):pn,N=!he(W)&&he(W.set)?W.set.bind(t):pn,U=v({get:q,set:N});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>U.value,set:ie=>U.value=ie})}if(r)for(const K in r)Gl(r[K],s,t,K);if(h){const K=he(h)?h.call(t):h;Reflect.ownKeys(K).forEach(W=>{bn(W,K[W])})}p&&gr(p,e,"c");function J(K,W){re(W)?W.forEach(q=>K(q.bind(t))):W&&K(W.bind(t))}if(J(io,c),J(tn,g),J(Tu,u),J(ao,f),J(Ju,d),J(Qu,b),J(Eu,B),J(Cu,j),J(Ou,I),J(vn,P),J(Ul,O),J(Su,_),re(V))if(V.length){const K=e.exposed||(e.exposed={});V.forEach(W=>{Object.defineProperty(K,W,{get:()=>t[W],set:q=>t[W]=q})})}else e.exposed||(e.exposed={});E&&e.render===pn&&(e.render=E),D!=null&&(e.inheritAttrs=D),T&&(e.components=T),R&&(e.directives=R)}function Mu(e,n,t=pn){re(e)&&(e=ka(e));for(const s in e){const i=e[s];let a;xe(i)?"default"in i?a=Be(i.from||s,i.default,!0):a=Be(i.from||s):a=Be(i),_e(a)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):n[s]=a}}function gr(e,n,t){cn(re(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function Gl(e,n,t,s){const i=s.includes(".")?ip(t,s):()=>t[s];if(Fe(e)){const a=n[e];he(a)&&pe(i,a)}else if(he(e))pe(i,e.bind(t));else if(xe(e))if(re(e))e.forEach(a=>Gl(a,n,t,s));else{const a=he(e.handler)?e.handler.bind(t):n[e.handler];he(a)&&pe(i,a,e)}}function ro(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,r=a.get(n);let h;return r?h=r:!i.length&&!t&&!s?h=n:(h={},i.length&&i.forEach(l=>ii(h,l,o,!0)),ii(h,n,o)),xe(n)&&a.set(n,h),h}function ii(e,n,t,s=!1){const{mixins:i,extends:a}=n;a&&ii(e,a,t,!0),i&&i.forEach(o=>ii(e,o,t,!0));for(const o in n)if(!(s&&o==="expose")){const r=Ru[o]||t&&t[o];e[o]=r?r(e[o],n[o]):n[o]}return e}const Ru={data:ur,props:dr,emits:dr,methods:Qt,computed:Qt,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Qt,directives:Qt,watch:Bu,provide:ur,inject:Nu};function ur(e,n){return n?e?function(){return De(he(e)?e.call(this,this):e,he(n)?n.call(this,this):n)}:n:e}function Nu(e,n){return Qt(ka(e),ka(n))}function ka(e){if(re(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Xe(e,n){return e?[...new Set([].concat(e,n))]:n}function Qt(e,n){return e?De(Object.create(null),e,n):n}function dr(e,n){return e?re(e)&&re(n)?[...new Set([...e,...n])]:De(Object.create(null),cr(e),cr(n??{})):n}function Bu(e,n){if(!e)return n;if(!n)return e;const t=De(Object.create(null),e);for(const s in n)t[s]=Xe(e[s],n[s]);return t}function Yl(){return{app:null,config:{isNativeTag:Sg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lu=0;function Fu(e,n){return function(s,i=null){he(s)||(s=De({},s)),i!=null&&!xe(i)&&(i=null);const a=Yl(),o=new WeakSet;let r=!1;const h=a.app={_uid:Lu++,_component:s,_props:i,_container:null,_context:a,_instance:null,version:yd,get config(){return a.config},set config(l){},use(l,...p){return o.has(l)||(l&&he(l.install)?(o.add(l),l.install(h,...p)):he(l)&&(o.add(l),l(h,...p))),h},mixin(l){return a.mixins.includes(l)||a.mixins.push(l),h},component(l,p){return p?(a.components[l]=p,h):a.components[l]},directive(l,p){return p?(a.directives[l]=p,h):a.directives[l]},mount(l,p,c){if(!r){const g=k(s,i);return g.appContext=a,c===!0?c="svg":c===!1&&(c=void 0),p&&n?n(g,l):e(g,l,c),r=!0,h._container=l,l.__vue_app__=h,Ei(g.component)}},unmount(){r&&(e(null,h._container),delete h._container.__vue_app__)},provide(l,p){return a.provides[l]=p,h},runWithContext(l){const p=Lt;Lt=h;try{return l()}finally{Lt=p}}};return h}}let Lt=null;function bn(e,n){if(ze){let t=ze.provides;const s=ze.parent&&ze.parent.provides;s===t&&(t=ze.provides=Object.create(s)),t[e]=n}}function Be(e,n,t=!1){const s=ze||Je;if(s||Lt){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Lt._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return t&&he(n)?n.call(s&&s.proxy):n}}function Vu(){return!!(ze||Je||Lt)}const ql={},Xl=()=>Object.create(ql),Zl=e=>Object.getPrototypeOf(e)===ql;function Du(e,n,t,s=!1){const i={},a=Xl();e.propsDefaults=Object.create(null),Jl(e,n,i,a);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);t?e.props=s?i:Rl(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Wu(e,n,t,s){const{props:i,attrs:a,vnode:{patchFlag:o}}=e,r=de(i),[h]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const p=e.vnode.dynamicProps;for(let c=0;c<p.length;c++){let g=p[c];if(Ai(e.emitsOptions,g))continue;const u=n[g];if(h)if(fe(a,g))u!==a[g]&&(a[g]=u,l=!0);else{const f=gn(g);i[f]=wa(h,r,f,u,e,!1)}else u!==a[g]&&(a[g]=u,l=!0)}}}else{Jl(e,n,i,a)&&(l=!0);let p;for(const c in r)(!n||!fe(n,c)&&((p=jt(c))===c||!fe(n,p)))&&(h?t&&(t[c]!==void 0||t[p]!==void 0)&&(i[c]=wa(h,r,c,void 0,e,!0)):delete i[c]);if(a!==r)for(const c in a)(!n||!fe(n,c))&&(delete a[c],l=!0)}l&&Bn(e.attrs,"set","")}function Jl(e,n,t,s){const[i,a]=e.propsOptions;let o=!1,r;if(n)for(let h in n){if(ns(h))continue;const l=n[h];let p;i&&fe(i,p=gn(h))?!a||!a.includes(p)?t[p]=l:(r||(r={}))[p]=l:Ai(e.emitsOptions,h)||(!(h in s)||l!==s[h])&&(s[h]=l,o=!0)}if(a){const h=de(t),l=r||Re;for(let p=0;p<a.length;p++){const c=a[p];t[c]=wa(i,h,c,l[c],e,!fe(l,c))}}return o}function wa(e,n,t,s,i,a){const o=e[t];if(o!=null){const r=fe(o,"default");if(r&&s===void 0){const h=o.default;if(o.type!==Function&&!o.skipFactory&&he(h)){const{propsDefaults:l}=i;if(t in l)s=l[t];else{const p=Ts(i);s=l[t]=h.call(null,n),p()}}else s=h}o[0]&&(a&&!r?s=!1:o[1]&&(s===""||s===jt(t))&&(s=!0))}return s}function Ql(e,n,t=!1){const s=n.propsCache,i=s.get(e);if(i)return i;const a=e.props,o={},r=[];let h=!1;if(!he(e)){const p=c=>{h=!0;const[g,u]=Ql(c,n,!0);De(o,g),u&&r.push(...u)};!t&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!a&&!h)return xe(e)&&s.set(e,Mt),Mt;if(re(a))for(let p=0;p<a.length;p++){const c=gn(a[p]);mr(c)&&(o[c]=Re)}else if(a)for(const p in a){const c=gn(p);if(mr(c)){const g=a[p],u=o[c]=re(g)||he(g)?{type:g}:De({},g);if(u){const f=wr(Boolean,u.type),d=wr(String,u.type);u[0]=f>-1,u[1]=d<0||f<d,(f>-1||fe(u,"default"))&&r.push(c)}}}const l=[o,r];return xe(e)&&s.set(e,l),l}function mr(e){return e[0]!=="$"&&!ns(e)}function fr(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function kr(e,n){return fr(e)===fr(n)}function wr(e,n){return re(n)?n.findIndex(t=>kr(t,e)):he(n)&&kr(n,e)?0:-1}const ep=e=>e[0]==="_"||e==="$stable",ho=e=>re(e)?e.map(An):[An(e)],Ku=(e,n,t)=>{if(n._n)return n;const s=ke((...i)=>ho(n(...i)),t);return s._c=!1,s},np=(e,n,t)=>{const s=e._ctx;for(const i in e){if(ep(i))continue;const a=e[i];if(he(a))n[i]=Ku(i,a,s);else if(a!=null){const o=ho(a);n[i]=()=>o}}},tp=(e,n)=>{const t=ho(n);e.slots.default=()=>t},zu=(e,n)=>{const t=e.slots=Xl();if(e.vnode.shapeFlag&32){const s=n._;s?(De(t,n),fl(t,"_",s,!0)):np(n,t)}else n&&tp(e,n)},Hu=(e,n,t)=>{const{vnode:s,slots:i}=e;let a=!0,o=Re;if(s.shapeFlag&32){const r=n._;r?t&&r===1?a=!1:(De(i,n),!t&&r===1&&delete i._):(a=!n.$stable,np(n,i)),o=n}else n&&(tp(e,n),o={default:1});if(a)for(const r in i)!ep(r)&&o[r]==null&&delete i[r]};function ba(e,n,t,s,i=!1){if(re(e)){e.forEach((g,u)=>ba(g,n&&(re(n)?n[u]:n),t,s,i));return}if(Us(s)&&!i)return;const a=s.shapeFlag&4?Ei(s.component):s.el,o=i?null:a,{i:r,r:h}=e,l=n&&n.r,p=r.refs===Re?r.refs={}:r.refs,c=r.setupState;if(l!=null&&l!==h&&(Fe(l)?(p[l]=null,fe(c,l)&&(c[l]=null)):_e(l)&&(l.value=null)),he(h))nt(h,r,12,[o,p]);else{const g=Fe(h),u=_e(h);if(g||u){const f=()=>{if(e.f){const d=g?fe(c,h)?c[h]:p[h]:h.value;i?re(d)&&Wa(d,a):re(d)?d.includes(a)||d.push(a):g?(p[h]=[a],fe(c,h)&&(c[h]=p[h])):(h.value=[a],e.k&&(p[e.k]=h.value))}else g?(p[h]=o,fe(c,h)&&(c[h]=o)):u&&(h.value=o,e.k&&(p[e.k]=o))};o?(f.id=-1,en(f,t)):f()}}}const en=Au;function $u(e){return Uu(e)}function Uu(e,n){const t=kl();t.__VUE__=!0;const{insert:s,remove:i,patchProp:a,createElement:o,createText:r,createComment:h,setText:l,setElementText:p,parentNode:c,nextSibling:g,setScopeId:u=pn,insertStaticContent:f}=e,d=(m,w,A,M=null,x=null,H=null,X=void 0,z=null,$=!!w.dynamicChildren)=>{if(m===w)return;m&&!ut(m,w)&&(M=C(m),ie(m,x,H,!0),m=null),w.patchFlag===-2&&($=!1,w.dynamicChildren=null);const{type:L,ref:ee,shapeFlag:oe}=w;switch(L){case As:b(m,w,A,M);break;case on:y(m,w,A,M);break;case Gs:m==null&&P(w,A,M,X);break;case Se:T(m,w,A,M,x,H,X,z,$);break;default:oe&1?E(m,w,A,M,x,H,X,z,$):oe&6?R(m,w,A,M,x,H,X,z,$):(oe&64||oe&128)&&L.process(m,w,A,M,x,H,X,z,$,se)}ee!=null&&x&&ba(ee,m&&m.ref,H,w||m,!w)},b=(m,w,A,M)=>{if(m==null)s(w.el=r(w.children),A,M);else{const x=w.el=m.el;w.children!==m.children&&l(x,w.children)}},y=(m,w,A,M)=>{m==null?s(w.el=h(w.children||""),A,M):w.el=m.el},P=(m,w,A,M)=>{[m.el,m.anchor]=f(m.children,w,A,M,m.el,m.anchor)},S=({el:m,anchor:w},A,M)=>{let x;for(;m&&m!==w;)x=g(m),s(m,A,M),m=x;s(w,A,M)},O=({el:m,anchor:w})=>{let A;for(;m&&m!==w;)A=g(m),i(m),m=A;i(w)},E=(m,w,A,M,x,H,X,z,$)=>{w.type==="svg"?X="svg":w.type==="math"&&(X="mathml"),m==null?j(w,A,M,x,H,X,z,$):_(m,w,x,H,X,z,$)},j=(m,w,A,M,x,H,X,z)=>{let $,L;const{props:ee,shapeFlag:oe,transition:ae,dirs:le}=m;if($=m.el=o(m.type,H,ee&&ee.is,ee),oe&8?p($,m.children):oe&16&&B(m.children,$,null,M,x,$i(m,H),X,z),le&&ht(m,null,M,"created"),I($,m,m.scopeId,X,M),ee){for(const Me in ee)Me!=="value"&&!ns(Me)&&a($,Me,null,ee[Me],H,m.children,M,x,be);"value"in ee&&a($,"value",null,ee.value,H),(L=ee.onVnodeBeforeMount)&&In(L,M,m)}le&&ht(m,null,M,"beforeMount");const ge=Gu(x,ae);ge&&ae.beforeEnter($),s($,w,A),((L=ee&&ee.onVnodeMounted)||ge||le)&&en(()=>{L&&In(L,M,m),ge&&ae.enter($),le&&ht(m,null,M,"mounted")},x)},I=(m,w,A,M,x)=>{if(A&&u(m,A),M)for(let H=0;H<M.length;H++)u(m,M[H]);if(x){let H=x.subTree;if(w===H){const X=x.vnode;I(m,X,X.scopeId,X.slotScopeIds,x.parent)}}},B=(m,w,A,M,x,H,X,z,$=0)=>{for(let L=$;L<m.length;L++){const ee=m[L]=z?Xn(m[L]):An(m[L]);d(null,ee,w,A,M,x,H,X,z)}},_=(m,w,A,M,x,H,X)=>{const z=w.el=m.el;let{patchFlag:$,dynamicChildren:L,dirs:ee}=w;$|=m.patchFlag&16;const oe=m.props||Re,ae=w.props||Re;let le;if(A&&lt(A,!1),(le=ae.onVnodeBeforeUpdate)&&In(le,A,w,m),ee&&ht(w,m,A,"beforeUpdate"),A&&lt(A,!0),L?V(m.dynamicChildren,L,z,A,M,$i(w,x),H):X||W(m,w,z,null,A,M,$i(w,x),H,!1),$>0){if($&16)D(z,w,oe,ae,A,M,x);else if($&2&&oe.class!==ae.class&&a(z,"class",null,ae.class,x),$&4&&a(z,"style",oe.style,ae.style,x),$&8){const ge=w.dynamicProps;for(let Me=0;Me<ge.length;Me++){const Pe=ge[Me],Ke=oe[Pe],kn=ae[Pe];(kn!==Ke||Pe==="value")&&a(z,Pe,Ke,kn,x,m.children,A,M,be)}}$&1&&m.children!==w.children&&p(z,w.children)}else!X&&L==null&&D(z,w,oe,ae,A,M,x);((le=ae.onVnodeUpdated)||ee)&&en(()=>{le&&In(le,A,w,m),ee&&ht(w,m,A,"updated")},M)},V=(m,w,A,M,x,H,X)=>{for(let z=0;z<w.length;z++){const $=m[z],L=w[z],ee=$.el&&($.type===Se||!ut($,L)||$.shapeFlag&70)?c($.el):A;d($,L,ee,null,M,x,H,X,!0)}},D=(m,w,A,M,x,H,X)=>{if(A!==M){if(A!==Re)for(const z in A)!ns(z)&&!(z in M)&&a(m,z,A[z],null,X,w.children,x,H,be);for(const z in M){if(ns(z))continue;const $=M[z],L=A[z];$!==L&&z!=="value"&&a(m,z,L,$,X,w.children,x,H,be)}"value"in M&&a(m,"value",A.value,M.value,X)}},T=(m,w,A,M,x,H,X,z,$)=>{const L=w.el=m?m.el:r(""),ee=w.anchor=m?m.anchor:r("");let{patchFlag:oe,dynamicChildren:ae,slotScopeIds:le}=w;le&&(z=z?z.concat(le):le),m==null?(s(L,A,M),s(ee,A,M),B(w.children||[],A,ee,x,H,X,z,$)):oe>0&&oe&64&&ae&&m.dynamicChildren?(V(m.dynamicChildren,ae,A,x,H,X,z),(w.key!=null||x&&w===x.subTree)&&lo(m,w,!0)):W(m,w,A,ee,x,H,X,z,$)},R=(m,w,A,M,x,H,X,z,$)=>{w.slotScopeIds=z,m==null?w.shapeFlag&512?x.ctx.activate(w,A,M,X,$):F(w,A,M,x,H,X,$):ne(m,w,$)},F=(m,w,A,M,x,H,X)=>{const z=m.component=ud(m,M,x);if(Oi(m)&&(z.ctx.renderer=se),dd(z),z.asyncDep){if(x&&x.registerDep(z,J,X),!m.el){const $=z.subTree=k(on);y(null,$,w,A)}}else J(z,m,w,A,x,H,X)},ne=(m,w,A)=>{const M=w.component=m.component;if(bu(m,w,A))if(M.asyncDep&&!M.asyncResolved){K(M,w,A);return}else M.next=w,uu(M.update),M.effect.dirty=!0,M.update();else w.el=m.el,M.vnode=w},J=(m,w,A,M,x,H,X)=>{const z=()=>{if(m.isMounted){let{next:ee,bu:oe,u:ae,parent:le,vnode:ge}=m;{const St=sp(m);if(St){ee&&(ee.el=ge.el,K(m,ee,X)),St.asyncDep.then(()=>{m.isUnmounted||z()});return}}let Me=ee,Pe;lt(m,!1),ee?(ee.el=ge.el,K(m,ee,X)):ee=ge,oe&&Hs(oe),(Pe=ee.props&&ee.props.onVnodeBeforeUpdate)&&In(Pe,le,ee,ge),lt(m,!0);const Ke=zi(m),kn=m.subTree;m.subTree=Ke,d(kn,Ke,c(kn.el),C(kn),m,x,H),ee.el=Ke.el,Me===null&&yu(m,Ke.el),ae&&en(ae,x),(Pe=ee.props&&ee.props.onVnodeUpdated)&&en(()=>In(Pe,le,ee,ge),x)}else{let ee;const{el:oe,props:ae}=w,{bm:le,m:ge,parent:Me}=m,Pe=Us(w);if(lt(m,!1),le&&Hs(le),!Pe&&(ee=ae&&ae.onVnodeBeforeMount)&&In(ee,Me,w),lt(m,!0),oe&&Le){const Ke=()=>{m.subTree=zi(m),Le(oe,m.subTree,m,x,null)};Pe?w.type.__asyncLoader().then(()=>!m.isUnmounted&&Ke()):Ke()}else{const Ke=m.subTree=zi(m);d(null,Ke,A,M,m,x,H),w.el=Ke.el}if(ge&&en(ge,x),!Pe&&(ee=ae&&ae.onVnodeMounted)){const Ke=w;en(()=>In(ee,Me,Ke),x)}(w.shapeFlag&256||Me&&Us(Me.vnode)&&Me.vnode.shapeFlag&256)&&m.a&&en(m.a,x),m.isMounted=!0,w=A=M=null}},$=m.effect=new za(z,pn,()=>Ja(L),m.scope),L=m.update=()=>{$.dirty&&$.run()};L.id=m.uid,lt(m,!0),L()},K=(m,w,A)=>{w.component=m;const M=m.vnode.props;m.vnode=w,m.next=null,Wu(m,w.props,M,A),Hu(m,w.children,A),at(),hr(m),ot()},W=(m,w,A,M,x,H,X,z,$=!1)=>{const L=m&&m.children,ee=m?m.shapeFlag:0,oe=w.children,{patchFlag:ae,shapeFlag:le}=w;if(ae>0){if(ae&128){N(L,oe,A,M,x,H,X,z,$);return}else if(ae&256){q(L,oe,A,M,x,H,X,z,$);return}}le&8?(ee&16&&be(L,x,H),oe!==L&&p(A,oe)):ee&16?le&16?N(L,oe,A,M,x,H,X,z,$):be(L,x,H,!0):(ee&8&&p(A,""),le&16&&B(oe,A,M,x,H,X,z,$))},q=(m,w,A,M,x,H,X,z,$)=>{m=m||Mt,w=w||Mt;const L=m.length,ee=w.length,oe=Math.min(L,ee);let ae;for(ae=0;ae<oe;ae++){const le=w[ae]=$?Xn(w[ae]):An(w[ae]);d(m[ae],le,A,null,x,H,X,z,$)}L>ee?be(m,x,H,!0,!1,oe):B(w,A,M,x,H,X,z,$,oe)},N=(m,w,A,M,x,H,X,z,$)=>{let L=0;const ee=w.length;let oe=m.length-1,ae=ee-1;for(;L<=oe&&L<=ae;){const le=m[L],ge=w[L]=$?Xn(w[L]):An(w[L]);if(ut(le,ge))d(le,ge,A,null,x,H,X,z,$);else break;L++}for(;L<=oe&&L<=ae;){const le=m[oe],ge=w[ae]=$?Xn(w[ae]):An(w[ae]);if(ut(le,ge))d(le,ge,A,null,x,H,X,z,$);else break;oe--,ae--}if(L>oe){if(L<=ae){const le=ae+1,ge=le<ee?w[le].el:M;for(;L<=ae;)d(null,w[L]=$?Xn(w[L]):An(w[L]),A,ge,x,H,X,z,$),L++}}else if(L>ae)for(;L<=oe;)ie(m[L],x,H,!0),L++;else{const le=L,ge=L,Me=new Map;for(L=ge;L<=ae;L++){const sn=w[L]=$?Xn(w[L]):An(w[L]);sn.key!=null&&Me.set(sn.key,L)}let Pe,Ke=0;const kn=ae-ge+1;let St=!1,Zo=0;const Yt=new Array(kn);for(L=0;L<kn;L++)Yt[L]=0;for(L=le;L<=oe;L++){const sn=m[L];if(Ke>=kn){ie(sn,x,H,!0);continue}let jn;if(sn.key!=null)jn=Me.get(sn.key);else for(Pe=ge;Pe<=ae;Pe++)if(Yt[Pe-ge]===0&&ut(sn,w[Pe])){jn=Pe;break}jn===void 0?ie(sn,x,H,!0):(Yt[jn-ge]=L+1,jn>=Zo?Zo=jn:St=!0,d(sn,w[jn],A,null,x,H,X,z,$),Ke++)}const Jo=St?Yu(Yt):Mt;for(Pe=Jo.length-1,L=kn-1;L>=0;L--){const sn=ge+L,jn=w[sn],Qo=sn+1<ee?w[sn+1].el:M;Yt[L]===0?d(null,jn,A,Qo,x,H,X,z,$):St&&(Pe<0||L!==Jo[Pe]?U(jn,A,Qo,2):Pe--)}}},U=(m,w,A,M,x=null)=>{const{el:H,type:X,transition:z,children:$,shapeFlag:L}=m;if(L&6){U(m.component.subTree,w,A,M);return}if(L&128){m.suspense.move(w,A,M);return}if(L&64){X.move(m,w,A,se);return}if(X===Se){s(H,w,A);for(let oe=0;oe<$.length;oe++)U($[oe],w,A,M);s(m.anchor,w,A);return}if(X===Gs){S(m,w,A);return}if(M!==2&&L&1&&z)if(M===0)z.beforeEnter(H),s(H,w,A),en(()=>z.enter(H),x);else{const{leave:oe,delayLeave:ae,afterLeave:le}=z,ge=()=>s(H,w,A),Me=()=>{oe(H,()=>{ge(),le&&le()})};ae?ae(H,ge,Me):Me()}else s(H,w,A)},ie=(m,w,A,M=!1,x=!1)=>{const{type:H,props:X,ref:z,children:$,dynamicChildren:L,shapeFlag:ee,patchFlag:oe,dirs:ae,memoIndex:le}=m;if(oe===-2&&(x=!1),z!=null&&ba(z,null,A,m,!0),le!=null&&(w.renderCache[le]=void 0),ee&256){w.ctx.deactivate(m);return}const ge=ee&1&&ae,Me=!Us(m);let Pe;if(Me&&(Pe=X&&X.onVnodeBeforeUnmount)&&In(Pe,w,m),ee&6)me(m.component,A,M);else{if(ee&128){m.suspense.unmount(A,M);return}ge&&ht(m,null,w,"beforeUnmount"),ee&64?m.type.remove(m,w,A,se,M):L&&(H!==Se||oe>0&&oe&64)?be(L,w,A,!1,!0):(H===Se&&oe&384||!x&&ee&16)&&be($,w,A),M&&We(m)}(Me&&(Pe=X&&X.onVnodeUnmounted)||ge)&&en(()=>{Pe&&In(Pe,w,m),ge&&ht(m,null,w,"unmounted")},A)},We=m=>{const{type:w,el:A,anchor:M,transition:x}=m;if(w===Se){$e(A,M);return}if(w===Gs){O(m);return}const H=()=>{i(A),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(m.shapeFlag&1&&x&&!x.persisted){const{leave:X,delayLeave:z}=x,$=()=>X(A,H);z?z(m.el,H,$):$()}else H()},$e=(m,w)=>{let A;for(;m!==w;)A=g(m),i(m),m=A;i(w)},me=(m,w,A)=>{const{bum:M,scope:x,update:H,subTree:X,um:z,m:$,a:L}=m;br($),br(L),M&&Hs(M),x.stop(),H&&(H.active=!1,ie(X,m,w,A)),z&&en(z,w),en(()=>{m.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},be=(m,w,A,M=!1,x=!1,H=0)=>{for(let X=H;X<m.length;X++)ie(m[X],w,A,M,x)},C=m=>m.shapeFlag&6?C(m.component.subTree):m.shapeFlag&128?m.suspense.next():g(m.anchor||m.el);let Q=!1;const Z=(m,w,A)=>{m==null?w._vnode&&ie(w._vnode,null,null,!0):d(w._vnode||null,m,w,null,null,null,A),Q||(Q=!0,hr(),zl(),Q=!1),w._vnode=m},se={p:d,um:ie,m:U,r:We,mt:F,mc:B,pc:W,pbc:V,n:C,o:e};let je,Le;return{render:Z,hydrate:je,createApp:Fu(Z,je)}}function $i({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function lt({effect:e,update:n},t){e.allowRecurse=n.allowRecurse=t}function Gu(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function lo(e,n,t=!1){const s=e.children,i=n.children;if(re(s)&&re(i))for(let a=0;a<s.length;a++){const o=s[a];let r=i[a];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=i[a]=Xn(i[a]),r.el=o.el),!t&&r.patchFlag!==-2&&lo(o,r)),r.type===As&&(r.el=o.el)}}function Yu(e){const n=e.slice(),t=[0];let s,i,a,o,r;const h=e.length;for(s=0;s<h;s++){const l=e[s];if(l!==0){if(i=t[t.length-1],e[i]<l){n[s]=i,t.push(s);continue}for(a=0,o=t.length-1;a<o;)r=a+o>>1,e[t[r]]<l?a=r+1:o=r;l<e[t[a]]&&(a>0&&(n[s]=t[a-1]),t[a]=s)}}for(a=t.length,o=t[a-1];a-- >0;)t[a]=o,o=n[o];return t}function sp(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:sp(n)}function br(e){if(e)for(let n=0;n<e.length;n++)e[n].active=!1}const qu=Symbol.for("v-scx"),Xu=()=>Be(qu);function rt(e,n){return po(e,null,n)}const Bs={};function pe(e,n,t){return po(e,n,t)}function po(e,n,{immediate:t,deep:s,flush:i,once:a,onTrack:o,onTrigger:r}=Re){if(n&&a){const j=n;n=(...I)=>{j(...I),E()}}const h=ze,l=j=>s===!0?j:Jn(j,s===!1?1:void 0);let p,c=!1,g=!1;if(_e(e)?(p=()=>e.value,c=ti(e)):kt(e)?(p=()=>l(e),c=!0):re(e)?(g=!0,c=e.some(j=>kt(j)||ti(j)),p=()=>e.map(j=>{if(_e(j))return j.value;if(kt(j))return l(j);if(he(j))return nt(j,h,2)})):he(e)?n?p=()=>nt(e,h,2):p=()=>(u&&u(),cn(e,h,3,[f])):p=pn,n&&s){const j=p;p=()=>Jn(j())}let u,f=j=>{u=S.onStop=()=>{nt(j,h,4),u=S.onStop=void 0}},d;if(Ci)if(f=pn,n?t&&cn(n,h,3,[p(),g?[]:void 0,f]):p(),i==="sync"){const j=Xu();d=j.__watcherHandles||(j.__watcherHandles=[])}else return pn;let b=g?new Array(e.length).fill(Bs):Bs;const y=()=>{if(!(!S.active||!S.dirty))if(n){const j=S.run();(s||c||(g?j.some((I,B)=>tt(I,b[B])):tt(j,b)))&&(u&&u(),cn(n,h,3,[j,b===Bs?void 0:g&&b[0]===Bs?[]:b,f]),b=j)}else S.run()};y.allowRecurse=!!n;let P;i==="sync"?P=y:i==="post"?P=()=>en(y,h&&h.suspense):(y.pre=!0,h&&(y.id=h.uid),P=()=>Ja(y));const S=new za(p,pn,P),O=Pl(),E=()=>{S.stop(),O&&Wa(O.effects,S)};return n?t?y():b=S.run():i==="post"?en(S.run.bind(S),h&&h.suspense):S.run(),d&&d.push(E),E}function Zu(e,n,t){const s=this.proxy,i=Fe(e)?e.includes(".")?ip(s,e):()=>s[e]:e.bind(s,s);let a;he(n)?a=n:(a=n.handler,t=n);const o=Ts(this),r=po(i,a.bind(s),t);return o(),r}function ip(e,n){const t=n.split(".");return()=>{let s=e;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}function Jn(e,n=1/0,t){if(n<=0||!xe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),n--,_e(e))Jn(e.value,n,t);else if(re(e))for(let s=0;s<e.length;s++)Jn(e[s],n,t);else if(gl(e)||Rt(e))e.forEach(s=>{Jn(s,n,t)});else if(ml(e)){for(const s in e)Jn(e[s],n,t);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Jn(e[s],n,t)}return e}const Oi=e=>e.type.__isKeepAlive;function Ju(e,n){ap(e,"a",n)}function Qu(e,n){ap(e,"da",n)}function ap(e,n,t=ze){const s=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Si(n,s,t),t){let i=t.parent;for(;i&&i.parent;)Oi(i.parent.vnode)&&ed(s,n,t,i),i=i.parent}}function ed(e,n,t,s){const i=Si(n,e,s,!0);Ul(()=>{Wa(s[n],i)},t)}const qn=Symbol("_leaveCb"),Ls=Symbol("_enterCb");function op(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tn(()=>{e.isMounted=!0}),vn(()=>{e.isUnmounting=!0}),e}const ln=[Function,Array],rp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},hp=e=>{const n=e.subTree;return n.component?hp(n.component):n},nd={name:"BaseTransition",props:rp,setup(e,{slots:n}){const t=mo(),s=op();return()=>{const i=n.default&&co(n.default(),!0);if(!i||!i.length)return;let a=i[0];if(i.length>1){for(const g of i)if(g.type!==on){a=g;break}}const o=de(e),{mode:r}=o;if(s.isLeaving)return Ui(a);const h=yr(a);if(!h)return Ui(a);let l=us(h,o,s,t,g=>l=g);Ft(h,l);const p=t.subTree,c=p&&yr(p);if(c&&c.type!==on&&!ut(h,c)&&hp(t).type!==on){const g=us(c,o,s,t);if(Ft(c,g),r==="out-in"&&h.type!==on)return s.isLeaving=!0,g.afterLeave=()=>{s.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Ui(a);r==="in-out"&&h.type!==on&&(g.delayLeave=(u,f,d)=>{const b=lp(s,c);b[String(c.key)]=c,u[qn]=()=>{f(),u[qn]=void 0,delete l.delayedLeave},l.delayedLeave=d})}return a}}},td=nd;function lp(e,n){const{leavingVNodes:t}=e;let s=t.get(n.type);return s||(s=Object.create(null),t.set(n.type,s)),s}function us(e,n,t,s,i){const{appear:a,mode:o,persisted:r=!1,onBeforeEnter:h,onEnter:l,onAfterEnter:p,onEnterCancelled:c,onBeforeLeave:g,onLeave:u,onAfterLeave:f,onLeaveCancelled:d,onBeforeAppear:b,onAppear:y,onAfterAppear:P,onAppearCancelled:S}=n,O=String(e.key),E=lp(t,e),j=(_,V)=>{_&&cn(_,s,9,V)},I=(_,V)=>{const D=V[1];j(_,V),re(_)?_.every(T=>T.length<=1)&&D():_.length<=1&&D()},B={mode:o,persisted:r,beforeEnter(_){let V=h;if(!t.isMounted)if(a)V=b||h;else return;_[qn]&&_[qn](!0);const D=E[O];D&&ut(e,D)&&D.el[qn]&&D.el[qn](),j(V,[_])},enter(_){let V=l,D=p,T=c;if(!t.isMounted)if(a)V=y||l,D=P||p,T=S||c;else return;let R=!1;const F=_[Ls]=ne=>{R||(R=!0,ne?j(T,[_]):j(D,[_]),B.delayedLeave&&B.delayedLeave(),_[Ls]=void 0)};V?I(V,[_,F]):F()},leave(_,V){const D=String(e.key);if(_[Ls]&&_[Ls](!0),t.isUnmounting)return V();j(g,[_]);let T=!1;const R=_[qn]=F=>{T||(T=!0,V(),F?j(d,[_]):j(f,[_]),_[qn]=void 0,E[D]===e&&delete E[D])};E[D]=e,u?I(u,[_,R]):R()},clone(_){const V=us(_,n,t,s,i);return i&&i(V),V}};return B}function Ui(e){if(Oi(e))return e=Fn(e),e.children=null,e}function yr(e){if(!Oi(e))return e;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&he(t.default))return t.default()}}function Ft(e,n){e.shapeFlag&6&&e.component?Ft(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function co(e,n=!1,t){let s=[],i=0;for(let a=0;a<e.length;a++){let o=e[a];const r=t==null?o.key:String(t)+String(o.key!=null?o.key:a);o.type===Se?(o.patchFlag&128&&i++,s=s.concat(co(o.children,n,r))):(n||o.type!==on)&&s.push(r!=null?Fn(o,{key:r}):o)}if(i>1)for(let a=0;a<s.length;a++)s[a].patchFlag=-2;return s}const sd=e=>e.__isTeleport,ss=e=>e&&(e.disabled||e.disabled===""),vr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Pr=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ya=(e,n)=>{const t=e&&e.to;return Fe(t)?n?n(t):null:t},id={name:"Teleport",__isTeleport:!0,process(e,n,t,s,i,a,o,r,h,l){const{mc:p,pc:c,pbc:g,o:{insert:u,querySelector:f,createText:d,createComment:b}}=l,y=ss(n.props);let{shapeFlag:P,children:S,dynamicChildren:O}=n;if(e==null){const E=n.el=d(""),j=n.anchor=d("");u(E,t,s),u(j,t,s);const I=n.target=ya(n.props,f),B=n.targetAnchor=d("");I&&(u(B,I),o==="svg"||vr(I)?o="svg":(o==="mathml"||Pr(I))&&(o="mathml"));const _=(V,D)=>{P&16&&p(S,V,D,i,a,o,r,h)};y?_(t,j):I&&_(I,B)}else{n.el=e.el;const E=n.anchor=e.anchor,j=n.target=e.target,I=n.targetAnchor=e.targetAnchor,B=ss(e.props),_=B?t:j,V=B?E:I;if(o==="svg"||vr(j)?o="svg":(o==="mathml"||Pr(j))&&(o="mathml"),O?(g(e.dynamicChildren,O,_,i,a,o,r),lo(e,n,!0)):h||c(e,n,_,V,i,a,o,r,!1),y)B?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):Fs(n,t,E,l,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const D=n.target=ya(n.props,f);D&&Fs(n,D,null,l,0)}else B&&Fs(n,j,I,l,1)}pp(n)},remove(e,n,t,{um:s,o:{remove:i}},a){const{shapeFlag:o,children:r,anchor:h,targetAnchor:l,target:p,props:c}=e;if(p&&i(l),a&&i(h),o&16){const g=a||!ss(c);for(let u=0;u<r.length;u++){const f=r[u];s(f,n,t,g,!!f.dynamicChildren)}}},move:Fs,hydrate:ad};function Fs(e,n,t,{o:{insert:s},m:i},a=2){a===0&&s(e.targetAnchor,n,t);const{el:o,anchor:r,shapeFlag:h,children:l,props:p}=e,c=a===2;if(c&&s(o,n,t),(!c||ss(p))&&h&16)for(let g=0;g<l.length;g++)i(l[g],n,t,2);c&&s(r,n,t)}function ad(e,n,t,s,i,a,{o:{nextSibling:o,parentNode:r,querySelector:h}},l){const p=n.target=ya(n.props,h);if(p){const c=p._lpa||p.firstChild;if(n.shapeFlag&16)if(ss(n.props))n.anchor=l(o(e),n,r(e),t,s,i,a),n.targetAnchor=c;else{n.anchor=o(e);let g=c;for(;g;)if(g=o(g),g&&g.nodeType===8&&g.data==="teleport anchor"){n.targetAnchor=g,p._lpa=n.targetAnchor&&o(n.targetAnchor);break}l(c,n,p,t,s,i,a)}pp(n)}return n.anchor&&o(n.anchor)}const od=id;function pp(e){const n=e.ctx;if(n&&n.ut){let t=e.children[0].el;for(;t&&t!==e.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",n.uid),t=t.nextSibling;n.ut()}}const Se=Symbol.for("v-fgt"),As=Symbol.for("v-txt"),on=Symbol.for("v-cmt"),Gs=Symbol.for("v-stc"),is=[];let wn=null;function we(e=!1){is.push(wn=e?null:[])}function rd(){is.pop(),wn=is[is.length-1]||null}let ds=1;function jr(e){ds+=e}function cp(e){return e.dynamicChildren=ds>0?wn||Mt:null,rd(),ds>0&&wn&&wn.push(e),e}function Te(e,n,t,s,i,a){return cp(G(e,n,t,s,i,a,!0))}function go(e,n,t,s,i){return cp(k(e,n,t,s,i,!0))}function va(e){return e?e.__v_isVNode===!0:!1}function ut(e,n){return e.type===n.type&&e.key===n.key}const gp=({key:e})=>e??null,Ys=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Fe(e)||_e(e)||he(e)?{i:Je,r:e,k:n,f:!!t}:e:null);function G(e,n=null,t=null,s=0,i=null,a=e===Se?0:1,o=!1,r=!1){const h={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&gp(n),ref:n&&Ys(n),scopeId:Ti,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Je};return r?(uo(h,t),a&128&&e.normalize(h)):t&&(h.shapeFlag|=Fe(t)?8:16),ds>0&&!o&&wn&&(h.patchFlag>0||a&6)&&h.patchFlag!==32&&wn.push(h),h}const k=hd;function hd(e,n=null,t=null,s=0,i=null,a=!1){if((!e||e===Pu)&&(e=on),va(e)){const r=Fn(e,n,!0);return t&&uo(r,t),ds>0&&!a&&wn&&(r.shapeFlag&6?wn[wn.indexOf(e)]=r:wn.push(r)),r.patchFlag=-2,r}if(bd(e)&&(e=e.__vccOpts),n){n=ld(n);let{class:r,style:h}=n;r&&!Fe(r)&&(n.class=st(r)),xe(h)&&(Nl(h)&&!re(h)&&(h=De({},h)),n.style=vi(h))}const o=Fe(e)?1:Iu(e)?128:sd(e)?64:xe(e)?4:he(e)?2:0;return G(e,n,t,s,i,o,a,!0)}function ld(e){return e?Nl(e)||Zl(e)?De({},e):e:null}function Fn(e,n,t=!1,s=!1){const{props:i,ref:a,patchFlag:o,children:r,transition:h}=e,l=n?Ce(i||{},n):i,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&gp(l),ref:n&&n.ref?t&&a?re(a)?a.concat(Ys(n)):[a,Ys(n)]:Ys(n):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Se?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:h,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Fn(e.ssContent),ssFallback:e.ssFallback&&Fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return h&&s&&Ft(p,h.clone(p)),p}function Ne(e=" ",n=0){return k(As,null,e,n)}function pd(e,n){const t=k(Gs,null,e);return t.staticCount=n,t}function Ir(e="",n=!1){return n?(we(),go(on,null,e)):k(on,null,e)}function An(e){return e==null||typeof e=="boolean"?k(on):re(e)?k(Se,null,e.slice()):typeof e=="object"?Xn(e):k(As,null,String(e))}function Xn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Fn(e)}function uo(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(re(n))t=16;else if(typeof n=="object")if(s&65){const i=n.default;i&&(i._c&&(i._d=!1),uo(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!Zl(n)?n._ctx=Je:i===3&&Je&&(Je.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else he(n)?(n={default:n,_ctx:Je},t=32):(n=String(n),s&64?(t=16,n=[Ne(n)]):t=8);e.children=n,e.shapeFlag|=t}function Ce(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const i in s)if(i==="class")n.class!==s.class&&(n.class=st([n.class,s.class]));else if(i==="style")n.style=vi([n.style,s.style]);else if(wi(i)){const a=n[i],o=s[i];o&&a!==o&&!(re(a)&&a.includes(o))&&(n[i]=a?[].concat(a,o):o)}else i!==""&&(n[i]=s[i])}return n}function In(e,n,t,s=null){cn(e,n,7,[t,s])}const cd=Yl();let gd=0;function ud(e,n,t){const s=e.type,i=(n?n.appContext:e.appContext)||cd,a={uid:gd++,vnode:e,type:s,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new vl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ql(s,i),emitsOptions:$l(s,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=n?n.root:a,a.emit=fu.bind(null,a),e.ce&&e.ce(a),a}let ze=null;const mo=()=>ze||Je;let ai,Pa;{const e=kl(),n=(t,s)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(s),a=>{i.length>1?i.forEach(o=>o(a)):i[0](a)}};ai=n("__VUE_INSTANCE_SETTERS__",t=>ze=t),Pa=n("__VUE_SSR_SETTERS__",t=>Ci=t)}const Ts=e=>{const n=ze;return ai(e),e.scope.on(),()=>{e.scope.off(),ai(n)}},Ar=()=>{ze&&ze.scope.off(),ai(null)};function up(e){return e.vnode.shapeFlag&4}let Ci=!1;function dd(e,n=!1){n&&Pa(n);const{props:t,children:s}=e.vnode,i=up(e);Du(e,t,i,n),zu(e,s);const a=i?md(e,n):void 0;return n&&Pa(!1),a}function md(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xu);const{setup:s}=t;if(s){const i=e.setupContext=s.length>1?kd(e):null,a=Ts(e);at();const o=nt(s,e,0,[e.props,i]);if(ot(),a(),ul(o)){if(o.then(Ar,Ar),n)return o.then(r=>{Tr(e,r,n)}).catch(r=>{Ii(r,e,0)});e.asyncDep=o}else Tr(e,o,n)}else dp(e,n)}function Tr(e,n,t){he(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:xe(n)&&(e.setupState=Vl(n)),dp(e,t)}let Sr;function dp(e,n,t){const s=e.type;if(!e.render){if(!n&&Sr&&!s.render){const i=s.template||ro(e).template;if(i){const{isCustomElement:a,compilerOptions:o}=e.appContext.config,{delimiters:r,compilerOptions:h}=s,l=De(De({isCustomElement:a,delimiters:r},o),h);s.render=Sr(i,l)}}e.render=s.render||pn}{const i=Ts(e);at();try{_u(e)}finally{ot(),i()}}}const fd={get(e,n){return nn(e,"get",""),e[n]}};function kd(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,fd),slots:e.slots,emit:e.emit,expose:n}}function Ei(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Vl(qa(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ts)return ts[t](e)},has(n,t){return t in n||t in ts}})):e.proxy}function wd(e,n=!0){return he(e)?e.displayName||e.name:e.name||n&&e.__name}function bd(e){return he(e)&&"__vccOpts"in e}const v=(e,n)=>ou(e,n,Ci);function Cn(e,n,t){const s=arguments.length;return s===2?xe(n)&&!re(n)?va(n)?k(e,null,[n]):k(e,n):k(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&va(t)&&(t=[t]),k(e,n,t))}const yd="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const vd="http://www.w3.org/2000/svg",Pd="http://www.w3.org/1998/Math/MathML",Rn=typeof document<"u"?document:null,Or=Rn&&Rn.createElement("template"),jd={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const i=n==="svg"?Rn.createElementNS(vd,e):n==="mathml"?Rn.createElementNS(Pd,e):t?Rn.createElement(e,{is:t}):Rn.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Rn.createTextNode(e),createComment:e=>Rn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,i,a){const o=t?t.previousSibling:n.lastChild;if(i&&(i===a||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===a||!(i=i.nextSibling)););else{Or.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const r=Or.content;if(s==="svg"||s==="mathml"){const h=r.firstChild;for(;h.firstChild;)r.appendChild(h.firstChild);r.removeChild(h)}n.insertBefore(r,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Hn="transition",qt="animation",Vt=Symbol("_vtc"),Vn=(e,{slots:n})=>Cn(td,fp(e),n);Vn.displayName="Transition";const mp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Id=Vn.props=De({},rp,mp),pt=(e,n=[])=>{re(e)?e.forEach(t=>t(...n)):e&&e(...n)},Cr=e=>e?re(e)?e.some(n=>n.length>1):e.length>1:!1;function fp(e){const n={};for(const T in e)T in mp||(n[T]=e[T]);if(e.css===!1)return n;const{name:t="v",type:s,duration:i,enterFromClass:a=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:r=`${t}-enter-to`,appearFromClass:h=a,appearActiveClass:l=o,appearToClass:p=r,leaveFromClass:c=`${t}-leave-from`,leaveActiveClass:g=`${t}-leave-active`,leaveToClass:u=`${t}-leave-to`}=e,f=Ad(i),d=f&&f[0],b=f&&f[1],{onBeforeEnter:y,onEnter:P,onEnterCancelled:S,onLeave:O,onLeaveCancelled:E,onBeforeAppear:j=y,onAppear:I=P,onAppearCancelled:B=S}=n,_=(T,R,F)=>{Un(T,R?p:r),Un(T,R?l:o),F&&F()},V=(T,R)=>{T._isLeaving=!1,Un(T,c),Un(T,u),Un(T,g),R&&R()},D=T=>(R,F)=>{const ne=T?I:P,J=()=>_(R,T,F);pt(ne,[R,J]),Er(()=>{Un(R,T?h:a),Mn(R,T?p:r),Cr(ne)||xr(R,s,d,J)})};return De(n,{onBeforeEnter(T){pt(y,[T]),Mn(T,a),Mn(T,o)},onBeforeAppear(T){pt(j,[T]),Mn(T,h),Mn(T,l)},onEnter:D(!1),onAppear:D(!0),onLeave(T,R){T._isLeaving=!0;const F=()=>V(T,R);Mn(T,c),Mn(T,g),wp(),Er(()=>{T._isLeaving&&(Un(T,c),Mn(T,u),Cr(O)||xr(T,s,b,F))}),pt(O,[T,F])},onEnterCancelled(T){_(T,!1),pt(S,[T])},onAppearCancelled(T){_(T,!0),pt(B,[T])},onLeaveCancelled(T){V(T),pt(E,[T])}})}function Ad(e){if(e==null)return null;if(xe(e))return[Gi(e.enter),Gi(e.leave)];{const n=Gi(e);return[n,n]}}function Gi(e){return _g(e)}function Mn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Vt]||(e[Vt]=new Set)).add(n)}function Un(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const t=e[Vt];t&&(t.delete(n),t.size||(e[Vt]=void 0))}function Er(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Td=0;function xr(e,n,t,s){const i=e._endId=++Td,a=()=>{i===e._endId&&s()};if(t)return setTimeout(a,t);const{type:o,timeout:r,propCount:h}=kp(e,n);if(!o)return s();const l=o+"end";let p=0;const c=()=>{e.removeEventListener(l,g),a()},g=u=>{u.target===e&&++p>=h&&c()};setTimeout(()=>{p<h&&c()},r+1),e.addEventListener(l,g)}function kp(e,n){const t=window.getComputedStyle(e),s=f=>(t[f]||"").split(", "),i=s(`${Hn}Delay`),a=s(`${Hn}Duration`),o=_r(i,a),r=s(`${qt}Delay`),h=s(`${qt}Duration`),l=_r(r,h);let p=null,c=0,g=0;n===Hn?o>0&&(p=Hn,c=o,g=a.length):n===qt?l>0&&(p=qt,c=l,g=h.length):(c=Math.max(o,l),p=c>0?o>l?Hn:qt:null,g=p?p===Hn?a.length:h.length:0);const u=p===Hn&&/\b(transform|all)(,|$)/.test(s(`${Hn}Property`).toString());return{type:p,timeout:c,propCount:g,hasTransform:u}}function _r(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,s)=>Mr(t)+Mr(e[s])))}function Mr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function wp(){return document.body.offsetHeight}function Sd(e,n,t){const s=e[Vt];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const oi=Symbol("_vod"),bp=Symbol("_vsh"),$t={beforeMount(e,{value:n},{transition:t}){e[oi]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):Xt(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:s}){!n!=!t&&(s?n?(s.beforeEnter(e),Xt(e,!0),s.enter(e)):s.leave(e,()=>{Xt(e,!1)}):Xt(e,n))},beforeUnmount(e,{value:n}){Xt(e,n)}};function Xt(e,n){e.style.display=n?e[oi]:"none",e[bp]=!n}const Od=Symbol(""),Cd=/(^|;)\s*display\s*:/;function Ed(e,n,t){const s=e.style,i=Fe(t);let a=!1;if(t&&!i){if(n)if(Fe(n))for(const o of n.split(";")){const r=o.slice(0,o.indexOf(":")).trim();t[r]==null&&qs(s,r,"")}else for(const o in n)t[o]==null&&qs(s,o,"");for(const o in t)o==="display"&&(a=!0),qs(s,o,t[o])}else if(i){if(n!==t){const o=s[Od];o&&(t+=";"+o),s.cssText=t,a=Cd.test(t)}}else n&&e.removeAttribute("style");oi in e&&(e[oi]=a?s.display:"",e[bp]&&(s.display="none"))}const Rr=/\s*!important$/;function qs(e,n,t){if(re(t))t.forEach(s=>qs(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=xd(e,n);Rr.test(t)?e.setProperty(jt(s),t.replace(Rr,""),"important"):e[s]=t}}const Nr=["Webkit","Moz","ms"],Yi={};function xd(e,n){const t=Yi[n];if(t)return t;let s=gn(n);if(s!=="filter"&&s in e)return Yi[n]=s;s=Dn(s);for(let i=0;i<Nr.length;i++){const a=Nr[i]+s;if(a in e)return Yi[n]=a}return n}const Br="http://www.w3.org/1999/xlink";function Lr(e,n,t,s,i,a=Fg(n)){s&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Br,n.slice(6,n.length)):e.setAttributeNS(Br,n,t):t==null||a&&!wl(t)?e.removeAttribute(n):e.setAttribute(n,a?"":it(t)?String(t):t)}function _d(e,n,t,s,i,a,o){if(n==="innerHTML"||n==="textContent"){s&&o(s,i,a),e[n]=t??"";return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,p=t==null?"":String(t);(l!==p||!("_value"in e))&&(e.value=p),t==null&&e.removeAttribute(n),e._value=t;return}let h=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=wl(t):t==null&&l==="string"?(t="",h=!0):l==="number"&&(t=0,h=!0)}try{e[n]=t}catch{}h&&e.removeAttribute(n)}function xt(e,n,t,s){e.addEventListener(n,t,s)}function Md(e,n,t,s){e.removeEventListener(n,t,s)}const Fr=Symbol("_vei");function Rd(e,n,t,s,i=null){const a=e[Fr]||(e[Fr]={}),o=a[n];if(s&&o)o.value=s;else{const[r,h]=Nd(n);if(s){const l=a[n]=Fd(s,i);xt(e,r,l,h)}else o&&(Md(e,r,o,h),a[n]=void 0)}}const Vr=/(?:Once|Passive|Capture)$/;function Nd(e){let n;if(Vr.test(e)){n={};let s;for(;s=e.match(Vr);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),n]}let qi=0;const Bd=Promise.resolve(),Ld=()=>qi||(Bd.then(()=>qi=0),qi=Date.now());function Fd(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;cn(Vd(s,t.value),n,5,[s])};return t.value=e,t.attached=Ld(),t}function Vd(e,n){if(re(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>i=>!i._stopped&&s&&s(i))}else return n}const Dr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Dd=(e,n,t,s,i,a,o,r,h)=>{const l=i==="svg";n==="class"?Sd(e,s,l):n==="style"?Ed(e,t,s):wi(n)?Da(n)||Rd(e,n,t,s,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Wd(e,n,s,l))?(_d(e,n,s,a,o,r,h),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Lr(e,n,s,l,o,n!=="value")):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),Lr(e,n,s,l))};function Wd(e,n,t,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in e&&Dr(n)&&he(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Dr(n)&&Fe(t)?!1:n in e}const yp=new WeakMap,vp=new WeakMap,ri=Symbol("_moveCb"),Wr=Symbol("_enterCb"),Pp={name:"TransitionGroup",props:De({},Id,{tag:String,moveClass:String}),setup(e,{slots:n}){const t=mo(),s=op();let i,a;return ao(()=>{if(!i.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Ud(i[0].el,t.vnode.el,o))return;i.forEach(zd),i.forEach(Hd);const r=i.filter($d);wp(),r.forEach(h=>{const l=h.el,p=l.style;Mn(l,o),p.transform=p.webkitTransform=p.transitionDuration="";const c=l[ri]=g=>{g&&g.target!==l||(!g||/transform$/.test(g.propertyName))&&(l.removeEventListener("transitionend",c),l[ri]=null,Un(l,o))};l.addEventListener("transitionend",c)})}),()=>{const o=de(e),r=fp(o);let h=o.tag||Se;if(i=[],a)for(let l=0;l<a.length;l++){const p=a[l];p.el&&p.el instanceof Element&&(i.push(p),Ft(p,us(p,r,s,t)),yp.set(p,p.el.getBoundingClientRect()))}a=n.default?co(n.default()):[];for(let l=0;l<a.length;l++){const p=a[l];p.key!=null&&Ft(p,us(p,r,s,t))}return k(h,null,a)}}},Kd=e=>delete e.mode;Pp.props;const fo=Pp;function zd(e){const n=e.el;n[ri]&&n[ri](),n[Wr]&&n[Wr]()}function Hd(e){vp.set(e,e.el.getBoundingClientRect())}function $d(e){const n=yp.get(e),t=vp.get(e),s=n.left-t.left,i=n.top-t.top;if(s||i){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${s}px,${i}px)`,a.transitionDuration="0s",e}}function Ud(e,n,t){const s=e.cloneNode(),i=e[Vt];i&&i.forEach(r=>{r.split(/\s+/).forEach(h=>h&&s.classList.remove(h))}),t.split(/\s+/).forEach(r=>r&&s.classList.add(r)),s.style.display="none";const a=n.nodeType===1?n:n.parentNode;a.appendChild(s);const{hasTransform:o}=kp(s);return a.removeChild(s),o}const Kr=e=>{const n=e.props["onUpdate:modelValue"]||!1;return re(n)?t=>Hs(n,t):n};function Gd(e){e.target.composing=!0}function zr(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Xi=Symbol("_assign"),Yd={created(e,{modifiers:{lazy:n,trim:t,number:s}},i){e[Xi]=Kr(i);const a=s||i.props&&i.props.type==="number";xt(e,n?"change":"input",o=>{if(o.target.composing)return;let r=e.value;t&&(r=r.trim()),a&&(r=pa(r)),e[Xi](r)}),t&&xt(e,"change",()=>{e.value=e.value.trim()}),n||(xt(e,"compositionstart",Gd),xt(e,"compositionend",zr),xt(e,"change",zr))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:s,trim:i,number:a}},o){if(e[Xi]=Kr(o),e.composing)return;const r=(a||e.type==="number")&&!/^0\d/.test(e.value)?pa(e.value):e.value,h=n??"";r!==h&&(document.activeElement===e&&e.type!=="range"&&(s&&n===t||i&&e.value.trim()===h)||(e.value=h))}},qd=["ctrl","shift","alt","meta"],Xd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>qd.some(t=>e[`${t}Key`]&&!n.includes(t))},Hr=(e,n)=>{const t=e._withMods||(e._withMods={}),s=n.join(".");return t[s]||(t[s]=(i,...a)=>{for(let o=0;o<n.length;o++){const r=Xd[n[o]];if(r&&r(i,n))return}return e(i,...a)})},Zd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jp=(e,n)=>{const t=e._withKeys||(e._withKeys={}),s=n.join(".");return t[s]||(t[s]=i=>{if(!("key"in i))return;const a=jt(i.key);if(n.some(o=>o===a||Zd[o]===a))return e(i)})},Jd=De({patchProp:Dd},jd);let $r;function Qd(){return $r||($r=$u(Jd))}const em=(...e)=>{const n=Qd().createApp(...e),{mount:t}=n;return n.mount=s=>{const i=tm(s);if(!i)return;const a=n._component;!he(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,nm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},n};function nm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function tm(e){return Fe(e)?document.querySelector(e):e}function Dt(e,n){let t;function s(){t=Ps(),t.run(()=>n.length?n(()=>{t==null||t.stop(),s()}):n())}pe(e,i=>{i&&!t?s():i||(t==null||t.stop(),t=void 0)},{immediate:!0}),dn(()=>{t==null||t.stop()})}const Ee=typeof window<"u",ko=Ee&&"IntersectionObserver"in window,sm=Ee&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function im(e,n,t){const s=n.length-1;if(s<0)return e===void 0?t:e;for(let i=0;i<s;i++){if(e==null)return t;e=e[n[i]]}return e==null||e[n[s]]===void 0?t:e[n[s]]}function wo(e,n){if(e===n)return!0;if(e instanceof Date&&n instanceof Date&&e.getTime()!==n.getTime()||e!==Object(e)||n!==Object(n))return!1;const t=Object.keys(e);return t.length!==Object.keys(n).length?!1:t.every(s=>wo(e[s],n[s]))}function Ur(e,n,t){return e==null||!n||typeof n!="string"?t:e[n]!==void 0?e[n]:(n=n.replace(/\[(\w+)\]/g,".$1"),n=n.replace(/^\./,""),im(e,n.split("."),t))}function Ip(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(t,s)=>n+s)}function ue(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${n}`:void 0}function hi(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function Ap(e){if(e&&"$el"in e){const n=e.$el;return(n==null?void 0:n.nodeType)===Node.TEXT_NODE?n.nextElementSibling:n}return e}const Gr=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function Tp(e){return Object.keys(e)}function Zi(e,n){return n.every(t=>e.hasOwnProperty(t))}function Sp(e,n){const t={},s=new Set(Object.keys(e));for(const i of n)s.has(i)&&(t[i]=e[i]);return t}function Yr(e,n,t){const s=Object.create(null),i=Object.create(null);for(const a in e)n.some(o=>o instanceof RegExp?o.test(a):o===a)&&!(t!=null&&t.some(o=>o===a))?s[a]=e[a]:i[a]=e[a];return[s,i]}function bo(e,n){const t={...e};return n.forEach(s=>delete t[s]),t}function am(e,n){const t={};return n.forEach(s=>t[s]=e[s]),t}const Op=/^on[^a-z]/,yo=e=>Op.test(e),om=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function rm(e){const[n,t]=Yr(e,[Op]),s=bo(n,om),[i,a]=Yr(t,["class","style","id",/^data-/]);return Object.assign(i,n),Object.assign(a,s),[i,a]}function as(e){return e==null?[]:Array.isArray(e)?e:[e]}function Wt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(n,Math.min(t,e))}function qr(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+t.repeat(Math.max(0,n-e.length))}function Xr(e,n){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,n-e.length))+e}function hm(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const t=[];let s=0;for(;s<e.length;)t.push(e.substr(s,n)),s+=n;return t}function Ge(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;const s={};for(const i in e)s[i]=e[i];for(const i in n){const a=e[i],o=n[i];if(hi(a)&&hi(o)){s[i]=Ge(a,o,t);continue}if(Array.isArray(a)&&Array.isArray(o)&&t){s[i]=t(a,o);continue}s[i]=o}return s}function Cp(e){return e.map(n=>n.type===Se?Cp(n.children):n).flat()}function wt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(wt.cache.has(e))return wt.cache.get(e);const n=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return wt.cache.set(e,n),n}wt.cache=new Map;function es(e,n){if(!n||typeof n!="object")return[];if(Array.isArray(n))return n.map(t=>es(e,t)).flat(1);if(n.suspense)return es(e,n.ssContent);if(Array.isArray(n.children))return n.children.map(t=>es(e,t)).flat(1);if(n.component){if(Object.getOwnPropertySymbols(n.component.provides).includes(e))return[n.component];if(n.component.subTree)return es(e,n.component.subTree).flat(1)}return[]}function vo(e){const n=mn({}),t=v(e);return rt(()=>{for(const s in t.value)n[s]=t.value[s]},{flush:"sync"}),ji(n)}function li(e,n){return e.includes(n)}function Ep(e){return e[2].toLowerCase()+e.slice(3)}const bt=()=>[Function,Array];function Zr(e,n){return n="on"+Dn(n),!!(e[n]||e[`${n}Once`]||e[`${n}Capture`]||e[`${n}OnceCapture`]||e[`${n}CaptureOnce`])}function lm(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),s=1;s<n;s++)t[s-1]=arguments[s];if(Array.isArray(e))for(const i of e)i(...t);else typeof e=="function"&&e(...t)}function xp(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(s=>`${s}${n?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(t)]}function pm(e,n){if(!(Ee&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${n})`)))return null;try{return!!e&&e.matches(n)}catch{return null}}function cm(e,n){if(!Ee||e===0)return n(),()=>{};const t=window.setTimeout(n,e);return()=>window.clearTimeout(t)}function ja(){const e=ye(),n=t=>{e.value=t};return Object.defineProperty(n,"value",{enumerable:!0,get:()=>e.value,set:t=>e.value=t}),Object.defineProperty(n,"el",{enumerable:!0,get:()=>Ap(e.value)}),n}const _p=["top","bottom"],gm=["start","end","left","right"];function Ia(e,n){let[t,s]=e.split(" ");return s||(s=li(_p,t)?"start":li(gm,t)?"top":"center"),{side:Jr(t,n),align:Jr(s,n)}}function Jr(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function Ji(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Qi(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Qr(e){return{side:e.align,align:e.side}}function eh(e){return li(_p,e.side)?"y":"x"}class yt{constructor(n){let{x:t,y:s,width:i,height:a}=n;this.x=t,this.y=s,this.width=i,this.height=a}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function nh(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function Mp(e){return Array.isArray(e)?new yt({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Po(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),s=t.transform;if(s){let i,a,o,r,h;if(s.startsWith("matrix3d("))i=s.slice(9,-1).split(/, /),a=+i[0],o=+i[5],r=+i[12],h=+i[13];else if(s.startsWith("matrix("))i=s.slice(7,-1).split(/, /),a=+i[0],o=+i[3],r=+i[4],h=+i[5];else return new yt(n);const l=t.transformOrigin,p=n.x-r-(1-a)*parseFloat(l),c=n.y-h-(1-o)*parseFloat(l.slice(l.indexOf(" ")+1)),g=a?n.width/a:e.offsetWidth+1,u=o?n.height/o:e.offsetHeight+1;return new yt({x:p,y:c,width:g,height:u})}else return new yt(n)}function dt(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let s;try{s=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof s.finished>"u"&&(s.finished=new Promise(i=>{s.onfinish=()=>{i(s)}})),s}const Xs=new WeakMap;function um(e,n){Object.keys(n).forEach(t=>{if(yo(t)){const s=Ep(t),i=Xs.get(e);if(n[t]==null)i==null||i.forEach(a=>{const[o,r]=a;o===s&&(e.removeEventListener(s,r),i.delete(a))});else if(!i||![...i].some(a=>a[0]===s&&a[1]===n[t])){e.addEventListener(s,n[t]);const a=i||new Set;a.add([s,n[t]]),Xs.has(e)||Xs.set(e,a)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function dm(e,n){Object.keys(n).forEach(t=>{if(yo(t)){const s=Ep(t),i=Xs.get(e);i==null||i.forEach(a=>{const[o,r]=a;o===s&&(e.removeEventListener(s,r),i.delete(a))})}else e.removeAttribute(t)})}const Ot=2.4,th=.2126729,sh=.7151522,ih=.072175,mm=.55,fm=.58,km=.57,wm=.62,Vs=.03,ah=1.45,bm=5e-4,ym=1.25,vm=1.25,oh=.078,rh=12.82051282051282,Ds=.06,hh=.001;function lh(e,n){const t=(e.r/255)**Ot,s=(e.g/255)**Ot,i=(e.b/255)**Ot,a=(n.r/255)**Ot,o=(n.g/255)**Ot,r=(n.b/255)**Ot;let h=t*th+s*sh+i*ih,l=a*th+o*sh+r*ih;if(h<=Vs&&(h+=(Vs-h)**ah),l<=Vs&&(l+=(Vs-l)**ah),Math.abs(l-h)<bm)return 0;let p;if(l>h){const c=(l**mm-h**fm)*ym;p=c<hh?0:c<oh?c-c*rh*Ds:c-Ds}else{const c=(l**wm-h**km)*vm;p=c>-hh?0:c>-oh?c-c*rh*Ds:c+Ds}return p*100}const pi=.20689655172413793,Pm=e=>e>pi**3?Math.cbrt(e):e/(3*pi**2)+4/29,jm=e=>e>pi?e**3:3*pi**2*(e-4/29);function Rp(e){const n=Pm,t=n(e[1]);return[116*t-16,500*(n(e[0]/.95047)-t),200*(t-n(e[2]/1.08883))]}function Np(e){const n=jm,t=(e[0]+16)/116;return[n(t+e[1]/500)*.95047,n(t),n(t-e[2]/200)*1.08883]}const Im=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Am=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Tm=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Sm=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function Bp(e){const n=Array(3),t=Am,s=Im;for(let i=0;i<3;++i)n[i]=Math.round(Wt(t(s[i][0]*e[0]+s[i][1]*e[1]+s[i][2]*e[2]))*255);return{r:n[0],g:n[1],b:n[2]}}function jo(e){let{r:n,g:t,b:s}=e;const i=[0,0,0],a=Sm,o=Tm;n=a(n/255),t=a(t/255),s=a(s/255);for(let r=0;r<3;++r)i[r]=o[r][0]*n+o[r][1]*t+o[r][2]*s;return i}function Aa(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function Om(e){return Aa(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const ph=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,Cm={rgb:(e,n,t,s)=>({r:e,g:n,b:t,a:s}),rgba:(e,n,t,s)=>({r:e,g:n,b:t,a:s}),hsl:(e,n,t,s)=>ch({h:e,s:n,l:t,a:s}),hsla:(e,n,t,s)=>ch({h:e,s:n,l:t,a:s}),hsv:(e,n,t,s)=>ms({h:e,s:n,v:t,a:s}),hsva:(e,n,t,s)=>ms({h:e,s:n,v:t,a:s})};function Sn(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&ph.test(e)){const{groups:n}=e.match(ph),{fn:t,values:s}=n,i=s.split(/,\s*/).map(a=>a.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(t)?parseFloat(a)/100:parseFloat(a));return Cm[t](...i)}else if(typeof e=="string"){let n=e.startsWith("#")?e.slice(1):e;return[3,4].includes(n.length)?n=n.split("").map(t=>t+t).join(""):[6,8].includes(n.length),xm(n)}else if(typeof e=="object"){if(Zi(e,["r","g","b"]))return e;if(Zi(e,["h","s","l"]))return ms(Lp(e));if(Zi(e,["h","s","v"]))return ms(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function ms(e){const{h:n,s:t,v:s,a:i}=e,a=r=>{const h=(r+n/60)%6;return s-s*t*Math.max(Math.min(h,4-h,1),0)},o=[a(5),a(3),a(1)].map(r=>Math.round(r*255));return{r:o[0],g:o[1],b:o[2],a:i}}function ch(e){return ms(Lp(e))}function Lp(e){const{h:n,s:t,l:s,a:i}=e,a=s+t*Math.min(s,1-s),o=a===0?0:2-2*s/a;return{h:n,s:o,v:a,a:i}}function Ws(e){const n=Math.round(e).toString(16);return("00".substr(0,2-n.length)+n).toUpperCase()}function Em(e){let{r:n,g:t,b:s,a:i}=e;return`#${[Ws(n),Ws(t),Ws(s),i!==void 0?Ws(Math.round(i*255)):""].join("")}`}function xm(e){e=_m(e);let[n,t,s,i]=hm(e,2).map(a=>parseInt(a,16));return i=i===void 0?i:i/255,{r:n,g:t,b:s,a:i}}function _m(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(n=>n+n).join("")),e.length!==6&&(e=qr(qr(e,6),8,"F")),e}function Mm(e,n){const t=Rp(jo(e));return t[0]=t[0]+n*10,Bp(Np(t))}function Rm(e,n){const t=Rp(jo(e));return t[0]=t[0]-n*10,Bp(Np(t))}function Nm(e){const n=Sn(e);return jo(n)[1]}function Fp(e){const n=Math.abs(lh(Sn(0),Sn(e)));return Math.abs(lh(Sn(16777215),Sn(e)))>Math.min(n,50)?"#fff":"#000"}function te(e,n){return t=>Object.keys(e).reduce((s,i)=>{const o=typeof e[i]=="object"&&e[i]!=null&&!Array.isArray(e[i])?e[i]:{type:e[i]};return t&&i in t?s[i]={...o,default:t[i]}:s[i]=o,n&&!s[i].source&&(s[i].source=n),s},{})}const Oe=te({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function qe(e,n){const t=mo();if(!t)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return t}function En(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const n=qe(e).type;return wt((n==null?void 0:n.aliasName)||(n==null?void 0:n.name))}let Vp=0,Zs=new WeakMap;function Ut(){const e=qe("getUid");if(Zs.has(e))return Zs.get(e);{const n=Vp++;return Zs.set(e,n),n}}Ut.reset=()=>{Vp=0,Zs=new WeakMap};function Bm(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qe("injectSelf");const{provides:t}=n;if(t&&e in t)return t[e]}const Kt=Symbol.for("vuetify:defaults");function Lm(e){return Y(e)}function Io(){const e=Be(Kt);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function xi(e,n){const t=Io(),s=Y(e),i=v(()=>{if(Ze(n==null?void 0:n.disabled))return t.value;const o=Ze(n==null?void 0:n.scoped),r=Ze(n==null?void 0:n.reset),h=Ze(n==null?void 0:n.root);if(s.value==null&&!(o||r||h))return t.value;let l=Ge(s.value,{prev:t.value});if(o)return l;if(r||h){const p=Number(r||1/0);for(let c=0;c<=p&&!(!l||!("prev"in l));c++)l=l.prev;return l&&typeof h=="string"&&h in l&&(l=Ge(Ge(l,{prev:l}),l[h])),l}return l.prev?Ge(l.prev,l):l});return bn(Kt,i),i}function Fm(e,n){var t,s;return typeof((t=e.props)==null?void 0:t[n])<"u"||typeof((s=e.props)==null?void 0:s[wt(n)])<"u"}function Vm(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Io();const s=qe("useDefaults");if(n=n??s.type.name??s.type.__name,!n)throw new Error("[Vuetify] Could not determine component name");const i=v(()=>{var h;return(h=t.value)==null?void 0:h[e._as??n]}),a=new Proxy(e,{get(h,l){var c,g,u,f,d,b,y;const p=Reflect.get(h,l);return l==="class"||l==="style"?[(c=i.value)==null?void 0:c[l],p].filter(P=>P!=null):typeof l=="string"&&!Fm(s.vnode,l)?((g=i.value)==null?void 0:g[l])!==void 0?(u=i.value)==null?void 0:u[l]:((d=(f=t.value)==null?void 0:f.global)==null?void 0:d[l])!==void 0?(y=(b=t.value)==null?void 0:b.global)==null?void 0:y[l]:p:p}}),o=ye();rt(()=>{if(i.value){const h=Object.entries(i.value).filter(l=>{let[p]=l;return p.startsWith(p[0].toUpperCase())});o.value=h.length?Object.fromEntries(h):void 0}else o.value=void 0});function r(){const h=Bm(Kt,s);bn(Kt,v(()=>o.value?Ge((h==null?void 0:h.value)??{},o.value):h==null?void 0:h.value))}return{props:a,provideSubDefaults:r}}function Ss(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=te(e.props??{},e.name)();const n=Object.keys(e.props).filter(t=>t!=="class"&&t!=="style");e.filterProps=function(s){return Sp(s,n)},e.props._as=String,e.setup=function(s,i){const a=Io();if(!a.value)return e._setup(s,i);const{props:o,provideSubDefaults:r}=Vm(s,s._as??e.name,a),h=e._setup(o,i);return r(),h}}return e}function ce(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n=>(e?Ss:oo)(n)}function Dm(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return ce()({name:t??Dn(gn(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...Oe()},setup(s,i){let{slots:a}=i;return()=>{var o;return Cn(s.tag,{class:[e,s.class],style:s.style},(o=a.default)==null?void 0:o.call(a))}}})}function Dp(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const fs="cubic-bezier(0.4, 0, 0.2, 1)",Wm="cubic-bezier(0.0, 0, 0.2, 1)",Km="cubic-bezier(0.4, 0, 1, 1)";function zm(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Hm(e):Ao(e))return e;e=e.parentElement}return document.scrollingElement}function ci(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Ao(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Ao(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Hm(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function $m(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function ve(e){const n=qe("useRender");n.render=e}function xn(e,n,t){let s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:c=>c,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:c=>c;const a=qe("useProxiedModel"),o=Y(e[n]!==void 0?e[n]:t),r=wt(n),l=v(r!==n?()=>{var c,g,u,f;return e[n],!!(((c=a.vnode.props)!=null&&c.hasOwnProperty(n)||(g=a.vnode.props)!=null&&g.hasOwnProperty(r))&&((u=a.vnode.props)!=null&&u.hasOwnProperty(`onUpdate:${n}`)||(f=a.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${r}`)))}:()=>{var c,g;return e[n],!!((c=a.vnode.props)!=null&&c.hasOwnProperty(n)&&((g=a.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${n}`)))});Dt(()=>!l.value,()=>{pe(()=>e[n],c=>{o.value=c})});const p=v({get(){const c=e[n];return s(l.value?c:o.value)},set(c){const g=i(c),u=de(l.value?e[n]:o.value);u===g||s(u)===c||(o.value=g,a==null||a.emit(`update:${n}`,g))}});return Object.defineProperty(p,"externalValue",{get:()=>l.value?e[n]:o.value}),p}const Um={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},gh="$vuetify.",uh=(e,n)=>e.replace(/\{(\d+)\}/g,(t,s)=>String(n[+s])),Wp=(e,n,t)=>function(s){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];if(!s.startsWith(gh))return uh(s,a);const r=s.replace(gh,""),h=e.value&&t.value[e.value],l=n.value&&t.value[n.value];let p=Ur(h,r,null);return p||(`${s}${e.value}`,p=Ur(l,r,null)),p||(p=s),typeof p!="string"&&(p=s),uh(p,a)};function Kp(e,n){return(t,s)=>new Intl.NumberFormat([e.value,n.value],s).format(t)}function ea(e,n,t){const s=xn(e,n,e[n]??t.value);return s.value=e[n]??t.value,pe(t,i=>{e[n]==null&&(s.value=t.value)}),s}function zp(e){return n=>{const t=ea(n,"locale",e.current),s=ea(n,"fallback",e.fallback),i=ea(n,"messages",e.messages);return{name:"vuetify",current:t,fallback:s,messages:i,t:Wp(t,s,i),n:Kp(t,s),provide:zp({current:t,fallback:s,messages:i})}}}function Gm(e){const n=ye((e==null?void 0:e.locale)??"en"),t=ye((e==null?void 0:e.fallback)??"en"),s=Y({en:Um,...e==null?void 0:e.messages});return{name:"vuetify",current:n,fallback:t,messages:s,t:Wp(n,t,s),n:Kp(n,t),provide:zp({current:n,fallback:t,messages:s})}}const gi=Symbol.for("vuetify:locale");function Ym(e){return e.name!=null}function qm(e){const n=e!=null&&e.adapter&&Ym(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:Gm(e),t=Zm(n,e);return{...n,...t}}function Hp(){const e=Be(gi);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function Xm(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function Zm(e,n){const t=Y((n==null?void 0:n.rtl)??Xm()),s=v(()=>t.value[e.current.value]??!1);return{isRtl:s,rtl:t,rtlClasses:v(()=>`v-locale--is-${s.value?"rtl":"ltr"}`)}}function Kn(){const e=Be(gi);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const _i={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function Jm(e,n,t){const s=[];let i=[];const a=$p(e),o=Up(e),r=t??_i[n.slice(-2).toUpperCase()]??0,h=(a.getDay()-r+7)%7,l=(o.getDay()-r+7)%7;for(let p=0;p<h;p++){const c=new Date(a);c.setDate(c.getDate()-(h-p)),i.push(c)}for(let p=1;p<=o.getDate();p++){const c=new Date(e.getFullYear(),e.getMonth(),p);i.push(c),i.length===7&&(s.push(i),i=[])}for(let p=1;p<7-l;p++){const c=new Date(o);c.setDate(c.getDate()+p),i.push(c)}return i.length>0&&s.push(i),s}function Qm(e,n,t){const s=t??_i[n.slice(-2).toUpperCase()]??0,i=new Date(e);for(;i.getDay()!==s;)i.setDate(i.getDate()-1);return i}function ef(e,n){const t=new Date(e),s=((_i[n.slice(-2).toUpperCase()]??0)+6)%7;for(;t.getDay()!==s;)t.setDate(t.getDate()+1);return t}function $p(e){return new Date(e.getFullYear(),e.getMonth(),1)}function Up(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function nf(e){const n=e.split("-").map(Number);return new Date(n[0],n[1]-1,n[2])}const tf=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function Gp(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){let n;if(tf.test(e))return nf(e);if(n=Date.parse(e),!isNaN(n))return new Date(n)}return null}const dh=new Date(2e3,0,2);function sf(e,n){const t=n??_i[e.slice(-2).toUpperCase()]??0;return Ip(7).map(s=>{const i=new Date(dh);return i.setDate(dh.getDate()+t+s),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(i)})}function af(e,n,t,s){const i=Gp(e)??new Date,a=s==null?void 0:s[n];if(typeof a=="function")return a(i,n,t);let o={};switch(n){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const r=i.getDate(),h=new Intl.DateTimeFormat(t,{month:"long"}).format(i);return`${r} ${h}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(t).format(i.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=a??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(t,o).format(i)}function of(e,n){const t=e.toJsDate(n),s=t.getFullYear(),i=Xr(String(t.getMonth()+1),2,"0"),a=Xr(String(t.getDate()),2,"0");return`${s}-${i}-${a}`}function rf(e){const[n,t,s]=e.split("-").map(Number);return new Date(n,t-1,s)}function hf(e,n){const t=new Date(e);return t.setMinutes(t.getMinutes()+n),t}function lf(e,n){const t=new Date(e);return t.setHours(t.getHours()+n),t}function pf(e,n){const t=new Date(e);return t.setDate(t.getDate()+n),t}function cf(e,n){const t=new Date(e);return t.setDate(t.getDate()+n*7),t}function gf(e,n){const t=new Date(e);return t.setDate(1),t.setMonth(t.getMonth()+n),t}function uf(e){return e.getFullYear()}function df(e){return e.getMonth()}function mf(e){return e.getDate()}function ff(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function kf(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function wf(e){return e.getHours()}function bf(e){return e.getMinutes()}function yf(e){return new Date(e.getFullYear(),0,1)}function vf(e){return new Date(e.getFullYear(),11,31)}function Pf(e,n){return ui(e,n[0])&&Af(e,n[1])}function jf(e){const n=new Date(e);return n instanceof Date&&!isNaN(n.getTime())}function ui(e,n){return e.getTime()>n.getTime()}function If(e,n){return ui(Ta(e),Ta(n))}function Af(e,n){return e.getTime()<n.getTime()}function mh(e,n){return e.getTime()===n.getTime()}function Tf(e,n){return e.getDate()===n.getDate()&&e.getMonth()===n.getMonth()&&e.getFullYear()===n.getFullYear()}function Sf(e,n){return e.getMonth()===n.getMonth()&&e.getFullYear()===n.getFullYear()}function Of(e,n){return e.getFullYear()===n.getFullYear()}function Cf(e,n,t){const s=new Date(e),i=new Date(n);switch(t){case"years":return s.getFullYear()-i.getFullYear();case"quarters":return Math.floor((s.getMonth()-i.getMonth()+(s.getFullYear()-i.getFullYear())*12)/4);case"months":return s.getMonth()-i.getMonth()+(s.getFullYear()-i.getFullYear())*12;case"weeks":return Math.floor((s.getTime()-i.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((s.getTime()-i.getTime())/(1e3*60*60*24));case"hours":return Math.floor((s.getTime()-i.getTime())/(1e3*60*60));case"minutes":return Math.floor((s.getTime()-i.getTime())/(1e3*60));case"seconds":return Math.floor((s.getTime()-i.getTime())/1e3);default:return s.getTime()-i.getTime()}}function Ef(e,n){const t=new Date(e);return t.setHours(n),t}function xf(e,n){const t=new Date(e);return t.setMinutes(n),t}function _f(e,n){const t=new Date(e);return t.setMonth(n),t}function Mf(e,n){const t=new Date(e);return t.setDate(n),t}function Rf(e,n){const t=new Date(e);return t.setFullYear(n),t}function Ta(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}function Nf(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}class Bf{constructor(n){this.locale=n.locale,this.formats=n.formats}date(n){return Gp(n)}toJsDate(n){return n}toISO(n){return of(this,n)}parseISO(n){return rf(n)}addMinutes(n,t){return hf(n,t)}addHours(n,t){return lf(n,t)}addDays(n,t){return pf(n,t)}addWeeks(n,t){return cf(n,t)}addMonths(n,t){return gf(n,t)}getWeekArray(n,t){return Jm(n,this.locale,t?Number(t):void 0)}startOfWeek(n,t){return Qm(n,this.locale,t?Number(t):void 0)}endOfWeek(n){return ef(n,this.locale)}startOfMonth(n){return $p(n)}endOfMonth(n){return Up(n)}format(n,t){return af(n,t,this.locale,this.formats)}isEqual(n,t){return mh(n,t)}isValid(n){return jf(n)}isWithinRange(n,t){return Pf(n,t)}isAfter(n,t){return ui(n,t)}isAfterDay(n,t){return If(n,t)}isBefore(n,t){return!ui(n,t)&&!mh(n,t)}isSameDay(n,t){return Tf(n,t)}isSameMonth(n,t){return Sf(n,t)}isSameYear(n,t){return Of(n,t)}setMinutes(n,t){return xf(n,t)}setHours(n,t){return Ef(n,t)}setMonth(n,t){return _f(n,t)}setDate(n,t){return Mf(n,t)}setYear(n,t){return Rf(n,t)}getDiff(n,t,s){return Cf(n,t,s)}getWeekdays(n){return sf(this.locale,n?Number(n):void 0)}getYear(n){return uf(n)}getMonth(n){return df(n)}getDate(n){return mf(n)}getNextMonth(n){return ff(n)}getPreviousMonth(n){return kf(n)}getHours(n){return wf(n)}getMinutes(n){return bf(n)}startOfDay(n){return Ta(n)}endOfDay(n){return Nf(n)}startOfYear(n){return yf(n)}endOfYear(n){return vf(n)}}const Lf=Symbol.for("vuetify:date-options"),fh=Symbol.for("vuetify:date-adapter");function Ff(e,n){const t=Ge({adapter:Bf,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e);return{options:t,instance:Vf(t,n)}}function Vf(e,n){const t=mn(typeof e.adapter=="function"?new e.adapter({locale:e.locale[n.current.value]??n.current.value,formats:e.formats}):e.adapter);return pe(n.current,s=>{t.locale=e.locale[s]??s??t.locale}),t}const Mi=["sm","md","lg","xl","xxl"],Sa=Symbol.for("vuetify:display"),kh={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Df=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:kh;return Ge(kh,e)};function wh(e){return Ee&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function bh(e){return Ee&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function yh(e){const n=Ee&&!e?window.navigator.userAgent:"ssr";function t(f){return!!n.match(f)}const s=t(/android/i),i=t(/iphone|ipad|ipod/i),a=t(/cordova/i),o=t(/electron/i),r=t(/chrome/i),h=t(/edge/i),l=t(/firefox/i),p=t(/opera/i),c=t(/win/i),g=t(/mac/i),u=t(/linux/i);return{android:s,ios:i,cordova:a,electron:o,chrome:r,edge:h,firefox:l,opera:p,win:c,mac:g,linux:u,touch:sm,ssr:n==="ssr"}}function Wf(e,n){const{thresholds:t,mobileBreakpoint:s}=Df(e),i=ye(bh(n)),a=ye(yh(n)),o=mn({}),r=ye(wh(n));function h(){i.value=bh(),r.value=wh()}function l(){h(),a.value=yh()}return rt(()=>{const p=r.value<t.sm,c=r.value<t.md&&!p,g=r.value<t.lg&&!(c||p),u=r.value<t.xl&&!(g||c||p),f=r.value<t.xxl&&!(u||g||c||p),d=r.value>=t.xxl,b=p?"xs":c?"sm":g?"md":u?"lg":f?"xl":"xxl",y=typeof s=="number"?s:t[s],P=r.value<y;o.xs=p,o.sm=c,o.md=g,o.lg=u,o.xl=f,o.xxl=d,o.smAndUp=!p,o.mdAndUp=!(p||c),o.lgAndUp=!(p||c||g),o.xlAndUp=!(p||c||g||u),o.smAndDown=!(g||u||f||d),o.mdAndDown=!(u||f||d),o.lgAndDown=!(f||d),o.xlAndDown=!d,o.name=b,o.height=i.value,o.width=r.value,o.mobile=P,o.mobileBreakpoint=s,o.platform=a.value,o.thresholds=t}),Ee&&window.addEventListener("resize",h,{passive:!0}),{...ji(o),update:l,ssr:!!n}}const Kf=te({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function Yp(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:En();const t=Be(Sa);if(!t)throw new Error("Could not find Vuetify display injection");const s=v(()=>{if(e.mobile!=null)return e.mobile;if(!e.mobileBreakpoint)return t.mobile.value;const a=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:t.thresholds.value[e.mobileBreakpoint];return t.width.value<a}),i=v(()=>n?{[`${n}--mobile`]:s.value}:{});return{...t,displayClasses:i,mobile:s}}const qp=Symbol.for("vuetify:goto");function Xp(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:-1+(4-2*e)*e,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}}}function zf(e){return To(e)??(document.scrollingElement||document.body)}function To(e){return typeof e=="string"?document.querySelector(e):Ap(e)}function na(e,n,t){if(typeof e=="number")return n&&t?-e:e;let s=To(e),i=0;for(;s;)i+=n?s.offsetLeft:s.offsetTop,s=s.offsetParent;return i}function Hf(e,n){return{rtl:n.isRtl,options:Ge(Xp(),e)}}async function vh(e,n,t,s){const i=t?"scrollLeft":"scrollTop",a=Ge((s==null?void 0:s.options)??Xp(),n),o=s==null?void 0:s.rtl.value,r=(typeof e=="number"?e:To(e))??0,h=a.container==="parent"&&r instanceof HTMLElement?r.parentElement:zf(a.container),l=typeof a.easing=="function"?a.easing:a.patterns[a.easing];if(!l)throw new TypeError(`Easing function "${a.easing}" not found.`);let p;if(typeof r=="number")p=na(r,t,o);else if(p=na(r,t,o)-na(h,t,o),a.layout){const f=window.getComputedStyle(r).getPropertyValue("--v-layout-top");f&&(p-=parseInt(f,10))}p+=a.offset,p=Uf(h,p,!!o,!!t);const c=h[i]??0;if(p===c)return Promise.resolve(p);const g=performance.now();return new Promise(u=>requestAnimationFrame(function f(d){const y=(d-g)/a.duration,P=Math.floor(c+(p-c)*l(Wt(y,0,1)));if(h[i]=P,y>=1&&Math.abs(P-h[i])<10)return u(p);if(y>2)return u(h[i]);requestAnimationFrame(f)}))}function $f(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=Be(qp),{isRtl:t}=Kn();if(!n)throw new Error("[Vuetify] Could not find injected goto instance");const s={...n,rtl:v(()=>n.rtl.value||t.value)};async function i(a,o){return vh(a,Ge(e,o),!1,s)}return i.horizontal=async(a,o)=>vh(a,Ge(e,o),!0,s),i}function Uf(e,n,t,s){const{scrollWidth:i,scrollHeight:a}=e,[o,r]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight];let h,l;return s?t?(h=-(i-o),l=0):(h=0,l=i-o):(h=0,l=a+-r),Math.max(Math.min(n,l),h)}const Gf={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},Yf={component:e=>Cn(Jp,{...e,class:"mdi"})},Ye=[String,Function,Object,Array],Oa=Symbol.for("vuetify:icons"),Ri=te({icon:{type:Ye},tag:{type:String,required:!0}},"icon"),Ph=ce()({name:"VComponentIcon",props:Ri(),setup(e,n){let{slots:t}=n;return()=>{const s=e.icon;return k(e.tag,null,{default:()=>{var i;return[e.icon?k(s,null,null):(i=t.default)==null?void 0:i.call(t)]}})}}}),Zp=Ss({name:"VSvgIcon",inheritAttrs:!1,props:Ri(),setup(e,n){let{attrs:t}=n;return()=>k(e.tag,Ce(t,{style:null}),{default:()=>[k("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(s=>Array.isArray(s)?k("path",{d:s[0],"fill-opacity":s[1]},null):k("path",{d:s},null)):k("path",{d:e.icon},null)])]})}});Ss({name:"VLigatureIcon",props:Ri(),setup(e){return()=>k(e.tag,null,{default:()=>[e.icon]})}});const Jp=Ss({name:"VClassIcon",props:Ri(),setup(e){return()=>k(e.tag,{class:e.icon},null)}});function qf(){return{svg:{component:Zp},class:{component:Jp}}}function Xf(e){const n=qf(),t=(e==null?void 0:e.defaultSet)??"mdi";return t==="mdi"&&!n.mdi&&(n.mdi=Yf),Ge({defaultSet:t,sets:n,aliases:{...Gf,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const Zf=e=>{const n=Be(Oa);if(!n)throw new Error("Missing Vuetify Icons provide!");return{iconData:v(()=>{var h;const s=Ze(e);if(!s)return{component:Ph};let i=s;if(typeof i=="string"&&(i=i.trim(),i.startsWith("$")&&(i=(h=n.aliases)==null?void 0:h[i.slice(1)])),Array.isArray(i))return{component:Zp,icon:i};if(typeof i!="string")return{component:Ph,icon:i};const a=Object.keys(n.sets).find(l=>typeof i=="string"&&i.startsWith(`${l}:`)),o=a?i.slice(a.length+1):i;return{component:n.sets[a??n.defaultSet].component,icon:o}})}},di=Symbol.for("vuetify:theme"),fn=te({theme:String},"theme");function jh(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function Jf(){var s,i;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jh();const n=jh();if(!e)return{...n,isDisabled:!0};const t={};for(const[a,o]of Object.entries(e.themes??{})){const r=o.dark||a==="dark"?(s=n.themes)==null?void 0:s.dark:(i=n.themes)==null?void 0:i.light;t[a]=Ge(r,o)}return Ge(n,{...e,themes:t})}function Qf(e){const n=Jf(e),t=Y(n.defaultTheme),s=Y(n.themes),i=v(()=>{const p={};for(const[c,g]of Object.entries(s.value)){const u=p[c]={...g,colors:{...g.colors}};if(n.variations)for(const f of n.variations.colors){const d=u.colors[f];if(d)for(const b of["lighten","darken"]){const y=b==="lighten"?Mm:Rm;for(const P of Ip(n.variations[b],1))u.colors[`${f}-${b}-${P}`]=Em(y(Sn(d),P))}}for(const f of Object.keys(u.colors)){if(/^on-[a-z]/.test(f)||u.colors[`on-${f}`])continue;const d=`on-${f}`,b=Sn(u.colors[f]);u.colors[d]=Fp(b)}}return p}),a=v(()=>i.value[t.value]),o=v(()=>{var f;const p=[];(f=a.value)!=null&&f.dark&&ct(p,":root",["color-scheme: dark"]),ct(p,":root",Ih(a.value));for(const[d,b]of Object.entries(i.value))ct(p,`.v-theme--${d}`,[`color-scheme: ${b.dark?"dark":"normal"}`,...Ih(b)]);const c=[],g=[],u=new Set(Object.values(i.value).flatMap(d=>Object.keys(d.colors)));for(const d of u)/^on-[a-z]/.test(d)?ct(g,`.${d}`,[`color: rgb(var(--v-theme-${d})) !important`]):(ct(c,`.bg-${d}`,[`--v-theme-overlay-multiplier: var(--v-theme-${d}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${d})) !important`,`color: rgb(var(--v-theme-on-${d})) !important`]),ct(g,`.text-${d}`,[`color: rgb(var(--v-theme-${d})) !important`]),ct(g,`.border-${d}`,[`--v-border-color: var(--v-theme-${d})`]));return p.push(...c,...g),p.map((d,b)=>b===0?d:`    ${d}`).join("")});function r(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:n.cspNonce||!1}]}}function h(p){if(n.isDisabled)return;const c=p._context.provides.usehead;if(c)if(c.push){const u=c.push(r);Ee&&pe(o,()=>{u.patch(r)})}else Ee?(c.addHeadObjs(v(r)),rt(()=>c.updateDOM())):c.addHeadObjs(r());else{let f=function(){if(typeof document<"u"&&!u){const d=document.createElement("style");d.type="text/css",d.id="vuetify-theme-stylesheet",n.cspNonce&&d.setAttribute("nonce",n.cspNonce),u=d,document.head.appendChild(u)}u&&(u.innerHTML=o.value)};var g=f;let u=Ee?document.getElementById("vuetify-theme-stylesheet"):null;Ee?pe(o,f,{immediate:!0}):f()}}const l=v(()=>n.isDisabled?void 0:`v-theme--${t.value}`);return{install:h,isDisabled:n.isDisabled,name:t,themes:s,current:a,computedThemes:i,themeClasses:l,styles:o,global:{name:t,current:a}}}function Pn(e){qe("provideTheme");const n=Be(di,null);if(!n)throw new Error("Could not find Vuetify theme injection");const t=v(()=>e.theme??n.name.value),s=v(()=>n.themes.value[t.value]),i=v(()=>n.isDisabled?void 0:`v-theme--${t.value}`),a={...n,name:t,current:s,themeClasses:i};return bn(di,a),a}function ct(e,n,t){e.push(`${n} {
`,...t.map(s=>`  ${s};
`),`}
`)}function Ih(e){const n=e.dark?2:1,t=e.dark?1:2,s=[];for(const[i,a]of Object.entries(e.colors)){const o=Sn(a);s.push(`--v-theme-${i}: ${o.r},${o.g},${o.b}`),i.startsWith("on-")||s.push(`--v-theme-${i}-overlay-multiplier: ${Nm(a)>.18?n:t}`)}for(const[i,a]of Object.entries(e.variables)){const o=typeof a=="string"&&a.startsWith("#")?Sn(a):void 0,r=o?`${o.r}, ${o.g}, ${o.b}`:void 0;s.push(`--v-${i}: ${r??a}`)}return s}function Ca(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const t=ja(),s=Y();if(Ee){const i=new ResizeObserver(a=>{a.length&&(n==="content"?s.value=a[0].contentRect:s.value=a[0].target.getBoundingClientRect())});vn(()=>{i.disconnect()}),pe(()=>t.el,(a,o)=>{o&&(i.unobserve(o),s.value=void 0),a&&i.observe(a)},{flush:"post"})}return{resizeRef:t,contentRect:js(s)}}function Qp(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:n,...t}=e,s=Ge(n,t),{aliases:i={},components:a={},directives:o={}}=s,r=Lm(s.defaults),h=Wf(s.display,s.ssr),l=Qf(s.theme),p=Xf(s.icons),c=qm(s.locale),g=Ff(s.date,c),u=Hf(s.goTo,c);return{install:d=>{for(const b in o)d.directive(b,o[b]);for(const b in a)d.component(b,a[b]);for(const b in i)d.component(b,Ss({...i[b],name:b,aliasName:i[b].name}));if(l.install(d),d.provide(Kt,r),d.provide(Sa,h),d.provide(di,l),d.provide(Oa,p),d.provide(gi,c),d.provide(Lf,g.options),d.provide(fh,g.instance),d.provide(qp,u),Ee&&s.ssr)if(d.$nuxt)d.$nuxt.hook("app:suspense:resolve",()=>{h.update()});else{const{mount:b}=d;d.mount=function(){const y=b(...arguments);return He(()=>h.update()),d.mount=b,y}}Ut.reset(),d.mixin({computed:{$vuetify(){return mn({defaults:Ct.call(this,Kt),display:Ct.call(this,Sa),theme:Ct.call(this,di),icons:Ct.call(this,Oa),locale:Ct.call(this,gi),date:Ct.call(this,fh)})}}})},defaults:r,display:h,theme:l,icons:p,locale:c,date:g,goTo:u}}const ek="3.6.13";Qp.version=ek;function Ct(e){var s,i;const n=this.$,t=((s=n.parent)==null?void 0:s.provides)??((i=n.vnode.appContext)==null?void 0:i.provides);if(t&&e in t)return t[e]}const nk=Qp({theme:{defaultTheme:"light"}});var tk=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ec;const Ni=e=>ec=e,nc=Symbol();function Ea(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var os;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(os||(os={}));function sk(){const e=Ps(!0),n=e.run(()=>Y({}));let t=[],s=[];const i=qa({install(a){Ni(i),i._a=a,a.provide(nc,i),a.config.globalProperties.$pinia=i,s.forEach(o=>t.push(o)),s=[]},use(a){return!this._a&&!tk?s.push(a):t.push(a),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return i}const tc=()=>{};function Ah(e,n,t,s=tc){e.push(n);const i=()=>{const a=e.indexOf(n);a>-1&&(e.splice(a,1),s())};return!t&&Pl()&&dn(i),i}function Et(e,...n){e.slice().forEach(t=>{t(...n)})}const ik=e=>e();function xa(e,n){e instanceof Map&&n instanceof Map&&n.forEach((t,s)=>e.set(s,t)),e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const s=n[t],i=e[t];Ea(i)&&Ea(s)&&e.hasOwnProperty(t)&&!_e(s)&&!kt(s)?e[t]=xa(i,s):e[t]=s}return e}const ak=Symbol();function ok(e){return!Ea(e)||!e.hasOwnProperty(ak)}const{assign:Gn}=Object;function rk(e){return!!(_e(e)&&e.effect)}function hk(e,n,t,s){const{state:i,actions:a,getters:o}=n,r=t.state.value[e];let h;function l(){r||(t.state.value[e]=i?i():{});const p=ji(t.state.value[e]);return Gn(p,a,Object.keys(o||{}).reduce((c,g)=>(c[g]=qa(v(()=>{Ni(t);const u=t._s.get(e);return o[g].call(u,u)})),c),{}))}return h=sc(e,l,n,t,s,!0),h}function sc(e,n,t={},s,i,a){let o;const r=Gn({actions:{}},t),h={deep:!0};let l,p,c=[],g=[],u;const f=s.state.value[e];!a&&!f&&(s.state.value[e]={}),Y({});let d;function b(B){let _;l=p=!1,typeof B=="function"?(B(s.state.value[e]),_={type:os.patchFunction,storeId:e,events:u}):(xa(s.state.value[e],B),_={type:os.patchObject,payload:B,storeId:e,events:u});const V=d=Symbol();He().then(()=>{d===V&&(l=!0)}),p=!0,Et(c,_,s.state.value[e])}const y=a?function(){const{state:_}=t,V=_?_():{};this.$patch(D=>{Gn(D,V)})}:tc;function P(){o.stop(),c=[],g=[],s._s.delete(e)}function S(B,_){return function(){Ni(s);const V=Array.from(arguments),D=[],T=[];function R(J){D.push(J)}function F(J){T.push(J)}Et(g,{args:V,name:B,store:E,after:R,onError:F});let ne;try{ne=_.apply(this&&this.$id===e?this:E,V)}catch(J){throw Et(T,J),J}return ne instanceof Promise?ne.then(J=>(Et(D,J),J)).catch(J=>(Et(T,J),Promise.reject(J))):(Et(D,ne),ne)}}const O={_p:s,$id:e,$onAction:Ah.bind(null,g),$patch:b,$reset:y,$subscribe(B,_={}){const V=Ah(c,B,_.detached,()=>D()),D=o.run(()=>pe(()=>s.state.value[e],T=>{(_.flush==="sync"?p:l)&&B({storeId:e,type:os.direct,events:u},T)},Gn({},h,_)));return V},$dispose:P},E=mn(O);s._s.set(e,E);const I=(s._a&&s._a.runWithContext||ik)(()=>s._e.run(()=>(o=Ps()).run(n)));for(const B in I){const _=I[B];if(_e(_)&&!rk(_)||kt(_))a||(f&&ok(_)&&(_e(_)?_.value=f[B]:xa(_,f[B])),s.state.value[e][B]=_);else if(typeof _=="function"){const V=S(B,_);I[B]=V,r.actions[B]=_}}return Gn(E,I),Gn(de(E),I),Object.defineProperty(E,"$state",{get:()=>s.state.value[e],set:B=>{b(_=>{Gn(_,B)})}}),s._p.forEach(B=>{Gn(E,o.run(()=>B({store:E,app:s._a,pinia:s,options:r})))}),f&&a&&t.hydrate&&t.hydrate(E.$state,f),l=!0,p=!0,E}function lk(e,n,t){let s,i;const a=typeof n=="function";s=e,i=a?t:n;function o(r,h){const l=Vu();return r=r||(l?Be(nc,null):null),r&&Ni(r),r=ec,r._s.has(s)||(a?sc(s,n,i,r):hk(s,i,r)),r._s.get(s)}return o.$id=s,o}const pk=sk();/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const _t=typeof document<"u";function ck(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Ie=Object.assign;function ta(e,n){const t={};for(const s in n){const i=n[s];t[s]=yn(i)?i.map(e):e(i)}return t}const rs=()=>{},yn=Array.isArray,ic=/#/g,gk=/&/g,uk=/\//g,dk=/=/g,mk=/\?/g,ac=/\+/g,fk=/%5B/g,kk=/%5D/g,oc=/%5E/g,wk=/%60/g,rc=/%7B/g,bk=/%7C/g,hc=/%7D/g,yk=/%20/g;function So(e){return encodeURI(""+e).replace(bk,"|").replace(fk,"[").replace(kk,"]")}function vk(e){return So(e).replace(rc,"{").replace(hc,"}").replace(oc,"^")}function _a(e){return So(e).replace(ac,"%2B").replace(yk,"+").replace(ic,"%23").replace(gk,"%26").replace(wk,"`").replace(rc,"{").replace(hc,"}").replace(oc,"^")}function Pk(e){return _a(e).replace(dk,"%3D")}function jk(e){return So(e).replace(ic,"%23").replace(mk,"%3F")}function Ik(e){return e==null?"":jk(e).replace(uk,"%2F")}function ks(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Ak=/\/$/,Tk=e=>e.replace(Ak,"");function sa(e,n,t="/"){let s,i={},a="",o="";const r=n.indexOf("#");let h=n.indexOf("?");return r<h&&r>=0&&(h=-1),h>-1&&(s=n.slice(0,h),a=n.slice(h+1,r>-1?r:n.length),i=e(a)),r>-1&&(s=s||n.slice(0,r),o=n.slice(r,n.length)),s=Ek(s??n,t),{fullPath:s+(a&&"?")+a+o,path:s,query:i,hash:ks(o)}}function Sk(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function Th(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function Ok(e,n,t){const s=n.matched.length-1,i=t.matched.length-1;return s>-1&&s===i&&zt(n.matched[s],t.matched[i])&&lc(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function zt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function lc(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(!Ck(e[t],n[t]))return!1;return!0}function Ck(e,n){return yn(e)?Sh(e,n):yn(n)?Sh(n,e):e===n}function Sh(e,n){return yn(n)?e.length===n.length&&e.every((t,s)=>t===n[s]):e.length===1&&e[0]===n}function Ek(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let a=t.length-1,o,r;for(o=0;o<s.length;o++)if(r=s[o],r!==".")if(r==="..")a>1&&a--;else break;return t.slice(0,a).join("/")+"/"+s.slice(o).join("/")}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ws;(function(e){e.pop="pop",e.push="push"})(ws||(ws={}));var hs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(hs||(hs={}));function xk(e){if(!e)if(_t){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Tk(e)}const _k=/^[^#]+#/;function Mk(e,n){return e.replace(_k,"#")+n}function Rk(e,n){const t=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:n.behavior,left:s.left-t.left-(n.left||0),top:s.top-t.top-(n.top||0)}}const Bi=()=>({left:window.scrollX,top:window.scrollY});function Nk(e){let n;if("el"in e){const t=e.el,s=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?s?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;n=Rk(i,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Oh(e,n){return(history.state?history.state.position-n:-1)+e}const Ma=new Map;function Bk(e,n){Ma.set(e,n)}function Lk(e){const n=Ma.get(e);return Ma.delete(e),n}let Fk=()=>location.protocol+"//"+location.host;function pc(e,n){const{pathname:t,search:s,hash:i}=n,a=e.indexOf("#");if(a>-1){let r=i.includes(e.slice(a))?e.slice(a).length:1,h=i.slice(r);return h[0]!=="/"&&(h="/"+h),Th(h,"")}return Th(t,e)+s+i}function Vk(e,n,t,s){let i=[],a=[],o=null;const r=({state:g})=>{const u=pc(e,location),f=t.value,d=n.value;let b=0;if(g){if(t.value=u,n.value=g,o&&o===f){o=null;return}b=d?g.position-d.position:0}else s(u);i.forEach(y=>{y(t.value,f,{delta:b,type:ws.pop,direction:b?b>0?hs.forward:hs.back:hs.unknown})})};function h(){o=t.value}function l(g){i.push(g);const u=()=>{const f=i.indexOf(g);f>-1&&i.splice(f,1)};return a.push(u),u}function p(){const{history:g}=window;g.state&&g.replaceState(Ie({},g.state,{scroll:Bi()}),"")}function c(){for(const g of a)g();a=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:h,listen:l,destroy:c}}function Ch(e,n,t,s=!1,i=!1){return{back:e,current:n,forward:t,replaced:s,position:window.history.length,scroll:i?Bi():null}}function Dk(e){const{history:n,location:t}=window,s={value:pc(e,t)},i={value:n.state};i.value||a(s.value,{back:null,current:s.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function a(h,l,p){const c=e.indexOf("#"),g=c>-1?(t.host&&document.querySelector("base")?e:e.slice(c))+h:Fk()+e+h;try{n[p?"replaceState":"pushState"](l,"",g),i.value=l}catch(u){console.error(u),t[p?"replace":"assign"](g)}}function o(h,l){const p=Ie({},n.state,Ch(i.value.back,h,i.value.forward,!0),l,{position:i.value.position});a(h,p,!0),s.value=h}function r(h,l){const p=Ie({},i.value,n.state,{forward:h,scroll:Bi()});a(p.current,p,!0);const c=Ie({},Ch(s.value,h,null),{position:p.position+1},l);a(h,c,!1),s.value=h}return{location:s,state:i,push:r,replace:o}}function Wk(e){e=xk(e);const n=Dk(e),t=Vk(e,n.state,n.location,n.replace);function s(a,o=!0){o||t.pauseListeners(),history.go(a)}const i=Ie({location:"",base:e,go:s,createHref:Mk.bind(null,e)},n,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function Kk(e){return typeof e=="string"||e&&typeof e=="object"}function cc(e){return typeof e=="string"||typeof e=="symbol"}const gc=Symbol("");var Eh;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Eh||(Eh={}));function Ht(e,n){return Ie(new Error,{type:e,[gc]:!0},n)}function _n(e,n){return e instanceof Error&&gc in e&&(n==null||!!(e.type&n))}const xh="[^/]+?",zk={sensitive:!1,strict:!1,start:!0,end:!0},Hk=/[.+*?^${}()[\]/\\]/g;function $k(e,n){const t=Ie({},zk,n),s=[];let i=t.start?"^":"";const a=[];for(const l of e){const p=l.length?[]:[90];t.strict&&!l.length&&(i+="/");for(let c=0;c<l.length;c++){const g=l[c];let u=40+(t.sensitive?.25:0);if(g.type===0)c||(i+="/"),i+=g.value.replace(Hk,"\\$&"),u+=40;else if(g.type===1){const{value:f,repeatable:d,optional:b,regexp:y}=g;a.push({name:f,repeatable:d,optional:b});const P=y||xh;if(P!==xh){u+=10;try{new RegExp(`(${P})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${f}" (${P}): `+O.message)}}let S=d?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;c||(S=b&&l.length<2?`(?:/${S})`:"/"+S),b&&(S+="?"),i+=S,u+=20,b&&(u+=-8),d&&(u+=-20),P===".*"&&(u+=-50)}p.push(u)}s.push(p)}if(t.strict&&t.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function r(l){const p=l.match(o),c={};if(!p)return null;for(let g=1;g<p.length;g++){const u=p[g]||"",f=a[g-1];c[f.name]=u&&f.repeatable?u.split("/"):u}return c}function h(l){let p="",c=!1;for(const g of e){(!c||!p.endsWith("/"))&&(p+="/"),c=!1;for(const u of g)if(u.type===0)p+=u.value;else if(u.type===1){const{value:f,repeatable:d,optional:b}=u,y=f in l?l[f]:"";if(yn(y)&&!d)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const P=yn(y)?y.join("/"):y;if(!P)if(b)g.length<2&&(p.endsWith("/")?p=p.slice(0,-1):c=!0);else throw new Error(`Missing required param "${f}"`);p+=P}}return p||"/"}return{re:o,score:s,keys:a,parse:r,stringify:h}}function Uk(e,n){let t=0;for(;t<e.length&&t<n.length;){const s=n[t]-e[t];if(s)return s;t++}return e.length<n.length?e.length===1&&e[0]===80?-1:1:e.length>n.length?n.length===1&&n[0]===80?1:-1:0}function uc(e,n){let t=0;const s=e.score,i=n.score;for(;t<s.length&&t<i.length;){const a=Uk(s[t],i[t]);if(a)return a;t++}if(Math.abs(i.length-s.length)===1){if(_h(s))return 1;if(_h(i))return-1}return i.length-s.length}function _h(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const Gk={type:0,value:""},Yk=/[a-zA-Z0-9_]/;function qk(e){if(!e)return[[]];if(e==="/")return[[Gk]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(u){throw new Error(`ERR (${t})/"${l}": ${u}`)}let t=0,s=t;const i=[];let a;function o(){a&&i.push(a),a=[]}let r=0,h,l="",p="";function c(){l&&(t===0?a.push({type:0,value:l}):t===1||t===2||t===3?(a.length>1&&(h==="*"||h==="+")&&n(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:p,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):n("Invalid state to consume buffer"),l="")}function g(){l+=h}for(;r<e.length;){if(h=e[r++],h==="\\"&&t!==2){s=t,t=4;continue}switch(t){case 0:h==="/"?(l&&c(),o()):h===":"?(c(),t=1):g();break;case 4:g(),t=s;break;case 1:h==="("?t=2:Yk.test(h)?g():(c(),t=0,h!=="*"&&h!=="?"&&h!=="+"&&r--);break;case 2:h===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+h:t=3:p+=h;break;case 3:c(),t=0,h!=="*"&&h!=="?"&&h!=="+"&&r--,p="";break;default:n("Unknown state");break}}return t===2&&n(`Unfinished custom RegExp for param "${l}"`),c(),o(),i}function Xk(e,n,t){const s=$k(qk(e.path),t),i=Ie(s,{record:e,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function Zk(e,n){const t=[],s=new Map;n=Nh({strict:!1,end:!0,sensitive:!1},n);function i(c){return s.get(c)}function a(c,g,u){const f=!u,d=Jk(c);d.aliasOf=u&&u.record;const b=Nh(n,c),y=[d];if("alias"in c){const O=typeof c.alias=="string"?[c.alias]:c.alias;for(const E of O)y.push(Ie({},d,{components:u?u.record.components:d.components,path:E,aliasOf:u?u.record:d}))}let P,S;for(const O of y){const{path:E}=O;if(g&&E[0]!=="/"){const j=g.record.path,I=j[j.length-1]==="/"?"":"/";O.path=g.record.path+(E&&I+E)}if(P=Xk(O,g,b),u?u.alias.push(P):(S=S||P,S!==P&&S.alias.push(P),f&&c.name&&!Rh(P)&&o(c.name)),dc(P)&&h(P),d.children){const j=d.children;for(let I=0;I<j.length;I++)a(j[I],P,u&&u.children[I])}u=u||P}return S?()=>{o(S)}:rs}function o(c){if(cc(c)){const g=s.get(c);g&&(s.delete(c),t.splice(t.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=t.indexOf(c);g>-1&&(t.splice(g,1),c.record.name&&s.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function r(){return t}function h(c){const g=nw(c,t);t.splice(g,0,c),c.record.name&&!Rh(c)&&s.set(c.record.name,c)}function l(c,g){let u,f={},d,b;if("name"in c&&c.name){if(u=s.get(c.name),!u)throw Ht(1,{location:c});b=u.record.name,f=Ie(Mh(g.params,u.keys.filter(S=>!S.optional).concat(u.parent?u.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),c.params&&Mh(c.params,u.keys.map(S=>S.name))),d=u.stringify(f)}else if(c.path!=null)d=c.path,u=t.find(S=>S.re.test(d)),u&&(f=u.parse(d),b=u.record.name);else{if(u=g.name?s.get(g.name):t.find(S=>S.re.test(g.path)),!u)throw Ht(1,{location:c,currentLocation:g});b=u.record.name,f=Ie({},g.params,c.params),d=u.stringify(f)}const y=[];let P=u;for(;P;)y.unshift(P.record),P=P.parent;return{name:b,path:d,params:f,matched:y,meta:ew(y)}}e.forEach(c=>a(c));function p(){t.length=0,s.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:p,getRoutes:r,getRecordMatcher:i}}function Mh(e,n){const t={};for(const s of n)s in e&&(t[s]=e[s]);return t}function Jk(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Qk(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Qk(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const s in e.components)n[s]=typeof t=="object"?t[s]:t;return n}function Rh(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ew(e){return e.reduce((n,t)=>Ie(n,t.meta),{})}function Nh(e,n){const t={};for(const s in e)t[s]=s in n?n[s]:e[s];return t}function nw(e,n){let t=0,s=n.length;for(;t!==s;){const a=t+s>>1;uc(e,n[a])<0?s=a:t=a+1}const i=tw(e);return i&&(s=n.lastIndexOf(i,s-1)),s}function tw(e){let n=e;for(;n=n.parent;)if(dc(n)&&uc(e,n)===0)return n}function dc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function sw(e){const n={};if(e===""||e==="?")return n;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const a=s[i].replace(ac," "),o=a.indexOf("="),r=ks(o<0?a:a.slice(0,o)),h=o<0?null:ks(a.slice(o+1));if(r in n){let l=n[r];yn(l)||(l=n[r]=[l]),l.push(h)}else n[r]=h}return n}function Bh(e){let n="";for(let t in e){const s=e[t];if(t=Pk(t),s==null){s!==void 0&&(n+=(n.length?"&":"")+t);continue}(yn(s)?s.map(a=>a&&_a(a)):[s&&_a(s)]).forEach(a=>{a!==void 0&&(n+=(n.length?"&":"")+t,a!=null&&(n+="="+a))})}return n}function iw(e){const n={};for(const t in e){const s=e[t];s!==void 0&&(n[t]=yn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return n}const aw=Symbol(""),Lh=Symbol(""),Oo=Symbol(""),Co=Symbol(""),Ra=Symbol("");function Zt(){let e=[];function n(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function Zn(e,n,t,s,i,a=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((r,h)=>{const l=g=>{g===!1?h(Ht(4,{from:t,to:n})):g instanceof Error?h(g):Kk(g)?h(Ht(2,{from:n,to:g})):(o&&s.enterCallbacks[i]===o&&typeof g=="function"&&o.push(g),r())},p=a(()=>e.call(s&&s.instances[i],n,t,l));let c=Promise.resolve(p);e.length<3&&(c=c.then(l)),c.catch(g=>h(g))})}function ia(e,n,t,s,i=a=>a()){const a=[];for(const o of e)for(const r in o.components){let h=o.components[r];if(!(n!=="beforeRouteEnter"&&!o.instances[r]))if(ow(h)){const p=(h.__vccOpts||h)[n];p&&a.push(Zn(p,t,s,o,r,i))}else{let l=h();a.push(()=>l.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${o.path}"`));const c=ck(p)?p.default:p;o.components[r]=c;const u=(c.__vccOpts||c)[n];return u&&Zn(u,t,s,o,r,i)()}))}}return a}function ow(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fh(e){const n=Be(Oo),t=Be(Co),s=v(()=>{const h=Ze(e.to);return n.resolve(h)}),i=v(()=>{const{matched:h}=s.value,{length:l}=h,p=h[l-1],c=t.matched;if(!p||!c.length)return-1;const g=c.findIndex(zt.bind(null,p));if(g>-1)return g;const u=Vh(h[l-2]);return l>1&&Vh(p)===u&&c[c.length-1].path!==u?c.findIndex(zt.bind(null,h[l-2])):g}),a=v(()=>i.value>-1&&pw(t.params,s.value.params)),o=v(()=>i.value>-1&&i.value===t.matched.length-1&&lc(t.params,s.value.params));function r(h={}){return lw(h)?n[Ze(e.replace)?"replace":"push"](Ze(e.to)).catch(rs):Promise.resolve()}return{route:s,href:v(()=>s.value.href),isActive:a,isExactActive:o,navigate:r}}const rw=oo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fh,setup(e,{slots:n}){const t=mn(Fh(e)),{options:s}=Be(Oo),i=v(()=>({[Dh(e.activeClass,s.linkActiveClass,"router-link-active")]:t.isActive,[Dh(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const a=n.default&&n.default(t);return e.custom?a:Cn("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},a)}}}),hw=rw;function lw(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function pw(e,n){for(const t in n){const s=n[t],i=e[t];if(typeof s=="string"){if(s!==i)return!1}else if(!yn(i)||i.length!==s.length||s.some((a,o)=>a!==i[o]))return!1}return!0}function Vh(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Dh=(e,n,t)=>e??n??t,cw=oo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const s=Be(Ra),i=v(()=>e.route||s.value),a=Be(Lh,0),o=v(()=>{let l=Ze(a);const{matched:p}=i.value;let c;for(;(c=p[l])&&!c.components;)l++;return l}),r=v(()=>i.value.matched[o.value]);bn(Lh,v(()=>o.value+1)),bn(aw,r),bn(Ra,i);const h=Y();return pe(()=>[h.value,r.value,e.name],([l,p,c],[g,u,f])=>{p&&(p.instances[c]=l,u&&u!==p&&l&&l===g&&(p.leaveGuards.size||(p.leaveGuards=u.leaveGuards),p.updateGuards.size||(p.updateGuards=u.updateGuards))),l&&p&&(!u||!zt(p,u)||!g)&&(p.enterCallbacks[c]||[]).forEach(d=>d(l))},{flush:"post"}),()=>{const l=i.value,p=e.name,c=r.value,g=c&&c.components[p];if(!g)return Wh(t.default,{Component:g,route:l});const u=c.props[p],f=u?u===!0?l.params:typeof u=="function"?u(l):u:null,b=Cn(g,Ie({},f,n,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(c.instances[p]=null)},ref:h}));return Wh(t.default,{Component:b,route:l})||b}}});function Wh(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const gw=cw;function uw(e){const n=Zk(e.routes,e),t=e.parseQuery||sw,s=e.stringifyQuery||Bh,i=e.history,a=Zt(),o=Zt(),r=Zt(),h=ye($n);let l=$n;_t&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=ta.bind(null,C=>""+C),c=ta.bind(null,Ik),g=ta.bind(null,ks);function u(C,Q){let Z,se;return cc(C)?(Z=n.getRecordMatcher(C),se=Q):se=C,n.addRoute(se,Z)}function f(C){const Q=n.getRecordMatcher(C);Q&&n.removeRoute(Q)}function d(){return n.getRoutes().map(C=>C.record)}function b(C){return!!n.getRecordMatcher(C)}function y(C,Q){if(Q=Ie({},Q||h.value),typeof C=="string"){const w=sa(t,C,Q.path),A=n.resolve({path:w.path},Q),M=i.createHref(w.fullPath);return Ie(w,A,{params:g(A.params),hash:ks(w.hash),redirectedFrom:void 0,href:M})}let Z;if(C.path!=null)Z=Ie({},C,{path:sa(t,C.path,Q.path).path});else{const w=Ie({},C.params);for(const A in w)w[A]==null&&delete w[A];Z=Ie({},C,{params:c(w)}),Q.params=c(Q.params)}const se=n.resolve(Z,Q),je=C.hash||"";se.params=p(g(se.params));const Le=Sk(s,Ie({},C,{hash:vk(je),path:se.path})),m=i.createHref(Le);return Ie({fullPath:Le,hash:je,query:s===Bh?iw(C.query):C.query||{}},se,{redirectedFrom:void 0,href:m})}function P(C){return typeof C=="string"?sa(t,C,h.value.path):Ie({},C)}function S(C,Q){if(l!==C)return Ht(8,{from:Q,to:C})}function O(C){return I(C)}function E(C){return O(Ie(P(C),{replace:!0}))}function j(C){const Q=C.matched[C.matched.length-1];if(Q&&Q.redirect){const{redirect:Z}=Q;let se=typeof Z=="function"?Z(C):Z;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=P(se):{path:se},se.params={}),Ie({query:C.query,hash:C.hash,params:se.path!=null?{}:C.params},se)}}function I(C,Q){const Z=l=y(C),se=h.value,je=C.state,Le=C.force,m=C.replace===!0,w=j(Z);if(w)return I(Ie(P(w),{state:typeof w=="object"?Ie({},je,w.state):je,force:Le,replace:m}),Q||Z);const A=Z;A.redirectedFrom=Q;let M;return!Le&&Ok(s,se,Z)&&(M=Ht(16,{to:A,from:se}),U(se,se,!0,!1)),(M?Promise.resolve(M):V(A,se)).catch(x=>_n(x)?_n(x,2)?x:N(x):W(x,A,se)).then(x=>{if(x){if(_n(x,2))return I(Ie({replace:m},P(x.to),{state:typeof x.to=="object"?Ie({},je,x.to.state):je,force:Le}),Q||A)}else x=T(A,se,!0,m,je);return D(A,se,x),x})}function B(C,Q){const Z=S(C,Q);return Z?Promise.reject(Z):Promise.resolve()}function _(C){const Q=$e.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(C):C()}function V(C,Q){let Z;const[se,je,Le]=dw(C,Q);Z=ia(se.reverse(),"beforeRouteLeave",C,Q);for(const w of se)w.leaveGuards.forEach(A=>{Z.push(Zn(A,C,Q))});const m=B.bind(null,C,Q);return Z.push(m),be(Z).then(()=>{Z=[];for(const w of a.list())Z.push(Zn(w,C,Q));return Z.push(m),be(Z)}).then(()=>{Z=ia(je,"beforeRouteUpdate",C,Q);for(const w of je)w.updateGuards.forEach(A=>{Z.push(Zn(A,C,Q))});return Z.push(m),be(Z)}).then(()=>{Z=[];for(const w of Le)if(w.beforeEnter)if(yn(w.beforeEnter))for(const A of w.beforeEnter)Z.push(Zn(A,C,Q));else Z.push(Zn(w.beforeEnter,C,Q));return Z.push(m),be(Z)}).then(()=>(C.matched.forEach(w=>w.enterCallbacks={}),Z=ia(Le,"beforeRouteEnter",C,Q,_),Z.push(m),be(Z))).then(()=>{Z=[];for(const w of o.list())Z.push(Zn(w,C,Q));return Z.push(m),be(Z)}).catch(w=>_n(w,8)?w:Promise.reject(w))}function D(C,Q,Z){r.list().forEach(se=>_(()=>se(C,Q,Z)))}function T(C,Q,Z,se,je){const Le=S(C,Q);if(Le)return Le;const m=Q===$n,w=_t?history.state:{};Z&&(se||m?i.replace(C.fullPath,Ie({scroll:m&&w&&w.scroll},je)):i.push(C.fullPath,je)),h.value=C,U(C,Q,Z,m),N()}let R;function F(){R||(R=i.listen((C,Q,Z)=>{if(!me.listening)return;const se=y(C),je=j(se);if(je){I(Ie(je,{replace:!0}),se).catch(rs);return}l=se;const Le=h.value;_t&&Bk(Oh(Le.fullPath,Z.delta),Bi()),V(se,Le).catch(m=>_n(m,12)?m:_n(m,2)?(I(m.to,se).then(w=>{_n(w,20)&&!Z.delta&&Z.type===ws.pop&&i.go(-1,!1)}).catch(rs),Promise.reject()):(Z.delta&&i.go(-Z.delta,!1),W(m,se,Le))).then(m=>{m=m||T(se,Le,!1),m&&(Z.delta&&!_n(m,8)?i.go(-Z.delta,!1):Z.type===ws.pop&&_n(m,20)&&i.go(-1,!1)),D(se,Le,m)}).catch(rs)}))}let ne=Zt(),J=Zt(),K;function W(C,Q,Z){N(C);const se=J.list();return se.length?se.forEach(je=>je(C,Q,Z)):console.error(C),Promise.reject(C)}function q(){return K&&h.value!==$n?Promise.resolve():new Promise((C,Q)=>{ne.add([C,Q])})}function N(C){return K||(K=!C,F(),ne.list().forEach(([Q,Z])=>C?Z(C):Q()),ne.reset()),C}function U(C,Q,Z,se){const{scrollBehavior:je}=e;if(!_t||!je)return Promise.resolve();const Le=!Z&&Lk(Oh(C.fullPath,0))||(se||!Z)&&history.state&&history.state.scroll||null;return He().then(()=>je(C,Q,Le)).then(m=>m&&Nk(m)).catch(m=>W(m,C,Q))}const ie=C=>i.go(C);let We;const $e=new Set,me={currentRoute:h,listening:!0,addRoute:u,removeRoute:f,clearRoutes:n.clearRoutes,hasRoute:b,getRoutes:d,resolve:y,options:e,push:O,replace:E,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:a.add,beforeResolve:o.add,afterEach:r.add,onError:J.add,isReady:q,install(C){const Q=this;C.component("RouterLink",hw),C.component("RouterView",gw),C.config.globalProperties.$router=Q,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(h)}),_t&&!We&&h.value===$n&&(We=!0,O(i.location).catch(je=>{}));const Z={};for(const je in $n)Object.defineProperty(Z,je,{get:()=>h.value[je],enumerable:!0});C.provide(Oo,Q),C.provide(Co,Rl(Z)),C.provide(Ra,h);const se=C.unmount;$e.add(C),C.unmount=function(){$e.delete(C),$e.size<1&&(l=$n,R&&R(),R=null,h.value=$n,We=!1,K=!1),se()}}};function be(C){return C.reduce((Q,Z)=>Q.then(()=>_(Z)),Promise.resolve())}return me}function dw(e,n){const t=[],s=[],i=[],a=Math.max(n.matched.length,e.matched.length);for(let o=0;o<a;o++){const r=n.matched[o];r&&(e.matched.find(l=>zt(l,r))?s.push(r):t.push(r));const h=e.matched[o];h&&(n.matched.find(l=>zt(l,h))||i.push(h))}return[t,s,i]}function mw(e){return Be(Co)}const fw=lk("pokemon",{state:()=>({pokemons:[],loadedPokemonNames:new Set}),actions:{modalAddPokemons(e){e.forEach(n=>{this.loadedPokemonNames.has(n.name)||(this.pokemons.push(n),this.loadedPokemonNames.add(n.name))})}}}),Os=(e,n)=>{const t=e.__vccOpts||e;for(const[s,i]of n)t[s]=i;return t},kw={id:"highlightWord"},Ks="하찮은",ww={__name:"main_highlight_word",setup(e){const n=Y(""),t=Y(0),s=Y(!1),i=()=>{!s.value&&t.value<Ks.length?(n.value+=Ks.charAt(t.value),t.value++,setTimeout(i,200)):s.value&&t.value>0?(n.value=Ks.substring(0,t.value-1),t.value--,setTimeout(i,100)):t.value===Ks.length?setTimeout(()=>{s.value=!0,setTimeout(i,200)},1e3):t.value===0&&(s.value=!1,setTimeout(i,500))};return tn(()=>{i()}),(a,o)=>(we(),Te("div",null,[G("h2",null,[Ne(" 우리만의 "),G("span",kw,Ae(n.value),1),Ne(" 포켓몬 도감 ")])]))}},bw=Os(ww,[["__scopeId","data-v-b527adcb"]]),mc=[{id:1,names:{korean:"이상해씨",english:"Bulbasaur",japanese:"フシギダネ"},descriptions:{korean:`태어났을 때부터 등에
이상한 씨앗이 심어져 있으며
몸과 함께 자란다고 한다.`,english:`A strange seed was
planted on its
back at birth.\fThe plant sprouts
and grows with
this POKéMON.`,japanese:`生まれたときから　背中に
不思議な　タネが　植えてあって
体と　ともに　育つという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",height:7,weight:69},{id:2,names:{korean:"이상해풀",english:"Ivysaur",japanese:"フシギソウ"},descriptions:{korean:`꽃봉오리가 등에 붙어 있으며
양분을 흡수해가면
커다란 꽃이 핀다고 한다.`,english:`When the bulb on
its back grows
large, it appears\fto lose the
ability to stand
on its hind legs.`,japanese:`つぼみが　背中に　ついていて
養分を　吸収していくと
大きな　花が　咲くという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",height:10,weight:130},{id:3,names:{korean:"이상해꽃",english:"Venusaur",japanese:"フシギバナ"},descriptions:{korean:`큰 꽃잎을 펼쳐
햇빛을 받고 있으면
몸에 힘이 넘쳐흐른다.`,english:`The plant blooms
when it is
absorbing solar\fenergy. It stays
on the move to
seek sunlight.`,japanese:`大きな　花びらを　広げ
太陽の　光を　浴びていると
体に　元気が　みなぎっていく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",height:20,weight:1e3},{id:4,names:{korean:"파이리",english:"Charmander",japanese:"ヒトカゲ"},descriptions:{korean:`꼬리의 불꽃은 파이리의
생명력의 상징이다.
건강할 때 왕성하게 불타오른다.`,english:`Obviously prefers
hot places. When
it rains, steam\fis said to spout
from the tip of
its tail.`,japanese:`尻尾の　炎は
ヒトカゲの　生命力の　証。
元気だと　さかんに　燃えさかる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",height:6,weight:85},{id:5,names:{korean:"리자드",english:"Charmeleon",japanese:"リザード"},descriptions:{korean:`꼬리를 휘둘러 상대를
쓰러트리고 날카로운 발톱으로
갈기갈기 찢어버린다.`,english:`When it swings
its burning tail,
it elevates the\ftemperature to
unbearably high
levels.`,japanese:`尻尾を　振り回して
相手を　なぎ倒し　鋭い　ツメで
ズタズタに　ひきさいてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",height:11,weight:190},{id:6,names:{korean:"리자몽",english:"Charizard",japanese:"リザードン"},descriptions:{korean:`입에서 작렬하는 불꽃을
토해낼 때 꼬리의 끝이
더욱 붉고 격렬하게 타오른다.`,english:`Spits fire that
is hot enough to
melt boulders.\fKnown to cause
forest fires
unintentionally.`,japanese:`口から　灼熱の　炎を　吐き出すとき
尻尾の　先は
より　赤く　激しく　燃え上がる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",height:17,weight:905},{id:7,names:{korean:"꼬부기",english:"Squirtle",japanese:"ゼニガメ"},descriptions:{korean:`등껍질에 숨어 몸을 보호한다.
상대의 빈틈을 놓치지 않고
물을 뿜어내어 반격한다.`,english:`After birth, its
back swells and
hardens into a\fshell. Powerfully
sprays foam from
its mouth.`,japanese:`甲羅に　閉じこもり　身を　守る。
相手の　すきを　見逃さず
水を　噴き出して　反撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",height:5,weight:90},{id:8,names:{korean:"어니부기",english:"Wartortle",japanese:"カメール"},descriptions:{korean:`딱 하고 머리를 맞을 때
등껍질로 숨어서 피한다. 하지만
꼬리가 살짝 삐져나와 있다.`,english:`Often hides in
water to stalk
unwary prey. For\fswimming fast, it
moves its ears to
maintain balance.`,japanese:`ポカンと　頭を　たたかれるとき
甲羅に　引っこんで　避ける。でも
ちょっとだけ　尻尾が　出ているよ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",height:10,weight:225},{id:9,names:{korean:"거북왕",english:"Blastoise",japanese:"カメックス"},descriptions:{korean:`무거운 몸으로 상대를
덮쳐서 기절시킨다.
위기에 처하면 등껍질에 숨는다.`,english:`A brutal POKéMON
with pressurized
water jets on its\fshell. They are
used for high
speed tackles.`,japanese:`体が　重たく　のしかかって
相手を　気絶させる。
ピンチのときは　殻に　隠れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",height:16,weight:855},{id:10,names:{korean:"캐터피",english:"Caterpie",japanese:"キャタピー"},descriptions:{korean:`머리의 더듬이로부터
강렬한 냄새를 내어
적을 물리치고 몸을 보호한다.`,english:`Its short feet are tipped with suction
pads that enable it to tirelessly climb
slopes and walls.`,japanese:`頭の　触覚から
強烈な　においを　出して
敵を　追い払い　身を守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",height:3,weight:29},{id:11,names:{korean:"단데기",english:"Metapod",japanese:"トランセル"},descriptions:{korean:`강철같이 단단한 껍질로
부드러운 몸을 보호하고 있다.
진화할 때까지 가만히 참고 있다.`,english:`This POKéMON is
vulnerable to
attack while its\fshell is soft,
exposing its weak
and tender body.`,japanese:`鋼鉄のように　硬い　殻で
やわらかい　中身を　守っている。
進化するまで　じっと　耐えている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",height:7,weight:99},{id:12,names:{korean:"버터플",english:"Butterfree",japanese:"バタフリー"},descriptions:{korean:`꽃의 꿀을 매우 좋아한다.
약간의 꽃가루만으로 꽃밭이
있는 장소를 찾아낼 수 있다.`,english:`In battle, it
flaps its wings
at high speed to\frelease highly
toxic dust into
the air.`,japanese:`花の　ミツが　大好物。
わずかな　花粉で　花畑の
場所を　探し出すことが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",height:11,weight:320},{id:13,names:{korean:"뿔충이",english:"Weedle",japanese:"ビードル"},descriptions:{korean:`숲이나 풀밭에 많이 서식한다.
머리끝에 5cm 정도의
작고 날카로운 독침을 지니고 있다.`,english:`Often found in
forests, eating
leaves.\fIt has a sharp
venomous stinger
on its head.`,japanese:`森や　草地に　多く　生息。
頭の　先に　５センチぐらいの
小さく　鋭い　毒針を持つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",height:3,weight:32},{id:14,names:{korean:"딱충이",english:"Kakuna",japanese:"コクーン"},descriptions:{korean:`스스로는 거의 움직일 수 없지만
위험할 때는 단단해져서
몸을 보호하고 있는 것 같다.`,english:`Almost incapable
of moving, this
POKéMON can only\fharden its shell
to protect itself
from predators.`,japanese:`自分では　ほとんど　動けないが
危ないときは　硬くなって
身を守っているようだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",height:6,weight:100},{id:15,names:{korean:"독침붕",english:"Beedrill",japanese:"スピアー"},descriptions:{korean:`양손과 엉덩이에 있는 3개의
독침으로 상대를 찌르고 찌르고
또 찌르며 공격한다.`,english:`It has three poisonous stingers on its forelegs and
its tail. They are used to jab its enemy repeatedly.`,japanese:`両手と　お尻にある　３本の　毒針で
相手を　刺して　刺して
刺しまくって　攻撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",height:10,weight:295},{id:16,names:{korean:"구구",english:"Pidgey",japanese:"ポッポ"},descriptions:{korean:`숲이나 수풀에 많이 분포해 있다.
땅에서도 격렬한 날갯짓으로
모래를 뿌리기도 한다.`,english:`A common sight in
forests and woods.
It flaps its\fwings at ground
level to kick up
blinding sand.`,japanese:`森や　林に　多く　分布。
地上でも　激しく　はばたいて
砂を　かけたりする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",height:3,weight:18},{id:17,names:{korean:"피죤",english:"Pidgeotto",japanese:"ピジョン"},descriptions:{korean:`발톱이 발달해 있다.
먹이인 아라리를 잡아
100km 떨어져 있는 둥지까지 나른다.`,english:`Very protective
of its sprawling
territorial area,\fthis POKéMON will
fiercely peck at
any intruder.`,japanese:`足の　ツメが　発達している。
エサの　タマタマを　つかんで
１００キロ先の　巣まで　運ぶ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",height:11,weight:300},{id:18,names:{korean:"피죤투",english:"Pidgeot",japanese:"ピジョット"},descriptions:{korean:`먹이를 찾을 때 수면을
아슬아슬하게 미끄러지듯 날아
잉어킹 등을 움켜잡는다.`,english:`When hunting, it
skims the surface
of water at high\fspeed to pick off
unwary prey such
as MAGIKARP.`,japanese:`エサを　探すとき　水面　すれすれを
滑るように　飛んで
コイキングなどを　わしづかみにする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",height:15,weight:395},{id:19,names:{korean:"꼬렛",english:"Rattata",japanese:"コラッタ"},descriptions:{korean:`먹을 것이 있는 곳이라면
어디서든 서식한다.
온종일 먹이를 찾아다닌다.`,english:`Bites anything
when it attacks.
Small and very\fquick, it is a
common sight in
many places.`,japanese:`食べるものが　あるところなら
どこにだって　生息する。
１日中　エサを　探している。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",height:3,weight:35},{id:20,names:{korean:"레트라",english:"Raticate",japanese:"ラッタ"},descriptions:{korean:`계속 자라는 앞니를 갈아내려고
딱딱한 것을 갉는 습성이 있다.
벽돌로 된 벽도 갉아서 부순다.`,english:`It uses its whis­
kers to maintain
its balance.\fIt apparently
slows down if
they are cut off.`,japanese:`伸び続ける　前歯を　削るため
硬い　ものを　かじる　習性。
ブロック塀も　かじって　壊す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",height:7,weight:185},{id:21,names:{korean:"깨비참",english:"Spearow",japanese:"オニスズメ"},descriptions:{korean:`자신의 영역을 지키기 위해
작은 날개를 쳐서
바쁘게 주위를 날아 맴돈다.`,english:`It flaps its small wings busily to
fly. Using its beak, it searches
in grass for prey.`,japanese:`自分の　テリトリーを　守るため
短い　羽を　はばたかせて
忙しく　飛び回っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",height:3,weight:20},{id:22,names:{korean:"깨비드릴조",english:"Fearow",japanese:"オニドリル"},descriptions:{korean:`커다란 날개로 넓은 하늘을
계속 날 수 있다.
한 번도 내려앉지 않아도 괜찮다.`,english:`With its huge and
magnificent wings,
it can keep aloft\fwithout ever
having to land
for rest.`,japanese:`大きな　翼で　大空を
飛び続けることが　できる。
１回も　降りなくても　平気だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",height:12,weight:380},{id:23,names:{korean:"아보",english:"Ekans",japanese:"アーボ"},descriptions:{korean:`성장할수록 점점 길어진다.
밤에는 나뭇가지에
몸을 돌돌 말고 쉰다.`,english:`Moves silently
and stealthily.
Eats the eggs of\fbirds, such as
PIDGEY and
SPEAROW, whole.`,japanese:`育つほどに　どんどん　長くなる。
そして　夜中は　木の枝に
グルグルと　絡まって　休む。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",height:20,weight:69},{id:24,names:{korean:"아보크",english:"Arbok",japanese:"アーボック"},descriptions:{korean:`배의 무늬가 무서운 얼굴로
보인다. 약한 적은 그 무늬만
보고도 도망치고 만다.`,english:`It is rumored that
the ferocious
warning markings\fon its belly
differ from area
to area.`,japanese:`お腹の　模様が　怖い　顔に　見える。
弱い　敵は　その模様を
見ただけで　逃げ出してしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",height:35,weight:650},{id:25,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",height:4,weight:60},{id:26,names:{korean:"라이츄",english:"Raichu",japanese:"ライチュウ"},descriptions:{korean:`전기가 모이면
근육이 자극되어 여느 때보다
공격적이 된다.`,english:`Its long tail serves as a ground to protect itself
from its own high-voltage power.`,japanese:`電気が　たまってくると
筋肉が　刺激され
いつもより　攻撃的に　なってしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",height:8,weight:300},{id:27,names:{korean:"모래두지",english:"Sandshrew",japanese:"サンド"},descriptions:{korean:`지면에 구멍을 파고 산다.
자신에게 위험이 닥쳐오면
둥글게 말아서 몸을 보호한다.`,english:`Burrows deep
underground in
arid locations\ffar from water.
It only emerges
to hunt for food.`,japanese:`地面に　穴を　掘って　住む。
自分に　危険が　迫ると
まるくなって　身を　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",height:6,weight:120},{id:28,names:{korean:"고지",english:"Sandslash",japanese:"サンドパン"},descriptions:{korean:`굉장한 기세로 지면을 파면
가시와 발톱이 부러져 버리지만
다음 날에는 바로 돋아나 있다.`,english:`Curls up into a
spiny ball when
threatened. It\fcan roll while
curled up to
attack or escape.`,japanese:`すごい　勢いで　地面を掘ると
トゲや　ツメが　折れてしまうが
次の日には　生えそろっている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",height:10,weight:295},{id:29,names:{korean:"니드런♀",english:"Nidoran♀",japanese:"ニドラン♀"},descriptions:{korean:`몸은 작지만 독침을
지니고 있기 때문에 주의가 필요하다.
암컷의 뿔이 더 작다.`,english:`Although small,
its venomous
barbs render this\fPOKéMON dangerous.
The female has
smaller horns.`,japanese:`体は　小さくても　毒針を
持つため　注意が　必要だ。
メスのほうが　ツノが　小さい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",height:4,weight:70},{id:30,names:{korean:"니드리나",english:"Nidorina",japanese:"ニドリーナ"},descriptions:{korean:`암컷으로 성격은 온화하다.
입에서 내보내는 초음파는
상대를 혼란시키는 힘이 있다.`,english:`The female's horn
develops slowly.
Prefers physical\fattacks such as
clawing and
biting.`,japanese:`メスなので　性格は　温厚。
口から　出す　超音波は
相手を　まどわす　力がある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",height:8,weight:200},{id:31,names:{korean:"니드퀸",english:"Nidoqueen",japanese:"ニドクイン"},descriptions:{korean:`비늘로 뒤덮인 튼튼한
몸으로 둥지의 입구를 막아
상대로부터 새끼들을 지킨다.`,english:`Its hard scales
provide strong
protection. It\fuses its hefty
bulk to execute
powerful moves.`,japanese:`ウロコで　覆われた　頑丈な　体で
巣穴の　入り口を　ふさぎ
敵から　子供たちを　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",height:13,weight:600},{id:32,names:{korean:"니드런♂",english:"Nidoran♂",japanese:"ニドラン♂"},descriptions:{korean:`풀밭 위로 귀만 내어
주위의 낌새를 살핀다.
맹독의 뿔로 몸을 보호한다.`,english:`Stiffens its ears
to sense danger.
The larger its\fhorns, the more
powerful its
secreted venom.`,japanese:`草むらの　上に　耳だけ　出して
まわりの　気配を　探る。
猛毒の　ツノで　身を　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",height:5,weight:90},{id:33,names:{korean:"니드리노",english:"Nidorino",japanese:"ニドリーノ"},descriptions:{korean:`신경질적이고 호전적이다.
체내의 아드레날린이 증가하면
독소의 농도도 높아진다.`,english:`An aggressive
POKéMON that is
quick to attack.\fThe horn on its
head secretes a
powerful venom.`,japanese:`発達した　耳を　立てて
まわりの　気配を　探る。
なにかあると　すぐに　飛びかかる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",height:9,weight:195},{id:34,names:{korean:"니드킹",english:"Nidoking",japanese:"ニドキング"},descriptions:{korean:`돌처럼 딱딱한 피부와
길게 뻗은 뿔이 특징이다.
뿔에는 독이 있으니 주의해야 한다.`,english:`It uses its
powerful tail in
battle to smash,\fconstrict, then
break the prey's
bones.`,japanese:`石のように　硬い　皮膚と
長く　伸びた　ツノが　特徴。
ツノには　毒も　あるので　注意。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",height:14,weight:620},{id:35,names:{korean:"삐삐",english:"Clefairy",japanese:"ピッピ"},descriptions:{korean:`보름달 밤에 삐삐가 모여
춤을 추는 모습을 보면
행복해진다고 전해진다.`,english:`Its magical and
cute appeal has
many admirers.\fIt is rare and
found only in
certain areas.`,japanese:`満月の夜　ピッピが　集まって
ダンスを　踊る様子を　見ると
幸せに　なれると　言われている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",height:6,weight:75},{id:36,names:{korean:"픽시",english:"Clefable",japanese:"ピクシー"},descriptions:{korean:`1km 전방에 떨어진 바늘 소리도
분간할 수 있는 우수한 귀를 가지고
있다. 조용한 산속에 살고 있다.`,english:`A timid fairy
POKéMON that is
rarely seen. It\fwill run and hide
the moment it
senses people.`,japanese:`１キロ先で　落ちた　針の　音も
聞き分ける　優れた　耳を　持つ。
静かな　山奥に　住んでいる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",height:13,weight:400},{id:37,names:{korean:"식스테일",english:"Vulpix",japanese:"ロコン"},descriptions:{korean:`태어났을 때는 꼬리가 새하얗고
하나밖에 없다. 성장하면
끝이 갈라지며 꼬리 수가 늘어난다.`,english:`At the time of
birth, it has
just one tail.\fThe tail splits
from its tip as
it grows older.`,japanese:`生まれたとき　尻尾は　真っ白で
１本しかない。育つと　やがて
先が　分かれて　尻尾が　増える。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",height:6,weight:99},{id:38,names:{korean:"나인테일",english:"Ninetales",japanese:"キュウコン"},descriptions:{korean:`황금빛으로 빛나는 털과
9개의 긴 꼬리를 지녔다.
1000년을 산다고 한다.`,english:`Very smart and
very vengeful.
Grabbing one of\fits many tails
could result in a
1000-year curse.`,japanese:`黄金に　輝く　体毛と
９本の　長い　尻尾を　持つ。
１０００年は　生きると　言われる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",height:11,weight:199},{id:39,names:{korean:"푸린",english:"Jigglypuff",japanese:"プリン"},descriptions:{korean:`동그랗고 커다란 눈동자로
유인하고 기분 좋은 노래를
불러 상대방을 잠들게 한다.`,english:`When its huge eyes
light up, it sings
a mysteriously\fsoothing melody
that lulls its
enemies to sleep.`,japanese:`まるくて　大きい　瞳で　誘いこみ
心地よい　歌を　歌い
相手を　眠らせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",height:5,weight:55},{id:40,names:{korean:"푸크린",english:"Wigglytuff",japanese:"プクリン"},descriptions:{korean:`2마리가 바싹 붙어 있으면 서로의
털이 너무 기분 좋아서
떨어지지 않게 되어버린다.`,english:`The body is soft
and rubbery. When
angered, it will\fsuck in air and
inflate itself to
an enormous size.`,japanese:`２匹　寄り添いあうと　お互いの
毛皮が　気持ち良すぎて
離れられなく　なってしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",height:10,weight:120},{id:41,names:{korean:"주뱃",english:"Zubat",japanese:"ズバット"},descriptions:{korean:`입에서 내는 초음파로
두 눈이 없어도 주위의
장애물을 탐색할 수 있다.`,english:`Forms colonies in
perpetually dark
places. Uses\fultrasonic waves
to identify and
approach targets.`,japanese:`口から　出す　超音波で
両目が　なくても
まわりの　障害物を　察知できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",height:8,weight:75},{id:42,names:{korean:"골뱃",english:"Golbat",japanese:"ゴルバット"},descriptions:{korean:`물리면 끝이다. 죽을 정도로
피를 빨아들이기 때문에 무거워져서
날 수 없게 될 때도 있다.`,english:`Once it strikes,
it will not stop
draining energy\ffrom the victim
even if it gets
too heavy to fly.`,japanese:`かみついたら　最後。死ぬほど
血を　吸いまくるので　重たくなって
自分で　飛べなくなることもある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",height:16,weight:550},{id:43,names:{korean:"뚜벅쵸",english:"Oddish",japanese:"ナゾノクサ"},descriptions:{korean:`낮에는 태양을 피하려고
차가운 땅속에 들어가 있다.
달빛을 쬐어 성장한다.`,english:`During the day,
it keeps its face
buried in the\fground. At night,
it wanders around
sowing its seeds.`,japanese:`昼間は　太陽を　避けるため
冷たい　地面に　潜っている。
月の　光を　浴びて　育つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",height:5,weight:54},{id:44,names:{korean:"냄새꼬",english:"Gloom",japanese:"クサイハナ"},descriptions:{korean:`강렬한 악취가 난다! 그럼에도
불구하고 1000명에 한 명 정도
이 냄새를 즐겨 맡는 사람이 있다.`,english:`The fluid that
oozes from its
mouth isn't drool.\fIt is a nectar
that is used to
attract prey.`,japanese:`猛烈な　クサさ！　それなのに
１０００人に　１人ぐらい
これを　好んで　かぐ　人がいる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",height:8,weight:86},{id:45,names:{korean:"라플레시아",english:"Vileplume",japanese:"ラフレシア"},descriptions:{korean:`꽃잎이 클수록 많은
꽃가루를 만들어 내지만 머리가
무거워서 지쳐버린다고 한다.`,english:`It has the world’s largest petals. With every step,
the petals shake out heavy clouds of toxic pollen.`,japanese:`世界一　大きな　花びらは
歩くたびに　揺れて　大量の
毒花粉を　ばらまいてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",height:12,weight:186},{id:46,names:{korean:"파라스",english:"Paras",japanese:"パラス"},descriptions:{korean:`벌레의 등에 돋아나 있는 것은
동충하초라는 버섯이다.
성장하면 버섯도 커진다.`,english:`Burrows to suck
tree roots. The
mushrooms on its\fback grow by draw­
ing nutrients from
the bug host.`,japanese:`虫の　背中に　生えているのは
冬虫夏草　という　キノコ。
育つと　キノコも　大きくなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",height:3,weight:54},{id:47,names:{korean:"파라섹트",english:"Parasect",japanese:"パラセクト"},descriptions:{korean:`몸보다 큰 버섯이
파라섹트를 조종하고 있다.
독 포자를 여기저기 뿌린다.`,english:`A host-parasite
pair in which the
parasite mushroom\fhas taken over the
host bug. Prefers
damp places.`,japanese:`体よりも　大きな　キノコが
パラセクトを　操っている。
毒の　胞子を　ばらまく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",height:10,weight:295},{id:48,names:{korean:"콘팡",english:"Venonat",japanese:"コンパン"},descriptions:{korean:`작은 눈이 많이 모여
큰 눈을 이루고 있다.
밤이 되면 불빛을 향해 모여든다.`,english:`Lives in the
shadows of tall
trees where it\feats insects. It
is attracted by
light at night.`,japanese:`小さな　目が　たくさん　集まって
大きな　目に　なっている。
夜になると　明かりに　集まる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",height:10,weight:300},{id:49,names:{korean:"도나리",english:"Venomoth",japanese:"モルフォン"},descriptions:{korean:`흩뿌려진 날개 가루에 닿으면
몸의 감각이 이상해져서
똑바로 서 있을 수 없게 된다.`,english:`The dustlike scales covering its wings
are color-coded to indicate the kinds of
poison it has.`,japanese:`ばらまかれた　りんぷんに　触れると
体の　感覚が　おかしくなって
まっすぐ　立っていられなくなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",height:15,weight:125},{id:50,names:{korean:"디그다",english:"Diglett",japanese:"ディグダ"},descriptions:{korean:`피부가 매우 얇아서
빛을 쪼이게 되면 혈액이
데워져 약해진다.`,english:`Lives about one
yard underground
where it feeds on\fplant roots. It
sometimes appears
above ground.`,japanese:`地下１メートルくらいを　掘りすすみ
木の根っこなどを　かじって　生きる。
たまに　地上に　顔を出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",height:2,weight:8},{id:51,names:{korean:"닥트리오",english:"Dugtrio",japanese:"ダグトリオ"},descriptions:{korean:`땅속을 파고들어 가
상대가 방심하고 있을 때
다른 곳에서 공격한다.`,english:`A team of DIGLETT
triplets.
It triggers huge\fearthquakes by
burrowing 60 miles
underground.`,japanese:`地中を　掘りすすんで
相手が　油断しているところを
別の　場所から　攻撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",height:7,weight:333},{id:52,names:{korean:"나옹",english:"Meowth",japanese:"ニャース"},descriptions:{korean:`한밤중에 움직이는 습성이 있다.
반짝반짝 빛나는 것을 발견하면
그에 못지않게 눈동자가 반짝인다.`,english:`It washes its face regularly to keep the coin on
its forehead spotless. It doesn’t get along with
Galarian Meowth.`,japanese:`夜中に　行動する　習性。
キラキラ　光るものを　見つけると
負けないくらい　瞳が　輝く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",height:4,weight:42},{id:53,names:{korean:"페르시온",english:"Persian",japanese:"ペルシアン"},descriptions:{korean:`털의 결이 아름다워 애완용으로
기르려는 사람이 많지만, 곧잘
할퀴려 들기 때문에 쉽지 않다.`,english:`Although its fur
has many admirers,
it is tough to\fraise as a pet
because of its
fickle meanness.`,japanese:`毛並みが　美しく
ペットにしたがる　人も　多いが　すぐ
ひっかいたり　するので　手強いぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",height:10,weight:320},{id:54,names:{korean:"고라파덕",english:"Psyduck",japanese:"コダック"},descriptions:{korean:`항상 두통에 시달리고 있다.
이 두통이 심해지면
이상한 힘을 쓰기 시작한다.`,english:`While lulling its
enemies with its
vacant look, this\fwily POKéMON will
use psychokinetic
powers.`,japanese:`いつも　頭痛に　悩まされている。
この　頭痛が　激しくなると
不思議な　力を　使いはじめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",height:8,weight:196},{id:55,names:{korean:"골덕",english:"Golduck",japanese:"ゴルダック"},descriptions:{korean:`해 질 무렵 강가에 모습을 나타낸다.
이마가 이상하게 빛날 때
신통력을 발휘한다고 전해진다.`,english:`Often seen swim­
ming elegantly by
lake shores. It\fis often mistaken
for the Japanese
monster, Kappa.`,japanese:`夕暮れ　水辺に　姿をみせる。
額が　あやしく　光るとき
神通力を　使いこなすという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",height:17,weight:766},{id:56,names:{korean:"망키",english:"Mankey",japanese:"マンキー"},descriptions:{korean:`이유 없이 화내고 날뛰기 시작하면
동료도 구별하지 못하기 때문에
가까이 가는 것은 매우 위험하다.`,english:`Extremely quick to
anger. It could
be docile one\fmoment then
thrashing away
the next instant.`,japanese:`意味もなく　怒って　暴れ出すと
仲間の　区別も　つかなくなるので
近寄るのは　非常に　危険だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",height:5,weight:280},{id:57,names:{korean:"성원숭",english:"Primeape",japanese:"オコリザル"},descriptions:{korean:`주위에 아무도 없을 때만은
화를 내지 않고 있다. 그러나
그 모습을 보기가 어렵다.`,english:`Always furious
and tenacious to
boot. It will not\fabandon chasing
its quarry until
it is caught.`,japanese:`まわりに　だれも　いないときだけは
怒るのを　やめている。しかし
それを　見るのは　難しい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",height:10,weight:320},{id:58,names:{korean:"가디",english:"Growlithe",japanese:"ガーディ"},descriptions:{korean:`사람을 잘 따르는 충실한 성격이다.
적에게는 짖거나 물며
쫓아내려고 한다.`,english:`Very protective
of its territory.
It will bark and\fbite to repel
intruders from
its space.`,japanese:`人懐こく　誠実な　性格。
敵には　ほえて　かみつき
追い払おうとする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",height:7,weight:190},{id:59,names:{korean:"윈디",english:"Arcanine",japanese:"ウインディ"},descriptions:{korean:`옛날부터 많은 사람의
마음을 사로잡은 아름다운 포켓몬이다.
날듯이 경쾌하게 달린다.`,english:`A POKéMON that
has been admired
since the past\ffor its beauty.
It runs agilely
as if on wings.`,japanese:`昔から　多くの　人を
虜にした　美しい　ポケモン。
飛ぶように　軽やかに　走る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",height:19,weight:1550},{id:60,names:{korean:"발챙이",english:"Poliwag",japanese:"ニョロモ"},descriptions:{korean:`매끄럽고 검은 피부는 얇고
축축하다. 내장 일부가
비쳐서 소용돌이 모양으로 보인다.`,english:`Its newly grown
legs prevent it
from running. It\fappears to prefer
swimming than
trying to stand.`,japanese:`スベスベした　黒い皮膚は　薄く
湿っている。内臓の　一部が
透けて　渦巻状に　見える。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",height:6,weight:124},{id:61,names:{korean:"슈륙챙이",english:"Poliwhirl",japanese:"ニョロゾ"},descriptions:{korean:`육지에서도 수중에서도 살 수 있다.
지상에서는 항상 땀을 흘려서
피부를 미끌미끌하게 하고 있다.`,english:`Capable of living
in or out of
water. When out\fof water, it
sweats to keep
its body slimy.`,japanese:`陸でも　水中でも　暮らせる。
地上では　いつも　汗をかき
皮膚を　ぬめぬめ　させている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",height:10,weight:200},{id:62,names:{korean:"강챙이",english:"Poliwrath",japanese:"ニョロボン"},descriptions:{korean:`강인한 근육을 가지고 있다.
태평양을 쉬지 않고
계속 헤엄칠 수 있다.`,english:`An adept swimmer
at both the front
crawl and breast\fstroke. Easily
overtakes the best
human swimmers.`,japanese:`強靭な　筋肉を　持つ。
太平洋を　休むことなく
泳ぎ続けることが　できるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",height:13,weight:540},{id:63,names:{korean:"캐이시",english:"Abra",japanese:"ケーシィ"},descriptions:{korean:`하루에 18시간은 자고 있다.
자는 동안에도 다양한
초능력을 사용한다.`,english:`Using its ability
to read minds, it
will identify\fimpending danger
and TELEPORT to
safety.`,japanese:`１日　１８時間は　寝ている。
眠ってる　あいだでも
さまざまな　超能力を　使う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",height:9,weight:195},{id:64,names:{korean:"윤겔라",english:"Kadabra",japanese:"ユンゲラー"},descriptions:{korean:`초능력을 발휘하면
강한 알파파를 내어
정밀 기계를 고장 내 버린다.`,english:`It emits special
alpha waves from
its body that\finduce headaches
just by being
close by.`,japanese:`超能力を　発揮すると
強い　アルファ波を　出して
精密機械を　壊してしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",height:13,weight:565},{id:65,names:{korean:"후딘",english:"Alakazam",japanese:"フーディン"},descriptions:{korean:`뇌세포는 항상 분열해서
죽을 때까지 늘어나기 때문에
모든 것을 기억해 놓을 수 있다.`,english:`Its brain can out­
perform a super­
computer.\fIts intelligence
quotient is said
to be 5,000.`,japanese:`脳細胞は　いつも　分裂して
死ぬまで　増え続けるので
あらゆることを　覚えておける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",height:15,weight:480},{id:66,names:{korean:"알통몬",english:"Machop",japanese:"ワンリキー"},descriptions:{korean:`데구리를 수없이 들었다 놨다 하며
전신의 근육을 단련한다.
모든 격투기를 사용한다.`,english:`Loves to build
its muscles.
It trains in all\fstyles of martial
arts to become
even stronger.`,japanese:`ゴローンを　何度も　上げ下ろしして
全身の　筋肉を　鍛える。
あらゆる　格闘技を　使う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",height:8,weight:195},{id:67,names:{korean:"근육몬",english:"Machoke",japanese:"ゴーリキー"},descriptions:{korean:`엄청나게 강한 육체를 지녔기 때문에
파워 세이브 벨트를 차서
힘을 제어하고 있다.`,english:`Its muscular body
is so powerful, it
must wear a power\fsave belt to be
able to regulate
its motions.`,japanese:`すごく　強靭な　肉体なので
パワーセーブ　ベルトを　つけて
強さを　制御している。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",height:15,weight:705},{id:68,names:{korean:"괴력몬",english:"Machamp",japanese:"カイリキー"},descriptions:{korean:`발달한 4개의 팔은
2초 동안 1000번의
펀치를 날릴 수 있다.`,english:`Using its heavy
muscles, it throws
powerful punches\fthat can send the
victim clear over
the horizon.`,japanese:`発達した　４本の　腕は
２秒間に　１０００発の　パンチを
繰り出すことができる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",height:16,weight:1300},{id:69,names:{korean:"모다피",english:"Bellsprout",japanese:"マダツボミ"},descriptions:{korean:`홀쭉한 체격이지만
먹이를 잡을 때의 움직임은
눈에 보이지 않을 정도로 빠르다.`,english:`A carnivorous
POKéMON that traps
and eats bugs.\fIt uses its root
feet to soak up
needed moisture.`,japanese:`ひょろっとした　体つきだが
獲物を　捕らえるときの　動きは
目にも　とまらないほど　素早い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",height:7,weight:40},{id:70,names:{korean:"우츠동",english:"Weepinbell",japanese:"ウツドン"},descriptions:{korean:`잎사귀 부분은 칼날이 되어
상대를 베어버린다. 입에서는
무엇이든 녹이는 액체를 뿜어낸다.`,english:`It spits out
POISONPOWDER to
immobilize the\fenemy and then
finishes it with
a spray of ACID.`,japanese:`葉っぱの　部分は　カッターになって
相手を　切り裂く。口からは
なんでも　溶かす　液体を　吐く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",height:10,weight:64},{id:71,names:{korean:"우츠보트",english:"Victreebel",japanese:"ウツボット"},descriptions:{korean:`정글의 안쪽에 우츠보트만
있는 지대가 있어서
한 번 가면 두 번 다시 돌아올 수 없다.`,english:`Said to live in
huge colonies
deep in jungles,\falthough no one
has ever returned
from there.`,japanese:`ジャングルの　奥地に　ウツボット
ばかり　いる　地帯が　あって
行ったら　２度と　帰ってこれない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",height:17,weight:155},{id:72,names:{korean:"왕눈해",english:"Tentacool",japanese:"メノクラゲ"},descriptions:{korean:`몸 대부분이 수분이다.
수정 같은 눈에서
이상한 빔을 발사한다.`,english:`Drifts in shallow
seas. Anglers who
hook them by\faccident are
often punished by
its stinging acid.`,japanese:`体の　ほとんどが　水分。
水晶のような　目玉から
不思議な　ビームを　発射する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",height:9,weight:455},{id:73,names:{korean:"독파리",english:"Tentacruel",japanese:"ドククラゲ"},descriptions:{korean:`촉수는 평소에는 짧고
먹이를 찌를 때
길게 늘어나 휘감는다.`,english:`The tentacles are
normally kept
short. On hunts,\fthey are extended
to ensnare and
immobilize prey.`,japanese:`触手は　普段　短くて
獲物を　刺すときに
長く　伸びて　絡みつくのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",height:16,weight:550},{id:74,names:{korean:"꼬마돌",english:"Geodude",japanese:"イシツブテ"},descriptions:{korean:`초원이나 산에 서식한다.
돌멩이와 닮은 탓에 알아채지 못하고
밟거나 발이 걸려 넘어지기도 한다.`,english:`Found in fields
and mountains.
Mistaking them\ffor boulders,
people often step
or trip on them.`,japanese:`草原や　山に　生息する。
石ころに　似ていて　気がつかず
踏んだり　つまずいたりしてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",height:4,weight:200},{id:75,names:{korean:"데구리",english:"Graveler",japanese:"ゴローン"},descriptions:{korean:`산에서 굴러 떨어질 때
몸의 여기저기가 부서져도
신경 쓰지 않는 호쾌한 성격이다.`,english:`Rolls down slopes
to move. It rolls
over any obstacle\fwithout slowing
or changing its
direction.`,japanese:`山から　転がり　落ちるとき
体の　あちこちが　取れても
気にしない　豪快な　性格。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",height:10,weight:1050},{id:76,names:{korean:"딱구리",english:"Golem",japanese:"ゴローニャ"},descriptions:{korean:`산 정상에서 산기슭까지 이어지는
움푹 패인 홈은 딱구리가 굴러
다니는 길이므로 주의가 필요하다.`,english:`Its boulder-like
body is extremely
hard. It can\feasily withstand
dynamite blasts
without damage.`,japanese:`山頂から　ふもとまで　続く　溝は
ゴローニャが　転がり落ちる
通り道なので　要注意。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",height:14,weight:3e3},{id:77,names:{korean:"포니타",english:"Ponyta",japanese:"ポニータ"},descriptions:{korean:`막 태어나서는 겨우 일어설 수 있을
정도이지만 많이 달리면 하반신이
단련되어 달리는 속도가 빨라진다.`,english:`Its hooves are 10
times harder than
diamonds. It can\ftrample anything
completely flat
in little time.`,japanese:`生まれたばかりでは　立つのがやっと。
だが　走るほどに　足腰は
鍛えられて　速度が　増していく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",height:10,weight:300},{id:78,names:{korean:"날쌩마",english:"Rapidash",japanese:"ギャロップ"},descriptions:{korean:`빠르게 움직이는 물체를 보면
경주를 하고 싶어져서 맹렬한
스피드로 쫓아가기 시작한다.`,english:`Very competitive,
this POKéMON will
chase anything\fthat moves fast
in the hopes of
racing it.`,japanese:`速く　動く　物体を　見ると
競争したくなり　猛烈な
スピードで　追いかけはじめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",height:17,weight:950},{id:79,names:{korean:"야돈",english:"Slowpoke",japanese:"ヤドン"},descriptions:{korean:`항상 멍하니 있으므로 무슨
생각을 하고 있는지 알 수 없다.
꼬리로 먹이를 낚는 것이 특기다.`,english:`Incredibly slow
and dopey. It
takes 5 seconds\ffor it to feel
pain when under
attack.`,japanese:`いつも　ボーッとしていて　なにを
考えているか　わからない。
尻尾で　エサを　釣るのが　得意。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",height:12,weight:360},{id:80,names:{korean:"야도란",english:"Slowbro",japanese:"ヤドラン"},descriptions:{korean:`붙어 있는 셀러는
꼬리에서 배어 나오는 맛을
좋아해서 계속 떨어지지 않는다.`,english:`The SHELLDER that
is latched onto
SLOWPOKE's tail\fis said to feed
on the host's left
over scraps.`,japanese:`くっついている　シェルダーは
尻尾から　にじみ出る　うま味が
欲しくて　ずっと　離れない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",height:16,weight:785},{id:81,names:{korean:"코일",english:"Magnemite",japanese:"コイル"},descriptions:{korean:`좌우의 유닛에서
중력을 차단하는 힘을
발휘하기에 공중에 뜰 수 있다.`,english:`Uses anti-gravity
to stay suspended.
Appears without\fwarning and uses
THUNDER WAVE and
similar moves.`,japanese:`左右の　ユニットから
重力を　さえぎる　力を
出すので　空中に　浮かべる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",height:3,weight:60},{id:82,names:{korean:"레어코일",english:"Magneton",japanese:"レアコイル"},descriptions:{korean:`다수의 코일이 연결되어
강력한 자기장과
높은 전압을 방사한다.`,english:`Formed by several
MAGNEMITEs linked
together. They\ffrequently appear
when sunspots
flare up.`,japanese:`複数の　コイルが　連結して
強力な　磁力線と
高電圧を　放射する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",height:10,weight:600},{id:83,names:{korean:"파오리",english:"Farfetch’d",japanese:"カモネギ"},descriptions:{korean:`가지고 있는 파 줄기는 소중한
무기이기도 하며 칼을 휘두르듯
다양한 것을 자를 수 있다.`,english:`The sprig of
green onions it
holds is its\fweapon. It is
used much like a
metal sword.`,japanese:`持っている　茎は　大切な
武器でもあり　刀を　振るように
いろんな　ものを　切ることができる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",height:8,weight:150},{id:84,names:{korean:"두두",english:"Doduo",japanese:"ドードー"},descriptions:{korean:`돌연변이로 발견된
두 개의 머리를 지닌 포켓몬이다.
시속 100km로 달린다.`,english:`A bird that makes
up for its poor
flying with its\ffast foot speed.
Leaves giant
footprints.`,japanese:`突然変異で　見つかった
２つの　頭を　持つ　ポケモン。
時速１００キロで　走る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",height:14,weight:392},{id:85,names:{korean:"두트리오",english:"Dodrio",japanese:"ドードリオ"},descriptions:{korean:`3개의 머리가 보고 있는 앞에서
조금이라도 빈틈을 보이면
부리로 격렬하게 쪼아댄다.`,english:`Uses its three
brains to execute
complex plans.\fWhile two heads
sleep, one head
stays awake.`,japanese:`３つの　頭が　見ている前で
わずかでも　すきを　見せると
クチバシで　激しく　つつかれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",height:18,weight:852},{id:86,names:{korean:"쥬쥬",english:"Seel",japanese:"パウワウ"},descriptions:{korean:`빙산에 사는 포켓몬이다.
머리의 뾰족하게 돌출된 부분으로
얼음을 깨고 바다를 헤엄친다.`,english:`The protruding
horn on its head
is very hard.\fIt is used for
bashing through
thick ice.`,japanese:`氷山で　暮らす　ポケモン。
頭の　とがった　でっぱりで
氷を　割って　海を　泳ぐ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",height:11,weight:900},{id:87,names:{korean:"쥬레곤",english:"Dewgong",japanese:"ジュゴン"},descriptions:{korean:`전신이 새하얀 털로
뒤덮여 있다. 추위에 강해서
오히려 추울수록 힘이 넘쳐 난다.`,english:`Stores thermal
energy in its
body. Swims at a\fsteady 8 knots
even in intensely
cold waters.`,japanese:`全身が　真っ白な　毛で
覆われている。寒さに　強く
むしろ　寒いほど　元気になる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",height:17,weight:1200},{id:88,names:{korean:"질퍽이",english:"Grimer",japanese:"ベトベター"},descriptions:{korean:`달로부터의 X선을 쬔
오물이 질퍽이로 변화했다.
더러운 것을 좋아한다.`,english:`Appears in filthy
areas. Thrives by
sucking up\fpolluted sludge
that is pumped
out of factories.`,japanese:`月からの　エックス線を　浴びた
ヘドロが　ベトベターに　変化した。
汚いものが　大好物。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",height:9,weight:300},{id:89,names:{korean:"질뻐기",english:"Muk",japanese:"ベトベトン"},descriptions:{korean:`진흙이 쌓여 악취가 나는 장소를
좋아해서 모여들기 때문에
주변은 더욱 악취가 난다.`,english:`Thickly covered
with a filthy,
vile sludge. It\fis so toxic, even
its footprints
contain poison.`,japanese:`ヘドロが　たまる　くさい　場所を
好んで　集まってくるので
あたりは　いっそう　くさくなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",height:12,weight:300},{id:90,names:{korean:"셀러",english:"Shellder",japanese:"シェルダー"},descriptions:{korean:`단단한 껍데기는 어떤 공격도
튕겨낸다. 껍데기를 벌리고 있을 때
안쪽을 공격당하는 것에는 약하다.`,english:`Its hard shell
repels any kind
of attack.\fIt is vulnerable
only when its
shell is open.`,japanese:`硬い　殻は　どんな　攻撃も
跳ね返す。開いたときに
中を　攻撃されると　弱い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",height:3,weight:40},{id:91,names:{korean:"파르셀",english:"Cloyster",japanese:"パルシェン"},descriptions:{korean:`조수의 흐름이 격한 바다에
서식하고 있는 파르셀의
껍질의 가시는 크고 날카롭다.`,english:`When attacked, it
launches its
horns in quick\fvolleys. Its
innards have
never been seen.`,japanese:`潮の　流れが　激しい　海に
生息している　パルシェンの
殻の　トゲは　大きく　鋭い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",height:15,weight:1325},{id:92,names:{korean:"고오스",english:"Gastly",japanese:"ゴース"},descriptions:{korean:`가스로 만들어진 몸은
어떠한 크기의 상대라도
둘러싸서 숨을 못 쉬게 한다.`,english:`Almost invisible,
this gaseous
POKéMON cloaks\fthe target and
puts it to sleep
without notice.`,japanese:`ガスでできた　薄い　体は
どんな　大きさの　相手も
包みこみ　息の根を　止める。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",height:13,weight:1},{id:93,names:{korean:"고우스트",english:"Haunter",japanese:"ゴースト"},descriptions:{korean:`어둠 속에서 아무도 없는데도
누군가가 보고 있다는 느낌이 들면
그곳에 고우스트가 있는 것이다.`,english:`Because of its
ability to slip
through block\fwalls, it is said
to be from an­
other dimension.`,japanese:`暗闇で　だれもいないのに
見られているような　気がしたら
そこに　ゴーストが　いるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",height:16,weight:1},{id:94,names:{korean:"팬텀",english:"Gengar",japanese:"ゲンガー"},descriptions:{korean:`그림자에 모습을 숨긴다.
팬텀이 숨어 있는 방은
온도가 5도 내려간다고 전해진다.`,english:`Under a full moon,
this POKéMON
likes to mimic\fthe shadows of
people and laugh
at their fright.`,japanese:`物陰に　姿を　隠す。
ゲンガーの　潜んでいる　部屋は
温度が　５度　下がるといわれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",height:15,weight:405},{id:95,names:{korean:"롱스톤",english:"Onix",japanese:"イワーク"},descriptions:{korean:`땅속을 엄청난 기세로
뚫고 나아가며 먹이를 찾는다. 지나간
곳은 디그다의 보금자리가 된다.`,english:`As it grows, the
stone portions of
its body harden\fto become similar
to a diamond, but
colored black.`,japanese:`地中を　ものすごい　勢いで
掘りすすみ　エサを　探す。通った
跡は　ディグダの　住処になる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",height:88,weight:2100},{id:96,names:{korean:"슬리프",english:"Drowzee",japanese:"スリープ"},descriptions:{korean:`잠들게 한 뒤 꿈을 먹지만
나쁜 꿈만 먹고 있으면
배탈이 날 때도 있는 것 같다.`,english:`Puts enemies to
sleep then eats
their dreams.\fOccasionally gets
sick from eating
bad dreams.`,japanese:`眠らせては　夢を　食べるが
悪い　夢ばかり　食べてると
お腹を　壊すことが　あるらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",height:10,weight:324},{id:97,names:{korean:"슬리퍼",english:"Hypno",japanese:"スリーパー"},descriptions:{korean:`추 같은 것을 들고 다닌다.
어린아이에게 최면술을 걸어
어딘가로 데려가 버린 사건이 있었다.`,english:`When it locks eyes
with an enemy, it
will use a mix of\fPSI moves such as
HYPNOSIS and
CONFUSION.`,japanese:`振り子のようなものを　持ち歩く。
子供に　催眠術を　かけて
どこかへ　連れ去る　事件があった。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",height:16,weight:756},{id:98,names:{korean:"크랩",english:"Krabby",japanese:"クラブ"},descriptions:{korean:`위험이 닥치면 입에서 뿜어내는
거품으로 전신을 감싸서
몸을 크게 보이려고 한다.`,english:`Its pincers are
not only powerful
weapons, they are\fused for balance
when walking
sideways.`,japanese:`危険が　迫ると　口から　吐き出す
泡で　全身を　包んで
体を　大きく　みせようとする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",height:4,weight:65},{id:99,names:{korean:"킹크랩",english:"Kingler",japanese:"キングラー"},descriptions:{korean:`단단한 집게는 1만 마력의
파워를 지녔지만
너무 커서 움직임이 둔하다.`,english:`The large pincer
has 10000 hp of
crushing power.\fHowever, its huge
size makes it
unwieldy to use.`,japanese:`硬い　ハサミは　１万馬力の
パワーを　持っているが
大きすぎて　動きが　鈍い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",height:13,weight:600},{id:100,names:{korean:"찌리리공",english:"Voltorb",japanese:"ビリリダマ"},descriptions:{korean:`몬스터볼이 팔리기 시작했을 때와
같은 시기에 발견되었다.
뭔가 관계가 있다고 전해진다.`,english:`Usually found in
power plants.
Easily mistaken\ffor a POKé BALL,
they have zapped
many people.`,japanese:`モンスターボールが　売り出されたのと
同じ　時期に　発見された。
なにか　関係があると　いわれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",height:5,weight:104},{id:101,names:{korean:"붐볼",english:"Electrode",japanese:"マルマイン"},descriptions:{korean:`작은 자극에도 반응해서
폭발한다. 폭탄볼이라 불리며
두려움의 대상이 되고 있다.`,english:`It stores electric
energy under very
high pressure.\fIt often explodes
with little or no
provocation.`,japanese:`少しの　刺激に　反応して
爆発する。バクダンボールという
あだ名で　怖がられている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",height:12,weight:666},{id:102,names:{korean:"아라리",english:"Exeggcute",japanese:"タマタマ"},descriptions:{korean:`텔레파시로 대화를 하기 때문에
아라리를 갈라놓으려 해도
바로 모여들어 6마리가 된다.`,english:`Often mistaken
for eggs.
When disturbed,\fthey quickly
gather and attack
in swarms.`,japanese:`テレパシーで　会話をしているため
タマタマを　引き離そうとしても
すぐに　集まって　６匹になる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",height:4,weight:25},{id:103,names:{korean:"나시",english:"Exeggutor",japanese:"ナッシー"},descriptions:{korean:`3개의 머리는 생각하는 것이
각각 다르지만 사이가 좋아서
싸우지 않는 것 같다.`,english:`Legend has it that
on rare occasions,
one of its heads\fwill drop off and
continue on as an
EXEGGCUTE.`,japanese:`３つの　頭は　考えることは
別々でも　仲良しなので
ケンカしたり　しないらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",height:20,weight:1200},{id:104,names:{korean:"탕구리",english:"Cubone",japanese:"カラカラ"},descriptions:{korean:`죽은 어미의 해골을
머리에 쓰고 있다. 외로울 때는
큰 소리로 운다고 한다.`,english:`Because it never
removes its skull
helmet, no one\fhas ever seen
this POKéMON's
real face.`,japanese:`死に別れた　母親の　骨を
頭に　覆っている。寂しいとき
大声で　泣くという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",height:4,weight:65},{id:105,names:{korean:"텅구리",english:"Marowak",japanese:"ガラガラ"},descriptions:{korean:`몸집도 작으며 원래는
약했다. 뼈를 쓰기 시작하면서
성격이 흉포해졌다.`,english:`The bone it holds
is its key weapon.
It throws the\fbone skillfully
like a boomerang
to KO targets.`,japanese:`体も　小さく　もともと　弱かった。
骨を　使うようになり
性格が　凶暴化した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",height:10,weight:450},{id:106,names:{korean:"시라소몬",english:"Hitmonlee",japanese:"サワムラー"},descriptions:{korean:`다리를 자유자재로 늘였다 줄였다 한다.
멀리 떨어져 있을 때도
상대를 차올릴 수 있다.`,english:`When in a hurry,
its legs lengthen
progressively.\fIt runs smoothly
with extra long,
loping strides.`,japanese:`脚が　自由に　伸び縮みして
遠く　離れている　場合でも
相手を　蹴り上げることができる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",height:15,weight:498},{id:107,names:{korean:"홍수몬",english:"Hitmonchan",japanese:"エビワラー"},descriptions:{korean:`팔을 비틀며 날리는 펀치는
콘크리트도 부스러뜨린다.
3분 싸우면 잠시 쉰다.`,english:`While apparently
doing nothing, it
fires punches in\flightning fast
volleys that are
impossible to see.`,japanese:`腕を　ねじりながら　繰り出す
パンチは　コンクリートも　粉砕。
３分　戦うと　ひとやすみする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",height:14,weight:502},{id:108,names:{korean:"내루미",english:"Lickitung",japanese:"ベロリンガ"},descriptions:{korean:`긴 혀는 끈적끈적한
침으로 덮여 있다. 어떤 것이든
달라붙어서 매우 편리하다.`,english:`Its tongue can be
extended like a
chameleon's. It\fleaves a tingling
sensation when it
licks enemies.`,japanese:`長い　舌は　ねばねばした
だえきで　べっとり。どんなものでも
くっついて　とても　便利。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",height:12,weight:655},{id:109,names:{korean:"또가스",english:"Koffing",japanese:"ドガース"},descriptions:{korean:`얇고 풍선 같은 몸에
맹독 가스가 차있다.
가까이 오면 역겨운 냄새가 난다.`,english:`Because it stores
several kinds of
toxic gases in\fits body, it is
prone to exploding
without warning.`,japanese:`薄い　バルーン状の　体に
猛毒の　ガスが　つまっている。
近くに　来ると　くさい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",height:6,weight:10},{id:110,names:{korean:"또도가스",english:"Weezing",japanese:"マタドガス"},descriptions:{korean:`한쪽이 부풀어 오르면 다른 한쪽은
오그라드는 쌍둥이 또가스. 항상
체내의 독가스를 섞고 있다.`,english:`Where two kinds
of poison gases
meet, 2 KOFFINGs\fcan fuse into a
WEEZING over many
years.`,japanese:`どちらかが　ふくらむと　片方は
しぼむ　双子の　ドガース。いつも
体内の　毒ガスを　混ぜている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",height:12,weight:95},{id:111,names:{korean:"뿔카노",english:"Rhyhorn",japanese:"サイホーン"},descriptions:{korean:`머리는 나쁘지만 힘이 세서
고층 빌딩도 몸통박치기로
산산조각 낸다.`,english:`A POKéMON with a
one-track mind.
Once it charges, \fit won't stop
running until it
falls asleep.`,japanese:`頭は　悪いが　力が　強く
高層ビルも　体当たりで
コナゴナに　粉砕する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",height:10,weight:1150},{id:112,names:{korean:"코뿌리",english:"Rhydon",japanese:"サイドン"},descriptions:{korean:`전신을 갑옷 같은 피부로
보호하고 있다. 2000도의
마그마 속에서도 살 수 있다.`,english:`Protected by an
armor-like hide,
it is capable of\fliving in molten
lava of 3,600
degrees.`,japanese:`全身を　よろいのような　皮膚で
守っている。２０００度の
マグマの　中でも　生きられる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",height:19,weight:1200},{id:113,names:{korean:"럭키",english:"Chansey",japanese:"ラッキー"},descriptions:{korean:`행복을 가져다준다고 전해진다.
상처 입은 사람에게 알을
나눠주는 상냥한 포켓몬이다.`,english:`A rare and elusive
POKéMON that is
said to bring\fhappiness to those
who manage to get
it.`,japanese:`幸せを　運ぶと　いわれている。
傷ついた　人に　タマゴを
分けてあげる　優しい　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",height:11,weight:346},{id:114,names:{korean:"덩쿠리",english:"Tangela",japanese:"モンジャラ"},descriptions:{korean:`수많은 움직이는 덩굴에
둘러싸여 정체불명이다.
파란 덩굴은 평생 자란다.`,english:`The whole body is
swathed with wide
vines that are\fsimilar to sea­
weed. Its vines
shake as it walks.`,japanese:`たくさんの　うごめく　ツルに
覆われて　正体不明。
青いツルは　一生　伸びる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",height:10,weight:350},{id:115,names:{korean:"캥카",english:"Kangaskhan",japanese:"ガルーラ"},descriptions:{korean:`배의 주머니에서 새끼를 키운다.
안전할 때만 새끼를
주머니에서 꺼내어 놀게 한다.`,english:`The infant rarely
ventures out of
its mother's\fprotective pouch
until it is 3
years old.`,japanese:`お腹の　袋で　子育てをする。
安全な　ときだけ　子供を
袋から　出して　遊ばせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",height:22,weight:800},{id:116,names:{korean:"쏘드라",english:"Horsea",japanese:"タッツー"},descriptions:{korean:`수면에서 힘차게 먹물을
발사해서 날고 있는 벌레를
맞춰서 떨어뜨릴 때가 있다고 한다.`,english:`Known to shoot
down flying bugs
with precision\fblasts of ink
from the surface
of the water.`,japanese:`水面から　勢いよく　墨を　発射して
飛んでいる　虫を
撃ち落とすことがあるという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",height:4,weight:80},{id:117,names:{korean:"시드라",english:"Seadra",japanese:"シードラ"},descriptions:{korean:`섣불리 만지려고 하면
몸 전체에서 돋아나는 가시에
찔려 기절할 수도 있다.`,english:`Capable of swim­
ming backwards by
rapidly flapping\fits wing-like
pectoral fins and
stout tail.`,japanese:`うかつに　触ろうとすると
体中に　生える　トゲに　刺されて
気絶することもある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",height:12,weight:250},{id:118,names:{korean:"콘치",english:"Goldeen",japanese:"トサキント"},descriptions:{korean:`5노트의 스피드로 헤엄친다.
몸에 위험을 느끼면
날카로운 뿔로 반격한다.`,english:`Its tail fin
billows like an
elegant ballroom\fdress, giving it
the nickname of
the Water Queen.`,japanese:`５ノットの　スピードで　泳ぐ。
身の　危険を　感じると
鋭い　ツノで　反撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",height:6,weight:150},{id:119,names:{korean:"왕콘치",english:"Seaking",japanese:"アズマオウ"},descriptions:{korean:`가을이 오면 산란을 위해
힘차게 강물을 거슬러 올라가며
헤엄치는 모습을 볼 수 있다.`,english:`In the autumn spawning season, they can
be seen swimming powerfully up rivers and
creeks.`,japanese:`秋が　くると　産卵のために
流れに　逆らって　力強く
川を　泳ぐ　姿が　みられる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",height:13,weight:390},{id:120,names:{korean:"별가사리",english:"Staryu",japanese:"ヒトデマン"},descriptions:{korean:`몸의 중심에서 빛나는
핵이 있는 한 몸이
찢겨나가도 재생할 수 있다.`,english:`If its body is torn, it can grow
back if the red core remains.
The core flashes at midnight.`,japanese:`体の　中心で　光る
コアが　ある限り
体が　ちぎれても　再生できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",height:8,weight:345},{id:121,names:{korean:"아쿠스타",english:"Starmie",japanese:"スターミー"},descriptions:{korean:`코어라고 불리는 중심 부분은
일곱 빛깔로 빛난다. 이것을
보석으로 삼는 사람도 있다고 한다.`,english:`Its central core
glows with the
seven colors of\fthe rainbow. Some
people value the
core as a gem.`,japanese:`真ん中の　コアと呼ばれる　部分は
七色に　輝く。これを
宝石にする　人も　いるという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",height:11,weight:800},{id:122,names:{korean:"마임맨",english:"Mr. Mime",japanese:"バリヤード"},descriptions:{korean:`손가락 끝에서 내는 파동이
공기를 굳혀서 벽을 만든다.
격렬한 공격도 튕겨 낸다.`,english:`If interrupted
while it is
miming, it will\fslap around the
offender with its
broad hands.`,japanese:`指先から　出す　波動が
空気を　固めて　壁を　作る。
激しい　攻撃も　跳ね返す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",height:13,weight:545},{id:123,names:{korean:"스라크",english:"Scyther",japanese:"ストライク"},descriptions:{korean:`풀숲에서 갑자기 튀어나와
예리한 낫으로 베어 가르는 모습은
마치 닌자 같다.`,english:`With ninja-like
agility and speed,
it can create the\fillusion that
there is more
than one.`,japanese:`鋭い　カマで　獲物を　切り裂き
息の根を　止める。ごくまれに
羽を　使って　飛ぶ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",height:15,weight:560},{id:124,names:{korean:"루주라",english:"Jynx",japanese:"ルージュラ"},descriptions:{korean:`허리를 흔드는 듯이 걷고 있다.
방심하면 엉겁결에 따라서
춤춰버린다고 한다.`,english:`It seductively
wiggles its hips
as it walks. It\fcan cause people
to dance in
unison with it.`,japanese:`腰を　振るように　歩いている。
油断をすると　思わず　釣られて
踊ってしまうという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",height:14,weight:406},{id:125,names:{korean:"에레브",english:"Electabuzz",japanese:"エレブー"},descriptions:{korean:`몸의 표면에는 전기가
흐르고 있다. 주변이 어두우면
전신이 푸르스름하게 빛난다.`,english:`Normally found
near power plants,
they can wander\faway and cause
major blackouts
in cities.`,japanese:`体の　表面には　電気が
流れている。あたりが　暗いと
全身が　青白く　光るのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",height:11,weight:300},{id:126,names:{korean:"마그마",english:"Magmar",japanese:"ブーバー"},descriptions:{korean:`화산의 분화구 근처에서
발견되었다. 입에서 불꽃을 뿜어낸다.
체온은 1200도나 된다.`,english:`Its body always
burns with an
orange glow that\fenables it to
hide perfectly
among flames.`,japanese:`火山の　火口近くで　見つかった。
口から　炎を　吐く。
体温は　１２００度もある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",height:13,weight:445},{id:127,names:{korean:"쁘사이저",english:"Pinsir",japanese:"カイロス"},descriptions:{korean:`2개의 뿔 사이에 먹이를 끼우고
조각날 때까지 놓지 않는다. 조각나지
않으면 저편으로 세게 내던진다.`,english:`If it fails to
crush the victim
in its pincers,\fit will swing it
around and toss
it hard.`,japanese:`２本の　ツノで　獲物を　挟んで
ちぎれるまで　放さない。ちぎれない
ときは　かなたまで　投げ飛ばすのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",height:15,weight:550},{id:128,names:{korean:"켄타로스",english:"Tauros",japanese:"ケンタロス"},descriptions:{korean:`3개의 꼬리로 자신을 때려서
투지가 끓어오르면
전속력으로 돌진해온다.`,english:`When it targets
an enemy, it
charges furiously\fwhile whipping its
body with its
long tails.`,japanese:`３本の　尻尾で　自分を　たたき
戦う　気持ちを　高めると
全速力で　突っこんでくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",height:14,weight:884},{id:129,names:{korean:"잉어킹",english:"Magikarp",japanese:"コイキング"},descriptions:{korean:`힘도 스피드도 거의 없다.
세상에서 가장 약하고
한심한 포켓몬이다.`,english:`In the distant
past, it was
somewhat stronger\fthan the horribly
weak descendants
that exist today.`,japanese:`力も　スピードも　ほとんど　ダメ。
世界で　一番　弱くて
情けない　ポケモンだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",height:9,weight:100},{id:130,names:{korean:"갸라도스",english:"Gyarados",japanese:"ギャラドス"},descriptions:{korean:`분쟁이 일어난 마을을
다 태워버렸다는 기록이
고문서에 남아 있다.`,english:`Once it begins to rampage, a
GYARADOS will burn everything
down, even in a harsh storm.`,japanese:`争いの　起こった　村を
焼きつくしたという　記録が
古文書に　残されている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",height:65,weight:2350},{id:131,names:{korean:"라프라스",english:"Lapras",japanese:"ラプラス"},descriptions:{korean:`부드러운 마음의 소유자다.
좀처럼 다투지 않아 많이
잡혔기 때문에 수가 줄었다.`,english:`A POKéMON that
has been over­
hunted almost to\fextinction. It
can ferry people
across the water.`,japanese:`優しい　心の　持ち主。
めったに　争わないため　たくさん
捕まえられ　数が　減った。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",height:25,weight:2200},{id:132,names:{korean:"메타몽",english:"Ditto",japanese:"メタモン"},descriptions:{korean:`전신의 세포를 재구성해서
본 것의 모양과 똑 닮게
변신하는 능력을 가지고 있다.`,english:`Capable of copying
an enemy's genetic
code to instantly\ftransform itself
into a duplicate
of the enemy.`,japanese:`全身の　細胞を　組み替えて
見たものの　形　そっくりに
変身する　能力を　持つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",height:3,weight:40},{id:133,names:{korean:"이브이",english:"Eevee",japanese:"イーブイ"},descriptions:{korean:`진화할 때 모습과 능력이
바뀜으로써 혹독한 환경에
적응하는 희귀한 포켓몬이다.`,english:`Its genetic code
is irregular.
It may mutate if\fit is exposed to
radiation from
element STONEs.`,japanese:`進化のとき　姿と　能力が
変わることで　きびしい　環境に
対応する　珍しい　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",height:3,weight:65},{id:134,names:{korean:"샤미드",english:"Vaporeon",japanese:"シャワーズ"},descriptions:{korean:`아름다운 물가를 좋아한다.
세포가 물의 분자구조와 닮아서
물에 녹는 것도 가능하다.`,english:`Lives close to
water. Its long
tail is ridged\fwith a fin which
is often mistaken
for a mermaid's.`,japanese:`きれいな　水辺を　好んでいる。
細胞が　水の　分子に　似ており
水に　溶けることもできる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",height:10,weight:290},{id:135,names:{korean:"쥬피썬더",english:"Jolteon",japanese:"サンダース"},descriptions:{korean:`체내에 전기가 모이면
전신의 털이 모두
날카롭게 곤두서기 시작한다.`,english:`It accumulates
negative ions in
the atmosphere to\fblast out 10000-
volt lightning
bolts.`,japanese:`体内に　電気が　たまると
全身の　体毛が　全部
鋭く　とがりはじめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",height:8,weight:245},{id:136,names:{korean:"부스터",english:"Flareon",japanese:"ブースター"},descriptions:{korean:`체내에 불꽃 주머니를 가지고 있다.
싸움이 시작되기 직전에는
체온이 900도까지 올라간다.`,english:`When storing
thermal energy in
its body, its\ftemperature could
soar to over 1600
degrees.`,japanese:`体内に　炎袋を　持つ。
戦いが　はじまる　直前には
体温が　９００度まで　上がる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",height:9,weight:250},{id:137,names:{korean:"폴리곤",english:"Porygon",japanese:"ポリゴン"},descriptions:{korean:`연구 끝에 태어난
인공 포켓몬이다. 기본적인
동작만 프로그램되어 있다.`,english:`A POKéMON that
consists entirely
of programming\fcode. Capable of
moving freely in
cyberspace.`,japanese:`研究の末　生み出された
人工の　ポケモン。基本的な
動作しか　プログラムされていない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",height:8,weight:365},{id:138,names:{korean:"암나이트",english:"Omanyte",japanese:"オムナイト"},descriptions:{korean:`먼 옛날 바다에서 살고 있던
고대 포켓몬. 10개의 다리를
구불거리며 헤엄친다.`,english:`Although long
extinct, in rare
cases, it can be\fgenetically
resurrected from
fossils.`,japanese:`大昔　海に　住んでいた
古代ポケモン。１０本の　脚を
くねらせて　泳ぐ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",height:4,weight:75},{id:139,names:{korean:"암스타",english:"Omastar",japanese:"オムスター"},descriptions:{korean:`촉수가 팔다리처럼
발달해 있다.
달라붙자마자 문다.`,english:`A prehistoric
POKéMON that died
out when its\fheavy shell made
it impossible to
catch prey.`,japanese:`触手が　手足のように
発達している。しがみつくと
同時に　かみついてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",height:10,weight:350},{id:140,names:{korean:"투구",english:"Kabuto",japanese:"カブト"},descriptions:{korean:`3억 년 전에 모래 해변에서
살고 있었던 것으로 추측된다.
단단한 껍질이 몸을 보호한다.`,english:`A POKéMON that
was resurrected
from a fossil\ffound in what was
once the ocean
floor eons ago.`,japanese:`３億年前の　砂浜で
暮らしていたと　考えられている。
硬い　殻が　身を　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",height:5,weight:115},{id:141,names:{korean:"투구푸스",english:"Kabutops",japanese:"カブトプス"},descriptions:{korean:`수중을 이동할 때
손발을 작게 접고
등껍질을 구부려 빠르게 헤엄친다.`,english:`Its sleek shape is
perfect for swim­
ming. It slashes\fprey with its
claws and drains
the body fluids.`,japanese:`水中を　移動するとき
手足を　小さく　折りたたみ
甲羅を　くねらせ　速く　泳ぐ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",height:13,weight:405},{id:142,names:{korean:"프테라",english:"Aerodactyl",japanese:"プテラ"},descriptions:{korean:`호박에 남아 있던 공룡의
유전자에서 부활시켰다.
높은 소리로 울며 난다.`,english:`A Pokémon that roamed the skies
in the dinosaur era. Its teeth are
like saw blades.`,japanese:`こはくに　残された　恐竜の
遺伝子から　復活させた。
高い　声で　鳴きながら　飛ぶ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",height:18,weight:590},{id:143,names:{korean:"잠만보",english:"Snorlax",japanese:"カビゴン"},descriptions:{korean:`하루에 먹을 것을 400kg
먹지 않으면 성에 차지 않는다.
다 먹으면 잠이 들어 버린다.`,english:`Very lazy. Just
eats and sleeps.
As its rotund\fbulk builds, it
becomes steadily
more slothful.`,japanese:`１日に　食べ物を　４００キロ
食べないと　気がすまない。
食べ終わると　眠ってしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",height:21,weight:4600},{id:144,names:{korean:"프리져",english:"Articuno",japanese:"フリーザー"},descriptions:{korean:`전설의 새포켓몬이다.
공기 중의 수분을 얼려
눈보라를 만들어 낼 수 있다.`,english:`A legendary bird
POKéMON that is
said to appear to\fdoomed people who
are lost in icy
mountains.`,japanese:`伝説の　とりポケモン。
空気中の　水分を　凍らせ
吹雪を　作り出すことが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",height:17,weight:554},{id:145,names:{korean:"썬더",english:"Zapdos",japanese:"サンダー"},descriptions:{korean:`구름 위에서 거대한
번개를 내리치며 나타난다.
전설의 새포켓몬이다.`,english:`A legendary bird
POKéMON that is
said to appear\ffrom clouds while
dropping enormous
lightning bolts.`,japanese:`雲の　上から　巨大な　稲妻を
落としながら　現れる
伝説の　とりポケモンである。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",height:16,weight:526},{id:146,names:{korean:"파이어",english:"Moltres",japanese:"ファイヤー"},descriptions:{korean:`오래전부터 불새의 전설로
알려져 있다. 날갯짓할 때마다
날개가 눈부시게 불타올라서 아름답다.`,english:`Known as the
legendary bird of
fire. Every flap\fof its wings
creates a dazzling
flash of flames.`,japanese:`昔から　火の鳥伝説として
知られる。羽ばたくたびに　羽が
明るく　燃え上がり　美しい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",height:20,weight:600},{id:147,names:{korean:"미뇽",english:"Dratini",japanese:"ミニリュウ"},descriptions:{korean:`목격자가 적기 때문에
환상의 포켓몬이라고 불리고 있다.
탈피한 껍질이 발견되고 있다.`,english:`Long considered a
mythical POKéMON
until recently\fwhen a small
colony was found
living underwater.`,japanese:`目撃者が　少ないために
幻のポケモンと　呼ばれていた。
脱皮した　皮が　見つかっている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",height:18,weight:33},{id:148,names:{korean:"신뇽",english:"Dragonair",japanese:"ハクリュー"},descriptions:{korean:`수정 같은 구슬에는
날씨를 자유롭게 조종하는
능력이 담겨 있는 듯하다.`,english:`A mystical POKéMON
that exudes a
gentle aura.\fHas the ability
to change climate
conditions.`,japanese:`水晶のような　玉には
天候を　自由に　操る
能力が　秘められているらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",height:40,weight:165},{id:149,names:{korean:"망나뇽",english:"Dragonite",japanese:"カイリュー"},descriptions:{korean:`커다란 몸집으로 하늘을 난다.
지구를 약 16시간 만에
일주한다.`,english:`An extremely
rarely seen
marine POKéMON.\fIts intelligence
is said to match
that of humans.`,japanese:`大きな　体格で　空を　飛ぶ。
地球を　約１６時間で
１周してしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",height:22,weight:2100},{id:150,names:{korean:"뮤츠",english:"Mewtwo",japanese:"ミュウツー"},descriptions:{korean:`한 과학자가 몇 년에 걸쳐
무서운 유전자의 연구를
계속한 결과 탄생했다.`,english:`It was created by
a scientist after
years of horrific\fgene splicing and
DNA engineering
experiments.`,japanese:`１人の　科学者が　何年も
恐ろしい　遺伝子　研究を
続けた　結果　誕生した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",height:20,weight:1220},{id:151,names:{korean:"뮤",english:"Mew",japanese:"ミュウ"},descriptions:{korean:`모든 기술을 사용하기 때문에
포켓몬의 조상이라고 생각하는
학자가 많다.`,english:`So rare that it
is still said to
be a mirage by\fmany experts. Only
a few people have
seen it worldwide.`,japanese:`あらゆる　技を　使うため
ポケモンの　先祖と　考える
学者が　たくさん　いる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",height:4,weight:40},{id:152,names:{korean:"치코리타",english:"Chikorita",japanese:"チコリータ"},descriptions:{korean:`머리의 잎사귀에서 살짝 달콤한
향기가 감돈다. 얌전하며
햇볕을 쬐는 것을 매우 좋아한다.`,english:`A sweet aroma
gently wafts from
the leaf on its\fhead. It is docile
and loves to soak
up the sun's rays.`,japanese:`頭の　葉っぱから　ほのかに　甘い
香りが　漂う。おとなしくて
日差しを　浴びるのが　大好き。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",height:9,weight:64},{id:153,names:{korean:"베이리프",english:"Bayleef",japanese:"ベイリーフ"},descriptions:{korean:`목 주변에서 발산하는
향신료 같은 향기에는
힘을 내도록 하는 효과가 있다.`,english:`The scent of
spices comes from
around its neck.\fSomehow, sniffing
it makes you want
to fight.`,japanese:`首の　まわりから　発散する
スパイスのような　香りには
元気を　出させる　効果がある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",height:12,weight:158},{id:154,names:{korean:"메가니움",english:"Meganium",japanese:"メガニウム"},descriptions:{korean:`꽃잎에서 발산되는
향기에는 다투는 마음을
가라앉게 하는 성분이 담겨 있다.`,english:`The aroma that
rises from its
petals contains a\fsubstance that
calms aggressive
feelings.`,japanese:`花びらから　発散される　においには
争う　気持ちを　静める
成分が　含まれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",height:18,weight:1005},{id:155,names:{korean:"브케인",english:"Cyndaquil",japanese:"ヒノアラシ"},descriptions:{korean:`겁이 많아서 늘 몸을 웅크리고
있다. 습격당하면 등의 불꽃을
타오르게 해서 몸을 보호한다.`,english:`It has a timid nature. If it is startled, the flames on
its back burn more vigorously.`,japanese:`臆病で　いつも　体を　まるめている。
襲われると　背中の　炎を
燃え上がらせて　身を守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",height:5,weight:79},{id:156,names:{korean:"마그케인",english:"Quilava",japanese:"マグマラシ"},descriptions:{korean:`싸우기 전에 등을 보이며
자신의 불꽃이 얼마나
대단한지 상대에게 일부러 보여준다.`,english:`Be careful if it
turns its back
during battle. It\fmeans that it will
attack with the
fire on its back.`,japanese:`戦いの前　背中を　向けて
自分の　炎が　どれくらい
すごいかを　相手に　見せつける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",height:9,weight:190},{id:157,names:{korean:"블레이범",english:"Typhlosion",japanese:"バクフーン"},descriptions:{korean:`분노가 정점에 달했을 때
건드린 자를 모두 순식간에
불태워버릴 정도로 뜨겁다.`,english:`If its rage peaks,
it becomes so hot
that anything that\ftouches it will
instantly go
up in flames.`,japanese:`怒りが　最高潮のとき
触ったもの　すべて　一瞬で
燃え上がらせるほどに　熱い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",height:17,weight:795},{id:158,names:{korean:"리아코",english:"Totodile",japanese:"ワニノコ"},descriptions:{korean:`작아도 성격은 아주 거칠다.
눈앞에서 움직이는 것이 있으면
무조건 물어버린다.`,english:`Its well-developed
jaws are powerful
and capable of\fcrushing anything.
Even its trainer
must be careful.`,japanese:`小さいながらも　暴れん坊。
目の前で　動くものが　あれば
とにかく　かみついてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",height:6,weight:95},{id:159,names:{korean:"엘리게이",english:"Croconaw",japanese:"アリゲイツ"},descriptions:{korean:`이빨이 빠져도 계속해서
자란다. 항상 입안에는
48개의 이빨이 나 있다.`,english:`If it loses a
fang, a new one
grows back in its\fplace. There are
always 48 fangs
lining its mouth.`,japanese:`キバは　抜けても　次から　次に
生えてくる。いつも　口の中には
４８本の　キバが　そろっている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",height:11,weight:250},{id:160,names:{korean:"장크로다일",english:"Feraligatr",japanese:"オーダイル"},descriptions:{korean:`평소에는 느긋하게 움직이지만
먹이를 물 때에는 눈에 보이지
않는 엄청난 스피드를 낸다.`,english:`When it bites with
its massive and
powerful jaws, it\fshakes its head
and savagely tears
its victim up.`,japanese:`普段は　ゆっくりとした　動きだが
獲物に　かみつくときは
目にも　止まらない　スピードだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",height:23,weight:888},{id:161,names:{korean:"꼬리선",english:"Sentret",japanese:"オタチ"},descriptions:{korean:`망보기 역은 날카롭게 울거나
꼬리로 땅을 쳐서
동료에게 위험을 알린다.`,english:`A very cautious
POKéMON, it raises
itself up using\fits tail to get a
better view of its
surroundings.`,japanese:`見張り役は　鋭く　鳴いたり
尻尾で　地面を　たたいたりして
仲間に　危険を　知らせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",height:8,weight:60},{id:162,names:{korean:"다꼬리",english:"Furret",japanese:"オオタチ"},descriptions:{korean:`엄마 포켓몬이 가늘고 긴 몸으로
새끼를 감싸 안아 재운다. 빠른
움직임으로 상대를 몰아붙인다.`,english:`It makes a nest to
suit its long and
skinny body. The\fnest is impossible
for other POKéMON
to enter.`,japanese:`母親は　細長い　体で
子供を　包みこみ　眠らせる。
速い　動きで　敵を　追いこむ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",height:18,weight:325},{id:163,names:{korean:"부우부",english:"Hoothoot",japanese:"ホーホー"},descriptions:{korean:`체내의 시간 감각은
어느 때든 정확해서
규칙적인 리듬으로 목을 기울인다.`,english:`It always stands
on one foot. It
changes feet so\ffast, the movement
can rarely be
seen.`,japanese:`体内の　時間の　間隔は
どんなときでも　正確で
決まった　リズムで　首をかしげる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",height:7,weight:212},{id:164,names:{korean:"야부엉",english:"Noctowl",japanese:"ヨルノズク"},descriptions:{korean:`양쪽 눈이 특수한 구조다.
적은 양의 빛이라도 잘 모아
어둠 속에서도 주위를 분별한다.`,english:`Its eyes are
specially adapted.
They concentrate\feven faint light
and enable it to
see in the dark.`,japanese:`両目は　特殊な　つくり。
わずかな　光を　集めては
暗闇でも　まわりを　見分ける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",height:16,weight:408},{id:165,names:{korean:"레디바",english:"Ledyba",japanese:"レディバ"},descriptions:{korean:`추워지면 여기저기로부터
레디바가 많이 모여들어
바싹 붙어 서로 따뜻하게 해준다.`,english:`It is very timid.
It will be afraid
to move if it is\falone. But it will
be active if it is
in a group.`,japanese:`寒くなると　あちこちから
レディバが　たくさん　集まって
寄り添いあい　温め合う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",height:10,weight:108},{id:166,names:{korean:"레디안",english:"Ledian",japanese:"レディアン"},descriptions:{korean:`밤하늘의 별이 깜빡일 때
반짝이는 가루를 흩뿌리며
훨훨 날아간다.`,english:`When the stars
flicker in the
night sky, it\fflutters about,
scattering a
glowing powder.`,japanese:`夜空に　星が　瞬くとき
輝く　粉を　振りまきながら
ひらひらと　飛んでいく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",height:14,weight:356},{id:167,names:{korean:"페이검",english:"Spinarak",japanese:"イトマル"},descriptions:{korean:`가늘고 튼튼한 실을
뿜어 엮어서 덫을 만들고
먹이가 걸리기만을 기다린다.`,english:`It lies still in
the same pose for
days in its web,\fwaiting for its
unsuspecting prey
to wander close.`,japanese:`細くて　丈夫な　糸を
張り巡らして　わなを　仕掛けると
獲物が　かかるのを　ひたすら待つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",height:5,weight:85},{id:168,names:{korean:"아리아도스",english:"Ariados",japanese:"アリアドス"},descriptions:{korean:`엉덩이뿐 아니라 입에서도
실을 내기 때문에 봐서는
어느 쪽이 머리인지 모른다.`,english:`It spins string
not only from its
rear but also from\fits mouth. It is
hard to tell which
end is which.`,japanese:`お尻からだけでなく　口からも
糸を　出すので　見ただけでは
どっちが　頭か　わからない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",height:11,weight:335},{id:169,names:{korean:"크로뱃",english:"Crobat",japanese:"クロバット"},descriptions:{korean:`4장으로 수가 늘어난 날개로
어둠 속을 조용히 날아간다.
주위를 지나쳐도 눈치채지 못한다.`,english:`It flies so si­
lently through the
dark on its four\fwings that it may
not be noticed
even when nearby.`,japanese:`４枚に　増えた　翼で
暗闇を　静かに　飛んでいく。
となりを　通られても　気づかない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",height:18,weight:750},{id:170,names:{korean:"초라기",english:"Chinchou",japanese:"チョンチー"},descriptions:{korean:`어두운 해저에서는 항상
깜빡거리고 있는 촉수의
빛만이 통신수단이다.`,english:`Chinchou blink their shining antennae at one
another to claim their respective turf.`,japanese:`暗い　海底では　いつも
点滅している　触手の
明かり　だけが　通信手段。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",height:5,weight:120},{id:171,names:{korean:"랜턴",english:"Lanturn",japanese:"ランターン"},descriptions:{korean:`심해를 헤엄치는 랜턴의
불빛은 수면까지 다다른다.
심해의 별이라고 불리고 있다.`,english:`The light it emits
is so bright that
it can illuminate\fthe sea's surface
from a depth of
over three miles.`,japanese:`深海を　泳ぐ　ランターンの
明かりは　水面まで　届く。
深海の星　と　呼ばれている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",height:12,weight:225},{id:172,names:{korean:"피츄",english:"Pichu",japanese:"ピチュー"},descriptions:{korean:`동료와 꼬리의 끝을 맞추면서
불티를 튀기는 놀이를 한다.
담력 시험을 하고 있는 듯하다.`,english:`It is not yet
skilled at storing
electricity.\fIt may send out a
jolt if amused
or startled.`,japanese:`仲間と　尻尾の　先を　あわせて
火花を　飛ばす　遊びをする。
度胸試しを　しているらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",height:3,weight:20},{id:173,names:{korean:"삐",english:"Cleffa",japanese:"ピィ"},descriptions:{korean:`별님 같은 실루엣이다.
그 모습 때문에 별똥별을 타고
온다고 여겨진다.`,english:`Because of its
unusual, star-like
silhouette, people\fbelieve that it
came here on
a meteor.`,japanese:`お星さまのような　シルエット。
その姿から　流れ星に乗って
やって来ると　信じられている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",height:3,weight:30},{id:174,names:{korean:"푸푸린",english:"Igglybuff",japanese:"ププリン"},descriptions:{korean:`짧은 다리로 걷는 것보다는
부드러운 몸으로
튀어 오르며 돌아다닌다.`,english:`It has a very soft
body. If it starts
to roll, it will\fbounce all over
and be impossible
to stop.`,japanese:`短い　脚で　歩くより
やわらかい　体を　使って
飛び跳ねながら　動き回る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",height:3,weight:10},{id:175,names:{korean:"토게피",english:"Togepi",japanese:"トゲピー"},descriptions:{korean:`껍질 안에 행복이 가득
차 있어서 상냥하게 대하면
행운을 나누어 준다고 한다.`,english:`The shell seems to
be filled with
joy. It is said\fthat it will share
good luck when
treated kindly.`,japanese:`殻の中に　幸せが　たくさん
つまっているらしく　優しくされると
幸運を　分け与える　という。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",height:3,weight:15},{id:176,names:{korean:"토게틱",english:"Togetic",japanese:"トゲチック"},descriptions:{korean:`상냥한 사람 곁에 있지 않으면
기운이 나지 않게 되어버린다.
날개를 움직이지 않고 뜰 수 있다.`,english:`They say that it
will appear before
kindhearted, car­\fing people and
shower them with
happiness.`,japanese:`優しい人の　そばに　いないと
元気が　出なくなってしまう。
羽を動かさずに　空に浮かべる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",height:6,weight:32},{id:177,names:{korean:"네이티",english:"Natu",japanese:"ネイティ"},descriptions:{korean:`날개가 아직 잘 발달하지 못해서
뛰어오르는 것처럼 이동한다.
항상 뭔가를 바라보고 있다.`,english:`Because its wings
aren't yet fully
grown, it has to\fhop to get around.
It is always star­
ing at something.`,japanese:`羽が　育ちきって　おらず
飛び跳ねるようにして　移動する。
いつも　なにかを　見つめている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",height:2,weight:20},{id:178,names:{korean:"네이티오",english:"Xatu",japanese:"ネイティオ"},descriptions:{korean:`선명하게 떠오르는 태양을
조용히 바라보며 기도를 올리면
거의 움직이지 않고 하루가 간다.`,english:`They say that it
stays still and
quiet because it\fis seeing both the
past and future at
the same time.`,japanese:`朝方　昇る　太陽を
じっと　見つめ　祈りを　ささげると
ほとんど　動かず　１日を終える。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",height:15,weight:150},{id:179,names:{korean:"메리프",english:"Mareep",japanese:"メリープ"},descriptions:{korean:`푹신푹신한 털은 정전기가
쌓이면 2배로 부풀어 오른다.
만지면 감전되어 버린다.`,english:`If static elec­
tricity builds in
its body, its\ffleece doubles in
volume. Touching
it will shock you.`,japanese:`ふわふわの　体毛は　静電気が
たまると　２倍に　ふくらむ。
触ると　感電してしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",height:6,weight:78},{id:180,names:{korean:"보송송",english:"Flaaffy",japanese:"モココ"},descriptions:{korean:`푹신푹신한 털은 전기를
모으기 쉽지만 고무 같은 피부
덕분에 자신은 마비되지 않는다.`,english:`As a result of
storing too much
electricity, it\fdeveloped patches
where even downy
wool won't grow.`,japanese:`ふかふかの　体毛は　電気を
ためやすいが　ゴムのような　皮膚の
おかげで　自分は　しびれない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",height:8,weight:133},{id:181,names:{korean:"전룡",english:"Ampharos",japanese:"デンリュウ"},descriptions:{korean:`꼬리 끝이 빛나며 반짝인다.
빛이 아득히 먼 곳까지 닿아서
길 잃은 자들의 이정표가 된다.`,english:`The tail's tip
shines brightly
and can be seen\ffrom far away. It
acts as a beacon
for lost people.`,japanese:`尻尾の先が　光り輝く。
光は　はるか　遠くまで　届き
迷った者の　道標となる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",height:14,weight:615},{id:182,names:{korean:"아르코",english:"Bellossom",japanese:"キレイハナ"},descriptions:{korean:`가끔 아르코가 모여서
춤을 추는 듯한 동작을 보인다.
태양을 부르는 의식이라 전해진다.`,english:`Plentiful in the tropics. When it
dances, its petals rub together and
make a pleasant ringing sound.`,japanese:`ときおり　キレイハナが　集まって
踊るような　仕草を　みせる。
太陽を呼ぶ　儀式と　いわれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",height:4,weight:58},{id:183,names:{korean:"마릴",english:"Marill",japanese:"マリル"},descriptions:{korean:`전신의 털은
물을 튕겨내는 성질을 지녀
물을 끼얹어도 말라 있다.`,english:`The tip of its
tail, which con­
tains oil that is\flighter than wa­
ter, lets it swim
without drowning.`,japanese:`全身の　体毛は
水を　弾く　性質を　持ち
水浴び　しても　乾いている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",height:4,weight:85},{id:184,names:{korean:"마릴리",english:"Azumarill",japanese:"マリルリ"},descriptions:{korean:`긴 귀는 우수한 센서다.
강바닥에서 움직이는 생명체의
소리를 분간할 수 있다.`,english:`It lives in water virtually all day long.
Its body color and pattern act as
camouflage that makes it tough for
enemies to spot in water.`,japanese:`長い　耳は　優れた　センサー。
川底で　動く　生き物の　音を
聞き分ける　ことが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",height:8,weight:285},{id:185,names:{korean:"꼬지모",english:"Sudowoodo",japanese:"ウソッキー"},descriptions:{korean:`항상 나무인 척하고 있다.
몸의 구조는 식물보다
돌이나 바위에 가까운 듯하다.`,english:`Although it always
pretends to be a
tree, its composi­\ftion appears to be
closer to a rock
than a plant.`,japanese:`いつも　木のふりを　している。
体の　つくりは　植物より
石や　岩などに　近いようだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",height:12,weight:380},{id:186,names:{korean:"왕구리",english:"Politoed",japanese:"ニョロトノ"},descriptions:{korean:`3마리 이상 왕구리가
모이면 반드시 고함치는 듯한
울음소리로 합창하기 시작한다.`,english:`If POLIWAG and
POLIWHIRL hear its
echoing cry, they\frespond by gather­
ing from far and
wide.`,japanese:`３匹以上　ニョロトノが　集まると
かならず　怒鳴るような　鳴き声で
合唱を　はじめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",height:11,weight:339},{id:187,names:{korean:"통통코",english:"Hoppip",japanese:"ハネッコ"},descriptions:{korean:`매우 가벼운 몸을 가졌다.
바람에 날아가지 않도록 단단히
지면을 밟아 지탱하고 있다.`,english:`To keep from being
blown away by the
wind, they gather\fin clusters. They
do enjoy gentle
breezes, though.`,japanese:`とても　軽い　体。
吹き飛ばされないよう　しっかり
地面を　踏みしめている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",height:4,weight:5},{id:188,names:{korean:"두코",english:"Skiploom",japanese:"ポポッコ"},descriptions:{korean:`머리 위에 핀 꽃은
기온에 따라 펴지거나
오므라드는 성질을 가졌다.`,english:`The bloom on top
of its head opens
and closes as the\ftemperature fluc­
tuates up and
down.`,japanese:`頭の上に　咲いた　花は
気温に　よって　開いたり
閉じたりする　性質を　持つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",height:6,weight:10},{id:189,names:{korean:"솜솜코",english:"Jumpluff",japanese:"ワタッコ"},descriptions:{korean:`계절풍에 날려서
세계 일주를 해 버린다.
도중에 솜 포자를 흩뿌린다.`,english:`Once it catches
the wind, it deft­
ly controls its\fcotton-puff spores
to float, even
around the world.`,japanese:`季節風に　流されて
世界を　１周してしまう。
途中で　綿胞子を　ばらまく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",height:8,weight:30},{id:190,names:{korean:"에이팜",english:"Aipom",japanese:"エイパム"},descriptions:{korean:`높은 나무 위에서 살고 있다.
나뭇가지에서 가지로 건너뛸 때
꼬리로 능숙하게 밸런스를 잡는다.`,english:`Its tail is so
powerful that it
can use it to grab\fa tree branch and
hold itself up in
the air.`,japanese:`高い　木の上で　暮らしている。
枝から　枝へ　飛び移るとき
尻尾で　巧みに　バランスをとる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",height:8,weight:115},{id:191,names:{korean:"해너츠",english:"Sunkern",japanese:"ヒマナッツ"},descriptions:{korean:`어느 날 아침 갑자기 떨어진다.
깨비참에게 습격당하면 잎사귀를
세차게 흔들어서 쫓아 버린다.`,english:`It may drop out of
the sky suddenly.
If attacked by a\fSPEAROW, it will
violently shake
its leaves.`,japanese:`ある朝　突然　降ってくる。
オニスズメに　襲われると　葉っぱを
激しく　振って　追い払う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",height:3,weight:18},{id:192,names:{korean:"해루미",english:"Sunflora",japanese:"キマワリ"},descriptions:{korean:`더운 계절이 다가오면
얼굴의 꽃잎이 선명해지고
활발하게 움직이게 된다.`,english:`It converts sun­
light into energy.
In the darkness\fafter sunset, it
closes its petals
and becomes still.`,japanese:`暑い　季節が　近づくと
顔の　花びらは　鮮やかになり
活発に　動くようになる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",height:8,weight:85},{id:193,names:{korean:"왕자리",english:"Yanma",japanese:"ヤンヤンマ"},descriptions:{korean:`얼굴을 움직이지 않고 360도 전부
볼 수 있는 눈을 가지고 있어서
바로 뒤의 먹이도 놓치지 않는다.`,english:`If it flaps its
wings really fast,
it can generate\fshock waves that
will shatter win­
dows in the area.`,japanese:`顔を　動かさずに　３６０度
すべてを　見渡す　目を　持つので
真後ろの　獲物も　見逃さない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",height:12,weight:380},{id:194,names:{korean:"우파",english:"Wooper",japanese:"ウパー"},descriptions:{korean:`차가운 물속에서 생활한다.
근처가 선선해지면 먹이를
찾으러 지상에도 나타난다.`,english:`This POKéMON lives
in cold water. It
will leave the\fwater to search
for food when it
gets cold outside.`,japanese:`冷たい　水の中で　生活。
あたりが　涼しくなると　エサを
探しに　地上にも　現れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",height:4,weight:85},{id:195,names:{korean:"누오",english:"Quagsire",japanese:"ヌオー"},descriptions:{korean:`느긋한 성격이다.
강바닥에서 입을 벌려 먹이가
들어오는 것을 한결같이 기다린다.`,english:`This carefree
POKéMON has an
easy-going nature.\fWhile swimming, it
always bumps into
boat hulls.`,japanese:`のんびりとした　性格。
川底で　口を　開けて　エサが
飛びこんでくるのを　ひたすら　待つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",height:14,weight:750},{id:196,names:{korean:"에브이",english:"Espeon",japanese:"エーフィ"},descriptions:{korean:`상대의 움직임을 예지할 때
두 갈래로 갈라져 있는 꼬리의
끝이 미세하게 떨리고 있다.`,english:`It uses the fine
hair that covers
its body to sense\fair currents and
predict its ene­
my's actions.`,japanese:`相手の　動きを　予知するとき
ふたまたに　なっている　尻尾の　先は
微妙に　揺れている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",height:9,weight:265},{id:197,names:{korean:"블래키",english:"Umbreon",japanese:"ブラッキー"},descriptions:{korean:`달빛이 이브이의
유전자를 변화시켰다.
어둠에 숨어 먹이를 기다린다.`,english:`When agitated,
this POKéMON pro­
tects itself by\fspraying poisonous
sweat from its
pores.`,japanese:`月の　光が　イーブイの
遺伝子を　変化させた。
闇に　潜み　獲物を　待つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",height:10,weight:270},{id:198,names:{korean:"니로우",english:"Murkrow",japanese:"ヤミカラス"},descriptions:{korean:`반짝이는 물건을 주워
비밀 장소에 숨겨 둔다.
나옹과 자주 쟁탈전을 벌인다.`,english:`Feared and loathed
by many, it is
believed to bring\fmisfortune to all
those who see it
at night.`,japanese:`輝く　物を　拾っては
秘密の　場所に　隠しておく。
よく　ニャースと　奪い合いになる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",height:5,weight:21},{id:199,names:{korean:"야도킹",english:"Slowking",japanese:"ヤドキング"},descriptions:{korean:`대단한 지성과 번뜩이는 재치를
가지고 있다. 어떤 때라도 당황하거나
소란 피우지 않고 느긋하게 있다.`,english:`It has incredible
intellect and in­
tuition. Whatever\fthe situation, it
remains calm and
collected.`,japanese:`すごい　知性と　ひらめきを
持っている。どんなときでも　あわてず
騒がず　のんびりとしている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",height:20,weight:795},{id:200,names:{korean:"무우마",english:"Misdreavus",japanese:"ムウマ"},descriptions:{korean:`무서워하는 마음을 빨간 구슬로
흡수해 영양분으로 만든다. 낮에는
어두운 곳에서 잠자고 있다.`,english:`It likes playing
mischievous tricks
such as screaming\fand wailing to
startle people at
night.`,japanese:`怖がる　心を　赤い　玉で
吸収して　栄養にする。
昼間は　暗がりで　眠っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",height:7,weight:10},{id:201,names:{korean:"안농",english:"Unown",japanese:"アンノーン"},descriptions:{korean:`몸 자체는 굉장히 얇고
항상 벽에 들러붙어 있다.
모습에는 뭔가 의미가 있는 듯하다.`,english:`Their shapes look
like hieroglyphs
on ancient tab­\flets. It is said
that the two are
somehow related.`,japanese:`体自体は　薄っぺらく
いつも　壁に　張りついている。
形に　なにか　意味があるらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",height:5,weight:50},{id:202,names:{korean:"마자용",english:"Wobbuffet",japanese:"ソーナンス"},descriptions:{korean:`빛과 쇼크를 싫어한다.
공격받으면 몸이 부풀어 올라
반격이 강력해진다.`,english:`It hates light and
shock. If attack­
ed, it inflates\fits body to pump
up its counter­
strike.`,japanese:`光や　ショックを　嫌う。
攻撃されると　体が　ふくらみ
反撃が　強力に　なる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",height:13,weight:285},{id:203,names:{korean:"키링키",english:"Girafarig",japanese:"キリンリキ"},descriptions:{korean:`잠자는 동안 꼬리의
머리가 주위를 망보고 있다.
꼬리는 잠을 잘 필요가 없다.`,english:`Its tail has a
small brain of its
own. Beware! If\fyou get close, it
may react to your
scent and bite.`,japanese:`眠っている　あいだ　尻尾の　頭が
あたりを　見張っている。
尻尾は　眠らなくても　平気。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",height:15,weight:415},{id:204,names:{korean:"피콘",english:"Pineco",japanese:"クヌギダマ"},descriptions:{korean:`나무껍질을 짜 맞춰서
껍질을 두껍게 하는 것을 좋아한다.
무거워져도 신경 쓰지 않는다.`,english:`It likes to make
its shell thicker
by adding layers\fof tree bark. The
additional weight
doesn't bother it.`,japanese:`木の　皮を　重ね合わせて
殻を　分厚くするのが　大好き。
重くなっても　気にしない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",height:6,weight:72},{id:205,names:{korean:"쏘콘",english:"Forretress",japanese:"フォレトス"},descriptions:{korean:`강철 껍질이 몸을 보호하고 있다.
틈새에서 엿보고 있는 눈이 있지만
내용물의 정체는 수수께끼다.`,english:`Its entire body is
shielded by a
steel-hard shell.\fWhat lurks inside
the armor is a
total mystery.`,japanese:`鋼鉄の　殻で　守られている。
すきまから　目玉が　のぞいているが
中身の　正体は　ナゾのまま。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",height:12,weight:1258},{id:206,names:{korean:"노고치",english:"Dunsparce",japanese:"ノコッチ"},descriptions:{korean:`누군가에게 들키면
꼬리로 땅을 파서
뒤쪽으로 도망친다.`,english:`When spotted, this
POKéMON escapes
backward by furi­\fously boring into
the ground with
its tail.`,japanese:`だれかに　見られると
尻尾で　地面を　掘って
後ろ向きに　逃げ出すのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",height:15,weight:140},{id:207,names:{korean:"글라이거",english:"Gligar",japanese:"グライガー"},descriptions:{korean:`보통은 벼랑에 붙어 있다.
먹이를 발견하면 날개를 펼쳐
바람을 타고 날아 덮친다.`,english:`It flies straight
at its target's
face then clamps\fdown on the star­
tled victim to
inject poison.`,japanese:`いつもは　崖に　張りついている。
獲物を見つけると　羽を広げ
風に乗り　襲いかかってくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",height:11,weight:648},{id:208,names:{korean:"강철톤",english:"Steelix",japanese:"ハガネール"},descriptions:{korean:`땅속의 높은 압력과
열로 단련된 몸은
어떠한 금속보다도 단단하다.`,english:`It is thought its body transformed
as a result of iron accumulating
internally from swallowing soil.`,japanese:`地中の　高い　圧力と　熱で
鍛えられた　体は
あらゆる　金属よりも　硬い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",height:92,weight:4e3},{id:209,names:{korean:"블루",english:"Snubbull",japanese:"ブルー"},descriptions:{korean:`활발하고 노는 것을 좋아하는 성격.
잘 따르기 때문에 함께
놀고 싶어 하는 여성들이 많다.`,english:`Although it looks
frightening, it is
actually kind and\faffectionate. It
is very popular
among women.`,japanese:`活発で　遊び好きな　性格。
懐いてくれるので　一緒に
遊びたがる　女性も　多い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",height:6,weight:78},{id:210,names:{korean:"그랑블루",english:"Granbull",japanese:"グランブル"},descriptions:{korean:`얼굴에 어울리지 않게 겁이 많다.
그러나 한번 화내기 시작하면
큰 이빨로 반격한다.`,english:`It is actually
timid and easily
spooked. If at­\ftacked, it flails
about to fend off
its attacker.`,japanese:`顔に　似合わず　臆病。
しかし　ひとたび　怒りはじめると
大きな　キバで　反撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",height:14,weight:487},{id:211,names:{korean:"침바루",english:"Qwilfish",japanese:"ハリーセン"},descriptions:{korean:`전신의 독침을 날리기 위해
10리터의 물을 단번에
마시고 몸을 부풀린다.`,english:`To fire its poison
spikes, it must
inflate its body\fby drinking over
2.6 gallons of
water all at once.`,japanese:`全身の　毒針を　飛ばすため
１０リットルの　水を　一気に
飲みこみ　体を　ふくらませる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",height:5,weight:39},{id:212,names:{korean:"핫삼",english:"Scizor",japanese:"ハッサム"},descriptions:{korean:`강철이 함유된
집게로 잡은 것은 아무리
딱딱해도 산산조각이 난다.`,english:`It has a steel-hard body. It
intimidates foes by upraising its
eye-patterned pincers.`,japanese:`鋼鉄を　含んでいる　ハサミで
捕らえたものは　どんなに　硬くても
コナゴナに　砕く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",height:18,weight:1180},{id:213,names:{korean:"단단지",english:"Shuckle",japanese:"ツボツボ"},descriptions:{korean:`항아리 같은 등껍질 속에
모은 나무열매는 어느샌가
걸쭉한 주스로 변한다.`,english:`The BERRIES it
stores in its
vase-like shell\fdecompose and
become a gooey
liquid.`,japanese:`ツボのような　甲羅の　中に
ためこんだ　木の実は　いつの間にか
ドロドロの　ジュースに　変わる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",height:6,weight:205},{id:214,names:{korean:"헤라크로스",english:"Heracross",japanese:"ヘラクロス"},descriptions:{korean:`자랑스러운 뿔을 상대의 배
밑에 틀어박고 단번에 들어 올려
집어 던지는 천하장사다.`,english:`It is usually docile, but if it is
disturbed while sipping honey,
it chases off the intruder with its horn.`,japanese:`自慢のツノを　相手の　お腹の
下に　ねじこみ　一気に　持ち上げ
ぶん投げてしまう　力持ち。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",height:15,weight:540},{id:215,names:{korean:"포푸니",english:"Sneasel",japanese:"ニューラ"},descriptions:{korean:`거처에서 알을 가로채어 먹어
버린다. 날카로운 갈고리 손톱이
상대의 급소를 베어 가른다.`,english:`Its paws conceal
sharp claws. If
attacked, it sud­\fdenly extends the
claws and startles
its enemy.`,japanese:`住処から　タマゴを　かすめ取り
食べてしまう。鋭い　カギヅメが
相手の　急所を　切り裂く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",height:9,weight:280},{id:216,names:{korean:"깜지곰",english:"Teddiursa",japanese:"ヒメグマ"},descriptions:{korean:`꿀을 발견하면 초승달 모양이
빛난다. 달콤한꿀이 배어든
손바닥을 항상 핥고 있다.`,english:`If it finds honey,
its crescent mark
glows. It always\flicks its paws
because they are
soaked with honey.`,japanese:`ミツを見つけると　三日月模様が
輝く。甘いミツが　染みこんだ
手のひらを　いつも　なめている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",height:6,weight:88},{id:217,names:{korean:"링곰",english:"Ursaring",japanese:"リングマ"},descriptions:{korean:`어떠한 냄새라도 구별할 수 있다.
땅속 깊이 파묻혀 있는
먹이도 남김없이 찾아낸다.`,english:`Although it is a
good climber, it
prefers to snap\ftrees with its
forelegs and eat
fallen BERRIES.`,japanese:`どんな　においも　かぎわける。
地面深くに　埋まっている
食べ物も　残らず　見つけ出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",height:18,weight:1258},{id:218,names:{korean:"마그마그",english:"Slugma",japanese:"マグマッグ"},descriptions:{korean:`화산 지대에 많이 나타난다.
따뜻한 곳을 찾아서
느릿느릿 기어 다니고 있다.`,english:`It never sleeps.
It has to keep
moving because if\fit stopped, its
magma body would
cool and harden.`,japanese:`火山地帯に　多く　発生。
暖かい　ところを　探して
のろのろ　はいずり回っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",height:7,weight:350},{id:219,names:{korean:"마그카르고",english:"Magcargo",japanese:"マグカルゴ"},descriptions:{korean:`등껍질은 깨어지기 쉬우며
가끔 체내를 순환하고 있는
고열의 불꽃을 뿜어낸다.`,english:`The shell on its
back is just skin
that has cooled\fand hardened. It
breaks easily with
a slight touch.`,japanese:`背中の　殻は　崩れやすいが
ときどき　体内を　巡っている
高熱の　炎が　噴き出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",height:8,weight:550},{id:220,names:{korean:"꾸꾸리",english:"Swinub",japanese:"ウリムー"},descriptions:{korean:`먹이를 찾기 위해 코를
바닥에 비벼 땅을 파고 있다.
가끔 온천을 찾아낸다.`,english:`It rubs its snout
on the ground to
find and dig up\ffood. It sometimes
discovers hot
springs.`,japanese:`エサを　探すため　鼻を
こすり合わせ　地面を　掘っている。
たまに　温泉を　掘り当てる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",height:4,weight:65},{id:221,names:{korean:"메꾸리",english:"Piloswine",japanese:"イノムー"},descriptions:{korean:`4개의 다리는 짧지만
발굽이 넓고 거칠거칠하므로
눈 위도 미끄러지지 않고 걸을 수 있다.`,english:`Because the long
hair all over its
body obscures its\fsight, it just
keeps charging
repeatedly.`,japanese:`４本の　脚は　短いが
ひづめは　広く　ギザギザ　なので
雪の上でも　滑らず　歩ける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",height:11,weight:558},{id:222,names:{korean:"코산호",english:"Corsola",japanese:"サニーゴ"},descriptions:{korean:`점점 자라면서 다시 돋아나는
머리의 끝이 아름다워
보물로서 인기가 많다.`,english:`It continuously
sheds and grows.
The tip of its\fhead is prized as
a treasure for its
beauty.`,japanese:`どんどん　育っては　生えかわる
頭の　先は　きれいなので
宝物として　人気が高い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",height:6,weight:50},{id:223,names:{korean:"총어",english:"Remoraid",japanese:"テッポウオ"},descriptions:{korean:`조준이 정확하다. 뿜어낸 물은
100m 앞에서 움직이는
먹이를 반드시 명중시킨다.`,english:`It has superb ac­
curacy. The water
it shoots out can\fstrike even moving
prey from more
than 300 feet.`,japanese:`ねらいは　正確。噴き出す　水は
１００メートル先で　動く　獲物に
かならず　命中する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",height:6,weight:120},{id:224,names:{korean:"대포무노",english:"Octillery",japanese:"オクタン"},descriptions:{korean:`구멍에 들어가고 싶어 하는 성질로
바위굴이나 항아리를 좋아해 거기서
먹물을 뿜어내 공격한다.`,english:`It traps enemies
with its suction-
cupped tentacles\fthen smashes them
with its rock-hard
head.`,japanese:`穴に　入りたがる　性質で
岩穴や　ツボを　好み　そこから
墨を　噴き出して　攻撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",height:9,weight:285},{id:225,names:{korean:"딜리버드",english:"Delibird",japanese:"デリバード"},descriptions:{korean:`꼬리로 먹이를 싸서 운반한다.
산에서 조난당한 사람에게
먹이를 나눠주는 습성이 있다.`,english:`It carries food
all day long.
There are tales\fabout lost people
who were saved by
the food it had.`,japanese:`尻尾で　エサを　包んで　運ぶ。
山で　遭難した　人に
エサを　分け与える　習性。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",height:9,weight:160},{id:226,names:{korean:"만타인",english:"Mantine",japanese:"マンタイン"},descriptions:{korean:`헤엄쳐서 스피드가 빨라지면
파도 위에 뛰어올라 그대로
100m나 활공한다.`,english:`As it majestically
swims, it doesn't
care if REMORAID\fattach to it for
scavenging its
leftovers.`,japanese:`泳いで　スピードが　のってくると
波の上に　飛びだし　そのまま
１００メートルも　滑空　する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",height:21,weight:2200},{id:227,names:{korean:"무장조",english:"Skarmory",japanese:"エアームド"},descriptions:{korean:`가시나무 안에 둥지를 만든다.
가시에 상처를 입어가며 자라난
새끼들의 날개는 단단해진다.`,english:`Its sturdy wings
look heavy, but
they are actually\fhollow and light,
allowing it to fly
freely in the sky.`,japanese:`いばらの　中に　巣を作る。
トゲで　傷つきながら　育てられた
ヒナの　羽は　硬くなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",height:17,weight:505},{id:228,names:{korean:"델빌",english:"Houndour",japanese:"デルビル"},descriptions:{korean:`새벽녘에 주변 일대에
울려 퍼지는 기분 나쁜 울음소리로
자신들의 영역을 어필한다.`,english:`It uses different
kinds of cries for
communicating with\fothers of its kind
and for pursuing
its prey.`,japanese:`夜明けごろ　あたり一帯に
響きわたる　不気味な　遠ぼえで
自分たちの　縄張りを　アピール。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",height:6,weight:108},{id:229,names:{korean:"헬가",english:"Houndoom",japanese:"ヘルガー"},descriptions:{korean:`헬가가 으스스하게 멀리서 짖으면
지옥에서 사신이 부르는 소리라고
옛날 사람들은 상상하고 있었다.`,english:`If you are burned
by the flames it
shoots from its\fmouth, the pain
will never go
away.`,japanese:`ヘルガーの　不気味な　遠ぼえは
地獄から　死神が　呼ぶ　声と
昔の　人は　想像していた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",height:14,weight:350},{id:230,names:{korean:"킹드라",english:"Kingdra",japanese:"キングドラ"},descriptions:{korean:`평소에는 해저동굴에
몸을 숨기고 있는 것 같다. 하품으로
소용돌이를 발생시킨다.`,english:`It is said that it
usually hides in
underwater caves.\fIt can create
whirlpools by
yawning.`,japanese:`普段は　海底洞窟に
身を　潜めているらしい。
あくびで　渦潮を　発生させる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",height:18,weight:1520},{id:231,names:{korean:"코코리",english:"Phanpy",japanese:"ゴマゾウ"},descriptions:{korean:`애정 표현으로 코를
부딪쳐 오지만 힘이 있기 때문에
조심하지 않으면 날아가 버린다.`,english:`It swings its long
snout around play­
fully, but because\fit is so strong,
that can be dan­
gerous.`,japanese:`愛情表現で　鼻を　ぶつけてくるが
力が　あるので
気をつけないと　吹っ飛ばされる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",height:5,weight:335},{id:232,names:{korean:"코리갑",english:"Donphan",japanese:"ドンファン"},descriptions:{korean:`예리하고 단단한 이빨과
더욱 튼튼한 피부의
몸통박치기는 집도 부술 정도다.`,english:`It has sharp, hard
tusks and a rugged
hide. Its TACKLE\fis strong enough
to knock down a
house.`,japanese:`鋭く　硬い　キバと
さらに　頑丈な　皮膚で
体当たりは　家をも　壊すほど。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",height:11,weight:1200},{id:233,names:{korean:"폴리곤2",english:"Porygon2",japanese:"ポリゴン２"},descriptions:{korean:`더욱 연구가 진행되어
능력이 올라갔다. 가끔
프로그램에 없는 행동을 보인다.`,english:`This upgraded
version of PORYGON
is designed for\fspace exploration.
It can't fly,
though.`,japanese:`さらに　研究が　進められ
能力が　高まった。ときどき
プログラムにない　仕草を　見せる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",height:6,weight:325},{id:234,names:{korean:"노라키",english:"Stantler",japanese:"オドシシ"},descriptions:{korean:`뿔을 응시하고 있으면 원의
중심에 빨려 들어가는 것 같은
이상한 기분이 든다.`,english:`The curved antlers
subtly change the
flow of air to\fcreate a strange
space where real­
ity is distorted.`,japanese:`ツノを　見つめていると　輪っかの
中心に　吸いこまれそうな
不思議な　気分に　なってしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",height:14,weight:712},{id:235,names:{korean:"루브도",english:"Smeargle",japanese:"ドーブル"},descriptions:{korean:`꼬리를 붓처럼 써서
영역에 마크를 그린다.
그 종류는 5000개 이상이다.`,english:`A special fluid
oozes from the tip
of its tail. It\fpaints the fluid
everywhere to mark
its territory.`,japanese:`尻尾を　筆のように　使って
縄張りを　マークで　描く。
その　種類は　５０００以上。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",height:12,weight:580},{id:236,names:{korean:"배루키",english:"Tyrogue",japanese:"バルキー"},descriptions:{korean:`항상 기운이 넘친다.
강해지기 위해 계속 져도
상대에게 맞선다.`,english:`It is always
bursting with en­
ergy. To make it­\fself stronger, it
keeps on fighting
even if it loses.`,japanese:`いつでも　元気いっぱい。
強くなるため　負けても　負けても
相手に　立ち向かっていく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",height:7,weight:210},{id:237,names:{korean:"카포에라",english:"Hitmontop",japanese:"カポエラー"},descriptions:{korean:`팽이처럼 회전하면서
싸운다. 원심력의 파워로
파괴력은 10배다.`,english:`If you become
enchanted by its
smooth, elegant,\fdance-like kicks,
you may get
drilled hard.`,japanese:`コマのように　回転しながら　戦う。
遠心力の　パワーで
破壊力は　１０倍だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",height:14,weight:480},{id:238,names:{korean:"뽀뽀라",english:"Smoochum",japanese:"ムチュール"},descriptions:{korean:`입술이 제일 민감하다.
뭐든지 먼저 입술로 건드려서
어떤 것인지 확인한다.`,english:`Its lips are the
most sensitive
parts on its body.\fIt always uses its
lips first to
examine things.`,japanese:`唇が　一番　敏感。
なんでも　まず　唇で　触れて
どんなものか　確認する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",height:4,weight:60},{id:239,names:{korean:"에레키드",english:"Elekid",japanese:"エレキッド"},descriptions:{korean:`양팔을 빙글빙글 휘둘러서
전기를 발생시킨다. 그러나
만들어낸 전기는 모아둘 수 없다.`,english:`It rotates its
arms to generate
electricity, but\fit tires easily,
so it charges up
only a little bit.`,japanese:`両腕を　ぐるぐる　振り回して
電気を　発生させる。しかし
作った　電気は　ためておけない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",height:6,weight:235},{id:240,names:{korean:"마그비",english:"Magby",japanese:"ブビィ"},descriptions:{korean:`작은 몸이지만 체온은 600도다.
숨을 들이쉬고 내쉴 때마다
입과 코에서 불꽃이 샌다.`,english:`Each and every
time it inhales
and exhales, hot\fembers dribble out
of its mouth and
nostrils.`,japanese:`小柄だが　体温は　６００度。
息を　吸ったり　吐いたりするたび
口と　鼻から　火の粉が　漏れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",height:7,weight:214},{id:241,names:{korean:"밀탱크",english:"Miltank",japanese:"ミルタンク"},descriptions:{korean:`새끼가 태어났을 때에
짜낸 우유는 평상시보다
영양이 듬뿍 담겨 있다.`,english:`Its milk is packed
with nutrition,
making it the\fultimate beverage
for the sick or
weary.`,japanese:`子供が　生まれたときに
しぼられた　ミルクには　いつもより
栄養が　たっぷり　つまっている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",height:12,weight:755},{id:242,names:{korean:"해피너스",english:"Blissey",japanese:"ハピナス"},descriptions:{korean:`해피너스가 낳은 알에는
행복이 담겨 있어서 한 입 먹으면
누구든지 웃음 띤 얼굴이 된다.`,english:`Anyone who takes
even one bite of
BLISSEY's egg be­\fcomes unfailingly
caring and pleas­
ant to everyone.`,japanese:`ハピナスの　産む　タマゴには
幸せが　つまっていて　ひとくち
食べると　だれでも　笑顔になれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",height:15,weight:468},{id:243,names:{korean:"라이코",english:"Raikou",japanese:"ライコウ"},descriptions:{korean:`비구름을 짊어지고 있어서
어떤 때라도 번개를 칠 수 있다.
번개와 함께 떨어졌다고 한다.`,english:`The rain clouds it
carries let it
fire thunderbolts\fat will. They say
that it descended
with lightning.`,japanese:`雨雲を　背負っているので
どんなときでも　雷を　出せる。
雷とともに　落ちてきたという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",height:19,weight:1780},{id:244,names:{korean:"앤테이",english:"Entei",japanese:"エンテイ"},descriptions:{korean:`새로운 화산이 생길 때마다
태어난다고 전해지는
대지를 달리는 포켓몬이다.`,english:`Volcanoes erupt
when it barks. Un­
able to restrain\fits extreme power,
it races headlong
around the land.`,japanese:`新しい　火山が　できるたび
生まれてくると　伝えられる
大地を　駆け巡る　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",height:21,weight:1980},{id:245,names:{korean:"스이쿤",english:"Suicune",japanese:"スイクン"},descriptions:{korean:`세계 곳곳을 뛰어다니며
오염된 물을 정화시킨다.
북풍과 함께 달려나간다.`,english:`It races around the world to
purify fouled water. It dashes
away with the north wind.`,japanese:`世界中を　駆け巡り
汚れた　水を　清めている。
北風と　ともに　走り去る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",height:20,weight:1870},{id:246,names:{korean:"애버라스",english:"Larvitar",japanese:"ヨーギラス"},descriptions:{korean:`흙을 먹으며 살고 있다.
큰 산을 하나 다 먹으면
성장을 위해 잠자기 시작한다.`,english:`It feeds on soil.
After it has eaten
a large mountain,\fit will fall
asleep so it can
grow.`,japanese:`土を　食べて　生きている。
大きな　山ひとつ　食べ終わると
成長のため　眠りはじめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",height:6,weight:720},{id:247,names:{korean:"데기라스",english:"Pupitar",japanese:"サナギラス"},descriptions:{korean:`암반 같은 단단한 몸이다.
압축한 가스를 분사해서
마치 로켓같이 날아간다.`,english:`Its shell is as
hard as sheet
rock, and it is\falso very strong.
Its THRASHING can
topple a mountain.`,japanese:`岩盤のような　硬い　体。
圧縮した　ガスを　噴射して
まるで　ロケットのように　飛び出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",height:12,weight:1520},{id:248,names:{korean:"마기라스",english:"Tyranitar",japanese:"バンギラス"},descriptions:{korean:`한쪽 팔을 움직이는 것만으로도
산을 무너뜨리고 땅을 울리게 하는
엄청난 힘을 감추고 있다.`,english:`Its body can't be
harmed by any sort
of attack, so it\fis very eager to
make challenges
against enemies.`,japanese:`片腕を　動かしただけで
山を崩し　地響きを　起こす
とてつもない　パワーを　秘める。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",height:20,weight:2020},{id:249,names:{korean:"루기아",english:"Lugia",japanese:"ルギア"},descriptions:{korean:`깊은 해구의 밑바닥에서 잠잔다.
루기아가 날개를 치면 40일 동안
폭풍우가 계속된다고 전해진다.`,english:`It is said that it
quietly spends its
time deep at the\fbottom of the sea
because its powers
are too strong.`,japanese:`深い　海溝の　底で　眠る。
ルギアが　羽ばたくと　４０日
嵐が　続くと　言われている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",height:52,weight:2160},{id:250,names:{korean:"칠색조",english:"Ho-Oh",japanese:"ホウオウ"},descriptions:{korean:`몸은 일곱 빛으로 빛나고
날아간 자리에는 무지개가 생긴다는
신화 속에 남아 있는 포켓몬이다.`,english:`Legends claim this
POKéMON flies the
world's skies con­\ftinuously on its
magnificent seven-
colored wings.`,japanese:`体は　七色に　輝き
飛んだあとは　虹が　できると
神話に　残されている　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",height:38,weight:1990},{id:251,names:{korean:"세레비",english:"Celebi",japanese:"セレビィ"},descriptions:{korean:`시간을 넘어 여기저기를 방황한다.
세레비가 모습을 나타낸
숲은 초목이 무성해진다고 한다.`,english:`This POKéMON wan­
ders across time.
Grass and trees\fflourish in the
forests in which
it has appeared.`,japanese:`時間を超えて　あちこち　さまよう。
セレビィが　姿を　現した　森は
草木が　生い茂るという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",height:6,weight:50},{id:252,names:{korean:"나무지기",english:"Treecko",japanese:"キモリ"},descriptions:{korean:`수직으로 된 벽도 쭉쭉
타고 올라간다. 꼬리로 공기 중의 습도를
감지해서 내일 날씨를 맞힌다.`,english:`TREECKO has small hooks on the bottom
of its feet that enable it to scale
vertical walls.\fThis POKéMON attacks by slamming foes
with its thick tail.`,japanese:`垂直の　壁も　すいすい　登る。
尻尾で　空気の　湿度を　感じ
明日の　天気を　当てる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",height:5,weight:50},{id:253,names:{korean:"나무돌이",english:"Grovyle",japanese:"ジュプトル"},descriptions:{korean:`발달한 넓적다리의 근육이
경이로운 순발력과
도약력을 만들어 낸다.`,english:`The leaves growing out of GROVYLE’s
body are convenient for camouflaging
it from enemies in the forest.\fThis POKéMON is a master at climbing
trees in jungles.`,japanese:`発達した　太ももの　筋肉が
驚異的な　瞬発力と
跳躍力を　生み出すぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",height:9,weight:216},{id:254,names:{korean:"나무킹",english:"Sceptile",japanese:"ジュカイン"},descriptions:{korean:`팔에 자란 잎사귀는 큰 나무도
싹둑 베어 넘어뜨리는 정도다.
밀림의 싸움에서는 무적이다.`,english:`The leaves growing on SCEPTILE’s body
are very sharp edged. This POKéMON is
very agile - it leaps all over the\fbranches of trees and jumps on its foe
from above or behind.`,japanese:`腕に　生えた　葉っぱは　大木も
スッパリ　切り倒す　切れ味。
密林の　戦いでは　無敵。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",height:17,weight:522},{id:255,names:{korean:"아차모",english:"Torchic",japanese:"アチャモ"},descriptions:{korean:`몸속에 불꽃 주머니를 지니고 있어서
껴안으면 따끈따끈하다.
살아 있는 한 계속 불타오른다.`,english:`TORCHIC sticks with its TRAINER,
following behind with unsteady
steps.\fThis POKéMON breathes fire of over
1,800 degrees F, including fireballs
that leave the foe scorched black.`,japanese:`お腹に　炎袋を　持つ。
抱きしめると　ぽかぽか　温かい。
命ある　限り　燃え続ける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",height:4,weight:25},{id:256,names:{korean:"영치코",english:"Combusken",japanese:"ワカシャモ"},descriptions:{korean:`1초에 킥을 10번 날릴 정도로
발을 사용하는 기술에 능하다.
날카로운 울음소리로 위협한다.`,english:`COMBUSKEN toughens up its legs and
thighs by running through fields and
mountains.\fThis POKéMON’s legs possess both speed
and power, enabling it to dole out ten
kicks in one second.`,japanese:`１秒間に　キックを　１０発
繰り出す　足技の　持ち主。
鋭い　鳴き声で　威嚇する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",height:9,weight:195},{id:257,names:{korean:"번치코",english:"Blaziken",japanese:"バシャーモ"},descriptions:{korean:`30층 빌딩을 점프로
넘는 점프력을 가졌다.
불꽃펀치가 상대를 태운다.`,english:`In battle, BLAZIKEN blows out intense
flames from its wrists and attacks foes
courageously.\fThe stronger the foe, the more
intensely this POKéMON’s wrists burn.`,japanese:`３０階建ての　ビルを　ジャンプで
跳び越す　跳躍力。炎の　パンチが
相手を　焼きつくす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",height:19,weight:520},{id:258,names:{korean:"물짱이",english:"Mudkip",japanese:"ミズゴロウ"},descriptions:{korean:`커다란 꼬리지느러미로 물을 헤치면
스피드가 쑥쑥 오른다.
작은 몸이지만 힘이 장사다.`,english:`The fin on MUDKIP’s head acts as highly
sensitive radar. Using this fin to sense
movements of water and air, this\fPOKéMON can determine what is taking
place around it without using its eyes.`,japanese:`大きな　尾びれで　水を　かけば
ぐんぐん　スピードが　上がる。
小さい　体でも　力持ち。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",height:4,weight:76},{id:259,names:{korean:"늪짱이",english:"Marshtomp",japanese:"ヌマクロー"},descriptions:{korean:`발밑이 질퍽거려도 잘 걸을 수
있는 튼튼한 다리를 가졌다.
진흙에 몸을 묻고 잠잔다.`,english:`The surface of MARSHTOMP’s body is
enveloped by a thin, sticky film that
enables it to live on land.\fThis POKéMON plays in mud on beaches
when the ocean tide is low.`,japanese:`ぬかるんだ　足場でも　しっかり
歩ける　丈夫な　足腰。
泥に　体を　埋めて　眠る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",height:7,weight:280},{id:260,names:{korean:"대짱이",english:"Swampert",japanese:"ラグラージ"},descriptions:{korean:`돌처럼 딱딱한 팔을
한 번 휘두르는 것만으로 거대한
돌을 조각조각으로 부순다.`,english:`SWAMPERT is very strong. It has enough
power to easily drag a boulder weighing
more than a ton.\fThis POKéMON also has powerful vision
that lets it see even in murky water.`,japanese:`岩の　ように　硬い　腕を
一振り　するだけで　巨大な　岩を
コナゴナに　砕くぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",height:15,weight:819},{id:261,names:{korean:"포챠나",english:"Poochyena",japanese:"ポチエナ"},descriptions:{korean:`집요한 성격의 포켓몬이다.
점찍은 먹이가 기진맥진
지칠 때까지 뒤쫓아간다.`,english:`At first sight, POOCHYENA takes a bite
at anything that moves.
This POKéMON chases after prey until\fthe victim becomes exhausted.
However, it may turn tail if the prey
strikes back.`,japanese:`しつこい　性格の　ポケモン。
目をつけた　獲物が　ヘトヘトに
疲れるまで　追いかけ回す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",height:5,weight:136},{id:262,names:{korean:"그라에나",english:"Mightyena",japanese:"グラエナ"},descriptions:{korean:`우수한 트레이너의 명령에는
절대복종한다. 먼 옛날
무리를 지어 행동했던 영향이다.`,english:`MIGHTYENA gives obvious signals when
it is preparing to attack. It starts to
growl deeply and then flattens its body.\fThis POKéMON will bite savagely with its
sharply pointed fangs.`,japanese:`優れた　トレーナーの　命令には
絶対に　服従。大昔に
群れで　行動していた　名残り。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",height:10,weight:370},{id:263,names:{korean:"지그제구리",english:"Zigzagoon",japanese:"ジグザグマ"},descriptions:{korean:`지그재그로 걸어서 풀숲이나
땅에 묻혀 있는 보물을
찾아내는 것이 특기인 포켓몬이다.`,english:`ZIGZAGOON restlessly wanders
everywhere at all times. This POKéMON
does so because it is very curious.\fIt becomes interested in anything
that it happens to see.`,japanese:`ジグザグに　歩いて　草陰や
地面に　埋まっている　宝物を
見つけるのが　得意な　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",height:4,weight:175},{id:264,names:{korean:"직구리",english:"Linoone",japanese:"マッスグマ"},descriptions:{korean:`똑바로 달리는 스피드는
시속 100km를 가볍게 넘는다.
휘어진 길은 매우 서툴다.`,english:`LINOONE always runs full speed and only
in straight lines. If facing an obstacle,
it makes a right-angle turn to evade it.\fThis POKéMON is very challenged by
gently curving roads.`,japanese:`まっすぐ　走る　スピードは
時速１００キロを　軽く　超える。
曲がった　道は　とても　苦手。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",height:5,weight:325},{id:265,names:{korean:"개무소",english:"Wurmple",japanese:"ケムッソ"},descriptions:{korean:`잎사귀를 매우 좋아한다.
찌르꼬에게 습격당했을 때는
엉덩이의 가시로 물리친다.`,english:`Using the spikes on its rear end,  
WURMPLE peels the bark off trees and
feeds on the sap that oozes out.\fThis POKéMON’s feet are tipped with
suction pads that allow it to cling to
glass without slipping.`,japanese:`葉っぱが　大好物。
ムックルに　襲われたときは
お尻の　トゲで　撃退する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",height:3,weight:36},{id:266,names:{korean:"실쿤",english:"Silcoon",japanese:"カラサリス"},descriptions:{korean:`실을 나뭇가지에 휘감고 있다.
실에 묻은 빗물을 마시며
진화할 때를 기다리고 있다.`,english:`SILCOON tethers itself to a tree branch
using silk to keep from falling. There, 
this POKéMON hangs quietly while it\fawaits evolution.
It peers out of the silk cocoon through
a small hole.`,japanese:`糸を　木の枝に　巻きつけている。
糸についた　雨水を　飲みながら
進化の　ときを　待っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",height:6,weight:100},{id:267,names:{korean:"뷰티플라이",english:"Beautifly",japanese:"アゲハント"},descriptions:{korean:`색이 선명한 날개의 무늬가
특징이다. 가는 입을 뻗어
꽃의 달콤한 꿀을 흡수한다.`,english:`BEAUTIFLY’s favorite food is the sweet
pollen of flowers. If you want to see
this POKéMON, just leave a potted\fflower by an open window. BEAUTIFLY
is sure to come looking for pollen.`,japanese:`色　鮮やかな　羽の　模様が　特徴。
細い　口を　伸ばして
花の　甘い　ミツを　吸い取る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",height:10,weight:284},{id:268,names:{korean:"카스쿤",english:"Cascoon",japanese:"マユルド"},descriptions:{korean:`부드러운 실로 된 몸은
시간이 지나면서 단단해진다.
진화가 임박하면 갈라지기 시작한다.`,english:`CASCOON makes its protective cocoon
by wrapping its body entirely with a
fine silk from its mouth. Once the silk\fgoes around its body, it hardens.
This POKéMON prepares for its evolution
inside the cocoon.`,japanese:`やわらかい　糸で　できた　体は
時間と　ともに　硬くなっていく。
ひび割れると　進化は　間近だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",height:7,weight:115},{id:269,names:{korean:"독케일",english:"Dustox",japanese:"ドクケイル"},descriptions:{korean:`야행성 포켓몬이다. 불빛에
이끌려나온 독케일이 가로수의
잎을 헤적거리며 먹어댄다.`,english:`DUSTOX is instinctively drawn to light.
Swarms of this POKéMON are attracted
by the bright lights of cities, where\fthey wreak havoc by stripping the
leaves off roadside trees for food.`,japanese:`夜行性の　ポケモン。
明かりに　誘われた　ドクケイルが
街路樹の　葉を　食い散らかす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",height:12,weight:316},{id:270,names:{korean:"연꽃몬",english:"Lotad",japanese:"ハスボー"},descriptions:{korean:`수초를 똑 닮은 포켓몬이다.
헤엄을 못 치는 포켓몬을 잎사귀에
태워 건너편 물가까지 운반한다.`,english:`It searches about for clean water. If it does not
drink water for too long, the leaf on its head wilts.`,japanese:`水草に　そっくりな　ポケモン。
泳げない　ポケモンを　葉っぱに
乗せて　向こう岸まで　運ぶ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",height:5,weight:26},{id:271,names:{korean:"로토스",english:"Lombre",japanese:"ハスブレロ"},descriptions:{korean:`햇볕이 잘 드는 물가에 산다.
낮에는 수초로 된 침대에서
자고 해가 지면 활동하기 시작한다.`,english:`It lives at the water’s edge where it is
sunny. It sleeps on a bed of water grass
by day and becomes active at night.`,japanese:`日当たりの　良い　水辺に　住む。
昼間は　水草の　ベッドで　眠り
日が　暮れると　動き出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",height:12,weight:325},{id:272,names:{korean:"로파파",english:"Ludicolo",japanese:"ルンパッパ"},descriptions:{korean:`경쾌한 음악을 들으면
몸속의 힘이 넘쳐흘러
춤추지 않고는 견딜 수 없게 된다.`,english:`LUDICOLO begins dancing as soon as
it hears cheerful, festive music.
This POKéMON is said to appear when it\fhears the singing of children on hiking
outings.`,japanese:`陽気な　音楽を　聴くと
体中に　力が　みなぎり
踊らずには　いられなくなるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",height:15,weight:550},{id:273,names:{korean:"도토링",english:"Seedot",japanese:"タネボー"},descriptions:{korean:`머리끝을 가지에 붙여
매달린다. 강풍이 불어
떨어지기도 한다.`,english:`SEEDOT attaches itself to a tree
branch using the top of its head.
It sucks moisture from the tree while\fhanging off the branch.
The more water it drinks, the glossier
this POKéMON’s body becomes.`,japanese:`頭の　先を　枝に　くっつけて
ぶら下がる。強風に　あおられ
落ちてしまう　ことも　あるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",height:5,weight:40},{id:274,names:{korean:"잎새코",english:"Nuzleaf",japanese:"コノハナ"},descriptions:{korean:`잎새코가 연주하는 풀피리의
음색은 사람을 불안하게 만든다.
숲 속에서 살고 있다.`,english:`NUZLEAF live in densely overgrown
forests. They occasionally venture out
of the forest to startle people.\fThis POKéMON dislikes having its long
nose pinched.`,japanese:`コノハナが　奏でる　草笛の　音色は
人を　不安にさせる。
森の　奥に　住んでいる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",height:10,weight:280},{id:275,names:{korean:"다탱구",english:"Shiftry",japanese:"ダーテング"},descriptions:{korean:`숲의 신이라고 여겨져 두려움의
대상이 되고 있던 포켓몬. 상대의
생각을 읽고 앞지르는 능력을 지녔다.`,english:`It lives quietly in the deep forest.
It is said to create chilly winter
winds with the fans it holds.`,japanese:`森の　神様と　恐れられていた
ポケモン。相手の　考えを　読み
先回りする　能力を　持つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",height:13,weight:596},{id:276,names:{korean:"테일로",english:"Taillow",japanese:"スバメ"},descriptions:{korean:`강한 상대에게도 용감히
맞서는 근성의 소유자다.
따뜻한 땅을 찾아서 난다.`,english:`TAILLOW courageously stands its
ground against foes, however strong
they may be.\fThis gutsy POKéMON will remain defiant
even after a loss. On the other hand,
it cries loudly if it becomes hungry.`,japanese:`強い　相手にも　勇敢に
立ち向かう　根性の　持ち主。
暖かい　土地を　目指して　飛ぶ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",height:3,weight:23},{id:277,names:{korean:"스왈로",english:"Swellow",japanese:"オオスバメ"},descriptions:{korean:`2개의 꼬리날개가 꼿꼿하게
서 있으면 건강하다는 증거다.
우아하게 넓은 하늘을 날아다닌다.`,english:`SWELLOW flies high above our heads,
making graceful arcs in the sky.
This POKéMON dives at a steep angle as\fsoon as it spots its prey. The hapless
prey is tightly grasped by SWELLOW’s
clawed feet, preventing escape.`,japanese:`２本の　尾羽が　ピンと　立って
いれば　健康な　証拠。
優雅に　大空を　飛び回る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",height:7,weight:198},{id:278,names:{korean:"갈모매",english:"Wingull",japanese:"キャモメ"},descriptions:{korean:`긴 날개로 바닷바람을 받아서
글라이더처럼 활공한다.
쉴 때는 날개를 접는다.`,english:`WINGULL has the habit of carrying prey
and valuables in its beak and hiding
them in all sorts of locations.\fThis POKéMON rides the winds and flies
as if it were skating across the sky.`,japanese:`長い　翼で　海風を　受けて
グライダーのように　滑空する。
休むときは　翼を　折り畳む。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",height:6,weight:95},{id:279,names:{korean:"패리퍼",english:"Pelipper",japanese:"ペリッパー"},descriptions:{korean:`큰 부리를 바다에 넣고 먹이를
한 번에 많이 건져 올리려는
속셈이다.`,english:`It is a messenger of the skies,
carrying small Pokémon and
eggs to safety in its bill.`,japanese:`大きな　クチバシを　海に　入れて
ひとすくいすると　エサが　たくさん
入っているという　寸法だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",height:12,weight:280},{id:280,names:{korean:"랄토스",english:"Ralts",japanese:"ラルトス"},descriptions:{korean:`빨간 뿔로 사람이나 포켓몬의
따뜻한 마음을 캐치하면
전신이 미약하게 뜨거워진다.`,english:`RALTS senses the emotions of
people using the horns on its head.
This POKéMON rarely appears before\fpeople. But when it does, it draws
closer if it senses that the person has
a positive disposition.`,japanese:`赤いツノで　人や　ポケモンの
温かな　気持ちを　キャッチすると
全身が　ほのかに　熱くなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",height:4,weight:66},{id:281,names:{korean:"킬리아",english:"Kirlia",japanese:"キルリア"},descriptions:{korean:`트레이너의 밝은 마음이
사이코 파워의 근원이다.
즐거워지면 빙글빙글 춤춘다.`,english:`It is said that a KIRLIA that is
exposed to the positive emotions of
its TRAINER grows beautiful.\fThis POKéMON controls psychokinetic
powers with its highly developed brain.`,japanese:`トレーナーの　明るい　気持ちが
サイコパワーの　源。楽しい
気分に　なると　クルクル　踊る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",height:8,weight:202},{id:282,names:{korean:"가디안",english:"Gardevoir",japanese:"サーナイト"},descriptions:{korean:`트레이너를 지키기 위해서라면
사이코 파워를 모두 써서 작은
블랙홀을 만들어 낸다.`,english:`GARDEVOIR has the ability to read the
future. If it senses impending danger
to its TRAINER, this POKéMON is said to\funleash its psychokinetic energy at
full power.`,japanese:`トレーナーを　守るためなら
サイコパワーを　使いきり　小さな
ブラックホールを　作り出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",height:16,weight:484},{id:283,names:{korean:"비구술",english:"Surskit",japanese:"アメタマ"},descriptions:{korean:`보통은 연못에서 살고 있지만
소나기가 온 뒤에는 마을 안의
물웅덩이에 모습을 드러낸다.`,english:`From the tips of its feet, SURSKIT
secretes an oil that enables it to walk
on water as if it were skating.\fThis POKéMON feeds on microscopic
organisms in ponds and lakes.`,japanese:`普段は　池に　住んでいるが
夕立の　後には　街中の
水たまりに　姿を　現す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",height:5,weight:17},{id:284,names:{korean:"비나방",english:"Masquerain",japanese:"アメモース"},descriptions:{korean:`눈알 모양의 더듬이를 가지고 있다.
4장의 날개로 떠올라
전후좌우로 움직일 수 있다.`,english:`MASQUERAIN intimidates enemies with
the eyelike patterns on its antennas.
This POKéMON flaps its four wings to\ffreely fly in any direction - even
sideways and backwards - as if it were
a helicopter.`,japanese:`目玉模様の　触角を　持つ。
４枚の　羽で　浮かび上がり
前後左右に　動くことができる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",height:8,weight:36},{id:285,names:{korean:"버섯꼬",english:"Shroomish",japanese:"キノココ"},descriptions:{korean:`습한 장소를 좋아해서 낮에는
숲의 그늘에서 가만히 있다.
머리에서 독가루를 뿌린다.`,english:`SHROOMISH live in damp soil in the dark
depths of forests. They are often
found keeping still under fallen leaves.\fThis POKéMON feeds on compost that
is made up of fallen, rotted leaves.`,japanese:`湿った　場所を　好み　昼間は
森の　木陰で　じっと　している。
頭から　毒の　粉を　出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",height:4,weight:45},{id:286,names:{korean:"버섯모",english:"Breloom",japanese:"キノガッサ"},descriptions:{korean:`짧은 팔은 펀치를 날릴 때
쑤-욱 늘어난다. 프로 복서를
압도하는 기술을 가지고 있다.`,english:`BRELOOM closes in on its foe with light
and sprightly footwork, then throws
punches with its stretchy arms.\fThis POKéMON’s fighting technique puts
boxers to shame.`,japanese:`短い　腕は　パンチを　出すとき
グーンと　伸びる。プロボクサー
顔負けの　テクニックを　持つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",height:12,weight:392},{id:287,names:{korean:"게을로",english:"Slakoth",japanese:"ナマケロ"},descriptions:{korean:`게을로의 게으른 모습은
보고 있는 사람의 게으른 마음을
충분히 자극한다.`,english:`SLAKOTH lolls around for over twenty
hours every day. Because it moves so
little, it does not need much food.\fThis POKéMON’s sole daily meal consists
of just three leaves.`,japanese:`ナマケロの　怠けた　様子は
見ている　人の　怠け心を
存分に　刺激するのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",height:8,weight:240},{id:288,names:{korean:"발바로",english:"Vigoroth",japanese:"ヤルキモノ"},descriptions:{korean:`심장 박동이 빨라 전신의
피가 끓어오르고 있기 때문에
1초도 가만히 있지 못한다.`,english:`VIGOROTH is always itching and agitated
to go on a wild rampage. It simply can’t
tolerate sitting still for even a minute.\fThis POKéMON’s stress level rises if it
can’t be moving constantly.`,japanese:`心臓の　鼓動が　速く
全身の　血が　たぎっているため
１秒も　じっと　していられない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",height:14,weight:465},{id:289,names:{korean:"게을킹",english:"Slaking",japanese:"ケッキング"},descriptions:{korean:`세계에서 제일 게으른 포켓몬이다.
손이 닿는 범위의 먹이를
다 먹으면 있는 거처를 바꾼다.`,english:`SLAKING spends all day lying down and
lolling about.
It eats grass growing within its reach.\fIf it eats all the grass it can reach,
this POKéMON reluctantly moves to
another spot.`,japanese:`世界一　ぐうたらな　ポケモン。
手が　届く　範囲の　エサを
食べつくすと　居場所を　替える。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",height:20,weight:1305},{id:290,names:{korean:"토중몬",english:"Nincada",japanese:"ツチニン"},descriptions:{korean:`긴 시간 동안 땅속에서 살고
있었기 때문에 눈은 거의 보이지 않는다.
더듬이로 주변 상황을 살핀다.`,english:`NINCADA lives underground for many
years in complete darkness.
This POKéMON absorbs nutrients from\fthe roots of trees. It stays motionless
as it waits for evolution.`,japanese:`長い　あいだ　地中で　暮らして
いたため　目は　ほとんど　見えない。
触覚で　様子を　探る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",height:5,weight:55},{id:291,names:{korean:"아이스크",english:"Ninjask",japanese:"テッカニン"},descriptions:{korean:`울음소리를 계속 들으면
두통이 낫지 않게 된다.
안 보일 정도의 스피드로 움직인다.`,english:`NINJASK moves around at such a high
speed that it cannot be seen, even
while its crying can be clearly heard.\fFor that reason, this POKéMON was long
believed to be invisible.`,japanese:`鳴き声を　聞き続けると
頭痛が　治まらなくなる。
見えない　ほどの　速さで　動く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",height:8,weight:120},{id:292,names:{korean:"껍질몬",english:"Shedinja",japanese:"ヌケニン"},descriptions:{korean:`허물 속으로 영혼이 들어갔다.
등에 난 틈새로 들여다보면
영혼을 빼앗겨버린다고 한다.`,english:`SHEDINJA’s hard body doesn’t move -
not even a twitch. In fact, its body
appears to be merely a hollow shell.\fIt is believed that this POKéMON will
steal the spirit of anyone peering into
its hollow body from its back.`,japanese:`抜け殻が　魂を　宿した。
背中の　すきまから　のぞきこむと
魂を　吸われてしまうらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",height:8,weight:12},{id:293,names:{korean:"소곤룡",english:"Whismur",japanese:"ゴニョニョ"},descriptions:{korean:`평소에는 속삭이는 듯한 목소리다. 위험을
감지하면 큰 소리로 울기 시작한다.
귀의 덮개를 닫으면 울음을 멈춘다.`,english:`Normally, WHISMUR’s voice is very quiet -
it is barely audible even if one is
paying close attention.\fHowever, if this POKéMON senses danger,
it starts crying at an earsplitting
volume.`,japanese:`普段は　ささやき　声。危険を
察知すると　大声で　泣き出す。
耳の　蓋を　閉じると　泣きやむ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",height:6,weight:163},{id:294,names:{korean:"노공룡",english:"Loudred",japanese:"ドゴーム"},descriptions:{korean:`마음껏 들이마신 공기를
발달한 복근을 써서
토해내 큰 소리를 낸다.`,english:`LOUDRED’s bellowing can completely
decimate a wood-frame house. It uses
its voice to punish its foes.\fThis POKéMON’s round ears serve as
loudspeakers.`,japanese:`思い切り　吸いこんだ　空気を
発達した　腹筋を　使って
吐き出すことで　大声を　出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",height:10,weight:405},{id:295,names:{korean:"폭음룡",english:"Exploud",japanese:"バクオング"},descriptions:{korean:`폭음룡이 짖는 소리는 10km
전방까지 닿는다. 몸 곳곳의
구멍에서 갖가지 소리를 낸다.`,english:`EXPLOUD triggers earthquakes with the
tremors it creates by bellowing. If this
POKéMON violently inhales from the\fports on its body, it’s a sign that it is
preparing to let loose a huge bellow.`,japanese:`バクオングの　遠ぼえは　１０キロ
先まで　届く。体中の　穴から
さまざまな　音を　出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",height:15,weight:840},{id:296,names:{korean:"마크탕",english:"Makuhita",japanese:"マクノシタ"},descriptions:{korean:`큰 나무에 몇 번이나 몸통박치기를
하며 강인한 몸과 굴하지 않는
마음을 단련한다.`,english:`MAKUHITA is tenacious - it will keep
getting up and attacking its foe
however many times it is knocked down.\fEvery time it gets back up, this
POKéMON stores more energy in its body
for evolving.`,japanese:`大木に　何度も　体当たりして
強靭な　体と　くじけない　心を
鍛え上げるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",height:10,weight:864},{id:297,names:{korean:"하리뭉",english:"Hariyama",japanese:"ハリテヤマ"},descriptions:{korean:`두 다리로 땅을 힘껏 밟아서
파워를 모은다. 손바닥 치기 한 방으로
10톤 트럭을 날려버린다.`,english:`It has the habit of challenging others
without hesitation to tests of strength.
It’s been known to stand on train tracks
and stop trains using forearm thrusts.`,japanese:`両足で　地面を　踏み鳴らして
パワーを　ためる。張り手　１発で
１０トン　トラックを　吹っ飛ばす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",height:23,weight:2538},{id:298,names:{korean:"루리리",english:"Azurill",japanese:"ルリリ"},descriptions:{korean:`큰 꼬리에 타고 튀면
지상에서 빨리 이동할 수 있다.
물가에서 사는 포켓몬이다.`,english:`A Pokémon that lives by water.
It moves quickly on land by
bouncing on its big tail.`,japanese:`大きな　尻尾に　乗って　弾むと
地上では　速く　移動できる。
水辺で　暮らす　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",height:2,weight:20},{id:299,names:{korean:"코코파스",english:"Nosepass",japanese:"ノズパス"},descriptions:{korean:`항상 북쪽을 향한다.
자석의 코로 주변의 철을
끌어당겨 방어를 굳힌다.`,english:`NOSEPASS’s magnetic nose is always
pointed to the north. If two of these
POKéMON meet, they cannot turn\ftheir faces to each other when they
are close because their magnetic noses
repel one another.`,japanese:`いつも　北を　向いている
磁石の　鼻で　まわりの　鉄を
引き寄せて　守りを　固めるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",height:10,weight:970},{id:300,names:{korean:"에나비",english:"Skitty",japanese:"エネコ"},descriptions:{korean:`움직이는 것을 무심코 쫓아간다.
자신의 꼬리를 쫓아서
똑같은 장소를 빙글빙글 돈다.`,english:`SKITTY has the habit of becoming
fascinated by moving objects and
chasing them around.\fThis POKéMON is known to chase after
its own tail and become dizzy.`,japanese:`動くものを　つい　追ってしまう。
自分の　尻尾を　追いかけて
同じ　場所を　グルグル　回る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",height:6,weight:110},{id:301,names:{korean:"델케티",english:"Delcatty",japanese:"エネコロロ"},descriptions:{korean:`더러운 곳을 아주 싫어한다.
편안한 곳에서
늘 털을 다듬고 있다.`,english:`DELCATTY prefers to live an unfettered
existence in which it can do as it
pleases at its own pace.\fBecause this POKéMON eats and sleeps
whenever it decides, its daily routines
are completely random.`,japanese:`汚い　場所が　大嫌い。
居心地の　良い　場所で
いつも　毛並みを　手入れしている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",height:11,weight:326},{id:302,names:{korean:"깜까미",english:"Sableye",japanese:"ヤミラミ"},descriptions:{korean:`동굴의 어둠에 숨는다.
보석을 먹는 사이에
눈이 보석이 되어 버렸다.`,english:`SABLEYE lead quiet lives deep inside
caverns. They are feared, however,
because these POKéMON are thought to\fsteal the spirits of people when their
eyes burn with a sinister glow in the
darkness.`,japanese:`洞窟の　暗闇に　潜む。
宝石を　食べているうちに
目が　宝石に　なってしまった。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",height:5,weight:110},{id:303,names:{korean:"입치트",english:"Mawile",japanese:"クチート"},descriptions:{korean:`얌전한 얼굴로 상대를 방심하게
만들고 큰 턱으로 덥석 문다.
한번 물면 절대로 놓지 않는다.`,english:`MAWHILE’s huge jaws are actually steel
horns that have been transformed.
Its docile-looking face serves to lull\fits foe into letting down its guard.
When the foe least expects it, MAWHILE
chomps it with its gaping jaws.`,japanese:`おとなしい　顔で　相手を　油断
させてから　おおあごで　がぶり。
かみつくと　絶対に　放さない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",height:6,weight:115},{id:304,names:{korean:"가보리",english:"Aron",japanese:"ココドラ"},descriptions:{korean:`평소에는 산속에서 살고 있지만
배가 고프면 산기슭에 나타나
선로나 차를 먹어 버린다.`,english:`This POKéMON has a body of steel.
To make its body, ARON feeds on
iron ore that it digs from mountains.\fOccasionally, it causes major trouble by
eating bridges and rails.`,japanese:`普段は　山奥で　暮らしているが
お腹が　すくと　ふもとに　現われ
線路や　車を　食べてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",height:4,weight:600},{id:305,names:{korean:"갱도라",english:"Lairon",japanese:"コドラ"},descriptions:{korean:`철광석을 매우 좋아한다.
강철의 몸을 서로 부딪치며
영역 싸움을 한다.`,english:`LAIRON tempers its steel body by
drinking highly nutritious mineral
springwater until it is bloated.\fThis POKéMON makes its nest close to
springs of delicious water.`,japanese:`鉄鉱石が　大好物。
鋼の　体を　ぶつけ合って
縄張り　争いを　する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",height:9,weight:1200},{id:306,names:{korean:"보스로라",english:"Aggron",japanese:"ボスゴドラ"},descriptions:{korean:`산을 통째로 영역으로 한다.
상처가 많은 보스로라일수록
많이 싸웠다는 것이므로 얕볼 수 없다.`,english:`AGGRON claims an entire mountain as its
own territory. It mercilessly beats up
anything that violates its environment.\fThis POKéMON vigilantly patrols its
territory at all times.`,japanese:`山を　まるごと　縄張りに　する。
傷が　多い　ボスゴドラほど
戦っているので　侮れない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",height:21,weight:3600},{id:307,names:{korean:"요가랑",english:"Meditite",japanese:"アサナン"},descriptions:{korean:`평상시는 깊은 산속에서 수행한다.
명상을 하고 정신력을
높이면 몸이 떠오른다.`,english:`MEDITITE undertakes rigorous mental
training deep in the mountains.
However, whenever it meditates, this\fPOKéMON always loses its concentration
and focus. As a result, its training
never ends.`,japanese:`いつもは　山奥で　修行。
めいそうをして　精神力を　高めると
体が　浮かび上がる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",height:6,weight:112},{id:308,names:{korean:"요가램",english:"Medicham",japanese:"チャーレム"},descriptions:{korean:`춤추는 듯한 우아한 움직임으로
공격을 피하며 상대에게
강력한 일격을 선사한다.`,english:`It is said that through meditation,
MEDICHAM heightens energy inside
its body and sharpens its sixth sense.\fThis POKéMON hides its presence by
merging itself with fields and
mountains.`,japanese:`ダンスの　ような　優雅な　動きで
攻撃を　交わして　強烈な　一撃を
相手に　お見舞いする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",height:13,weight:315},{id:309,names:{korean:"썬더라이",english:"Electrike",japanese:"ラクライ"},descriptions:{korean:`긴 털이 마찰하는 과정에서
전신에 정전기가 모인다.
스피드가 특기인 포켓몬이다.`,english:`ELECTRIKE stores electricity in its
long body hair. This POKéMON stimulates
its leg muscles with electric charges.\fThese jolts of power give its legs
explosive acceleration performance.`,japanese:`体毛に　ためた　電気を　使い
筋肉を　刺激することで
瞬発力を　高める。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",height:6,weight:152},{id:310,names:{korean:"썬더볼트",english:"Manectric",japanese:"ライボルト"},descriptions:{korean:`좀처럼 사람 앞에 모습을
드러내지 않는다. 번개가 떨어진
곳에 보금자리가 있다고 한다.`,english:`MANECTRIC is constantly discharging
electricity from its mane. The sparks
sometimes ignite forest fires.\fWhen it enters a battle, this POKéMON
creates thunderclouds.`,japanese:`人前には　めったに　姿を　見せない。
雷の　落ちた　場所に
住処が　あると　いう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",height:15,weight:402},{id:311,names:{korean:"플러시",english:"Plusle",japanese:"プラスル"},descriptions:{korean:`스파크를 톡톡 만들어
동료를 응원한다.
전신주에서 전기를 흡수한다.`,english:`PLUSLE always acts as a cheerleader
for its partners. Whenever a teammate
puts out a good effort in battle, this\fPOKéMON shorts out its body to create
the crackling noises of sparks to show
its joy.`,japanese:`火花の　ボンボンを　作って
仲間を　応援する。
電柱から　電気を　吸い取る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",height:4,weight:42},{id:312,names:{korean:"마이농",english:"Minun",japanese:"マイナン"},descriptions:{korean:`마이농과 플러시의 전기는
혈액의 흐름을 좋게 하여
근육 결림을 푸는 효과가 있다.`,english:`MINUN is more concerned about cheering
on its partners than its own safety.
It shorts out the electricity in its\fbody to create brilliant showers of
sparks to cheer on its teammates.`,japanese:`マイナンと　プラスルの　電気は
血液の　流れを　良くして
こりを　ほぐす　効果が　ある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",height:4,weight:42},{id:313,names:{korean:"볼비트",english:"Volbeat",japanese:"バルビート"},descriptions:{korean:`밤이 되면 엉덩이를 빛나게 해
동료와 대화한다. 네오비트가
내는 달콤한 향기를 매우 좋아한다.`,english:`With the arrival of night, VOLBEAT emits
light from its tail. It communicates with
others by adjusting the intensity and\fflashing of its light.
This POKéMON is attracted by the sweet
aroma of ILLUMISE.`,japanese:`夜になると　お尻を　光らせ
仲間と　会話する。イルミーゼの
出す　甘い　香りが　大好き。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",height:7,weight:177},{id:314,names:{korean:"네오비트",english:"Illumise",japanese:"イルミーゼ"},descriptions:{korean:`달콤한 향기로 볼비트를
유도해서 200개 이상의
모양을 밤하늘에 그린다.`,english:`With its sweet aroma, it guides
Volbeat to draw signs with light in
the night sky.`,japanese:`甘い　香りで　バルビートを　誘導して
２００　以上の　模様を
夜空に　描く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",height:6,weight:177},{id:315,names:{korean:"로젤리아",english:"Roselia",japanese:"ロゼリア"},descriptions:{korean:`오른손과 왼손으로 2종류의
독을 구별하여 공격한다.
향기가 강할수록 기운이 넘친다.`,english:`ROSELIA shoots sharp thorns as
projectiles at any opponent that tries
to steal the flowers on its arms.\fThe aroma of this POKéMON brings
serenity to living things.`,japanese:`右手と　左手で　２種類の
毒を　使いわけて　攻撃する。
香りが　強いほど　元気だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",height:3,weight:20},{id:316,names:{korean:"꼴깍몬",english:"Gulpin",japanese:"ゴクリン"},descriptions:{korean:`심장과 뇌가 작고
몸 대부분이 위다.
무엇이든 녹이는 위액을 낸다.`,english:`Virtually all of GULPIN’s body is its
stomach. As a result, it can swallow
something its own size.\fThis POKéMON’s stomach contains a
special fluid that digests anything.`,japanese:`心臓や　脳みそは　小さく
体の　大部分が　胃袋。
なんでも　溶かす　胃液を　出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",height:4,weight:103},{id:317,names:{korean:"꿀꺽몬",english:"Swalot",japanese:"マルノーム"},descriptions:{korean:`무엇이든 통째로 삼켜 버린다.
모공에서 맹독의 체액을
분비하여 상대에게 끼얹는다.`,english:`When SWALOT spots prey, it spurts out
a hideously toxic fluid from its pores
and sprays the target.\fOnce the prey has weakened, this
POKéMON gulps it down whole with its
cavernous mouth.`,japanese:`なんでも　まるのみしてしまう。
毛穴から　猛毒の　体液を
分泌して　敵に　浴びせかける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",height:17,weight:800},{id:318,names:{korean:"샤프니아",english:"Carvanha",japanese:"キバニア"},descriptions:{korean:`집단으로 배를 공격해
배의 밑바닥도 물어뜯어 가라앉힌다.
정글의 강에 서식한다.`,english:`CARVANHA’s strongly developed jaws
and its sharply pointed fangs pack the
destructive power to rip out boat hulls.\fMany boats have been attacked and
sunk by this POKéMON.`,japanese:`集団で　船に　襲いかかり
船底を　食いちぎり　沈める。
ジャングルの　川に　生息する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",height:8,weight:208},{id:319,names:{korean:"샤크니아",english:"Sharpedo",japanese:"サメハダー"},descriptions:{korean:`철판도 물어 찢는 이빨을 가지며
헤엄치는 속도는 시속 120km다.
별명은 바다의 건달이다.`,english:`Nicknamed “the bully of the sea,”
SHARPEDO is widely feared.
Its cruel fangs grow back immediately\fif they snap off.
Just one of these POKéMON can
thoroughly tear apart a supertanker.`,japanese:`鉄板も　かみちぎる　キバを　持ち
泳ぐ　速度は　時速１２０キロ。
別名は　海のギャング。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",height:18,weight:888},{id:320,names:{korean:"고래왕자",english:"Wailmer",japanese:"ホエルコ"},descriptions:{korean:`공처럼 튀면서 논다.
해수를 많이 마실수록
높이 튀게 된다.`,english:`WAILMER’s nostrils are located above
its eyes. This playful POKéMON loves
to startle people by forcefully snorting\fout seawater it stores inside its body
out of its nostrils.`,japanese:`ボールの　ように　弾んで　遊ぶ。
たくさんの　海水を　飲みこむほど
高く　弾むように　なるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",height:20,weight:1300},{id:321,names:{korean:"고래왕",english:"Wailord",japanese:"ホエルオー"},descriptions:{korean:`커다란 몸을 파도 위에서
점프시켜 충격을 만들어
상대를 기절시킬 때가 있다.`,english:`WAILORD is the largest of all identified
POKéMON up to now.
This giant POKéMON swims languorously\fin the vast open sea, eating massive
amounts of food at once with its
enormous mouth.`,japanese:`大きな　体を　波の上で
ジャンプさせ　衝撃を　生みだし
相手を　気絶　させることがある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",height:145,weight:3980},{id:322,names:{korean:"둔타",english:"Numel",japanese:"ドンメル"},descriptions:{korean:`이글거리는 마그마를 등의
혹에 모으고 있다. 비를 맞으면
마그마가 식어 움직임이 둔해진다.`,english:`NUMEL is extremely dull witted - it
doesn’t notice being hit. However, it
can’t stand hunger for even a second.\fThis POKéMON’s body is a seething
cauldron of boiling magma.`,japanese:`灼熱の　マグマを　背中の
コブに　ためている。雨に　当たると
マグマが　冷えて　動きが　鈍る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",height:7,weight:240},{id:323,names:{korean:"폭타",english:"Camerupt",japanese:"バクーダ"},descriptions:{korean:`등의 혹 모양 화산은
10년마다 대분화하나
심하게 화가 나도 분화한다.`,english:`CAMERUPT has a volcano inside its body.
Magma of 18,000 degrees F courses
through its body.\fOccasionally, the humps on this
POKéMON’s back erupt, spewing the
superheated magma.`,japanese:`背中の　コブの　火山は
１０年ごとに　大噴火　するが
激しく　怒っても　噴火する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",height:19,weight:2200},{id:324,names:{korean:"코터스",english:"Torkoal",japanese:"コータス"},descriptions:{korean:`사용할 수 없게 된 탄광에는
많은 코터스가 살며
석탄을 부지런히 캐고 있다.`,english:`You can tell how it’s feeling by the smoke
spouting from its shell. Tremendous velocity
is a sign of good health.`,japanese:`甲羅から　噴きだす　煙で
体調が　わかる。　勢いが
激しいときは　元気な　証拠。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",height:5,weight:804},{id:325,names:{korean:"피그점프",english:"Spoink",japanese:"バネブー"},descriptions:{korean:`꼬리를 용수철 대용으로 써서 항상
뛰어오르고 있다. 뛰는 반동으로
심장을 고동시키고 있는 것이다.`,english:`SPOINK bounces around on its tail.
The shock of its bouncing makes its
heart pump. As a result, this POKéMON\fcannot afford to stop bouncing - if it
stops, its heart will stop.`,japanese:`尻尾を　バネのかわりに　いつも
飛び跳ねている。跳ねる　振動で
心臓を　鼓動　させているのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",height:7,weight:306},{id:326,names:{korean:"피그킹",english:"Grumpig",japanese:"ブーピッグ"},descriptions:{korean:`흑진주로 사이코 파워를
강하게 하여 기묘한 스텝으로
상대의 마음을 조종한다.`,english:`GRUMPIG uses the black pearls on its
body to amplify its psychic power waves
for gaining total control over its foe.\fWhen this POKéMON uses its special
power, its snorting breath grows
labored.`,japanese:`黒真珠で　サイコパワーを
強め　奇妙な　ステップで
相手の　心を　操るぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",height:9,weight:715},{id:327,names:{korean:"얼루기",english:"Spinda",japanese:"パッチール"},descriptions:{korean:`똑같은 얼룩무늬의 얼루기는
없다. 휘청휘청거리는 걸음걸이로
상대의 노림수를 피한다.`,english:`No two Spinda have the same
pattern of spots. Its tottering
step fouls the aim of foes.`,japanese:`同じ　ブチ模様の　パッチールは
いない。フラフラした　足取りで
相手の　ねらいを　外す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",height:11,weight:50},{id:328,names:{korean:"톱치",english:"Trapinch",japanese:"ナックラー"},descriptions:{korean:`건조한 사막에 서식한다.
원뿔형의 보금자리 속에서
조용히 먹잇감을 계속 기다린다.`,english:`TRAPINCH’s nest is a sloped, bowl-like
pit dug in sand. This POKéMON patiently
waits for prey to tumble down the pit.\fIts giant jaws have enough strength
to crush even boulders.`,japanese:`乾燥した　砂漠に　生息。
すり鉢状の　巣穴の　中で
獲物を　じっと　待ち続ける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",height:7,weight:150},{id:329,names:{korean:"비브라바",english:"Vibrava",japanese:"ビブラーバ"},descriptions:{korean:`2장의 날개를 고속으로
진동시켜서 내는 초음파는
격렬한 두통을 불러일으킨다.`,english:`To make prey faint, VIBRAVA generates
ultrasonic waves by vigorously making
its two wings vibrate.\fThis POKéMON’s ultrasonic waves are so
powerful, they can bring on headaches
in people.`,japanese:`２枚の　羽を　高速で
振動させて　出す　超音波は
激しい　頭痛を　ひきおこす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",height:11,weight:153},{id:330,names:{korean:"플라이곤",english:"Flygon",japanese:"フライゴン"},descriptions:{korean:`날갯짓으로 모래 폭풍을
일으켜 모습을 감춘다. 빨간
덮개가 모래로부터 눈을 보호한다.`,english:`FLYGON is nicknamed “the elemental 
spirit of the desert.” Because its
flapping wings whip up a cloud of sand,\fthis POKéMON is always enveloped in a
sandstorm while flying.`,japanese:`羽の　羽ばたきで　砂漠の　砂を
巻き上げて　姿を　隠す。
赤い　カバーが　砂から　目を　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",height:20,weight:820},{id:331,names:{korean:"선인왕",english:"Cacnea",japanese:"サボネア"},descriptions:{korean:`비가 적은 건조한
지역에 서식한다. 1년에 1번
노랑 꽃을 피운다.`,english:`CACNEA lives in arid locations such
as deserts. It releases a strong aroma
from its flower to attract prey.\fWhen prey comes near, this POKéMON
shoots sharp thorns from its body to
bring the victim down.`,japanese:`雨が　少ない　乾燥した
地域に　生息。１年に　１回
黄色の　花を　咲かせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",height:4,weight:513},{id:332,names:{korean:"밤선인",english:"Cacturne",japanese:"ノクタス"},descriptions:{korean:`밤이 되면 활동을 시작한다.
사막의 뜨거움에 몹시 지친
먹이를 찾아내어 붙잡는다.`,english:`During the daytime, CACTURNE remains
unmoving so that it does not lose any
moisture to the harsh desert sun.\fThis POKéMON becomes active at night
when the temperature drops.`,japanese:`夜になると　活動を　はじめる。
砂漠の　暑さに　疲れ果てた
獲物を　見つけ出し　捕らえるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",height:13,weight:774},{id:333,names:{korean:"파비코",english:"Swablu",japanese:"チルット"},descriptions:{korean:`사람의 머리 위에
살짝 앉아 모자처럼
구는 것을 왠지 좋아한다.`,english:`SWABLU has light and fluffy wings that
are like cottony clouds. This POKéMON
is not frightened of people.\fIt lands on the heads of people and
sits there like a cotton-fluff hat.`,japanese:`人の　頭の　上に
ちょこんと　乗って　帽子のように
ふるまうのが　なぜか　大好き。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",height:4,weight:12},{id:334,names:{korean:"파비코리",english:"Altaria",japanese:"チルタリス"},descriptions:{korean:`넓은 하늘을 느긋하게 난다.
파비코리의 아름다운 콧노래를
들으면 황홀한 꿈을 꾸는 기분이다.`,english:`ALTARIA dances and wheels through the
sky among billowing, cotton-like clouds.
By singing melodies in its crystal-clear\fvoice, this POKéMON makes its listeners
experience dreamy wonderment.`,japanese:`大空を　ゆったりと　飛ぶ。
チルタリスの　美しい　ハミングを
聴くと　うっとり　夢心地だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",height:11,weight:206},{id:335,names:{korean:"쟝고",english:"Zangoose",japanese:"ザングース"},descriptions:{korean:`몇 대에 걸쳐서
세비퍼와 싸워왔다.
날카로운 발톱이 최대의 무기다.`,english:`Memories of battling its arch-rival
SEVIPER are etched into every cell of
ZANGOOSE’s body.\fThis POKéMON adroitly dodges attacks
with incredible agility.`,japanese:`何世代にも　渡って
ハブネークと　戦ってきた。
鋭い　ツメが　最大の　武器。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",height:13,weight:403},{id:336,names:{korean:"세비퍼",english:"Seviper",japanese:"ハブネーク"},descriptions:{korean:`맹독이 배어 나오는
예리하고 잘 드는 꼬리로
재빠른 쟝고에게 맞선다.`,english:`SEVIPER shares a generations-long
feud with ZANGOOSE. The scars on its
body are evidence of vicious battles.\fThis POKéMON attacks using its sword-
edged tail.`,japanese:`猛毒が　染み出している
鋭い　切れ味の　尻尾で
素早い　ザングースに　立ち向かう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",height:27,weight:525},{id:337,names:{korean:"루나톤",english:"Lunatone",japanese:"ルナトーン"},descriptions:{korean:`보름달의 밤이 되면 활발하게
활동하기 때문에 달의 변화와
관계 있다고 전해진다.`,english:`LUNATONE was discovered at a location
where a meteorite fell. As a result, some
people theorize that this POKéMON\fcame from space. However, no one has
been able to prove this theory so far.`,japanese:`満月の　夜になると　活発に
活動するため　月の　満ち欠けと
関係していると　言われている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",height:10,weight:1680},{id:338,names:{korean:"솔록",english:"Solrock",japanese:"ソルロック"},descriptions:{korean:`태양 에너지가 파워의
근원이라서 낮에는 강하다.
회전하면 몸이 빛난다.`,english:`Solar energy is the source of its power,
so it is strong during the daytime.
When it spins, its body shines.`,japanese:`太陽エネルギーが　パワーの
源　なので　昼間は　強い。
回転すると　体が　光る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",height:12,weight:1540},{id:339,names:{korean:"미꾸리",english:"Barboach",japanese:"ドジョッチ"},descriptions:{korean:`전신이 미끈미끈한 체액으로
덮여있기 때문에 잡아도
미끈하게 빠져나갈 수 있다.`,english:`BARBOACH’s sensitive whiskers serve
as a superb radar system.
This POKéMON hides in mud, leaving only\fits two whiskers exposed while it waits
for prey to come along.`,japanese:`全身が　ヌルヌルの　体液で
覆われているため　捕まっても
ぬるりと　抜け出すことが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",height:4,weight:19},{id:340,names:{korean:"메깅",english:"Whiscash",japanese:"ナマズン"},descriptions:{korean:`큰 늪을 영역으로 한다.
적이 가까이 오면 크게 난동 부려서
큰 지진을 일으킨다.`,english:`WHISCASH is extremely territorial.
Just one of these POKéMON will claim a
large pond as its exclusive territory.\fIf a foe approaches it, it thrashes
about and triggers a massive
earthquake.`,japanese:`大きな　沼を　縄張りにする。
敵が　近づくと　大暴れして
大きな　地震を　起こすのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",height:9,weight:236},{id:341,names:{korean:"가재군",english:"Corphish",japanese:"ヘイガニ"},descriptions:{korean:`아무리 물이 더러운
강이라도 적응해서 번식하는
터프한 생명력의 소유자.`,english:`Its hardy vitality enables it to
adapt to any environment. Its
pincers will never release prey.`,japanese:`どんなに　水が　汚れた
川でも　適応して　増えていく
タフな　生命力の　持ち主。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",height:6,weight:115},{id:342,names:{korean:"가재장군",english:"Crawdaunt",japanese:"シザリガー"},descriptions:{korean:`연못에 사는 다른 포켓몬을
집게로 집어들어 연못 밖으로
내던져버리는 난동꾼이다.`,english:`CRAWDAUNT has an extremely violent
nature that compels it to challenge
other living things to battle.\fOther life-forms refuse to live in
ponds inhabited by this POKéMON,
making them desolate places.`,japanese:`池に　住む　ほかの　ポケモンを
ハサミで　つまみ上げ　池の　外へ
放り出してしまう　暴れん坊。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",height:11,weight:328},{id:343,names:{korean:"오뚝군",english:"Baltoy",japanese:"ヤジロン"},descriptions:{korean:`한 다리로 회전하면서
이동한다. 거꾸로
회전하는 오뚝군도 발견된다.`,english:`BALTOY moves while spinning around on
its one foot. Primitive wall paintings
depicting this POKéMON living among\fpeople were discovered in some ancient
ruins.`,japanese:`一本足で　回転しながら　移動する。
逆さまに　なって
回転する　ヤジロンも　見かける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",height:5,weight:215},{id:344,names:{korean:"점토도리",english:"Claydol",japanese:"ネンドール"},descriptions:{korean:`고대의 진흙인형이 괴이한
광선을 쬐어 생명이 깃들면서
포켓몬이 되었다.`,english:`CLAYDOL are said to be dolls of mud made
by primitive humans and brought to life
by exposure to a mysterious ray.\fThis POKéMON moves about while
levitating.`,japanese:`古代の　泥人形が
怪光線を　浴びたことで
命が　宿り　ポケモンとなった。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",height:15,weight:1080},{id:345,names:{korean:"릴링",english:"Lileep",japanese:"リリーラ"},descriptions:{korean:`촉수를 꽃잎으로 보이게 하여
가까이 온 먹이를 잡는다.
1억 년 전에 멸종했다.`,english:`LILEEP became extinct approximately
a hundred million years ago.
This ancient POKéMON attaches itself\fto a rock on the seafloor and catches
approaching prey using tentacles 
shaped like flower petals.`,japanese:`触手を　花びらに　見せかけて
近寄ってきた　獲物を　捕らえる。
１億年前に　絶滅した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",height:10,weight:238},{id:346,names:{korean:"릴리요",english:"Cradily",japanese:"ユレイドル"},descriptions:{korean:`따뜻한 바다의 얕은 곳에 있다.
바닷물이 빠지면 모래 해변에
숨어 있는 먹이를 파내어 먹는다.`,english:`CRADILY roams around the ocean floor
in search of food. This POKéMON freely
extends its tree trunk-like neck and\fcaptures unwary prey using its eight
tentacles.`,japanese:`暖かい　海の　浅瀬に　いる。
潮が　引くと　砂浜に　潜った
獲物を　掘り出して　食べる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",height:15,weight:604},{id:347,names:{korean:"아노딥스",english:"Anorith",japanese:"アノプス"},descriptions:{korean:`포켓몬의 조상 중 하나다.
해저의 바위 지대에 숨어 있는
먹잇감을 늘어나는 발톱으로 잡는다.`,english:`ANORITH was regenerated from a
prehistoric fossil. This primitive
POKéMON once lived in warm seas.\fIt grips its prey firmly between its
two large claws.`,japanese:`ポケモンの　先祖の　一種。
海底の　岩場に　隠れた　獲物を
伸びる　ツノで　捕らえる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",height:7,weight:125},{id:348,names:{korean:"아말도",english:"Armaldo",japanese:"アーマルド"},descriptions:{korean:`늘었다 줄었다 하는 거대한 손톱으로
먹이를 찔러서 잡는다.
튼튼한 갑옷을 몸에 두르고 있다.`,english:`ARMALDO’s tough armor makes all attacks
bounce off. This POKéMON’s two
enormous claws can be freely extended\for contracted. They have the power to
punch right through a steel slab.`,japanese:`伸び縮みする　巨大な　ツメで
獲物を　くし刺しにして　捕らえる。
丈夫な　よろいを　身に　まとう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",height:15,weight:682},{id:349,names:{korean:"빈티나",english:"Feebas",japanese:"ヒンバス"},descriptions:{korean:`무엇이든 먹기 때문에 더러운
강이나 호수에서도 살 수 있다.
누구도 주목하지 않는 포켓몬이다.`,english:`FEEBAS’s fins are ragged and
tattered from the start of its life.
Because of its shoddy appearance, this\fPOKéMON is largely ignored.
It is capable of living in both the sea
and in rivers.`,japanese:`なんでも　食べるので
汚い　川や　湖でも　生きていける。
だれも　注目しない　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",height:6,weight:74},{id:350,names:{korean:"밀로틱",english:"Milotic",japanese:"ミロカロス"},descriptions:{korean:`밀로틱의 아름다운 모습을
본 이는 싸우려던 마음가짐을
잊어버린다고 한다.`,english:`Its lovely scales are described as
rainbow colored. They change color
depending on the viewing angle.`,japanese:`ミロカロスの　美しい　姿を
見た者は　争いの　気持ちを
忘れてしまうと　言われている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",height:62,weight:1620},{id:351,names:{korean:"캐스퐁",english:"Castform",japanese:"ポワルン"},descriptions:{korean:`기온이나 습도의 변화가
몸의 세포에 영향을 주어
모습을 바꾸는 포켓몬이다.`,english:`CASTFORM’s appearance changes with
the weather.
This POKéMON gained the ability to use\fthe vast power of nature to protect
its tiny body.`,japanese:`気温や　湿度の　変化が
体の　細胞に　影響して
姿を　変える　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",height:3,weight:8},{id:352,names:{korean:"켈리몬",english:"Kecleon",japanese:"カクレオン"},descriptions:{korean:`몸의 색을 자유롭게 바꾸는
능력을 가지고 있다. 배에 있는
톱니무늬만은 바뀌지 않는다.`,english:`It changes body color to blend in with
its surroundings. It also changes color if
it is happy or sad.`,japanese:`体の　色を　自由に　変える
能力を　持つ。お腹にある
ギザギザ模様　だけは　変わらない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",height:10,weight:220},{id:353,names:{korean:"어둠대신",english:"Shuppet",japanese:"カゲボウズ"},descriptions:{korean:`머리의 뿔로 원한과 질투의
감정을 먹는다고 전해진다.
한밤중에 활발하게 활동한다.`,english:`SHUPPET is attracted by feelings
of jealousy and vindictiveness.
If someone develops strong feelings of\fvengeance, this POKéMON will appear
in a swarm and line up beneath the eaves
of that person’s home.`,japanese:`頭の　ツノで　恨みや　ねたみの
感情を　食べると　言われる。
真夜中　活発に　活動する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",height:6,weight:23},{id:354,names:{korean:"다크펫",english:"Banette",japanese:"ジュペッタ"},descriptions:{korean:`버려진 인형에 원념이
깃들어 포켓몬이 되었다.
자신을 버린 아이를 찾고 있다.`,english:`BANETTE generates energy for laying
strong curses by sticking pins into its
own body.\fThis POKéMON was originally a pitiful
plush doll that was thrown away.`,japanese:`捨てられた　ぬいぐるみに　おんねんが
宿り　ポケモンになった。自分を
捨てた　子供を　捜している。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",height:11,weight:125},{id:355,names:{korean:"해골몽",english:"Duskull",japanese:"ヨマワル"},descriptions:{korean:`어디까지라도 먹이를 쫓아가는
집념이 강한 성격이지만
아침 해가 떠오르면 포기한다.`,english:`DUSKULL can pass through any wall no
matter how thick it may be.
Once this POKéMON chooses a target,\fit will doggedly pursue the intended
victim until the break of dawn.`,japanese:`どこまでも　獲物を　追い続ける。
執念深い　性格だが
朝日が　昇ると　あきらめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",height:8,weight:150},{id:356,names:{korean:"미라몽",english:"Dusclops",japanese:"サマヨール"},descriptions:{korean:`몸 안에서 불타고 있는
도깨비불을 들여다보면
영혼을 빼앗겨버린다.`,english:`DUSCLOPS’s body is completely hollow -
there is nothing at all inside.
It is said that its body is like a black\fhole. This POKéMON will absorb anything
into its body, but nothing will ever come
back out.`,japanese:`体の　中で　燃えている
人魂を　のぞきこむと
魂を　吸い取られてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",height:16,weight:306},{id:357,names:{korean:"트로피우스",english:"Tropius",japanese:"トロピウス"},descriptions:{korean:`커다란 잎으로 하늘을 날며
아이들에게 인기가 많은 목에
생기는 달콤한 과일을 나눠준다.`,english:`The bunches of fruit around TROPIUS’s
neck are very popular with children.
This POKéMON loves fruit, and eats it\fcontinuously. Apparently, its love for
fruit resulted in its own outgrowth
of fruit.`,japanese:`大きな　葉っぱで　空を飛んで
子供たちに　大人気の　首に
できる　甘い　くだものを　配る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",height:20,weight:1e3},{id:358,names:{korean:"치렁",english:"Chimecho",japanese:"チリーン"},descriptions:{korean:`머리의 빨판으로 나뭇가지나
집의 처마 밑에 매달린다.
7종류의 음색을 나누어 쓴다.`,english:`CHIMECHO makes its cries echo
inside its hollow body. When this
POKéMON becomes enraged, its cries\fresult in ultrasonic waves that have
the power to knock foes flying.`,japanese:`頭の　吸盤で　木の　枝や
家の　軒下に　ぶら下がる。
７種類　音色を　使い分ける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",height:6,weight:10},{id:359,names:{korean:"앱솔",english:"Absol",japanese:"アブソル"},descriptions:{korean:`재해의 위험을 감지한다.
위험을 알리는 때에만
사람 앞에 나타난다고 한다.`,english:`Every time ABSOL appears before people,
it is followed by a disaster such as an
earthquake or a tidal wave.\fAs a result, it came to be known as the
disaster POKéMON.`,japanese:`災害を　予感する。
危険を　知らせる　ときだけ
人前に　現れるという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",height:12,weight:470},{id:360,names:{korean:"마자",english:"Wynaut",japanese:"ソーナノ"},descriptions:{korean:`무리를 지어 행동하는 습성이 있다.
잠들 때는 동굴 안에서
동료들과 서로 몸을 붙인다.`,english:`WYNAUT can always be seen with a big,
happy smile on its face. Look at its tail
to determine if it is angry.\fWhen angered, this POKéMON will be
slapping the ground with its tail.`,japanese:`群れで　行動する　習性。
眠る　ときは　洞窟の　中で
仲間たちと　体を　寄せ合う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",height:6,weight:140},{id:361,names:{korean:"눈꼬마",english:"Snorunt",japanese:"ユキワラシ"},descriptions:{korean:`커다란 잎사귀 아래서
여러 마리의 눈꼬마가 모여
사이좋게 살고 있다고 한다.`,english:`SNORUNT live in regions with heavy
snowfall. In seasons without snow, such
as spring and summer, this POKéMON\fsteals away to live quietly among
stalactites and stalagmites deep in
caverns.`,japanese:`大きな　葉っぱの　下に
数匹の　ユキワラシが　集まり
仲良く　暮らしているという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",height:7,weight:168},{id:362,names:{korean:"얼음귀신",english:"Glalie",japanese:"オニゴーリ"},descriptions:{korean:`공기 중의 수분을 얼려서
얼음 갑옷으로 몸을
둘러싸 몸을 보호한다.`,english:`GLALIE has a body made of rock, which it
hardens with an armor of ice.
This POKéMON has the ability to freeze\fmoisture in the atmosphere into any
shape it desires.`,japanese:`空気中の　水分を　凍らせ
氷の　装甲で　体を　包みこみ
身を　守っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",height:15,weight:2565},{id:363,names:{korean:"대굴레오",english:"Spheal",japanese:"タマザラシ"},descriptions:{korean:`아직 능숙하게 헤엄치지 못하고
구르는 쪽이 빨리 움직일 수 있다.
기쁘면 다 같이 손뼉을 친다.`,english:`SPHEAL is much faster rolling than 
walking to get around. When groups of
this POKéMON eat, they all clap at once\fto show their pleasure. Because of this,
their mealtimes are noisy.`,japanese:`まだ　上手に　泳げず
転がったほうが　速く　動ける。
うれしいと　みんなで　手をたたく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",height:8,weight:395},{id:364,names:{korean:"씨레오",english:"Sealeo",japanese:"トドグラー"},descriptions:{korean:`코의 신경이 민감하다.
처음 보는 것은
코로 문질러서 기억한다.`,english:`SEALEO has the habit of always juggling
on the tip of its nose anything it sees
for the first time.\fThis POKéMON occasionally entertains
itself by balancing and rolling a SPHEAL
on its nose.`,japanese:`鼻の　神経が　敏感。
はじめて　目に　する　物は
鼻で　触って　覚えるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",height:11,weight:876},{id:365,names:{korean:"씨카이저",english:"Walrein",japanese:"トドゼルガ"},descriptions:{korean:`큰 얼음을 이빨로 부순다.
두꺼운 지방은 추위뿐만 아니라
상대의 공격도 이겨낸다.`,english:`It swims through icy seas while shattering
ice floes with its large tusks. It is
protected by its thick blubber.`,japanese:`大きな　氷を　キバで　砕く。
厚い　脂肪は　寒さだけでなく
敵の　攻撃も　はね返す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",height:14,weight:1506},{id:366,names:{korean:"진주몽",english:"Clamperl",japanese:"パールル"},descriptions:{korean:`일생에 한 번 진화할 때
사이코 파워를 증폭시키는
이상한 진주를 만든다.`,english:`CLAMPERL’s sturdy shell is not only good
for protection - it is also used for
clamping and catching prey.\fA fully grown CLAMPERL’s shell will be
scored with nicks and scratches all
over.`,japanese:`一生に　１回　進化の　とき
サイコパワーを　増幅する
不思議な　真珠を　作るのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",height:4,weight:525},{id:367,names:{korean:"헌테일",english:"Huntail",japanese:"ハンテール"},descriptions:{korean:`빛이 닿지 않는 심해에 서식한다.
작은 생선처럼 생긴 꼬리를
빛내어 먹잇감을 유인한다.`,english:`HUNTAIL’s presence went unnoticed by
people for a long time because it lives
at extreme depths in the sea.\fThis POKéMON’s eyes can see clearly
even in the murky dark depths of the
ocean.`,japanese:`光の　届かない　深海に　生息。
小魚に　似た　尻尾を　光らせて
獲物を　誘い出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",height:17,weight:270},{id:368,names:{korean:"분홍장이",english:"Gorebyss",japanese:"サクラビス"},descriptions:{korean:`헤엄치는 모습이 굉장히 우아하다.
가는 입으로 바위 틈새에 나 있는
해초를 먹는다.`,english:`GOREBYSS lives in the southern seas
at extreme depths. Its body is built to
withstand the enormous pressure of\fwater at incredible depths. Because of
this, this POKéMON’s body is unharmed
by ordinary attacks.`,japanese:`海の　底で　暮らしているが
春になると　体の　ピンク色が
なぜか　鮮やかに　色づく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",height:18,weight:226},{id:369,names:{korean:"시라칸",english:"Relicanth",japanese:"ジーランス"},descriptions:{korean:`1억 년 전부터 모습이
바뀌지 않은 포켓몬이다. 심해를
조사하던 중 발견되었다.`,english:`RELICANTH is a POKéMON species that
existed for a hundred million years
without ever changing its form.\fThis ancient POKéMON feeds on
microscopic organisms with its
toothless mouth.`,japanese:`１億年前から
姿が　変わらない　ポケモン。
深海を　調査中に　発見された。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",height:10,weight:234},{id:370,names:{korean:"사랑동이",english:"Luvdisc",japanese:"ラブカス"},descriptions:{korean:`따뜻한 바다에서 서식한다.
사랑동이를 발견한 커플은
영원한 사랑이 지속된다고 한다.`,english:`LUVDISC live in shallow seas in the
tropics. This heart-shaped POKéMON
earned its name by swimming after\floving couples it spotted in the
ocean’s waves.`,japanese:`暖かい　海に　生息する。
ラブカスを　見つけた　カップルは
永遠の　愛が　続くという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",height:6,weight:87},{id:371,names:{korean:"아공이",english:"Bagon",japanese:"タツベイ"},descriptions:{korean:`단련된 목 근육과
철과 같이 단단한 머리로
커다란 바위를 조각조각으로 부순다.`,english:`Dreaming of one day flying, it practices by leaping
off cliffs every day.`,japanese:`鍛えられた　首の　筋肉と
鉄の　ように　硬い　頭で
大岩を　コナゴナに　砕く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",height:6,weight:421},{id:372,names:{korean:"쉘곤",english:"Shelgon",japanese:"コモルー"},descriptions:{korean:`단단한 껍질 안은 세포가
변화를 시작하고 있다. 진화하는
순간에 껍질이 벗겨져 떨어진다.`,english:`Inside SHELGON’s armor-like shell, cells
are in the midst of transformation
to create an entirely new body.\fThis POKéMON’s shell is extremely heavy,
making its movements sluggish.`,japanese:`硬い　殻の　中では　細胞が
変化を　はじめている。進化する
瞬間に　殻が　はがれ落ちる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",height:11,weight:1105},{id:373,names:{korean:"보만다",english:"Salamence",japanese:"ボーマンダ"},descriptions:{korean:`화나게 하면 어쩔 도리가 없다.
모든 것을 발톱으로 갈기갈기 찢고
불꽃으로 태워서 파괴한다.`,english:`SALAMENCE came about as a result of a
strong, long-held dream of growing
wings. It is said that this powerful\fdesire triggered a sudden mutation in
this POKéMON’s cells, causing it to
sprout its magnificent wings.`,japanese:`怒らせると　手が　つけられない。
すべての　ものを　ツメで　切り裂き
炎で　燃やして　破壊する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",height:15,weight:1026},{id:374,names:{korean:"메탕",english:"Beldum",japanese:"ダンバル"},descriptions:{korean:`몸에서 나오는 자력과
지상의 자력을
충돌시켜 하늘에 떠오른다.`,english:`Instead of blood, a powerful magnetic
force courses throughout BELDUM’s
body. This POKéMON communicates with\fothers by sending controlled pulses of
magnetism.`,japanese:`体から　出ている　磁力と
地上の　磁力を　反発させて
空に　浮かぶのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",height:6,weight:952},{id:375,names:{korean:"메탕구",english:"Metang",japanese:"メタング"},descriptions:{korean:`2마리의 메탕이 합체했다.
강철의 몸은 제트기와
충돌해도 상처 입지 않는다.`,english:`When two BELDUM fuse together, METANG
is formed. The brains of the BELDUM are
joined by a magnetic nervous system.\fBy linking its brains magnetically,
this POKéMON generates strong
psychokinetic power.`,japanese:`２匹の　ダンバルが　合体した。
鋼の　ボディは　ジェット機と
衝突しても　傷つかない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",height:12,weight:2025},{id:376,names:{korean:"메타그로스",english:"Metagross",japanese:"メタグロス"},descriptions:{korean:`4개의 뇌가 연결되어
슈퍼컴퓨터보다 대단한
계산으로 상대를 분석한다.`,english:`METAGROSS has four brains in total.
Combined, the four brains can breeze
through difficult calculations faster\fthan a supercomputer.
This POKéMON can float in the air by
tucking in its four legs.`,japanese:`４つの　脳みそが　連なり
スーパーコンピュータより　すごい
計算で　相手を　分析する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",height:16,weight:5500},{id:377,names:{korean:"레지락",english:"Regirock",japanese:"レジロック"},descriptions:{korean:`전신이 바위로 되어 있다.
싸움으로 몸이 깨어져도
바위를 붙여서 치료해 버린다.`,english:`Its entire body is made of rock.
If any part chips off in battle, it
attaches rocks to repair itself.`,japanese:`全身が　岩で　できている。
戦いで　体が　欠けても
岩を　くっつけて　治してしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",height:17,weight:2300},{id:378,names:{korean:"레지아이스",english:"Regice",japanese:"レジアイス"},descriptions:{korean:`빙하 안에서 몇천 년이나
잠들어 있었다고 전해진다.
마그마로도 몸이 녹지 않는다.`,english:`REGICE’s body was made during an ice
age. The deep-frozen body can’t be
melted, even by fire.\fThis POKéMON controls frigid air of
minus 328 degrees F.`,japanese:`氷河の　中で　数千年
眠っていたと　言われている。
マグマでも　体は　溶けない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",height:18,weight:1750},{id:379,names:{korean:"레지스틸",english:"Registeel",japanese:"レジスチル"},descriptions:{korean:`몇만 년 동안 지하의 압력에 의해서
단련된 금속의 몸은
상처 하나 입지 않는다.`,english:`REGISTEEL has a body that is harder
than any kind of metal.
Its body is apparently hollow.\fNo one has any idea what this POKéMON
eats.`,japanese:`何万年も　地下の　圧力で
鍛えられた　金属の　ボディは
傷ひとつ　つかない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",height:19,weight:2050},{id:380,names:{korean:"라티아스",english:"Latias",japanese:"ラティアス"},descriptions:{korean:`텔레파시로 마음이 통한다.
빛을 굴절시키는 깃털로
몸을 둘러싸 모습을 지운다.`,english:`LATIAS is highly sensitive to the
emotions of people. If it senses any
hostility, this POKéMON ruffles the\ffeathers all over its body and cries
shrilly to intimidate the foe.`,japanese:`テレパシーで　気持ちを　通わせる。
光を　屈折させる　羽毛で
体を　包み　姿を　消す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",height:14,weight:400},{id:381,names:{korean:"라티오스",english:"Latios",japanese:"ラティオス"},descriptions:{korean:`높은 지능을 가진 포켓몬이다.
팔을 접어 날면 제트기를
추월할 만큼 빠르다.`,english:`LATIOS has the ability to make its foe
see an image of what it has seen or
imagines in its head.\fThis POKéMON is intelligent and
understands human speech.`,japanese:`高い　知能を　持つ　ポケモン。
腕を　折りたたんで　飛べば
ジェット機を　追い越す　スピードだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",height:20,weight:600},{id:382,names:{korean:"가이오가",english:"Kyogre",japanese:"カイオーガ"},descriptions:{korean:`많은 비와 큰 해일로 바다를
넓힌 신화의 포켓몬이다.
그란돈과 격하게 싸웠다.`,english:`KYOGRE has the power to create massive
rain clouds that cover the entire sky
and bring about torrential downpours.\fThis POKéMON saved people who were
suffering from droughts.`,japanese:`大雨と　大津波で　海を　広げた
神話の　ポケモン。
グラードンと　激しく　戦った。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",height:45,weight:3520},{id:383,names:{korean:"그란돈",english:"Groudon",japanese:"グラードン"},descriptions:{korean:`고열로 물을 증발시켜
대지를 넓혔다고 전해진다.
가이오가와 격하게 싸웠다.`,english:`GROUDON has long been described in 
mythology as the POKéMON that raised
lands and expanded continents.\fThis POKéMON took to sleep after a
cataclysmic battle with KYOGRE.`,japanese:`高熱で　水を　蒸発させて
大地を　広げたと　言われている。
カイオーガと　激しく　戦った。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",height:35,weight:9500},{id:384,names:{korean:"레쿠쟈",english:"Rayquaza",japanese:"レックウザ"},descriptions:{korean:`구름보다 아득히 먼 위의 오존층에
서식하고 있기 때문에 지상에서
모습을 볼 수 없다.`,english:`RAYQUAZA lived for hundreds of millions
of years in the earth’s ozone layer, 
never descending to the ground.\fThis POKéMON appears to feed on water
and particles in the atmosphere.`,japanese:`雲より　はるか上の　オゾン層に
生息しているため　地上から
姿を　見ることは　できない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",height:70,weight:2065},{id:385,names:{korean:"지라치",english:"Jirachi",japanese:"ジラーチ"},descriptions:{korean:`깨어났을 때 머리의 종이에
쓴 소원을 이루어준다고
먼 옛날부터 구전되었다.`,english:`A legend states that JIRACHI will make
true any wish that is written on notes
attached to its head when it awakens.\fIf this POKéMON senses danger, it will
fight without awakening.`,japanese:`目覚めた　とき　頭の　短冊に
書かれた　願い事を　かなえると
大昔から　語り継がれてきた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",height:3,weight:11},{id:386,names:{korean:"테오키스",english:"Deoxys",japanese:"デオキシス"},descriptions:{korean:`운석에 붙어 있던
우주 바이러스의 DNA가
변이하여 생겨난 포켓몬이다.`,english:`The DNA of a space virus underwent a
sudden mutation upon exposure to a
laser beam and resulted in DEOXYS.\fThe crystalline organ on this POKéMON’s
chest appears to be its brain.`,japanese:`隕石に　付着していた
宇宙ウイルスの　ＤＮＡが
変異して　生まれた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",height:17,weight:608},{id:387,names:{korean:"모부기",english:"Turtwig",japanese:"ナエトル"},descriptions:{korean:`태양의 빛을 쬐어
전신으로 광합성을 한다.
등껍질은 흙이 딱딱해진 것이다.`,english:`Made from soil, the shell on its
back hardens when it drinks water.
It lives along lakes.`,japanese:`太陽の　光を　浴びて
全身で　光合成を　する。
甲羅は　土が　硬くなったもの。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",height:4,weight:102},{id:388,names:{korean:"수풀부기",english:"Grotle",japanese:"ハヤシガメ"},descriptions:{korean:`숲 속의 물가에서 산다.
낮에는 숲 밖으로 나와서
등껍질의 나무에 빛을 쬔다.`,english:`It knows where pure water wells
up. It carries fellow Pokémon there
on its back.`,japanese:`森の　中の　水辺で　暮らす。
昼間は　森の　外に　出て
甲羅の　木に　光を　当てる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",height:11,weight:970},{id:389,names:{korean:"토대부기",english:"Torterra",japanese:"ドダイトス"},descriptions:{korean:`오랜 옛날 사람들은 대지
밑에 거대한 토대부기가
있다고 공상했었다.`,english:`Small Pokémon occasionally gather
on its unmoving back to begin
building their nests.`,japanese:`大昔の　人々は　大地の　下には
巨大な　ドダイトスが　いると
空想していた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",height:22,weight:3100},{id:390,names:{korean:"불꽃숭이",english:"Chimchar",japanese:"ヒコザル"},descriptions:{korean:`엉덩이의 불꽃은 배에서
만들어진 가스가 연료다.
비에 젖어도 꺼지지 않는다.`,english:`It agilely scales sheer cliffs to
live atop craggy mountains. Its
fire is put out when it sleeps.`,japanese:`お尻の　炎は
お腹で　作られた　ガスが　燃料。
雨に　ぬれても　消えない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",height:5,weight:62},{id:391,names:{korean:"파이숭이",english:"Monferno",japanese:"モウカザル"},descriptions:{korean:`꼬리의 불꽃 세기를
잘 컨트롤하여 자신에게
맞는 거리를 두고 싸운다.`,english:`To intimidate attackers, it
stretches the fire on its tail
to make itself appear bigger.`,japanese:`尻尾の　炎の　勢いを
うまく　コントロールして
自分の　得意な　間合いで　戦うのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",height:9,weight:220},{id:392,names:{korean:"초염몽",english:"Infernape",japanese:"ゴウカザル"},descriptions:{korean:`머리에서 타오르는 불꽃처럼
과격한 성격의 포켓몬이다.
스피드는 누구에게도 지지 않는다.`,english:`It uses a special kind of martial
arts involving all its limbs.
Its fire never goes out.`,japanese:`頭で　燃える　炎の　ように
激しい　性格の　ポケモン。
素早さでは　だれにも　負けない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",height:12,weight:550},{id:393,names:{korean:"팽도리",english:"Piplup",japanese:"ポッチャマ"},descriptions:{korean:`신세를 지는 것을 싫어한다.
트레이너의 지시를 듣지 않아
친해지기 어렵다.`,english:`Because it is very proud, it hates
accepting food from people. Its
thick down guards it from cold.`,japanese:`世話を　焼かれる　ことが　大嫌い。
トレーナーの　指示を　聞かないので
仲良く　なるのが　難しい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",height:4,weight:52},{id:394,names:{korean:"팽태자",english:"Prinplup",japanese:"ポッタイシ"},descriptions:{korean:`무리를 만들지 않고 혼자 생활한다.
어떤 팽태자라도 자신이 제일
훌륭하다고 생각하는 듯하다.`,english:`It lives alone, away from others.
Apparently, every one of them
believes it is the most important.`,japanese:`群れを　作らずに　１匹で　いる。
自分が　一番　偉いと　どの
ポッタイシも　考えているようだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",height:8,weight:230},{id:395,names:{korean:"엠페르트",english:"Empoleon",japanese:"エンペルト"},descriptions:{korean:`제트스키와 맞먹는 속도로
헤엄친다. 날개 가장자리는
날카롭게 유빙을 절단한다.`,english:`The three horns that extend from
its beak attest to its power. The
leader has the biggest horns.`,japanese:`ジェットスキーに　負けない　速度で
泳ぐ。翼の　縁は　鋭く
流氷を　切断する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",height:17,weight:845},{id:396,names:{korean:"찌르꼬",english:"Starly",japanese:"ムックル"},descriptions:{korean:`많은 수가 무리를 이루어
행동한다. 몸은 작지만
날개 치는 힘은 매우 강하다.`,english:`They flock in great numbers.
Though small, they flap their
wings with great power.`,japanese:`たくさんの　群れで　行動する。
体は　小さいが
羽ばたく　力は　非常に　強い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",height:3,weight:20},{id:397,names:{korean:"찌르버드",english:"Staravia",japanese:"ムクバード"},descriptions:{korean:`큰 그룹을 만들어
행동하는 습성이 있다.
그룹 간의 분쟁이 격하다.`,english:`It flies around forests and fields
in search of bug Pokémon.
It stays within a huge flock.`,japanese:`大きな　グループを　作って
行動する　習性。
グループ同士の　争いは　激しい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",height:6,weight:155},{id:398,names:{korean:"찌르호크",english:"Staraptor",japanese:"ムクホーク"},descriptions:{korean:`날개와 발의 근육이 강해
작은 포켓몬을 붙잡은 채로
너끈히 날 수 있다.`,english:`It has a savage nature. It will
courageously challenge foes that
are much larger.`,japanese:`翼と　脚の　筋肉が　強く
小さな　ポケモンを　つかんだまま
らくらくと　飛ぶことが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",height:12,weight:249},{id:399,names:{korean:"비버니",english:"Bidoof",japanese:"ビッパ"},descriptions:{korean:`어떤 것에도 동요하지 않는
대담한 신경의 소유자다.
보기보다는 기민하게 활동한다.`,english:`With nerves of steel, nothing can
perturb it. It is more agile and
active than it appears.`,japanese:`なにごとにも　動じない
図太い　神経の　持ち主。
見かけの　割には　機敏に　活動する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",height:5,weight:200},{id:400,names:{korean:"비버통",english:"Bibarel",japanese:"ビーダル"},descriptions:{korean:`예리한 앞니로 갉아 얻은
나뭇가지나 뿌리를 쌓아
물가에 부지런히 보금자리를 만든다.`,english:`It makes its nest by damming
streams with bark and mud. It is
known as an industrious worker.`,japanese:`鋭い　前歯で　削り取った
木の枝や　根っこを　積み上げて
水辺に　せっせと　巣を　作る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",height:10,weight:315},{id:401,names:{korean:"귀뚤뚜기",english:"Kricketot",japanese:"コロボーシ"},descriptions:{korean:`더듬이를 서로 부딪쳐 내는
소리로 동료와 대화한다. 음색은
가을밤의 정취를 잘 나타낸다.`,english:`It shakes its head back to front,
causing its antennae to hit each
other and sound like a xylophone.`,japanese:`触覚を　ぶつけ合って　鳴らす　音で
仲間と　会話をする。
音色は　秋の　夜の　風物詩。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",height:3,weight:22},{id:402,names:{korean:"귀뚤톡크",english:"Kricketune",japanese:"コロトック"},descriptions:{korean:`울 때는 나이프 같은 팔을
가슴 앞에서 교차시킨다.
즉흥으로 멜로디를 만든다.`,english:`It crosses its knifelike arms in
front of its chest when it cries.
It can compose melodies ad lib.`,japanese:`鳴くときは　ナイフのような　腕を
胸の　前で　交差させる。
即興で　メロディを　作る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",height:10,weight:255},{id:403,names:{korean:"꼬링크",english:"Shinx",japanese:"コリンク"},descriptions:{korean:`몸을 움직일 때마다 근육이 늘어났다
줄어들었다 하여 전기가 발생한다.
궁지에 몰리면 몸이 빛난다.`,english:`All of its fur dazzles if danger is
sensed. It flees while the foe is
momentarily blinded.`,japanese:`体を　動かすたびに　筋肉が
伸び縮みして　電気が　生まれる。
ピンチになると　体が　輝く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",height:5,weight:95},{id:404,names:{korean:"럭시오",english:"Luxio",japanese:"ルクシオ"},descriptions:{korean:`발톱에서는 한 방에 적을 기절시킬
정도로 강한 전류가 흐른다.
여러 마리가 그룹을 이루어 산다.`,english:`Its claws loose electricity with
enough amperage to cause fainting.
They live in small groups.`,japanese:`１発で　気絶させるほどの　電流を
ツメから　流す。
数匹の　グループで　暮らす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",height:9,weight:305},{id:405,names:{korean:"렌트라",english:"Luxray",japanese:"レントラー"},descriptions:{korean:`눈동자가 금색으로 빛날 때
벽의 저편에 숨어 있는
먹이를 찾아낼 수 있다.`,english:`It has eyes that can see through
anything. It spots and captures
prey hiding behind objects.`,japanese:`瞳が　金色に　光るとき
壁の　向こうに　隠れている
獲物を　見つけることが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",height:14,weight:420},{id:406,names:{korean:"꼬몽울",english:"Budew",japanese:"スボミー"},descriptions:{korean:`따뜻한 햇볕을 쬐면
봉오리를 펴서 꽃가루를 날린다.
깨끗한 물 가까이에 거처가 있다.`,english:`Over the winter, it closes its bud
and endures the cold. In spring,
the bud opens and releases pollen.`,japanese:`暖かい　日差しを　浴びると
つぼみが　開き　花粉を　飛ばす。
きれいな　水の　近くが　住処。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",height:2,weight:12},{id:407,names:{korean:"로즈레이드",english:"Roserade",japanese:"ロズレイド"},descriptions:{korean:`달콤한 향기로 먹이를 유인해
양팔의 독 채찍을 사용하여
찌르거나 조여서 꼼짝 못하게 한다.`,english:`It attracts prey with a sweet
aroma, then downs it with
thorny whips hidden in its arms.`,japanese:`甘い　香りで　獲物を　誘い
両腕の　毒のムチを　使って
刺したり　締めたりして　しとめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",height:9,weight:145},{id:408,names:{korean:"두개도스",english:"Cranidos",japanese:"ズガイドス"},descriptions:{korean:`철구 같은 화석에서
부활한 고대 포켓몬이다.
박치기로 먹이를 꼼짝 못하게 한다.`,english:`It lived in jungles around 100
million years ago. Its skull is as
hard as iron.`,japanese:`鉄球の　ような　化石から
復活した　古代の　ポケモン。
頭突きで　獲物を　しとめた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",height:9,weight:315},{id:409,names:{korean:"램펄드",english:"Rampardos",japanese:"ラムパルド"},descriptions:{korean:`어떤 충격에도 견딜 수 있는
두꺼운 두개골에 눌려
뇌가 자라지 않았다.`,english:`Its powerful head butt has enough
power to shatter even the most
durable things upon impact.`,japanese:`どんな　衝撃にも　耐えられる
分厚い　頭蓋骨に　押さえられて
脳みそは　大きく　ならなかった。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",height:16,weight:1025},{id:410,names:{korean:"방패톱스",english:"Shieldon",japanese:"タテトプス"},descriptions:{korean:`큰 나무의 줄기에 비벼서
단단한 얼굴을 닦는 습성이 있다.
뒤로부터의 공격에 약하다.`,english:`A Pokémon that lived in jungles
around 100 million years ago. Its
facial hide is extremely hard.`,japanese:`大木の　幹に　こすりつけて
硬い　顔を　磨く　習性。
後ろからの　攻撃に　弱い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",height:5,weight:570},{id:411,names:{korean:"바리톱스",english:"Bastiodon",japanese:"トリデプス"},descriptions:{korean:`옆에 한 줄로 세우면 어떤
포켓몬이라도 돌파하지 못한다.
그렇게 하여 아기를 지켜냈다.`,english:`Any frontal attack is repulsed.
It is a docile Pokémon that
feeds on grass and berries.`,japanese:`横一列に　並ぶと　どんな
ポケモンでも　突破　できない。
そうやって　子供を　守っていた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",height:13,weight:1495},{id:412,names:{korean:"도롱충이",english:"Burmy",japanese:"ミノムッチ"},descriptions:{korean:`차가운 초겨울 바람을 막으려고
작은 가지나 낙엽을 재료로
도롱이를 만들어 몸을 감싼다.`,english:`To shelter itself from cold, wintry
winds, it covers itself with a cloak
made of twigs and leaves.`,japanese:`冷たい　木枯らしを　防ぐため
小枝や　落ち葉を　材料に
ミノを　作り　体を　覆う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",height:2,weight:34},{id:413,names:{korean:"도롱마담",english:"Wormadam",japanese:"ミノマダム"},descriptions:{korean:`진화한 장소에 따라 모습이
바뀐다. 가까이 있는 재료가
몸의 일부가 된다.`,english:`When BURMY evolved, its cloak
became a part of this Pokémon’s
body. The cloak is never shed.`,japanese:`進化した　場所によって
姿が　変わる。身近にある　材料が
体の　一部に　なるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",height:5,weight:65},{id:414,names:{korean:"나메일",english:"Mothim",japanese:"ガーメイル"},descriptions:{korean:`꽃의 꿀을 매우 좋아한다.
세꿀버리가 모아둔 꿀을
가로채어 먹어 버린다.`,english:`It loves the honey of flowers
and steals honey collected by
COMBEE.`,japanese:`花の　ミツが　大好き。
ミツハニーの　集めた　ミツを
横取りして　食べてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",height:9,weight:233},{id:415,names:{korean:"세꿀버리",english:"Combee",japanese:"ミツハニー"},descriptions:{korean:`태어났을 때부터 3마리가 함께한다.
비퀸을 기쁘게 하기 위해
항상 꽃의 꿀을 모으고 있다.`,english:`A Pokémon formed by three others.
It busily carries sweet floral
honey to VESPIQUEN.`,japanese:`生まれたときから　３匹　一緒。
ビークインに　喜んでもらうため
いつも　花のミツを　集めている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",height:3,weight:55},{id:416,names:{korean:"비퀸",english:"Vespiquen",japanese:"ビークイン"},descriptions:{korean:`몸통은 아기들의 둥지다.
여러 페로몬을 내어
새끼들을 자유롭게 조종한다.`,english:`Its abdomen is a honeycomb for
grubs. It raises its grubs on
honey collected by COMBEE.`,japanese:`胴体は　子供たちの　巣穴。
いろんな　フェロモンを　だして
子供たちを　自由に　操る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",height:12,weight:385},{id:417,names:{korean:"파치리스",english:"Pachirisu",japanese:"パチリス"},descriptions:{korean:`정전기가 모여 톡톡 튀는 솜털을
자신이 좋아하는 나무열매와 함께
나무줄기의 구멍에 숨긴다.`,english:`It makes fur balls that crackle
with static electricity. It stores
them with berries in tree holes.`,japanese:`静電気が　たまって　パチパチする
毛玉を　大好物の　木の実と　一緒に
幹の　穴に　隠す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",height:4,weight:39},{id:418,names:{korean:"브이젤",english:"Buizel",japanese:"ブイゼル"},descriptions:{korean:`2개의 꼬리를 스크루처럼
돌려서 헤엄친다. 잠수할 때는
공기주머니가 오그라든다.`,english:`It has a flotation sac that is
like an inflatable collar. It floats
on water with its head out.`,japanese:`２本の　尻尾を
スクリューの　ように　回して　泳ぐ。
潜る　ときは　浮き袋が　しぼむ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",height:7,weight:295},{id:419,names:{korean:"플로젤",english:"Floatzel",japanese:"フローゼル"},descriptions:{korean:`발달한 부낭으로 뜬다.
물에 빠진 사람을 구조하는 것을
돕는 포켓몬이다.`,english:`It floats using its well-developed
flotation sac. It assists in the
rescues of drowning people.`,japanese:`発達した　浮き袋で　浮かぶ。
おぼれた　人を　救助する
手伝いを　している　ポケモンだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",height:11,weight:335},{id:420,names:{korean:"체리버",english:"Cherubi",japanese:"チェリンボ"},descriptions:{korean:`햇빛으로 빨갛게 물들었다.
영양분이 흡수되어 작은 구슬이
시들면 곧 진화한다는 뜻이다.`,english:`The small ball holds the nutrients
needed for evolution. Apparently,
it is very sweet and tasty.`,japanese:`栄養の　詰まった　玉は
鳥ポケモンの　大好物。
ついばまれないよう　逃げまわる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",height:4,weight:33},{id:421,names:{korean:"체리꼬",english:"Cherrim",japanese:"チェリム"},descriptions:{korean:`봉오리가 태양의 빛을
쬐어 꽃잎이 피면
활발하게 움직일 수 있게 된다.`,english:`It blooms during times of strong
sunlight. It tries to make up for
everything it endured as a bud.`,japanese:`つぼみが　太陽の　光を　浴びて
花びらを　広げると
活発に　動くように　なる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",height:5,weight:93},{id:422,names:{korean:"깝질무",english:"Shellos",japanese:"カラナクシ"},descriptions:{korean:`부드러운 몸을 강하게 누르면
보랏빛이 나는 정체불명의 액체가
배어 나오므로 주의가 필요하다.`,english:`Its colors and shapes differ from
region to region. In the Sinnoh
region, two types are confirmed.`,japanese:`やわらかい　体を　強く押すと
紫色の　ナゾの　液体が
にじみ出るので　要注意。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",height:3,weight:63},{id:423,names:{korean:"트리토돈",english:"Gastrodon",japanese:"トリトドン"},descriptions:{korean:`천적에게 습격당했을 때는
보라색 액체를
몸에서 내어 도망간다.`,english:`It has a pliable body without any
bones. If any part of its body is
torn off, it grows right back.`,japanese:`天敵に　襲われたときは
紫色の　液体を
体から　出して　逃げる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",height:9,weight:299},{id:424,names:{korean:"겟핸보숭",english:"Ambipom",japanese:"エテボース"},descriptions:{korean:`많은 무리로 행동한다.
꼬리를 맞잡아 원을 만든다.
우정의 표시인 듯하다.`,english:`To eat, it deftly shucks nuts
with its two tails. It rarely uses
its arms now.`,japanese:`大勢の　群れで　行動する。
尻尾を　つなぎ合わせて　輪っかを
作る。友情の　印らしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",height:12,weight:203},{id:425,names:{korean:"흔들풍손",english:"Drifloon",japanese:"フワンテ"},descriptions:{korean:`사람이나 포켓몬의 영혼이
한데 모여 태어난 포켓몬이다.
습기 많은 계절을 매우 좋아한다.`,english:`A Pokémon formed by the spirits
of people and Pokémon. It loves
damp, humid seasons.`,japanese:`人や　ポケモンの　魂が
固まって　生まれた　ポケモン。
ジメジメした　季節が　大好き。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",height:4,weight:12},{id:426,names:{korean:"둥실라이드",english:"Drifblim",japanese:"フワライド"},descriptions:{korean:`사람이나 포켓몬을 태우고 날지만
바람에 떠밀려 다닐 뿐이므로
어디로 날아갈지 모른다.`,english:`At dusk, swarms of them are
carried aloft on winds. When
noticed, they suddenly vanish.`,japanese:`人や　ポケモンを　乗せて　飛ぶが
風に　流されているだけなので
どこへ　飛んでいくか　わからない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",height:12,weight:150},{id:427,names:{korean:"이어롤",english:"Buneary",japanese:"ミミロル"},descriptions:{korean:`항상 말고 있는 귀를
힘껏 늘리면 커다란
바위도 간단히 부순다.`,english:`It slams foes by sharply uncoiling
its rolled ears. It stings enough
to make a grown-up cry in pain.`,japanese:`いつも　まるめている　耳を
勢いよく　伸ばすと　大きな
岩も　簡単に　壊せる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",height:4,weight:55},{id:428,names:{korean:"이어롭",english:"Lopunny",japanese:"ミミロップ"},descriptions:{korean:`경계심이 아주 강하다.
위험을 감지하면 가뿐하게
뛰어올라 달아난다.`,english:`An extremely cautious Pokémon.
It cloaks its body with its fluffy
ear fur when it senses danger.`,japanese:`警戒心が　とても　強い。
危険を　感じると　軽やかに
飛び跳ねて　走り去ってしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",height:12,weight:333},{id:429,names:{korean:"무우마직",english:"Mismagius",japanese:"ムウマージ"},descriptions:{korean:`주문을 외는 포켓몬이다.
상대를 고통스럽게 하는 것뿐만
아니라 행복하게 하는 주문도 있다.`,english:`Its cries sound like incantations.
Those hearing it are tormented
by headaches and hallucinations.`,japanese:`じゅもんを　唱える　ポケモン。
相手を　苦しめるもの　だけでなく
幸せにする　じゅもんも　ある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",height:9,weight:44},{id:430,names:{korean:"돈크로우",english:"Honchkrow",japanese:"ドンカラス"},descriptions:{korean:`돈크로우가 낮은 목소리로 울면
즉시 니로우가 모여들기에
밤을 부르는 자라고도 전해진다.`,english:`Becoming active at night, it is
known to swarm with numerous
MURKROW in tow.`,japanese:`ドンカラスが　低い声で　鳴くと
すぐさま　ヤミカラスが　集まるため
夜を招くもの　とも　言われる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",height:9,weight:273},{id:431,names:{korean:"나옹마",english:"Glameow",japanese:"ニャルマー"},descriptions:{korean:`마음에 안 들면 발톱을 세우지만
가끔 울음소리로 응석을 부리는
성격이 일부에게 매우 인기가 있다.`,english:`It claws if displeased and purrs
when affectionate. Its fickleness
is very popular among some.`,japanese:`気に入らないと　ツメを　立てるが
たまに　のどを　鳴らして
甘える　性格が　一部に　大人気だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",height:5,weight:39},{id:432,names:{korean:"몬냥이",english:"Purugly",japanese:"ブニャット"},descriptions:{korean:`다른 포켓몬의 거처라 할지라도
편안하면 눌러앉아
자신의 거처로 삼아버린다.`,english:`It is a brazen brute that barges
its way into another Pokémon’s
nest and claims it as its own.`,japanese:`ほかの　ポケモンの　住処でも
居心地が　良ければ　居座って
自分の　住処に　してしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",height:10,weight:438},{id:433,names:{korean:"랑딸랑",english:"Chingling",japanese:"リーシャン"},descriptions:{korean:`뛸 때마다 딸랑딸랑 소리를 낸다.
높은 주파수의 울음소리로
상대의 귀를 들리지 않게 한다.`,english:`It emits cries by agitating an orb
at the back of its throat.
It moves with flouncing hops.`,japanese:`跳ねるたびに　リリンと　音を　出す。
高い　周波数の　鳴き声で
相手の　耳を　聞こえなくする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",height:2,weight:6},{id:434,names:{korean:"스컹뿡",english:"Stunky",japanese:"スカンプー"},descriptions:{korean:`엉덩이에서 뿜어지는 역한 분비액의
냄새는 범위 2km까지 멀리 퍼져
주변의 포켓몬이 자리를 뜨게 한다.`,english:`It protects itself by spraying a
noxious fluid from its rear. The
stench lingers for 24 hours.`,japanese:`お尻から飛ばす　くさい　汁の
においは　半径２キロに　広がり
まわりの　ポケモンは　いなくなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",height:4,weight:192},{id:435,names:{korean:"스컹탱크",english:"Skuntank",japanese:"スカタンク"},descriptions:{korean:`꼬리 끝에서 심한 냄새가 나는
액체를 뿌려 공격한다.
사정거리는 50m 이상이다.`,english:`It sprays a vile-smelling fluid
from the tip of its tail to attack.
Its range is over 160 feet.`,japanese:`尻尾の　先から　ひどい　においの
液体を　飛ばして　攻撃する。
飛距離は　５０メートル以上。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",height:10,weight:380},{id:436,names:{korean:"동미러",english:"Bronzor",japanese:"ドーミラー"},descriptions:{korean:`동미러의 등 모양에는
신비한 힘이 깃들어 있다고
옛날 사람들은 믿고 있었다.`,english:`Implements shaped like it were
discovered in ancient tombs. It is
unknown if they are related.`,japanese:`ドーミラーの　背中の　模様には
神秘的な　力が　宿ると
昔の　人たちは　信じていた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",height:5,weight:605},{id:437,names:{korean:"동탁군",english:"Bronzong",japanese:"ドータクン"},descriptions:{korean:`비구름을 부르는 포켓몬으로
아주 옛날부터 떠받들어졌다.
가끔 땅에 묻혀 있다.`,english:`One caused a news sensation when
it was dug up at a construction
site after a 2,000-year sleep.`,japanese:`雨雲を　呼べる　ポケモンとして
大昔から　まつられていた。
ときどき　地面に　埋められている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",height:13,weight:1870},{id:438,names:{korean:"꼬지지",english:"Bonsly",japanese:"ウソハチ"},descriptions:{korean:`건조한 장소를 좋아한다.
눈에서 물을 내어 몸의
수분을 조절한다.`,english:`It looks as if it is always crying.
It is actually adjusting its body’s
fluid levels by eliminating excess.`,japanese:`乾燥した　場所を　好む。
目から　水を　出して
体の　水分を　調節する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",height:5,weight:150},{id:439,names:{korean:"흉내내",english:"Mime Jr.",japanese:"マネネ"},descriptions:{korean:`상대의 움직임을 똑같이
흉내 내어 당황한
사이에 재빨리 도망친다.`,english:`It habitually mimics foes. Once
mimicked, the foe cannot take its
eyes off this Pokémon.`,japanese:`相手の　動きを　そっくりに
真似を　して　戸惑わせている
あいだに　さっさと　逃げるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",height:6,weight:130},{id:440,names:{korean:"핑복",english:"Happiny",japanese:"ピンプク"},descriptions:{korean:`알을 닮은 둥근 돌을
배의 주머니에 넣고 있다.
좋아하는 상대에게 돌을 준다.`,english:`It loves round white things.
It carries an egg-shaped rock in
imitation of CHANSEY.`,japanese:`タマゴに　似た　真んまるい　石を
お腹の　袋に　入れている。
好きな　相手に　石を　渡す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",height:6,weight:244},{id:441,names:{korean:"페라페",english:"Chatot",japanese:"ペラップ"},descriptions:{korean:`상대와 같은 울음소리를 내서
동료라고 굳게 믿게 하여
습격당하지 않도록 하고 있다.`,english:`It can learn and speak human
words. If they gather, they all
learn the same saying.`,japanese:`相手と　同じ　鳴き声を　出す　ことで
仲間と　思いこませて
襲われないように　しているのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",height:5,weight:19},{id:442,names:{korean:"화강돌",english:"Spiritomb",japanese:"ミカルゲ"},descriptions:{korean:`108개의 영혼이 모여서
태어난 포켓몬이다. 쐐기돌의
균열과 연결되어 있다.`,english:`A Pokémon that was formed by 108
spirits. It is bound to a fissure
in an odd keystone.`,japanese:`１０８個の　魂が　集まって
生まれた　ポケモン。
要石の　ひび割れに　つながれている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",height:10,weight:1080},{id:443,names:{korean:"딥상어동",english:"Gible",japanese:"フカマル"},descriptions:{korean:`지열로 데워진 구멍에서
지낸다. 적이 가까이 오면 구멍에서
뛰쳐나와 커다란 입으로 물어버린다.`,english:`It nests in small, horizontal holes
in cave walls. It pounces to catch
prey that stray too close.`,japanese:`地熱で　温められた　横穴で　暮らす。
敵が　近づくと　穴から　飛び出して
大口で　かみつく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",height:7,weight:205},{id:444,names:{korean:"한바이트",english:"Gabite",japanese:"ガバイト"},descriptions:{korean:`반짝반짝 빛나는 것을
아주 좋아하기에 동굴 안에서 발견한
보물을 자신의 둥지에 모아둔다.`,english:`There is a long-held belief that
medicine made from its scales will
heal even incurable illnesses.`,japanese:`光り輝く　ものが　大好きで
洞窟の　中で　見つけた
宝を　自分の巣に　ためこむ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",height:14,weight:560},{id:445,names:{korean:"한카리아스",english:"Garchomp",japanese:"ガブリアス"},descriptions:{korean:`몸을 접고 날개를
펼치면 마치 제트기 같다.
음속으로 날 수 있다.`,english:`When it folds up its body and
extends its wings, it looks like a
jet plane. It flies at sonic speed.`,japanese:`体を　折り畳み　翼を　伸ばすと
まるで　ジェット機。
音速で　飛ぶことが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",height:19,weight:950},{id:446,names:{korean:"먹고자",english:"Munchlax",japanese:"ゴンベ"},descriptions:{korean:`몸의 긴 털 안쪽에
먹이를 숨기는 습성이 있다.
숨긴 것을 잊어버린다.`,english:`It wolfs down its weight in food
once a day, swallowing food whole
with almost no chewing.`,japanese:`長い　体の　毛の　下に
食べ物を　隠す　習性。
隠したことを　忘れてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",height:6,weight:1050},{id:447,names:{korean:"리오르",english:"Riolu",japanese:"リオル"},descriptions:{korean:`감정에 따라 모양이 변하는
파동을 서로 내어 동료끼리
커뮤니케이션을 취하고 있다.`,english:`The aura that emanates from its
body intensifies to alert others
if it is afraid or sad.`,japanese:`感情で　形が　変わる
波動を　だしあって　仲間同士
コミュニケーションを　とっている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",height:7,weight:202},{id:448,names:{korean:"루카리오",english:"Lucario",japanese:"ルカリオ"},descriptions:{korean:`상대가 발하는 파동을
감지하여 생각이나
움직임을 간파할 수 있다.`,english:`It has the ability to sense the
auras of all things.
It understands human speech.`,japanese:`相手の　発する　波動を
キャッチすることで　考えや　動きを
読み取ることが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",height:12,weight:540},{id:449,names:{korean:"히포포타스",english:"Hippopotas",japanese:"ヒポポタス"},descriptions:{korean:`건조한 땅에서 산다.
땀 대신 모래알을
몸에서 분비하는 포켓몬이다.`,english:`It lives in arid places. Instead
of perspiration, it expels grainy
sand from its body.`,japanese:`乾燥した　土地で　暮らす。
汗の　かわりに　砂粒を
体から　分泌する　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",height:8,weight:495},{id:450,names:{korean:"하마돈",english:"Hippowdon",japanese:"カバルドン"},descriptions:{korean:`크게 입을 벌려 자신의
강함을 어필한다. 대량의
모래를 일으켜 공격한다.`,english:`It blasts internally stored sand
from ports on its body to create
a towering twister for attack.`,japanese:`大きく　口を　開けて
自分の　強さを　アピール。
大量の　砂を　巻き上げて　攻撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",height:20,weight:3e3},{id:451,names:{korean:"스콜피",english:"Skorupi",japanese:"スコルピ"},descriptions:{korean:`꼬리의 발톱으로 먹이를 집어
독을 주입한다. 독이 퍼질 때까지
절대 놓치지 않는 집념이 있다.`,english:`It grips prey with its tail claws
and injects poison. It tenaciously
hangs on until the poison takes.`,japanese:`尻尾の　ツメで　獲物を　挟み
毒を　送りこむ。毒が　効くまで
絶対に　放さない　執念。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",height:8,weight:120},{id:452,names:{korean:"드래피온",english:"Drapion",japanese:"ドラピオン"},descriptions:{korean:`자랑거리인 파워로 상대를
조각조각 낼 수 있으며 게다가
맹독으로 마무리한다.`,english:`It has the power in its clawed
arms to make scrap of a car. The
tips of its claws release poison.`,japanese:`自慢の　パワーで　相手を
ばらばらに　できるのに　さらに
猛毒で　とどめを　刺すのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",height:13,weight:615},{id:453,names:{korean:"삐딱구리",english:"Croagunk",japanese:"グレッグル"},descriptions:{korean:`볼에 독주머니를 가지고 있다.
상대의 틈을 노려 맹독이
배인 손가락을 꿰찌른다.`,english:`Its cheeks hold poison sacs.
It tries to catch foes off guard
to jab them with toxic fingers.`,japanese:`ほっぺたに　毒袋を　持つ。
相手の　すきを　ついて　猛毒を
にじませている　指を　突き刺す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",height:7,weight:230},{id:454,names:{korean:"독개굴",english:"Toxicroak",japanese:"ドクロッグ"},descriptions:{korean:`목 주변에 독주머니를 지녔다.
목을 울리면 모여진 독이
잘 섞여져서 강력해진다.`,english:`Its knuckle claws secrete a toxin
so vile that even a scratch could
prove fatal.`,japanese:`のど元に　毒袋を　持つ。
のどを　鳴らすと　たまった　毒は
練りこまれ　強力になる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",height:13,weight:444},{id:455,names:{korean:"무스틈니",english:"Carnivine",japanese:"マスキッパ"},descriptions:{korean:`달콤한 냄새의 타액으로 먹이를
끌어들여 큰 턱으로 꿀꺽한다.
하루에 걸쳐 먹이를 먹는다.`,english:`It attracts prey with its sweet-
smelling saliva, then chomps down.
It takes a whole day to eat prey.`,japanese:`甘い　においの　だえきで　獲物を
おびき寄せ　おおあごで　がぶり。
１日　かけて　獲物を　食べる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",height:14,weight:270},{id:456,names:{korean:"형광어",english:"Finneon",japanese:"ケイコウオ"},descriptions:{korean:`몸의 옆쪽에 있는 줄에
태양의 빛을 모아둘 수 있다.
밤이 되면 아름답게 빛난다.`,english:`After long exposure to sunlight,
the patterns on its tail fins shine
vividly when darkness arrives.`,japanese:`体の　横側にある　ラインは
太陽の光を　ためておける。
夜になると　鮮やかに　輝く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",height:4,weight:70},{id:457,names:{korean:"네오라이트",english:"Lumineon",japanese:"ネオラント"},descriptions:{korean:`깊은 바다의 밑바닥에서 산다.
4개의 지느러미 무늬를 반짝거려
먹이를 끌어들인다.`,english:`It lives on the deep-sea floor.
It attracts prey by flashing the
patterns on its four tail fins.`,japanese:`深い　海の　底で　暮らす。
４枚の　ヒレの　模様を　光らせて
獲物を　おびき寄せる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",height:12,weight:240},{id:458,names:{korean:"타만타",english:"Mantyke",japanese:"タマンタ"},descriptions:{korean:`등의 무늬는 지역에 따라
달라진다. 총어 무리에
섞여 헤엄치는 일이 많다.`,english:`A friendly Pokémon that captures
the subtle flows of seawater using
its two antennae.`,japanese:`背中の　模様は　地域によって
異なっている。テッポウオの　群れに
混ざって　泳ぐことが　多い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",height:10,weight:650},{id:459,names:{korean:"눈쓰개",english:"Snover",japanese:"ユキカブリ"},descriptions:{korean:`추운 계절에는 산기슭까지
내려오지만 봄이 되면 눈이
남아 있는 산 정상으로 돌아간다.`,english:`It lives on snowy mountains.
Having had little contact with
humans, it is boldly inquisitive.`,japanese:`寒い　季節は　山の　ふもとまで
降りてくるが　春に　なると
雪が　残る　山頂に　戻っていく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",height:10,weight:505},{id:460,names:{korean:"눈설왕",english:"Abomasnow",japanese:"ユキノオー"},descriptions:{korean:`블리자드를 발생시켜 주변
일대를 새하얗게 만든다.
별명은 아이스 몬스터다.`,english:`It whips up blizzards in mountains
that are always buried in snow.
It is the abominable snowman.`,japanese:`ブリザードを　発生させて　あたり
一面を　真っ白に　してしまう。
別名　アイスモンスター。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",height:22,weight:1355},{id:461,names:{korean:"포푸니라",english:"Weavile",japanese:"マニューラ"},descriptions:{korean:`눈이 많은 지방에 서식한다.
수목에 발톱으로 사인을 그려
동료에게 신호를 보낸다.`,english:`They live in cold regions, forming
groups of four or five that hunt
prey with impressive coordination.`,japanese:`雪の　多い　地方に　生息。
樹木に　ツメで　サインを　描き
仲間に　合図を　送る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",height:11,weight:340},{id:462,names:{korean:"자포코일",english:"Magnezone",japanese:"ジバコイル"},descriptions:{korean:`너무 강한 자력을 내어
자포코일끼리 끌어당겨
전혀 못 움직이기도 한다.`,english:`It evolved from exposure to a
special magnetic field.
Three units generate magnetism.`,japanese:`強すぎる　磁力を　だして
ジバコイル同士　引き寄せあって
まったく　動けなくなったりする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",height:12,weight:1800},{id:463,names:{korean:"내룸벨트",english:"Lickilicky",japanese:"ベロベルト"},descriptions:{korean:`타액에는 어떤 것도 녹이는
성분이 충분히 포함되어 있어
핥으면 언제까지나 마비된다.`,english:`It wraps things with its extensible
tongue. Getting too close to it
will leave you soaked with drool.`,japanese:`ぐんぐん　伸びる　ベロを　なんにでも
巻きつける。うかつに　近寄ると
だえきで　べとべとに　されてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",height:17,weight:1400},{id:464,names:{korean:"거대코뿌리",english:"Rhyperior",japanese:"ドサイドン"},descriptions:{korean:`손바닥의 구멍에서 꼬마돌을
발사한다. 전신의 프로텍터는
화산의 분화도 견뎌낸다.`,english:`It puts rocks in holes in its palms
and uses its muscles to shoot them.
GEODUDE are shot at rare times.`,japanese:`手のひらの　穴から　イシツブテを
発射。全身の　プロテクターは
火山の　噴火にも　耐えられる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",height:24,weight:2828},{id:465,names:{korean:"덩쿠림보",english:"Tangrowth",japanese:"モジャンボ"},descriptions:{korean:`식물의 덩굴로 이루어진 팔을
늘여서 먹이를 포박한다.
팔을 먹혀도 아무렇지도 않다.`,english:`It ensnares prey by extending
arms made of vines. Losing arms to
predators does not trouble it.`,japanese:`植物の　ツルで　できた　腕を
伸ばして　獲物を　絡め取る。
腕を　食べられても　へっちゃら。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",height:20,weight:1286},{id:466,names:{korean:"에레키블",english:"Electivire",japanese:"エレキブル"},descriptions:{korean:`전기를 가득 모으면
2개의 뿔 사이에서 세차게
푸르스름한 불티를 뿌린다.`,english:`As its electric charge amplifies,
blue sparks begin to crackle between
its horns.`,japanese:`電気を　いっぱいに　ためると
２本の　ツノの　あいだで　激しく
青白い　火花を　散らす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",height:18,weight:1386},{id:467,names:{korean:"마그마번",english:"Magmortar",japanese:"ブーバーン"},descriptions:{korean:`팔 끝에서 섭씨 2000도의
불구슬을 발사한다.
화산의 분화구를 거처로 삼는다.`,english:`It blasts fireballs of over 3,600
degrees F from the ends of its
arms. It lives in volcanic craters.`,japanese:`腕の　先から　摂氏２０００度の
火の玉を　発射する。
火山の　火口を　住処にする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",height:16,weight:680},{id:468,names:{korean:"토게키스",english:"Togekiss",japanese:"トゲキッス"},descriptions:{korean:`다툼이 없는 평화로운 땅에
토게키스가 나타나 여러 가지
은총을 나눠줬다고 전해진다.`,english:`It will never appear where there
is strife. Its sightings have
become rare recently.`,japanese:`争いのない　平和な　土地に
トゲキッスは　訪れ　さまざまな　恵みを
分け与えると　言われる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",height:15,weight:380},{id:469,names:{korean:"메가자리",english:"Yanmega",japanese:"メガヤンマ"},descriptions:{korean:`고속으로 날아서 스친
상대의 목을 한순간에
물어뜯는 싸움법을 선호한다.`,english:`By churning its wings, it creates
shock waves that inflict critical
internal injuries to foes.`,japanese:`高速で　飛んで　すれ違った
相手の　首を　一瞬で
かみちぎる　戦い方を　好む。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",height:19,weight:515},{id:470,names:{korean:"리피아",english:"Leafeon",japanese:"リーフィア"},descriptions:{korean:`맑은 날에 잠든 리피아는
광합성을 해서 깨끗한
공기를 만들고 있다.`,english:`Just like a plant, it uses
photosynthesis. As a result, it is
always enveloped in clear air.`,japanese:`晴れた　日に　寝ている　リーフィアは
光合成を　して　きれいな　空気を
作り出しているのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",height:10,weight:255},{id:471,names:{korean:"글레이시아",english:"Glaceon",japanese:"グレイシア"},descriptions:{korean:`체온을 컨트롤하는 것으로
주위의 공기를 얼려서
다이아몬드 더스트를 날린다.`,english:`As a protective technique, it can
completely freeze its fur to make
its hairs stand like needles.`,japanese:`体温を　コントロールすることで
周囲の　空気を　凍らせて
ダイヤモンドダストを　降らせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",height:8,weight:259},{id:472,names:{korean:"글라이온",english:"Gliscor",japanese:"グライオン"},descriptions:{korean:`꼬리로 나뭇가지에 매달려
먹이를 관찰한다. 틈을
봐서 상공에서 덮친다.`,english:`It observes prey while hanging
inverted from branches. When the
chance presents itself, it swoops!`,japanese:`尻尾で　木の枝に　ぶら下がり
獲物を　観察する。すきを　見て
上空から　襲いかかる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",height:20,weight:425},{id:473,names:{korean:"맘모꾸리",english:"Mamoswine",japanese:"マンムー"},descriptions:{korean:`1만 년 전의 얼음 밑에서
발견된 적이 있을 정도로
오랜 옛날부터 있었던 포켓몬이다.`,english:`Its impressive tusks are made of
ice. The population thinned when it
turned warm after the ice age.`,japanese:`１万年前の　氷の　下から
発見された　ことも　あるほど
大昔から　いた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",height:25,weight:2910},{id:474,names:{korean:"폴리곤Z",english:"Porygon-Z",japanese:"ポリゴンＺ"},descriptions:{korean:`더욱 우수한 포켓몬으로 만들고자
프로그램을 추가했지만 어쩐지
괴상하게 행동하기 시작했다.`,english:`Additional software was installed
to make it a better Pokémon.
It began acting oddly, however.`,japanese:`より　優れた　ポケモンに　するため
プログラムを　追加したが　なぜか
おかしな　行動を　はじめた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",height:9,weight:340},{id:475,names:{korean:"엘레이드",english:"Gallade",japanese:"エルレイド"},descriptions:{korean:`상대의 생각을 민감하게
포착하는 능력을 가졌기 때문에
먼저 공격할 수 있다.`,english:`A master of courtesy and
swordsmanship, it fights using
extending swords on its elbows.`,japanese:`相手の　考えを　敏感に
キャッチする　能力を　持つため
先に　攻撃が　できるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",height:16,weight:520},{id:476,names:{korean:"대코파스",english:"Probopass",japanese:"ダイノーズ"},descriptions:{korean:`전신에서 강한 자력을 발산하고
있다. 꼬마코파스라고 불리는
3개의 유닛을 조종한다.`,english:`It freely controls three small
units called Mini-Noses using
magnetic force.`,japanese:`全身から　強い　磁力を　出している。
３個の　チビノーズと　呼ばれる
ユニットを　操る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",height:14,weight:3400},{id:477,names:{korean:"야느와르몽",english:"Dusknoir",japanese:"ヨノワール"},descriptions:{korean:`탄력 있는 몸 안에
갈 곳 없는 영혼을 가두어
저승으로 데려간다고 전해진다.`,english:`The antenna on its head captures
radio waves from the world of spirits
that command it to take people there.`,japanese:`弾力のある　体の　中に
行き場のない　魂を　取りこんで
あの世に　連れていくと　言われる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",height:22,weight:1066},{id:478,names:{korean:"눈여아",english:"Froslass",japanese:"ユキメノコ"},descriptions:{korean:`마이너스 50도의 냉기를 뿜어
상대를 얼려 버린다. 몸통 같은
부분은 실제로는 빈 공간이다.`,english:`It freezes foes with an icy breath
nearly -60 degrees F. What seems
to be its body is actually hollow.`,japanese:`マイナス５０度の　冷気を　吐いて
相手を　凍らせる。胴体に　見える
部分は　じつは　空洞。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",height:13,weight:266},{id:479,names:{korean:"로토무",english:"Rotom",japanese:"ロトム"},descriptions:{korean:`특수한 모터를 움직이는
동력원으로서 긴 시간 동안
연구되었던 포켓몬이다.`,english:`Its body is composed of plasma. It
is known to infiltrate electronic
devices and wreak havoc.`,japanese:`特殊な　モーターを　動かす
動力源として　長い　あいだ
研究されていた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",height:3,weight:3},{id:480,names:{korean:"유크시",english:"Uxie",japanese:"ユクシー"},descriptions:{korean:`지식의 신이라 불리고 있다.
눈을 마주친 사람의 기억을 지워
버리는 힘을 가지고 있다고 한다.`,english:`Known as “The Being of Knowledge.”
It is said that it can wipe out the
memory of those who see its eyes.`,japanese:`知識の神と　呼ばれている。
目を　合わせた　者の　記憶を
消してしまう　力を　持つという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",height:3,weight:3},{id:481,names:{korean:"엠라이트",english:"Mesprit",japanese:"エムリット"},descriptions:{korean:`슬픔의 괴로움과 즐거움의 소중함을
사람들에게 가르쳐 주었다.
감정의 신이라 불리고 있다.`,english:`Known as “The Being of Emotion.”
It taught humans the nobility of
sorrow, pain, and joy.`,japanese:`悲しみの　苦しさと　喜びの　尊さを
人々に　教えた。
感情の神と　呼ばれている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",height:3,weight:3},{id:482,names:{korean:"아그놈",english:"Azelf",japanese:"アグノム"},descriptions:{korean:`의지의 신이라 불리고 있다.
호수의 밑바닥에서 계속 잠을 자며
세계의 균형을 지키고 있다.`,english:`Known as “The Being of Willpower.”
It sleeps at the bottom of a lake
to keep the world in balance.`,japanese:`意思の神と　呼ばれている。
湖の　底で　眠り続け
世界の　バランスを　とっている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",height:3,weight:3},{id:483,names:{korean:"디아루가",english:"Dialga",japanese:"ディアルガ"},descriptions:{korean:`디아루가가 태어남으로써
시간이 움직이기 시작했다는
전설이 내려오는 포켓몬이다.`,english:`It has the power to control time.
It appears in Sinnoh-region myths
as an ancient deity.`,japanese:`ディアルガが　生まれたことで
時間が　動き出したという
伝説を　持つ　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",height:54,weight:6830},{id:484,names:{korean:"펄기아",english:"Palkia",japanese:"パルキア"},descriptions:{korean:`평행으로 늘어선 공간의
틈새에 산다고 전해진다.
신화에 등장하는 포켓몬이다.`,english:`It has the ability to distort
space. It is described as a deity
in Sinnoh-region mythology.`,japanese:`並行して　並ぶ　空間の　狭間に
住むと　言われている。
神話に　登場する　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",height:42,weight:3360},{id:485,names:{korean:"히드런",english:"Heatran",japanese:"ヒードラン"},descriptions:{korean:`화산의 동굴에서 서식한다.
십자형의 발톱을 박아서
벽이나 천장을 돌아다닌다.`,english:`It dwells in volcanic caves. It
digs in with its cross-shaped feet
to crawl on ceilings and walls.`,japanese:`火山の　洞穴に　生息。
十字の　ツメを　食いこませて
壁や　天井を　はい回る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",height:17,weight:4300},{id:486,names:{korean:"레지기가스",english:"Regigigas",japanese:"レジギガス"},descriptions:{korean:`특수한 빙산이나 암석,
마그마에서 자신의 모습과 닮은
포켓몬을 만들었다고 전해진다.`,english:`There is an enduring legend that
states this Pokémon towed
continents with ropes.`,japanese:`特殊な　氷山や　岩石　マグマから
自分の　姿に　似た　ポケモンを
つくったと　言われる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",height:37,weight:4200},{id:487,names:{korean:"기라티나",english:"Giratina",japanese:"ギラティナ"},descriptions:{korean:`상식이 통하지 않는
이 세상의 이면에 있다고 불리는
깨어진 세계에 서식한다.`,english:`A Pokémon that is said to live in a
world on the reverse side of ours.
It appears in an ancient cemetery.`,japanese:`常識の　通用しない
この世の　裏側にあると　言われる
破れた世界に　生息する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",height:45,weight:7500},{id:488,names:{korean:"크레세리아",english:"Cresselia",japanese:"クレセリア"},descriptions:{korean:`비행할 때는 베일 같은
날개에서 빛나는 입자를 낸다.
초승달의 화신으로 불리고 있다.`,english:`Shiny particles are released from
its wings like a veil. It is said
to represent the crescent moon.`,japanese:`飛行するときは　ベールのような
羽から　光る　粒子を　出す。
三日月の化身と　呼ばれている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",height:15,weight:856},{id:489,names:{korean:"피오네",english:"Phione",japanese:"フィオネ"},descriptions:{korean:`바다 온도가 높아지면
머리의 부낭을 부풀려서
해수면을 집단으로 떠돈다.`,english:`It drifts in warm seas. It always returns to where it
was born, no matter how far it may have drifted.`,japanese:`海の　温度が　高くなると
頭の　浮き袋を　ふくらませて
海面を　集団で　漂う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",height:4,weight:31},{id:490,names:{korean:"마나피",english:"Manaphy",japanese:"マナフィ"},descriptions:{korean:`태어났을 때부터 가지고 있는
이상한 힘을 쓰면 어떤 포켓몬과도
마음이 서로 통하게 된다.`,english:`Born on a cold seafloor, it
will swim great distances to
return to its birthplace.`,japanese:`生まれたときから　備わっている
不思議な　力を　使うと　どんな
ポケモンとも　心が　通い合う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",height:3,weight:14},{id:491,names:{korean:"다크라이",english:"Darkrai",japanese:"ダークライ"},descriptions:{korean:`깊은 잠으로 끌어들이는 힘으로
사람과 포켓몬에게 악몽을 꾸게 해
자신의 영역에서 쫓아낸다.`,english:`It can lull people to sleep and
make them dream. It is active
during nights of the new moon.`,japanese:`深い　眠りに　誘う　力で
人や　ポケモンに　悪夢を　見せて
自分の　縄張りから　追い出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",height:15,weight:505},{id:492,names:{korean:"쉐이미",english:"Shaymin",japanese:"シェイミ"},descriptions:{korean:`대기의 독소를 분해해서
거칠어진 대지를 일순간에
꽃밭으로 만드는 힘을 가지고 있다.`,english:`It lives in flower patches and
avoids detection by curling up
to look like a flowering plant.`,japanese:`大気の　毒素を　分解して
荒れた　大地を　一瞬のうちに
花畑にする　力を　持つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",height:2,weight:21},{id:493,names:{korean:"아르세우스",english:"Arceus",japanese:"アルセウス"},descriptions:{korean:`알에서 모습을 나타내
모든 세계를 창조했다고
신오신화에서 묘사된다.`,english:`It is described in mythology as
the Pokémon that shaped the
universe with its 1,000 arms.`,japanese:`タマゴから　姿を　現して
世界の　すべてを　生み出したと
シンオウ神話に　語られている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",height:32,weight:3200},{id:494,names:{korean:"비크티니",english:"Victini",japanese:"ビクティニ"},descriptions:{korean:`승리를 부르는 포켓몬이다.
비크티니와 함께하는 트레이너는
그 어떤 승부에서도 승리한다고 한다.`,english:`This Pokémon brings victory. It is said
that Trainers with Victini always win,
regardless of the type of encounter.`,japanese:`勝利を　もたらす　ポケモン。
ビクティニを　連れた　トレーナーは
どんな　勝負にも　勝てるという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",height:4,weight:40},{id:495,names:{korean:"주리비얀",english:"Snivy",japanese:"ツタージャ"},descriptions:{korean:`태양의 빛을 받으면
평소보다 빨리 움직일 수 있다.
손보다 덩굴을 잘 사용한다.`,english:`It is very intelligent and calm.
Being exposed to lots of sunlight makes
its movements swifter.`,japanese:`太陽の　光を　浴びると
いつもよりも　素早く　動ける。
手よりも　ツルを　うまく使う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",height:6,weight:81},{id:496,names:{korean:"샤비",english:"Servine",japanese:"ジャノビー"},descriptions:{korean:`땅을 미끄러지듯 달린다.
빠른 움직임으로 상대를 혼란시키고
덩굴채찍으로 꼼짝 못하게 한다.`,english:`It moves along the ground as if sliding.
Its swift movements befuddle its foes,
and it then attacks with a vine whip.`,japanese:`地面を　滑るように　走る。
素早い　動きで　敵を　まどわせ
つるのムチで　しとめるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",height:8,weight:160},{id:497,names:{korean:"샤로다",english:"Serperior",japanese:"ジャローダ"},descriptions:{korean:`샤로다의 고상한 눈동자로
쏘아보아도 태연할 정도로 강한
상대에게만 진정한 실력을 발휘한다.`,english:`It can stop its opponents’
movements with just a glare. It takes
in solar energy and boosts it internally.`,japanese:`ジャローダの　気高い　瞳で
射すくめられても　平気な　強い
相手にだけ　本気を　出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",height:33,weight:630},{id:498,names:{korean:"뚜꾸리",english:"Tepig",japanese:"ポカブ"},descriptions:{korean:`적의 공격을 가볍게 피하고
코로 불구슬을 쏘아댄다.
불꽃으로 나무열매를 구워 먹는다.`,english:`It can deftly dodge its foe’s attacks
while shooting fireballs from its nose.
It roasts berries before it eats them.`,japanese:`敵の　攻撃を　身軽に　避けて
鼻から　火の玉を　撃ち出す。
炎で　木の実を　焼いて　食べる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",height:5,weight:99},{id:499,names:{korean:"차오꿀",english:"Pignite",japanese:"チャオブー"},descriptions:{korean:`먹을수록 태울 것이 많아져
위 속의 불꽃이 강해지고
파워도 점점 넘치게 된다.`,english:`When its internal fire flares up, its
movements grow sharper and faster.
When in trouble, it emits smoke.`,japanese:`食べるほどに　燃やすものが　増えて
胃袋内の　炎が　強まり
パワーも　どんどん　あふれ出すのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",height:10,weight:555},{id:500,names:{korean:"염무왕",english:"Emboar",japanese:"エンブオー"},descriptions:{korean:`턱의 화염으로 주먹을 불태워
불꽃펀치를 날린다.
동료애가 깊은 포켓몬이다.`,english:`It can throw a fire punch by setting its
fists on fire with its fiery chin. It cares
deeply about its friends.`,japanese:`アゴの　炎で　こぶしを　燃やして
炎の　パンチを　繰り出す。
とても　仲間思いの　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",height:16,weight:1500},{id:501,names:{korean:"수댕이",english:"Oshawott",japanese:"ミジュマル"},descriptions:{korean:`배에 생기는 가리비칼은
싸울 때뿐 아니라 딱딱한
나무열매를 쪼갤 때도 사용한다.`,english:`It fights using the scalchop on its
stomach. In response to an attack,
it retaliates immediately by slashing.`,japanese:`お腹に　できる　ホタチは
戦うとき　だけでなく　硬い
木の実を　割るときにも　使う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",height:5,weight:59},{id:502,names:{korean:"쌍검자비",english:"Dewott",japanese:"フタチマル"},descriptions:{korean:`물 흐르는 듯한 칼솜씨로
2개의 가리비칼을 사용하는 기술은
엄격한 수련을 통해 익힌 것이다.`,english:`Strict training is how it learns its
flowing double-scalchop technique.`,japanese:`流れるような　太刀さばきで
２枚の　ホタチを　あつかう　技は
きびしい　修業によって　身につける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",height:8,weight:245},{id:503,names:{korean:"대검귀",english:"Samurott",japanese:"ダイケンキ"},descriptions:{korean:`상대가 눈을 깜빡이는 동안에
앞다리에 붙어 있는 각검으로
상대를 베고 원래대로 되돌린다.`,english:`One swing of the sword incorporated in
its armor can fell an opponent. A simple
glare from one of them quiets everybody.`,japanese:`敵が　瞬きする　あいだに
前足に　ついた　アシガタナで
相手を　切りつけ　元に戻せる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",height:15,weight:946},{id:504,names:{korean:"보르쥐",english:"Patrat",japanese:"ミネズミ"},descriptions:{korean:`볼의 주머니에 먹이를 모아두고
며칠이고 망보기를 계속한다.
꼬리로 동료에게 신호한다.`,english:`Using food stored in cheek pouches,
they can keep watch for days. They use
their tails to communicate with others.`,japanese:`ほほの　袋に　エサを　ためこみ
何日も　見張りを　続ける。
尻尾で　仲間に　合図する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",height:5,weight:116},{id:505,names:{korean:"보르그",english:"Watchog",japanese:"ミルホッグ"},descriptions:{korean:`체내의 발광물질로
눈이나 몸을 빛나게 하여
습격해 온 상대를 풀이 죽게 만든다.`,english:`When they see an enemy, their tails
stand high, and they spit the seeds of
berries stored in their cheek pouches.`,japanese:`体内の　発光物質で
目玉や　体を　光らせ
襲ってきた　敵を　ひるませる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",height:11,weight:270},{id:506,names:{korean:"요테리",english:"Lillipup",japanese:"ヨーテリー"},descriptions:{korean:`얼굴을 둘러싼 긴 털은
우수한 레이더다. 주위
상황을 민감히 살핀다.`,english:`It faces strong opponents with great
courage. But, when at a disadvantage in
a fight, this intelligent Pokémon flees.`,japanese:`顔を　覆う　長い　毛は
優れた　レーダー。周囲の　様子を
敏感に　察知する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",height:4,weight:41},{id:507,names:{korean:"하데리어",english:"Herdier",japanese:"ハーデリア"},descriptions:{korean:`트레이너를 도와주면서
다른 포켓몬을 돌보기도 하는
매우 충실한 포켓몬.`,english:`It has black, cape-like fur that is
very hard and decreases the amount
of damage it receives.`,japanese:`トレーナーを　助けながら
他の　ポケモンの　世話もする
とても　忠実な　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",height:9,weight:147},{id:508,names:{korean:"바랜드",english:"Stoutland",japanese:"ムーランド"},descriptions:{korean:`눈보라로 길이 막힌 산에 들어가
조난된 사람을 구해준다.
긴 털이 추위를 막는다.`,english:`It rescues people stranded by
blizzards in the mountains. Its
shaggy fur shields it from the cold.`,japanese:`吹雪で　閉ざされた　山に　入り
遭難した　人を　助ける。
長い　毛が　寒さを　防ぐ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",height:12,weight:610},{id:509,names:{korean:"쌔비냥",english:"Purrloin",japanese:"チョロネコ"},descriptions:{korean:`귀여운 행동으로 방심하게 한 후
그 틈에 지닌 물건을 빼앗아 간다.
화가 나면 손톱을 세워서 반격한다.`,english:`They steal from people for fun, but their
victims can’t help but forgive them.
Their deceptively cute act is perfect.`,japanese:`かわいらしい　仕草で　油断させて
その　すきに　持ち物を　奪う。
怒ると　ツメを　立てて　反撃。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",height:4,weight:101},{id:510,names:{korean:"레파르다스",english:"Liepard",japanese:"レパルダス"},descriptions:{korean:`아름다운 스타일은 전신의
발달한 근육 덕분이다.
소리도 내지 않고 밤을 달린다.`,english:`These Pokémon vanish and appear
unexpectedly. Many Trainers are drawn
to their beautiful form and fur.`,japanese:`美しい　スタイルは　全身の
発達した　筋肉の　おかげ。
音もたてずに　夜を　駆けぬける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",height:11,weight:375},{id:511,names:{korean:"야나프",english:"Pansage",japanese:"ヤナップ"},descriptions:{korean:`기운이 없는 포켓몬에게
머리의 잎사귀를 나눠준다.
피로를 풀어주는 효과가 있다.`,english:`This Pokémon dwells deep in the forest.
Eating a leaf from its head whisks
weariness away as if by magic.`,japanese:`元気の　ない　ポケモンに
頭の　葉っぱを　分け与える。
疲れを　取る　効果が　あるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",height:6,weight:105},{id:512,names:{korean:"야나키",english:"Simisage",japanese:"ヤナッキー"},descriptions:{korean:`가시가 잔뜩 박힌 꼬리를
상대에게 힘껏 쳐서 공격한다.
기질이 격한 포켓몬이다.`,english:`Ill tempered, it fights by swinging its
barbed tail around wildly. The leaf
growing on its head is very bitter.`,japanese:`トゲの　たくさん　ついた　尻尾を
相手に　たたきつけて　攻撃。
気性の　激しい　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",height:11,weight:305},{id:513,names:{korean:"바오프",english:"Pansear",japanese:"バオップ"},descriptions:{korean:`지능이 높고 나무열매는
구운 뒤 먹는 습성이 있다.
사람 도와주기를 좋아한다.`,english:`When it is angered, the temperature
of its head tuft reaches 600° F.
It uses its tuft to roast berries.`,japanese:`知能が　高く　木の実は
焼いてから　食べる　習性。
人の　手伝いを　好んでいる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",height:6,weight:110},{id:514,names:{korean:"바오키",english:"Simisear",japanese:"バオッキー"},descriptions:{korean:`몸속에서 태운 불꽃을
머리나 꼬리로 흩뿌려서
상대를 태운다.`,english:`It loves sweets because they become
energy for the fire burning inside
its body.`,japanese:`体の　中の　炎を　燃やして
頭や　尻尾から　火の粉を
まき散らせて　敵を　焦がす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",height:10,weight:280},{id:515,names:{korean:"앗차프",english:"Panpour",japanese:"ヒヤップ"},descriptions:{korean:`머리 송아리에 모은 물은
영양 듬뿍. 꼬리를 사용해서
그 물을 초목에 뿌린다.`,english:`The water stored inside the tuft on
its head is full of nutrients. Plants
that receive its water grow large.`,japanese:`頭の房に　ためこんだ　水は
栄養　たっぷり。尻尾を使って
その　水を　草木に　かけている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",height:6,weight:135},{id:516,names:{korean:"앗차키",english:"Simipour",japanese:"ヒヤッキー"},descriptions:{korean:`꼬리에서 발사하는 고압의 물은
콘크리트 벽도 파괴할 수 있는
위력을 지녔다.`,english:`The tuft on its head holds water. When
the level runs low, it replenishes the
tuft by siphoning up water with its tail.`,japanese:`尻尾から　高圧の　水を　発射すると
コンクリートの　壁も
破壊する　威力。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",height:10,weight:290},{id:517,names:{korean:"몽나",english:"Munna",japanese:"ムンナ"},descriptions:{korean:`나쁜 꿈에 시달리고 있는
포켓몬이나 사람 앞에 나타나
그 꿈을 먹어버리는 포켓몬.`,english:`Munna always float in the air. People
whose dreams are eaten by them
forget what the dreams had been about.`,japanese:`悪い　夢に　うなされている
ポケモンや　人の　前に　現われ
その夢を　食べてしまう　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",height:6,weight:233},{id:518,names:{korean:"몽얌나",english:"Musharna",japanese:"ムシャーナ"},descriptions:{korean:`이마에서 나오는 연기 속에는
사람이나 포켓몬이 꾼
꿈이 많이 모여 있다.`,english:`The mist emanating from their foreheads
is packed with the dreams of people
and Pokémon.`,japanese:`おでこから　出ている　煙の　中には
人や　ポケモンの　見た　夢が
たくさん　つまっているのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",height:11,weight:605},{id:519,names:{korean:"콩둘기",english:"Pidove",japanese:"マメパト"},descriptions:{korean:`매우 건망증이 심한 포켓몬으로
트레이너에게 명령을 받았어도
새로운 명령을 기다리고 있다.`,english:`Each follows its Trainer’s orders as
best it can, but they sometimes fail to
understand complicated commands.`,japanese:`とても　忘れっぽい　ポケモンで
トレーナーに　命令　されたのに
新しい　命令を　待っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",height:3,weight:21},{id:520,names:{korean:"유토브",english:"Tranquill",japanese:"ハトーボー"},descriptions:{korean:`유토브가 사는 숲 속에는
싸움이 없는 평화로운 나라가
있다고 믿어진다.`,english:`It can return to its Trainer’s location
regardless of the distance
separating them.`,japanese:`ハトーボーの　住む　森の　奥には
争いのない　平和な　国が　あると
信じられている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",height:6,weight:150},{id:521,names:{korean:"켄호로우",english:"Unfezant",japanese:"ケンホロウ"},descriptions:{korean:`수컷은 머리의 장식을 흔들어서
상대를 위협한다. 암컷의 비행
능력은 수컷을 뛰어넘는다.`,english:`Males swing their head plumage to
threaten opponents. The females’ flying
abilities surpass those of the males.`,japanese:`オスは　頭の　飾りを　揺らして
相手を　威嚇する。
メスの　飛行能力は　オスを　上回る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",height:12,weight:290},{id:522,names:{korean:"줄뮤마",english:"Blitzle",japanese:"シママ"},descriptions:{korean:`번개 구름이 하늘을 뒤덮으면
나타난다. 갈기로 번개를
붙잡아 전기를 모은다.`,english:`When thunderclouds cover the sky, it will appear.
It can catch lightning with its mane and store
the electricity.`,japanese:`雷雲で　空が　覆われると
現れる。たてがみで　雷を
キャッチして　電気を　ためる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",height:8,weight:298},{id:523,names:{korean:"제브라이카",english:"Zebstrika",japanese:"ゼブライカ"},descriptions:{korean:`격렬한 기질의 소유자.
날뛰면 갈기에서 번개를
사방팔방으로 방전한다.`,english:`They have lightning-like movements.
When Zebstrika run at full speed,
the sound of thunder reverberates.`,japanese:`激しい　気性の　持ち主。
荒ぶると　たてがみから　雷を
四方八方に　放電する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",height:16,weight:795},{id:524,names:{korean:"단굴",english:"Roggenrola",japanese:"ダンゴロ"},descriptions:{korean:`육각형 귀를 가지고 있다.
땅속 깊은 곳에서 압축된 몸은
철 못지않게 단단하다.`,english:`Its ear is hexagonal in shape.
Compressed underground,
its body is as hard as steel.`,japanese:`６角形の　耳を　持つ。
地底で　圧縮された　体は
鉄に　負けないくらい　硬い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",height:4,weight:180},{id:525,names:{korean:"암트르",english:"Boldore",japanese:"ガントル"},descriptions:{korean:`체내에서 처리되지 못하고
빠져나온 에너지가 덩어리져서
주황색 결정이 되었다.`,english:`When it overflows with power,
the orange crystal on its body glows.
It looks for underground water in caves.`,japanese:`体内に　収まりきらず　漏れ出した
エネルギーが　固まり
オレンジ色の　結晶になった。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",height:9,weight:1020},{id:526,names:{korean:"기가이어스",english:"Gigalith",japanese:"ギガイアス"},descriptions:{korean:`거두어들인 태양광선을
에너지 코어로 반응시켜
빛의 구슬로 쏘아낸다.`,english:`Compressing the energy from its
internal core lets it fire off an attack
capable of blowing away a mountain.`,japanese:`取りこんだ　太陽光線を
エネルギーコアで　反応　させて
光の玉として　撃ちだしてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",height:17,weight:2600},{id:527,names:{korean:"또르박쥐",english:"Woobat",japanese:"コロモリ"},descriptions:{korean:`어두운 숲이나 동굴에서 산다.
콧구멍에서 초음파를 쏘아
주변의 모습을 살핀다.`,english:`Its habitat is dark forests and caves.
It emits ultrasonic waves from its
nose to learn about its surroundings.`,japanese:`暗い　森や　洞穴で　暮らす。
鼻の　穴から　超音波を　出して
あたりの　様子を　探る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",height:4,weight:21},{id:528,names:{korean:"맘박쥐",english:"Swoobat",japanese:"ココロモリ"},descriptions:{korean:`콘크리트도 부술 정도로
강한 초음파를 낼 때
꼬리가 심하게 흔들린다.`,english:`It emits sound waves of various
frequencies from its nose, including
some powerful enough to destroy rocks.`,japanese:`コンクリートも　壊せるほどの
強い　超音波を　出すとき
尻尾が　激しく　震える。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",height:9,weight:105},{id:529,names:{korean:"두더류",english:"Drilbur",japanese:"モグリュー"},descriptions:{korean:`양손의 손톱을 서로 겹치고
몸을 고속 회전시키면서
맹렬한 속도로 땅속을 헤쳐나간다.`,english:`It can dig through the ground
at a speed of 30 mph. It could give
a car running aboveground a good race.`,japanese:`両手の　ツメを　重ね合わせて
体を　高速　回転させると
猛スピードで　地中を　進む。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",height:3,weight:85},{id:530,names:{korean:"몰드류",english:"Excadrill",japanese:"ドリュウズ"},descriptions:{korean:`강철로 진화한 드릴은
철판을 뚫는 파괴력을 가졌다.
터널 공사에서 크게 활약한다.`,english:`It can help in tunnel construction.
Its drill has evolved into steel strong
enough to bore through iron plates.`,japanese:`鋼に　進化した　ドリルは
鉄板を　つらぬく　破壊力。
トンネル工事で　大活躍する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",height:7,weight:404},{id:531,names:{korean:"다부니",english:"Audino",japanese:"タブンネ"},descriptions:{korean:`귀의 더듬이로 상대의
컨디션이나 알에서 포켓몬이
언제 나올지도 알 수 있다.`,english:`It touches others with the feelers on
its ears, using the sound of their
heartbeats to tell how they are feeling.`,japanese:`耳の　触角で　相手の
体調や　タマゴから　ポケモンが
いつ　でてくるのかも　わかるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",height:11,weight:310},{id:532,names:{korean:"으랏차",english:"Timburr",japanese:"ドッコラー"},descriptions:{korean:`항상 각목을 끼고 있다.
건설 현장에 나타나
공사를 도와주는 포켓몬이다.`,english:`It fights by swinging a piece of lumber
around. It is close to evolving when it
can handle the lumber without difficulty.`,japanese:`いつも　角材を　抱えている。
建築　現場に　現れて
工事を　手伝う　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",height:6,weight:125},{id:533,names:{korean:"토쇠골",english:"Gurdurr",japanese:"ドテッコツ"},descriptions:{korean:`단련된 근육의 소유자.
철골을 능숙하게 조종하여
집을 해체해준다.`,english:`This Pokémon is so muscular and strongly
built that even a group of wrestlers
could not make it budge an inch.`,japanese:`鍛えあげた　筋肉の　持ち主。
鉄骨を　たくみに　操って
一軒家を　解体してくれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",height:12,weight:400},{id:534,names:{korean:"노보청",english:"Conkeldurr",japanese:"ローブシン"},descriptions:{korean:`콘크리트를 만드는 기술은
2000년 전에 노보청에게
배운 것이라고 여겨지고 있다.`,english:`It is thought that Conkeldurr taught
humans how to make concrete more
than 2,000 years ago.`,japanese:`コンクリートを　作る　技術は
２０００年前に　ローブシンから
教わったと　考えられている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",height:14,weight:870},{id:535,names:{korean:"동챙이",english:"Tympole",japanese:"オタマロ"},descriptions:{korean:`볼의 진동막을 떨어
사람에게는 들리지 않는 음파를 내어
동료에게 위험을 전달한다.`,english:`They warn others of danger by
vibrating their cheeks to create
a high-pitched sound.`,japanese:`ほほの　振動膜を　震わせ
人には　きこえない　音波を　だし
仲間たちに　危険を　伝える。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",height:5,weight:45},{id:536,names:{korean:"두까비",english:"Palpitoad",japanese:"ガマガル"},descriptions:{korean:`머리의 혹을 진동시키면
물속에 파동이 일어나며
땅마저 지진처럼 흔들린다.`,english:`When they vibrate the bumps on their
heads, they can make waves in water
or earthquake-like vibrations on land.`,japanese:`頭の　コブを　振動させると
水中が　波立つ　だけでなく
地面も　地震のように　揺れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",height:8,weight:170},{id:537,names:{korean:"두빅굴",english:"Seismitoad",japanese:"ガマゲロゲ"},descriptions:{korean:`주먹의 혹을 진동시켜
펀치의 위력을 배가시킨다.
일격에 큰 바위를 부스러뜨린다.`,english:`They shoot paralyzing liquid from their
head bumps. They use vibration to hurt
their opponents.`,japanese:`こぶしの　コブを　振動させると
パンチの　威力が　倍増する。
一撃で　大岩を　粉砕。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",height:15,weight:620},{id:538,names:{korean:"던지미",english:"Throh",japanese:"ナゲキ"},descriptions:{korean:`끈을 매면 파워가 올라간다.
야생 던지미는 덩굴풀을 엮어
자신의 띠를 만든다.`,english:`When it tightens its belt, it becomes
stronger. Wild Throh use vines to weave
their own belts.`,japanese:`帯を　締めると　パワーアップする。
野生の　ナゲキは　つる草を　編んで
自分の　帯を　作る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",height:13,weight:555},{id:539,names:{korean:"타격귀",english:"Sawk",japanese:"ダゲキ"},descriptions:{korean:`최강의 태권당수를
목표로 산속에 틀어박혀
잠도 없이 수행한다.`,english:`The sound of Sawk punching boulders
and trees can be heard all the way from
the mountains where they train.`,japanese:`最強の　からてチョップを
求めて　山奥に　こもって
眠ることなく　修行する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",height:14,weight:510},{id:540,names:{korean:"두르보",english:"Sewaddle",japanese:"クルミル"},descriptions:{korean:`잎사귀를 물어뜯어
입에서 뱉어낸 점착실로 꿰맨다.
스스로 옷을 만드는 포켓몬이다.`,english:`Leavanny dress it in clothes they made
for it when it hatched. It hides its head
in its hood while it is sleeping.`,japanese:`葉っぱを　かみ切り　口から　出す
粘着糸で　縫い合わせる。
自分で　服を　作る　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",height:3,weight:25},{id:541,names:{korean:"두르쿤",english:"Swadloon",japanese:"クルマユ"},descriptions:{korean:`두르쿤이 사는 숲은 초목이
잘 자란다. 두르쿤이 낙엽을
영양분으로 바꾸기 때문이다.`,english:`Forests where Swadloon live have superb
foliage because the nutrients they make
from fallen leaves nourish the plant life.`,japanese:`クルマユの　住む　森は　草木が
よく　育つ。クルマユが　落ち葉を
栄養分に　変えているのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",height:5,weight:73},{id:542,names:{korean:"모아머",english:"Leavanny",japanese:"ハハコモリ"},descriptions:{korean:`어린 포켓몬을 보면
입에서 내뿜는 점착실로
잎사귀의 옷을 지어 준다.`,english:`Upon finding a small Pokémon, it weaves
clothing for it from leaves, using the
cutters on its arms and sticky silk.`,japanese:`幼い　ポケモンを　みつけると
口から　出す　粘着糸で
葉っぱの　服を　縫ってあげる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",height:12,weight:205},{id:543,names:{korean:"마디네",english:"Venipede",japanese:"フシデ"},descriptions:{korean:`머리와 꼬리의 더듬이로
주변 상황을 살핀다.
성격이 매우 난폭하다.`,english:`Its bite injects a potent poison, enough
to paralyze large bird Pokémon that try
to prey on it.`,japanese:`頭と　尻尾の　触角で
まわりの　様子を　探る。
非常に　凶暴な　性格。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",height:4,weight:53},{id:544,names:{korean:"휠구",english:"Whirlipede",japanese:"ホイーガ"},descriptions:{korean:`단단한 껍질로 보호되고 있다.
타이어처럼 회전하여 상대에게
격렬히 몸통박치기를 날린다.`,english:`Protected by a hard shell, it spins
its body like a wheel and crashes
furiously into its enemies.`,japanese:`硬い　殻に　守られている。
タイヤのように　回転して
敵に　激しく　体当たりする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",height:12,weight:585},{id:545,names:{korean:"펜드라",english:"Scolipede",japanese:"ペンドラー"},descriptions:{korean:`먹이를 목의 가시에 끼워 넣어
움직이지 못하게 한 후
맹독을 퍼뜨려 마무리한다.`,english:`With quick movements, it chases down
its foes, attacking relentlessly with
its horns until it prevails.`,japanese:`獲物を　首のツメで　挟みこみ
身動きを　とれなくしてから
猛毒を　与え　とどめを　刺す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",height:25,weight:2005},{id:546,names:{korean:"소미안",english:"Cottonee",japanese:"モンメン"},descriptions:{korean:`공격당하면 몸에서 솜을
날린다. 상대가 솜을 소미안으로
착각하고 있는 동안 도망친다.`,english:`When attacked, it escapes by shooting
cotton from its body. The cotton serves
as a decoy to distract the attacker.`,japanese:`襲われると　体から　綿を　飛ばす。
敵が　綿を　モンメンと
間違えている　すきに　逃げるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",height:3,weight:6},{id:547,names:{korean:"엘풍",english:"Whimsicott",japanese:"エルフーン"},descriptions:{korean:`회오리바람과 함께 나타나
집 안의 가구를 움직이거나
솜을 남기는 장난을 친다.`,english:`Like the wind, it can slip through any
gap, no matter how small. It leaves
balls of white fluff behind.`,japanese:`つむじかぜと　ともに　現われて
家の　中の　家具を　動かしたり
綿を　残す　いたずらをする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",height:7,weight:66},{id:548,names:{korean:"치릴리",english:"Petilil",japanese:"チュリネ"},descriptions:{korean:`머리의 잎사귀를 갉아먹으면
매우 쓰지만 지친 몸을
회복시켜주는 효과가 있다.`,english:`The leaves on its head are very bitter.
Eating one of these leaves is known
to refresh a tired body.`,japanese:`頭の　葉っぱを　かじると
とても　苦いが　疲れた　体を
元気にする　効果が　あるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",height:5,weight:66},{id:549,names:{korean:"드레디어",english:"Lilligant",japanese:"ドレディア"},descriptions:{korean:`머리에 있는 꽃 장식의 향기에는
긴장을 풀어 주는 효과가 있다.
자주 손질하지 않으면 시들어 버린다.`,english:`Even veteran Trainers face a challenge
in getting its beautiful flower to bloom.
This Pokémon is popular with celebrities.`,japanese:`頭の　花飾りの　香りには
リラックスさせる　効果が　ある。
手入れを　怠けると　枯れてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",height:11,weight:163},{id:550,names:{korean:"배쓰나이",english:"Basculin",japanese:"バスラオ"},descriptions:{korean:`아주 난폭하고 항상 빨강과
파랑의 배쓰나이는 다투고 있다.
먹으면 의외로 맛있다고 한다.`,english:`Red and blue Basculin get along so
poorly, they’ll start fighting instantly.
These Pokémon are very hostile.`,japanese:`とても　乱暴で　いつも　あかと
あおの　バスラオは　争っている。
食べると　意外と　おいしいらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",height:10,weight:180},{id:551,names:{korean:"깜눈크",english:"Sandile",japanese:"メグロコ"},descriptions:{korean:`모래 속에 파고들어 눈과 코를
밖에 내놓고 이동한다.
검은 막이 눈을 보호한다.`,english:`They live buried in the sands of the
desert. The sun-warmed sands prevent
their body temperature from dropping.`,japanese:`砂の　中に　潜り　目と　鼻を
外に　出して　移動する。
黒い　膜が　目を　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",height:7,weight:152},{id:552,names:{korean:"악비르",english:"Krokorok",japanese:"ワルビル"},descriptions:{korean:`여러 마리가 무리를 짓는다.
안구를 감싼 막이
모래 폭풍으로부터 눈을 지켜준다.`,english:`They live in groups of a few individuals.
Protective membranes shield their eyes
from sandstorms.`,japanese:`数匹で　群れを　作る。
眼球を　カバーする　膜が
砂嵐から　目を　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",height:10,weight:334},{id:553,names:{korean:"악비아르",english:"Krookodile",japanese:"ワルビアル"},descriptions:{korean:`아주 난폭한 포켓몬.
눈앞에서 움직이는 것은 모두
덮쳐서 깨물어 부수려고 한다.`,english:`They never allow prey to escape.
Their jaws are so powerful, they can
crush the body of an automobile.`,japanese:`とても　凶暴な　ポケモン。
目の前で　動くものは　すべて
襲いかかり　かみくだこうとする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",height:15,weight:963},{id:554,names:{korean:"달막화",english:"Darumaka",japanese:"ダルマッカ"},descriptions:{korean:`달막화의 배설물은 뜨거워서
옛날 사람은 품에 넣고
몸을 따뜻하게 하는 데 사용했다.`,english:`When its internal fire is burning, it
cannot calm down and it runs around.
When the fire diminishes, it falls asleep.`,japanese:`ダルマッカの　フンは　熱いので
昔の　人は　懐に　入れて
体を　温めていたのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",height:6,weight:375},{id:555,names:{korean:"불비달마",english:"Darmanitan",japanese:"ヒヒダルマ"},descriptions:{korean:`격렬한 싸움으로 상처 입으면
바위처럼 굳어져 묵상하며
마음을 연마한다.`,english:`Its internal fire burns at 2,500° F,
making enough power that it can
destroy a dump truck with one punch.`,japanese:`激しい　戦いで　傷つくと
岩のように　固まり　黙考して
心を　研ぎ澄ませるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",height:13,weight:929},{id:556,names:{korean:"마라카치",english:"Maractus",japanese:"マラカッチ"},descriptions:{korean:`템포가 빠른 춤과 소리로
꽃씨를 노리는 천적인
새포켓몬을 쫓아버린다.`,english:`It uses an up-tempo song and dance
to drive away the bird Pokémon that
prey on its flower seeds.`,japanese:`アップテンポの　踊りと　音で
花の　タネを　ねらう　天敵の
とりポケモンを　追い払うのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",height:10,weight:280},{id:557,names:{korean:"돌살이",english:"Dwebble",japanese:"イシズマイ"},descriptions:{korean:`적당한 돌을 찾아 구멍을 뚫어
살 곳을 만든다. 부서지면 대신할
돌을 찾을 때까지 불안해한다.`,english:`This Pokémon can easily melt holes in
hard rocks with a liquid secreted from
its mouth.`,japanese:`手ごろな　石に　穴を　開けて
住処にする。壊されると　かわりの
石が　見つかるまで　落ち着かない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",height:3,weight:145},{id:558,names:{korean:"암팰리스",english:"Crustle",japanese:"イワパレス"},descriptions:{korean:`무거운 바위를 등에 지고
며칠이고 건조한 땅을
이동할 수 있는 다릿심을 가지고 있다.`,english:`Competing for territory, Crustle
fight viciously. The one whose boulder
is broken is the loser of the battle.`,japanese:`重たい　岩を　背負って
乾燥した　土地を　何日でも
移動できる　脚力を　持つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",height:14,weight:2e3},{id:559,names:{korean:"곤율랭",english:"Scraggy",japanese:"ズルッグ"},descriptions:{korean:`가죽을 목까지 늘려서
방어 자세를 취한다. 고무 같은
탄력을 이용해 데미지를 줄인다.`,english:`Its skin has a rubbery elasticity, so
it can reduce damage by defensively
pulling its skin up to its neck.`,japanese:`皮を　首まで　引き上げて
防御の　姿勢。ゴムのような　弾力で
ダメージを　減らす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",height:6,weight:118},{id:560,names:{korean:"곤율거니",english:"Scrafty",japanese:"ズルズキン"},descriptions:{korean:`탈피한 가죽을 끌어 올려
데미지를 줄이면서 킥!
볏이 클수록 거만하다.`,english:`Groups of them beat up anything
that enters their territory. Each can
spit acidic liquid from its mouth.`,japanese:`脱皮した　皮を　ずりあげて
ダメージを　減らしつつ　キック！
とさかが　大きいほど　偉そうだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",height:11,weight:300},{id:561,names:{korean:"심보러",english:"Sigilyph",japanese:"シンボラー"},descriptions:{korean:`고대 도시의 수호신이었다.
자기 영역을 침범한 상대를
사이코 파워로 공격한다.`,english:`They never vary the route they fly,
because their memories of guarding
an ancient city remain steadfast.`,japanese:`古代都市の　守り神だった。
縄張りに　侵入した　敵を
サイコパワーで　攻撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",height:14,weight:140},{id:562,names:{korean:"데스마스",english:"Yamask",japanese:"デスマス"},descriptions:{korean:`무덤에 매장된 사람의
영혼이 포켓몬으로 변했다.
죽기 전 기억이 남아 있다.`,english:`Each of them carries a mask that used
to be its face when it was human.
Sometimes they look at it and cry.`,japanese:`お墓に　埋葬された　人の
魂が　ポケモンに　変化した。
死ぬ前の　記憶が　残っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",height:5,weight:15},{id:563,names:{korean:"데스니칸",english:"Cofagrigus",japanese:"デスカーン"},descriptions:{korean:`황금으로 된 반짝거리는 몸.
자신이 인간이었다는 사실을
이제는 기억하지 못할 것이다.`,english:`It has been said that they swallow those
who get too close and turn them into
mummies. They like to eat gold nuggets.`,japanese:`近づいた　人間を　飲みこんで
ミイラに　してしまうという　ウワサ。
金塊を　好んで　食べる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",height:17,weight:765},{id:564,names:{korean:"프로토가",english:"Tirtouga",japanese:"プロトーガ"},descriptions:{korean:`약 1억 년 전 바다를
헤엄쳐 다녔다. 육지에 올라
먹이를 덮치는 일도 있다.`,english:`Restored from a fossil, this Pokémon
can dive to depths beyond half a mile.`,japanese:`およそ　１億年前の　海を
泳いでいた。陸地へ　上がって
獲物に　襲いかかる　こともある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",height:7,weight:165},{id:565,names:{korean:"늑골라",english:"Carracosta",japanese:"アバゴーラ"},descriptions:{korean:`바다와 육지에서 생활한다.
손바닥으로 쳐서 배 밑바닥에
구멍을 내는 파워의 소유자다.`,english:`They can live both in the ocean and on
land. A slap from one of them is enough
to open a hole in the bottom of a tanker.`,japanese:`海と　陸地で　生活する。
張り手で　タンカーの　船底に
穴を　開ける　パワーの　持ち主。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",height:12,weight:810},{id:566,names:{korean:"아켄",english:"Archen",japanese:"アーケン"},descriptions:{korean:`화석에서 부활한 포켓몬이다.
모든 새포켓몬의 조상이라
여겨지고 있다.`,english:`Said to be an ancestor of bird Pokémon,
they were unable to fly and moved about
by hopping from one branch to another.`,japanese:`化石から　復活した　ポケモン。
あらゆる　とりポケモンの　祖先と
考えられている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",height:5,weight:95},{id:567,names:{korean:"아케오스",english:"Archeops",japanese:"アーケオス"},descriptions:{korean:`지상에서 도움닫기를 하여
날아오른다. 동료와 협력하여
먹이를 잡는 지능을 가졌다.`,english:`They are intelligent and will cooperate
to catch prey. From the ground, they
use a running start to take flight.`,japanese:`地上で　助走を　つけてから
飛び立つ。仲間と　協力して
獲物を　しとめる　知能を　持つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",height:14,weight:320},{id:568,names:{korean:"깨봉이",english:"Trubbish",japanese:"ヤブクロン"},descriptions:{korean:`쓰레기 봉지가 산업 폐기물과
화학적 변화를 일으켜서
포켓몬으로 다시 태어났다.`,english:`Inhaling the gas they belch will make
you sleep for a week. They prefer
unsanitary places.`,japanese:`ゴミ袋が　産業廃棄物と
化学変化を　起こした　ことで
ポケモンとして　生まれ変わった。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",height:6,weight:310},{id:569,names:{korean:"더스트나",english:"Garbodor",japanese:"ダストダス"},descriptions:{korean:`왼팔로 상대를 꼭 붙들고
입에서 악취가 나는 독가스를
토해내서 마무리한다.`,english:`It clenches opponents with its left arm
and finishes them off with foul-smelling
poison gas belched from its mouth.`,japanese:`左腕で　相手を　絞めつけて
口から　吐き出す　悪臭の　毒ガスで
とどめを　刺すのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",height:19,weight:1073},{id:570,names:{korean:"조로아",english:"Zorua",japanese:"ゾロア"},descriptions:{korean:`상대와 똑 닮게 둔갑한 것처럼
보이게 하여 속이거나 놀라게 해서
그 틈에 도망가는 일이 많다.`,english:`It changes into the forms of others
to surprise them. Apparently, it
often transforms into a silent child.`,japanese:`相手そっくりに　化けているように
みせかけ　だましたり　驚かして
そのすきに　逃げ出すことが　多い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",height:7,weight:125},{id:571,names:{korean:"조로아크",english:"Zoroark",japanese:"ゾロアーク"},descriptions:{korean:`한 번에 많은 사람을
속이는 힘을 가졌다. 환영의
경치를 보여줘 거처를 지킨다.`,english:`Bonds between these Pokémon are very
strong. It protects the safety of its
pack by tricking its opponents.`,japanese:`いっぺんに　大勢の　人を
化かす　力を　持つ。
幻の　景色を　見せて　住処を　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",height:16,weight:811},{id:572,names:{korean:"치라미",english:"Minccino",japanese:"チラーミィ"},descriptions:{korean:`서로의 꼬리로 상대를
철저히 깨끗하게 만드는 것이
치라미끼리의 인사다.`,english:`They greet one another by rubbing each
other with their tails, which are always
kept well groomed and clean.`,japanese:`お互いの　尻尾で　相手を
とことん　きれいに　してあげるのが
チラーミィ同士の　あいさつ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",height:4,weight:58},{id:573,names:{korean:"치라치노",english:"Cinccino",japanese:"チラチーノ"},descriptions:{korean:`하얀 털은 감촉이 정말 좋다.
먼지나 정전기가
전혀 생기지 않는다.`,english:`Their white fur is coated in a special oil
that makes it easy for them to
deflect attacks.`,japanese:`白い　体毛は　肌触りが　抜群。
ほこりや　静電気を
まったく　寄せつけないのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",height:5,weight:75},{id:574,names:{korean:"고디탱",english:"Gothita",japanese:"ゴチム"},descriptions:{korean:`리본 모양의 더듬이로
사이코 파워를 증폭시킨다.
무언가를 가만히 바라보고 있다.`,english:`Their ribbonlike feelers increase their
psychic power. They are always staring
at something.`,japanese:`リボンのような　触角で
サイコパワーを　増幅させる。
なにかを　じっと　見つめている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",height:4,weight:58},{id:575,names:{korean:"고디보미",english:"Gothorita",japanese:"ゴチミル"},descriptions:{korean:`별빛이 힘의 원천이다.
밤이 되면 사이코 파워로 돌을
띄워 별의 배치를 표시한다.`,english:`They use hypnosis to control people and
Pokémon. Tales of Gothorita leading
people astray are told in every corner.`,japanese:`星明りが　パワーの　源。
夜になると　サイコパワーで　石を
浮かべて　星の　配置を　印す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",height:7,weight:180},{id:576,names:{korean:"고디모아젤",english:"Gothitelle",japanese:"ゴチルゼル"},descriptions:{korean:`강력한 사이코 파워의 영향으로
고디모아젤 주변 공간이 비틀어져
몇만 광년이나 떨어진 하늘의 별이 비친다.`,english:`Starry skies thousands of light-years
away are visible in the space distorted
by their intense psychic power.`,japanese:`強力な　サイコパワーの　影響で
ゴチルゼルの　周囲の　空間が　ねじれ
何万光年も　遠くの　星空が　映る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",height:15,weight:440},{id:577,names:{korean:"유니란",english:"Solosis",japanese:"ユニラン"},descriptions:{korean:`몸이 특수한 액체로
둘러싸여 있어 어떤 곤란한
상황이라도 문제없다.`,english:`They drive away attackers by unleashing
psychic power. They can use telepathy
to talk with others.`,japanese:`体が　特殊な　液体に
包まれているので　どんな　きびしい
状況でも　平気なのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",height:3,weight:10},{id:578,names:{korean:"듀란",english:"Duosion",japanese:"ダブラン"},descriptions:{korean:`둘로 분열된 뇌를
가지고 있어서 갑자기 다른
행동을 취할 때가 있다.`,english:`Since they have two divided brains,
at times they suddenly try to take two
different actions at once.`,japanese:`２つに　分裂した　脳みそを
持っているため　いきなり　違う
行動を　とることが　あるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",height:6,weight:80},{id:579,names:{korean:"란쿨루스",english:"Reuniclus",japanese:"ランクルス"},descriptions:{korean:`발휘한 사이코 파워를 사용해
특수한 액체로 만들어진
팔을 조종해서 바위를 부순다.`,english:`When Reuniclus shake hands, a network
forms between their brains, increasing
their psychic power.`,japanese:`発揮した　サイコパワーを　使い
特殊な　液体で　つくられた
腕を　操り　岩を　砕く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",height:10,weight:201},{id:580,names:{korean:"꼬지보리",english:"Ducklett",japanese:"コアルヒー"},descriptions:{korean:`상대에게 공격당하면 전신의
깃털에서 물보라를 내뿜는다.
물안개에 숨어들어 도망친다.`,english:`These bird Pokémon are excellent divers.
They swim around in the water eating
their favorite food--peat moss.`,japanese:`敵に　襲われると　全身の　羽毛から
水しぶきを　出す。
水煙に　紛れて　逃げるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",height:5,weight:55},{id:581,names:{korean:"스완나",english:"Swanna",japanese:"スワンナ"},descriptions:{korean:`우아한 외모와 다르게
날개로 힘차게 날개 치며
수천 km를 계속 날 수 있다.`,english:`Swanna start to dance at dusk.
The one dancing in the middle is
the leader of the flock.`,japanese:`優雅な　みかけに　よらず
翼で　力強く　羽ばたき
数千キロ　飛び続けられる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",height:13,weight:242},{id:582,names:{korean:"바닐프티",english:"Vanillite",japanese:"バニプッチ"},descriptions:{korean:`마이너스 50도의 숨결을 내뱉는다.
눈 결정을 만들어
주변에 눈이 내리게 한다.`,english:`The temperature of their breath
is -58° F. They create snow crystals and
make snow fall in the areas around them.`,japanese:`マイナス５０度の　息を　吐く。
雪の　結晶を　作って
あたりに　雪を　降らせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",height:4,weight:57},{id:583,names:{korean:"바닐리치",english:"Vanillish",japanese:"バニリッチ"},descriptions:{korean:`주변 공기를 차갑게 해서
얼음 알갱이를 발생시켜서
상대의 몸을 얼려버린다.`,english:`Snowy mountains are this Pokémon’s
habitat. During an ancient ice age, they
moved to southern areas.`,japanese:`辺りの　空気を　冷やして
氷の　粒を　発生　させて
敵の　体を　凍りつかせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",height:11,weight:410},{id:584,names:{korean:"배바닐라",english:"Vanilluxe",japanese:"バイバニラ"},descriptions:{korean:`두 개의 머리가 동시에 화를 내면
뿔에서 강한 눈보라가 뿜어져 나온다.
주변을 많은 눈으로 묻어 버린다.`,english:`Swallowing large amounts of water, they
make snow clouds inside their bodies and
attack their foes with violent blizzards.`,japanese:`２つの　頭が　同時に　怒ると
ツノから　猛吹雪を　噴き出す。
あたりを　大雪で　埋めてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",height:13,weight:575},{id:585,names:{korean:"사철록",english:"Deerling",japanese:"シキジカ"},descriptions:{korean:`계절이 바뀌었을 때뿐 아니라
기온이나 습도에 따라서도
몸의 색깔은 조금 변한다.`,english:`The color and scent of their fur changes
to match the mountain grass. When they
sense hostility, they hide in the grass.`,japanese:`季節が　変わったとき　だけでなく
気温や　湿度に　よっても
体の色は　少し　変化する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",height:6,weight:195},{id:586,names:{korean:"바라철록",english:"Sawsbuck",japanese:"メブキジカ"},descriptions:{korean:`계절에 따라 거처를 바꾼다.
사람들은 바라철록의 뿔에서
계절의 변화를 느낀다.`,english:`They migrate according to the seasons.
People can tell the season by looking at
Sawsbuck’s horns.`,japanese:`季節によって　住処を　変える。
人々は　メブキジカの　ツノで
季節の　移り変わりを　感じる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",height:19,weight:925},{id:587,names:{korean:"에몽가",english:"Emolga",japanese:"エモンガ"},descriptions:{korean:`숲의 나무 위에 산다.
망토 같은 막의 안쪽을
방전시키며 활공한다.`,english:`The energy made in its cheeks’ electric
pouches is stored inside its membrane
and released while it is gliding.`,japanese:`森の　木の上で　暮らす。
マントのような　膜の　内側を
放電　させながら　滑空する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",height:4,weight:50},{id:588,names:{korean:"딱정곤",english:"Karrablast",japanese:"カブルモ"},descriptions:{korean:`쪼마리와 함께 있을 때
전기적인 자극을 받으면
진화하는 이상한 포켓몬이다.`,english:`These mysterious Pokémon evolve when
they receive electrical stimulation while
they are in the same place as Shelmet.`,japanese:`チョボマキと　一緒に　いるときに
電気的な　刺激を　受けると
進化する　不思議な　ポケモンだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",height:5,weight:59},{id:589,names:{korean:"슈바르고",english:"Escavalier",japanese:"シュバルゴ"},descriptions:{korean:`쪼마리에게서 뺏은 껍질로
몸을 에워싸 가드하면서
2개의 창으로 찔러온다.`,english:`They fly around at high speed, striking
with their pointed spears. Even when in
trouble, they face opponents bravely.`,japanese:`チョボマキから　奪った　殻で
体を　覆い　ガードしながら
２本の　ヤリで　突いてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",height:10,weight:330},{id:590,names:{korean:"깜놀버슬",english:"Foongus",japanese:"タマゲタケ"},descriptions:{korean:`몬스터볼을 닮은 무늬로
유인한 후 독 포자를 뿌려댄다.
왜 닮았는지는 불가사의다.`,english:`It lures people in with its Poké Ball
pattern, then releases poison spores.
Why it resembles a Poké Ball is unknown.`,japanese:`モンスターボールに　似た　模様で
誘い　毒胞子を　吹きかける。
なぜ　似ているかは　ナゾである。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",height:2,weight:10},{id:591,names:{korean:"뽀록나",english:"Amoonguss",japanese:"モロバレル"},descriptions:{korean:`몬스터볼 무늬의 삿갓을 보여주며
먹이를 유인하려 하지만
속아 넘어가는 포켓몬은 드물다.`,english:`It lures prey close by dancing and
waving its arm caps, which resemble
Poké Balls, in a swaying motion.`,japanese:`モンスターボールの　カサを　見せつけ
獲物を　誘き寄せようとするが
だまされる　ポケモンは　少ない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",height:6,weight:105},{id:592,names:{korean:"탱그릴",english:"Frillish",japanese:"プルリル"},descriptions:{korean:`먹이를 독으로 마비시켜
8000m 심해에
있다는 거처로 데려간다.`,english:`With its thin, veil-like arms wrapped
around the body of its opponent,
it sinks to the ocean floor.`,japanese:`獲物を　毒で　しびれさせて
８０００メートルの　深海に
あるという　住処に　連れていく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",height:12,weight:330},{id:593,names:{korean:"탱탱겔",english:"Jellicent",japanese:"ブルンゲル"},descriptions:{korean:`몸 대부분이 해수다.
해저에는 탱탱겔이 가라앉힌
배로 만들어진 성이 있다고 한다.`,english:`The fate of the ships and crew that
wander into Jellicent’s habitat:
all sunken, all lost, all vanished.`,japanese:`体の　ほとんどが　海水。
海底には　ブルンゲルが　沈めた
船で　できた　城が　あるという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",height:22,weight:1350},{id:594,names:{korean:"맘복치",english:"Alomomola",japanese:"ママンボウ"},descriptions:{korean:`넓은 바다를 떠돌아다니며 산다.
상처 입은 포켓몬을 발견하면
안고서 물가까지 옮긴다.`,english:`The special membrane enveloping
Alomomola has the ability to heal wounds.`,japanese:`大海原を　漂って　暮らす。
傷ついた　ポケモンを　見つけると
抱きかかえて　岸まで　運ぶ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",height:12,weight:316},{id:595,names:{korean:"파쪼옥",english:"Joltik",japanese:"バチュル"},descriptions:{korean:`스스로 전기를 만들 수 없어
다른 큰 포켓몬에
달라붙어 정전기를 흡수한다.`,english:`Joltik that live in cities have learned
a technique for sucking electricity
from the outlets in houses.`,japanese:`自分では　電気を　つくれないので
他の　大きな　ポケモンに
とりつき　静電気を　吸いとる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",height:1,weight:6},{id:596,names:{korean:"전툴라",english:"Galvantula",japanese:"デンチュラ"},descriptions:{korean:`전기를 띤 실로 함정을 설치한다.
감전돼서 움직이지 못하는
먹이를 천천히 먹어치운다.`,english:`When attacked, they create an
electric barrier by spitting out
many electrically charged threads.`,japanese:`電気を　帯びた　糸で　ワナを
仕掛ける。感電して　動けない　獲物を
ゆっくりと　いただくのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",height:8,weight:143},{id:597,names:{korean:"철시드",english:"Ferroseed",japanese:"テッシード"},descriptions:{korean:`위험을 감지하면 가시를
일제히 발사하여 반격한다.
그 틈에 몸을 굴려 도망간다.`,english:`When threatened, it attacks by
shooting a barrage of spikes, which gives
it a chance to escape by rolling away.`,japanese:`危険を　察知すると　トゲを
いっせいに　発射して　反撃。
その　すきに　転がって　逃げる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",height:6,weight:188},{id:598,names:{korean:"너트령",english:"Ferrothorn",japanese:"ナットレイ"},descriptions:{korean:`3개의 촉수를 세게 내리치고
거기에 가시를 날려 상대를
흔적도 없이 분쇄한다.`,english:`It fights by swinging around its three
spiky feelers. A hit from these steel
spikes can reduce a boulder to rubble.`,japanese:`３本の　触手を　たたきつけ
さらに　トゲを　飛ばして　相手を
跡形残らず　粉砕する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",height:10,weight:1100},{id:599,names:{korean:"기어르",english:"Klink",japanese:"ギアル"},descriptions:{korean:`두 개의 몸을 맞물려
회전시켜서 살아가기 위한
에너지를 만들고 있다.`,english:`The two minigears that mesh together
are predetermined. Each will rebound
from other minigears without meshing.`,japanese:`２つの　体が　かみ合い
回転することで　生きるための
エネルギーを　作り出している。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",height:3,weight:210},{id:600,names:{korean:"기기어르",english:"Klang",japanese:"ギギアル"},descriptions:{korean:`회전 방향을 바꿔서
동료에게 감정을 전한다.
화가 나면 회전이 빨라진다.`,english:`By changing the direction in which it
rotates, it communicates its feelings to
others. When angry, it rotates faster.`,japanese:`回転方向を　変える　ことで
仲間に　気持ちを　伝えている。
怒るほど　回転が　速くなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",height:6,weight:510},{id:601,names:{korean:"기기기어르",english:"Klinklang",japanese:"ギギギアル"},descriptions:{korean:`빨간 코어가 달린 기어를
고속 회전시켜서 에너지를
급속 충전한다.`,english:`The gear with the red core is
rotated at high speed for a
rapid energy charge.`,japanese:`赤い　コアの　ついた　ギアを
高速回転させて　エネルギーを
急速チャージ　するのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",height:6,weight:810},{id:602,names:{korean:"저리어",english:"Tynamo",japanese:"シビシラス"},descriptions:{korean:`한 마리의 전력은 적지만
많은 저리어가 연결되면
번개와 같은 위력이 된다.`,english:`While one alone doesn’t have much power,
a chain of many Tynamo can be as
powerful as lightning.`,japanese:`１匹の　電力は　小さいが
たくさんの　シビシラスが　つながると
雷と　同じ　威力になる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",height:2,weight:3},{id:603,names:{korean:"저리릴",english:"Eelektrik",japanese:"シビビール"},descriptions:{korean:`상대를 휘감고 동그란
반점에서 전기를 흘려보내
마비시킨 뒤 통째로 문다.`,english:`They coil around foes and shock them
with electricity-generating organs that
seem simply to be circular patterns.`,japanese:`相手に　巻きつき　まるい
はん点から　電気を　流して
しびれたところを　まるかじりする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",height:12,weight:220},{id:604,names:{korean:"저리더프",english:"Eelektross",japanese:"シビルドン"},descriptions:{korean:`흡반 같은 입으로 먹이에
달라붙은 후 박아 넣은 이빨을
통해 전기를 흘려 감전시킨다.`,english:`They crawl out of the ocean using their
arms. They will attack prey on shore and
immediately drag it into the ocean.`,japanese:`吸盤の　口で　獲物に　吸いつき
食いこませた　キバから
電気を　流して　感電させる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",height:21,weight:805},{id:605,names:{korean:"리그레",english:"Elgyem",japanese:"リグレー"},descriptions:{korean:`강력한 사이코 파워를 다룬다.
사이코 파워로 상대의 뇌를
조여서 두통을 일으킨다.`,english:`It uses its strong psychic power
to squeeze its opponent’s brain,
causing unendurable headaches.`,japanese:`強力な　サイコパワーを　操る。
サイコパワーで　相手の　脳みそを
絞めつけて　頭痛を　起こさせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",height:5,weight:90},{id:606,names:{korean:"벰크",english:"Beheeyem",japanese:"オーベム"},descriptions:{korean:`손끝을 점멸시켜서
대화하는 듯하나 그 패턴은
아직 해독하지 못했다.`,english:`It can manipulate an opponent’s memory.
Apparently, it communicates by flashing
its three different-colored fingers.`,japanese:`指先を　点滅　させて
会話するらしいが　その　パターンは
まだ　解読　できていない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",height:10,weight:345},{id:607,names:{korean:"불켜미",english:"Litwick",japanese:"ヒトモシ"},descriptions:{korean:`빛을 밝혀 길 안내를
하는 것처럼 가장하여
생명력을 빨아들이고 있다.`,english:`Litwick shines a light that absorbs the
life energy of people and Pokémon,
which becomes the fuel that it burns.`,japanese:`明かりを　灯して　道案内を
するように　見せかけながら
生命力を　吸い取っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",height:3,weight:31},{id:608,names:{korean:"램프라",english:"Lampent",japanese:"ランプラー"},descriptions:{korean:`영혼을 빨아들여 불을 밝힌다.
사람이 죽는 것을 기다리기 위해
병원을 서성거리게 되었다.`,english:`This ominous Pokémon is feared.
Through cities it wanders, searching
for the spirits of the fallen.`,japanese:`魂を　吸いとり　火を灯す。
人が　死ぬのを　待つため
病院を　うろつくようになった。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",height:6,weight:130},{id:609,names:{korean:"샹델라",english:"Chandelure",japanese:"シャンデラ"},descriptions:{korean:`샹델라의 불꽃에 둘러싸이면
영혼이 빨려가 불타버린다.
빈 껍데기인 몸만 남는다.`,english:`It absorbs a spirit, which it then burns.
By waving the flames on its arms,
it puts its foes into a hypnotic trance.`,japanese:`シャンデラの　炎に　包まれると
魂が　吸い取られ　燃やされる。
抜け殻の　体　だけが　残る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",height:10,weight:343},{id:610,names:{korean:"터검니",english:"Axew",japanese:"キバゴ"},descriptions:{korean:`나무열매를 이빨로 깨물어 먹는다.
이빨이 몇 차례에 걸쳐 새로 나면
강하고 날카로워진다`,english:`They use their tusks to crush the
berries they eat. Repeated regrowth
makes their tusks strong and sharp.`,japanese:`木の実を　キバで　砕いて　食べる。
何回も　生え変わることで
強く　鋭い　キバに　なる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",height:6,weight:180},{id:611,names:{korean:"액슨도",english:"Fraxure",japanese:"オノンド"},descriptions:{korean:`큰 바위를 부수는 이빨을 가지고 있다.
액슨도들의 영역 싸움은
매우 격렬하다.`,english:`Since a broken tusk will not grow back,
they diligently sharpen their tusks on
river rocks after they’ve been fighting.`,japanese:`大岩を　砕く　キバを　持つ。
縄張りを　巡る　オノンドたちの
争いは　非常に　激しい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",height:10,weight:360},{id:612,names:{korean:"액스라이즈",english:"Haxorus",japanese:"オノノクス"},descriptions:{korean:`상냥한 성격이지만 영역을
어지럽히는 자는 용서하지 않는다.
철을 자르는 이빨로 덤벼든다.`,english:`They are kind but can be relentless
when defending territory. They challenge
foes with tusks that can cut steel.`,japanese:`優しい　性格だが　縄張りを　荒らす
者には　容赦しない。
鉄を　切る　キバで　挑みかかる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",height:18,weight:1055},{id:613,names:{korean:"코고미",english:"Cubchoo",japanese:"クマシュン"},descriptions:{korean:`언제나 콧물을 달고 다닌다.
콧물을 훌쩍거려 기술을 사용한다.
콧물이 기술의 재료인 셈이다.`,english:`When it is not feeling well, its mucus
gets watery and the power of its
Ice-type moves decreases.`,japanese:`いつも　鼻水を　垂らしている。
鼻水を　すすって　技を　出す。
鼻水が　技の　素　なのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",height:5,weight:85},{id:614,names:{korean:"툰베어",english:"Beartic",japanese:"ツンベアー"},descriptions:{korean:`북쪽의 차가운 바다를 좋아한다.
입에서 내뿜는 숨을 얼려
바다 위에 길을 만들어 걷는다.`,english:`It can make its breath freeze at will.
Very able in the water, it swims around
in northern seas and catches prey.`,japanese:`北の　冷たい　海を　好む。
口から　吐きだした　息を凍らせ
海の上に　道をつくり　歩く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",height:26,weight:2600},{id:615,names:{korean:"프리지오",english:"Cryogonal",japanese:"フリージオ"},descriptions:{korean:`눈구름 속에서 태어났다.
얼음 결정으로 만들어진
사슬로 먹이를 잡는다.`,english:`When its body temperature goes up, it
turns into steam and vanishes. When its
temperature lowers, it returns to ice.`,japanese:`雪雲の　中で　生まれた。
氷の　結晶で　できた　鎖で
獲物を　捕まえる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",height:11,weight:1480},{id:616,names:{korean:"쪼마리",english:"Shelmet",japanese:"チョボマキ"},descriptions:{korean:`딱정곤과 함께 있을 때
전기적인 자극을 받으면
서로의 몸이 진화한다.`,english:`When attacked, it defends itself by
closing the lid of its shell. It can spit
a sticky, poisonous liquid.`,japanese:`カブルモと　一緒に　いるときに
電気的な　刺激を　受けると
お互いの　体が　進化する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",height:4,weight:77},{id:617,names:{korean:"어지리더",english:"Accelgor",japanese:"アギルダー"},descriptions:{korean:`무거운 껍데기를 벗었기 때문에
몸이 가벼워졌다. 마치 닌자 같은
몸놀림으로 싸운다.`,english:`When its body dries out, it weakens.
So, to prevent dehydration, it wraps
itself in many layers of thin membrane.`,japanese:`重い　殻を　脱いだために
身軽になった。まるで　忍者のような
身のこなしで　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",height:8,weight:253},{id:618,names:{korean:"메더",english:"Stunfisk",japanese:"マッギョ"},descriptions:{korean:`피부가 단단해서 씨름꾼에게
밟혀도 아무렇지 않다. 전기를
흘려보낼 때 웃는 얼굴이 된다.`,english:`Its skin is very hard, so it is unhurt
even if stepped on by sumo wrestlers.
It smiles when transmitting electricity.`,japanese:`皮膚が　硬いので
相撲取りに　踏まれても　平気。
電気を　流すとき　笑い顔に　なる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",height:7,weight:110},{id:619,names:{korean:"비조푸",english:"Mienfoo",japanese:"コジョフー"},descriptions:{korean:`기술을 내보내는 스피드가 자랑이다.
설령 파워는 낮더라도
많은 공격 횟수로 커버한다.`,english:`In fights, they dominate with onslaughts
of flowing, continuous attacks. With
their sharp claws, they cut enemies.`,japanese:`技を繰り出す　スピードが　自慢。
たとえ　パワーは　低くても
手数の　多さで　カバーする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",height:9,weight:200},{id:620,names:{korean:"비조도",english:"Mienshao",japanese:"コジョンド"},descriptions:{korean:`눈에 보이지 않을 정도의 스피드로
구사하는 발차기는 거대한
바위도 산산이 조각낸다.`,english:`It wields the fur on its arms like a whip.
Its arm attacks come with such rapidity
that they cannot even be seen.`,japanese:`腕の　体毛を　ムチのように
あつかう。両腕の　攻撃は
目にも　止まらぬ　速さ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",height:14,weight:355},{id:621,names:{korean:"크리만",english:"Druddigon",japanese:"クリムガン"},descriptions:{korean:`좁은 동굴을 뛰어다니며
날카로운 손톱으로 먹이를 잡는다.
얼굴 피부는 바위보다 단단하다.`,english:`It warms its body by absorbing sunlight
with its wings. When its body temperature
falls, it can no longer move.`,japanese:`狭い　洞穴を　走り回り
獲物を　鋭い　ツメで　捕獲。
顔の　皮膚は　岩より　硬い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",height:16,weight:1390},{id:622,names:{korean:"골비람",english:"Golett",japanese:"ゴビット"},descriptions:{korean:`체내에서 불타는 에너지로
인해 활동하고 있지만 어떤
에너지인지는 불명이다.`,english:`The energy that burns inside it
enables it to move, but no one has yet
been able to identify this energy.`,japanese:`体内で　燃える　エネルギーに　よって
活動しているが　どんな
エネルギーなのかは　不明である。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",height:10,weight:920},{id:623,names:{korean:"골루그",english:"Golurk",japanese:"ゴルーグ"},descriptions:{korean:`골루그를 만든 고대인에게
사람과 포켓몬을 지키도록
명령받았다고 전해진다.`,english:`It flies across the sky at Mach speeds.
Removing the seal on its chest makes
its internal energy go out of control.`,japanese:`ゴルーグを　作った　古代人から
人や　ポケモンを　守るように
命令されていると　言われている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",height:28,weight:3300},{id:624,names:{korean:"자망칼",english:"Pawniard",japanese:"コマタナ"},descriptions:{korean:`전신이 칼날인 포켓몬이다.
싸움에서 칼의 이가 빠지면
강가의 돌로 칼을 간다.`,english:`Blades comprise this Pokémon’s entire
body. If battling dulls the blades, it
sharpens them on stones by the river.`,japanese:`全身が　刃物の　ポケモン。
戦いで　刃こぼれすると
河原の　石で　刃を　とぐ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",height:5,weight:102},{id:625,names:{korean:"절각참",english:"Bisharp",japanese:"キリキザン"},descriptions:{korean:`몇 마리의 자망칼과 싸우게 해서
상처 입고 움직일 수 없게 된 먹이를
두 동강 내버리는 무서운 포켓몬.`,english:`It leads a group of Pawniard.
It battles to become the boss, but will
be driven from the group if it loses.`,japanese:`数匹の　コマタナを　戦わせ
傷つき　動けなくなった　獲物を
真っ二つにする　怖い　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",height:16,weight:700},{id:626,names:{korean:"버프론",english:"Bouffalant",japanese:"バッフロン"},descriptions:{korean:`무작정 돌진하여 박치기를
한다. 달리고 있는 열차를
탈선시킬 정도의 파괴력이다.`,english:`Their fluffy fur absorbs damage,
even if they strike foes with a
fierce headbutt.`,japanese:`見境なく　突進して　頭突きを
食らわせる。走っている　列車を
脱線させる　破壊力。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",height:16,weight:946},{id:627,names:{korean:"수리둥보",english:"Rufflet",japanese:"ワシボン"},descriptions:{korean:`다리 힘으로 나무열매를 으깬다.
아무리 강한 상대라도
용감히 맞서는 습성이 있다.`,english:`They crush berries with their talons. They bravely
stand up to any opponent, no matter how strong
it is.`,japanese:`脚力で　木の実を　砕く。
どんなに　強い　相手でも
勇敢に　立ち向かう　習性。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",height:5,weight:105},{id:628,names:{korean:"워글",english:"Braviary",japanese:"ウォーグル"},descriptions:{korean:`동료를 위해서라면 아무리
상처를 입더라도 싸움을 관두지 않는
용감한 넓은 하늘의 전사.`,english:`They fight for their friends without any
thought about danger to themselves.
One can carry a car while flying.`,japanese:`仲間の　ためなら　どれだけ
傷つこうとも　戦いを　やめない
勇敢な　大空の　戦士。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",height:15,weight:410},{id:629,names:{korean:"벌차이",english:"Vullaby",japanese:"バルチャイ"},descriptions:{korean:`날개가 작아서 날지 못한다.
진화가 가까워지면
자기 스스로 해골을 벗어버린다.`,english:`Their wings are too tiny to allow them to fly.
They guard their posteriors with bones that were
gathered by Mandibuzz.`,japanese:`翼が　小さいため　飛べない。
進化の　ときが　近づくと
自分から　ガイコツを　脱ぎ捨てる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",height:5,weight:90},{id:630,names:{korean:"버랜지나",english:"Mandibuzz",japanese:"バルジーナ"},descriptions:{korean:`넓은 하늘에서 원을 그리며 날고
먹이를 발견하면 덮쳐서
둥지까지 가뿐히 나른다.`,english:`It makes a nest out of bones it finds.
It grabs weakened prey in its talons
and hauls it to its nest of bones.`,japanese:`大空で　円を描きつつ　飛び
獲物を　みつけると　襲いかかって
巣まで　軽々と　運んでいく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",height:12,weight:395},{id:631,names:{korean:"앤티골",english:"Heatmor",japanese:"クイタラン"},descriptions:{korean:`뜨겁게 타오르는 불꽃의 혀로
아이앤트의 강철 몸을
녹여서 알맹이를 먹어치운다.`,english:`It breathes through a hole in its tail
while it burns with an internal fire.
Durant is its prey.`,japanese:`高温で　燃える　炎の　舌で
アイアントの　鋼の　体を　溶かして
中身を　いただくのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",height:14,weight:580},{id:632,names:{korean:"아이앤트",english:"Durant",japanese:"アイアント"},descriptions:{korean:`천적인 앤티골에 대해서
모두와 역할 분담을 하면서
반격해 둥지에서 쫓아낸다.`,english:`They attack in groups, covering
themselves in steel armor to
protect themselves from Heatmor.`,japanese:`天敵の　クイタランに　対して
みんなで　役割分担　しながら
反撃して　巣から　追い払う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",height:3,weight:330},{id:633,names:{korean:"모노두",english:"Deino",japanese:"モノズ"},descriptions:{korean:`눈이 보이지 않아서 몸통박치기나
물기로 주변을 살핀다.
몸에 상처가 끊이지 않는다.`,english:`It tends to bite everything, and it
is not a picky eater. Approaching it
carelessly is dangerous.`,japanese:`目が　見えないため　体当たりしたり
かみついて　まわりを　探る。
体中　生傷が　絶えない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",height:8,weight:173},{id:634,names:{korean:"디헤드",english:"Zweilous",japanese:"ジヘッド"},descriptions:{korean:`2개의 머리는 사이가 나빠서
상대보다 많이 먹는 것으로
주도권을 잡으려고 한다.`,english:`After it has eaten up all the food in its territory,
it moves to another area. Its two heads do not
get along.`,japanese:`２つの　頭は　仲が　悪く
相手より　多く　食べることで
主導権を　握ろうと　する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",height:14,weight:500},{id:635,names:{korean:"삼삼드래",english:"Hydreigon",japanese:"サザンドラ"},descriptions:{korean:`양팔에 있는 머리에는 뇌가
없다. 3개의 머리로 모든 것을
먹어치워 파괴해 버린다.`,english:`This brutal Pokémon travels the skies on
its six wings. Anything that moves seems
like a foe to it, triggering its attack.`,japanese:`両腕の　頭は　脳みそを　持たない。
３つの　頭で　すべてを　食べつくし
破壊してしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",height:18,weight:1600},{id:636,names:{korean:"활화르바",english:"Larvesta",japanese:"メラルバ"},descriptions:{korean:`태양에서 태어났다고 전해진다.
진화할 때 뿔에서 뿜어져 나온
불꽃으로 전신을 감싼다.`,english:`This Pokémon was believed to have
been born from the sun. When it evolves,
its entire body is engulfed in flames.`,japanese:`太陽から　生まれたと　いわれる。
進化するとき　ツノから　噴き出した
炎で　全身を　包みこむ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",height:11,weight:288},{id:637,names:{korean:"불카모스",english:"Volcarona",japanese:"ウルガモス"},descriptions:{korean:`싸울 때는 6개의 날개에서
불꽃 가루를 흩뿌려서
주변 일대를 불바다로 만든다.`,english:`When volcanic ash darkened the
atmosphere, it is said that Volcarona’s
fire provided a replacement for the sun.`,japanese:`戦いになると　６枚の　羽から
火の粉の　りんぷんを　まき散らして
あたり　一面を　火の海にする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",height:16,weight:460},{id:638,names:{korean:"코바르온",english:"Cobalion",japanese:"コバルオン"},descriptions:{korean:`강철의 몸과 마음을 지녔다.
째려보기만 해도 난폭한
포켓몬마저도 따르게 된다.`,english:`This legendary Pokémon battled against
humans to protect Pokémon.
Its personality is calm and composed.`,japanese:`鋼の　体と　心を　持つ。
にらみつけるだけで　凶暴な
ポケモンも　従わせてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",height:21,weight:2500},{id:639,names:{korean:"테라키온",english:"Terrakion",japanese:"テラキオン"},descriptions:{korean:`거대한 성벽을 일격에
돌파할 만한 돌진력을 가졌다.
전설로 전해지는 포켓몬이다.`,english:`This Pokémon came to the defense of
Pokémon that had lost their homes in
a war among humans.`,japanese:`巨大な　城壁を
一撃で　突破するほどの　突進力。
伝説で　語られる　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",height:19,weight:2600},{id:640,names:{korean:"비리디온",english:"Virizion",japanese:"ビリジオン"},descriptions:{korean:`머리의 뿔은 날카로운 칼날이다.
회오리바람과 같은 움직임으로
상대를 농락하여 재빠르게 벤다.`,english:`This Pokémon fought humans in order
to protect its friends. Legends about it
continue to be passed down.`,japanese:`頭の　ツノは　鋭い　刃。
旋風のような　動きで　敵を
翻弄して　素早く　切りつける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",height:20,weight:2e3},{id:641,names:{korean:"토네로스",english:"Tornadus",japanese:"トルネロス"},descriptions:{korean:`구름처럼 생긴 에너지체에
하반신이 둘러싸여 있다.
시속 300km로 하늘을 난다.`,english:`The lower half of its body is wrapped in
a cloud of energy. It zooms through
the sky at 200 mph.`,japanese:`雲のような　エネルギー体に
下半身が　包まれている。
時速３００キロで　空を　飛ぶ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",height:15,weight:630},{id:642,names:{korean:"볼트로스",english:"Thundurus",japanese:"ボルトロス"},descriptions:{korean:`꼬리의 가시에서 전격을
날린다. 하나지방의 하늘을
날아다니며 번개를 내리친다.`,english:`Countless charred remains mar the
landscape of places through which
Thundurus has passed.`,japanese:`尻尾の　トゲから　電撃を
撃ち出す。イッシュ地方の　空を
飛び回り　雷を　落とす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",height:15,weight:610},{id:643,names:{korean:"레시라무",english:"Reshiram",japanese:"レシラム"},descriptions:{korean:`불꽃으로 세상을 태워버릴 수 있는
전설의 포켓몬. 진실의 세계를
구축하는 사람을 도와준다.`,english:`This Pokémon appears in legends.
It sends flames into the air from its
tail, burning up everything around it.`,japanese:`炎で　世界を　燃やしつくせる
伝説の　ポケモン。真実の
世界を　築く　人を　助ける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",height:32,weight:3300},{id:644,names:{korean:"제크로무",english:"Zekrom",japanese:"ゼクロム"},descriptions:{korean:`번개로 세상을 태워버릴 수 있는
전설의 포켓몬. 이상의 세계를
구축하는 사람을 보좌한다.`,english:`Concealing itself in lightning clouds,
it flies throughout the Unova region.
It creates electricity in its tail.`,japanese:`稲妻で　世界を　焼きつくせる
伝説の　ポケモン。理想の
世界を　つくる　人を　補佐する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",height:29,weight:3450},{id:645,names:{korean:"랜드로스",english:"Landorus",japanese:"ランドロス"},descriptions:{korean:`랜드로스가 찾아온 땅에는
작물에 열매가 많이 열리기 때문에
농지의 신이라고 전해진다.`,english:`Lands visited by Landorus grant such
bountiful crops that it has been hailed
as “The Guardian of the Fields.”`,japanese:`ランドロスが　訪れる　土地は
作物が　たくさん　実るため
畑の神様　と　言われている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",height:15,weight:680},{id:646,names:{korean:"큐레무",english:"Kyurem",japanese:"キュレム"},descriptions:{korean:`레시라무와 제크로무를 능가할 정도의
힘을 가졌으나 극저온의
냉기에 봉인되어 있다.`,english:`It generates a powerful, freezing
energy inside itself, but its body became
frozen when the energy leaked out.`,japanese:`失った　体を　真実と
理想で　埋めてくれる　英雄を
待つ　氷の　伝説ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",height:30,weight:3250},{id:647,names:{korean:"케르디오",english:"Keldeo",japanese:"ケルディオ"},descriptions:{korean:`바다나 강 등의 수면을 달려
세계 곳곳을 뛰어다닌다.
아름다운 물가에 나타난다.`,english:`By blasting water from its hooves, it can
glide across water. It excels at using
leg moves while battling.`,japanese:`海や　川など　水面を　走り
世界中を　駆け巡る。
美しい　水辺に　現れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",height:14,weight:485},{id:648,names:{korean:"메로엣타",english:"Meloetta",japanese:"メロエッタ"},descriptions:{korean:`메로엣타가 연주하는 선율에는
주위 포켓몬을 기쁘게 하거나
슬프게 할 정도의 힘이 있다.`,english:`Its melodies are sung with a special vocalization
method that can control the feelings of those who
hear it.`,japanese:`メロエッタの　奏でる　旋律は
まわりの　ポケモンを　喜ばせたり
悲しませるほどの　パワーがある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",height:6,weight:65},{id:649,names:{korean:"게노세크트",english:"Genesect",japanese:"ゲノセクト"},descriptions:{korean:`플라스마단에게 개조당한
고대의 벌레포켓몬이다.
등에 있는 대포의 파워가 올라갔다.`,english:`Over 300 million years ago, it was feared
as the strongest of hunters.
It has been modified by Team Plasma.`,japanese:`プラズマ団によって　改造された
古代の　むしポケモン。
背中の　大砲が　パワーアップした。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",height:15,weight:825},{id:650,names:{korean:"도치마론",english:"Chespin",japanese:"ハリマロン"},descriptions:{korean:`머리의 가시는 평소에는 부드럽지만
힘을 주면 뾰족하고 날카로워지며
바위를 뚫어 버릴 정도로 단단해진다.`,english:`The quills on its head are usually soft.
When it flexes them, the points become
so hard and sharp that they can pierce rock.`,japanese:`普段　やわらかい　頭の　トゲは
力を　こめると　鋭く　とがり
岩をも　つらぬくほど　硬くなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",height:4,weight:90},{id:651,names:{korean:"도치보구",english:"Quilladin",japanese:"ハリボーグ"},descriptions:{korean:`몸을 둘러싼 단단한 껍질이
적의 공격을 튕겨내고
날카로운 가시로 반격한다.`,english:`It relies on its sturdy shell to deflect predators’
attacks. It counterattacks with its sharp quills.`,japanese:`体を　覆う　頑丈な　殻が
敵の　攻撃を　弾き返し
鋭い　トゲで　反撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",height:7,weight:290},{id:652,names:{korean:"브리가론",english:"Chesnaught",japanese:"ブリガロン"},descriptions:{korean:`몸통박치기로 50톤 전차를
뒤집는 파워를 지녔다. 자신이
방패가 되어 동료를 지킨다.`,english:`Its Tackle is forceful enough to flip a 50-ton tank.
It shields its allies from danger with its own body.`,japanese:`体当たりで　５０トンの　戦車を
ひっくり返す　パワー。
自分が　盾となって　仲間を　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",height:16,weight:900},{id:653,names:{korean:"푸호꼬",english:"Fennekin",japanese:"フォッコ"},descriptions:{korean:`잔가지를 먹으면 힘이 나서
섭씨 200도가 넘는 열기를
커다란 귀에서 내뿜는다.`,english:`Eating a twig fills it with energy,
and its roomy ears give vent to air
hotter than 390 degrees Fahrenheit.`,japanese:`小枝を　食べると　元気になって
摂氏２００度を　超える　熱気を
大きな　耳から　噴き出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",height:4,weight:94},{id:654,names:{korean:"테르나",english:"Braixen",japanese:"テールナー"},descriptions:{korean:`나뭇가지를 꼬리에 꽂고 있다.
꼬리털의 마찰열로
가지에 불을 붙여 싸운다.`,english:`It has a twig stuck in its tail. With
friction from its tail fur, it sets the
twig on fire and launches into battle.`,japanese:`木の枝を　尻尾に　挿している。
尻尾の　毛の　摩擦熱で
枝に　火をつけて　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",height:10,weight:145},{id:655,names:{korean:"마폭시",english:"Delphox",japanese:"マフォクシー"},descriptions:{korean:`지팡이 끝의 타오르는 불꽃을
바라보며 정신을 통일하면
미래에 일어날 일을 내다볼 수 있다.`,english:`It gazes into the flame at the tip of
its branch to achieve a focused state,
which allows it to see into the future.`,japanese:`杖の　先端で　燃える　炎を　見つめて
精神統一すると
未来の　出来事を　見通せる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",height:15,weight:390},{id:656,names:{korean:"개구마르",english:"Froakie",japanese:"ケロマツ"},descriptions:{korean:`가슴과 등에서 거품을 내뿜는다.
탄력 있는 거품으로 공격을
막아내고 데미지를 줄인다.`,english:`It secretes flexible bubbles from its chest and back.
The bubbles reduce the damage it would otherwise
take when attacked.`,japanese:`胸と　背中から　泡を　出す。
弾力のある　泡で　攻撃を　受け止めて
ダメージを　減らす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",height:3,weight:70},{id:657,names:{korean:"개굴반장",english:"Frogadier",japanese:"ゲコガシラ"},descriptions:{korean:`거품으로 싸인 돌멩이를 던지는
기술을 쓴다. 30m 앞에 있는
빈 캔을 맞출 정도로 컨트롤이 좋다.`,english:`It can throw bubble-covered pebbles with precise
control, hitting empty cans up to a hundred feet away.`,japanese:`泡で　包んだ　小石を　投げる
技を　使う。３０メートル　先の
空き缶に　当てる　コントロール。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",height:6,weight:109},{id:658,names:{korean:"개굴닌자",english:"Greninja",japanese:"ゲッコウガ"},descriptions:{korean:`물을 압축시켜 수리검을
만들어 낸다. 고속으로 회전시키며
던지면 금속도 두 동강이 난다.`,english:`It creates throwing stars out of compressed water.
When it spins them and throws them at high speed,
these stars can split metal in two.`,japanese:`水を　圧縮して　手裏剣を　作り出す。
高速回転させて　飛ばすと
金属も　真っ二つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",height:15,weight:400},{id:659,names:{korean:"파르빗",english:"Bunnelby",japanese:"ホルビー"},descriptions:{korean:`커다란 귀로 땅을 파고
보금자리를 만든다. 하룻밤 동안
쉬지 않고 계속 팔 수 있다.`,english:`They use their large ears to dig burrows.
They will dig the whole night through.`,japanese:`大きな　耳で　地面を　掘って
巣穴を　作る。
一晩中　休まずに　掘り続けられる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",height:4,weight:50},{id:660,names:{korean:"파르토",english:"Diggersby",japanese:"ホルード"},descriptions:{korean:`커다란 귀에는 무게가 1톤을 넘는 바위를
가뿐히 들어 올릴 만한 파워가 있다.
공사 현장에서 대활약한다.`,english:`With their powerful ears, they can heft
boulders of a ton or more with ease.
They can be a big help at construction sites.`,japanese:`大きな　耳は　１トンを　超える 岩を
楽に　持ち上げる　パワー。
工事現場で　大活躍する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",height:10,weight:424},{id:661,names:{korean:"화살꼬빈",english:"Fletchling",japanese:"ヤヤコマ"},descriptions:{korean:`사람을 잘 따르는 성격이다. 아름다운
지저귐과 꽁지를 흔드는 움직임으로
동료에게 신호를 보낸다.`,english:`These friendly Pokémon send signals
to one another with beautiful chirps
and tail-feather movements.`,japanese:`人懐っこい　性格。美しい　さえずりと
尾羽を　振る　動きで
仲間に　合図を　送る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",height:3,weight:17},{id:662,names:{korean:"불화살빈",english:"Fletchinder",japanese:"ヒノヤコマ"},descriptions:{korean:`부리에서 불꽃을 뿜어
풀숲을 태우고 놀라서
뛰쳐나온 사냥감을 잡는다.`,english:`From its beak, it expels embers that set
the tall grass on fire. Then it pounces on
the bewildered prey that pop out of the grass.`,japanese:`火の粉を　クチバシから　飛ばして
草むらを　焦がし　驚いて
飛び出した　獲物を　捕まえる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",height:7,weight:160},{id:663,names:{korean:"파이어로",english:"Talonflame",japanese:"ファイアロー"},descriptions:{korean:`격렬한 싸움으로 흥분하게 되면
온몸의 깃털 사이에서
불꽃을 뿜어내며 비행한다.`,english:`In the fever of an exciting battle, it
showers embers from the gaps between
its feathers and takes to the air.`,japanese:`激しい　戦いで　興奮すると
全身の　羽毛の　すきまから
火の粉を　噴き出して　飛行する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",height:12,weight:245},{id:664,names:{korean:"분이벌레",english:"Scatterbug",japanese:"コフキムシ"},descriptions:{korean:`새포켓몬에게 습격당하면
검은 가루를 흩뿌린다.
만지면 마비되는 독가루다.`,english:`When under attack from bird Pokémon,
it spews a poisonous black powder
that causes paralysis on contact.`,japanese:`とりポケモンに　襲われると
黒い　粉を　まき散らす。
触れると　マヒする　毒の粉だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",height:3,weight:25},{id:665,names:{korean:"분떠도리",english:"Spewpa",japanese:"コフーライ"},descriptions:{korean:`수풀의 그늘에 숨어 산다.
적에게 공격당하면 몸의 털을
뾰족하게 곤두세우며 위협한다.`,english:`It lives hidden within thicket shadows.
When predators attack, it quickly bristles the fur
covering its body in an effort to threaten them.`,japanese:`しげみの　陰に　隠れて　暮らす。
敵に　襲われると　体の　毛を
鋭く　逆立てて　威嚇する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",height:3,weight:84},{id:666,names:{korean:"비비용",english:"Vivillon",japanese:"ビビヨン"},descriptions:{korean:`세계에는 다양한 무늬의 날개를 가진
비비용이 있다. 살고 있는 곳의
기후에 영향을 받는 것 같다.`,english:`Vivillon with many different patterns are
found all over the world. These patterns
are affected by the climate of their habitat.`,japanese:`世界には　さまざまな　羽模様の
ビビヨンがいる。住んでいる　土地の
気候が　影響しているようだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",height:12,weight:170},{id:667,names:{korean:"레오꼬",english:"Litleo",japanese:"シシコ"},descriptions:{korean:`강한 상대에게 맞설 때일수록
갈기의 온도가 높아지고
전신에 힘이 넘쳐난다.`,english:`The stronger the opponent it faces,
the more heat surges from its mane
and the more power flows through its body.`,japanese:`強い　相手に　立ち向かうときほど
たてがみが　高温になり
全身に　力が　みなぎるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",height:6,weight:135},{id:668,names:{korean:"화염레오",english:"Pyroar",japanese:"カエンジシ"},descriptions:{korean:`무리 중에서 가장 커다란
불꽃 갈기를 지닌 수컷이
리더로서 동료들을 이끈다.`,english:`The male with the largest mane of fire
is the leader of the pride.`,japanese:`群れの　中で　一番　大きな　炎の
たてがみを　持つ　オスが
リーダーとして　仲間を　率いる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",height:15,weight:815},{id:669,names:{korean:"플라베베",english:"Flabébé",japanese:"フラベベ"},descriptions:{korean:`꽃의 숨겨진 힘을 끌어내어
자유자재로 조종한다. 플라베베가 지닌
꽃은 이미 몸의 일부다.`,english:`It draws out and controls the hidden power
of flowers. The flower Flabébé holds
is most likely part of its body.`,japanese:`花の　秘めた　力を　引き出して
自在に　操る。フラベベが　持つ　花は
もはや　体の　一部だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",height:1,weight:1},{id:670,names:{korean:"플라엣테",english:"Floette",japanese:"フラエッテ"},descriptions:{korean:`꽃밭을 날아다니며 말라가는
꽃을 보살핀다. 꽃의 숨겨진
힘을 끌어내어 싸운다.`,english:`It flutters around fields of flowers and cares for
flowers that are starting to wilt. It draws
out the hidden power of flowers to battle.`,japanese:`花畑を　飛び回り　枯れかけた　花を
世話する。花の　秘められた　力を
引き出して　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",height:2,weight:9},{id:671,names:{korean:"플라제스",english:"Florges",japanese:"フラージェス"},descriptions:{korean:`멋진 화원이 영역이다.
화초가 내보내는 에너지를
쬐어 자신의 파워로 삼는다.`,english:`It claims exquisite flower gardens as its territory,
and it obtains power from basking in the energy
emitted by flowering plants.`,japanese:`テリトリーは　見事な　花園。
草花の　放つ　エネルギーを　浴びて
自分の　パワーにするのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",height:11,weight:100},{id:672,names:{korean:"메이클",english:"Skiddo",japanese:"メェークル"},descriptions:{korean:`사람과 살기 시작한
최초의 포켓몬이라고 한다.
온화한 성격의 포켓몬이다.`,english:`Thought to be one of the first Pokémon to live in
harmony with humans, it has a placid disposition.`,japanese:`人と　暮らすようになった
最初の　ポケモンと　言われる。
穏やかな　性格の　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",height:9,weight:310},{id:673,names:{korean:"고고트",english:"Gogoat",japanese:"ゴーゴート"},descriptions:{korean:`뿔을 잡을 때 느껴지는 작은 차이로
트레이너의 마음을 읽어낼 수 있기에
하나가 되어 달릴 수 있는 것이다.`,english:`It can tell how its Trainer is feeling by
subtle shifts in the grip on its horns.
This empathic sense lets them run as if one being.`,japanese:`ツノを　握る　わずかな　違いから
トレーナーの　気持ちを　読み取るので
一体となって　走れるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",height:17,weight:910},{id:674,names:{korean:"판짱",english:"Pancham",japanese:"ヤンチャム"},descriptions:{korean:`적이 얕잡아 보지 못하도록 열심히
노려보지만, 효과가 약하다.
물고 있는 잎사귀가 트레이드마크다.`,english:`It does its best to be taken seriously by its enemies,
but its glare is not sufficiently intimidating.
Chewing on a leaf is its trademark.`,japanese:`敵に　なめられないよう　がんばって
にらみつけるが　効果は　薄い。
くわえた　葉っぱが　トレードマーク。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",height:6,weight:80},{id:675,names:{korean:"부란다",english:"Pangoro",japanese:"ゴロンダ"},descriptions:{korean:`성질이 거칠어 툭하면 싸우려 들지만
약자를 괴롭히는 일은 용서하지 않는다.
잎사귀로 적의 움직임을 읽는다.`,english:`Although it possesses a violent temperament,
it won’t put up with bullying. It uses the leaf in
its mouth to sense the movements of its enemies.`,japanese:`気性が　荒く　ケンカっ早いが
弱いものいじめは　許さない。
葉っぱで　敵の　動きを　読む。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",height:21,weight:1360},{id:676,names:{korean:"트리미앙",english:"Furfrou",japanese:"トリミアン"},descriptions:{korean:`복슬복슬한 털을 깎고 다듬으면
모습이 아름다워질 뿐만 아니라
몸의 움직임도 좋아진다.`,english:`Trimming its fluffy fur not only makes
it more elegant but also increases the
swiftness of its movements.`,japanese:`ボサボサの　体毛を　刈りこむと
姿が　美しくなる　だけでなく
身体の　キレが　良くなるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",height:12,weight:280},{id:677,names:{korean:"냐스퍼",english:"Espurr",japanese:"ニャスパー"},descriptions:{korean:`강력한 사이코 파워가
새어 나가지 않도록
방출되는 기관을 귀로 막고 있다.`,english:`The organ that emits its intense psychic power is
sheltered by its ears to keep power from leaking out.`,japanese:`強力な　サイコパワーが
漏れ出さないように　放出する　器官を
耳で　ふさいでいるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",height:3,weight:35},{id:678,names:{korean:"냐오닉스",english:"Meowstic",japanese:"ニャオニクス"},descriptions:{korean:`위험이 다가오면 귀를 들어 올리고
10톤 트럭을 눌러 부술 정도의
사이코 파워를 방출한다.`,english:`When in danger, it raises its ears and
releases enough psychic power to
grind a 10-ton truck into dust.`,japanese:`危険が　迫ると　耳を　持ち上げ
１０トン　トラックを　ひねりつぶす
サイコパワーを　解放する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",height:6,weight:85},{id:679,names:{korean:"단칼빙",english:"Honedge",japanese:"ヒトツキ"},descriptions:{korean:`죽은 자의 혼이 고대의
검에 깃들어 태어났다고 한다.
사람에게 씌어 생명을 빨아들인다.`,english:`Apparently this Pokémon is born when a
departed spirit inhabits a sword. It attaches itself
to people and drinks their life force.`,japanese:`死者の　魂が　古代の　剣に
宿って　生まれたらしい。
人に　とりつき　命を　吸う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",height:8,weight:20},{id:680,names:{korean:"쌍검킬",english:"Doublade",japanese:"ニダンギル"},descriptions:{korean:`진화하여 2자루로 분열되었다.
텔레파시로 서로 대화하며
연계 공격으로 적을 조각낸다.`,english:`When Honedge evolves, it divides into two swords,
which cooperate via telepathy to coordinate attacks
and slash their enemies to ribbons.`,japanese:`進化して　２本に　分裂した。
テレパシーで　会話して
連係攻撃で　敵を　切り刻む。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",height:8,weight:45},{id:681,names:{korean:"킬가르도",english:"Aegislash",japanese:"ギルガルド"},descriptions:{korean:`역대 왕들이 데리고 있었다.
영험한 힘으로 사람이나 포켓몬의
마음을 조종하여 복종하게 한다.`,english:`Generations of kings were attended by these
Pokémon, which used their spectral power to
manipulate and control people and Pokémon.`,japanese:`歴代の　王が　連れていた。
霊力で　人や　ポケモンの
心を　操り　従わせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",height:17,weight:530},{id:682,names:{korean:"슈쁘",english:"Spritzee",japanese:"シュシュプ"},descriptions:{korean:`냄새를 맡은 자를 황홀하게 만드는
향기를 몸에서 풍긴다.
먹은 먹이에 따라 향기가 달라진다.`,english:`It emits a scent that enraptures those
who smell it. This fragrance changes
depending on what it has eaten.`,japanese:`かいだ　者を　うっとりさせる
香りを　体から　漂わせる。
食べた　もので　香りが　変わる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",height:2,weight:5},{id:683,names:{korean:"프레프티르",english:"Aromatisse",japanese:"フレフワン"},descriptions:{korean:`여러 가지 향기를 만들어 낸다.
상대가 싫어하는 냄새를 내보내
싸움을 유리하게 이끌어 나간다.`,english:`It devises various scents, pleasant and unpleasant,
and emits scents that its enemies dislike in order
to gain an edge in battle.`,japanese:`さまざまな　においを　作り出す。
相手の　嫌がる　においを　出して
戦いを　有利に　進めるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",height:8,weight:155},{id:684,names:{korean:"나룸퍼프",english:"Swirlix",japanese:"ペロッパフ"},descriptions:{korean:`솜사탕 같은 달고 끈적끈적한
하얀 실을 내뿜어 상대를
휘감고 움직이지 못하게 한다.`,english:`To entangle its opponents in battle, it extrudes
white threads as sweet and sticky as cotton candy.`,japanese:`わたあめのような　甘くて　ベタつく
白い　糸を　出して
相手を　絡め取り　動きを　封じる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",height:4,weight:35},{id:685,names:{korean:"나루림",english:"Slurpuff",japanese:"ペロリーム"},descriptions:{korean:`아주 약간의 냄새도 구별할 수 있는
민감한 후각을 살려
파티시에를 돕고 있다.`,english:`It can distinguish the faintest of scents.
It puts its sensitive sense of smell to use
by helping pastry chefs in their work.`,japanese:`体臭から　心と　体の
調子を　嗅ぎとる。　医療への
応用が　期待されている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",height:8,weight:50},{id:686,names:{korean:"오케이징",english:"Inkay",japanese:"マーイーカ"},descriptions:{korean:`깜빡이는 발광체를 바라본
상대는 눈앞이 어두컴컴해져
전의를 상실해버리고 만다.`,english:`Opponents who stare at the flashing of the
light-emitting spots on its body become
dazed and lose their will to fight.`,japanese:`発光体の　点滅を　見つめた　相手は
目が　くらみ　戦う　気持ちが
なくなってしまうのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",height:4,weight:35},{id:687,names:{korean:"칼라마네로",english:"Malamar",japanese:"カラマネロ"},descriptions:{korean:`포켓몬 중에서 가장 강력한
최면술을 쓴다. 상대를
자기 마음대로 조종해버린다.`,english:`It wields the most compelling hypnotic powers
of any Pokémon, and it forces others to do
whatever it wants.`,japanese:`ポケモンで　一番　強力な
催眠術を　使う。相手を　意のままに
操ってしまうのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",height:15,weight:470},{id:688,names:{korean:"거북손손",english:"Binacle",japanese:"カメテテ"},descriptions:{korean:`2마리의 거북손손이 하나의
바위에서 산다. 서로 싸우면
한쪽이 다른 바위로 옮겨 간다.`,english:`Two Binacle live together on one rock.
When they fight, one of them will move
to a different rock.`,japanese:`２匹の　カメテテが　ひとつの　岩で
暮らす。ケンカすると　どちらかが
他の　岩に　移る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",height:5,weight:310},{id:689,names:{korean:"거북손데스",english:"Barbaracle",japanese:"ガメノデス"},descriptions:{korean:`진화할 때 2마리의 거북손손이
7마리로 분열된 포켓몬이다.
7마리분의 파워로 싸운다.`,english:`When they evolve, two Binacle multiply into seven.
They fight with the power of seven Binacle.`,japanese:`進化のとき　２匹の　カメテテが
７匹に　分裂した　ポケモン。
７匹分の　パワーで　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",height:13,weight:960},{id:690,names:{korean:"수레기",english:"Skrelp",japanese:"クズモー"},descriptions:{korean:`썩은 해조로 위장한다.
눈치채지 못하고 가까이 다가온
사냥감에 독액을 끼얹어 잡는다.`,english:`Camouflaged as rotten kelp, they spray
liquid poison on prey that approaches
unawares and then finish it off.`,japanese:`腐った　海藻に　擬態する。
気づかずに　近寄ってきた　獲物に
毒液を　浴びせて　しとめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",height:5,weight:73},{id:691,names:{korean:"드래캄",english:"Dragalge",japanese:"ドラミドロ"},descriptions:{korean:`유조선의 선체를 썩게 할 정도의
맹독을 영역 안에 들어 온 것에
무턱대고 끼얹는다`,english:`Their poison is strong enough to eat through
the hull of a tanker, and they spit it indiscriminately
at anything that enters their territory.`,japanese:`タンカーの　船体を　腐らせる　猛毒を
縄張りに　入りこんだ　ものに
見境なく　吐きかける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",height:18,weight:815},{id:692,names:{korean:"완철포",english:"Clauncher",japanese:"ウデッポウ"},descriptions:{korean:`커다란 집게발로
압축한 물을 권총처럼 쏘아
날고 있는 사냥감을 떨어뜨린다.`,english:`They knock down flying prey by firing
compressed water from their massive
claws like shooting a pistol.`,japanese:`大きな　ハサミから　圧縮した　水を
ピストルのように　撃ち出し
飛んでいる　獲物を　撃ち落とす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",height:5,weight:83},{id:693,names:{korean:"블로스터",english:"Clawitzer",japanese:"ブロスター"},descriptions:{korean:`물 포탄을 발사하는
거대한 집게발을 지녔다.
유조선의 선체를 뚫어 버린다.`,english:`Their enormous claws launch cannonballs of
water powerful enough to pierce tanker hulls.`,japanese:`水の　砲弾を　発射する
巨大な　腕を　持つ。
タンカーの　船体を　撃ち抜くぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",height:13,weight:353},{id:694,names:{korean:"목도리키텔",english:"Helioptile",japanese:"エリキテル"},descriptions:{korean:`사막에서 생활한다. 태양의
빛을 쬐고 발전하면
먹이를 먹지 않아도 괜찮다.`,english:`They make their home in deserts. They can
generate their energy from basking in the sun,
so eating food is not a requirement.`,japanese:`砂漠で　生活する。
太陽の　光を　浴びて　発電すれば
エサを　食べなくても　平気なのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",height:5,weight:60},{id:695,names:{korean:"일레도리자드",english:"Heliolisk",japanese:"エレザード"},descriptions:{korean:`목의 깃을 펼쳐 발전한다.
일레도리자드 1마리로 고층 빌딩에
필요한 전기를 만들어 낼 수 있다.`,english:`They flare their frills and generate energy.
A single Heliolisk can generate sufficient
electricity to power a skyscraper.`,japanese:`エリマキを　広げて　発電する。
エレザード　１匹で　高層ビルで
必要な　電気を　作れるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",height:10,weight:210},{id:696,names:{korean:"티고라스",english:"Tyrunt",japanese:"チゴラス"},descriptions:{korean:`화석에서 부활한 포켓몬이다.
마음에 들지 않는 일이 있으면
짜증을 내며 난동을 부린다.`,english:`This Pokémon was restored from a fossil.
If something happens that it doesn’t like,
it throws a tantrum and runs wild.`,japanese:`化石から　復活した　ポケモン。
気に入らない　ことが　あると
かんしゃくを　起こして　大暴れ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",height:8,weight:260},{id:697,names:{korean:"견고라스",english:"Tyrantrum",japanese:"ガチゴラス"},descriptions:{korean:`두꺼운 철판을 종잇장처럼
물어뜯는 커다란 턱 덕분에
고대 세계에서는 무적이었다.`,english:`Thanks to its gargantuan jaws, which could shred
thick metal plates as if they were paper, it was
invincible in the ancient world it once inhabited.`,japanese:`分厚い　鉄板を　紙のように
かみちぎる　おおあごで　古代の
世界では　無敵を　誇った。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",height:25,weight:2700},{id:698,names:{korean:"아마루스",english:"Amaura",japanese:"アマルス"},descriptions:{korean:`1억 년 전부터 빙하로
뒤덮여 있던 몸의 일부에서
부활한 고대의 포켓몬이다.`,english:`This ancient Pokémon was restored
from part of its body that had been
frozen in ice for over 100 million years.`,japanese:`１億年前から　氷漬けに　なっていた
体の　一部から　復活した
古代の　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",height:13,weight:252},{id:699,names:{korean:"아마루르가",english:"Aurorus",japanese:"アマルルガ"},descriptions:{korean:`마이너스 150도의 냉기를
마름모꼴의 결정에서 내뿜어
적을 감싸 얼어붙게 한다.`,english:`The diamond-shaped crystals on its body
expel air as cold as -240 degrees Fahrenheit,
surrounding its enemies and encasing them in ice.`,japanese:`マイナス１５０度の　冷気を
ひし形の　結晶から　出して
敵を　包み　氷漬けにする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",height:27,weight:2250},{id:700,names:{korean:"님피아",english:"Sylveon",japanese:"ニンフィア"},descriptions:{korean:`리본 모양의 더듬이에서
마음을 온화하게 하는 파동을
보내 싸움을 그만두게 한다.`,english:`It sends a soothing aura from its
ribbonlike feelers to calm fights.`,japanese:`リボンのような　触覚から
気持ちを　和らげる　波動を　送りこみ
戦いを　やめさせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",height:10,weight:235},{id:701,names:{korean:"루차불",english:"Hawlucha",japanese:"ルチャブル"},descriptions:{korean:`체격은 작지만 괴력몬이나
하리뭉 등의 커다란 포켓몬과
막상막하로 싸우는 테크니션이다.`,english:`Although its body is small, its proficient
fighting skills enable it to keep up with
big bruisers like Machamp and Hariyama.`,japanese:`体格は　小柄だが　カイリキーや
ハリテヤマなど　大きな　ポケモンと
互角に　戦う　テクニシャン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",height:8,weight:215},{id:702,names:{korean:"데덴네",english:"Dedenne",japanese:"デデンネ"},descriptions:{korean:`수염이 안테나의 역할을 한다.
전파를 송수신해서 멀리 떨어진
동료와 서로 연락하는 것이다.`,english:`Its whiskers serve as antennas. By sending and
receiving electrical waves, it can communicate
with others over vast distances.`,japanese:`ヒゲが　アンテナの　役割。
電波を　送受信して　遠くの　仲間と
連絡を　取り合うのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",height:2,weight:22},{id:703,names:{korean:"멜리시",english:"Carbink",japanese:"メレシー"},descriptions:{korean:`지하 깊은 곳에 있는 고온, 고압의
환경에서 태어났다. 머리의
돌에서 에너지를 방출한다.`,english:`Born from the temperatures and pressures
deep underground, it fires beams from the
stone in its head.`,japanese:`地下深くの　高温　高圧な
環境で　生まれた。
頭の　石から　エネルギーを　放つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",height:3,weight:57},{id:704,names:{korean:"미끄메라",english:"Goomy",japanese:"ヌメラ"},descriptions:{korean:`가장 약한 드래곤포켓몬이다.
미끌미끌한 몸이 마르지 않도록
축축한 그늘에서 산다.`,english:`The weakest Dragon-type Pokémon,
it lives in damp, shady places, so its
body doesn’t dry out.`,japanese:`一番　弱い　ドラゴンポケモン。
ヌメヌメの　体が　乾かないよう
ジメジメした　日陰で　暮らす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",height:3,weight:28},{id:705,names:{korean:"미끄네일",english:"Sliggoo",japanese:"ヌメイル"},descriptions:{korean:`무엇이든 녹여버리는 점액을
분비해 적을 격퇴한다.
눈은 퇴화하여 보이지 않는다.`,english:`It drives away opponents by excreting a
sticky liquid that can dissolve anything.
Its eyes devolved, so it can’t see anything.`,japanese:`なんでも　溶かしてしまう　粘液を
分泌して　敵を　撃退する。
目玉は　退化して　見えていない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",height:8,weight:175},{id:706,names:{korean:"미끄래곤",english:"Goodra",japanese:"ヌメルゴン"},descriptions:{korean:`사람을 잘 따르는 드래곤포켓몬이다.
좋아하는 트레이너에게 달려들어
미끈미끈한 점액투성이로 만들어 버린다.`,english:`This very friendly Dragon-type Pokémon
will hug its beloved Trainer, leaving
that Trainer covered in sticky slime.`,japanese:`人懐っこい　ドラゴンポケモン。
大好きな　トレーナーに　抱き着いて
粘液で　ヌルヌルにしてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",height:20,weight:1505},{id:707,names:{korean:"클레피",english:"Klefki",japanese:"クレッフィ"},descriptions:{korean:`열쇠를 모으는 습성이 있다.
적에게 습격당하면 열쇠로
짤랑짤랑 소리를 내어 위협한다.`,english:`These key collectors threaten any attackers
by fiercely jingling their keys at them.`,japanese:`カギを　集める　習性。
敵に　襲われると　ジャラジャラと
カギを　打ち鳴らして　威嚇する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",height:2,weight:30},{id:708,names:{korean:"나목령",english:"Phantump",japanese:"ボクレー"},descriptions:{korean:`썩은 그루터기에 혼이
깃들어 포켓몬이 되었다.
사람이 가까이 가지 않는 숲에 산다.`,english:`These Pokémon are created when
spirits possess rotten tree stumps.
They prefer to live in abandoned forests.`,japanese:`腐った　切り株に　魂が　宿り
ポケモンに　なった。
人の　寄りつかない　森に　住む。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",height:4,weight:70},{id:709,names:{korean:"대로트",english:"Trevenant",japanese:"オーロット"},descriptions:{korean:`다른 나무들을 자유자재로 조종한다.
숲을 어지럽히는 인간은 죽을 때까지
숲에서 벗어나지 못하게 한다.`,english:`It can control trees at will. It will trap people
who harm the forest, so they can never leave.`,japanese:`ほかの　木々を　自在に　操る。
森を　荒らす　人間は　死ぬまで
森から　出られないようにするのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",height:15,weight:710},{id:710,names:{korean:"호바귀",english:"Pumpkaboo",japanese:"バケッチャ"},descriptions:{korean:`성불하지 못한 혼을
호박으로 된 몸속에 담고 있다.
해가 지면 활동하기 시작한다.`,english:`The pumpkin body is inhabited by a spirit
trapped in this world. As the sun sets,
it becomes restless and active.`,japanese:`成仏できない　魂を
カボチャの　体に　入れている。
日暮れと　ともに　動きはじめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",height:4,weight:50},{id:711,names:{korean:"펌킨인",english:"Gourgeist",japanese:"パンプジン"},descriptions:{korean:`초승달이 뜬 밤에 기분 나쁜 목소리로
노래를 부르며 마을 안을 헤맨다.
그 노래를 들으면 저주를 받는다.`,english:`Singing in eerie voices, they wander
town streets on the night of the new moon.
Anyone who hears their song is cursed.`,japanese:`新月の　夜に　不気味な　声で
歌いながら　街中を　さまよう。
その歌を　聞くと　のろわれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",height:9,weight:125},{id:712,names:{korean:"꽁어름",english:"Bergmite",japanese:"カチコール"},descriptions:{korean:`몸을 둘러싼 얼음이 적의
공격을 막는다. 깨져도
냉기로 재빨리 얼음을 얼린다.`,english:`It blocks opponents’ attacks with the
ice that shields its body. It uses cold air
to repair any cracks with new ice.`,japanese:`体を　覆う　氷が
敵の　攻撃を　防ぐ。割られても
冷気で　すぐに　氷を　張る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",height:10,weight:995},{id:713,names:{korean:"크레베이스",english:"Avalugg",japanese:"クレベース"},descriptions:{korean:`얼어붙은 몸은 강철처럼
단단하다. 앞을 가로막는 것을
커다란 몸으로 파괴하며 이동한다.`,english:`Its ice-covered body is as hard as steel.
Its cumbersome frame crushes anything that
stands in its way.`,japanese:`凍りついた　体は　鋼鉄のように
硬い。立ちふさがる　ものを
巨体で　押しつぶし　移動する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",height:20,weight:5050},{id:714,names:{korean:"음뱃",english:"Noibat",japanese:"オンバット"},descriptions:{korean:`캄캄한 동굴에서 산다.
20만Hz의 초음파를
커다란 귀에서 발사한다.`,english:`They live in pitch-black caves. Their enormous ears
can emit ultrasonic waves of 200,000 hertz.`,japanese:`真っ暗な　洞窟で　暮らす。
２０万ヘルツの　超音波を
大きな　耳から　発射する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",height:5,weight:80},{id:715,names:{korean:"음번",english:"Noivern",japanese:"オンバーン"},descriptions:{korean:`달빛조차 없는 어둠 속을 날며
방심하고 있는 사냥감을 덮친다.
어둠 속의 싸움에서는 무적이다.`,english:`They fly around on moonless nights
and attack careless prey. Nothing can
beat them in a battle in the dark.`,japanese:`月明かりすら　ない　闇夜を　飛び
油断している　獲物を　襲う。
暗闇の　戦いでは　無敵だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",height:15,weight:850},{id:716,names:{korean:"제르네아스",english:"Xerneas",japanese:"ゼルネアス"},descriptions:{korean:`영원한 생명을 나누어 준다고 한다.
수목의 모습으로 1000년 동안
잠들고 부활한다.`,english:`Legends say it can share eternal life.
It slept for a thousand years in the form
of a tree before its revival.`,japanese:`永遠の　命を　分け与えると
言われている。樹木の　姿で
１０００年　眠り　復活する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",height:30,weight:2150},{id:717,names:{korean:"이벨타르",english:"Yveltal",japanese:"イベルタル"},descriptions:{korean:`날개와 꼬리를 펼치고 빨갛게
빛날 때 살아 있는 생명을
빨아들이는 전설의 포켓몬.`,english:`When this legendary Pokémon’s wings and
tail feathers spread wide and glow red,
it absorbs the life force of living creatures.`,japanese:`翼と　尾羽を　広げて　赤く　輝くとき
生き物の　命を　吸い取る
伝説の　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",height:58,weight:2030},{id:718,names:{korean:"지가르데",english:"Zygarde",japanese:"ジガルデ"},descriptions:{korean:`칼로스지방의 생태계가
무너지면 모습을 나타내어
숨겨진 힘을 발휘한다고 한다.`,english:`When the Kalos region’s ecosystem falls into
disarray, it appears and reveals its secret power.`,japanese:`カロス地方の　生態系が　崩れると
姿を　現して
秘めた　力を　発揮するらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",height:50,weight:3050},{id:719,names:{korean:"디안시",english:"Diancie",japanese:"ディアンシー"},descriptions:{korean:`멜리시의 돌연변이다.
분홍빛으로 빛나는 몸은
세계에서 가장 아름답다고 일컬어진다.`,english:`A sudden transformation of Carbink,
its pink, glimmering body is said to be
the loveliest sight in the whole world.`,japanese:`メレシーの　突然変異。
ピンク色に　輝く　体は
世界一　美しいと　言われる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",height:7,weight:88},{id:720,names:{korean:"후파",english:"Hoopa",japanese:"フーパ"},descriptions:{korean:`공간을 뒤트는 링으로
모든 것을 멀리 떨어진 곳으로
날려버리고 마는 트러블메이커다.`,english:`This troublemaker sends anything
and everything to faraway places
using its loop, which can warp space.`,japanese:`空間を　ゆがめる　リングで
あらゆる　ものを　離れた　場所へ
飛ばしてしまう　トラブルメーカー。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",height:5,weight:90},{id:721,names:{korean:"볼케니온",english:"Volcanion",japanese:"ボルケニオン"},descriptions:{korean:`수증기를 뿜어내어 자신의
모습을 짙은 안개 속에 숨긴다. 사람이
오지 않는 산에 산다고 한다.`,english:`It lets out billows of steam and disappears into
the dense fog. It’s said to live in mountains
where humans do not tread.`,japanese:`水蒸気を　噴き出して　自分の　姿を
濃霧で　隠す。人の　立ち入らない
山に　住むという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",height:17,weight:1950},{id:722,names:{korean:"나몰빼미",english:"Rowlet",japanese:"モクロー"},descriptions:{korean:`경계심이 강하다. 낮에는
광합성으로 힘을 비축하고
밤이 되면 활동을 개시한다.`,english:`This wary Pokémon uses photosynthesis to
store up energy during the day, while becoming
active at night.`,japanese:`警戒心が　強い。　昼は
光合成で　力を　溜めて
夜になったら　活動開始。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",height:3,weight:15},{id:723,names:{korean:"빼미스로우",english:"Dartrix",japanese:"フクスロー"},descriptions:{korean:`젠체하고 틈만 나면 날개의
손질을 한다. 깃털의 얼룩이
신경 쓰여 싸우지 못할 때도 있다.`,english:`A bit of a dandy, it spends its free time
preening its wings. Its preoccupation with any
dirt on its plumage can leave it unable to battle.`,japanese:`気取り屋で　暇が　あれば　翼の
手入れ。　羽毛の　汚れが　気に
なりすぎて　戦えないことも。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",height:7,weight:160},{id:724,names:{korean:"모크나이퍼",english:"Decidueye",japanese:"ジュナイパー"},descriptions:{korean:`날개에 숨겨진 살깃을 시위에
메겨서 날린다. 100m 앞의
작은 돌도 관통하는 정밀함이다.`,english:`It fires arrow quills from its wings with such
precision, they can pierce a pebble at distances
over a hundred yards.`,japanese:`翼に　仕込まれた　矢羽を
番えて放つ。　１００メートル先の
小石も　貫く　精度。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",height:16,weight:366},{id:725,names:{korean:"냐오불",english:"Litten",japanese:"ニャビー"},descriptions:{korean:`혀로 털을 정리하면서 배에 쌓인
빠진 털을 태워서 불을 뿜는다.
털을 뱉어내는 방법에 따라 불꽃도 변한다.`,english:`While grooming itself, it builds up fur inside its
stomach. It sets the fur alight and spews fiery
attacks, which change based on how it coughs.`,japanese:`毛づくろいで　お腹に　溜まった
抜け毛を　燃やして　火を　吹く。
毛の　吐きかたで　炎も　変化。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",height:4,weight:43},{id:726,names:{korean:"냐오히트",english:"Torracat",japanese:"ニャヒート"},descriptions:{korean:`목 주변에 불꽃의 방울이 있다.
불꽃을 뿜어낼 때
딸랑딸랑 높은 소리가 난다.`,english:`At its throat, it bears a bell of fire. The bell rings
brightly whenever this Pokémon spits fire.`,japanese:`首の　付け根に　炎の　鈴が
ある。　炎が　噴きだすとき
リンリンと　高い音が　鳴る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",height:7,weight:250},{id:727,names:{korean:"어흥염",english:"Incineroar",japanese:"ガオガエン"},descriptions:{korean:`강렬한 펀치와 킥을
가한 후 배꼽 부근에서
불꽃을 뿜어내 마무리한다.`,english:`This Pokémon has a violent, selfish disposition.
If it’s not in the mood to listen, it will ignore its
Trainer’s orders with complete nonchalance.`,japanese:`粗暴で　身勝手な　性格。
気分が　乗らなければ　トレーナーの
命令も　平気で　無視するぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",height:18,weight:830},{id:728,names:{korean:"누리공",english:"Popplio",japanese:"アシマリ"},descriptions:{korean:`노력하는 성질로 유명하다.
체액을 코로 부풀린
풍선을 적에게 부딪힌다.`,english:`This Pokémon snorts body fluids from its nose,
blowing balloons to smash into its foes.
It’s famous for being a hard worker.`,japanese:`頑張り屋な　性質で　有名。
体液を　鼻で　膨らませた
バルーンを　敵に　ぶつける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",height:4,weight:75},{id:729,names:{korean:"키요공",english:"Brionne",japanese:"オシャマリ"},descriptions:{korean:`댄스가 특기이며 춤추면서
계속해서 물의 풍선을
만들어 적에게 부딪힌다.`,english:`A skillful dancer, it creates a sequence of water
balloons as it dances, and briskly bombards
its enemies.`,japanese:`ダンスが　得意で　踊りながら
次々に　水の　バルーンを
作りだし　敵に　ぶつけるぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",height:6,weight:175},{id:730,names:{korean:"누리레느",english:"Primarina",japanese:"アシレーヌ"},descriptions:{korean:`물의 풍선을 노래로 컨트롤한다.
그 멜로디는 동료에게 배우며
대대로 무리에 전해진다.`,english:`It controls its water balloons with song. The
melody is learned from others of its kind and is
passed down from one generation to the next.`,japanese:`水のバルーンを　歌で　操る。
そのメロディは　仲間に　学び
代々　群れに　引き継がれていく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",height:18,weight:440},{id:731,names:{korean:"콕코구리",english:"Pikipek",japanese:"ツツケラ"},descriptions:{korean:`1초당 16번 나무를 쪼아서
구멍을 낸다. 낸 구멍은 먹이를
넣어두는 저장고나 둥지로 쓴다.`,english:`It can peck at a rate of 16 times a second to
drill holes in trees. It uses the holes for food
storage and for nesting.`,japanese:`秒間１６連打　で　木を　突き
穴を　ほる。　開けた　穴は　餌を
仕舞う　貯蔵庫や　巣に　使う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",height:3,weight:12},{id:732,names:{korean:"크라파",english:"Trumbeak",japanese:"ケララッパ"},descriptions:{korean:`먹은 나무열매 씨앗을 부리에
저장한다. 적이나 먹이와
마주치면 한 번에 발사한다.`,english:`It eats berries and stores their seeds in its
beak. When it encounters enemies or prey,
it fires off all the seeds in a burst.`,japanese:`クチバシに　喰った　きのみの　タネを
溜め込む。　敵や　獲物に
出会うと　一気に　発射する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",height:6,weight:148},{id:733,names:{korean:"왕큰부리",english:"Toucannon",japanese:"ドデカバシ"},descriptions:{korean:`부리를 발열시켜 싸운다.
그 온도는 100도를 훨씬 넘어
쪼이기만 해도 큰 화상을 입는다.`,english:`When it battles, its beak heats up. The
temperature can easily exceed 212 degrees
Fahrenheit, causing severe burns when it hits.`,japanese:`クチバシを　発熱させ　戦う。
その温度は　１００度を　優に　超え
突かれるだけで　大火傷。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",height:11,weight:260},{id:734,names:{korean:"영구스",english:"Yungoos",japanese:"ヤングース"},descriptions:{korean:`무엇이든 먹지만 신선하고
살아 있는 것을 좋아해서
먹이를 찾아 길을 누비고 다닌다.`,english:`With its sharp fangs, it will bite anything.
It did not originally live in Alola but was
imported from another region.`,japanese:`鋭いキバで　なんにでも　かみつく。
元々　アローラには　棲んでおらず
他の地方から　連れてこられた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",height:4,weight:60},{id:735,names:{korean:"형사구스",english:"Gumshoos",japanese:"デカグース"},descriptions:{korean:`먹이의 흔적을 찾으면
끈질기게 그 자리에 잠복하지만
날이 저물면 꾸벅꾸벅 존다.`,english:`When it finds a trace of its prey, it patiently
stakes out the location...but it’s always snoozing
by nightfall.`,japanese:`獲物の　痕跡を　みつけると
粘り強く　その場に　張り込むが
日暮れには　うつらうつら　している。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",height:7,weight:142},{id:736,names:{korean:"턱지충이",english:"Grubbin",japanese:"アゴジムシ"},descriptions:{korean:`튼튼한 턱으로 나무를
갉아서 수액을 마신다.
평소에는 땅속에서 산다.`,english:`Its strong jaw enables it to scrape trees and
slurp out the sap. It normally lives underground.`,japanese:`丈夫な　顎で　樹木を
削り　樹液を　すする。
普段は　地面の　中で　暮らす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",height:4,weight:44},{id:737,names:{korean:"전지충이",english:"Charjabug",japanese:"デンヂムシ"},descriptions:{korean:`체내에 축전 기능을 갖추고 있다.
캠핑할 때 1마리 있으면
아주 고마운 포켓몬이다.`,english:`Its body is capable of storing electricity. On
camping trips, people are grateful to have
one around.`,japanese:`体内に　蓄電機能を　持つ。
キャンプの　ときなど　１匹　いると
とても　ありがたい　ポケモンだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",height:5,weight:105},{id:738,names:{korean:"투구뿌논",english:"Vikavolt",japanese:"クワガノン"},descriptions:{korean:`복부에 발전 기관을 갖고 있다.
큰 턱에 에너지를 모아
굉장한 전격을 쏜다.`,english:`It zips around, on sharp lookout for an opening.
It concentrates electrical energy within its large
jaws and uses it to zap its enemies.`,japanese:`飛び回って　隙を　うかがう。
電気エネルギーを　大きなアゴで
収束させ　敵に　発射。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",height:15,weight:450},{id:739,names:{korean:"오기지게",english:"Crabrawler",japanese:"マケンカニ"},descriptions:{korean:`가위로 약점을 가드 하면서
틈을 노려 펀치를 날린다.
진 쪽은 거품을 물고 다운된다.`,english:`While guarding its weak points with its pincers,
it looks for an opening and unleashes punches.
When it loses, it foams at the mouth and faints.`,japanese:`ハサミで　弱点を　ガードしつつ
隙を　うかがい　パンチを　放つ。
負けたほうは　泡を　ふいて　ダウン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",height:6,weight:70},{id:740,names:{korean:"모단단게",english:"Crabominable",japanese:"ケケンカニ"},descriptions:{korean:`톱을 노리려다 설산에서
헤매게 되고 추위를 견디던 중에
털이 생겨서 진화했다.`,english:`It aimed for the top but got lost and ended up
on a snowy mountain. Being forced to endure
the cold, this Pokémon evolved and grew fur.`,japanese:`トップを　目指すはずが　雪山に
迷い登り　寒さに　耐えるうちに
毛が　生えてきて　進化していた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",height:17,weight:1800},{id:741,names:{korean:"춤추새",english:"Oricorio",japanese:"オドリドリ"},descriptions:{korean:`날개를 부딪쳐서 발화시킨다.
화려한 스텝을 밟으면서
격렬한 불꽃을 퍼붓는다.`,english:`It beats its wings together to create fire.
As it moves in the steps of its beautiful dance,
it bathes opponents in intense flames.`,japanese:`羽を　打ち合わせて　発火。
華麗な　ステップを　踏みながら
激しい　炎を　浴びせかけるぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",height:6,weight:34},{id:742,names:{korean:"에블리",english:"Cutiefly",japanese:"アブリー"},descriptions:{korean:`꽃의 꿀이나 꽃가루가 먹이다.
오라를 느끼는 힘을 지니고 있어
필 것 같은 꽃을 구별한다.`,english:`It feeds on the nectar and pollen of flowers.
Because it’s able to sense auras, it can identify
which flowers are about to bloom.`,japanese:`花のミツや　花粉が　餌。
オーラを　感じる　力を　持ち
咲きそうな　花を　見分けている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",height:1,weight:2},{id:743,names:{korean:"에리본",english:"Ribombee",japanese:"アブリボン"},descriptions:{korean:`꽃가루를 뭉쳐서 경단을 만든다.
식용부터 전투용까지
많은 종류가 있다.`,english:`It rolls up pollen into puffs. It makes many
different varieties, some used as food and
others used in battle.`,japanese:`花粉を　丸め　団子を　つくる。
食用　から　戦闘用　まで
たくさんの　種類が　あるよ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",height:2,weight:5},{id:744,names:{korean:"암멍이",english:"Rockruff",japanese:"イワンコ"},descriptions:{korean:`잘 따르기 때문에 초보자에게
추천하는 포켓몬으로 불리지만
크면 기질이 거칠어진다.`,english:`It’s considered to be a good Pokémon for
beginners because of its friendliness, but its
disposition grows rougher as it grows up.`,japanese:`よく　なつくので　初心者に
お勧めのポケモンと　いわれるが
育つと　気性は　荒くなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",height:5,weight:92},{id:745,names:{korean:"루가루암",english:"Lycanroc",japanese:"ルガルガン"},descriptions:{korean:`재빨리 움직여 적을 어지럽힌다.
발톱이나 이빨 외에 갈기의
뾰족한 바위도 무기의 하나다.`,english:`Its quick movements confuse its enemies.
Well equipped with claws and fangs, it also uses
the sharp rocks in its mane as weapons.`,japanese:`素早く　動き　敵を　惑わす。
ツメや　キバの　ほか　タテガミの
とがった　岩も　武器の　ひとつ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",height:8,weight:250},{id:746,names:{korean:"약어리",english:"Wishiwashi",japanese:"ヨワシ"},descriptions:{korean:`위험해지면 눈을 글썽이면서
반짝인다. 그 빛에 모이는
동료와 함께 적에 대항한다.`,english:`When it’s in trouble, its eyes moisten and begin
to shine. The shining light attracts its comrades,
and they stand together against their enemies.`,japanese:`ピンチになると　目が　潤みだし
輝く。　その光に　群れる
仲間と　敵に　立ち向かうのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",height:2,weight:3},{id:747,names:{korean:"시마사리",english:"Mareanie",japanese:"ヒドイデ"},descriptions:{korean:`머리에 있는 독 가시로 먹이를
찌른다. 약해졌을 때 10개의
촉수로 잡아서 마무리한다.`,english:`It plunges the poison spike on its head into its
prey. When the prey has weakened, Mareanie
deals the finishing blow with its 10 tentacles.`,japanese:`頭に　ある　毒トゲで　獲物を
ズブリ。　弱ったところを　１０本の
触手で　捕らえ　止めを　刺す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",height:4,weight:80},{id:748,names:{korean:"더시마사리",english:"Toxapex",japanese:"ドヒドイデ"},descriptions:{korean:`12개의 다리로 해저를 기어 다닌다.
더시마사리가 기어 다닌 자리에는
코산호의 찌꺼기가 흩어져있다.`,english:`Toxapex crawls along the ocean floor on its
12 legs. It leaves a trail of Corsola bits
scattered in its wake.`,japanese:`１２本の足で　海底を　はう。
ドヒドイデの　はったあとには
サニーゴのカスが　散らばっている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",height:7,weight:145},{id:749,names:{korean:"머드나기",english:"Mudbray",japanese:"ドロバンコ"},descriptions:{korean:`다리에 달라붙은 진흙이
다리를 튼튼히 받들어
힘차게 달려나갈 수 있다.`,english:`The mud stuck to Mudbray’s hooves enhances
its grip and its powerful running gait.`,japanese:`足に　まとわりついた　泥が
グリップに　なり　力強い
走りを　実現しているのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",height:10,weight:1100},{id:750,names:{korean:"만마드",english:"Mudsdale",japanese:"バンバドロ"},descriptions:{korean:`입에서 뱉어내는 진흙이 굳으면
비바람에도 끄떡없어 옛날
집의 벽에는 자주 발려 있었다.`,english:`It spits a mud that provides resistance to both
wind and rain, so the walls of old houses were
often coated with it.`,japanese:`口から　吐く　泥は　固まると
雨風にも　強いので　昔の
家の　壁には　よく塗られている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",height:25,weight:9200},{id:751,names:{korean:"물거미",english:"Dewpider",japanese:"シズクモ"},descriptions:{korean:`먹이를 찾아서 지상으로 올라온다.
수포를 뒤집어쓴 것은 호흡과
부드러운 머리를 보호하기 위해서다.`,english:`It crawls onto the land in search of food.
Its water bubble allows it to breathe and
protects its soft head.`,japanese:`餌を　求め　地上に　あがる。
水泡を　被るのは　呼吸と
柔らかい　頭を　守るため。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",height:3,weight:40},{id:752,names:{korean:"깨비물거미",english:"Araquanid",japanese:"オニシズクモ"},descriptions:{korean:`두부의 수포로 박치기한다.
작은 포켓몬이라면 그대로
수포에 싸여 익사한다.`,english:`It delivers headbutts with the water bubble
on its head. Small Pokémon get sucked into
the bubble, where they drown.`,japanese:`頭部の　水泡で　ヘッドバット。
小さなポケモンで　あれば　そのまま
水泡に　取り込まれ　溺れ死ぬ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",height:18,weight:820},{id:753,names:{korean:"짜랑랑",english:"Fomantis",japanese:"カリキリ"},descriptions:{korean:`낮에는 빛을 쐬어 자고
밤이 되면 더욱 안전한
잠자리를 찾아 걸어 다닌다.`,english:`During the day, it sleeps and soaks up light.
When night falls, it walks around looking
for a safer place to sleep.`,japanese:`昼間は　光を浴びて　眠り
夜に　なると　より　安全な
寝床を　探し　歩き出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",height:3,weight:15},{id:754,names:{korean:"라란티스",english:"Lurantis",japanese:"ラランテス"},descriptions:{korean:`선명한 몸의 색을 유지하기 위해서
굉장히 손이 가지만 그것을
취미로 하는 유별난 사람도 있다.`,english:`It requires a lot of effort to maintain Lurantis’s
vivid coloring, but some collectors enjoy this
work and treat it as their hobby.`,japanese:`鮮やかな　体色を　保つには
非常に　手間が　かかるが　それを
趣味にする　好事家も　いるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",height:9,weight:185},{id:755,names:{korean:"자마슈",english:"Morelull",japanese:"ネマシュ"},descriptions:{korean:`깜빡이면서 빛나는 포자를
주변에 뿌린다. 그 빛을
본 자는 깊은 잠에 빠진다.`,english:`It scatters spores that flicker and glow. Anyone
seeing these lights falls into a deep slumber.`,japanese:`点滅しながら　発光する　胞子を
あたりに　ばら撒く。　その光を
見た者は　深い眠りに　おちる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",height:2,weight:15},{id:756,names:{korean:"마셰이드",english:"Shiinotic",japanese:"マシェード"},descriptions:{korean:`한밤중에 마셰이드가 사는 숲에
가는 것은 위험하다. 이상한빛에
유인되어 다시는 돌아올 수 없게 된다.`,english:`Forests where Shiinotic live are treacherous to
enter at night. People confused by its strange
lights can never find their way home again.`,japanese:`夜中に　マシェードの棲む　森に
いくのは　危険。　怪しい光に
惑わされ　二度と　帰れなくなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",height:10,weight:115},{id:757,names:{korean:"야도뇽",english:"Salandit",japanese:"ヤトウモリ"},descriptions:{korean:`체액을 태워 독가스를 피운다.
가스를 들이마신 적이
휘청거리면 덮친다.`,english:`It burns its bodily fluids to create a poisonous
gas. When its enemies become disoriented from
inhaling the gas, it attacks them.`,japanese:`体液を　燃やし　毒ガスを　たく。
ガスを　吸った　敵が　フラフラに
なったあと　襲いかかるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",height:6,weight:48},{id:758,names:{korean:"염뉴트",english:"Salazzle",japanese:"エンニュート"},descriptions:{korean:`어찌 된 영문인지 암컷만 발견되고 있다.
야도뇽의 수컷을 거느리며
역하렘을 만들어서 산다.`,english:`For some reason, only females have been found.
It creates a reverse harem of male Salandit that
it lives with.`,japanese:`なぜか　♀しか　見つかっていない。
ヤトウモリの♂を　引き連れて
逆ハーレムを　作って　暮らす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",height:12,weight:222},{id:759,names:{korean:"포곰곰",english:"Stufful",japanese:"ヌイコグマ"},descriptions:{korean:`사랑스러운 외모지만 화가 나서
버둥거리는 손발에 부딪히면
프로레슬러라도 날아가 버린다.`,english:`Despite its adorable appearance, when it gets
angry and flails about, its arms and legs could
knock a pro wrestler sprawling.`,japanese:`愛くるしい　見た目だが　怒って
ジタバタする　手足に　ぶつかると
プロレスラーでも　吹っ飛ばされる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",height:5,weight:68},{id:760,names:{korean:"이븐곰",english:"Bewear",japanese:"キテルグマ"},descriptions:{korean:`압도적인 근력을 가지는
아주 위험한 포켓몬이다.
서식지는 기본 출입금지다.`,english:`This immensely dangerous Pokémon
possesses overwhelming physical strength.
Its habitat is generally off-limits.`,japanese:`圧倒的な　筋力を　持つ
非常に　危険な　ポケモン。
生息地は　基本　立ち入り禁止。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",height:21,weight:1350},{id:761,names:{korean:"달콤아",english:"Bounsweet",japanese:"アマカジ"},descriptions:{korean:`맛있는 냄새가 몸에서
풍긴다. 냄새를 맡고 다가온
왕큰부리에게 통째로 먹힌다.`,english:`A delectable aroma pours from its body.
They are often swallowed whole by Toucannon
lured by that wafting deliciousness.`,japanese:`美味しそうな　香りが　体から
漏れ出している。　匂いに　誘われた
ドデカバシに　丸呑みに　される。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",height:3,weight:32},{id:762,names:{korean:"달무리나",english:"Steenee",japanese:"アママイコ"},descriptions:{korean:`몸을 지키기 위해 꼭지가 발달했다.
상당히 단단해서 새포켓몬이
쪼아도 전혀 문제없다.`,english:`The sepals on its head developed to protect its
body. These are quite hard, so even if pecked
by bird Pokémon, this Pokémon is totally fine.`,japanese:`身を　守るため　ヘタが　発達。
かなりの　硬さで　とりポケモンに
突かれても　全然　平気だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",height:7,weight:82},{id:763,names:{korean:"달코퀸",english:"Tsareena",japanese:"アマージョ"},descriptions:{korean:`다리를 활용한 발차기가 특기다.
쓰러뜨린 상대를 걷어차며
큰 웃음으로 승리를 어필한다.`,english:`Its long, striking legs aren’t just for show but to
be used to kick with skill. In victory, it shows off
by kicking the defeated, laughing boisterously.`,japanese:`脚を　活かした　蹴りが　得意。
倒した　相手を　足蹴に　して
高笑いで　勝利を　アピール。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",height:12,weight:214},{id:764,names:{korean:"큐아링",english:"Comfey",japanese:"キュワワー"},descriptions:{korean:`영양 만점의 줄기에 꽃을
붙인다. 꽃이 활성화해서
향기로운 아로마가 풍긴다.`,english:`It attaches flowers to its highly nutritious vine.
This revitalizes the flowers, and they give off
an aromatic scent.`,japanese:`栄養満点の　ツルに　花を
くっつける。　花は　活性化し
香しい　アロマが　漂いだす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",height:1,weight:3},{id:765,names:{korean:"하랑우탄",english:"Oranguru",japanese:"ヤレユータン"},descriptions:{korean:`굉장히 똑똑한 것으로 유명하다.
미숙한 트레이너를 깔보기 때문에
베테랑에게 맞는 포켓몬이다.`,english:`Known for its extreme intelligence, this Pokémon
will look down on inexperienced Trainers, so it’s
best suited to veteran Trainers.`,japanese:`非常に　賢いことで　知られる。
未熟な　トレーナーは　見下す
ベテラン向けの　ポケモンだぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",height:15,weight:760},{id:766,names:{korean:"내던숭이",english:"Passimian",japanese:"ナゲツケサル"},descriptions:{korean:`20마리 전후의 그룹을 만든다.
그 결속은 상당히 강하며
절대 동료를 버리지 않는다.`,english:`They form groups of roughly 20 individuals.
Their mutual bond is remarkable—they will never
let down a comrade.`,japanese:`２０匹前後の　グループを　つくる。
その結束は　非常に　固く
絶対　仲間を　見捨てない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",height:20,weight:828},{id:767,names:{korean:"꼬시레",english:"Wimpod",japanese:"コソクムシ"},descriptions:{korean:`겁이 많아서 많은 다리를
버둥거리며 필사적으로 도망친다.
도망간 자리는 반짝반짝 깨끗하다.`,english:`This Pokémon is a coward. As it desperately
dashes off, the flailing of its many legs leaves a
sparkling clean path in its wake.`,japanese:`臆病で　たくさんの　足を
ばたつかせ　必死に　逃げまわる。
逃げたあとは　ピカピカ　綺麗。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",height:5,weight:120},{id:768,names:{korean:"갑주무사",english:"Golisopod",japanese:"グソクムシャ"},descriptions:{korean:`날카롭고 거대한 발톱으로
공격한다. 공기나 해수마저
두 동강 낼 정도의 실력이다.`,english:`With a flashing slash of its giant sharp claws,
it cleaves seawater—or even air—right in two.`,japanese:`鋭く　巨大な　ツメで
一閃。　空気や　海水さえ
一刀両断の　腕前。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",height:20,weight:1080},{id:769,names:{korean:"모래꿍",english:"Sandygast",japanese:"スナバァ"},descriptions:{korean:`객사한 자의 원통함이
아이가 만든 모래언덕에
깃들어 탄생했다.`,english:`Born from a sand mound playfully built by a
child, this Pokémon embodies the grudges of
the departed.`,japanese:`行き倒れた者の　怨念が
子どもが　つくった　砂山に
取りつき　誕生　したのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",height:5,weight:700},{id:770,names:{korean:"모래성이당",english:"Palossand",japanese:"シロデスナ"},descriptions:{korean:`사람을 조종하여 모래언덕을
모래성으로까지 진화시켰다.
저주의 힘도 깊어졌다.`,english:`Possessed people controlled by this Pokémon
transformed its sand mound into a castle. As it
evolved, its power to curse grew ever stronger.`,japanese:`人を　操り　砂の山を
砂の城まで　進化　させた。
呪いの　力も　あがっている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",height:13,weight:2500},{id:771,names:{korean:"해무기",english:"Pyukumuku",japanese:"ナマコブシ"},descriptions:{korean:`해변 등 얕은 바다에 산다.
몸에서 체내기관을 꺼내서
먹이를 잡거나 적과 싸운다.`,english:`It’s covered in a slime that keeps its skin moist,
allowing it to stay on land for days without
drying up.`,japanese:`ビーチなど　浅い　海に　棲む。
身体から　体内器官を　だして
餌を　捕ったり　敵と　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",height:3,weight:12},{id:772,names:{korean:"타입:널",english:"Type: Null",japanese:"タイプ：ヌル"},descriptions:{korean:`무거운 제어마스크를 쓰고 있어
본래의 능력을 발휘할 수 없다.
특별한 힘을 숨기고 있다.`,english:`The heavy control mask it wears suppresses its
intrinsic capabilities. This Pokémon has some
hidden special power.`,japanese:`重い　制御マスクを　つけており
本来の　能力を　だせない。
特別な　力を　秘めている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",height:19,weight:1205},{id:773,names:{korean:"실버디",english:"Silvally",japanese:"シルヴァディ"},descriptions:{korean:`파트너와의 신뢰로 각성한다.
자유자재로 타입을 바꾸는
능력을 발휘하며 싸운다.`,english:`Its trust in its partner is what awakens it.
This Pokémon is capable of changing its type,
a flexibility that is well displayed in battle.`,japanese:`パートナーとの　信頼で　覚醒。
自在に　タイプを　チェンジする
能力を　発揮し　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",height:23,weight:1005},{id:774,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",height:3,weight:400},{id:775,names:{korean:"자말라",english:"Komala",japanese:"ネッコアラ"},descriptions:{korean:`잔 채 태어나고 잔 채 죽는다.
모든 행동은 꾸고 있는
꿈에 의한 잠버릇인 것 같다.`,english:`It is born asleep, and it dies asleep. All its
movements are apparently no more than the
results of it tossing and turning in its dreams.`,japanese:`寝たまま　生まれ　寝たまま　死ぬ。
すべての　行動は　みている
夢に　よる　寝相　らしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",height:4,weight:199},{id:776,names:{korean:"폭거북스",english:"Turtonator",japanese:"バクガメス"},descriptions:{korean:`등의 등껍질은 폭발물이다.
실수로 때리면 대폭발한다.
배의 구멍이 약점이다.`,english:`The shell on its back is chemically unstable
and explodes violently if struck. The hole in its
stomach is its weak point.`,japanese:`背中の　甲羅は　爆発物。
うっかり　殴れば　大爆発。
お腹の　穴が　弱点。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",height:20,weight:2120},{id:777,names:{korean:"토게데마루",english:"Togedemaru",japanese:"トゲデマル"},descriptions:{korean:`등의 가시 털은 평소에
누워 있다가 흥분하면 곤두서
덮쳐오는 적을 찌른다.`,english:`The spiny fur on its back is normally at rest.
When this Pokémon becomes agitated, its fur
stands on end and stabs into its attackers.`,japanese:`背中の　ハリの　毛は　普段は
寝ている。　興奮すると　逆立ち
襲ってくる　敵を　突き刺すのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",height:3,weight:33},{id:778,names:{korean:"따라큐",english:"Mimikyu",japanese:"ミミッキュ"},descriptions:{korean:`정체불명. 누더기 속을 본
어떤 학자는 공포에서
헤어나오지 못하고 쇼크사했다.`,english:`Its actual appearance is unknown. A scholar
who saw what was under its rag was
overwhelmed by terror and died from the shock.`,japanese:`正体不明。　ボロ布の
中身を　みた　とある　学者は
恐怖の　あまり　ショック死した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",height:2,weight:7},{id:779,names:{korean:"치갈기",english:"Bruxish",japanese:"ハギギシリ"},descriptions:{korean:`머리의 돌기에서 사이코 파워를
발산할 때 아주 귀에 거슬리는
이가는 소리가 주변에 울려 퍼진다.`,english:`When it unleashes its psychic power from the
protuberance on its head, the grating sound
of grinding teeth echoes through the area.`,japanese:`頭の　突起から　サイコパワーを
放つとき　とても　耳障りな
歯ぎしりの　音が　あたりに　響く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",height:9,weight:190},{id:780,names:{korean:"할비롱",english:"Drampa",japanese:"ジジーロン"},descriptions:{korean:`마음이 따뜻하고 착하다. 하지만
한번 화에 사로잡히면 거친
숨결로 주변을 파괴해 버린다.`,english:`It has a compassionate personality, but if it is
angered, it completely destroys its surroundings
with its intense breath.`,japanese:`心優しい　性質。　だが
一度　怒りに　かられると　激しい
息吹で　あたりを　破壊　し尽くす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",height:30,weight:1850},{id:781,names:{korean:"타타륜",english:"Dhelmise",japanese:"ダダリン"},descriptions:{korean:`큰 닻을 빙빙 휘둘러
고래왕조차 일격에 KO 시킨다.
녹색의 해초가 본체다.`,english:`Swinging its massive anchor, it can KO Wailord
in a single blow. What appears to be green
seaweed is actually its body.`,japanese:`でかい　錨を　ブンブン　振り回し
ホエルオーさえ　一撃で　ＫＯ。
緑の　モズクが　本体だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",height:39,weight:2100},{id:782,names:{korean:"짜랑꼬",english:"Jangmo-o",japanese:"ジャラコ"},descriptions:{korean:`비늘을 때려 마음을 전달한다.
짜랑꼬가 사는 고산에서는
금속음이 메아리친다.`,english:`It expresses its feelings by smacking
its scales. Metallic sounds echo through
the tall mountains where Jangmo-o lives.`,japanese:`ウロコを　叩き　気持ちを　伝える。
ジャラコの　棲む　高山では
金属音が　木霊する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",height:6,weight:297},{id:783,names:{korean:"짜랑고우",english:"Hakamo-o",japanese:"ジャランゴ"},descriptions:{korean:`기합을 외치며 먹이에게
달려든다. 비늘의 펀치는
상대를 갈기갈기 찢는다.`,english:`It leaps at its prey with a courageous shout.
Its scaly punches tear its opponents to shreds.`,japanese:`雄叫びと　ともに　獲物に
飛びかかる。　ウロコの　パンチは
相手を　ズタズタに　引き裂くぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",height:12,weight:470},{id:784,names:{korean:"짜랑고우거",english:"Kommo-o",japanese:"ジャラランガ"},descriptions:{korean:`적을 보면 꼬리의 비늘을
짤랑짤랑 소리를 내며 위협한다.
약한 자는 허둥대며 도망간다.`,english:`When it spots enemies, it threatens them by
jingling the scales on its tail. Weak opponents
will crack and flee in panic.`,japanese:`敵を　見ると　尻尾の　ウロコを
ジャラジャラ　鳴らして　いかく。
弱い者は　あわてて　逃げ出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",height:16,weight:782},{id:785,names:{korean:"카푸꼬꼬꼭",english:"Tapu Koko",japanese:"カプ・コケコ"},descriptions:{korean:`호기심 왕성한 멜레멜레의
수호신이다. 번개 구름을 불러
우레를 몸에 비축한다.`,english:`This guardian deity of Melemele is brimming with
curiosity. It summons thunderclouds and stores
their lightning inside its body.`,japanese:`好奇心旺盛な　メレメレの
守り神。　雷雲を　呼び
雷を　身体に　溜め込む。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",height:18,weight:205},{id:786,names:{korean:"카푸나비나",english:"Tapu Lele",japanese:"カプ・テテフ"},descriptions:{korean:`천진난만하고 잔혹한 아칼라의
수호신이다. 향기로운
꽃향기가 에너지의 근원이다.`,english:`This guardian deity of Akala is guilelessly cruel.
The fragrant aroma of flowers is the source of
its energy.`,japanese:`無邪気で　残酷な　アーカラの
守り神。　花の　芳しい
香りが　エネルギーの　源。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",height:12,weight:186},{id:787,names:{korean:"카푸브루루",english:"Tapu Bulu",japanese:"カプ・ブルル"},descriptions:{korean:`큰 나무를 뽑아서 빙빙 휘두른다.
초목을 무성하게 만들어
그 에너지를 흡수한다.`,english:`It pulls large trees up by the roots and swings
them around. It causes vegetation to grow,
and then it absorbs energy from the growth.`,japanese:`大木を　引き抜き　ブンブン
振り回す。　草木を　茂らせて
そのエネルギーを　吸収する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",height:19,weight:455},{id:788,names:{korean:"카푸느지느",english:"Tapu Fini",japanese:"カプ・レヒレ"},descriptions:{korean:`짙은 안개로 적을 혼란시켜
자멸하게 만드는 무서움을 지녔다.
해류가 에너지의 근원이다.`,english:`The dense fog it creates brings the downfall
and destruction of its confused enemies.
Ocean currents are the source of its energy.`,japanese:`深い霧で　敵を　惑わせ
自滅させる　恐ろしさを　持つ。
海流が　エネルギーの　源。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",height:13,weight:212},{id:789,names:{korean:"코스모그",english:"Cosmog",japanese:"コスモッグ"},descriptions:{korean:`연약한 가스 상태의 몸이다.
대기의 먼지를 모으며
천천히 성장한다.`,english:`Its body is gaseous and frail. It slowly grows as
it collects dust from the atmosphere.`,japanese:`はかない　ガス状の　身体。
大気の　チリを　集めながら
ゆっくりと　成長していく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",height:2,weight:1},{id:790,names:{korean:"코스모움",english:"Cosmoem",japanese:"コスモウム"},descriptions:{korean:`죽은 것처럼 전혀 움직이지 않지만
만지면 어렴풋이 따뜻하다.
아주 옛날에는 달의 고치로 불렸다.`,english:`Motionless as if dead, its body is faintly warm to
the touch. In the distant past, it was called the
cocoon of the stars.`,japanese:`死んだように　まったく　動かないが
触れると　ほのかに　温かい。
大昔は　星の繭と　呼ばれた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",height:1,weight:9999},{id:791,names:{korean:"솔가레오",english:"Solgaleo",japanese:"ソルガレオ"},descriptions:{korean:`다른 세계에 산다고 전해진다.
온몸에서 격렬한 빛을 내뿜어
깜깜한 밤도 한낮처럼 비춘다.`,english:`It is said to live in another world. The intense
light it radiates from the surface of its body can
make the darkest of nights light up like midday.`,japanese:`別世界に　棲むと　いわれる。
全身から　激しい光を　放ち
闇夜も　真昼のように　照らすのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",height:34,weight:2300},{id:792,names:{korean:"루나아라",english:"Lunala",japanese:"ルナアーラ"},descriptions:{korean:`코스모그가 진화한 암컷이라고
전해진다. 제3의 눈이 떠오를 때
다른 세계로 날아간다.`,english:`It is said to be a female evolution of Cosmog.
When its third eye activates, away it flies to
another world.`,japanese:`コスモッグが　進化した　♀だと
いわれる。　第３の　眼が　浮かぶとき
別世界へと　飛び去っていく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",height:40,weight:1200},{id:793,names:{korean:"텅비드",english:"Nihilego",japanese:"ウツロイド"},descriptions:{korean:`수수께끼에 싸인 UB의 일종.
길을 가던 사람이 기생 당해
난폭해지는 모습이 목격되었다.`,english:`One of several mysterious Ultra Beasts. People
on the street report observing those infested
by it suddenly becoming violent.`,japanese:`謎に　包まれた　ＵＢの　一種。
街ゆく　人が　寄生され
暴れだす　姿が　目撃された。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",height:12,weight:555},{id:794,names:{korean:"매시붕",english:"Buzzwole",japanese:"マッシブーン"},descriptions:{korean:`다른 세계에서 나타난 UB이다.
스스로 몸을 보여주는 행동이
자랑인지 위협인지 알 수 없다.`,english:`This Ultra Beast appeared from another world.
It shows off its body, but whether that display
is a boast or a threat remains unclear.`,japanese:`別世界から　現れた　ＵＢ。
自らの　身体を　みせつけてくるが
自慢なのか　いかくなのか　不明。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",height:24,weight:3336},{id:795,names:{korean:"페로코체",english:"Pheromosa",japanese:"フェローチェ"},descriptions:{korean:`위험한 UB 중 1마리이다. 굉장한
속도로 대지를 질주하는
모습이 목격되었다.`,english:`One of the dangerous Ultra Beasts, it has been
spotted running across the land at
terrific speeds.`,japanese:`危険なＵＢの　一種。　凄まじい
速度で　大地を　疾走する
姿が　目撃　されている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",height:18,weight:250},{id:796,names:{korean:"전수목",english:"Xurkitree",japanese:"デンジュモク"},descriptions:{korean:`온몸에서 엄청난 전격을
내뿜는 광경이 목격되었다.
수수께끼의 생물 UB 중 하나다.`,english:`One of the mysterious life-forms known as Ultra
Beasts. Astonishing electric shocks emanate
from its entire body, according to witnesses.`,japanese:`全身から　凄まじい　電撃を
ほとばしらせる　光景を　目撃。
謎の　生物　ＵＢの　一種だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",height:38,weight:1e3},{id:797,names:{korean:"철화구야",english:"Celesteela",japanese:"テッカグヤ"},descriptions:{korean:`울트라홀에서 나타났다.
고속으로 하늘을 나는 모습이
목격된 울트라비스트다.`,english:`It appeared from the Ultra Wormhole. Witnesses
observed it flying across the sky at high speed.`,japanese:`ウルトラホールから　現れた。
高速で　空を　飛ぶ　姿が
目撃　された　ウルトラビースト。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",height:92,weight:9999},{id:798,names:{korean:"종이신도",english:"Kartana",japanese:"カミツルギ"},descriptions:{korean:`울트라홀에서 나타난 UB이다.
스스로 적을 덮치진 않지만
온몸이 날카로운 흉기다.`,english:`This Ultra Beast came from the Ultra Wormhole.
It seems not to attack enemies on its own, but
its sharp body is a dangerous weapon in itself.`,japanese:`ウルトラホールから　現れた　ＵＢ。
自ら　敵を　襲わないようだが
鋭い　全身は　凶器だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",height:3,weight:1},{id:799,names:{korean:"악식킹",english:"Guzzlord",japanese:"アクジキング"},descriptions:{korean:`산을 깎아 먹고 빌딩을
삼키는 모습이 보고되었다.
울트라비스트 중 하나이다.`,english:`It has gobbled mountains and swallowed whole
buildings, according to reports. It’s one of the
Ultra Beasts.`,japanese:`山を　喰らい　削り　ビルを
飲みこむ　姿が　報告　された。
ウルトラビーストの　一種。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",height:55,weight:8880},{id:800,names:{korean:"네크로즈마",english:"Necrozma",japanese:"ネクロズマ"},descriptions:{korean:`지하에서 잠들어 있던 것 같다.
태고의 다른 세계에서 왔다고
추측되는 UB같은 생물이다.`,english:`Reminiscent of the Ultra Beasts, this life-form,
apparently asleep underground, is thought to
have come from another world in ancient times.`,japanese:`地下で　眠りに　ついていたようだ。
太古に　別世界から　やってきたと
おもわれる　ＵＢらしき　生物。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",height:24,weight:2300},{id:801,names:{korean:"마기아나",english:"Magearna",japanese:"マギアナ"},descriptions:{korean:`500년 이상 전에 만들어진
인조포켓몬이다. 사람의 말을
이해하지만 말은 못 한다.`,english:`This artificial Pokémon, constructed more than
500 years ago, can understand human speech
but cannot itself speak.`,japanese:`５００年以上前に　造られた
人造ポケモン。　人の　言葉を
理解するが　しゃべれない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",height:10,weight:805},{id:802,names:{korean:"마샤도",english:"Marshadow",japanese:"マーシャドー"},descriptions:{korean:`그림자 안에 숨어 들을 수 있어
사람들 앞에 모습을 보이지 않아
그 존재는 환상이었다.`,english:`Able to conceal itself in shadows, it never
appears before humans, so its very existence
was the stuff of myth.`,japanese:`影の中に　潜むことが　でき
人前に　姿を　みせないので
その存在は　幻　だった。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",height:7,weight:222},{id:803,names:{korean:"베베놈",english:"Poipole",japanese:"ベベノム"},descriptions:{korean:`다른 세계에서는 여행
파트너로 삼을 정도로
친근한 울트라비스트다.`,english:`This Ultra Beast is well enough liked to be
chosen as a first partner in its own world.`,japanese:`異世界に　おいては　旅立ちの
パートナーに　選ばれるほど
親しまれている　ウルトラビースト。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",height:6,weight:18},{id:804,names:{korean:"아고용",english:"Naganadel",japanese:"アーゴヨン"},descriptions:{korean:`체내에 수백 리터의
독액을 갖고 있다.
UB라고 불리는 생물의 일종이다.`,english:`It stores hundreds of liters of poisonous liquid
inside its body. It is one of the organisms known
as UBs.`,japanese:`体内に　数百リットルの
毒液を　ためている。
ＵＢと　呼ばれる　生物の　一種。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",height:36,weight:1500},{id:805,names:{korean:"차곡차곡",english:"Stakataka",japanese:"ツンデツンデ"},descriptions:{korean:`울트라홀에서 출현했다.
여러 개의 생명이 쌓여
1마리를 형성하고 있는 듯하다.`,english:`It appeared from an Ultra Wormhole. Each one
appears to be made up of many life-forms
stacked one on top of each other.`,japanese:`ウルトラホールから　出現した。
複数の　生命が　積み上がり
１匹を　形成している　ようだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",height:55,weight:8200},{id:806,names:{korean:"두파팡",english:"Blacephalon",japanese:"ズガドーン"},descriptions:{korean:`꿈틀거리며 사람에게 다가오다
느닷없이 머리를 폭발시킨다.
울트라비스트의 일종인 듯하다.`,english:`It slithers toward people. Then, without warning,
it triggers the explosion of its own head.
It’s apparently one kind of Ultra Beast.`,japanese:`クネクネ動いて　人に　近付くと
突然　頭を　爆発させた。
ウルトラビーストの　一種らしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",height:18,weight:130},{id:807,names:{korean:"제라오라",english:"Zeraora",japanese:"ゼラオラ"},descriptions:{korean:`양 손발톱에 전기를 머금어
상대를 갈가리 찢는다. 피하더라도
흩날리는 전격으로 감전시킨다.`,english:`It electrifies its claws and tears its opponents
apart with them. Even if they dodge its attack,
they’ll be electrocuted by the flying sparks.`,japanese:`両手足の　ツメを　帯電させ
相手を　八つ裂き。　かわされても
飛び散る　電撃で　感電させる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",height:15,weight:445},{id:808,names:{korean:"멜탄",english:"Meltan",japanese:"メルタン"},descriptions:{korean:`걸쭉하게 녹은 강철의 몸을 가졌다.
땅속의 철분이나 금속을
녹여서 흡수한다.`,english:`It melts particles of iron and other metals found
in the subsoil, so it can absorb them into its
body of molten steel.`,japanese:`とろりと　溶けた　鋼の　体。
地中の　鉄分や　金属を
溶かして　吸収する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",height:2,weight:80},{id:809,names:{korean:"멜메탈",english:"Melmetal",japanese:"メルメタル"},descriptions:{korean:`철을 만들어내는 힘을 가졌다고
추앙받았었다. 모종의 이유로
3000년의 세월이 흘러 되살아났다.`,english:`Revered long ago for its capacity to create iron
from nothing, for some reason it has come back
to life after 3,000 years.`,japanese:`鉄を　産み出す　力を　持つと
崇められていた。　３０００年の
時を　経て　なぜか　蘇った。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",height:25,weight:8e3},{id:810,names:{korean:"흥나숭",english:"Grookey",japanese:"サルノリ"},descriptions:{korean:`특별한 스틱으로 리듬을 타면
화초를 생생하게 만드는 힘이
음파가 되어 퍼진다.`,english:`When it uses its special stick to strike up a beat,
the sound waves produced carry revitalizing
energy to the plants and flowers in the area.`,japanese:`特別な　スティックで　リズムを
刻むと　草花を　元気にする
パワーが　音波になって　広がる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",height:3,weight:50},{id:811,names:{korean:"채키몽",english:"Thwackey",japanese:"バチンキー"},descriptions:{korean:`2개의 스틱으로 격렬한
비트를 만드는 채키몽일수록
동료들에게 존경받는다.`,english:`The faster a Thwackey can beat out a rhythm
with its two sticks, the more respect it wins from
its peers.`,japanese:`２本の　スティックで　激しい
ビートを　刻める　バチンキーほど
仲間たちの　尊敬を　集める。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",height:7,weight:140},{id:812,names:{korean:"고릴타",english:"Rillaboom",japanese:"ゴリランダー"},descriptions:{korean:`특별한 그루터기의 파워를
드럼 연주로 컨트롤한다.
뿌리를 조종해서 싸운다.`,english:`By drumming, it taps into the power of its special
tree stump. The roots of the stump follow its
direction in battle.`,japanese:`特別な　切り株の　パワーを
ドラミングで　コントロール。
根っこを　操って　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",height:21,weight:900},{id:813,names:{korean:"염버니",english:"Scorbunny",japanese:"ヒバニー"},descriptions:{korean:`뛰어다니며 체온을 높이면
불꽃 에너지가 몸 안에 맴돌아
본래의 힘을 발휘할 수 있다.`,english:`A warm-up of running around gets fire energy
coursing through this Pokémon’s body. Once that
happens, it’s ready to fight at full power.`,japanese:`走りまわって　体温を　上げると
炎エネルギーが　体を　巡り
本来の　力を　発揮できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",height:3,weight:45},{id:814,names:{korean:"래비풋",english:"Raboot",japanese:"ラビフット"},descriptions:{korean:`푹신푹신한 털 덕분에 추위에
강해지고 더 높은 온도의
불꽃 기술도 쓸 수 있게 되었다.`,english:`Its thick and fluffy fur protects it from the cold
and enables it to use hotter fire moves.`,japanese:`ふかふかの　体毛で　寒さに
強くなり　さらに　高温の
炎技を　出せるようになった。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",height:6,weight:90},{id:815,names:{korean:"에이스번",english:"Cinderace",japanese:"エースバーン"},descriptions:{korean:`작은 돌을 리프팅해서 불꽃의
축구공을 만들고 날카로운
슛으로 상대를 태워버린다.`,english:`It juggles a pebble with its feet, turning it into a
burning soccer ball. Its shots strike opponents
hard and leave them scorched.`,japanese:`小石を　リフティングして　炎の
サッカーボールを　つくる。　するどい
シュートで　相手を　燃やす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",height:14,weight:330},{id:816,names:{korean:"울머기",english:"Sobble",japanese:"メッソン"},descriptions:{korean:`겁을 먹으면 양파 100개와 맞먹는
최루 성분의 눈물을 흘려서
상대도 덩달아 울게 만든다.`,english:`When scared, this Pokémon cries. Its tears pack
the chemical punch of 100 onions, and attackers
won’t be able to resist weeping.`,japanese:`怯えると　玉ねぎ１００個分の
催涙成分を　もつ　涙を
流して　もらい泣き　させる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",height:3,weight:40},{id:817,names:{korean:"누겔레온",english:"Drizzile",japanese:"ジメレオン"},descriptions:{korean:`손바닥에서 나오는 수분을
빚어서 만든 물구슬로
두뇌 싸움을 펼친다.`,english:`A clever combatant, this Pokémon battles using
water balloons created with moisture secreted
from its palms.`,japanese:`手のひらから　出る　水分を
丸めて　つくった　水の　玉を
使い　頭脳戦を　繰り広げる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",height:7,weight:115},{id:818,names:{korean:"인텔리레온",english:"Inteleon",japanese:"インテレオン"},descriptions:{korean:`다채로운 기능을 숨기고 있다.
손끝에서 물을 분사하고
등에 있는 피막으로 바람을 탄다.`,english:`It has many hidden capabilities, such as fingertips
that can shoot water and a membrane on its back
that it can use to glide through the air.`,japanese:`多彩な　機能を　隠し持つ。
指から　水を　噴射して
背中の　皮膜で　風に　乗る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",height:19,weight:452},{id:819,names:{korean:"탐리스",english:"Skwovet",japanese:"ホシガリス"},descriptions:{korean:`가라르의 여기저기에 있다.
양쪽 볼에 나무열매를
비축해두지 않으면 불안해한다.`,english:`Found throughout the Galar region, this Pokémon
becomes uneasy if its cheeks are ever completely
empty of berries.`,japanese:`ガラルの　いたるところに　いる。
左右の　ほっぺに　木の実を
蓄えていないと　不安。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",height:3,weight:25},{id:820,names:{korean:"요씽리스",english:"Greedent",japanese:"ヨクバリス"},descriptions:{korean:`꼬리에 나무열매를 모아둔다.
너무 많이 모아둬서 툭툭 흘리지만
둔감해서 눈치채지 못한다.`,english:`It stashes berries in its tail—so many berries that
they fall out constantly. But this Pokémon is a bit
slow-witted, so it doesn’t notice the loss.`,japanese:`しっぽに　木の実を　溜めこむ。
溜めこみすぎて　ポロポロ　こぼすが
鈍いので　気がつかない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",height:6,weight:60},{id:821,names:{korean:"파라꼬",english:"Rookidee",japanese:"ココガラ"},descriptions:{korean:`아무리 강한 상대라도 덤벼드는
용감한 성격을 가졌다. 도리어
당하면서도 점점 단련되어 간다.`,english:`It will bravely challenge any opponent, no matter
how powerful. This Pokémon benefits from every
battle—even a defeat increases its strength a bit.`,japanese:`どんな　強敵にも　挑みかかる
勇敢な　性質。　返り討ちに
遭いながらも　鍛えられていく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",height:2,weight:18},{id:822,names:{korean:"파크로우",english:"Corvisquire",japanese:"アオガラス"},descriptions:{korean:`발로 돌멩이를 쥐어서 던지거나
로프를 상대에게 휘감는 등
도구를 다루는 지혜를 가졌다.`,english:`Smart enough to use tools in battle, these
Pokémon have been seen picking up rocks and
flinging them or using ropes to wrap up enemies.`,japanese:`足で　小石を　つかんで　投げたり
ロープを　敵に　巻きつけるなど
道具を　あつかう　知恵を　もつ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",height:8,weight:160},{id:823,names:{korean:"아머까오",english:"Corviknight",japanese:"アーマーガア"},descriptions:{korean:`가라르지방의 하늘에는 적수가 없다.
검고 윤이 나는 강철의 자태는
상대에게 위압감을 주어 겁먹게 만든다.`,english:`This Pokémon reigns supreme in the skies of the
Galar region. The black luster of its steel body
could drive terror into the heart of any foe.`,japanese:`ガラル地方の　空では　敵なし。
黒光りする　鋼の　姿は
相手を　威圧し　恐れさせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",height:22,weight:750},{id:824,names:{korean:"두루지벌레",english:"Blipbug",japanese:"サッチムシ"},descriptions:{korean:`언제나 부지런히 정보를
모으기 때문에 똑똑하다.
단, 힘은 그저 그렇다.`,english:`A constant collector of information, this Pokémon
is very smart. Very strong is what it isn’t.`,japanese:`いつも　せっせと　情報を
集めているので　賢い。
ただし　力は　いまいちだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",height:4,weight:80},{id:825,names:{korean:"레돔벌레",english:"Dottler",japanese:"レドームシ"},descriptions:{korean:`거의 움직이지 않지만 살아 있다.
식음을 전폐하고 껍질에 은둔하는 동안
초능력에 눈을 뜬 모양이다.`,english:`It barely moves, but it’s still alive. Hiding in its
shell without food or water seems to have
awakened its psychic powers.`,japanese:`ほぼ　動かないが　生きている。
飲まず食わずで　殻に　こもるうち
超能力に　目覚めたらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",height:4,weight:195},{id:826,names:{korean:"이올브",english:"Orbeetle",japanese:"イオルブ"},descriptions:{korean:`똑똑한 포켓몬으로 유명하다.
커다란 두뇌는 강력한
사이코 파워를 가졌다는 증거다.`,english:`It’s famous for its high level of intelligence, and
the large size of its brain is proof that it also
possesses immense psychic power.`,japanese:`賢い　ポケモンとして　有名。
大きな　脳みそは　強力な
サイコパワーを　もつ　証し。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",height:4,weight:408},{id:827,names:{korean:"훔처우",english:"Nickit",japanese:"クスネ"},descriptions:{korean:`다른 포켓몬이 발견한 먹이를
훔치며 산다. 푹신푹신한
볼록살 덕분에 발소리가 나지 않는다.`,english:`Aided by the soft pads on its feet, it silently raids
the food stores of other Pokémon. It survives off
its ill-gotten gains.`,japanese:`ほかの　ポケモンが　みつけた　餌を
掠めて　暮らしている。　ふかふかの
肉球は　足音を　たてない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",height:6,weight:89},{id:828,names:{korean:"폭슬라이",english:"Thievul",japanese:"フォクスライ"},descriptions:{korean:`목표로 한 먹잇감에 슬쩍 마킹을
해둔다. 냄새를 따라가다 먹이의
주인이 방심하고 있을 때 훔치려 든다.`,english:`It secretly marks potential targets with a scent.
By following the scent, it stalks its targets
and steals from them when they least expect it.`,japanese:`狙った　獲物は　こっそり
マーキング。　においを　辿って
油断　したころ　盗みに　来るぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",height:12,weight:199},{id:829,names:{korean:"꼬모카",english:"Gossifleur",japanese:"ヒメンカ"},descriptions:{korean:`다리 하나를 땅에 꽂은 채
햇빛을 잔뜩 받으면
꽃잎이 선명한 색을 띠게 된다.`,english:`It anchors itself in the ground with its single leg,
then basks in the sun. After absorbing enough
sunlight, its petals spread as it blooms brilliantly.`,japanese:`一本足を　地面に　刺して
陽の光を　たっぷり　浴びると
花びらが　鮮やかに　色づく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",height:4,weight:22},{id:830,names:{korean:"백솜모카",english:"Eldegoss",japanese:"ワタシラガ"},descriptions:{korean:`솜털이 붙은 씨는 영양 만점이다.
씨를 바람에 날려서 초목과
포켓몬들을 건강하게 만든다.`,english:`The seeds attached to its cotton fluff are full of
nutrients. It spreads them on the wind so that
plants and other Pokémon can benefit from them.`,japanese:`綿毛の　種は　栄養満点。
風に　乗せて　飛ばして　草木や
ポケモンたちを　元気にさせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",height:5,weight:25},{id:831,names:{korean:"우르",english:"Wooloo",japanese:"ウールー"},descriptions:{korean:`곱슬곱슬한 털은
훌륭한 쿠션 역할을 한다.
절벽에서 떨어져도 아무렇지도 않다.`,english:`Its curly fleece is such an effective cushion that
this Pokémon could fall off a cliff and stand right
back up at the bottom, unharmed.`,japanese:`パーマの　かかった　体毛は
高い　クッション性が　ある。
崖から　落ちても　へっちゃら。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",height:6,weight:60},{id:832,names:{korean:"배우르",english:"Dubwool",japanese:"バイウールー"},descriptions:{korean:`탄력 있는 털로 짜낸
카펫은 트램펄린 같아서
올라가면 통통 튀어 오르게 된다.`,english:`Weave a carpet from its springy wool, and you end
up with something closer to a trampoline. You’ll
start to bounce the moment you set foot on it.`,japanese:`弾力の　ある　毛で　織った
カーペットは　トランポリンみたいで
乗れば　ピョンピョン　跳ねるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",height:13,weight:430},{id:833,names:{korean:"깨물부기",english:"Chewtle",japanese:"カムカメ"},descriptions:{korean:`눈앞에 있는 것은 바로 물어버리는
습성을 가졌다. 나고 있는 앞니가
근질거려서 물게 된다는 듯하다.`,english:`Apparently the itch of its teething impels it to
snap its jaws at anything in front of it.`,japanese:`目の前の　ものに　すぐに　噛みつく
習性。　生えかけの　前歯が
痒いので　噛みついてしまうらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",height:3,weight:85},{id:834,names:{korean:"갈가부기",english:"Drednaw",japanese:"カジリガメ"},descriptions:{korean:`흉포한 성질을 가졌다. 철봉을
물어뜯어 버릴 정도의 턱 힘으로
먹이를 덥석 물어버린다.`,english:`With jaws that can shear through steel rods,
this highly aggressive Pokémon chomps down
on its unfortunate prey.`,japanese:`狂暴な　性質。　鉄棒を
噛み千切る　ほどの　顎の　力で
獲物に　ばくりと　噛みつく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",height:10,weight:1155},{id:835,names:{korean:"멍파치",english:"Yamper",japanese:"ワンパチ"},descriptions:{korean:`달릴 때 꼬리가 시작되는 부분에서
전기를 만들어 낸다. 가라르에서는
양치기로 인기가 많다.`,english:`This Pokémon is very popular as a herding dog
in the Galar region. As it runs, it generates
electricity from the base of its tail.`,japanese:`走る　ときに　しっぽの　根元から
電気を　生み出す。　ガラルでは
牧羊犬として　人気。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",height:3,weight:135},{id:836,names:{korean:"펄스멍",english:"Boltund",japanese:"パルスワン"},descriptions:{korean:`만든 전기를 다리로 보내서
달리는 것을 돕는다. 삼 일 밤낮을
쉬지 않고 달릴 수 있다.`,english:`This Pokémon generates electricity and channels
it into its legs to keep them going strong.
Boltund can run nonstop for three full days.`,japanese:`電気を　つくって　脚に　送り
走りを　アシスト。　三日三晩
休まず　走れるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",height:10,weight:340},{id:837,names:{korean:"탄동",english:"Rolycoly",japanese:"タンドン"},descriptions:{korean:`약 400년 전에 탄광에서
발견되었다. 몸의 대부분이
석탄과 같은 성분이다.`,english:`Most of its body has the same composition as
coal. Fittingly, this Pokémon was first discovered
in coal mines about 400 years ago.`,japanese:`およそ４００年前に　炭鉱で
見つかった。　体の　ほとんどが
石炭と　同じ　成分。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",height:3,weight:120},{id:838,names:{korean:"탄차곤",english:"Carkol",japanese:"トロッゴン"},descriptions:{korean:`체내에서 석탄을 만들어 낸다.
과거의 가라르에서는 떨어뜨린
석탄을 생활에 이용했다.`,english:`It forms coal inside its body. Coal dropped by
this Pokémon once helped fuel the lives of
people in the Galar region.`,japanese:`体内で　石炭を　つくりだす。
昔の　ガラルでは　落とした
石炭を　生活に　利用した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",height:11,weight:780},{id:839,names:{korean:"석탄산",english:"Coalossal",japanese:"セキタンザン"},descriptions:{korean:`평소에는 온화하지만 인간이
광산을 훼손시키면 격분해서
1500도의 불꽃으로 태워버린다.`,english:`It’s usually peaceful, but the vandalism of mines
enrages it. Offenders will be incinerated with
flames that reach 2,700 degrees Fahrenheit.`,japanese:`普段は　穏やかだが　人間が
鉱山を　荒らすと　怒りくるい
１５００度の　炎で　焼きつくす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",height:28,weight:3105},{id:840,names:{korean:"과사삭벌레",english:"Applin",japanese:"カジッチュ"},descriptions:{korean:`평생을 사과 속에서 지내며
천적인 새포켓몬과 마주치면
사과인 척을 해서 몸을 지킨다.`,english:`It spends its entire life inside an apple. It hides
from its natural enemies, bird Pokémon, by
pretending it’s just an apple and nothing more.`,japanese:`一生　りんごの　中で　暮らし
天敵の　鳥ポケモンに　出会うと
りんごの　振りをして　身を守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",height:2,weight:5},{id:841,names:{korean:"애프룡",english:"Flapple",japanese:"アップリュー"},descriptions:{korean:`새콤한 사과를 먹고 진화했다.
화상을 입을 정도로 강한 산성을 띠는
액체를 볼주머니에 저장하고 있다.`,english:`It ate a sour apple, and that induced its
evolution. In its cheeks, it stores an acid
capable of causing chemical burns.`,japanese:`すっぱい　りんごを　食べて　進化。
火傷する　ほど　強酸性の
液体を　頬袋に　溜める。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",height:3,weight:10},{id:842,names:{korean:"단지래플",english:"Appletun",japanese:"タルップル"},descriptions:{korean:`달콤한 사과를 먹고 진화했다.
몸에서 달콤한 향기를 내보내서
먹이인 벌레포켓몬을 유인한다.`,english:`Eating a sweet apple caused its evolution.
A nectarous scent wafts from its body, luring in
the bug Pokémon it preys on.`,japanese:`甘い　りんごを　食べて　進化。
体から　甘い　においを　だして
餌の　虫ポケモンを　引き寄せる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",height:4,weight:130},{id:843,names:{korean:"모래뱀",english:"Silicobra",japanese:"スナヘビ"},descriptions:{korean:`굴을 파면서 먹은 모래를
목에 있는 주머니에 저장하는데
8kg이나 되는 모래가 들어간다.`,english:`As it digs, it swallows sand and stores it in its
neck pouch. The pouch can hold more than
17 pounds of sand.`,japanese:`穴を　掘りながら　食べた　砂を
首の　袋に　溜めている。
８キロもの　砂が　入るのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",height:22,weight:76},{id:844,names:{korean:"사다이사",english:"Sandaconda",japanese:"サダイジャ"},descriptions:{korean:`온몸을 수축시킨 뒤 100kg의
모래를 콧구멍으로 내뿜는다.
모래가 없으면 무기력해진다.`,english:`When it contracts its body, over 220 pounds of
sand sprays from its nose. If it ever runs out of
sand, it becomes disheartened.`,japanese:`全身を　縮め　１００キロの
砂を　鼻の　穴から　噴射。
砂が　ないと　弱気に　なるぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",height:38,weight:655},{id:845,names:{korean:"윽우지",english:"Cramorant",japanese:"ウッウ"},descriptions:{korean:`상대를 일격에 쓰러뜨릴 정도로
파워풀하지만 건망증이 심해서
싸우고 있는 상대를 잊어버린다.`,english:`It’s so strong that it can knock out some
opponents in a single hit, but it also may
forget what it’s battling midfight.`,japanese:`相手を　一撃で　打ち負かすほど
パワフルだが　忘れっぽいので
戦っている　相手を　忘れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",height:8,weight:180},{id:846,names:{korean:"찌로꼬치",english:"Arrokuda",japanese:"サシカマス"},descriptions:{korean:`날카롭고 뾰족한 턱을 자랑한다.
조금이라도 움직이는 것을 발견하면
일직선으로 돌격한다.`,english:`If it sees any movement around it, this Pokémon
charges for it straightaway, leading with its
sharply pointed jaw. It’s very proud of that jaw.`,japanese:`鋭く　尖った　顎が　自慢。
少しでも　動くものを　見つけると
一直線に　突撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",height:5,weight:10},{id:847,names:{korean:"꼬치조",english:"Barraskewda",japanese:"カマスジョー"},descriptions:{korean:`창처럼 뾰족한 턱은 강철과 같은
단단함을 자랑한다. 살코기는
깜짝 놀랄 정도로 맛있다는 듯하다.`,english:`This Pokémon has a jaw that’s as sharp as a spear
and as strong as steel. Apparently Barraskewda’s
flesh is surprisingly tasty, too.`,japanese:`槍のように　尖った　顎は
鋼の　硬さ。　その　身は
驚くほど　美味しいらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",height:13,weight:300},{id:848,names:{korean:"일레즌",english:"Toxel",japanese:"エレズン"},descriptions:{korean:`체내의 독주머니에 저장하고 있는
독소를 피부를 통해 분비한다.
건드리면 찌릿하고 마비된다.`,english:`It stores poison in an internal poison sac and
secretes that poison through its skin. If you touch
this Pokémon, a tingling sensation follows.`,japanese:`体内の　毒袋に　溜めた
毒素を　皮膚から　分泌。
触ると　ピリピリと　痺れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",height:4,weight:110},{id:849,names:{korean:"스트린더",english:"Toxtricity",japanese:"ストリンダー"},descriptions:{korean:`가슴에 난 돌기를 긁으면
전기가 일어나며 주위에
기타와 비슷한 소리가 울려퍼진다.`,english:`When this Pokémon sounds as if it’s strumming a
guitar, it’s actually clawing at the protrusions on
its chest to generate electricity.`,japanese:`胸の　突起を　掻きむしり
電気を　起こすとき　あたりに
ギターのような　音が　響く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",height:16,weight:400},{id:850,names:{korean:"태우지네",english:"Sizzlipede",japanese:"ヤクデ"},descriptions:{korean:`몸속에 모아둔 가연성 가스로
열을 낸다. 특히 배 쪽의
노란 부분이 뜨겁다.`,english:`It stores flammable gas in its body and uses it to
generate heat. The yellow sections on its belly
get particularly hot.`,japanese:`体に　溜めた　可燃ガスで
発熱。　とくに　お腹の
黄色い　部分が　熱いのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",height:7,weight:10},{id:851,names:{korean:"다태우지네",english:"Centiskorch",japanese:"マルヤクデ"},descriptions:{korean:`발열 시의 체온은 약 800도.
몸을 채찍처럼 휘면서
덤벼든다.`,english:`When it heats up, its body temperature reaches
about 1,500 degrees Fahrenheit. It lashes its
body like a whip and launches itself at enemies.`,japanese:`発熱時の　体温は　およそ
８００度。　体を　鞭のように
しならせて　跳びかかってくるぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",height:30,weight:1200},{id:852,names:{korean:"때때무노",english:"Clobbopus",japanese:"タタッコ"},descriptions:{korean:`먹이를 찾아 지상으로 올라온다.
호기심이 왕성해서 눈에 들어오는 것은
일단 촉수로 때리고 본다.`,english:`It’s very curious, but its means of investigating
things is to try to punch them with its tentacles.
The search for food is what brings it onto land.`,japanese:`餌を　求め　地上に　上がる。
好奇心旺盛で　目にしたものは
とりあえず　触手で　殴る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",height:6,weight:40},{id:853,names:{korean:"케오퍼스",english:"Grapploct",japanese:"オトスパス"},descriptions:{korean:`온몸이 근육덩어리다.
촉수를 사용해서 펼치는
조르기 기술의 위력은 무시무시하다.`,english:`A body made up of nothing but muscle makes
the grappling moves this Pokémon performs with
its tentacles tremendously powerful.`,japanese:`全身が　筋肉の　塊。
触手を　使って　繰りだす
絞め技の　威力は　凄まじい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",height:16,weight:390},{id:854,names:{korean:"데인차",english:"Sinistea",japanese:"ヤバチャ"},descriptions:{korean:`차게 식은 남은 홍차에
외로움을 타는 영혼이 깃들어
포켓몬이 되었다고 전해진다.`,english:`This Pokémon is said to have been born when
a lonely spirit possessed a cold, leftover cup
of tea.`,japanese:`残され　冷えきった　紅茶に
さみしがりやな　魂が　宿り
ポケモンに　なったと　いわれている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",height:1,weight:2},{id:855,names:{korean:"포트데스",english:"Polteageist",japanese:"ポットデス"},descriptions:{korean:`앤티크한 찻주전자에 산다.
대부분 위작이지만 매우 드물게
진품이 발견되기도 한다.`,english:`This species lives in antique teapots.
Most pots are forgeries, but on rare occasions,
an authentic work is found.`,japanese:`アンティークの　ポットに　棲みつく。
ほとんどが　贋作だが　ごくまれに
真作が　見つかる　ことも。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",height:2,weight:4},{id:856,names:{korean:"몸지브림",english:"Hatenna",japanese:"ミブリム"},descriptions:{korean:`머리의 돌기로 생물의
기분을 감지한다. 온화한
자에게만 마음을 연다.`,english:`Via the protrusion on its head, it senses other
creatures’ emotions. If you don’t have a calm
disposition, it will never warm up to you.`,japanese:`頭の　突起で　生物の
気持ちを　感じとる。　穏やかな
ものにしか　心を　開かない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",height:4,weight:34},{id:857,names:{korean:"손지브림",english:"Hattrem",japanese:"テブリム"},descriptions:{korean:`강한 감정을 품은 자라면
누가 됐든 조용하게 만드는데
그 수단이 매우 난폭하다.`,english:`No matter who you are, if you bring strong
emotions near this Pokémon, it will silence
you violently.`,japanese:`強い　感情を　もつ　ものは
それが　誰であれ　黙らせる。
その手段は　じつに　乱暴。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",height:6,weight:48},{id:858,names:{korean:"브리무음",english:"Hatterene",japanese:"ブリムオン"},descriptions:{korean:`두통이 생길 정도의 사이코 파워를
주위에 발산해서 다른 생물이
접근하지 못하게 한다.`,english:`It emits psychic power strong enough to cause
headaches as a deterrent to the approach
of others.`,japanese:`頭痛になるほどの　サイコパワーを
周囲に　放って　ほかの
生物を　遠ざけているのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",height:21,weight:51},{id:859,names:{korean:"메롱꿍",english:"Impidimp",japanese:"ベロバー"},descriptions:{korean:`사람이나 포켓몬이 싫어하는 감정을
가질 때 발생시키는 마이너스 에너지를
코로 빨아들여서 건강해진다.`,english:`Through its nose, it sucks in the emanations
produced by people and Pokémon when they
feel annoyed. It thrives off this negative energy.`,japanese:`人や　ポケモンが　嫌がる　ときに
発する　マイナスエネルギーを
鼻から　吸いこみ　元気になる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",height:4,weight:55},{id:860,names:{korean:"쏘겨모",english:"Morgrem",japanese:"ギモー"},descriptions:{korean:`납작 엎드려서 사과하는 척하다가
창처럼 뾰족한 뒷머리로
찌르는 전법을 구사한다.`,english:`When it gets down on all fours as if to beg for
forgiveness, it’s trying to lure opponents in so
that it can stab them with its spear-like hair.`,japanese:`土下座して　謝る　振りをして
槍のように　尖った　後ろ髪で
突き刺してくる　戦法を　使う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",height:8,weight:125},{id:861,names:{korean:"오롱털",english:"Grimmsnarl",japanese:"オーロンゲ"},descriptions:{korean:`머리카락을 전신에 휘감아
근력이 올랐다. 괴력몬을
압도하는 파워를 발휘한다.`,english:`With the hair wrapped around its body helping to
enhance its muscles, this Pokémon can overwhelm
even Machamp.`,japanese:`髪の毛を　全身に　巻きつけると
筋力が　アップ。　カイリキーを
ねじ伏せる　パワーを　発揮する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",height:15,weight:610},{id:862,names:{korean:"가로막구리",english:"Obstagoon",japanese:"タチフサグマ"},descriptions:{korean:`엄청난 성량을 가졌다.
샤우팅하며 위협하는 모습은
블로킹이라 불린다.`,english:`Its voice is staggering in volume. Obstagoon
has a tendency to take on a threatening posture
and shout—this move is known as Obstruct.`,japanese:`凄まじい　声量を　もつ。
シャウトとともに　威嚇するさまは
ブロッキングと　呼ばれている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",height:16,weight:460},{id:863,names:{korean:"나이킹",english:"Perrserker",japanese:"ニャイキング"},descriptions:{korean:`머리의 털이 단단해져서
철로 된 헬멧처럼 되었다.
매우 호전적인 성질을 가졌다.`,english:`What appears to be an iron helmet is actually
hardened hair. This Pokémon lives for the thrill
of battle.`,japanese:`頭の　体毛が　硬質化して
鉄の　ヘルメットのように　なった。
とても　好戦的な　性質。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",height:8,weight:280},{id:864,names:{korean:"산호르곤",english:"Cursola",japanese:"サニゴーン"},descriptions:{korean:`영력이 높아져서 껍질에서
해방되었다. 영체로
핵이 되는 영혼을 지킨다.`,english:`Its shell is overflowing with its heightened
otherworldly energy. The ectoplasm serves as
protection for this Pokémon’s core spirit.`,japanese:`霊力が　高まり　殻から
解き放たれた。　霊体で
核の　魂を　守っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",height:10,weight:4},{id:865,names:{korean:"창파나이트",english:"Sirfetch’d",japanese:"ネギガナイト"},descriptions:{korean:`많은 싸움에서 살아남은 자만이
이 모습으로 진화한다.
파가 시들면 전장을 떠난다.`,english:`Only Farfetch’d that have survived many battles
can attain this evolution. When this Pokémon’s
leek withers, it will retire from combat.`,japanese:`歴戦を　生き抜いた　ものが
この姿に　進化する。　ネギが
枯れるとき　戦場を　去る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",height:8,weight:1170},{id:866,names:{korean:"마임꽁꽁",english:"Mr. Rime",japanese:"バリコオル"},descriptions:{korean:`탭 댄스의 달인이다.
얼음으로 만든 지팡이를 휘두르며
경쾌한 스텝을 선보인다.`,english:`It’s highly skilled at tap-dancing. It waves its cane
of ice in time with its graceful movements.`,japanese:`タップダンスの　達人。
氷で　できた　ステッキを　振り
軽やかな　ステップを　披露する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",height:15,weight:582},{id:867,names:{korean:"데스판",english:"Runerigus",japanese:"デスバーン"},descriptions:{korean:`강한 저주를 담아 그린
고대의 그림이 데스마스의 영혼을
흡수해서 움직이기 시작했다.`,english:`A powerful curse was woven into an ancient
painting. After absorbing the spirit of a Yamask,
the painting began to move.`,japanese:`強い　呪いを　こめて　描かれた
古代の　絵が　デスマスの
魂を　取り込み　動きだした。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",height:16,weight:666},{id:868,names:{korean:"마빌크",english:"Milcery",japanese:"マホミル"},descriptions:{korean:`크림으로 이루어진 몸을 가졌다.
공기 중을 떠도는 달콤한 향기의
성분이 모여서 태어났다.`,english:`This Pokémon was born from sweet-smelling
particles in the air. Its body is made of cream.`,japanese:`クリームで　できた　体を　もつ。
空気中の　甘い　香りの
成分が　集まって　生まれた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",height:2,weight:3},{id:869,names:{korean:"마휘핑",english:"Alcremie",japanese:"マホイップ"},descriptions:{korean:`믿을 수 있는 트레이너에게는
크림으로 데코레이션한
나무열매를 대접한다.`,english:`When it trusts a Trainer, it will treat them to
berries it’s decorated with cream.`,japanese:`信頼する　トレーナーには
クリームで　デコレーションした
木の実を　ふるまって　くれるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",height:3,weight:5},{id:870,names:{korean:"대여르",english:"Falinks",japanese:"タイレーツ"},descriptions:{korean:`리더라고 불리는 1마리와
멤버라고 불리는 5마리로 이루어져 있다.
리더의 명령은 절대적이다.`,english:`Five of them are troopers, and one is the brass.
The brass’s orders are absolute.`,japanese:`ヘイチョーと　呼ばれる　１匹と
ヘイと　呼ばれる　５匹で　ひとつ。
ヘイチョーの　命令は　絶対。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",height:30,weight:620},{id:871,names:{korean:"찌르성게",english:"Pincurchin",japanese:"バチンウニ"},descriptions:{korean:`가시 끝에서 전기를 발산한다.
날카로운 이빨로 바위에 붙은
해초를 갉아 먹는다.`,english:`It feeds on seaweed, using its teeth to scrape it
off rocks. Electric current flows from the tips of
its spines.`,japanese:`棘の　先から　電気を　放つ。
鋭い　歯で　岩に　ついた
海藻を　こそいで　食べる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",height:3,weight:10},{id:872,names:{korean:"누니머기",english:"Snom",japanese:"ユキハミ"},descriptions:{korean:`냉기가 서린 실을 뿜는다.
실로 몸을 가지에 휘감아서
고드름인 척하고 잠든다.`,english:`It spits out thread imbued with a frigid sort of
energy and uses it to tie its body to branches,
disguising itself as an icicle while it sleeps.`,japanese:`冷気の　混ざった　糸を　吐く。
糸で　体を　枝に　巻きつけ
氷柱の　振りをして　眠るのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",height:3,weight:38},{id:873,names:{korean:"모스노우",english:"Frosmoth",japanese:"モスノウ"},descriptions:{korean:`날개의 온도는 영하 180도.
냉기가 담긴 인분을 눈처럼
흩뿌리며 산과 들을 날아다닌다.`,english:`Icy scales fall from its wings like snow as it flies
over fields and mountains. The temperature of its
wings is less than −290 degrees Fahrenheit.`,japanese:`はねの　温度は　マイナス１８０度。
冷気を　込めた　りんぷんを　雪の
ように　ふりまき　野山を　飛ぶ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",height:13,weight:420},{id:874,names:{korean:"돌헨진",english:"Stonjourner",japanese:"イシヘンジン"},descriptions:{korean:`넓은 초원 한복판에 우뚝 서서
해가 기우는 것을 바라보며 지낸다.
다이내믹한 발차기 기술이 특기다.`,english:`It stands in grasslands, watching the sun’s descent
from zenith to horizon. This Pokémon has a talent
for delivering dynamic kicks.`,japanese:`大草原の　中で　たたずみ
陽の　傾きを　眺めて　暮らす。
ダイナミックな　蹴り技が　得意。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",height:25,weight:5200},{id:875,names:{korean:"빙큐보",english:"Eiscue",japanese:"コオリッポ"},descriptions:{korean:`매우 추운 곳에서 흘러 흘러
떠내려왔다. 항상 얼음으로
얼굴을 식히고 있다.`,english:`It drifted in on the flow of ocean waters from a
frigid place. It keeps its head iced constantly to
make sure it stays nice and cold.`,japanese:`とても　寒い　場所から　流れ
流されて　やってきた。　氷で
顔を　つねに　冷やして　いるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",height:14,weight:890},{id:876,names:{korean:"에써르",english:"Indeedee",japanese:"イエッサン"},descriptions:{korean:`머리에 달린 뿔로 상대의 기분을
감지한다. 수컷은 집사처럼
주인의 곁에서 시중을 든다.`,english:`It uses the horns on its head to sense the
emotions of others. Males will act as valets for
those they serve, looking after their every need.`,japanese:`頭の　ツノで　相手の　気持ちを
感じとる。　オスは　従者の
ように　主のそばで　世話を焼く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",height:9,weight:280},{id:877,names:{korean:"모르페코",english:"Morpeko",japanese:"モルペコ"},descriptions:{korean:`항상 배가 고프다.
호주머니같이 생긴 주머니에 넣어둔
씨앗을 먹어서 전기를 만든다.`,english:`As it eats the seeds stored up in its pocket-like
pouches, this Pokémon is not just satisfying its
constant hunger. It’s also generating electricity.`,japanese:`いつも　お腹を　すかせている。
ポケットの　ような　袋に　入れた
タネを　食べて　電気を　つくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",height:3,weight:30},{id:878,names:{korean:"끼리동",english:"Cufant",japanese:"ゾウドウ"},descriptions:{korean:`5톤의 짐을 실어도 문제없는
힘이 장사인 포켓몬.
코를 이용해서 땅을 판다.`,english:`It digs up the ground with its trunk. It’s also very
strong, being able to carry loads of over
five tons without any problem at all.`,japanese:`５トンの　荷物を　もっても
平気な　力持ち　ポケモン。
鼻を　使って　土を　掘る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",height:12,weight:1e3},{id:879,names:{korean:"대왕끼리동",english:"Copperajah",japanese:"ダイオウドウ"},descriptions:{korean:`녹색 피부는 물에도 강하다.
오래전에 다른 지방에서 오게 되어
사람과 함께 일했다.`,english:`They came over from another region long
ago and worked together with humans.
Their green skin is resistant to water.`,japanese:`緑の皮膚は　水にも　強い。
昔　ほかの土地から　やってきて
人と　いっしょに　働いた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",height:30,weight:6500},{id:880,names:{korean:"파치래곤",english:"Dracozolt",japanese:"パッチラゴン"},descriptions:{korean:`고대에는 튼튼한 하반신 덕분에
무적이었으나 먹이인 식물을
모두 먹어버려서 멸종했다.`,english:`In ancient times, it was unbeatable thanks to its
powerful lower body, but it went extinct anyway
after it depleted all its plant-based food sources.`,japanese:`古代では　たくましい　下半身で
無敵だったが　餌の　植物を
食べつくしてしまい　絶滅した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",height:18,weight:1900},{id:881,names:{korean:"파치르돈",english:"Arctozolt",japanese:"パッチルドン"},descriptions:{korean:`꽁꽁 언 상반신이 진동하면
전기가 만들어진다.
걷는 것이 매우 서툴다.`,english:`The shaking of its freezing upper half is what
generates its electricity. It has a hard time
walking around.`,japanese:`氷漬けの　上半身が
震えると　電気が　つくられる。
歩くことが　非常に　苦手。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",height:23,weight:1500},{id:882,names:{korean:"어래곤",english:"Dracovish",japanese:"ウオノラゴン"},descriptions:{korean:`뛰어난 다리와 턱의 힘 덕분에
고대에는 무적이었으나
먹이를 모두 잡아먹어버려서 멸종했다.`,english:`Powerful legs and jaws made it the apex predator
of its time. Its own overhunting of its prey was
what drove it to extinction.`,japanese:`ずば抜けた　脚力と　顎の
力で　古代では　無敵だったが
獲物を　獲り尽くし　絶滅した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",height:23,weight:2150},{id:883,names:{korean:"어치르돈",english:"Arctovish",japanese:"ウオチルドン"},descriptions:{korean:`주변을 꽁꽁 얼려서 먹이를
잡지만 입이 머리 윗부분에
있어서 먹기 힘들다.`,english:`Though it’s able to capture prey by freezing its
surroundings, it has trouble eating the prey
afterward because its mouth is on top of its head.`,japanese:`周囲を　凍りつかせて　獲物を
捕まえるが　口が　頭の
上に　あるので　食べづらい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",height:20,weight:1750},{id:884,names:{korean:"두랄루돈",english:"Duraludon",japanese:"ジュラルドン"},descriptions:{korean:`윤이 나는 금속과도 같은
몸은 가벼우면서도 튼튼하지만
녹슬기 쉽다는 것이 흠이다.`,english:`Its body resembles polished metal, and it’s both
lightweight and strong. The only drawback is that
it rusts easily.`,japanese:`磨きあげた　金属の　ような
体は　軽いうえに　硬いが
錆びやすいのが　欠点なのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",height:18,weight:400},{id:885,names:{korean:"드라꼰",english:"Dreepy",japanese:"ドラメシヤ"},descriptions:{korean:`고대의 바다에 살았다.
고스트포켓몬으로 되살아나
과거의 보금자리를 떠돌고 있다.`,english:`After being reborn as a ghost Pokémon,
Dreepy wanders the areas it used to inhabit
back when it was alive in prehistoric seas.`,japanese:`古代の　海で　暮らしていた。
ゴーストポケモンとして　よみがえり
かつての　すみかを　さまよっている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",height:5,weight:20},{id:886,names:{korean:"드래런치",english:"Drakloak",japanese:"ドロンチ"},descriptions:{korean:`비행 속도는 시속 200km.
드라꼰과 함께 싸우며
무사히 진화할 때까지 돌본다.`,english:`It’s capable of flying faster than 120 mph.
It battles alongside Dreepy and
dotes on them until they successfully evolve.`,japanese:`飛行速度は　時速２００キロ。
ドラメシヤと　いっしょに　戦い
無事に　進化するまで　世話をする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",height:14,weight:110},{id:887,names:{korean:"드래펄트",english:"Dragapult",japanese:"ドラパルト"},descriptions:{korean:`뿔에 있는 구멍에 드라꼰을 넣고
지낸다. 싸움이 시작되면 마하의
스피드로 드라꼰을 날린다.`,english:`When it isn’t battling, it keeps Dreepy in the
holes on its horns. Once a fight starts, it launches
the Dreepy like supersonic missiles.`,japanese:`ツノの　穴に　ドラメシヤを　入れて
暮らす。　戦いになると　マッハの
スピードで　ドラメシヤを　飛ばす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",height:30,weight:500},{id:888,names:{korean:"자시안",english:"Zacian",japanese:"ザシアン"},descriptions:{korean:`전설의 영웅이라고 불리는
포켓몬. 금속을 흡수한 뒤
무기로 변화시켜서 싸운다.`,english:`Known as a legendary hero, this Pokémon
absorbs metal particles, transforming them
into a weapon it uses to battle.`,japanese:`伝説の　英雄と　呼ばれる
ポケモン。　金属を　取り込み
武具に　変化させ　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",height:28,weight:1100},{id:889,names:{korean:"자마젠타",english:"Zamazenta",japanese:"ザマゼンタ"},descriptions:{korean:`인간의 왕과 힘을 합쳐
가라르를 구한 포켓몬.
금속을 흡수해서 싸운다.`,english:`In times past, it worked together with a king of
the people to save the Galar region. It absorbs
metal that it then uses in battle.`,japanese:`人の王と　力を　あわせ
ガラルを　救った　ポケモン。
金属を　取り込み　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",height:29,weight:2100},{id:890,names:{korean:"무한다이노",english:"Eternatus",japanese:"ムゲンダイナ"},descriptions:{korean:`가슴의 코어가 가라르지방의
대지에서 솟아나는 에너지를
흡수해서 활동한다.`,english:`The core on its chest absorbs energy emanating
from the lands of the Galar region. This energy is
what allows Eternatus to stay active.`,japanese:`胸の　コアが　ガラル地方の
大地から　涌きだす　エネルギーを
吸収して　活動している。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",height:200,weight:9500},{id:891,names:{korean:"치고마",english:"Kubfu",japanese:"ダクマ"},descriptions:{korean:`혹독한 수련을 거듭하며 기술을
갈고닦는다. 체득한 기술에 따라
진화했을 때의 모습이 달라진다.`,english:`Kubfu trains hard to perfect its moves. The moves
it masters will determine which form it takes when
it evolves.`,japanese:`厳しい　鍛錬を　積み　技を
磨く。　体得した　技によって
進化したときの　姿が　変わる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",height:6,weight:120},{id:892,names:{korean:"우라오스",english:"Urshifu",japanese:"ウーラオス"},descriptions:{korean:`일격필살이 신조다.
상대의 품으로 파고들어
단련된 주먹을 질러 넣는다.`,english:`This form of Urshifu is a strong believer in the
one-hit KO. Its strategy is to leap in close to foes
and land a devastating blow with a hardened fist.`,japanese:`一撃必殺が　信条。
相手の　懐に　飛びこみ
鍛えられた　拳を　叩きこむ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",height:19,weight:1050},{id:893,names:{korean:"자루도",english:"Zarude",japanese:"ザルード"},descriptions:{korean:`무리 지어 밀림에 산다.
매우 공격적이라 숲에 사는
포켓몬들에게는 두려움의 대상이다.`,english:`Within dense forests, this Pokémon lives in a pack
with others of its kind. It’s incredibly aggressive,
and the other Pokémon of the forest fear it.`,japanese:`群れを　つくり　密林で　暮らす。
とても　攻撃的で　森にすむ
ポケモンたちから　恐れられている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",height:18,weight:700},{id:894,names:{korean:"레지에레키",english:"Regieleki",japanese:"レジエレキ"},descriptions:{korean:`전기 에너지 덩어리다.
몸에 있는 링을 해제하면
숨겨진 힘이 해방된다고 한다.`,english:`This Pokémon is a cluster of electrical energy.
It’s said that removing the rings on Regieleki’s
body will unleash the Pokémon’s latent power.`,japanese:`電気エネルギーの　塊。
体の　リングを　外すと　秘めた
力が　解き放たれるらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",height:12,weight:1450},{id:895,names:{korean:"레지드래고",english:"Regidrago",japanese:"レジドラゴ"},descriptions:{korean:`팔의 형태가 고대 드래곤포켓몬의
머리라는 학설도 있지만
증명된 바는 없다.`,english:`An academic theory proposes that Regidrago’s
arms were once the head of an ancient dragon
Pokémon. The theory remains unproven.`,japanese:`腕の　形は　古代の　ドラゴン
ポケモンの　頭という　学説も
あるが　証明されていない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",height:21,weight:2e3},{id:896,names:{korean:"블리자포스",english:"Glastrier",japanese:"ブリザポス"},descriptions:{korean:`발굽에서 강력한 냉기를 발산한다.
원하는 것은 무엇이든
힘으로 빼앗는 폭군.`,english:`Glastrier emits intense cold from its hooves.
It’s also a belligerent Pokémon—anything it
wants, it takes by force.`,japanese:`蹄から　強力な　冷気を
放つ。　欲しいものは　なんでも
力尽くで　奪う　暴れん坊。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",height:22,weight:8e3},{id:897,names:{korean:"레이스포스",english:"Spectrier",japanese:"レイスポス"},descriptions:{korean:`시각 이외의 오감을 사용해서
동태를 살핀다. 발에 차인 자는
영혼이 빠져나가 버린다고 한다.`,english:`It probes its surroundings with all its senses save
one—it doesn’t use its sense of sight. Spectrier’s
kicks are said to separate soul from body.`,japanese:`視覚　以外の　五感を　使い
様子を　探る。　蹴られたものは
魂を　抜かれてしまうという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",height:20,weight:445},{id:898,names:{korean:"버드렉스",english:"Calyrex",japanese:"バドレックス"},descriptions:{korean:`치유와 은총의 힘을 가진
자애로운 포켓몬.
먼 옛날 가라르에 군림했었다.`,english:`Calyrex is a merciful Pokémon, capable of
providing healing and blessings. It reigned over
the Galar region in times of yore.`,japanese:`癒しと　恵みの　力を　もつ
慈愛に　満ちた　ポケモン。　はるか
むかし　ガラルに　君臨していた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",height:11,weight:77},{id:899,names:{korean:"신비록",english:"Wyrdeer",japanese:"アヤシシ"},descriptions:{korean:"",english:`The black orbs shine with an uncanny light when the Pokémon is
erecting invisible barriers. The fur shed from its beard retains
heat well and is a highly useful material for winter clothing.`,japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",height:18,weight:951},{id:900,names:{korean:"사마자르",english:"Kleavor",japanese:"バサギリ"},descriptions:{korean:"",english:`A violent creature that fells towering trees with its crude axes
and shields itself with hard stone. If one should chance upon
this Pokémon in the wilds, one's only recourse is to flee.`,japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",height:18,weight:890},{id:901,names:{korean:"다투곰",english:"Ursaluna",japanese:"ガチグマ"},descriptions:{korean:"",english:`I believe it was Hisui's swampy terrain that gave Ursaluna its
burly physique and newfound capacity to manipulate peat
at will.`,japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",height:24,weight:2900},{id:902,names:{korean:"대쓰여너",english:"Basculegion",japanese:"イダイトウ"},descriptions:{korean:"",english:`Clads itself in the souls of comrades that perished before
fulfilling their goals of journeying upstream. No other species
throughout all Hisui's rivers is Basculegion's equal.`,japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",height:30,weight:1100},{id:903,names:{korean:"포푸니크",english:"Sneasler",japanese:"オオニューラ"},descriptions:{korean:"",english:`Because of Sneasler's virulent poison and daunting physical
prowess, no other species could hope to best it on the frozen
highlands. Preferring solitude, this species does not form packs.`,japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",height:13,weight:430},{id:904,names:{korean:"장침바루",english:"Overqwil",japanese:"ハリーマン"},descriptions:{korean:"",english:`Its lancelike spikes and savage temperament have earned it the
nickname ”sea fiend.” It slurps up poison to nourish itself.`,japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",height:25,weight:605},{id:905,names:{korean:"러브로스",english:"Enamorus",japanese:"ラブトロス"},descriptions:{korean:"",english:`When it flies to this land from across the sea, the bitter winter
comes to an end. According to legend, this Pokémon's love
gives rise to the budding of fresh life across Hisui.`,japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",height:16,weight:480},{id:906,names:{korean:"나오하",english:"Sprigatito",japanese:"ニャオハ"},descriptions:{korean:"",english:"Its fluffy fur is similar in composition to plants. This Pokémon frequently washes its face to keep it from drying out.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",height:4,weight:41},{id:907,names:{korean:"나로테",english:"Floragato",japanese:"ニャローテ"},descriptions:{korean:"",english:"Floragato deftly wields the vine hidden beneath its long fur, slamming the hard flower bud against its opponents.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png",height:9,weight:122},{id:908,names:{korean:"마스카나",english:"Meowscarada",japanese:"マスカーニャ"},descriptions:{korean:"",english:"This Pokémon uses the reflective fur lining its cape to camouflage the stem of its flower, creating the illusion that the flower is floating.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",height:15,weight:312},{id:909,names:{korean:"뜨아거",english:"Fuecoco",japanese:"ホゲータ"},descriptions:{korean:"",english:"It lies on warm rocks and uses the heat absorbed by its square-shaped scales to create fire energy.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",height:4,weight:98},{id:910,names:{korean:"악뜨거",english:"Crocalor",japanese:"アチゲータ"},descriptions:{korean:"",english:"The combination of Crocalor’s fire energy and overflowing vitality has caused an egg-shaped fireball to appear on the Pokémon’s head.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png",height:10,weight:307},{id:911,names:{korean:"라우드본",english:"Skeledirge",japanese:"ラウドボーン"},descriptions:{korean:"",english:"The fiery bird changes shape when Skeledirge sings. Rumor has it that the bird was born when the fireball on Skeledirge’s head gained a soul.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",height:16,weight:3265},{id:912,names:{korean:"꾸왁스",english:"Quaxly",japanese:"クワッス"},descriptions:{korean:"",english:'This Pokémon migrated to Paldea from distant lands long ago. The gel secreted by its feathers repels water and grime."',japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",height:5,weight:61},{id:913,names:{korean:"아꾸왁",english:"Quaxwell",japanese:"ウェルカモ"},descriptions:{korean:"",english:"These Pokémon constantly run through shallow waters to train their legs, then compete with each other to see which of them kicks most gracefully.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png",height:12,weight:215},{id:914,names:{korean:"웨이니발",english:"Quaquaval",japanese:"ウェーニバル"},descriptions:{korean:"",english:"A single kick from a Quaquaval can send a truck rolling. This Pokémon uses its powerful legs to perform striking dances from far-off lands.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",height:18,weight:619},{id:915,names:{korean:"맛보돈",english:"Lechonk",japanese:"グルトン"},descriptions:{korean:"",english:"It searches for food all day. It possesses a keen sense of smell but doesn’t use it for anything other than foraging.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png",height:5,weight:102},{id:916,names:{korean:"퍼퓨돈",english:"Oinkologne",japanese:"パフュートン"},descriptions:{korean:"",english:"Oinkologne is proud of its fine, glossy skin. It emits a concentrated scent from the tip of its tail.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",height:10,weight:1200},{id:917,names:{korean:"타랜툴라",english:"Tarountula",japanese:"タマンチュラ"},descriptions:{korean:"",english:"The ball of threads wrapped around its body is elastic enough to deflect the scythes of Scyther, this Pokémon’s natural enemy.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png",height:3,weight:40},{id:918,names:{korean:"트래피더",english:"Spidops",japanese:"ワナイダー"},descriptions:{korean:"",english:"It clings to branches and ceilings using its threads and moves without a sound. It takes out its prey before the prey even notices it.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",height:10,weight:165},{id:919,names:{korean:"콩알뚜기",english:"Nymble",japanese:"マメバッタ"},descriptions:{korean:"",english:"It has its third set of legs folded up. When it’s in a tough spot, this Pokémon jumps over 30 feet using the strength of its legs.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png",height:2,weight:10},{id:920,names:{korean:"엑스레그",english:"Lokix",japanese:"エクスレッグ"},descriptions:{korean:"",english:"When it decides to fight all out, it stands on its previously folded legs to enter Showdown Mode. It neutralizes its enemies in short order.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",height:10,weight:175},{id:921,names:{korean:"빠모",english:"Pawmi",japanese:"パモ"},descriptions:{korean:"",english:"It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png",height:3,weight:25},{id:922,names:{korean:"빠모트",english:"Pawmo",japanese:"パモット"},descriptions:{korean:"",english:"When its group is attacked, Pawmo is the first to leap into battle, defeating enemies with a fighting technique that utilizes electric shocks.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png",height:4,weight:65},{id:923,names:{korean:"빠르모트",english:"Pawmot",japanese:"パーモット"},descriptions:{korean:"",english:"This Pokémon normally is slow to react, but once it enters battle, it will strike down its enemies with lightning-fast movements.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",height:9,weight:410},{id:924,names:{korean:"두리쥐",english:"Tandemaus",japanese:"ワッカネズミ"},descriptions:{korean:"",english:"Exhibiting great teamwork, they use their incisors to cut pieces out of any material that might be useful for a nest, then make off with them.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png",height:3,weight:18},{id:925,names:{korean:"파밀리쥐",english:"Maushold",japanese:"イッカネズミ"},descriptions:{korean:"",english:"The two little ones just appeared one day. The group might be a family of related Pokémon, but nobody knows for sure.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",height:3,weight:23},{id:926,names:{korean:"쫀도기",english:"Fidough",japanese:"パピモッチ"},descriptions:{korean:"",english:"This Pokémon is smooth and moist to the touch. Yeast in Fidough’s breath induces fermentation in the Pokémon’s vicinity.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png",height:3,weight:109},{id:927,names:{korean:"바우첼",english:"Dachsbun",japanese:"バウッツェル"},descriptions:{korean:"",english:"The pleasant aroma that emanates from this Pokémon’s body helps wheat grow, so Dachsbun has been treasured by farming villages.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",height:5,weight:149},{id:928,names:{korean:"미니브",english:"Smoliv",japanese:"ミニーブ"},descriptions:{korean:"",english:"It protects itself from enemies by emitting oil from the fruit on its head. This oil is bitter and astringent enough to make someone flinch.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png",height:3,weight:65},{id:929,names:{korean:"올리뇨",english:"Dolliv",japanese:"オリーニョ"},descriptions:{korean:"",english:"Dolliv shares its tasty, fresh-scented oil with others. This species has coexisted with humans since times long gone.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png",height:6,weight:119},{id:930,names:{korean:"올리르바",english:"Arboliva",japanese:"オリーヴァ"},descriptions:{korean:"",english:"This calm Pokémon is very compassionate. It will share its delicious, nutrient-rich oil with weakened Pokémon.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",height:14,weight:482},{id:931,names:{korean:"시비꼬",english:"Squawkabilly",japanese:"イキリンコ"},descriptions:{korean:"",english:"These Pokémon prefer to live in cities. They form flocks based on the color of their feathers, and they fight over territory.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",height:6,weight:24},{id:932,names:{korean:"베베솔트",english:"Nacli",japanese:"コジオ"},descriptions:{korean:"",english:"It was born in a layer of rock salt deep under the earth. This species was particularly treasured in the old days, as they would share precious salt.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png",height:4,weight:160},{id:933,names:{korean:"스태솔트",english:"Naclstack",japanese:"ジオヅム"},descriptions:{korean:"",english:"This Pokémon dry cures its prey by spraying salt over them. The curing process steals away the water in the prey’s body.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png",height:6,weight:1050},{id:934,names:{korean:"콜로솔트",english:"Garganacl",japanese:"キョジオーン"},descriptions:{korean:"",english:"Garganacl will rub its fingertips together and sprinkle injured Pokémon with salt. Even severe wounds will promptly heal afterward.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",height:23,weight:2400},{id:935,names:{korean:"카르본",english:"Charcadet",japanese:"カルボウ"},descriptions:{korean:"",english:"Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png",height:6,weight:105},{id:936,names:{korean:"카디나르마",english:"Armarouge",japanese:"グレンアルマ"},descriptions:{korean:"",english:"Armarouge evolved through the use of a set of armor that belonged to a distinguished warrior. This Pokémon is incredibly loyal.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",height:15,weight:850},{id:937,names:{korean:"파라블레이즈",english:"Ceruledge",japanese:"ソウブレイズ"},descriptions:{korean:"",english:"The fiery blades on its arms burn fiercely with the lingering resentment of a sword wielder who fell before accomplishing their goal.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",height:16,weight:620},{id:938,names:{korean:"빈나두",english:"Tadbulb",japanese:"ズピカ"},descriptions:{korean:"",english:"Tadbulb shakes its tail to generate electricity. If it senses danger, it will make its head blink on and off to alert its allies.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png",height:3,weight:4},{id:939,names:{korean:"찌리배리",english:"Bellibolt",japanese:"ハラバリー"},descriptions:{korean:"",english:"When this Pokémon expands and contracts its wobbly body, the belly-button dynamo in its stomach produces a huge amount of electricity.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",height:12,weight:1130},{id:940,names:{korean:"찌리비",english:"Wattrel",japanese:"カイデン"},descriptions:{korean:"",english:"When its wings catch the wind, the bones within produce electricity. This Pokémon dives into the ocean, catching prey by electrocuting them.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png",height:4,weight:36},{id:941,names:{korean:"찌리비크",english:"Kilowattrel",japanese:"タイカイデン"},descriptions:{korean:"",english:"Kilowattrel inflates its throat sac to amplify its electricity. By riding the wind, this Pokémon can fly over 430 miles in a day.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",height:14,weight:386},{id:942,names:{korean:"오라티프",english:"Maschiff",japanese:"オラチフ"},descriptions:{korean:"",english:"It always scowls in an attempt to make opponents take it seriously, but even crying children will burst into laughter when they see Maschiff’s face.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png",height:5,weight:160},{id:943,names:{korean:"마피티프",english:"Mabosstiff",japanese:"マフィティフ"},descriptions:{korean:"",english:"This Pokémon can store energy in its large dewlap. Mabosstiff unleashes this energy all at once to blow away enemies.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",height:11,weight:610},{id:944,names:{korean:"땃쭈르",english:"Shroodle",japanese:"シルシュルー"},descriptions:{korean:"",english:"Though usually a mellow Pokémon, it will sink its sharp, poison-soaked front teeth into any that anger it, causing paralysis in the object of its ire.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png",height:2,weight:7},{id:945,names:{korean:"태깅구르",english:"Grafaiai",japanese:"タギングル"},descriptions:{korean:"",english:"The color of the poisonous saliva depends on what the Pokémon eats. Grafaiai covers its fingers in its saliva and draws patterns on trees in forests.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",height:7,weight:272},{id:946,names:{korean:"그푸리",english:"Bramblin",japanese:"アノクサ"},descriptions:{korean:"",english:"A soul unable to move on to the afterlife was blown around by the wind until it got tangled up with dried grass and became a Pokémon.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png",height:6,weight:6},{id:947,names:{korean:"공푸리",english:"Brambleghast",japanese:"アノホラグサ"},descriptions:{korean:"",english:"It will open the branches of its head to envelop its prey. Once it absorbs all the life energy it needs, it expels the prey and discards it.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",height:12,weight:60},{id:948,names:{korean:"들눈해",english:"Toedscool",japanese:"ノノクラゲ"},descriptions:{korean:"",english:"Toedscool lives in muggy forests. The flaps that fall from its body are chewy and very delicious.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png",height:9,weight:330},{id:949,names:{korean:"육파리",english:"Toedscruel",japanese:"リククラゲ"},descriptions:{korean:"",english:"These Pokémon gather into groups and form colonies deep within forests. They absolutely hate it when strangers approach.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",height:19,weight:580},{id:950,names:{korean:"절벼게",english:"Klawf",japanese:"ガケガニ"},descriptions:{korean:"",english:"Klawf hangs upside-down from cliffs, waiting for prey. But Klawf can’t remain in this position for long because its blood rushes to its head.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",height:13,weight:790},{id:951,names:{korean:"캡싸이",english:"Capsakid",japanese:"カプサイジ"},descriptions:{korean:"",english:"The more sunlight this Pokémon bathes in, the more spicy chemicals are produced by its body, and thus the spicier its moves become.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png",height:3,weight:30},{id:952,names:{korean:"스코빌런",english:"Scovillain",japanese:"スコヴィラン"},descriptions:{korean:"",english:"The red head converts spicy chemicals into fire energy and blasts the surrounding area with a super spicy stream of flame.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",height:9,weight:150},{id:953,names:{korean:"구르데",english:"Rellor",japanese:"シガロコ"},descriptions:{korean:"",english:"This Pokémon creates a mud ball by mixing sand and dirt with psychic energy. It treasures its mud ball more than its own life.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png",height:2,weight:10},{id:954,names:{korean:"베라카스",english:"Rabsca",japanese:"ベラカス"},descriptions:{korean:"",english:"The body that supports the ball barely moves. Therefore, it is thought that the true body of this Pokémon is actually inside the ball.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",height:3,weight:35},{id:955,names:{korean:"하느라기",english:"Flittle",japanese:"ヒラヒナ"},descriptions:{korean:"",english:"Flittle’s toes levitate about half an inch above the ground because of the psychic power emitted from the frills on the Pokémon’s belly.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png",height:2,weight:15},{id:956,names:{korean:"클레스퍼트라",english:"Espathra",japanese:"クエスパトラ"},descriptions:{korean:"",english:"It immobilizes opponents by bathing them in psychic power from its large eyes. Despite its appearance, it has a vicious temperament.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",height:19,weight:900},{id:957,names:{korean:"어리짱",english:"Tinkatink",japanese:"カヌチャン"},descriptions:{korean:"",english:"It swings its handmade hammer around to protect itself, but the hammer is often stolen by Pokémon that eat metal.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png",height:4,weight:89},{id:958,names:{korean:"벼리짱",english:"Tinkatuff",japanese:"ナカヌチャン"},descriptions:{korean:"",english:"This Pokémon will attack groups of Pawniard and Bisharp, gathering metal from them in order to create a large and sturdy hammer.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png",height:7,weight:591},{id:959,names:{korean:"두드리짱",english:"Tinkaton",japanese:"デカヌチャン"},descriptions:{korean:"",english:"This intelligent Pokémon has a very daring disposition. It knocks rocks into the sky with its hammer, aiming for flying Corviknight.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",height:7,weight:1128},{id:960,names:{korean:"바다그다",english:"Wiglett",japanese:"ウミディグダ"},descriptions:{korean:"",english:"This Pokémon can pick up the scent of a Veluza just over 65 feet away and will hide itself in the sand.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png",height:12,weight:18},{id:961,names:{korean:"바닥트리오",english:"Wugtrio",japanese:"ウミトリオ"},descriptions:{korean:"",english:"It has a vicious temperament, contrary to what its appearance may suggest. It wraps its long bodies around prey, then drags the prey into its den.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",height:12,weight:54},{id:962,names:{korean:"떨구새",english:"Bombirdier",japanese:"オトシドリ"},descriptions:{korean:"",english:"It gathers things up in an apron made from shed feathers added to the Pokémon’s chest feathers, then drops those things from high places for fun.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",height:15,weight:429},{id:963,names:{korean:"맨돌핀",english:"Finizen",japanese:"ナミイルカ"},descriptions:{korean:"",english:"It likes playing with others of its kind using the water ring on its tail. It uses ultrasonic waves to sense the emotions of other living creatures.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png",height:13,weight:602},{id:964,names:{korean:"돌핀맨",english:"Palafin",japanese:"イルカマン"},descriptions:{korean:"",english:"This Pokémon changes its appearance if it hears its allies calling for help. Palafin will never show anybody its moment of transformation.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",height:13,weight:602},{id:965,names:{korean:"부르롱",english:"Varoom",japanese:"ブロロン"},descriptions:{korean:"",english:"It is said that this Pokémon was born when an unknown poison Pokémon entered and inspirited an engine left at a scrap-processing factory.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png",height:10,weight:350},{id:966,names:{korean:"부르르룸",english:"Revavroom",japanese:"ブロロローム"},descriptions:{korean:"",english:"It creates a gas out of poison and minerals from rocks. It then detonates the gas in its cylinders—now numbering eight—to generate energy.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",height:18,weight:1200},{id:967,names:{korean:"모토마",english:"Cyclizar",japanese:"モトトカゲ"},descriptions:{korean:"",english:"Apparently Cyclizar has been allowing people to ride on its back since ancient times. Depictions of this have been found in 10,000-year-old murals.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",height:16,weight:630},{id:968,names:{korean:"꿈트렁",english:"Orthworm",japanese:"ミミズズ"},descriptions:{korean:"",english:"When attacked, this Pokémon will wield the tendrils on its body like fists and pelt the opponent with a storm of punches.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",height:25,weight:3100},{id:969,names:{korean:"초롱순",english:"Glimmet",japanese:"キラーメ"},descriptions:{korean:"",english:"It absorbs nutrients from cave walls. The petals it wears are made of crystallized poison.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png",height:7,weight:80},{id:970,names:{korean:"킬라플로르",english:"Glimmora",japanese:"キラフロル"},descriptions:{korean:"",english:"When this Pokémon detects danger, it will open up its crystalline petals and fire beams from its conical body.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",height:15,weight:450},{id:971,names:{korean:"망망이",english:"Greavard",japanese:"ボチ"},descriptions:{korean:"",english:"It is said that a dog Pokémon that died in the wild without ever interacting with a human was reborn as this Pokémon.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png",height:6,weight:350},{id:972,names:{korean:"묘두기",english:"Houndstone",japanese:"ハカドッグ"},descriptions:{korean:"",english:"Houndstone spends most of its time sleeping in graveyards. Among all the dog Pokémon, this one is most loyal to its master.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",height:20,weight:150},{id:973,names:{korean:"꼬이밍고",english:"Flamigo",japanese:"カラミンゴ"},descriptions:{korean:"",english:"This Pokémon apparently ties the base of its neck into a knot so that energy stored in its belly does not escape from its beak.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",height:16,weight:370},{id:974,names:{korean:"터벅고래",english:"Cetoddle",japanese:"アルクジラ"},descriptions:{korean:"",english:"This species left the ocean and began living on land a very long time ago. It seems to be closely related to Wailmer.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png",height:12,weight:450},{id:975,names:{korean:"우락고래",english:"Cetitan",japanese:"ハルクジラ"},descriptions:{korean:"",english:"This Pokémon wanders around snowy, icy areas. It protects its body with powerful muscles and a thick layer of fat under its skin.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",height:45,weight:7e3},{id:976,names:{korean:"가비루사",english:"Veluza",japanese:"ミガルーサ"},descriptions:{korean:"",english:"When Veluza discards unnecessary flesh, its mind becomes honed and its psychic power increases. The spare flesh has a mild but delicious flavor.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",height:25,weight:900},{id:977,names:{korean:"어써러셔",english:"Dondozo",japanese:"ヘイラッシャ"},descriptions:{korean:"",english:"This Pokémon is a glutton, but it’s bad at getting food. It teams up with a Tatsugiri to catch prey.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",height:120,weight:2200},{id:978,names:{korean:"싸리용",english:"Tatsugiri",japanese:"シャリタツ"},descriptions:{korean:"",english:"This is a small dragon Pokémon. It lives inside the mouth of Dondozo to protect itself from enemies on the outside.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",height:3,weight:80},{id:979,names:{korean:"저승갓숭",english:"Annihilape",japanese:"コノヨザル"},descriptions:{korean:"",english:"When its anger rose beyond a critical point, this Pokémon gained power that is unfettered by the limits of its physical body.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",height:12,weight:560},{id:980,names:{korean:"토오",english:"Clodsire",japanese:"ドオー"},descriptions:{korean:"",english:"When attacked, this Pokémon will retaliate by sticking thick spines out from its body. It’s a risky move that puts everything on the line.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",height:18,weight:2230},{id:981,names:{korean:"키키링",english:"Farigiraf",japanese:"リキキリン"},descriptions:{korean:"",english:"Now that the brain waves from the head and tail are synced up, the psychic power of this Pokémon is 10 times stronger than Girafarig’s.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",height:32,weight:1600},{id:982,names:{korean:"노고고치",english:"Dudunsparce",japanese:"ノココッチ"},descriptions:{korean:"",english:"This Pokémon uses its hard tail to make its nest by boring holes into bedrock deep underground. The nest can reach lengths of over six miles.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",height:36,weight:392},{id:983,names:{korean:"대도각참",english:"Kingambit",japanese:"ドドゲザン"},descriptions:{korean:"",english:"Only a Bisharp that stands above all others in its vast army can evolve into Kingambit.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",height:20,weight:1200},{id:984,names:{korean:"위대한엄니",english:"Great Tusk",japanese:"イダイナキバ"},descriptions:{korean:"",english:"Sightings of this Pokémon have occurred in recent years. The name Great Tusk was taken from a creature listed in a certain book.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",height:22,weight:3200},{id:985,names:{korean:"우렁찬꼬리",english:"Scream Tail",japanese:"サケブシッポ"},descriptions:{korean:"",english:"There has been only one reported sighting of this Pokémon. It resembles a mysterious creature depicted in an old expedition journal.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",height:12,weight:80},{id:986,names:{korean:"사나운버섯",english:"Brute Bonnet",japanese:"アラブルタケ"},descriptions:{korean:"",english:"It is possible that the creature listed as Brute Bonnet in a certain book could actually be this Pokémon.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",height:12,weight:210},{id:987,names:{korean:"날개치는머리",english:"Flutter Mane",japanese:"ハバタクカミ"},descriptions:{korean:"",english:"This Pokémon has characteristics similar to those of Flutter Mane, a creature mentioned in a certain book.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",height:14,weight:40},{id:988,names:{korean:"땅을기는날개",english:"Slither Wing",japanese:"チヲハウハネ"},descriptions:{korean:"",english:"This mysterious Pokémon has some similarities to a creature that an old book introduced as Slither Wing.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",height:32,weight:920},{id:989,names:{korean:"모래털가죽",english:"Sandy Shocks",japanese:"スナノケガワ"},descriptions:{korean:"",english:"No records exist of this Pokémon being caught. Data is lacking, but the Pokémon’s traits match up with a creature shown in an expedition journal.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",height:23,weight:600},{id:990,names:{korean:"무쇠바퀴",english:"Iron Treads",japanese:"テツノワダチ"},descriptions:{korean:"",english:"This Pokémon closely resembles a scientific weapon that a paranormal magazine claimed was sent to this planet by aliens.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",height:9,weight:2400},{id:991,names:{korean:"무쇠보따리",english:"Iron Bundle",japanese:"テツノツツミ"},descriptions:{korean:"",english:"Its shape is similar to a robot featured in a paranormal magazine article. The robot was said to have been created by an ancient civilization.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",height:6,weight:110},{id:992,names:{korean:"무쇠손",english:"Iron Hands",japanese:"テツノカイナ"},descriptions:{korean:"",english:"It is very similar to a cyborg covered exclusively by a paranormal magazine. The cyborg was said to be the modified form of a certain athlete.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",height:18,weight:3807},{id:993,names:{korean:"무쇠머리",english:"Iron Jugulis",japanese:"テツノコウベ"},descriptions:{korean:"",english:"It resembles a certain Pokémon introduced in a paranormal magazine, described as the offspring of a Hydreigon that fell in love with a robot.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",height:13,weight:1110},{id:994,names:{korean:"무쇠독나방",english:"Iron Moth",japanese:"テツノドクガ"},descriptions:{korean:"",english:"This Pokémon resembles an unknown object described in a paranormal magazine as a UFO sent to observe humanity.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",height:12,weight:360},{id:995,names:{korean:"무쇠가시",english:"Iron Thorns",japanese:"テツノイバラ"},descriptions:{korean:"",english:"It has some similarities to a Pokémon introduced in a dubious magazine as a Tyranitar from one billion years into the future.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",height:16,weight:3030},{id:996,names:{korean:"드니차",english:"Frigibax",japanese:"セビエ"},descriptions:{korean:"",english:"Frigibax absorbs heat through its dorsal fin and converts the heat into ice energy. The higher the temperature, the more energy Frigibax stores.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png",height:5,weight:170},{id:997,names:{korean:"드니꽁",english:"Arctibax",japanese:"セゴール"},descriptions:{korean:"",english:"Arctibax freezes the air around it, protecting its face with an ice mask and turning its dorsal fin into a blade of ice.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png",height:8,weight:300},{id:998,names:{korean:"드닐레이브",english:"Baxcalibur",japanese:"セグレイブ"},descriptions:{korean:"",english:"This Pokémon blasts cryogenic air out from its mouth. This air can instantly freeze even liquid-hot lava.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",height:21,weight:2100},{id:999,names:{korean:"모으령",english:"Gimmighoul",japanese:"コレクレー"},descriptions:{korean:"",english:"This Pokémon was born inside a treasure chest about 1,500 years ago. It sucks the life-force out of scoundrels who try to steal the treasure.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png",height:3,weight:50},{id:1e3,names:{korean:"타부자고",english:"Gholdengo",japanese:"サーフゴー"},descriptions:{korean:"",english:"Its body seems to be made up of 1,000 coins. This Pokémon gets along well with others and is quick to make friends with anybody.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",height:12,weight:300},{id:1001,names:{korean:"총지엔",english:"Wo-Chien",japanese:"チオンジェン"},descriptions:{korean:"",english:"The grudge of a person punished for writing the king’s evil deeds upon wooden tablets has clad itself in dead leaves to become a Pokémon.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",height:15,weight:742},{id:1002,names:{korean:"파오젠",english:"Chien-Pao",japanese:"パオジアン"},descriptions:{korean:"",english:"This Pokémon can control 100 tons of fallen snow. It plays around innocently by leaping in and out of avalanches it has caused.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",height:19,weight:1522},{id:1003,names:{korean:"딩루",english:"Ting-Lu",japanese:"ディンルー"},descriptions:{korean:"",english:"The fear poured into an ancient ritual vessel has clad itself in rocks and dirt to become a Pokémon.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",height:27,weight:6997},{id:1004,names:{korean:"위유이",english:"Chi-Yu",japanese:"イーユイ"},descriptions:{korean:"",english:"It controls flames burning at over 5,400 degrees Fahrenheit. It casually swims through the sea of lava it creates by melting rock and sand.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",height:4,weight:49},{id:1005,names:{korean:"고동치는달",english:"Roaring Moon",japanese:"トドロクツキ"},descriptions:{korean:"",english:"It is possible that this is the creature listed as Roaring Moon in an expedition journal that still holds many mysteries.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",height:20,weight:3800},{id:1006,names:{korean:"무쇠무인",english:"Iron Valiant",japanese:"テツノブジン"},descriptions:{korean:"",english:"It has some similarities to a mad scientist’s invention covered in a paranormal magazine.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",height:14,weight:350},{id:1007,names:{korean:"코라이돈",english:"Koraidon",japanese:"コライドン"},descriptions:{korean:"",english:"This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",height:25,weight:3030},{id:1008,names:{korean:"미라이돈",english:"Miraidon",japanese:"ミライドン"},descriptions:{korean:"",english:"Much remains unknown about this creature. It resembles Cyclizar, but it is far more ruthless and powerful.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",height:35,weight:2400},{id:1009,names:{korean:"굽이치는물결",english:"Walking Wake",japanese:"ウネルミナモ"},descriptions:{korean:"",english:"This ferocious creature is shrouded in mystery. It's named after an aquatic monster mentioned in an old expedition journal.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",height:35,weight:2800},{id:1010,names:{korean:"무쇠잎새",english:"Iron Leaves",japanese:"テツノイサハ"},descriptions:{korean:"",english:"Many of its physical characteristics match those of a Virizion from the future that was covered in a paranormal magazine.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",height:15,weight:1250},{id:1011,names:{korean:"과미르",english:"Dipplin",japanese:"カミッチュ"},descriptions:{korean:"",english:"Dipplin is two creatures in one Pokémon. Its evolution was triggered by a special apple grown only in one place.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png",height:4,weight:97},{id:1012,names:{korean:"차데스",english:"Poltchageist",japanese:"チャデス"},descriptions:{korean:"",english:"Supposedly, the regrets of a tea ceremony master who died before perfecting his craft lingered in some matcha and became a Pokémon.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png",height:1,weight:11},{id:1013,names:{korean:"그우린차",english:"Sinistcha",japanese:"ヤバソチャ"},descriptions:{korean:"",english:"It pretends to be tea, trying to fool people into drinking it so it can drain their life-force. Its ruse is generally unsuccessful.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png",height:2,weight:22},{id:1014,names:{korean:"조타구",english:"Okidogi",japanese:"イイネイヌ"},descriptions:{korean:"",english:"After all its muscles were stimulated by the toxic chain around its neck, Okidogi transformed and gained a powerful physique.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png",height:18,weight:922},{id:1015,names:{korean:"이야후",english:"Munkidori",japanese:"マシマシラ"},descriptions:{korean:"",english:"The chain is made from toxins that enhance capabilities. It stimulated Munkidori's brain and caused the Pokémon's psychic powers to bloom.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png",height:10,weight:122},{id:1016,names:{korean:"기로치",english:"Fezandipiti",japanese:"キチキギス"},descriptions:{korean:"",english:"Fezandipiti owes its beautiful looks and lovely voice to the toxic stimulants emanating from the chain wrapped around its body.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png",height:14,weight:301},{id:1017,names:{korean:"오거폰",english:"Ogerpon",japanese:"オーガポン"},descriptions:{korean:"",english:"This Pokémon's type changes based on which mask it's wearing. It confounds its enemies with nimble movements and kicks.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png",height:12,weight:398},{id:1018,names:{korean:"브리두라스",english:"Archaludon",japanese:"ブリジュラス"},descriptions:{korean:"",english:"It gathers static electricity from its surroundings. The beams it launches when down on all fours are tremendously powerful.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png",height:20,weight:600},{id:1019,names:{korean:"과미드라",english:"Hydrapple",japanese:"カミツオロチ"},descriptions:{korean:"",english:"Seven syrpents live inside an apple made of syrup. The syrpent in the center is the commander.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png",height:18,weight:930},{id:1020,names:{korean:"꿰뚫는화염",english:"Gouging Fire",japanese:"ウガツホムラ"},descriptions:{korean:"",english:"There are scant few reports of this creature being sighted. One short video shows it rampaging and spouting pillars of flame.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png",height:35,weight:5900},{id:1021,names:{korean:"날뛰는우레",english:"Raging Bolt",japanese:"タケルライコ"},descriptions:{korean:"",english:"It's said to incinerate everything around it with lightning launched from its fur. Very little is known about this creature.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png",height:52,weight:4800},{id:1022,names:{korean:"무쇠암석",english:"Iron Boulder",japanese:"テツノイワオ"},descriptions:{korean:"",english:"It resembles a Pokémon described in a dubious magazine as a Terrakion that had been modified by an evil organization.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png",height:15,weight:1625},{id:1023,names:{korean:"무쇠감투",english:"Iron Crown",japanese:"テツノカシラ"},descriptions:{korean:"",english:"It resembles a mysterious object introduced in a paranormal magazine as a cutting-edge weapon shaped like a Cobalion.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png",height:16,weight:1560},{id:1024,names:{korean:"테라파고스",english:"Terapagos",japanese:"テラパゴス"},descriptions:{korean:"",english:"Terapagos protects itself using its power to transform energy into hard crystals. This Pokémon is the source of the Terastal phenomenon.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png",height:2,weight:65},{id:10001,names:{korean:"테오키스",english:"Deoxys",japanese:"デオキシス"},descriptions:{korean:`운석에 붙어 있던
우주 바이러스의 DNA가
변이하여 생겨난 포켓몬이다.`,english:`The DNA of a space virus underwent a
sudden mutation upon exposure to a
laser beam and resulted in DEOXYS.\fThe crystalline organ on this POKéMON’s
chest appears to be its brain.`,japanese:`隕石に　付着していた
宇宙ウイルスの　ＤＮＡが
変異して　生まれた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png",height:17,weight:608},{id:10002,names:{korean:"테오키스",english:"Deoxys",japanese:"デオキシス"},descriptions:{korean:`운석에 붙어 있던
우주 바이러스의 DNA가
변이하여 생겨난 포켓몬이다.`,english:`The DNA of a space virus underwent a
sudden mutation upon exposure to a
laser beam and resulted in DEOXYS.\fThe crystalline organ on this POKéMON’s
chest appears to be its brain.`,japanese:`隕石に　付着していた
宇宙ウイルスの　ＤＮＡが
変異して　生まれた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png",height:17,weight:608},{id:10003,names:{korean:"테오키스",english:"Deoxys",japanese:"デオキシス"},descriptions:{korean:`운석에 붙어 있던
우주 바이러스의 DNA가
변이하여 생겨난 포켓몬이다.`,english:`The DNA of a space virus underwent a
sudden mutation upon exposure to a
laser beam and resulted in DEOXYS.\fThe crystalline organ on this POKéMON’s
chest appears to be its brain.`,japanese:`隕石に　付着していた
宇宙ウイルスの　ＤＮＡが
変異して　生まれた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png",height:17,weight:608},{id:10004,names:{korean:"도롱마담",english:"Wormadam",japanese:"ミノマダム"},descriptions:{korean:`진화한 장소에 따라 모습이
바뀐다. 가까이 있는 재료가
몸의 일부가 된다.`,english:`When BURMY evolved, its cloak
became a part of this Pokémon’s
body. The cloak is never shed.`,japanese:`進化した　場所によって
姿が　変わる。身近にある　材料が
体の　一部に　なるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png",height:5,weight:65},{id:10005,names:{korean:"도롱마담",english:"Wormadam",japanese:"ミノマダム"},descriptions:{korean:`진화한 장소에 따라 모습이
바뀐다. 가까이 있는 재료가
몸의 일부가 된다.`,english:`When BURMY evolved, its cloak
became a part of this Pokémon’s
body. The cloak is never shed.`,japanese:`進化した　場所によって
姿が　変わる。身近にある　材料が
体の　一部に　なるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png",height:5,weight:65},{id:10006,names:{korean:"쉐이미",english:"Shaymin",japanese:"シェイミ"},descriptions:{korean:`대기의 독소를 분해해서
거칠어진 대지를 일순간에
꽃밭으로 만드는 힘을 가지고 있다.`,english:`It lives in flower patches and
avoids detection by curling up
to look like a flowering plant.`,japanese:`大気の　毒素を　分解して
荒れた　大地を　一瞬のうちに
花畑にする　力を　持つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png",height:4,weight:52},{id:10007,names:{korean:"기라티나",english:"Giratina",japanese:"ギラティナ"},descriptions:{korean:`상식이 통하지 않는
이 세상의 이면에 있다고 불리는
깨어진 세계에 서식한다.`,english:`A Pokémon that is said to live in a
world on the reverse side of ours.
It appears in an ancient cemetery.`,japanese:`常識の　通用しない
この世の　裏側にあると　言われる
破れた世界に　生息する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png",height:69,weight:6500},{id:10008,names:{korean:"로토무",english:"Rotom",japanese:"ロトム"},descriptions:{korean:`특수한 모터를 움직이는
동력원으로서 긴 시간 동안
연구되었던 포켓몬이다.`,english:`Its body is composed of plasma. It
is known to infiltrate electronic
devices and wreak havoc.`,japanese:`特殊な　モーターを　動かす
動力源として　長い　あいだ
研究されていた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png",height:3,weight:3},{id:10009,names:{korean:"로토무",english:"Rotom",japanese:"ロトム"},descriptions:{korean:`특수한 모터를 움직이는
동력원으로서 긴 시간 동안
연구되었던 포켓몬이다.`,english:`Its body is composed of plasma. It
is known to infiltrate electronic
devices and wreak havoc.`,japanese:`特殊な　モーターを　動かす
動力源として　長い　あいだ
研究されていた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png",height:3,weight:3},{id:10010,names:{korean:"로토무",english:"Rotom",japanese:"ロトム"},descriptions:{korean:`특수한 모터를 움직이는
동력원으로서 긴 시간 동안
연구되었던 포켓몬이다.`,english:`Its body is composed of plasma. It
is known to infiltrate electronic
devices and wreak havoc.`,japanese:`特殊な　モーターを　動かす
動力源として　長い　あいだ
研究されていた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png",height:3,weight:3},{id:10011,names:{korean:"로토무",english:"Rotom",japanese:"ロトム"},descriptions:{korean:`특수한 모터를 움직이는
동력원으로서 긴 시간 동안
연구되었던 포켓몬이다.`,english:`Its body is composed of plasma. It
is known to infiltrate electronic
devices and wreak havoc.`,japanese:`特殊な　モーターを　動かす
動力源として　長い　あいだ
研究されていた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png",height:3,weight:3},{id:10012,names:{korean:"로토무",english:"Rotom",japanese:"ロトム"},descriptions:{korean:`특수한 모터를 움직이는
동력원으로서 긴 시간 동안
연구되었던 포켓몬이다.`,english:`Its body is composed of plasma. It
is known to infiltrate electronic
devices and wreak havoc.`,japanese:`特殊な　モーターを　動かす
動力源として　長い　あいだ
研究されていた　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png",height:3,weight:3},{id:10013,names:{korean:"캐스퐁",english:"Castform",japanese:"ポワルン"},descriptions:{korean:`기온이나 습도의 변화가
몸의 세포에 영향을 주어
모습을 바꾸는 포켓몬이다.`,english:`CASTFORM’s appearance changes with
the weather.
This POKéMON gained the ability to use\fthe vast power of nature to protect
its tiny body.`,japanese:`気温や　湿度の　変化が
体の　細胞に　影響して
姿を　変える　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10013.png",height:3,weight:8},{id:10014,names:{korean:"캐스퐁",english:"Castform",japanese:"ポワルン"},descriptions:{korean:`기온이나 습도의 변화가
몸의 세포에 영향을 주어
모습을 바꾸는 포켓몬이다.`,english:`CASTFORM’s appearance changes with
the weather.
This POKéMON gained the ability to use\fthe vast power of nature to protect
its tiny body.`,japanese:`気温や　湿度の　変化が
体の　細胞に　影響して
姿を　変える　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png",height:3,weight:8},{id:10015,names:{korean:"캐스퐁",english:"Castform",japanese:"ポワルン"},descriptions:{korean:`기온이나 습도의 변화가
몸의 세포에 영향을 주어
모습을 바꾸는 포켓몬이다.`,english:`CASTFORM’s appearance changes with
the weather.
This POKéMON gained the ability to use\fthe vast power of nature to protect
its tiny body.`,japanese:`気温や　湿度の　変化が
体の　細胞に　影響して
姿を　変える　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10015.png",height:3,weight:8},{id:10016,names:{korean:"배쓰나이",english:"Basculin",japanese:"バスラオ"},descriptions:{korean:`아주 난폭하고 항상 빨강과
파랑의 배쓰나이는 다투고 있다.
먹으면 의외로 맛있다고 한다.`,english:`Red and blue Basculin get along so
poorly, they’ll start fighting instantly.
These Pokémon are very hostile.`,japanese:`とても　乱暴で　いつも　あかと
あおの　バスラオは　争っている。
食べると　意外と　おいしいらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10016.png",height:10,weight:180},{id:10017,names:{korean:"불비달마",english:"Darmanitan",japanese:"ヒヒダルマ"},descriptions:{korean:`격렬한 싸움으로 상처 입으면
바위처럼 굳어져 묵상하며
마음을 연마한다.`,english:`Its internal fire burns at 2,500° F,
making enough power that it can
destroy a dump truck with one punch.`,japanese:`激しい　戦いで　傷つくと
岩のように　固まり　黙考して
心を　研ぎ澄ませるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10017.png",height:13,weight:929},{id:10018,names:{korean:"메로엣타",english:"Meloetta",japanese:"メロエッタ"},descriptions:{korean:`메로엣타가 연주하는 선율에는
주위 포켓몬을 기쁘게 하거나
슬프게 할 정도의 힘이 있다.`,english:`Its melodies are sung with a special vocalization
method that can control the feelings of those who
hear it.`,japanese:`メロエッタの　奏でる　旋律は
まわりの　ポケモンを　喜ばせたり
悲しませるほどの　パワーがある。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png",height:6,weight:65},{id:10019,names:{korean:"토네로스",english:"Tornadus",japanese:"トルネロス"},descriptions:{korean:`구름처럼 생긴 에너지체에
하반신이 둘러싸여 있다.
시속 300km로 하늘을 난다.`,english:`The lower half of its body is wrapped in
a cloud of energy. It zooms through
the sky at 200 mph.`,japanese:`雲のような　エネルギー体に
下半身が　包まれている。
時速３００キロで　空を　飛ぶ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png",height:14,weight:630},{id:10020,names:{korean:"볼트로스",english:"Thundurus",japanese:"ボルトロス"},descriptions:{korean:`꼬리의 가시에서 전격을
날린다. 하나지방의 하늘을
날아다니며 번개를 내리친다.`,english:`Countless charred remains mar the
landscape of places through which
Thundurus has passed.`,japanese:`尻尾の　トゲから　電撃を
撃ち出す。イッシュ地方の　空を
飛び回り　雷を　落とす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png",height:30,weight:610},{id:10021,names:{korean:"랜드로스",english:"Landorus",japanese:"ランドロス"},descriptions:{korean:`랜드로스가 찾아온 땅에는
작물에 열매가 많이 열리기 때문에
농지의 신이라고 전해진다.`,english:`Lands visited by Landorus grant such
bountiful crops that it has been hailed
as “The Guardian of the Fields.”`,japanese:`ランドロスが　訪れる　土地は
作物が　たくさん　実るため
畑の神様　と　言われている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png",height:13,weight:680},{id:10022,names:{korean:"큐레무",english:"Kyurem",japanese:"キュレム"},descriptions:{korean:`레시라무와 제크로무를 능가할 정도의
힘을 가졌으나 극저온의
냉기에 봉인되어 있다.`,english:`It generates a powerful, freezing
energy inside itself, but its body became
frozen when the energy leaked out.`,japanese:`失った　体を　真実と
理想で　埋めてくれる　英雄を
待つ　氷の　伝説ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png",height:33,weight:3250},{id:10023,names:{korean:"큐레무",english:"Kyurem",japanese:"キュレム"},descriptions:{korean:`레시라무와 제크로무를 능가할 정도의
힘을 가졌으나 극저온의
냉기에 봉인되어 있다.`,english:`It generates a powerful, freezing
energy inside itself, but its body became
frozen when the energy leaked out.`,japanese:`失った　体を　真実と
理想で　埋めてくれる　英雄を
待つ　氷の　伝説ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png",height:36,weight:3250},{id:10024,names:{korean:"케르디오",english:"Keldeo",japanese:"ケルディオ"},descriptions:{korean:`바다나 강 등의 수면을 달려
세계 곳곳을 뛰어다닌다.
아름다운 물가에 나타난다.`,english:`By blasting water from its hooves, it can
glide across water. It excels at using
leg moves while battling.`,japanese:`海や　川など　水面を　走り
世界中を　駆け巡る。
美しい　水辺に　現れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png",height:14,weight:485},{id:10025,names:{korean:"냐오닉스",english:"Meowstic",japanese:"ニャオニクス"},descriptions:{korean:`위험이 다가오면 귀를 들어 올리고
10톤 트럭을 눌러 부술 정도의
사이코 파워를 방출한다.`,english:`When in danger, it raises its ears and
releases enough psychic power to
grind a 10-ton truck into dust.`,japanese:`危険が　迫ると　耳を　持ち上げ
１０トン　トラックを　ひねりつぶす
サイコパワーを　解放する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10025.png",height:6,weight:85},{id:10026,names:{korean:"킬가르도",english:"Aegislash",japanese:"ギルガルド"},descriptions:{korean:`역대 왕들이 데리고 있었다.
영험한 힘으로 사람이나 포켓몬의
마음을 조종하여 복종하게 한다.`,english:`Generations of kings were attended by these
Pokémon, which used their spectral power to
manipulate and control people and Pokémon.`,japanese:`歴代の　王が　連れていた。
霊力で　人や　ポケモンの
心を　操り　従わせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png",height:17,weight:530},{id:10027,names:{korean:"호바귀",english:"Pumpkaboo",japanese:"バケッチャ"},descriptions:{korean:`성불하지 못한 혼을
호박으로 된 몸속에 담고 있다.
해가 지면 활동하기 시작한다.`,english:`The pumpkin body is inhabited by a spirit
trapped in this world. As the sun sets,
it becomes restless and active.`,japanese:`成仏できない　魂を
カボチャの　体に　入れている。
日暮れと　ともに　動きはじめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10027.png",height:3,weight:35},{id:10028,names:{korean:"호바귀",english:"Pumpkaboo",japanese:"バケッチャ"},descriptions:{korean:`성불하지 못한 혼을
호박으로 된 몸속에 담고 있다.
해가 지면 활동하기 시작한다.`,english:`The pumpkin body is inhabited by a spirit
trapped in this world. As the sun sets,
it becomes restless and active.`,japanese:`成仏できない　魂を
カボチャの　体に　入れている。
日暮れと　ともに　動きはじめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png",height:5,weight:75},{id:10029,names:{korean:"호바귀",english:"Pumpkaboo",japanese:"バケッチャ"},descriptions:{korean:`성불하지 못한 혼을
호박으로 된 몸속에 담고 있다.
해가 지면 활동하기 시작한다.`,english:`The pumpkin body is inhabited by a spirit
trapped in this world. As the sun sets,
it becomes restless and active.`,japanese:`成仏できない　魂を
カボチャの　体に　入れている。
日暮れと　ともに　動きはじめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10029.png",height:8,weight:150},{id:10030,names:{korean:"펌킨인",english:"Gourgeist",japanese:"パンプジン"},descriptions:{korean:`초승달이 뜬 밤에 기분 나쁜 목소리로
노래를 부르며 마을 안을 헤맨다.
그 노래를 들으면 저주를 받는다.`,english:`Singing in eerie voices, they wander
town streets on the night of the new moon.
Anyone who hears their song is cursed.`,japanese:`新月の　夜に　不気味な　声で
歌いながら　街中を　さまよう。
その歌を　聞くと　のろわれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10030.png",height:7,weight:95},{id:10031,names:{korean:"펌킨인",english:"Gourgeist",japanese:"パンプジン"},descriptions:{korean:`초승달이 뜬 밤에 기분 나쁜 목소리로
노래를 부르며 마을 안을 헤맨다.
그 노래를 들으면 저주를 받는다.`,english:`Singing in eerie voices, they wander
town streets on the night of the new moon.
Anyone who hears their song is cursed.`,japanese:`新月の　夜に　不気味な　声で
歌いながら　街中を　さまよう。
その歌を　聞くと　のろわれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10031.png",height:11,weight:140},{id:10032,names:{korean:"펌킨인",english:"Gourgeist",japanese:"パンプジン"},descriptions:{korean:`초승달이 뜬 밤에 기분 나쁜 목소리로
노래를 부르며 마을 안을 헤맨다.
그 노래를 들으면 저주를 받는다.`,english:`Singing in eerie voices, they wander
town streets on the night of the new moon.
Anyone who hears their song is cursed.`,japanese:`新月の　夜に　不気味な　声で
歌いながら　街中を　さまよう。
その歌を　聞くと　のろわれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10032.png",height:17,weight:390},{id:10033,names:{korean:"이상해꽃",english:"Venusaur",japanese:"フシギバナ"},descriptions:{korean:`큰 꽃잎을 펼쳐
햇빛을 받고 있으면
몸에 힘이 넘쳐흐른다.`,english:`The plant blooms
when it is
absorbing solar\fenergy. It stays
on the move to
seek sunlight.`,japanese:`大きな　花びらを　広げ
太陽の　光を　浴びていると
体に　元気が　みなぎっていく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png",height:24,weight:1555},{id:10034,names:{korean:"리자몽",english:"Charizard",japanese:"リザードン"},descriptions:{korean:`입에서 작렬하는 불꽃을
토해낼 때 꼬리의 끝이
더욱 붉고 격렬하게 타오른다.`,english:`Spits fire that
is hot enough to
melt boulders.\fKnown to cause
forest fires
unintentionally.`,japanese:`口から　灼熱の　炎を　吐き出すとき
尻尾の　先は
より　赤く　激しく　燃え上がる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",height:17,weight:1105},{id:10035,names:{korean:"리자몽",english:"Charizard",japanese:"リザードン"},descriptions:{korean:`입에서 작렬하는 불꽃을
토해낼 때 꼬리의 끝이
더욱 붉고 격렬하게 타오른다.`,english:`Spits fire that
is hot enough to
melt boulders.\fKnown to cause
forest fires
unintentionally.`,japanese:`口から　灼熱の　炎を　吐き出すとき
尻尾の　先は
より　赤く　激しく　燃え上がる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",height:17,weight:1005},{id:10036,names:{korean:"거북왕",english:"Blastoise",japanese:"カメックス"},descriptions:{korean:`무거운 몸으로 상대를
덮쳐서 기절시킨다.
위기에 처하면 등껍질에 숨는다.`,english:`A brutal POKéMON
with pressurized
water jets on its\fshell. They are
used for high
speed tackles.`,japanese:`体が　重たく　のしかかって
相手を　気絶させる。
ピンチのときは　殻に　隠れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png",height:16,weight:1011},{id:10037,names:{korean:"후딘",english:"Alakazam",japanese:"フーディン"},descriptions:{korean:`뇌세포는 항상 분열해서
죽을 때까지 늘어나기 때문에
모든 것을 기억해 놓을 수 있다.`,english:`Its brain can out­
perform a super­
computer.\fIts intelligence
quotient is said
to be 5,000.`,japanese:`脳細胞は　いつも　分裂して
死ぬまで　増え続けるので
あらゆることを　覚えておける。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png",height:12,weight:480},{id:10038,names:{korean:"팬텀",english:"Gengar",japanese:"ゲンガー"},descriptions:{korean:`그림자에 모습을 숨긴다.
팬텀이 숨어 있는 방은
온도가 5도 내려간다고 전해진다.`,english:`Under a full moon,
this POKéMON
likes to mimic\fthe shadows of
people and laugh
at their fright.`,japanese:`物陰に　姿を　隠す。
ゲンガーの　潜んでいる　部屋は
温度が　５度　下がるといわれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png",height:14,weight:405},{id:10039,names:{korean:"캥카",english:"Kangaskhan",japanese:"ガルーラ"},descriptions:{korean:`배의 주머니에서 새끼를 키운다.
안전할 때만 새끼를
주머니에서 꺼내어 놀게 한다.`,english:`The infant rarely
ventures out of
its mother's\fprotective pouch
until it is 3
years old.`,japanese:`お腹の　袋で　子育てをする。
安全な　ときだけ　子供を
袋から　出して　遊ばせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png",height:22,weight:1e3},{id:10040,names:{korean:"쁘사이저",english:"Pinsir",japanese:"カイロス"},descriptions:{korean:`2개의 뿔 사이에 먹이를 끼우고
조각날 때까지 놓지 않는다. 조각나지
않으면 저편으로 세게 내던진다.`,english:`If it fails to
crush the victim
in its pincers,\fit will swing it
around and toss
it hard.`,japanese:`２本の　ツノで　獲物を　挟んで
ちぎれるまで　放さない。ちぎれない
ときは　かなたまで　投げ飛ばすのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png",height:17,weight:590},{id:10041,names:{korean:"갸라도스",english:"Gyarados",japanese:"ギャラドス"},descriptions:{korean:`분쟁이 일어난 마을을
다 태워버렸다는 기록이
고문서에 남아 있다.`,english:`Once it begins to rampage, a
GYARADOS will burn everything
down, even in a harsh storm.`,japanese:`争いの　起こった　村を
焼きつくしたという　記録が
古文書に　残されている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png",height:65,weight:3050},{id:10042,names:{korean:"프테라",english:"Aerodactyl",japanese:"プテラ"},descriptions:{korean:`호박에 남아 있던 공룡의
유전자에서 부활시켰다.
높은 소리로 울며 난다.`,english:`A Pokémon that roamed the skies
in the dinosaur era. Its teeth are
like saw blades.`,japanese:`こはくに　残された　恐竜の
遺伝子から　復活させた。
高い　声で　鳴きながら　飛ぶ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png",height:21,weight:790},{id:10043,names:{korean:"뮤츠",english:"Mewtwo",japanese:"ミュウツー"},descriptions:{korean:`한 과학자가 몇 년에 걸쳐
무서운 유전자의 연구를
계속한 결과 탄생했다.`,english:`It was created by
a scientist after
years of horrific\fgene splicing and
DNA engineering
experiments.`,japanese:`１人の　科学者が　何年も
恐ろしい　遺伝子　研究を
続けた　結果　誕生した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png",height:23,weight:1270},{id:10044,names:{korean:"뮤츠",english:"Mewtwo",japanese:"ミュウツー"},descriptions:{korean:`한 과학자가 몇 년에 걸쳐
무서운 유전자의 연구를
계속한 결과 탄생했다.`,english:`It was created by
a scientist after
years of horrific\fgene splicing and
DNA engineering
experiments.`,japanese:`１人の　科学者が　何年も
恐ろしい　遺伝子　研究を
続けた　結果　誕生した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png",height:15,weight:330},{id:10045,names:{korean:"전룡",english:"Ampharos",japanese:"デンリュウ"},descriptions:{korean:`꼬리 끝이 빛나며 반짝인다.
빛이 아득히 먼 곳까지 닿아서
길 잃은 자들의 이정표가 된다.`,english:`The tail's tip
shines brightly
and can be seen\ffrom far away. It
acts as a beacon
for lost people.`,japanese:`尻尾の先が　光り輝く。
光は　はるか　遠くまで　届き
迷った者の　道標となる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png",height:14,weight:615},{id:10046,names:{korean:"핫삼",english:"Scizor",japanese:"ハッサム"},descriptions:{korean:`강철이 함유된
집게로 잡은 것은 아무리
딱딱해도 산산조각이 난다.`,english:`It has a steel-hard body. It
intimidates foes by upraising its
eye-patterned pincers.`,japanese:`鋼鉄を　含んでいる　ハサミで
捕らえたものは　どんなに　硬くても
コナゴナに　砕く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png",height:20,weight:1250},{id:10047,names:{korean:"헤라크로스",english:"Heracross",japanese:"ヘラクロス"},descriptions:{korean:`자랑스러운 뿔을 상대의 배
밑에 틀어박고 단번에 들어 올려
집어 던지는 천하장사다.`,english:`It is usually docile, but if it is
disturbed while sipping honey,
it chases off the intruder with its horn.`,japanese:`自慢のツノを　相手の　お腹の
下に　ねじこみ　一気に　持ち上げ
ぶん投げてしまう　力持ち。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png",height:17,weight:625},{id:10048,names:{korean:"헬가",english:"Houndoom",japanese:"ヘルガー"},descriptions:{korean:`헬가가 으스스하게 멀리서 짖으면
지옥에서 사신이 부르는 소리라고
옛날 사람들은 상상하고 있었다.`,english:`If you are burned
by the flames it
shoots from its\fmouth, the pain
will never go
away.`,japanese:`ヘルガーの　不気味な　遠ぼえは
地獄から　死神が　呼ぶ　声と
昔の　人は　想像していた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png",height:19,weight:495},{id:10049,names:{korean:"마기라스",english:"Tyranitar",japanese:"バンギラス"},descriptions:{korean:`한쪽 팔을 움직이는 것만으로도
산을 무너뜨리고 땅을 울리게 하는
엄청난 힘을 감추고 있다.`,english:`Its body can't be
harmed by any sort
of attack, so it\fis very eager to
make challenges
against enemies.`,japanese:`片腕を　動かしただけで
山を崩し　地響きを　起こす
とてつもない　パワーを　秘める。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png",height:25,weight:2550},{id:10050,names:{korean:"번치코",english:"Blaziken",japanese:"バシャーモ"},descriptions:{korean:`30층 빌딩을 점프로
넘는 점프력을 가졌다.
불꽃펀치가 상대를 태운다.`,english:`In battle, BLAZIKEN blows out intense
flames from its wrists and attacks foes
courageously.\fThe stronger the foe, the more
intensely this POKéMON’s wrists burn.`,japanese:`３０階建ての　ビルを　ジャンプで
跳び越す　跳躍力。炎の　パンチが
相手を　焼きつくす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png",height:19,weight:520},{id:10051,names:{korean:"가디안",english:"Gardevoir",japanese:"サーナイト"},descriptions:{korean:`트레이너를 지키기 위해서라면
사이코 파워를 모두 써서 작은
블랙홀을 만들어 낸다.`,english:`GARDEVOIR has the ability to read the
future. If it senses impending danger
to its TRAINER, this POKéMON is said to\funleash its psychokinetic energy at
full power.`,japanese:`トレーナーを　守るためなら
サイコパワーを　使いきり　小さな
ブラックホールを　作り出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png",height:16,weight:484},{id:10052,names:{korean:"입치트",english:"Mawile",japanese:"クチート"},descriptions:{korean:`얌전한 얼굴로 상대를 방심하게
만들고 큰 턱으로 덥석 문다.
한번 물면 절대로 놓지 않는다.`,english:`MAWHILE’s huge jaws are actually steel
horns that have been transformed.
Its docile-looking face serves to lull\fits foe into letting down its guard.
When the foe least expects it, MAWHILE
chomps it with its gaping jaws.`,japanese:`おとなしい　顔で　相手を　油断
させてから　おおあごで　がぶり。
かみつくと　絶対に　放さない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png",height:10,weight:235},{id:10053,names:{korean:"보스로라",english:"Aggron",japanese:"ボスゴドラ"},descriptions:{korean:`산을 통째로 영역으로 한다.
상처가 많은 보스로라일수록
많이 싸웠다는 것이므로 얕볼 수 없다.`,english:`AGGRON claims an entire mountain as its
own territory. It mercilessly beats up
anything that violates its environment.\fThis POKéMON vigilantly patrols its
territory at all times.`,japanese:`山を　まるごと　縄張りに　する。
傷が　多い　ボスゴドラほど
戦っているので　侮れない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png",height:22,weight:3950},{id:10054,names:{korean:"요가램",english:"Medicham",japanese:"チャーレム"},descriptions:{korean:`춤추는 듯한 우아한 움직임으로
공격을 피하며 상대에게
강력한 일격을 선사한다.`,english:`It is said that through meditation,
MEDICHAM heightens energy inside
its body and sharpens its sixth sense.\fThis POKéMON hides its presence by
merging itself with fields and
mountains.`,japanese:`ダンスの　ような　優雅な　動きで
攻撃を　交わして　強烈な　一撃を
相手に　お見舞いする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png",height:13,weight:315},{id:10055,names:{korean:"썬더볼트",english:"Manectric",japanese:"ライボルト"},descriptions:{korean:`좀처럼 사람 앞에 모습을
드러내지 않는다. 번개가 떨어진
곳에 보금자리가 있다고 한다.`,english:`MANECTRIC is constantly discharging
electricity from its mane. The sparks
sometimes ignite forest fires.\fWhen it enters a battle, this POKéMON
creates thunderclouds.`,japanese:`人前には　めったに　姿を　見せない。
雷の　落ちた　場所に
住処が　あると　いう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png",height:18,weight:440},{id:10056,names:{korean:"다크펫",english:"Banette",japanese:"ジュペッタ"},descriptions:{korean:`버려진 인형에 원념이
깃들어 포켓몬이 되었다.
자신을 버린 아이를 찾고 있다.`,english:`BANETTE generates energy for laying
strong curses by sticking pins into its
own body.\fThis POKéMON was originally a pitiful
plush doll that was thrown away.`,japanese:`捨てられた　ぬいぐるみに　おんねんが
宿り　ポケモンになった。自分を
捨てた　子供を　捜している。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png",height:12,weight:130},{id:10057,names:{korean:"앱솔",english:"Absol",japanese:"アブソル"},descriptions:{korean:`재해의 위험을 감지한다.
위험을 알리는 때에만
사람 앞에 나타난다고 한다.`,english:`Every time ABSOL appears before people,
it is followed by a disaster such as an
earthquake or a tidal wave.\fAs a result, it came to be known as the
disaster POKéMON.`,japanese:`災害を　予感する。
危険を　知らせる　ときだけ
人前に　現れるという。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png",height:12,weight:490},{id:10058,names:{korean:"한카리아스",english:"Garchomp",japanese:"ガブリアス"},descriptions:{korean:`몸을 접고 날개를
펼치면 마치 제트기 같다.
음속으로 날 수 있다.`,english:`When it folds up its body and
extends its wings, it looks like a
jet plane. It flies at sonic speed.`,japanese:`体を　折り畳み　翼を　伸ばすと
まるで　ジェット機。
音速で　飛ぶことが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png",height:19,weight:950},{id:10059,names:{korean:"루카리오",english:"Lucario",japanese:"ルカリオ"},descriptions:{korean:`상대가 발하는 파동을
감지하여 생각이나
움직임을 간파할 수 있다.`,english:`It has the ability to sense the
auras of all things.
It understands human speech.`,japanese:`相手の　発する　波動を
キャッチすることで　考えや　動きを
読み取ることが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png",height:13,weight:575},{id:10060,names:{korean:"눈설왕",english:"Abomasnow",japanese:"ユキノオー"},descriptions:{korean:`블리자드를 발생시켜 주변
일대를 새하얗게 만든다.
별명은 아이스 몬스터다.`,english:`It whips up blizzards in mountains
that are always buried in snow.
It is the abominable snowman.`,japanese:`ブリザードを　発生させて　あたり
一面を　真っ白に　してしまう。
別名　アイスモンスター。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png",height:27,weight:1850},{id:10061,names:{korean:"플라엣테",english:"Floette",japanese:"フラエッテ"},descriptions:{korean:`꽃밭을 날아다니며 말라가는
꽃을 보살핀다. 꽃의 숨겨진
힘을 끌어내어 싸운다.`,english:`It flutters around fields of flowers and cares for
flowers that are starting to wilt. It draws
out the hidden power of flowers to battle.`,japanese:`花畑を　飛び回り　枯れかけた　花を
世話する。花の　秘められた　力を
引き出して　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png",height:2,weight:9},{id:10062,names:{korean:"라티아스",english:"Latias",japanese:"ラティアス"},descriptions:{korean:`텔레파시로 마음이 통한다.
빛을 굴절시키는 깃털로
몸을 둘러싸 모습을 지운다.`,english:`LATIAS is highly sensitive to the
emotions of people. If it senses any
hostility, this POKéMON ruffles the\ffeathers all over its body and cries
shrilly to intimidate the foe.`,japanese:`テレパシーで　気持ちを　通わせる。
光を　屈折させる　羽毛で
体を　包み　姿を　消す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png",height:18,weight:520},{id:10063,names:{korean:"라티오스",english:"Latios",japanese:"ラティオス"},descriptions:{korean:`높은 지능을 가진 포켓몬이다.
팔을 접어 날면 제트기를
추월할 만큼 빠르다.`,english:`LATIOS has the ability to make its foe
see an image of what it has seen or
imagines in its head.\fThis POKéMON is intelligent and
understands human speech.`,japanese:`高い　知能を　持つ　ポケモン。
腕を　折りたたんで　飛べば
ジェット機を　追い越す　スピードだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png",height:23,weight:700},{id:10064,names:{korean:"대짱이",english:"Swampert",japanese:"ラグラージ"},descriptions:{korean:`돌처럼 딱딱한 팔을
한 번 휘두르는 것만으로 거대한
돌을 조각조각으로 부순다.`,english:`SWAMPERT is very strong. It has enough
power to easily drag a boulder weighing
more than a ton.\fThis POKéMON also has powerful vision
that lets it see even in murky water.`,japanese:`岩の　ように　硬い　腕を
一振り　するだけで　巨大な　岩を
コナゴナに　砕くぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png",height:19,weight:1020},{id:10065,names:{korean:"나무킹",english:"Sceptile",japanese:"ジュカイン"},descriptions:{korean:`팔에 자란 잎사귀는 큰 나무도
싹둑 베어 넘어뜨리는 정도다.
밀림의 싸움에서는 무적이다.`,english:`The leaves growing on SCEPTILE’s body
are very sharp edged. This POKéMON is
very agile - it leaps all over the\fbranches of trees and jumps on its foe
from above or behind.`,japanese:`腕に　生えた　葉っぱは　大木も
スッパリ　切り倒す　切れ味。
密林の　戦いでは　無敵。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png",height:19,weight:552},{id:10066,names:{korean:"깜까미",english:"Sableye",japanese:"ヤミラミ"},descriptions:{korean:`동굴의 어둠에 숨는다.
보석을 먹는 사이에
눈이 보석이 되어 버렸다.`,english:`SABLEYE lead quiet lives deep inside
caverns. They are feared, however,
because these POKéMON are thought to\fsteal the spirits of people when their
eyes burn with a sinister glow in the
darkness.`,japanese:`洞窟の　暗闇に　潜む。
宝石を　食べているうちに
目が　宝石に　なってしまった。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png",height:5,weight:1610},{id:10067,names:{korean:"파비코리",english:"Altaria",japanese:"チルタリス"},descriptions:{korean:`넓은 하늘을 느긋하게 난다.
파비코리의 아름다운 콧노래를
들으면 황홀한 꿈을 꾸는 기분이다.`,english:`ALTARIA dances and wheels through the
sky among billowing, cotton-like clouds.
By singing melodies in its crystal-clear\fvoice, this POKéMON makes its listeners
experience dreamy wonderment.`,japanese:`大空を　ゆったりと　飛ぶ。
チルタリスの　美しい　ハミングを
聴くと　うっとり　夢心地だ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png",height:15,weight:206},{id:10068,names:{korean:"엘레이드",english:"Gallade",japanese:"エルレイド"},descriptions:{korean:`상대의 생각을 민감하게
포착하는 능력을 가졌기 때문에
먼저 공격할 수 있다.`,english:`A master of courtesy and
swordsmanship, it fights using
extending swords on its elbows.`,japanese:`相手の　考えを　敏感に
キャッチする　能力を　持つため
先に　攻撃が　できるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png",height:16,weight:564},{id:10069,names:{korean:"다부니",english:"Audino",japanese:"タブンネ"},descriptions:{korean:`귀의 더듬이로 상대의
컨디션이나 알에서 포켓몬이
언제 나올지도 알 수 있다.`,english:`It touches others with the feelers on
its ears, using the sound of their
heartbeats to tell how they are feeling.`,japanese:`耳の　触角で　相手の
体調や　タマゴから　ポケモンが
いつ　でてくるのかも　わかるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png",height:15,weight:320},{id:10070,names:{korean:"샤크니아",english:"Sharpedo",japanese:"サメハダー"},descriptions:{korean:`철판도 물어 찢는 이빨을 가지며
헤엄치는 속도는 시속 120km다.
별명은 바다의 건달이다.`,english:`Nicknamed “the bully of the sea,”
SHARPEDO is widely feared.
Its cruel fangs grow back immediately\fif they snap off.
Just one of these POKéMON can
thoroughly tear apart a supertanker.`,japanese:`鉄板も　かみちぎる　キバを　持ち
泳ぐ　速度は　時速１２０キロ。
別名は　海のギャング。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png",height:25,weight:1303},{id:10071,names:{korean:"야도란",english:"Slowbro",japanese:"ヤドラン"},descriptions:{korean:`붙어 있는 셀러는
꼬리에서 배어 나오는 맛을
좋아해서 계속 떨어지지 않는다.`,english:`The SHELLDER that
is latched onto
SLOWPOKE's tail\fis said to feed
on the host's left
over scraps.`,japanese:`くっついている　シェルダーは
尻尾から　にじみ出る　うま味が
欲しくて　ずっと　離れない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png",height:20,weight:1200},{id:10072,names:{korean:"강철톤",english:"Steelix",japanese:"ハガネール"},descriptions:{korean:`땅속의 높은 압력과
열로 단련된 몸은
어떠한 금속보다도 단단하다.`,english:`It is thought its body transformed
as a result of iron accumulating
internally from swallowing soil.`,japanese:`地中の　高い　圧力と　熱で
鍛えられた　体は
あらゆる　金属よりも　硬い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png",height:105,weight:7400},{id:10073,names:{korean:"피죤투",english:"Pidgeot",japanese:"ピジョット"},descriptions:{korean:`먹이를 찾을 때 수면을
아슬아슬하게 미끄러지듯 날아
잉어킹 등을 움켜잡는다.`,english:`When hunting, it
skims the surface
of water at high\fspeed to pick off
unwary prey such
as MAGIKARP.`,japanese:`エサを　探すとき　水面　すれすれを
滑るように　飛んで
コイキングなどを　わしづかみにする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png",height:22,weight:505},{id:10074,names:{korean:"얼음귀신",english:"Glalie",japanese:"オニゴーリ"},descriptions:{korean:`공기 중의 수분을 얼려서
얼음 갑옷으로 몸을
둘러싸 몸을 보호한다.`,english:`GLALIE has a body made of rock, which it
hardens with an armor of ice.
This POKéMON has the ability to freeze\fmoisture in the atmosphere into any
shape it desires.`,japanese:`空気中の　水分を　凍らせ
氷の　装甲で　体を　包みこみ
身を　守っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png",height:21,weight:3502},{id:10075,names:{korean:"디안시",english:"Diancie",japanese:"ディアンシー"},descriptions:{korean:`멜리시의 돌연변이다.
분홍빛으로 빛나는 몸은
세계에서 가장 아름답다고 일컬어진다.`,english:`A sudden transformation of Carbink,
its pink, glimmering body is said to be
the loveliest sight in the whole world.`,japanese:`メレシーの　突然変異。
ピンク色に　輝く　体は
世界一　美しいと　言われる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png",height:11,weight:278},{id:10076,names:{korean:"메타그로스",english:"Metagross",japanese:"メタグロス"},descriptions:{korean:`4개의 뇌가 연결되어
슈퍼컴퓨터보다 대단한
계산으로 상대를 분석한다.`,english:`METAGROSS has four brains in total.
Combined, the four brains can breeze
through difficult calculations faster\fthan a supercomputer.
This POKéMON can float in the air by
tucking in its four legs.`,japanese:`４つの　脳みそが　連なり
スーパーコンピュータより　すごい
計算で　相手を　分析する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png",height:25,weight:9429},{id:10077,names:{korean:"가이오가",english:"Kyogre",japanese:"カイオーガ"},descriptions:{korean:`많은 비와 큰 해일로 바다를
넓힌 신화의 포켓몬이다.
그란돈과 격하게 싸웠다.`,english:`KYOGRE has the power to create massive
rain clouds that cover the entire sky
and bring about torrential downpours.\fThis POKéMON saved people who were
suffering from droughts.`,japanese:`大雨と　大津波で　海を　広げた
神話の　ポケモン。
グラードンと　激しく　戦った。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png",height:98,weight:4300},{id:10078,names:{korean:"그란돈",english:"Groudon",japanese:"グラードン"},descriptions:{korean:`고열로 물을 증발시켜
대지를 넓혔다고 전해진다.
가이오가와 격하게 싸웠다.`,english:`GROUDON has long been described in 
mythology as the POKéMON that raised
lands and expanded continents.\fThis POKéMON took to sleep after a
cataclysmic battle with KYOGRE.`,japanese:`高熱で　水を　蒸発させて
大地を　広げたと　言われている。
カイオーガと　激しく　戦った。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png",height:50,weight:9997},{id:10079,names:{korean:"레쿠쟈",english:"Rayquaza",japanese:"レックウザ"},descriptions:{korean:`구름보다 아득히 먼 위의 오존층에
서식하고 있기 때문에 지상에서
모습을 볼 수 없다.`,english:`RAYQUAZA lived for hundreds of millions
of years in the earth’s ozone layer, 
never descending to the ground.\fThis POKéMON appears to feed on water
and particles in the atmosphere.`,japanese:`雲より　はるか上の　オゾン層に
生息しているため　地上から
姿を　見ることは　できない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png",height:108,weight:3920},{id:10080,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png",height:4,weight:60},{id:10081,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png",height:4,weight:60},{id:10082,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png",height:4,weight:60},{id:10083,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png",height:4,weight:60},{id:10084,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png",height:4,weight:60},{id:10085,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png",height:4,weight:60},{id:10086,names:{korean:"후파",english:"Hoopa",japanese:"フーパ"},descriptions:{korean:`공간을 뒤트는 링으로
모든 것을 멀리 떨어진 곳으로
날려버리고 마는 트러블메이커다.`,english:`This troublemaker sends anything
and everything to faraway places
using its loop, which can warp space.`,japanese:`空間を　ゆがめる　リングで
あらゆる　ものを　離れた　場所へ
飛ばしてしまう　トラブルメーカー。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png",height:65,weight:4900},{id:10087,names:{korean:"폭타",english:"Camerupt",japanese:"バクーダ"},descriptions:{korean:`등의 혹 모양 화산은
10년마다 대분화하나
심하게 화가 나도 분화한다.`,english:`CAMERUPT has a volcano inside its body.
Magma of 18,000 degrees F courses
through its body.\fOccasionally, the humps on this
POKéMON’s back erupt, spewing the
superheated magma.`,japanese:`背中の　コブの　火山は
１０年ごとに　大噴火　するが
激しく　怒っても　噴火する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png",height:25,weight:3205},{id:10088,names:{korean:"이어롭",english:"Lopunny",japanese:"ミミロップ"},descriptions:{korean:`경계심이 아주 강하다.
위험을 감지하면 가뿐하게
뛰어올라 달아난다.`,english:`An extremely cautious Pokémon.
It cloaks its body with its fluffy
ear fur when it senses danger.`,japanese:`警戒心が　とても　強い。
危険を　感じると　軽やかに
飛び跳ねて　走り去ってしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png",height:13,weight:283},{id:10089,names:{korean:"보만다",english:"Salamence",japanese:"ボーマンダ"},descriptions:{korean:`화나게 하면 어쩔 도리가 없다.
모든 것을 발톱으로 갈기갈기 찢고
불꽃으로 태워서 파괴한다.`,english:`SALAMENCE came about as a result of a
strong, long-held dream of growing
wings. It is said that this powerful\fdesire triggered a sudden mutation in
this POKéMON’s cells, causing it to
sprout its magnificent wings.`,japanese:`怒らせると　手が　つけられない。
すべての　ものを　ツメで　切り裂き
炎で　燃やして　破壊する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png",height:18,weight:1126},{id:10090,names:{korean:"독침붕",english:"Beedrill",japanese:"スピアー"},descriptions:{korean:`양손과 엉덩이에 있는 3개의
독침으로 상대를 찌르고 찌르고
또 찌르며 공격한다.`,english:`It has three poisonous stingers on its forelegs and
its tail. They are used to jab its enemy repeatedly.`,japanese:`両手と　お尻にある　３本の　毒針で
相手を　刺して　刺して
刺しまくって　攻撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png",height:14,weight:405},{id:10091,names:{korean:"꼬렛",english:"Rattata",japanese:"コラッタ"},descriptions:{korean:`먹을 것이 있는 곳이라면
어디서든 서식한다.
온종일 먹이를 찾아다닌다.`,english:`Bites anything
when it attacks.
Small and very\fquick, it is a
common sight in
many places.`,japanese:`食べるものが　あるところなら
どこにだって　生息する。
１日中　エサを　探している。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10091.png",height:3,weight:38},{id:10092,names:{korean:"레트라",english:"Raticate",japanese:"ラッタ"},descriptions:{korean:`계속 자라는 앞니를 갈아내려고
딱딱한 것을 갉는 습성이 있다.
벽돌로 된 벽도 갉아서 부순다.`,english:`It uses its whis­
kers to maintain
its balance.\fIt apparently
slows down if
they are cut off.`,japanese:`伸び続ける　前歯を　削るため
硬い　ものを　かじる　習性。
ブロック塀も　かじって　壊す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10092.png",height:7,weight:255},{id:10093,names:{korean:"레트라",english:"Raticate",japanese:"ラッタ"},descriptions:{korean:`계속 자라는 앞니를 갈아내려고
딱딱한 것을 갉는 습성이 있다.
벽돌로 된 벽도 갉아서 부순다.`,english:`It uses its whis­
kers to maintain
its balance.\fIt apparently
slows down if
they are cut off.`,japanese:`伸び続ける　前歯を　削るため
硬い　ものを　かじる　習性。
ブロック塀も　かじって　壊す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10093.png",height:14,weight:1050},{id:10094,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png",height:4,weight:60},{id:10095,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png",height:4,weight:60},{id:10096,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png",height:4,weight:60},{id:10097,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png",height:4,weight:60},{id:10098,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png",height:4,weight:60},{id:10099,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png",height:4,weight:60},{id:10100,names:{korean:"라이츄",english:"Raichu",japanese:"ライチュウ"},descriptions:{korean:`전기가 모이면
근육이 자극되어 여느 때보다
공격적이 된다.`,english:`Its long tail serves as a ground to protect itself
from its own high-voltage power.`,japanese:`電気が　たまってくると
筋肉が　刺激され
いつもより　攻撃的に　なってしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png",height:7,weight:210},{id:10101,names:{korean:"모래두지",english:"Sandshrew",japanese:"サンド"},descriptions:{korean:`지면에 구멍을 파고 산다.
자신에게 위험이 닥쳐오면
둥글게 말아서 몸을 보호한다.`,english:`Burrows deep
underground in
arid locations\ffar from water.
It only emerges
to hunt for food.`,japanese:`地面に　穴を　掘って　住む。
自分に　危険が　迫ると
まるくなって　身を　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10101.png",height:7,weight:400},{id:10102,names:{korean:"고지",english:"Sandslash",japanese:"サンドパン"},descriptions:{korean:`굉장한 기세로 지면을 파면
가시와 발톱이 부러져 버리지만
다음 날에는 바로 돋아나 있다.`,english:`Curls up into a
spiny ball when
threatened. It\fcan roll while
curled up to
attack or escape.`,japanese:`すごい　勢いで　地面を掘ると
トゲや　ツメが　折れてしまうが
次の日には　生えそろっている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10102.png",height:12,weight:550},{id:10103,names:{korean:"식스테일",english:"Vulpix",japanese:"ロコン"},descriptions:{korean:`태어났을 때는 꼬리가 새하얗고
하나밖에 없다. 성장하면
끝이 갈라지며 꼬리 수가 늘어난다.`,english:`At the time of
birth, it has
just one tail.\fThe tail splits
from its tip as
it grows older.`,japanese:`生まれたとき　尻尾は　真っ白で
１本しかない。育つと　やがて
先が　分かれて　尻尾が　増える。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10103.png",height:6,weight:99},{id:10104,names:{korean:"나인테일",english:"Ninetales",japanese:"キュウコン"},descriptions:{korean:`황금빛으로 빛나는 털과
9개의 긴 꼬리를 지녔다.
1000년을 산다고 한다.`,english:`Very smart and
very vengeful.
Grabbing one of\fits many tails
could result in a
1000-year curse.`,japanese:`黄金に　輝く　体毛と
９本の　長い　尻尾を　持つ。
１０００年は　生きると　言われる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10104.png",height:11,weight:199},{id:10105,names:{korean:"디그다",english:"Diglett",japanese:"ディグダ"},descriptions:{korean:`피부가 매우 얇아서
빛을 쪼이게 되면 혈액이
데워져 약해진다.`,english:`Lives about one
yard underground
where it feeds on\fplant roots. It
sometimes appears
above ground.`,japanese:`地下１メートルくらいを　掘りすすみ
木の根っこなどを　かじって　生きる。
たまに　地上に　顔を出す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10105.png",height:2,weight:10},{id:10106,names:{korean:"닥트리오",english:"Dugtrio",japanese:"ダグトリオ"},descriptions:{korean:`땅속을 파고들어 가
상대가 방심하고 있을 때
다른 곳에서 공격한다.`,english:`A team of DIGLETT
triplets.
It triggers huge\fearthquakes by
burrowing 60 miles
underground.`,japanese:`地中を　掘りすすんで
相手が　油断しているところを
別の　場所から　攻撃する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10106.png",height:7,weight:666},{id:10107,names:{korean:"나옹",english:"Meowth",japanese:"ニャース"},descriptions:{korean:`한밤중에 움직이는 습성이 있다.
반짝반짝 빛나는 것을 발견하면
그에 못지않게 눈동자가 반짝인다.`,english:`It washes its face regularly to keep the coin on
its forehead spotless. It doesn’t get along with
Galarian Meowth.`,japanese:`夜中に　行動する　習性。
キラキラ　光るものを　見つけると
負けないくらい　瞳が　輝く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10107.png",height:4,weight:42},{id:10108,names:{korean:"페르시온",english:"Persian",japanese:"ペルシアン"},descriptions:{korean:`털의 결이 아름다워 애완용으로
기르려는 사람이 많지만, 곧잘
할퀴려 들기 때문에 쉽지 않다.`,english:`Although its fur
has many admirers,
it is tough to\fraise as a pet
because of its
fickle meanness.`,japanese:`毛並みが　美しく
ペットにしたがる　人も　多いが　すぐ
ひっかいたり　するので　手強いぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10108.png",height:11,weight:330},{id:10109,names:{korean:"꼬마돌",english:"Geodude",japanese:"イシツブテ"},descriptions:{korean:`초원이나 산에 서식한다.
돌멩이와 닮은 탓에 알아채지 못하고
밟거나 발이 걸려 넘어지기도 한다.`,english:`Found in fields
and mountains.
Mistaking them\ffor boulders,
people often step
or trip on them.`,japanese:`草原や　山に　生息する。
石ころに　似ていて　気がつかず
踏んだり　つまずいたりしてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10109.png",height:4,weight:203},{id:10110,names:{korean:"데구리",english:"Graveler",japanese:"ゴローン"},descriptions:{korean:`산에서 굴러 떨어질 때
몸의 여기저기가 부서져도
신경 쓰지 않는 호쾌한 성격이다.`,english:`Rolls down slopes
to move. It rolls
over any obstacle\fwithout slowing
or changing its
direction.`,japanese:`山から　転がり　落ちるとき
体の　あちこちが　取れても
気にしない　豪快な　性格。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10110.png",height:10,weight:1100},{id:10111,names:{korean:"딱구리",english:"Golem",japanese:"ゴローニャ"},descriptions:{korean:`산 정상에서 산기슭까지 이어지는
움푹 패인 홈은 딱구리가 굴러
다니는 길이므로 주의가 필요하다.`,english:`Its boulder-like
body is extremely
hard. It can\feasily withstand
dynamite blasts
without damage.`,japanese:`山頂から　ふもとまで　続く　溝は
ゴローニャが　転がり落ちる
通り道なので　要注意。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10111.png",height:17,weight:3160},{id:10112,names:{korean:"질퍽이",english:"Grimer",japanese:"ベトベター"},descriptions:{korean:`달로부터의 X선을 쬔
오물이 질퍽이로 변화했다.
더러운 것을 좋아한다.`,english:`Appears in filthy
areas. Thrives by
sucking up\fpolluted sludge
that is pumped
out of factories.`,japanese:`月からの　エックス線を　浴びた
ヘドロが　ベトベターに　変化した。
汚いものが　大好物。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10112.png",height:7,weight:420},{id:10113,names:{korean:"질뻐기",english:"Muk",japanese:"ベトベトン"},descriptions:{korean:`진흙이 쌓여 악취가 나는 장소를
좋아해서 모여들기 때문에
주변은 더욱 악취가 난다.`,english:`Thickly covered
with a filthy,
vile sludge. It\fis so toxic, even
its footprints
contain poison.`,japanese:`ヘドロが　たまる　くさい　場所を
好んで　集まってくるので
あたりは　いっそう　くさくなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10113.png",height:10,weight:520},{id:10114,names:{korean:"나시",english:"Exeggutor",japanese:"ナッシー"},descriptions:{korean:`3개의 머리는 생각하는 것이
각각 다르지만 사이가 좋아서
싸우지 않는 것 같다.`,english:`Legend has it that
on rare occasions,
one of its heads\fwill drop off and
continue on as an
EXEGGCUTE.`,japanese:`３つの　頭は　考えることは
別々でも　仲良しなので
ケンカしたり　しないらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10114.png",height:109,weight:4156},{id:10115,names:{korean:"텅구리",english:"Marowak",japanese:"ガラガラ"},descriptions:{korean:`몸집도 작으며 원래는
약했다. 뼈를 쓰기 시작하면서
성격이 흉포해졌다.`,english:`The bone it holds
is its key weapon.
It throws the\fbone skillfully
like a boomerang
to KO targets.`,japanese:`体も　小さく　もともと　弱かった。
骨を　使うようになり
性格が　凶暴化した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10115.png",height:10,weight:340},{id:10116,names:{korean:"개굴닌자",english:"Greninja",japanese:"ゲッコウガ"},descriptions:{korean:`물을 압축시켜 수리검을
만들어 낸다. 고속으로 회전시키며
던지면 금속도 두 동강이 난다.`,english:`It creates throwing stars out of compressed water.
When it spins them and throws them at high speed,
these stars can split metal in two.`,japanese:`水を　圧縮して　手裏剣を　作り出す。
高速回転させて　飛ばすと
金属も　真っ二つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10116.png",height:15,weight:400},{id:10117,names:{korean:"개굴닌자",english:"Greninja",japanese:"ゲッコウガ"},descriptions:{korean:`물을 압축시켜 수리검을
만들어 낸다. 고속으로 회전시키며
던지면 금속도 두 동강이 난다.`,english:`It creates throwing stars out of compressed water.
When it spins them and throws them at high speed,
these stars can split metal in two.`,japanese:`水を　圧縮して　手裏剣を　作り出す。
高速回転させて　飛ばすと
金属も　真っ二つ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10117.png",height:15,weight:400},{id:10118,names:{korean:"지가르데",english:"Zygarde",japanese:"ジガルデ"},descriptions:{korean:`칼로스지방의 생태계가
무너지면 모습을 나타내어
숨겨진 힘을 발휘한다고 한다.`,english:`When the Kalos region’s ecosystem falls into
disarray, it appears and reveals its secret power.`,japanese:`カロス地方の　生態系が　崩れると
姿を　現して
秘めた　力を　発揮するらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10118.png",height:12,weight:335},{id:10119,names:{korean:"지가르데",english:"Zygarde",japanese:"ジガルデ"},descriptions:{korean:`칼로스지방의 생태계가
무너지면 모습을 나타내어
숨겨진 힘을 발휘한다고 한다.`,english:`When the Kalos region’s ecosystem falls into
disarray, it appears and reveals its secret power.`,japanese:`カロス地方の　生態系が　崩れると
姿を　現して
秘めた　力を　発揮するらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10119.png",height:50,weight:3050},{id:10120,names:{korean:"지가르데",english:"Zygarde",japanese:"ジガルデ"},descriptions:{korean:`칼로스지방의 생태계가
무너지면 모습을 나타내어
숨겨진 힘을 발휘한다고 한다.`,english:`When the Kalos region’s ecosystem falls into
disarray, it appears and reveals its secret power.`,japanese:`カロス地方の　生態系が　崩れると
姿を　現して
秘めた　力を　発揮するらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10120.png",height:45,weight:6100},{id:10121,names:{korean:"형사구스",english:"Gumshoos",japanese:"デカグース"},descriptions:{korean:`먹이의 흔적을 찾으면
끈질기게 그 자리에 잠복하지만
날이 저물면 꾸벅꾸벅 존다.`,english:`When it finds a trace of its prey, it patiently
stakes out the location...but it’s always snoozing
by nightfall.`,japanese:`獲物の　痕跡を　みつけると
粘り強く　その場に　張り込むが
日暮れには　うつらうつら　している。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10121.png",height:14,weight:600},{id:10122,names:{korean:"투구뿌논",english:"Vikavolt",japanese:"クワガノン"},descriptions:{korean:`복부에 발전 기관을 갖고 있다.
큰 턱에 에너지를 모아
굉장한 전격을 쏜다.`,english:`It zips around, on sharp lookout for an opening.
It concentrates electrical energy within its large
jaws and uses it to zap its enemies.`,japanese:`飛び回って　隙を　うかがう。
電気エネルギーを　大きなアゴで
収束させ　敵に　発射。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10122.png",height:26,weight:1475},{id:10123,names:{korean:"춤추새",english:"Oricorio",japanese:"オドリドリ"},descriptions:{korean:`날개를 부딪쳐서 발화시킨다.
화려한 스텝을 밟으면서
격렬한 불꽃을 퍼붓는다.`,english:`It beats its wings together to create fire.
As it moves in the steps of its beautiful dance,
it bathes opponents in intense flames.`,japanese:`羽を　打ち合わせて　発火。
華麗な　ステップを　踏みながら
激しい　炎を　浴びせかけるぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10123.png",height:6,weight:34},{id:10124,names:{korean:"춤추새",english:"Oricorio",japanese:"オドリドリ"},descriptions:{korean:`날개를 부딪쳐서 발화시킨다.
화려한 스텝을 밟으면서
격렬한 불꽃을 퍼붓는다.`,english:`It beats its wings together to create fire.
As it moves in the steps of its beautiful dance,
it bathes opponents in intense flames.`,japanese:`羽を　打ち合わせて　発火。
華麗な　ステップを　踏みながら
激しい　炎を　浴びせかけるぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10124.png",height:6,weight:34},{id:10125,names:{korean:"춤추새",english:"Oricorio",japanese:"オドリドリ"},descriptions:{korean:`날개를 부딪쳐서 발화시킨다.
화려한 스텝을 밟으면서
격렬한 불꽃을 퍼붓는다.`,english:`It beats its wings together to create fire.
As it moves in the steps of its beautiful dance,
it bathes opponents in intense flames.`,japanese:`羽を　打ち合わせて　発火。
華麗な　ステップを　踏みながら
激しい　炎を　浴びせかけるぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10125.png",height:6,weight:34},{id:10126,names:{korean:"루가루암",english:"Lycanroc",japanese:"ルガルガン"},descriptions:{korean:`재빨리 움직여 적을 어지럽힌다.
발톱이나 이빨 외에 갈기의
뾰족한 바위도 무기의 하나다.`,english:`Its quick movements confuse its enemies.
Well equipped with claws and fangs, it also uses
the sharp rocks in its mane as weapons.`,japanese:`素早く　動き　敵を　惑わす。
ツメや　キバの　ほか　タテガミの
とがった　岩も　武器の　ひとつ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10126.png",height:11,weight:250},{id:10127,names:{korean:"약어리",english:"Wishiwashi",japanese:"ヨワシ"},descriptions:{korean:`위험해지면 눈을 글썽이면서
반짝인다. 그 빛에 모이는
동료와 함께 적에 대항한다.`,english:`When it’s in trouble, its eyes moisten and begin
to shine. The shining light attracts its comrades,
and they stand together against their enemies.`,japanese:`ピンチになると　目が　潤みだし
輝く。　その光に　群れる
仲間と　敵に　立ち向かうのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10127.png",height:82,weight:786},{id:10128,names:{korean:"라란티스",english:"Lurantis",japanese:"ラランテス"},descriptions:{korean:`선명한 몸의 색을 유지하기 위해서
굉장히 손이 가지만 그것을
취미로 하는 유별난 사람도 있다.`,english:`It requires a lot of effort to maintain Lurantis’s
vivid coloring, but some collectors enjoy this
work and treat it as their hobby.`,japanese:`鮮やかな　体色を　保つには
非常に　手間が　かかるが　それを
趣味にする　好事家も　いるのだ。`},sprite:null,height:15,weight:580},{id:10129,names:{korean:"염뉴트",english:"Salazzle",japanese:"エンニュート"},descriptions:{korean:`어찌 된 영문인지 암컷만 발견되고 있다.
야도뇽의 수컷을 거느리며
역하렘을 만들어서 산다.`,english:`For some reason, only females have been found.
It creates a reverse harem of male Salandit that
it lives with.`,japanese:`なぜか　♀しか　見つかっていない。
ヤトウモリの♂を　引き連れて
逆ハーレムを　作って　暮らす。`},sprite:null,height:21,weight:810},{id:10130,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10130.png",height:3,weight:400},{id:10131,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10131.png",height:3,weight:400},{id:10132,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10132.png",height:3,weight:400},{id:10133,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10133.png",height:3,weight:400},{id:10134,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10134.png",height:3,weight:400},{id:10135,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10135.png",height:3,weight:400},{id:10136,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10136.png",height:3,weight:3},{id:10137,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10137.png",height:3,weight:3},{id:10138,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10138.png",height:3,weight:3},{id:10139,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10139.png",height:3,weight:3},{id:10140,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10140.png",height:3,weight:3},{id:10141,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10141.png",height:3,weight:3},{id:10142,names:{korean:"메테노",english:"Minior",japanese:"メテノ"},descriptions:{korean:`원래 오존층에 살고 있으며
몸의 껍질이 무거워지면
지상을 향해 떨어진다.`,english:`Originally making its home in the ozone layer,
it hurtles to the ground when the shell enclosing
its body grows too heavy.`,japanese:`もともと　オゾン層に　棲んでおり
身体の　殻が　重くなると
地上に　向かって　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10142.png",height:3,weight:3},{id:10143,names:{korean:"따라큐",english:"Mimikyu",japanese:"ミミッキュ"},descriptions:{korean:`정체불명. 누더기 속을 본
어떤 학자는 공포에서
헤어나오지 못하고 쇼크사했다.`,english:`Its actual appearance is unknown. A scholar
who saw what was under its rag was
overwhelmed by terror and died from the shock.`,japanese:`正体不明。　ボロ布の
中身を　みた　とある　学者は
恐怖の　あまり　ショック死した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10143.png",height:2,weight:7},{id:10144,names:{korean:"따라큐",english:"Mimikyu",japanese:"ミミッキュ"},descriptions:{korean:`정체불명. 누더기 속을 본
어떤 학자는 공포에서
헤어나오지 못하고 쇼크사했다.`,english:`Its actual appearance is unknown. A scholar
who saw what was under its rag was
overwhelmed by terror and died from the shock.`,japanese:`正体不明。　ボロ布の
中身を　みた　とある　学者は
恐怖の　あまり　ショック死した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10144.png",height:4,weight:28},{id:10145,names:{korean:"따라큐",english:"Mimikyu",japanese:"ミミッキュ"},descriptions:{korean:`정체불명. 누더기 속을 본
어떤 학자는 공포에서
헤어나오지 못하고 쇼크사했다.`,english:`Its actual appearance is unknown. A scholar
who saw what was under its rag was
overwhelmed by terror and died from the shock.`,japanese:`正体不明。　ボロ布の
中身を　みた　とある　学者は
恐怖の　あまり　ショック死した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10145.png",height:4,weight:28},{id:10146,names:{korean:"짜랑고우거",english:"Kommo-o",japanese:"ジャラランガ"},descriptions:{korean:`적을 보면 꼬리의 비늘을
짤랑짤랑 소리를 내며 위협한다.
약한 자는 허둥대며 도망간다.`,english:`When it spots enemies, it threatens them by
jingling the scales on its tail. Weak opponents
will crack and flee in panic.`,japanese:`敵を　見ると　尻尾の　ウロコを
ジャラジャラ　鳴らして　いかく。
弱い者は　あわてて　逃げ出す。`},sprite:null,height:24,weight:2075},{id:10147,names:{korean:"마기아나",english:"Magearna",japanese:"マギアナ"},descriptions:{korean:`500년 이상 전에 만들어진
인조포켓몬이다. 사람의 말을
이해하지만 말은 못 한다.`,english:`This artificial Pokémon, constructed more than
500 years ago, can understand human speech
but cannot itself speak.`,japanese:`５００年以上前に　造られた
人造ポケモン。　人の　言葉を
理解するが　しゃべれない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10147.png",height:10,weight:805},{id:10148,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png",height:4,weight:60},{id:10149,names:{korean:"텅구리",english:"Marowak",japanese:"ガラガラ"},descriptions:{korean:`몸집도 작으며 원래는
약했다. 뼈를 쓰기 시작하면서
성격이 흉포해졌다.`,english:`The bone it holds
is its key weapon.
It throws the\fbone skillfully
like a boomerang
to KO targets.`,japanese:`体も　小さく　もともと　弱かった。
骨を　使うようになり
性格が　凶暴化した。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10149.png",height:17,weight:980},{id:10150,names:{korean:"에리본",english:"Ribombee",japanese:"アブリボン"},descriptions:{korean:`꽃가루를 뭉쳐서 경단을 만든다.
식용부터 전투용까지
많은 종류가 있다.`,english:`It rolls up pollen into puffs. It makes many
different varieties, some used as food and
others used in battle.`,japanese:`花粉を　丸め　団子を　つくる。
食用　から　戦闘用　まで
たくさんの　種類が　あるよ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10150.png",height:4,weight:20},{id:10151,names:{korean:"암멍이",english:"Rockruff",japanese:"イワンコ"},descriptions:{korean:`잘 따르기 때문에 초보자에게
추천하는 포켓몬으로 불리지만
크면 기질이 거칠어진다.`,english:`It’s considered to be a good Pokémon for
beginners because of its friendliness, but its
disposition grows rougher as it grows up.`,japanese:`よく　なつくので　初心者に
お勧めのポケモンと　いわれるが
育つと　気性は　荒くなる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10151.png",height:5,weight:92},{id:10152,names:{korean:"루가루암",english:"Lycanroc",japanese:"ルガルガン"},descriptions:{korean:`재빨리 움직여 적을 어지럽힌다.
발톱이나 이빨 외에 갈기의
뾰족한 바위도 무기의 하나다.`,english:`Its quick movements confuse its enemies.
Well equipped with claws and fangs, it also uses
the sharp rocks in its mane as weapons.`,japanese:`素早く　動き　敵を　惑わす。
ツメや　キバの　ほか　タテガミの
とがった　岩も　武器の　ひとつ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10152.png",height:8,weight:250},{id:10153,names:{korean:"깨비물거미",english:"Araquanid",japanese:"オニシズクモ"},descriptions:{korean:`두부의 수포로 박치기한다.
작은 포켓몬이라면 그대로
수포에 싸여 익사한다.`,english:`It delivers headbutts with the water bubble
on its head. Small Pokémon get sucked into
the bubble, where they drown.`,japanese:`頭部の　水泡で　ヘッドバット。
小さなポケモンで　あれば　そのまま
水泡に　取り込まれ　溺れ死ぬ。`},sprite:null,height:31,weight:2175},{id:10154,names:{korean:"토게데마루",english:"Togedemaru",japanese:"トゲデマル"},descriptions:{korean:`등의 가시 털은 평소에
누워 있다가 흥분하면 곤두서
덮쳐오는 적을 찌른다.`,english:`The spiny fur on its back is normally at rest.
When this Pokémon becomes agitated, its fur
stands on end and stabs into its attackers.`,japanese:`背中の　ハリの　毛は　普段は
寝ている。　興奮すると　逆立ち
襲ってくる　敵を　突き刺すのだ。`},sprite:null,height:6,weight:130},{id:10155,names:{korean:"네크로즈마",english:"Necrozma",japanese:"ネクロズマ"},descriptions:{korean:`지하에서 잠들어 있던 것 같다.
태고의 다른 세계에서 왔다고
추측되는 UB같은 생물이다.`,english:`Reminiscent of the Ultra Beasts, this life-form,
apparently asleep underground, is thought to
have come from another world in ancient times.`,japanese:`地下で　眠りに　ついていたようだ。
太古に　別世界から　やってきたと
おもわれる　ＵＢらしき　生物。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10155.png",height:38,weight:4600},{id:10156,names:{korean:"네크로즈마",english:"Necrozma",japanese:"ネクロズマ"},descriptions:{korean:`지하에서 잠들어 있던 것 같다.
태고의 다른 세계에서 왔다고
추측되는 UB같은 생물이다.`,english:`Reminiscent of the Ultra Beasts, this life-form,
apparently asleep underground, is thought to
have come from another world in ancient times.`,japanese:`地下で　眠りに　ついていたようだ。
太古に　別世界から　やってきたと
おもわれる　ＵＢらしき　生物。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10156.png",height:42,weight:3500},{id:10157,names:{korean:"네크로즈마",english:"Necrozma",japanese:"ネクロズマ"},descriptions:{korean:`지하에서 잠들어 있던 것 같다.
태고의 다른 세계에서 왔다고
추측되는 UB같은 생물이다.`,english:`Reminiscent of the Ultra Beasts, this life-form,
apparently asleep underground, is thought to
have come from another world in ancient times.`,japanese:`地下で　眠りに　ついていたようだ。
太古に　別世界から　やってきたと
おもわれる　ＵＢらしき　生物。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10157.png",height:75,weight:2300},{id:10158,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:null,height:4,weight:60},{id:10159,names:{korean:"이브이",english:"Eevee",japanese:"イーブイ"},descriptions:{korean:`진화할 때 모습과 능력이
바뀜으로써 혹독한 환경에
적응하는 희귀한 포켓몬이다.`,english:`Its genetic code
is irregular.
It may mutate if\fit is exposed to
radiation from
element STONEs.`,japanese:`進化のとき　姿と　能力が
変わることで　きびしい　環境に
対応する　珍しい　ポケモン。`},sprite:null,height:3,weight:65},{id:10160,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:null,height:4,weight:60},{id:10161,names:{korean:"나옹",english:"Meowth",japanese:"ニャース"},descriptions:{korean:`한밤중에 움직이는 습성이 있다.
반짝반짝 빛나는 것을 발견하면
그에 못지않게 눈동자가 반짝인다.`,english:`It washes its face regularly to keep the coin on
its forehead spotless. It doesn’t get along with
Galarian Meowth.`,japanese:`夜中に　行動する　習性。
キラキラ　光るものを　見つけると
負けないくらい　瞳が　輝く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10161.png",height:4,weight:75},{id:10162,names:{korean:"포니타",english:"Ponyta",japanese:"ポニータ"},descriptions:{korean:`막 태어나서는 겨우 일어설 수 있을
정도이지만 많이 달리면 하반신이
단련되어 달리는 속도가 빨라진다.`,english:`Its hooves are 10
times harder than
diamonds. It can\ftrample anything
completely flat
in little time.`,japanese:`生まれたばかりでは　立つのがやっと。
だが　走るほどに　足腰は
鍛えられて　速度が　増していく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10162.png",height:8,weight:240},{id:10163,names:{korean:"날쌩마",english:"Rapidash",japanese:"ギャロップ"},descriptions:{korean:`빠르게 움직이는 물체를 보면
경주를 하고 싶어져서 맹렬한
스피드로 쫓아가기 시작한다.`,english:`Very competitive,
this POKéMON will
chase anything\fthat moves fast
in the hopes of
racing it.`,japanese:`速く　動く　物体を　見ると
競争したくなり　猛烈な
スピードで　追いかけはじめる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10163.png",height:17,weight:800},{id:10164,names:{korean:"야돈",english:"Slowpoke",japanese:"ヤドン"},descriptions:{korean:`항상 멍하니 있으므로 무슨
생각을 하고 있는지 알 수 없다.
꼬리로 먹이를 낚는 것이 특기다.`,english:`Incredibly slow
and dopey. It
takes 5 seconds\ffor it to feel
pain when under
attack.`,japanese:`いつも　ボーッとしていて　なにを
考えているか　わからない。
尻尾で　エサを　釣るのが　得意。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10164.png",height:12,weight:360},{id:10165,names:{korean:"야도란",english:"Slowbro",japanese:"ヤドラン"},descriptions:{korean:`붙어 있는 셀러는
꼬리에서 배어 나오는 맛을
좋아해서 계속 떨어지지 않는다.`,english:`The SHELLDER that
is latched onto
SLOWPOKE's tail\fis said to feed
on the host's left
over scraps.`,japanese:`くっついている　シェルダーは
尻尾から　にじみ出る　うま味が
欲しくて　ずっと　離れない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10165.png",height:16,weight:705},{id:10166,names:{korean:"파오리",english:"Farfetch’d",japanese:"カモネギ"},descriptions:{korean:`가지고 있는 파 줄기는 소중한
무기이기도 하며 칼을 휘두르듯
다양한 것을 자를 수 있다.`,english:`The sprig of
green onions it
holds is its\fweapon. It is
used much like a
metal sword.`,japanese:`持っている　茎は　大切な
武器でもあり　刀を　振るように
いろんな　ものを　切ることができる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10166.png",height:8,weight:420},{id:10167,names:{korean:"또도가스",english:"Weezing",japanese:"マタドガス"},descriptions:{korean:`한쪽이 부풀어 오르면 다른 한쪽은
오그라드는 쌍둥이 또가스. 항상
체내의 독가스를 섞고 있다.`,english:`Where two kinds
of poison gases
meet, 2 KOFFINGs\fcan fuse into a
WEEZING over many
years.`,japanese:`どちらかが　ふくらむと　片方は
しぼむ　双子の　ドガース。いつも
体内の　毒ガスを　混ぜている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10167.png",height:30,weight:160},{id:10168,names:{korean:"마임맨",english:"Mr. Mime",japanese:"バリヤード"},descriptions:{korean:`손가락 끝에서 내는 파동이
공기를 굳혀서 벽을 만든다.
격렬한 공격도 튕겨 낸다.`,english:`If interrupted
while it is
miming, it will\fslap around the
offender with its
broad hands.`,japanese:`指先から　出す　波動が
空気を　固めて　壁を　作る。
激しい　攻撃も　跳ね返す。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10168.png",height:14,weight:568},{id:10169,names:{korean:"프리져",english:"Articuno",japanese:"フリーザー"},descriptions:{korean:`전설의 새포켓몬이다.
공기 중의 수분을 얼려
눈보라를 만들어 낼 수 있다.`,english:`A legendary bird
POKéMON that is
said to appear to\fdoomed people who
are lost in icy
mountains.`,japanese:`伝説の　とりポケモン。
空気中の　水分を　凍らせ
吹雪を　作り出すことが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10169.png",height:17,weight:509},{id:10170,names:{korean:"썬더",english:"Zapdos",japanese:"サンダー"},descriptions:{korean:`구름 위에서 거대한
번개를 내리치며 나타난다.
전설의 새포켓몬이다.`,english:`A legendary bird
POKéMON that is
said to appear\ffrom clouds while
dropping enormous
lightning bolts.`,japanese:`雲の　上から　巨大な　稲妻を
落としながら　現れる
伝説の　とりポケモンである。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10170.png",height:16,weight:582},{id:10171,names:{korean:"파이어",english:"Moltres",japanese:"ファイヤー"},descriptions:{korean:`오래전부터 불새의 전설로
알려져 있다. 날갯짓할 때마다
날개가 눈부시게 불타올라서 아름답다.`,english:`Known as the
legendary bird of
fire. Every flap\fof its wings
creates a dazzling
flash of flames.`,japanese:`昔から　火の鳥伝説として
知られる。羽ばたくたびに　羽が
明るく　燃え上がり　美しい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10171.png",height:20,weight:660},{id:10172,names:{korean:"야도킹",english:"Slowking",japanese:"ヤドキング"},descriptions:{korean:`대단한 지성과 번뜩이는 재치를
가지고 있다. 어떤 때라도 당황하거나
소란 피우지 않고 느긋하게 있다.`,english:`It has incredible
intellect and in­
tuition. Whatever\fthe situation, it
remains calm and
collected.`,japanese:`すごい　知性と　ひらめきを
持っている。どんなときでも　あわてず
騒がず　のんびりとしている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10172.png",height:18,weight:795},{id:10173,names:{korean:"코산호",english:"Corsola",japanese:"サニーゴ"},descriptions:{korean:`점점 자라면서 다시 돋아나는
머리의 끝이 아름다워
보물로서 인기가 많다.`,english:`It continuously
sheds and grows.
The tip of its\fhead is prized as
a treasure for its
beauty.`,japanese:`どんどん　育っては　生えかわる
頭の　先は　きれいなので
宝物として　人気が高い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10173.png",height:6,weight:5},{id:10174,names:{korean:"지그제구리",english:"Zigzagoon",japanese:"ジグザグマ"},descriptions:{korean:`지그재그로 걸어서 풀숲이나
땅에 묻혀 있는 보물을
찾아내는 것이 특기인 포켓몬이다.`,english:`ZIGZAGOON restlessly wanders
everywhere at all times. This POKéMON
does so because it is very curious.\fIt becomes interested in anything
that it happens to see.`,japanese:`ジグザグに　歩いて　草陰や
地面に　埋まっている　宝物を
見つけるのが　得意な　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10174.png",height:4,weight:175},{id:10175,names:{korean:"직구리",english:"Linoone",japanese:"マッスグマ"},descriptions:{korean:`똑바로 달리는 스피드는
시속 100km를 가볍게 넘는다.
휘어진 길은 매우 서툴다.`,english:`LINOONE always runs full speed and only
in straight lines. If facing an obstacle,
it makes a right-angle turn to evade it.\fThis POKéMON is very challenged by
gently curving roads.`,japanese:`まっすぐ　走る　スピードは
時速１００キロを　軽く　超える。
曲がった　道は　とても　苦手。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10175.png",height:5,weight:325},{id:10176,names:{korean:"달막화",english:"Darumaka",japanese:"ダルマッカ"},descriptions:{korean:`달막화의 배설물은 뜨거워서
옛날 사람은 품에 넣고
몸을 따뜻하게 하는 데 사용했다.`,english:`When its internal fire is burning, it
cannot calm down and it runs around.
When the fire diminishes, it falls asleep.`,japanese:`ダルマッカの　フンは　熱いので
昔の　人は　懐に　入れて
体を　温めていたのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10176.png",height:7,weight:400},{id:10177,names:{korean:"불비달마",english:"Darmanitan",japanese:"ヒヒダルマ"},descriptions:{korean:`격렬한 싸움으로 상처 입으면
바위처럼 굳어져 묵상하며
마음을 연마한다.`,english:`Its internal fire burns at 2,500° F,
making enough power that it can
destroy a dump truck with one punch.`,japanese:`激しい　戦いで　傷つくと
岩のように　固まり　黙考して
心を　研ぎ澄ませるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10177.png",height:17,weight:1200},{id:10178,names:{korean:"불비달마",english:"Darmanitan",japanese:"ヒヒダルマ"},descriptions:{korean:`격렬한 싸움으로 상처 입으면
바위처럼 굳어져 묵상하며
마음을 연마한다.`,english:`Its internal fire burns at 2,500° F,
making enough power that it can
destroy a dump truck with one punch.`,japanese:`激しい　戦いで　傷つくと
岩のように　固まり　黙考して
心を　研ぎ澄ませるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10178.png",height:17,weight:1200},{id:10179,names:{korean:"데스마스",english:"Yamask",japanese:"デスマス"},descriptions:{korean:`무덤에 매장된 사람의
영혼이 포켓몬으로 변했다.
죽기 전 기억이 남아 있다.`,english:`Each of them carries a mask that used
to be its face when it was human.
Sometimes they look at it and cry.`,japanese:`お墓に　埋葬された　人の
魂が　ポケモンに　変化した。
死ぬ前の　記憶が　残っている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10179.png",height:5,weight:15},{id:10180,names:{korean:"메더",english:"Stunfisk",japanese:"マッギョ"},descriptions:{korean:`피부가 단단해서 씨름꾼에게
밟혀도 아무렇지 않다. 전기를
흘려보낼 때 웃는 얼굴이 된다.`,english:`Its skin is very hard, so it is unhurt
even if stepped on by sumo wrestlers.
It smiles when transmitting electricity.`,japanese:`皮膚が　硬いので
相撲取りに　踏まれても　平気。
電気を　流すとき　笑い顔に　なる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10180.png",height:7,weight:205},{id:10181,names:{korean:"지가르데",english:"Zygarde",japanese:"ジガルデ"},descriptions:{korean:`칼로스지방의 생태계가
무너지면 모습을 나타내어
숨겨진 힘을 발휘한다고 한다.`,english:`When the Kalos region’s ecosystem falls into
disarray, it appears and reveals its secret power.`,japanese:`カロス地方の　生態系が　崩れると
姿を　現して
秘めた　力を　発揮するらしい。`},sprite:null,height:12,weight:335},{id:10182,names:{korean:"윽우지",english:"Cramorant",japanese:"ウッウ"},descriptions:{korean:`상대를 일격에 쓰러뜨릴 정도로
파워풀하지만 건망증이 심해서
싸우고 있는 상대를 잊어버린다.`,english:`It’s so strong that it can knock out some
opponents in a single hit, but it also may
forget what it’s battling midfight.`,japanese:`相手を　一撃で　打ち負かすほど
パワフルだが　忘れっぽいので
戦っている　相手を　忘れる。`},sprite:null,height:8,weight:180},{id:10183,names:{korean:"윽우지",english:"Cramorant",japanese:"ウッウ"},descriptions:{korean:`상대를 일격에 쓰러뜨릴 정도로
파워풀하지만 건망증이 심해서
싸우고 있는 상대를 잊어버린다.`,english:`It’s so strong that it can knock out some
opponents in a single hit, but it also may
forget what it’s battling midfight.`,japanese:`相手を　一撃で　打ち負かすほど
パワフルだが　忘れっぽいので
戦っている　相手を　忘れる。`},sprite:null,height:8,weight:180},{id:10184,names:{korean:"스트린더",english:"Toxtricity",japanese:"ストリンダー"},descriptions:{korean:`가슴에 난 돌기를 긁으면
전기가 일어나며 주위에
기타와 비슷한 소리가 울려퍼진다.`,english:`When this Pokémon sounds as if it’s strumming a
guitar, it’s actually clawing at the protrusions on
its chest to generate electricity.`,japanese:`胸の　突起を　掻きむしり
電気を　起こすとき　あたりに
ギターのような　音が　響く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10184.png",height:16,weight:400},{id:10185,names:{korean:"빙큐보",english:"Eiscue",japanese:"コオリッポ"},descriptions:{korean:`매우 추운 곳에서 흘러 흘러
떠내려왔다. 항상 얼음으로
얼굴을 식히고 있다.`,english:`It drifted in on the flow of ocean waters from a
frigid place. It keeps its head iced constantly to
make sure it stays nice and cold.`,japanese:`とても　寒い　場所から　流れ
流されて　やってきた。　氷で
顔を　つねに　冷やして　いるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10185.png",height:14,weight:890},{id:10186,names:{korean:"에써르",english:"Indeedee",japanese:"イエッサン"},descriptions:{korean:`머리에 달린 뿔로 상대의 기분을
감지한다. 수컷은 집사처럼
주인의 곁에서 시중을 든다.`,english:`It uses the horns on its head to sense the
emotions of others. Males will act as valets for
those they serve, looking after their every need.`,japanese:`頭の　ツノで　相手の　気持ちを
感じとる。　オスは　従者の
ように　主のそばで　世話を焼く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10186.png",height:9,weight:280},{id:10187,names:{korean:"모르페코",english:"Morpeko",japanese:"モルペコ"},descriptions:{korean:`항상 배가 고프다.
호주머니같이 생긴 주머니에 넣어둔
씨앗을 먹어서 전기를 만든다.`,english:`As it eats the seeds stored up in its pocket-like
pouches, this Pokémon is not just satisfying its
constant hunger. It’s also generating electricity.`,japanese:`いつも　お腹を　すかせている。
ポケットの　ような　袋に　入れた
タネを　食べて　電気を　つくる。`},sprite:null,height:3,weight:30},{id:10188,names:{korean:"자시안",english:"Zacian",japanese:"ザシアン"},descriptions:{korean:`전설의 영웅이라고 불리는
포켓몬. 금속을 흡수한 뒤
무기로 변화시켜서 싸운다.`,english:`Known as a legendary hero, this Pokémon
absorbs metal particles, transforming them
into a weapon it uses to battle.`,japanese:`伝説の　英雄と　呼ばれる
ポケモン。　金属を　取り込み
武具に　変化させ　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10188.png",height:28,weight:3550},{id:10189,names:{korean:"자마젠타",english:"Zamazenta",japanese:"ザマゼンタ"},descriptions:{korean:`인간의 왕과 힘을 합쳐
가라르를 구한 포켓몬.
금속을 흡수해서 싸운다.`,english:`In times past, it worked together with a king of
the people to save the Galar region. It absorbs
metal that it then uses in battle.`,japanese:`人の王と　力を　あわせ
ガラルを　救った　ポケモン。
金属を　取り込み　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10189.png",height:29,weight:7850},{id:10190,names:{korean:"무한다이노",english:"Eternatus",japanese:"ムゲンダイナ"},descriptions:{korean:`가슴의 코어가 가라르지방의
대지에서 솟아나는 에너지를
흡수해서 활동한다.`,english:`The core on its chest absorbs energy emanating
from the lands of the Galar region. This energy is
what allows Eternatus to stay active.`,japanese:`胸の　コアが　ガラル地方の
大地から　涌きだす　エネルギーを
吸収して　活動している。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10190.png",height:1e3,weight:0},{id:10191,names:{korean:"우라오스",english:"Urshifu",japanese:"ウーラオス"},descriptions:{korean:`일격필살이 신조다.
상대의 품으로 파고들어
단련된 주먹을 질러 넣는다.`,english:`This form of Urshifu is a strong believer in the
one-hit KO. Its strategy is to leap in close to foes
and land a devastating blow with a hardened fist.`,japanese:`一撃必殺が　信条。
相手の　懐に　飛びこみ
鍛えられた　拳を　叩きこむ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10191.png",height:19,weight:1050},{id:10192,names:{korean:"자루도",english:"Zarude",japanese:"ザルード"},descriptions:{korean:`무리 지어 밀림에 산다.
매우 공격적이라 숲에 사는
포켓몬들에게는 두려움의 대상이다.`,english:`Within dense forests, this Pokémon lives in a pack
with others of its kind. It’s incredibly aggressive,
and the other Pokémon of the forest fear it.`,japanese:`群れを　つくり　密林で　暮らす。
とても　攻撃的で　森にすむ
ポケモンたちから　恐れられている。`},sprite:null,height:18,weight:700},{id:10193,names:{korean:"버드렉스",english:"Calyrex",japanese:"バドレックス"},descriptions:{korean:`치유와 은총의 힘을 가진
자애로운 포켓몬.
먼 옛날 가라르에 군림했었다.`,english:`Calyrex is a merciful Pokémon, capable of
providing healing and blessings. It reigned over
the Galar region in times of yore.`,japanese:`癒しと　恵みの　力を　もつ
慈愛に　満ちた　ポケモン。　はるか
むかし　ガラルに　君臨していた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10193.png",height:24,weight:8091},{id:10194,names:{korean:"버드렉스",english:"Calyrex",japanese:"バドレックス"},descriptions:{korean:`치유와 은총의 힘을 가진
자애로운 포켓몬.
먼 옛날 가라르에 군림했었다.`,english:`Calyrex is a merciful Pokémon, capable of
providing healing and blessings. It reigned over
the Galar region in times of yore.`,japanese:`癒しと　恵みの　力を　もつ
慈愛に　満ちた　ポケモン。　はるか
むかし　ガラルに　君臨していた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10194.png",height:24,weight:536},{id:10195,names:{korean:"이상해꽃",english:"Venusaur",japanese:"フシギバナ"},descriptions:{korean:`큰 꽃잎을 펼쳐
햇빛을 받고 있으면
몸에 힘이 넘쳐흐른다.`,english:`The plant blooms
when it is
absorbing solar\fenergy. It stays
on the move to
seek sunlight.`,japanese:`大きな　花びらを　広げ
太陽の　光を　浴びていると
体に　元気が　みなぎっていく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png",height:240,weight:1e4},{id:10196,names:{korean:"리자몽",english:"Charizard",japanese:"リザードン"},descriptions:{korean:`입에서 작렬하는 불꽃을
토해낼 때 꼬리의 끝이
더욱 붉고 격렬하게 타오른다.`,english:`Spits fire that
is hot enough to
melt boulders.\fKnown to cause
forest fires
unintentionally.`,japanese:`口から　灼熱の　炎を　吐き出すとき
尻尾の　先は
より　赤く　激しく　燃え上がる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png",height:280,weight:1e4},{id:10197,names:{korean:"거북왕",english:"Blastoise",japanese:"カメックス"},descriptions:{korean:`무거운 몸으로 상대를
덮쳐서 기절시킨다.
위기에 처하면 등껍질에 숨는다.`,english:`A brutal POKéMON
with pressurized
water jets on its\fshell. They are
used for high
speed tackles.`,japanese:`体が　重たく　のしかかって
相手を　気絶させる。
ピンチのときは　殻に　隠れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png",height:250,weight:1e4},{id:10198,names:{korean:"버터플",english:"Butterfree",japanese:"バタフリー"},descriptions:{korean:`꽃의 꿀을 매우 좋아한다.
약간의 꽃가루만으로 꽃밭이
있는 장소를 찾아낼 수 있다.`,english:`In battle, it
flaps its wings
at high speed to\frelease highly
toxic dust into
the air.`,japanese:`花の　ミツが　大好物。
わずかな　花粉で　花畑の
場所を　探し出すことが　できる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10198.png",height:170,weight:1e4},{id:10199,names:{korean:"피카츄",english:"Pikachu",japanese:"ピカチュウ"},descriptions:{korean:`꼬리를 세우고 주변의
상황을 살피다 보면 가끔
꼬리에 번개가 친다.`,english:`When several of
these POKéMON
gather, their\felectricity could
build and cause
lightning storms.`,japanese:`尻尾を　立てて　まわりの　様子を
探っていると　ときどき
雷が　尻尾に　落ちてくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png",height:210,weight:1e4},{id:10200,names:{korean:"나옹",english:"Meowth",japanese:"ニャース"},descriptions:{korean:`한밤중에 움직이는 습성이 있다.
반짝반짝 빛나는 것을 발견하면
그에 못지않게 눈동자가 반짝인다.`,english:`It washes its face regularly to keep the coin on
its forehead spotless. It doesn’t get along with
Galarian Meowth.`,japanese:`夜中に　行動する　習性。
キラキラ　光るものを　見つけると
負けないくらい　瞳が　輝く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10200.png",height:330,weight:1e4},{id:10201,names:{korean:"괴력몬",english:"Machamp",japanese:"カイリキー"},descriptions:{korean:`발달한 4개의 팔은
2초 동안 1000번의
펀치를 날릴 수 있다.`,english:`Using its heavy
muscles, it throws
powerful punches\fthat can send the
victim clear over
the horizon.`,japanese:`発達した　４本の　腕は
２秒間に　１０００発の　パンチを
繰り出すことができる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10201.png",height:250,weight:1e4},{id:10202,names:{korean:"팬텀",english:"Gengar",japanese:"ゲンガー"},descriptions:{korean:`그림자에 모습을 숨긴다.
팬텀이 숨어 있는 방은
온도가 5도 내려간다고 전해진다.`,english:`Under a full moon,
this POKéMON
likes to mimic\fthe shadows of
people and laugh
at their fright.`,japanese:`物陰に　姿を　隠す。
ゲンガーの　潜んでいる　部屋は
温度が　５度　下がるといわれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10202.png",height:200,weight:1e4},{id:10203,names:{korean:"킹크랩",english:"Kingler",japanese:"キングラー"},descriptions:{korean:`단단한 집게는 1만 마력의
파워를 지녔지만
너무 커서 움직임이 둔하다.`,english:`The large pincer
has 10000 hp of
crushing power.\fHowever, its huge
size makes it
unwieldy to use.`,japanese:`硬い　ハサミは　１万馬力の
パワーを　持っているが
大きすぎて　動きが　鈍い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10203.png",height:190,weight:1e4},{id:10204,names:{korean:"라프라스",english:"Lapras",japanese:"ラプラス"},descriptions:{korean:`부드러운 마음의 소유자다.
좀처럼 다투지 않아 많이
잡혔기 때문에 수가 줄었다.`,english:`A POKéMON that
has been over­
hunted almost to\fextinction. It
can ferry people
across the water.`,japanese:`優しい　心の　持ち主。
めったに　争わないため　たくさん
捕まえられ　数が　減った。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10204.png",height:240,weight:1e4},{id:10205,names:{korean:"이브이",english:"Eevee",japanese:"イーブイ"},descriptions:{korean:`진화할 때 모습과 능력이
바뀜으로써 혹독한 환경에
적응하는 희귀한 포켓몬이다.`,english:`Its genetic code
is irregular.
It may mutate if\fit is exposed to
radiation from
element STONEs.`,japanese:`進化のとき　姿と　能力が
変わることで　きびしい　環境に
対応する　珍しい　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10205.png",height:180,weight:1e4},{id:10206,names:{korean:"잠만보",english:"Snorlax",japanese:"カビゴン"},descriptions:{korean:`하루에 먹을 것을 400kg
먹지 않으면 성에 차지 않는다.
다 먹으면 잠이 들어 버린다.`,english:`Very lazy. Just
eats and sleeps.
As its rotund\fbulk builds, it
becomes steadily
more slothful.`,japanese:`１日に　食べ物を　４００キロ
食べないと　気がすまない。
食べ終わると　眠ってしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10206.png",height:350,weight:1e4},{id:10207,names:{korean:"더스트나",english:"Garbodor",japanese:"ダストダス"},descriptions:{korean:`왼팔로 상대를 꼭 붙들고
입에서 악취가 나는 독가스를
토해내서 마무리한다.`,english:`It clenches opponents with its left arm
and finishes them off with foul-smelling
poison gas belched from its mouth.`,japanese:`左腕で　相手を　絞めつけて
口から　吐き出す　悪臭の　毒ガスで
とどめを　刺すのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10207.png",height:210,weight:1e4},{id:10208,names:{korean:"멜메탈",english:"Melmetal",japanese:"メルメタル"},descriptions:{korean:`철을 만들어내는 힘을 가졌다고
추앙받았었다. 모종의 이유로
3000년의 세월이 흘러 되살아났다.`,english:`Revered long ago for its capacity to create iron
from nothing, for some reason it has come back
to life after 3,000 years.`,japanese:`鉄を　産み出す　力を　持つと
崇められていた。　３０００年の
時を　経て　なぜか　蘇った。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10208.png",height:250,weight:1e4},{id:10209,names:{korean:"고릴타",english:"Rillaboom",japanese:"ゴリランダー"},descriptions:{korean:`특별한 그루터기의 파워를
드럼 연주로 컨트롤한다.
뿌리를 조종해서 싸운다.`,english:`By drumming, it taps into the power of its special
tree stump. The roots of the stump follow its
direction in battle.`,japanese:`特別な　切り株の　パワーを
ドラミングで　コントロール。
根っこを　操って　戦う。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10209.png",height:280,weight:1e4},{id:10210,names:{korean:"에이스번",english:"Cinderace",japanese:"エースバーン"},descriptions:{korean:`작은 돌을 리프팅해서 불꽃의
축구공을 만들고 날카로운
슛으로 상대를 태워버린다.`,english:`It juggles a pebble with its feet, turning it into a
burning soccer ball. Its shots strike opponents
hard and leave them scorched.`,japanese:`小石を　リフティングして　炎の
サッカーボールを　つくる。　するどい
シュートで　相手を　燃やす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10210.png",height:270,weight:1e4},{id:10211,names:{korean:"인텔리레온",english:"Inteleon",japanese:"インテレオン"},descriptions:{korean:`다채로운 기능을 숨기고 있다.
손끝에서 물을 분사하고
등에 있는 피막으로 바람을 탄다.`,english:`It has many hidden capabilities, such as fingertips
that can shoot water and a membrane on its back
that it can use to glide through the air.`,japanese:`多彩な　機能を　隠し持つ。
指から　水を　噴射して
背中の　皮膜で　風に　乗る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10211.png",height:400,weight:1e4},{id:10212,names:{korean:"아머까오",english:"Corviknight",japanese:"アーマーガア"},descriptions:{korean:`가라르지방의 하늘에는 적수가 없다.
검고 윤이 나는 강철의 자태는
상대에게 위압감을 주어 겁먹게 만든다.`,english:`This Pokémon reigns supreme in the skies of the
Galar region. The black luster of its steel body
could drive terror into the heart of any foe.`,japanese:`ガラル地方の　空では　敵なし。
黒光りする　鋼の　姿は
相手を　威圧し　恐れさせる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10212.png",height:140,weight:1e4},{id:10213,names:{korean:"이올브",english:"Orbeetle",japanese:"イオルブ"},descriptions:{korean:`똑똑한 포켓몬으로 유명하다.
커다란 두뇌는 강력한
사이코 파워를 가졌다는 증거다.`,english:`It’s famous for its high level of intelligence, and
the large size of its brain is proof that it also
possesses immense psychic power.`,japanese:`賢い　ポケモンとして　有名。
大きな　脳みそは　強力な
サイコパワーを　もつ　証し。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10213.png",height:140,weight:1e4},{id:10214,names:{korean:"갈가부기",english:"Drednaw",japanese:"カジリガメ"},descriptions:{korean:`흉포한 성질을 가졌다. 철봉을
물어뜯어 버릴 정도의 턱 힘으로
먹이를 덥석 물어버린다.`,english:`With jaws that can shear through steel rods,
this highly aggressive Pokémon chomps down
on its unfortunate prey.`,japanese:`狂暴な　性質。　鉄棒を
噛み千切る　ほどの　顎の　力で
獲物に　ばくりと　噛みつく。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10214.png",height:240,weight:1e4},{id:10215,names:{korean:"석탄산",english:"Coalossal",japanese:"セキタンザン"},descriptions:{korean:`평소에는 온화하지만 인간이
광산을 훼손시키면 격분해서
1500도의 불꽃으로 태워버린다.`,english:`It’s usually peaceful, but the vandalism of mines
enrages it. Offenders will be incinerated with
flames that reach 2,700 degrees Fahrenheit.`,japanese:`普段は　穏やかだが　人間が
鉱山を　荒らすと　怒りくるい
１５００度の　炎で　焼きつくす。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10215.png",height:420,weight:1e4},{id:10216,names:{korean:"애프룡",english:"Flapple",japanese:"アップリュー"},descriptions:{korean:`새콤한 사과를 먹고 진화했다.
화상을 입을 정도로 강한 산성을 띠는
액체를 볼주머니에 저장하고 있다.`,english:`It ate a sour apple, and that induced its
evolution. In its cheeks, it stores an acid
capable of causing chemical burns.`,japanese:`すっぱい　りんごを　食べて　進化。
火傷する　ほど　強酸性の
液体を　頬袋に　溜める。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10216.png",height:240,weight:1e4},{id:10217,names:{korean:"단지래플",english:"Appletun",japanese:"タルップル"},descriptions:{korean:`달콤한 사과를 먹고 진화했다.
몸에서 달콤한 향기를 내보내서
먹이인 벌레포켓몬을 유인한다.`,english:`Eating a sweet apple caused its evolution.
A nectarous scent wafts from its body, luring in
the bug Pokémon it preys on.`,japanese:`甘い　りんごを　食べて　進化。
体から　甘い　においを　だして
餌の　虫ポケモンを　引き寄せる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10217.png",height:240,weight:1e4},{id:10218,names:{korean:"사다이사",english:"Sandaconda",japanese:"サダイジャ"},descriptions:{korean:`온몸을 수축시킨 뒤 100kg의
모래를 콧구멍으로 내뿜는다.
모래가 없으면 무기력해진다.`,english:`When it contracts its body, over 220 pounds of
sand sprays from its nose. If it ever runs out of
sand, it becomes disheartened.`,japanese:`全身を　縮め　１００キロの
砂を　鼻の　穴から　噴射。
砂が　ないと　弱気に　なるぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10218.png",height:220,weight:1e4},{id:10219,names:{korean:"스트린더",english:"Toxtricity",japanese:"ストリンダー"},descriptions:{korean:`가슴에 난 돌기를 긁으면
전기가 일어나며 주위에
기타와 비슷한 소리가 울려퍼진다.`,english:`When this Pokémon sounds as if it’s strumming a
guitar, it’s actually clawing at the protrusions on
its chest to generate electricity.`,japanese:`胸の　突起を　掻きむしり
電気を　起こすとき　あたりに
ギターのような　音が　響く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10219.png",height:240,weight:1e4},{id:10220,names:{korean:"다태우지네",english:"Centiskorch",japanese:"マルヤクデ"},descriptions:{korean:`발열 시의 체온은 약 800도.
몸을 채찍처럼 휘면서
덤벼든다.`,english:`When it heats up, its body temperature reaches
about 1,500 degrees Fahrenheit. It lashes its
body like a whip and launches itself at enemies.`,japanese:`発熱時の　体温は　およそ
８００度。　体を　鞭のように
しならせて　跳びかかってくるぞ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10220.png",height:750,weight:1e4},{id:10221,names:{korean:"브리무음",english:"Hatterene",japanese:"ブリムオン"},descriptions:{korean:`두통이 생길 정도의 사이코 파워를
주위에 발산해서 다른 생물이
접근하지 못하게 한다.`,english:`It emits psychic power strong enough to cause
headaches as a deterrent to the approach
of others.`,japanese:`頭痛になるほどの　サイコパワーを
周囲に　放って　ほかの
生物を　遠ざけているのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10221.png",height:260,weight:1e4},{id:10222,names:{korean:"오롱털",english:"Grimmsnarl",japanese:"オーロンゲ"},descriptions:{korean:`머리카락을 전신에 휘감아
근력이 올랐다. 괴력몬을
압도하는 파워를 발휘한다.`,english:`With the hair wrapped around its body helping to
enhance its muscles, this Pokémon can overwhelm
even Machamp.`,japanese:`髪の毛を　全身に　巻きつけると
筋力が　アップ。　カイリキーを
ねじ伏せる　パワーを　発揮する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10222.png",height:320,weight:1e4},{id:10223,names:{korean:"마휘핑",english:"Alcremie",japanese:"マホイップ"},descriptions:{korean:`믿을 수 있는 트레이너에게는
크림으로 데코레이션한
나무열매를 대접한다.`,english:`When it trusts a Trainer, it will treat them to
berries it’s decorated with cream.`,japanese:`信頼する　トレーナーには
クリームで　デコレーションした
木の実を　ふるまって　くれるのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10223.png",height:300,weight:1e4},{id:10224,names:{korean:"대왕끼리동",english:"Copperajah",japanese:"ダイオウドウ"},descriptions:{korean:`녹색 피부는 물에도 강하다.
오래전에 다른 지방에서 오게 되어
사람과 함께 일했다.`,english:`They came over from another region long
ago and worked together with humans.
Their green skin is resistant to water.`,japanese:`緑の皮膚は　水にも　強い。
昔　ほかの土地から　やってきて
人と　いっしょに　働いた。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10224.png",height:230,weight:1e4},{id:10225,names:{korean:"두랄루돈",english:"Duraludon",japanese:"ジュラルドン"},descriptions:{korean:`윤이 나는 금속과도 같은
몸은 가벼우면서도 튼튼하지만
녹슬기 쉽다는 것이 흠이다.`,english:`Its body resembles polished metal, and it’s both
lightweight and strong. The only drawback is that
it rusts easily.`,japanese:`磨きあげた　金属の　ような
体は　軽いうえに　硬いが
錆びやすいのが　欠点なのだ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10225.png",height:430,weight:1e4},{id:10226,names:{korean:"우라오스",english:"Urshifu",japanese:"ウーラオス"},descriptions:{korean:`일격필살이 신조다.
상대의 품으로 파고들어
단련된 주먹을 질러 넣는다.`,english:`This form of Urshifu is a strong believer in the
one-hit KO. Its strategy is to leap in close to foes
and land a devastating blow with a hardened fist.`,japanese:`一撃必殺が　信条。
相手の　懐に　飛びこみ
鍛えられた　拳を　叩きこむ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10226.png",height:290,weight:1e4},{id:10227,names:{korean:"우라오스",english:"Urshifu",japanese:"ウーラオス"},descriptions:{korean:`일격필살이 신조다.
상대의 품으로 파고들어
단련된 주먹을 질러 넣는다.`,english:`This form of Urshifu is a strong believer in the
one-hit KO. Its strategy is to leap in close to foes
and land a devastating blow with a hardened fist.`,japanese:`一撃必殺が　信条。
相手の　懐に　飛びこみ
鍛えられた　拳を　叩きこむ。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10227.png",height:260,weight:1e4},{id:10228,names:{korean:"스트린더",english:"Toxtricity",japanese:"ストリンダー"},descriptions:{korean:`가슴에 난 돌기를 긁으면
전기가 일어나며 주위에
기타와 비슷한 소리가 울려퍼진다.`,english:`When this Pokémon sounds as if it’s strumming a
guitar, it’s actually clawing at the protrusions on
its chest to generate electricity.`,japanese:`胸の　突起を　掻きむしり
電気を　起こすとき　あたりに
ギターのような　音が　響く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10228.png",height:240,weight:1e4},{id:10229,names:{korean:"가디",english:"Growlithe",japanese:"ガーディ"},descriptions:{korean:`사람을 잘 따르는 충실한 성격이다.
적에게는 짖거나 물며
쫓아내려고 한다.`,english:`Very protective
of its territory.
It will bark and\fbite to repel
intruders from
its space.`,japanese:`人懐こく　誠実な　性格。
敵には　ほえて　かみつき
追い払おうとする。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10229.png",height:8,weight:227},{id:10230,names:{korean:"윈디",english:"Arcanine",japanese:"ウインディ"},descriptions:{korean:`옛날부터 많은 사람의
마음을 사로잡은 아름다운 포켓몬이다.
날듯이 경쾌하게 달린다.`,english:`A POKéMON that
has been admired
since the past\ffor its beauty.
It runs agilely
as if on wings.`,japanese:`昔から　多くの　人を
虜にした　美しい　ポケモン。
飛ぶように　軽やかに　走る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10230.png",height:20,weight:1680},{id:10231,names:{korean:"찌리리공",english:"Voltorb",japanese:"ビリリダマ"},descriptions:{korean:`몬스터볼이 팔리기 시작했을 때와
같은 시기에 발견되었다.
뭔가 관계가 있다고 전해진다.`,english:`Usually found in
power plants.
Easily mistaken\ffor a POKé BALL,
they have zapped
many people.`,japanese:`モンスターボールが　売り出されたのと
同じ　時期に　発見された。
なにか　関係があると　いわれる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10231.png",height:5,weight:130},{id:10232,names:{korean:"붐볼",english:"Electrode",japanese:"マルマイン"},descriptions:{korean:`작은 자극에도 반응해서
폭발한다. 폭탄볼이라 불리며
두려움의 대상이 되고 있다.`,english:`It stores electric
energy under very
high pressure.\fIt often explodes
with little or no
provocation.`,japanese:`少しの　刺激に　反応して
爆発する。バクダンボールという
あだ名で　怖がられている。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10232.png",height:12,weight:710},{id:10233,names:{korean:"블레이범",english:"Typhlosion",japanese:"バクフーン"},descriptions:{korean:`분노가 정점에 달했을 때
건드린 자를 모두 순식간에
불태워버릴 정도로 뜨겁다.`,english:`If its rage peaks,
it becomes so hot
that anything that\ftouches it will
instantly go
up in flames.`,japanese:`怒りが　最高潮のとき
触ったもの　すべて　一瞬で
燃え上がらせるほどに　熱い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10233.png",height:16,weight:698},{id:10234,names:{korean:"침바루",english:"Qwilfish",japanese:"ハリーセン"},descriptions:{korean:`전신의 독침을 날리기 위해
10리터의 물을 단번에
마시고 몸을 부풀린다.`,english:`To fire its poison
spikes, it must
inflate its body\fby drinking over
2.6 gallons of
water all at once.`,japanese:`全身の　毒針を　飛ばすため
１０リットルの　水を　一気に
飲みこみ　体を　ふくらませる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10234.png",height:5,weight:39},{id:10235,names:{korean:"포푸니",english:"Sneasel",japanese:"ニューラ"},descriptions:{korean:`거처에서 알을 가로채어 먹어
버린다. 날카로운 갈고리 손톱이
상대의 급소를 베어 가른다.`,english:`Its paws conceal
sharp claws. If
attacked, it sud­\fdenly extends the
claws and startles
its enemy.`,japanese:`住処から　タマゴを　かすめ取り
食べてしまう。鋭い　カギヅメが
相手の　急所を　切り裂く。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10235.png",height:9,weight:270},{id:10236,names:{korean:"대검귀",english:"Samurott",japanese:"ダイケンキ"},descriptions:{korean:`상대가 눈을 깜빡이는 동안에
앞다리에 붙어 있는 각검으로
상대를 베고 원래대로 되돌린다.`,english:`One swing of the sword incorporated in
its armor can fell an opponent. A simple
glare from one of them quiets everybody.`,japanese:`敵が　瞬きする　あいだに
前足に　ついた　アシガタナで
相手を　切りつけ　元に戻せる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10236.png",height:15,weight:582},{id:10237,names:{korean:"드레디어",english:"Lilligant",japanese:"ドレディア"},descriptions:{korean:`머리에 있는 꽃 장식의 향기에는
긴장을 풀어 주는 효과가 있다.
자주 손질하지 않으면 시들어 버린다.`,english:`Even veteran Trainers face a challenge
in getting its beautiful flower to bloom.
This Pokémon is popular with celebrities.`,japanese:`頭の　花飾りの　香りには
リラックスさせる　効果が　ある。
手入れを　怠けると　枯れてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10237.png",height:12,weight:192},{id:10238,names:{korean:"조로아",english:"Zorua",japanese:"ゾロア"},descriptions:{korean:`상대와 똑 닮게 둔갑한 것처럼
보이게 하여 속이거나 놀라게 해서
그 틈에 도망가는 일이 많다.`,english:`It changes into the forms of others
to surprise them. Apparently, it
often transforms into a silent child.`,japanese:`相手そっくりに　化けているように
みせかけ　だましたり　驚かして
そのすきに　逃げ出すことが　多い。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10238.png",height:7,weight:125},{id:10239,names:{korean:"조로아크",english:"Zoroark",japanese:"ゾロアーク"},descriptions:{korean:`한 번에 많은 사람을
속이는 힘을 가졌다. 환영의
경치를 보여줘 거처를 지킨다.`,english:`Bonds between these Pokémon are very
strong. It protects the safety of its
pack by tricking its opponents.`,japanese:`いっぺんに　大勢の　人を
化かす　力を　持つ。
幻の　景色を　見せて　住処を　守る。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10239.png",height:16,weight:730},{id:10240,names:{korean:"워글",english:"Braviary",japanese:"ウォーグル"},descriptions:{korean:`동료를 위해서라면 아무리
상처를 입더라도 싸움을 관두지 않는
용감한 넓은 하늘의 전사.`,english:`They fight for their friends without any
thought about danger to themselves.
One can carry a car while flying.`,japanese:`仲間の　ためなら　どれだけ
傷つこうとも　戦いを　やめない
勇敢な　大空の　戦士。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10240.png",height:17,weight:434},{id:10241,names:{korean:"미끄네일",english:"Sliggoo",japanese:"ヌメイル"},descriptions:{korean:`무엇이든 녹여버리는 점액을
분비해 적을 격퇴한다.
눈은 퇴화하여 보이지 않는다.`,english:`It drives away opponents by excreting a
sticky liquid that can dissolve anything.
Its eyes devolved, so it can’t see anything.`,japanese:`なんでも　溶かしてしまう　粘液を
分泌して　敵を　撃退する。
目玉は　退化して　見えていない。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10241.png",height:7,weight:685},{id:10242,names:{korean:"미끄래곤",english:"Goodra",japanese:"ヌメルゴン"},descriptions:{korean:`사람을 잘 따르는 드래곤포켓몬이다.
좋아하는 트레이너에게 달려들어
미끈미끈한 점액투성이로 만들어 버린다.`,english:`This very friendly Dragon-type Pokémon
will hug its beloved Trainer, leaving
that Trainer covered in sticky slime.`,japanese:`人懐っこい　ドラゴンポケモン。
大好きな　トレーナーに　抱き着いて
粘液で　ヌルヌルにしてしまう。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10242.png",height:17,weight:3341},{id:10243,names:{korean:"크레베이스",english:"Avalugg",japanese:"クレベース"},descriptions:{korean:`얼어붙은 몸은 강철처럼
단단하다. 앞을 가로막는 것을
커다란 몸으로 파괴하며 이동한다.`,english:`Its ice-covered body is as hard as steel.
Its cumbersome frame crushes anything that
stands in its way.`,japanese:`凍りついた　体は　鋼鉄のように
硬い。立ちふさがる　ものを
巨体で　押しつぶし　移動する。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10243.png",height:14,weight:2624},{id:10244,names:{korean:"모크나이퍼",english:"Decidueye",japanese:"ジュナイパー"},descriptions:{korean:`날개에 숨겨진 살깃을 시위에
메겨서 날린다. 100m 앞의
작은 돌도 관통하는 정밀함이다.`,english:`It fires arrow quills from its wings with such
precision, they can pierce a pebble at distances
over a hundred yards.`,japanese:`翼に　仕込まれた　矢羽を
番えて放つ。　１００メートル先の
小石も　貫く　精度。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10244.png",height:16,weight:370},{id:10245,names:{korean:"디아루가",english:"Dialga",japanese:"ディアルガ"},descriptions:{korean:`디아루가가 태어남으로써
시간이 움직이기 시작했다는
전설이 내려오는 포켓몬이다.`,english:`It has the power to control time.
It appears in Sinnoh-region myths
as an ancient deity.`,japanese:`ディアルガが　生まれたことで
時間が　動き出したという
伝説を　持つ　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10245.png",height:70,weight:8487},{id:10246,names:{korean:"펄기아",english:"Palkia",japanese:"パルキア"},descriptions:{korean:`평행으로 늘어선 공간의
틈새에 산다고 전해진다.
신화에 등장하는 포켓몬이다.`,english:`It has the ability to distort
space. It is described as a deity
in Sinnoh-region mythology.`,japanese:`並行して　並ぶ　空間の　狭間に
住むと　言われている。
神話に　登場する　ポケモン。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10246.png",height:63,weight:6590},{id:10247,names:{korean:"배쓰나이",english:"Basculin",japanese:"バスラオ"},descriptions:{korean:`아주 난폭하고 항상 빨강과
파랑의 배쓰나이는 다투고 있다.
먹으면 의외로 맛있다고 한다.`,english:`Red and blue Basculin get along so
poorly, they’ll start fighting instantly.
These Pokémon are very hostile.`,japanese:`とても　乱暴で　いつも　あかと
あおの　バスラオは　争っている。
食べると　意外と　おいしいらしい。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10247.png",height:10,weight:180},{id:10248,names:{korean:"대쓰여너",english:"Basculegion",japanese:"イダイトウ"},descriptions:{korean:"",english:`Clads itself in the souls of comrades that perished before
fulfilling their goals of journeying upstream. No other species
throughout all Hisui's rivers is Basculegion's equal.`,japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10248.png",height:30,weight:1100},{id:10249,names:{korean:"러브로스",english:"Enamorus",japanese:"ラブトロス"},descriptions:{korean:"",english:`When it flies to this land from across the sea, the bitter winter
comes to an end. According to legend, this Pokémon's love
gives rise to the budding of fresh life across Hisui.`,japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10249.png",height:16,weight:480},{id:10250,names:{korean:"켄타로스",english:"Tauros",japanese:"ケンタロス"},descriptions:{korean:`3개의 꼬리로 자신을 때려서
투지가 끓어오르면
전속력으로 돌진해온다.`,english:`When it targets
an enemy, it
charges furiously\fwhile whipping its
body with its
long tails.`,japanese:`３本の　尻尾で　自分を　たたき
戦う　気持ちを　高めると
全速力で　突っこんでくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10250.png",height:14,weight:1150},{id:10251,names:{korean:"켄타로스",english:"Tauros",japanese:"ケンタロス"},descriptions:{korean:`3개의 꼬리로 자신을 때려서
투지가 끓어오르면
전속력으로 돌진해온다.`,english:`When it targets
an enemy, it
charges furiously\fwhile whipping its
body with its
long tails.`,japanese:`３本の　尻尾で　自分を　たたき
戦う　気持ちを　高めると
全速力で　突っこんでくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10251.png",height:14,weight:850},{id:10252,names:{korean:"켄타로스",english:"Tauros",japanese:"ケンタロス"},descriptions:{korean:`3개의 꼬리로 자신을 때려서
투지가 끓어오르면
전속력으로 돌진해온다.`,english:`When it targets
an enemy, it
charges furiously\fwhile whipping its
body with its
long tails.`,japanese:`３本の　尻尾で　自分を　たたき
戦う　気持ちを　高めると
全速力で　突っこんでくる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10252.png",height:14,weight:1100},{id:10253,names:{korean:"우파",english:"Wooper",japanese:"ウパー"},descriptions:{korean:`차가운 물속에서 생활한다.
근처가 선선해지면 먹이를
찾으러 지상에도 나타난다.`,english:`This POKéMON lives
in cold water. It
will leave the\fwater to search
for food when it
gets cold outside.`,japanese:`冷たい　水の中で　生活。
あたりが　涼しくなると　エサを
探しに　地上にも　現れる。`},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10253.png",height:4,weight:110},{id:10254,names:{korean:"퍼퓨돈",english:"Oinkologne",japanese:"パフュートン"},descriptions:{korean:"",english:"Oinkologne is proud of its fine, glossy skin. It emits a concentrated scent from the tip of its tail.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10254.png",height:10,weight:1200},{id:10255,names:{korean:"노고고치",english:"Dudunsparce",japanese:"ノココッチ"},descriptions:{korean:"",english:"This Pokémon uses its hard tail to make its nest by boring holes into bedrock deep underground. The nest can reach lengths of over six miles.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10255.png",height:45,weight:474},{id:10256,names:{korean:"돌핀맨",english:"Palafin",japanese:"イルカマン"},descriptions:{korean:"",english:"This Pokémon changes its appearance if it hears its allies calling for help. Palafin will never show anybody its moment of transformation.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10256.png",height:18,weight:974},{id:10257,names:{korean:"파밀리쥐",english:"Maushold",japanese:"イッカネズミ"},descriptions:{korean:"",english:"The two little ones just appeared one day. The group might be a family of related Pokémon, but nobody knows for sure.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10257.png",height:3,weight:28},{id:10258,names:{korean:"싸리용",english:"Tatsugiri",japanese:"シャリタツ"},descriptions:{korean:"",english:"This is a small dragon Pokémon. It lives inside the mouth of Dondozo to protect itself from enemies on the outside.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10258.png",height:3,weight:80},{id:10259,names:{korean:"싸리용",english:"Tatsugiri",japanese:"シャリタツ"},descriptions:{korean:"",english:"This is a small dragon Pokémon. It lives inside the mouth of Dondozo to protect itself from enemies on the outside.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10259.png",height:3,weight:80},{id:10260,names:{korean:"시비꼬",english:"Squawkabilly",japanese:"イキリンコ"},descriptions:{korean:"",english:"These Pokémon prefer to live in cities. They form flocks based on the color of their feathers, and they fight over territory.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10260.png",height:6,weight:24},{id:10261,names:{korean:"시비꼬",english:"Squawkabilly",japanese:"イキリンコ"},descriptions:{korean:"",english:"These Pokémon prefer to live in cities. They form flocks based on the color of their feathers, and they fight over territory.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10261.png",height:6,weight:24},{id:10262,names:{korean:"시비꼬",english:"Squawkabilly",japanese:"イキリンコ"},descriptions:{korean:"",english:"These Pokémon prefer to live in cities. They form flocks based on the color of their feathers, and they fight over territory.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10262.png",height:6,weight:24},{id:10263,names:{korean:"모으령",english:"Gimmighoul",japanese:"コレクレー"},descriptions:{korean:"",english:"This Pokémon was born inside a treasure chest about 1,500 years ago. It sucks the life-force out of scoundrels who try to steal the treasure.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10263.png",height:1,weight:10},{id:10264,names:{korean:"코라이돈",english:"Koraidon",japanese:"コライドン"},descriptions:{korean:"",english:"This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists.",japanese:""},sprite:null,height:35,weight:3030},{id:10265,names:{korean:"코라이돈",english:"Koraidon",japanese:"コライドン"},descriptions:{korean:"",english:"This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists.",japanese:""},sprite:null,height:35,weight:3030},{id:10266,names:{korean:"코라이돈",english:"Koraidon",japanese:"コライドン"},descriptions:{korean:"",english:"This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists.",japanese:""},sprite:null,height:35,weight:3030},{id:10267,names:{korean:"코라이돈",english:"Koraidon",japanese:"コライドン"},descriptions:{korean:"",english:"This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists.",japanese:""},sprite:null,height:35,weight:3030},{id:10268,names:{korean:"미라이돈",english:"Miraidon",japanese:"ミライドン"},descriptions:{korean:"",english:"Much remains unknown about this creature. It resembles Cyclizar, but it is far more ruthless and powerful.",japanese:""},sprite:null,height:28,weight:2400},{id:10269,names:{korean:"미라이돈",english:"Miraidon",japanese:"ミライドン"},descriptions:{korean:"",english:"Much remains unknown about this creature. It resembles Cyclizar, but it is far more ruthless and powerful.",japanese:""},sprite:null,height:28,weight:2400},{id:10270,names:{korean:"미라이돈",english:"Miraidon",japanese:"ミライドン"},descriptions:{korean:"",english:"Much remains unknown about this creature. It resembles Cyclizar, but it is far more ruthless and powerful.",japanese:""},sprite:null,height:28,weight:2400},{id:10271,names:{korean:"미라이돈",english:"Miraidon",japanese:"ミライドン"},descriptions:{korean:"",english:"Much remains unknown about this creature. It resembles Cyclizar, but it is far more ruthless and powerful.",japanese:""},sprite:null,height:28,weight:2400},{id:10272,names:{korean:"다투곰",english:"Ursaluna",japanese:"ガチグマ"},descriptions:{korean:"",english:`I believe it was Hisui's swampy terrain that gave Ursaluna its
burly physique and newfound capacity to manipulate peat
at will.`,japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10272.png",height:24,weight:2900},{id:10273,names:{korean:"오거폰",english:"Ogerpon",japanese:"オーガポン"},descriptions:{korean:"",english:"This Pokémon's type changes based on which mask it's wearing. It confounds its enemies with nimble movements and kicks.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10273.png",height:12,weight:398},{id:10274,names:{korean:"오거폰",english:"Ogerpon",japanese:"オーガポン"},descriptions:{korean:"",english:"This Pokémon's type changes based on which mask it's wearing. It confounds its enemies with nimble movements and kicks.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10274.png",height:12,weight:398},{id:10275,names:{korean:"오거폰",english:"Ogerpon",japanese:"オーガポン"},descriptions:{korean:"",english:"This Pokémon's type changes based on which mask it's wearing. It confounds its enemies with nimble movements and kicks.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10275.png",height:12,weight:398},{id:10276,names:{korean:"테라파고스",english:"Terapagos",japanese:"テラパゴス"},descriptions:{korean:"",english:"Terapagos protects itself using its power to transform energy into hard crystals. This Pokémon is the source of the Terastal phenomenon.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10276.png",height:3,weight:160},{id:10277,names:{korean:"테라파고스",english:"Terapagos",japanese:"テラパゴス"},descriptions:{korean:"",english:"Terapagos protects itself using its power to transform energy into hard crystals. This Pokémon is the source of the Terastal phenomenon.",japanese:""},sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10277.png",height:17,weight:770}],Eo=te({border:[Boolean,Number,String]},"border");function xo(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:En();return{borderClasses:v(()=>{const s=_e(e)?e.value:e.border,i=[];if(s===!0||s==="")i.push(`${n}--border`);else if(typeof s=="string"||s===0)for(const a of String(s).split(" "))i.push(`border-${a}`);return i})}}const yw=[null,"default","comfortable","compact"],It=te({density:{type:String,default:"default",validator:e=>yw.includes(e)}},"density");function Gt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:En();return{densityClasses:v(()=>`${n}--density-${e.density}`)}}const _o=te({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Mo(e){return{elevationClasses:v(()=>{const t=_e(e)?e.value:e.elevation,s=[];return t==null||s.push(`elevation-${t}`),s})}}const At=te({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Tt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:En();return{roundedClasses:v(()=>{const s=_e(e)?e.value:e.rounded,i=_e(e)?e.value:e.tile,a=[];if(s===!0||s==="")a.push(`${n}--rounded`);else if(typeof s=="string"||s===0)for(const o of String(s).split(" "))a.push(`rounded-${o}`);else(i||s===!1)&&a.push("rounded-0");return a})}}const Qe=te({tag:{type:String,default:"div"}},"tag");function Ro(e){return vo(()=>{const n=[],t={};if(e.value.background)if(Aa(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&Om(e.value.background)){const s=Sn(e.value.background);if(s.a==null||s.a===1){const i=Fp(s);t.color=i,t.caretColor=i}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(Aa(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:t}})}function Pt(e,n){const t=v(()=>({text:_e(e)?e.value:n?e[n]:null})),{colorClasses:s,colorStyles:i}=Ro(t);return{textColorClasses:s,textColorStyles:i}}function vt(e,n){const t=v(()=>({background:_e(e)?e.value:n?e[n]:null})),{colorClasses:s,colorStyles:i}=Ro(t);return{backgroundColorClasses:s,backgroundColorStyles:i}}const vw=["elevated","flat","tonal","outlined","text","plain"];function No(e,n){return k(Se,null,[e&&k("span",{key:"overlay",class:`${n}__overlay`},null),k("span",{key:"underlay",class:`${n}__underlay`},null)])}const Li=te({color:String,variant:{type:String,default:"elevated",validator:e=>vw.includes(e)}},"variant");function Bo(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:En();const t=v(()=>{const{variant:a}=Ze(e);return`${n}--variant-${a}`}),{colorClasses:s,colorStyles:i}=Ro(v(()=>{const{variant:a,color:o}=Ze(e);return{[["elevated","flat"].includes(a)?"background":"text"]:o}}));return{colorClasses:s,colorStyles:i,variantClasses:t}}const fc=te({baseColor:String,divided:Boolean,...Eo(),...Oe(),...It(),..._o(),...At(),...Qe(),...fn(),...Li()},"VBtnGroup"),Kh=ce()({name:"VBtnGroup",props:fc(),setup(e,n){let{slots:t}=n;const{themeClasses:s}=Pn(e),{densityClasses:i}=Gt(e),{borderClasses:a}=xo(e),{elevationClasses:o}=Mo(e),{roundedClasses:r}=Tt(e);xi({VBtn:{height:"auto",baseColor:Ve(e,"baseColor"),color:Ve(e,"color"),density:Ve(e,"density"),flat:!0,variant:Ve(e,"variant")}}),ve(()=>k(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},s.value,a.value,i.value,o.value,r.value,e.class],style:e.style},t))}}),kc=te({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),wc=te({value:null,disabled:Boolean,selectedClass:String},"group-item");function bc(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const s=qe("useGroupItem");if(!s)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Ut();bn(Symbol.for(`${n.description}:id`),i);const a=Be(n,null);if(!a){if(!t)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const o=Ve(e,"value"),r=v(()=>!!(a.disabled.value||e.disabled));a.register({id:i,value:o,disabled:r},s),vn(()=>{a.unregister(i)});const h=v(()=>a.isSelected(i)),l=v(()=>a.items.value[0].id===i),p=v(()=>a.items.value[a.items.value.length-1].id===i),c=v(()=>h.value&&[a.selectedClass.value,e.selectedClass]);return pe(h,g=>{s.emit("group:selected",{value:g})},{flush:"sync"}),{id:i,isSelected:h,isFirst:l,isLast:p,toggle:()=>a.select(i,!h.value),select:g=>a.select(i,g),selectedClass:c,value:o,disabled:r,group:a}}function Lo(e,n){let t=!1;const s=mn([]),i=xn(e,"modelValue",[],g=>g==null?[]:yc(s,as(g)),g=>{const u=jw(s,g);return e.multiple?u:u[0]}),a=qe("useGroup");function o(g,u){const f=g,d=Symbol.for(`${n.description}:id`),y=es(d,a==null?void 0:a.vnode).indexOf(u);Ze(f.value)==null&&(f.value=y,f.useIndexAsValue=!0),y>-1?s.splice(y,0,f):s.push(f)}function r(g){if(t)return;h();const u=s.findIndex(f=>f.id===g);s.splice(u,1)}function h(){const g=s.find(u=>!u.disabled);g&&e.mandatory==="force"&&!i.value.length&&(i.value=[g.id])}tn(()=>{h()}),vn(()=>{t=!0}),ao(()=>{for(let g=0;g<s.length;g++)s[g].useIndexAsValue&&(s[g].value=g)});function l(g,u){const f=s.find(d=>d.id===g);if(!(u&&(f!=null&&f.disabled)))if(e.multiple){const d=i.value.slice(),b=d.findIndex(P=>P===g),y=~b;if(u=u??!y,y&&e.mandatory&&d.length<=1||!y&&e.max!=null&&d.length+1>e.max)return;b<0&&u?d.push(g):b>=0&&!u&&d.splice(b,1),i.value=d}else{const d=i.value.includes(g);if(e.mandatory&&d)return;i.value=u??!d?[g]:[]}}function p(g){if(e.multiple,i.value.length){const u=i.value[0],f=s.findIndex(y=>y.id===u);let d=(f+g)%s.length,b=s[d];for(;b.disabled&&d!==f;)d=(d+g)%s.length,b=s[d];if(b.disabled)return;i.value=[s[d].id]}else{const u=s.find(f=>!f.disabled);u&&(i.value=[u.id])}}const c={register:o,unregister:r,selected:i,select:l,disabled:Ve(e,"disabled"),prev:()=>p(s.length-1),next:()=>p(1),isSelected:g=>i.value.includes(g),selectedClass:v(()=>e.selectedClass),items:v(()=>s),getItemIndex:g=>Pw(s,g)};return bn(n,c),c}function Pw(e,n){const t=yc(e,[n]);return t.length?e.findIndex(s=>s.id===t[0]):-1}function yc(e,n){const t=[];return n.forEach(s=>{const i=e.find(o=>wo(s,o.value)),a=e[s];(i==null?void 0:i.value)!=null?t.push(i.id):a!=null&&t.push(a.id)}),t}function jw(e,n){const t=[];return n.forEach(s=>{const i=e.findIndex(a=>a.id===s);if(~i){const a=e[i];t.push(a.value!=null?a.value:i)}}),t}const vc=Symbol.for("vuetify:v-btn-toggle"),Iw=te({...fc(),...kc()},"VBtnToggle");ce()({name:"VBtnToggle",props:Iw(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{isSelected:s,next:i,prev:a,select:o,selected:r}=Lo(e,vc);return ve(()=>{const h=Kh.filterProps(e);return k(Kh,Ce({class:["v-btn-toggle",e.class]},h,{style:e.style}),{default:()=>{var l;return[(l=t.default)==null?void 0:l.call(t,{isSelected:s,next:i,prev:a,select:o,selected:r})]}})}),{next:i,prev:a,select:o}}});const Aw=te({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Ln=ce(!1)({name:"VDefaultsProvider",props:Aw(),setup(e,n){let{slots:t}=n;const{defaults:s,disabled:i,reset:a,root:o,scoped:r}=ji(e);return xi(s,{reset:a,root:o,scoped:r,disabled:i}),()=>{var h;return(h=t.default)==null?void 0:h.call(t)}}}),Tw=["x-small","small","default","large","x-large"],Fi=te({size:{type:[String,Number],default:"default"}},"size");function Vi(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:En();return vo(()=>{let t,s;return li(Tw,e.size)?t=`${n}--size-${e.size}`:e.size&&(s={width:ue(e.size),height:ue(e.size)}),{sizeClasses:t,sizeStyles:s}})}const Sw=te({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:Ye,...Oe(),...Fi(),...Qe({tag:"i"}),...fn()},"VIcon"),On=ce()({name:"VIcon",props:Sw(),setup(e,n){let{attrs:t,slots:s}=n;const i=Y(),{themeClasses:a}=Pn(e),{iconData:o}=Zf(v(()=>i.value||e.icon)),{sizeClasses:r}=Vi(e),{textColorClasses:h,textColorStyles:l}=Pt(Ve(e,"color"));return ve(()=>{var g,u;const p=(g=s.default)==null?void 0:g.call(s);p&&(i.value=(u=Cp(p).filter(f=>f.type===As&&f.children&&typeof f.children=="string")[0])==null?void 0:u.children);const c=!!(t.onClick||t.onClickOnce);return k(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",a.value,r.value,h.value,{"v-icon--clickable":c,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:ue(e.size),height:ue(e.size),width:ue(e.size)},l.value,e.style],role:c?"button":void 0,"aria-hidden":!c,tabindex:c?e.disabled?-1:0:void 0},{default:()=>[p]})}),{}}});function Pc(e,n){const t=Y(),s=ye(!1);if(ko){const i=new IntersectionObserver(a=>{s.value=!!a.find(o=>o.isIntersecting)},n);vn(()=>{i.disconnect()}),pe(t,(a,o)=>{o&&(i.unobserve(o),s.value=!1),a&&i.observe(a)},{flush:"post"})}return{intersectionRef:t,isIntersecting:s}}const Ow=te({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Oe(),...Fi(),...Qe({tag:"div"}),...fn()},"VProgressCircular"),Cw=ce()({name:"VProgressCircular",props:Ow(),setup(e,n){let{slots:t}=n;const s=20,i=2*Math.PI*s,a=Y(),{themeClasses:o}=Pn(e),{sizeClasses:r,sizeStyles:h}=Vi(e),{textColorClasses:l,textColorStyles:p}=Pt(Ve(e,"color")),{textColorClasses:c,textColorStyles:g}=Pt(Ve(e,"bgColor")),{intersectionRef:u,isIntersecting:f}=Pc(),{resizeRef:d,contentRect:b}=Ca(),y=v(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),P=v(()=>Number(e.width)),S=v(()=>h.value?Number(e.size):b.value?b.value.width:Math.max(P.value,32)),O=v(()=>s/(1-P.value/S.value)*2),E=v(()=>P.value/S.value*O.value),j=v(()=>ue((100-y.value)/100*i));return rt(()=>{u.value=a.value,d.value=a.value}),ve(()=>k(e.tag,{ref:a,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":f.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,r.value,l.value,e.class],style:[h.value,p.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:y.value},{default:()=>[k("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${O.value} ${O.value}`},[k("circle",{class:["v-progress-circular__underlay",c.value],style:g.value,fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":E.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),k("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:s,"stroke-width":E.value,"stroke-dasharray":i,"stroke-dashoffset":j.value},null)]),t.default&&k("div",{class:"v-progress-circular__content"},[t.default({value:y.value})])]})),{}}}),Cs=te({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Es(e){return{dimensionStyles:v(()=>{const t={},s=ue(e.height),i=ue(e.maxHeight),a=ue(e.maxWidth),o=ue(e.minHeight),r=ue(e.minWidth),h=ue(e.width);return s!=null&&(t.height=s),i!=null&&(t.maxHeight=i),a!=null&&(t.maxWidth=a),o!=null&&(t.minHeight=o),r!=null&&(t.minWidth=r),h!=null&&(t.width=h),t})}}const zh={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Fo=te({location:String},"location");function Vo(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2?arguments[2]:void 0;const{isRtl:s}=Kn();return{locationStyles:v(()=>{if(!e.location)return{};const{side:a,align:o}=Ia(e.location.split(" ").length>1?e.location:`${e.location} center`,s.value);function r(l){return t?t(l):0}const h={};return a!=="center"&&(n?h[zh[a]]=`calc(100% - ${r(a)}px)`:h[a]=0),o!=="center"?n?h[zh[o]]=`calc(100% - ${r(o)}px)`:h[o]=0:(a==="center"?h.top=h.left="50%":h[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",h.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),h})}}const Ew=te({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Oe(),...Fo({location:"top"}),...At(),...Qe(),...fn()},"VProgressLinear"),xw=ce()({name:"VProgressLinear",props:Ew(),emits:{"update:modelValue":e=>!0},setup(e,n){var D;let{slots:t}=n;const s=xn(e,"modelValue"),{isRtl:i,rtlClasses:a}=Kn(),{themeClasses:o}=Pn(e),{locationStyles:r}=Vo(e),{textColorClasses:h,textColorStyles:l}=Pt(e,"color"),{backgroundColorClasses:p,backgroundColorStyles:c}=vt(v(()=>e.bgColor||e.color)),{backgroundColorClasses:g,backgroundColorStyles:u}=vt(v(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:f,backgroundColorStyles:d}=vt(e,"color"),{roundedClasses:b}=Tt(e),{intersectionRef:y,isIntersecting:P}=Pc(),S=v(()=>parseFloat(e.max)),O=v(()=>parseFloat(e.height)),E=v(()=>Wt(parseFloat(e.bufferValue)/S.value*100,0,100)),j=v(()=>Wt(parseFloat(s.value)/S.value*100,0,100)),I=v(()=>i.value!==e.reverse),B=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),_=Ee&&((D=window.matchMedia)==null?void 0:D.call(window,"(forced-colors: active)").matches);function V(T){if(!y.value)return;const{left:R,right:F,width:ne}=y.value.getBoundingClientRect(),J=I.value?ne-T.clientX+(F-ne):T.clientX-R;s.value=Math.round(J/ne*S.value)}return ve(()=>k(e.tag,{ref:y,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&P.value,"v-progress-linear--reverse":I.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},b.value,o.value,a.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?ue(O.value):0,"--v-progress-linear-height":ue(O.value),...e.absolute?r.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:j.value,onClick:e.clickable&&V},{default:()=>[e.stream&&k("div",{key:"stream",class:["v-progress-linear__stream",h.value],style:{...l.value,[I.value?"left":"right"]:ue(-O.value),borderTop:`${ue(O.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${ue(O.value/4)})`,width:ue(100-E.value,"%"),"--v-progress-linear-stream-to":ue(O.value*(I.value?1:-1))}},null),k("div",{class:["v-progress-linear__background",_?void 0:p.value],style:[c.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),k("div",{class:["v-progress-linear__buffer",_?void 0:g.value],style:[u.value,{opacity:parseFloat(e.bufferOpacity),width:ue(E.value,"%")}]},null),k(Vn,{name:B.value},{default:()=>[e.indeterminate?k("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(T=>k("div",{key:T,class:["v-progress-linear__indeterminate",T,_?void 0:f.value],style:d.value},null))]):k("div",{class:["v-progress-linear__determinate",_?void 0:f.value],style:[d.value,{width:ue(j.value,"%")}]},null)]}),t.default&&k("div",{class:"v-progress-linear__content"},[t.default({value:j.value,buffer:E.value})])]})),{}}}),Do=te({loading:[Boolean,String]},"loader");function Wo(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:En();return{loaderClasses:v(()=>({[`${n}--loading`]:e.loading}))}}function jc(e,n){var s;let{slots:t}=n;return k("div",{class:`${e.name}__loader`},[((s=t.default)==null?void 0:s.call(t,{color:e.color,isActive:e.active}))||k(xw,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const _w=["static","relative","fixed","absolute","sticky"],Ic=te({position:{type:String,validator:e=>_w.includes(e)}},"position");function Ac(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:En();return{positionClasses:v(()=>e.position?`${n}--${e.position}`:void 0)}}function Mw(){const e=qe("useRoute");return v(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function Rw(){var e,n;return(n=(e=qe("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function Tc(e,n){var l,p;const t=ju("RouterLink"),s=v(()=>!!(e.href||e.to)),i=v(()=>(s==null?void 0:s.value)||Zr(n,"click")||Zr(e,"click"));if(typeof t=="string"||!("useLink"in t))return{isLink:s,isClickable:i,href:Ve(e,"href")};const a=v(()=>({...e,to:Ve(()=>e.to||"")})),o=t.useLink(a.value),r=v(()=>e.to?o:void 0),h=Mw();return{isLink:s,isClickable:i,route:(l=r.value)==null?void 0:l.route,navigate:(p=r.value)==null?void 0:p.navigate,isActive:v(()=>{var c,g,u;return r.value?e.exact?h.value?((u=r.value.isExactActive)==null?void 0:u.value)&&wo(r.value.route.value.query,h.value.query):((g=r.value.isExactActive)==null?void 0:g.value)??!1:((c=r.value.isActive)==null?void 0:c.value)??!1:!1}),href:v(()=>{var c;return e.to?(c=r.value)==null?void 0:c.route.value.href:e.href})}}const Sc=te({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let aa=!1;function Nw(e,n){let t=!1,s,i;Ee&&(He(()=>{window.addEventListener("popstate",a),s=e==null?void 0:e.beforeEach((o,r,h)=>{aa?t?n(h):h():setTimeout(()=>t?n(h):h()),aa=!0}),i=e==null?void 0:e.afterEach(()=>{aa=!1})}),dn(()=>{window.removeEventListener("popstate",a),s==null||s(),i==null||i()}));function a(o){var r;(r=o.state)!=null&&r.replaced||(t=!0,setTimeout(()=>t=!1))}}function Bw(e,n){pe(()=>{var t;return(t=e.isActive)==null?void 0:t.value},t=>{e.isLink.value&&t&&n&&He(()=>{n(!0)})},{immediate:!0})}const Na=Symbol("rippleStop"),Lw=80;function Hh(e,n){e.style.transform=n,e.style.webkitTransform=n}function Ba(e){return e.constructor.name==="TouchEvent"}function Oc(e){return e.constructor.name==="KeyboardEvent"}const Fw=function(e,n){var c;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=0,i=0;if(!Oc(e)){const g=n.getBoundingClientRect(),u=Ba(e)?e.touches[e.touches.length-1]:e;s=u.clientX-g.left,i=u.clientY-g.top}let a=0,o=.3;(c=n._ripple)!=null&&c.circle?(o=.15,a=n.clientWidth/2,a=t.center?a:a+Math.sqrt((s-a)**2+(i-a)**2)/4):a=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const r=`${(n.clientWidth-a*2)/2}px`,h=`${(n.clientHeight-a*2)/2}px`,l=t.center?r:`${s-a}px`,p=t.center?h:`${i-a}px`;return{radius:a,scale:o,x:l,y:p,centerX:r,centerY:h}},mi={show(e,n){var u;let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=n==null?void 0:n._ripple)!=null&&u.enabled))return;const s=document.createElement("span"),i=document.createElement("span");s.appendChild(i),s.className="v-ripple__container",t.class&&(s.className+=` ${t.class}`);const{radius:a,scale:o,x:r,y:h,centerX:l,centerY:p}=Fw(e,n,t),c=`${a*2}px`;i.className="v-ripple__animation",i.style.width=c,i.style.height=c,n.appendChild(s);const g=window.getComputedStyle(n);g&&g.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Hh(i,`translate(${r}, ${h}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Hh(i,`translate(${l}, ${p}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const t=n[n.length-1];if(t.dataset.isHiding)return;t.dataset.isHiding="true";const s=performance.now()-Number(t.dataset.activated),i=Math.max(250-s,0);setTimeout(()=>{t.classList.remove("v-ripple__animation--in"),t.classList.add("v-ripple__animation--out"),setTimeout(()=>{var r;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((r=t.parentNode)==null?void 0:r.parentNode)===e&&e.removeChild(t.parentNode)},300)},i)}};function Cc(e){return typeof e>"u"||!!e}function bs(e){const n={},t=e.currentTarget;if(!(!(t!=null&&t._ripple)||t._ripple.touched||e[Na])){if(e[Na]=!0,Ba(e))t._ripple.touched=!0,t._ripple.isTouch=!0;else if(t._ripple.isTouch)return;if(n.center=t._ripple.centered||Oc(e),t._ripple.class&&(n.class=t._ripple.class),Ba(e)){if(t._ripple.showTimerCommit)return;t._ripple.showTimerCommit=()=>{mi.show(e,t,n)},t._ripple.showTimer=window.setTimeout(()=>{var s;(s=t==null?void 0:t._ripple)!=null&&s.showTimerCommit&&(t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null)},Lw)}else mi.show(e,t,n)}}function $h(e){e[Na]=!0}function rn(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{rn(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),mi.hide(n)}}function Ec(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let ys=!1;function xc(e){!ys&&(e.keyCode===Gr.enter||e.keyCode===Gr.space)&&(ys=!0,bs(e))}function _c(e){ys=!1,rn(e)}function Mc(e){ys&&(ys=!1,rn(e))}function Rc(e,n,t){const{value:s,modifiers:i}=n,a=Cc(s);if(a||mi.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=i.center,e._ripple.circle=i.circle,hi(s)&&s.class&&(e._ripple.class=s.class),a&&!t){if(i.stop){e.addEventListener("touchstart",$h,{passive:!0}),e.addEventListener("mousedown",$h);return}e.addEventListener("touchstart",bs,{passive:!0}),e.addEventListener("touchend",rn,{passive:!0}),e.addEventListener("touchmove",Ec,{passive:!0}),e.addEventListener("touchcancel",rn),e.addEventListener("mousedown",bs),e.addEventListener("mouseup",rn),e.addEventListener("mouseleave",rn),e.addEventListener("keydown",xc),e.addEventListener("keyup",_c),e.addEventListener("blur",Mc),e.addEventListener("dragstart",rn,{passive:!0})}else!a&&t&&Nc(e)}function Nc(e){e.removeEventListener("mousedown",bs),e.removeEventListener("touchstart",bs),e.removeEventListener("touchend",rn),e.removeEventListener("touchmove",Ec),e.removeEventListener("touchcancel",rn),e.removeEventListener("mouseup",rn),e.removeEventListener("mouseleave",rn),e.removeEventListener("keydown",xc),e.removeEventListener("keyup",_c),e.removeEventListener("dragstart",rn),e.removeEventListener("blur",Mc)}function Vw(e,n){Rc(e,n,!1)}function Dw(e){delete e._ripple,Nc(e)}function Ww(e,n){if(n.value===n.oldValue)return;const t=Cc(n.oldValue);Rc(e,n,t)}const Bc={mounted:Vw,unmounted:Dw,updated:Ww},Lc=te({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:vc},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Ye,appendIcon:Ye,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Eo(),...Oe(),...It(),...Cs(),..._o(),...wc(),...Do(),...Fo(),...Ic(),...At(),...Sc(),...Fi(),...Qe({tag:"button"}),...fn(),...Li({variant:"elevated"})},"VBtn"),Nn=ce()({name:"VBtn",props:Lc(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:t,slots:s}=n;const{themeClasses:i}=Pn(e),{borderClasses:a}=xo(e),{densityClasses:o}=Gt(e),{dimensionStyles:r}=Es(e),{elevationClasses:h}=Mo(e),{loaderClasses:l}=Wo(e),{locationStyles:p}=Vo(e),{positionClasses:c}=Ac(e),{roundedClasses:g}=Tt(e),{sizeClasses:u,sizeStyles:f}=Vi(e),d=bc(e,e.symbol,!1),b=Tc(e,t),y=v(()=>{var V;return e.active!==void 0?e.active:b.isLink.value?(V=b.isActive)==null?void 0:V.value:d==null?void 0:d.isSelected.value}),P=v(()=>{var D,T;return{color:(d==null?void 0:d.isSelected.value)&&(!b.isLink.value||((D=b.isActive)==null?void 0:D.value))||!d||((T=b.isActive)==null?void 0:T.value)?e.color??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:S,colorStyles:O,variantClasses:E}=Bo(P),j=v(()=>(d==null?void 0:d.disabled.value)||e.disabled),I=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),B=v(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function _(V){var D;j.value||b.isLink.value&&(V.metaKey||V.ctrlKey||V.shiftKey||V.button!==0||t.target==="_blank")||((D=b.navigate)==null||D.call(b,V),d==null||d.toggle())}return Bw(b,d==null?void 0:d.select),ve(()=>{const V=b.isLink.value?"a":e.tag,D=!!(e.prependIcon||s.prepend),T=!!(e.appendIcon||s.append),R=!!(e.icon&&e.icon!==!0);return un(k(V,{type:V==="a"?void 0:"button",class:["v-btn",d==null?void 0:d.selectedClass.value,{"v-btn--active":y.value,"v-btn--block":e.block,"v-btn--disabled":j.value,"v-btn--elevated":I.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},i.value,a.value,S.value,o.value,h.value,l.value,c.value,g.value,u.value,E.value,e.class],style:[O.value,r.value,p.value,f.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:j.value||void 0,href:b.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:_,value:B.value},{default:()=>{var F;return[No(!0,"v-btn"),!e.icon&&D&&k("span",{key:"prepend",class:"v-btn__prepend"},[s.prepend?k(Ln,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},s.prepend):k(On,{key:"prepend-icon",icon:e.prependIcon},null)]),k("span",{class:"v-btn__content","data-no-activator":""},[!s.default&&R?k(On,{key:"content-icon",icon:e.icon},null):k(Ln,{key:"content-defaults",disabled:!R,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var ne;return[((ne=s.default)==null?void 0:ne.call(s))??e.text]}})]),!e.icon&&T&&k("span",{key:"append",class:"v-btn__append"},[s.append?k(Ln,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},s.append):k(On,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&k("span",{key:"loader",class:"v-btn__loader"},[((F=s.loader)==null?void 0:F.call(s))??k(Cw,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Bc,!j.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:d}}}),Fc=ce()({name:"VCardActions",props:Oe(),setup(e,n){let{slots:t}=n;return xi({VBtn:{slim:!0,variant:"text"}}),ve(()=>{var s;return k("div",{class:["v-card-actions",e.class],style:e.style},[(s=t.default)==null?void 0:s.call(t)])}),{}}}),Kw=te({opacity:[Number,String],...Oe(),...Qe()},"VCardSubtitle"),zw=ce()({name:"VCardSubtitle",props:Kw(),setup(e,n){let{slots:t}=n;return ve(()=>k(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ko=Dm("v-card-title");function Hw(e){return{aspectStyles:v(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Vc=te({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...Oe(),...Cs()},"VResponsive"),Uh=ce()({name:"VResponsive",props:Vc(),setup(e,n){let{slots:t}=n;const{aspectStyles:s}=Hw(e),{dimensionStyles:i}=Es(e);return ve(()=>{var a;return k("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[k("div",{class:"v-responsive__sizer",style:s.value},null),(a=t.additional)==null?void 0:a.call(t),t.default&&k("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),Di=te({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Qn=(e,n)=>{let{slots:t}=n;const{transition:s,disabled:i,group:a,...o}=e,{component:r=a?fo:Vn,...h}=typeof s=="object"?s:{};return Cn(r,Ce(typeof s=="string"?{name:i?"":s}:h,typeof s=="string"?{}:Object.fromEntries(Object.entries({disabled:i,group:a}).filter(l=>{let[p,c]=l;return c!==void 0})),o),t)};function $w(e,n){if(!ko)return;const t=n.modifiers||{},s=n.value,{handler:i,options:a}=typeof s=="object"?s:{handler:s,options:{}},o=new IntersectionObserver(function(){var c;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const l=(c=e._observe)==null?void 0:c[n.instance.$.uid];if(!l)return;const p=r.some(g=>g.isIntersecting);i&&(!t.quiet||l.init)&&(!t.once||p||l.init)&&i(p,r,h),p&&t.once?Dc(e,n):l.init=!0},a);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:o},o.observe(e)}function Dc(e,n){var s;const t=(s=e._observe)==null?void 0:s[n.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Wc={mounted:$w,unmounted:Dc},Uw=te({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Vc(),...Oe(),...At(),...Di()},"VImg"),zo=ce()({name:"VImg",directives:{intersect:Wc},props:Uw(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:s}=n;const{backgroundColorClasses:i,backgroundColorStyles:a}=vt(Ve(e,"color")),{roundedClasses:o}=Tt(e),r=qe("VImg"),h=ye(""),l=Y(),p=ye(e.eager?"loading":"idle"),c=ye(),g=ye(),u=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=v(()=>u.value.aspect||c.value/g.value||0);pe(()=>e.src,()=>{d(p.value!=="idle")}),pe(f,(T,R)=>{!T&&R&&l.value&&O(l.value)}),io(()=>d());function d(T){if(!(e.eager&&T)&&!(ko&&!T&&!e.eager)){if(p.value="loading",u.value.lazySrc){const R=new Image;R.src=u.value.lazySrc,O(R,null)}u.value.src&&He(()=>{var R;t("loadstart",((R=l.value)==null?void 0:R.currentSrc)||u.value.src),setTimeout(()=>{var F;if(!r.isUnmounted)if((F=l.value)!=null&&F.complete){if(l.value.naturalWidth||y(),p.value==="error")return;f.value||O(l.value,null),p.value==="loading"&&b()}else f.value||O(l.value),P()})})}}function b(){var T;r.isUnmounted||(P(),O(l.value),p.value="loaded",t("load",((T=l.value)==null?void 0:T.currentSrc)||u.value.src))}function y(){var T;r.isUnmounted||(p.value="error",t("error",((T=l.value)==null?void 0:T.currentSrc)||u.value.src))}function P(){const T=l.value;T&&(h.value=T.currentSrc||T.src)}let S=-1;vn(()=>{clearTimeout(S)});function O(T){let R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const F=()=>{if(clearTimeout(S),r.isUnmounted)return;const{naturalHeight:ne,naturalWidth:J}=T;ne||J?(c.value=J,g.value=ne):!T.complete&&p.value==="loading"&&R!=null?S=window.setTimeout(F,R):(T.currentSrc.endsWith(".svg")||T.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,g.value=1)};F()}const E=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),j=()=>{var F;if(!u.value.src||p.value==="idle")return null;const T=k("img",{class:["v-img__img",E.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:b,onError:y},null),R=(F=s.sources)==null?void 0:F.call(s);return k(Qn,{transition:e.transition,appear:!0},{default:()=>[un(R?k("picture",{class:"v-img__picture"},[R,T]):T,[[$t,p.value==="loaded"]])]})},I=()=>k(Qn,{transition:e.transition},{default:()=>[u.value.lazySrc&&p.value!=="loaded"&&k("img",{class:["v-img__img","v-img__img--preload",E.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),B=()=>s.placeholder?k(Qn,{transition:e.transition,appear:!0},{default:()=>[(p.value==="loading"||p.value==="error"&&!s.error)&&k("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,_=()=>s.error?k(Qn,{transition:e.transition,appear:!0},{default:()=>[p.value==="error"&&k("div",{class:"v-img__error"},[s.error()])]}):null,V=()=>e.gradient?k("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,D=ye(!1);{const T=pe(f,R=>{R&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{D.value=!0})}),T())})}return ve(()=>{const T=Uh.filterProps(e);return un(k(Uh,Ce({class:["v-img",{"v-img--booting":!D.value},i.value,o.value,e.class],style:[{width:ue(e.width==="auto"?c.value:e.width)},a.value,e.style]},T,{aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>k(Se,null,[k(j,null,null),k(I,null,null),k(V,null,null),k(B,null,null),k(_,null,null)]),default:s.default}),[[Is("intersect"),{handler:d,options:e.options},null,{once:!0}]])}),{currentSrc:h,image:l,state:p,naturalWidth:c,naturalHeight:g}}}),Gw=te({start:Boolean,end:Boolean,icon:Ye,image:String,text:String,...Oe(),...It(),...At(),...Fi(),...Qe(),...fn(),...Li({variant:"flat"})},"VAvatar"),Gh=ce()({name:"VAvatar",props:Gw(),setup(e,n){let{slots:t}=n;const{themeClasses:s}=Pn(e),{colorClasses:i,colorStyles:a,variantClasses:o}=Bo(e),{densityClasses:r}=Gt(e),{roundedClasses:h}=Tt(e),{sizeClasses:l,sizeStyles:p}=Vi(e);return ve(()=>k(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},s.value,i.value,r.value,h.value,l.value,o.value,e.class],style:[a.value,p.value,e.style]},{default:()=>[t.default?k(Ln,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?k(zo,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?k(On,{key:"icon",icon:e.icon},null):e.text,No(!1,"v-avatar")]})),{}}}),Yw=te({appendAvatar:String,appendIcon:Ye,prependAvatar:String,prependIcon:Ye,subtitle:[String,Number],title:[String,Number],...Oe(),...It()},"VCardItem"),qw=ce()({name:"VCardItem",props:Yw(),setup(e,n){let{slots:t}=n;return ve(()=>{var l;const s=!!(e.prependAvatar||e.prependIcon),i=!!(s||t.prepend),a=!!(e.appendAvatar||e.appendIcon),o=!!(a||t.append),r=!!(e.title!=null||t.title),h=!!(e.subtitle!=null||t.subtitle);return k("div",{class:["v-card-item",e.class],style:e.style},[i&&k("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?k(Ln,{key:"prepend-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):k(Se,null,[e.prependAvatar&&k(Gh,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&k(On,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),k("div",{class:"v-card-item__content"},[r&&k(Ko,{key:"title"},{default:()=>{var p;return[((p=t.title)==null?void 0:p.call(t))??e.title]}}),h&&k(zw,{key:"subtitle"},{default:()=>{var p;return[((p=t.subtitle)==null?void 0:p.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),o&&k("div",{key:"append",class:"v-card-item__append"},[t.append?k(Ln,{key:"append-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):k(Se,null,[e.appendIcon&&k(On,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&k(Gh,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Xw=te({opacity:[Number,String],...Oe(),...Qe()},"VCardText"),fi=ce()({name:"VCardText",props:Xw(),setup(e,n){let{slots:t}=n;return ve(()=>k(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Zw=te({appendAvatar:String,appendIcon:Ye,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:Ye,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Eo(),...Oe(),...It(),...Cs(),..._o(),...Do(),...Fo(),...Ic(),...At(),...Sc(),...Qe(),...fn(),...Li({variant:"elevated"})},"VCard"),Kc=ce()({name:"VCard",directives:{Ripple:Bc},props:Zw(),setup(e,n){let{attrs:t,slots:s}=n;const{themeClasses:i}=Pn(e),{borderClasses:a}=xo(e),{colorClasses:o,colorStyles:r,variantClasses:h}=Bo(e),{densityClasses:l}=Gt(e),{dimensionStyles:p}=Es(e),{elevationClasses:c}=Mo(e),{loaderClasses:g}=Wo(e),{locationStyles:u}=Vo(e),{positionClasses:f}=Ac(e),{roundedClasses:d}=Tt(e),b=Tc(e,t),y=v(()=>e.link!==!1&&b.isLink.value),P=v(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return ve(()=>{const S=y.value?"a":e.tag,O=!!(s.title||e.title!=null),E=!!(s.subtitle||e.subtitle!=null),j=O||E,I=!!(s.append||e.appendAvatar||e.appendIcon),B=!!(s.prepend||e.prependAvatar||e.prependIcon),_=!!(s.image||e.image),V=j||B||I,D=!!(s.text||e.text!=null);return un(k(S,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":P.value},i.value,a.value,o.value,l.value,c.value,g.value,f.value,d.value,h.value,e.class],style:[r.value,p.value,u.value,e.style],href:b.href.value,onClick:P.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var T;return[_&&k("div",{key:"image",class:"v-card__image"},[s.image?k(Ln,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},s.image):k(zo,{key:"image-img",cover:!0,src:e.image},null)]),k(jc,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:s.loader}),V&&k(qw,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:s.item,prepend:s.prepend,title:s.title,subtitle:s.subtitle,append:s.append}),D&&k(fi,{key:"text"},{default:()=>{var R;return[((R=s.text)==null?void 0:R.call(s))??e.text]}}),(T=s.default)==null?void 0:T.call(s),s.actions&&k(Fc,null,{default:s.actions}),No(P.value,"v-card")]}}),[[Is("ripple"),P.value&&e.ripple]])}),{}}}),oa=Symbol("Forwarded refs");function ra(e,n){let t=e;for(;t;){const s=Reflect.getOwnPropertyDescriptor(t,n);if(s)return s;t=Object.getPrototypeOf(t)}}function Ho(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),s=1;s<n;s++)t[s-1]=arguments[s];return e[oa]=t,new Proxy(e,{get(i,a){if(Reflect.has(i,a))return Reflect.get(i,a);if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const o of t)if(o.value&&Reflect.has(o.value,a)){const r=Reflect.get(o.value,a);return typeof r=="function"?r.bind(o.value):r}}},has(i,a){if(Reflect.has(i,a))return!0;if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const o of t)if(o.value&&Reflect.has(o.value,a))return!0;return!1},set(i,a,o){if(Reflect.has(i,a))return Reflect.set(i,a,o);if(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))return!1;for(const r of t)if(r.value&&Reflect.has(r.value,a))return Reflect.set(r.value,a,o);return!1},getOwnPropertyDescriptor(i,a){var r;const o=Reflect.getOwnPropertyDescriptor(i,a);if(o)return o;if(!(typeof a=="symbol"||a.startsWith("$")||a.startsWith("__"))){for(const h of t){if(!h.value)continue;const l=ra(h.value,a)??("_"in h.value?ra((r=h.value._)==null?void 0:r.setupState,a):void 0);if(l)return l}for(const h of t){const l=h.value&&h.value[oa];if(!l)continue;const p=l.slice();for(;p.length;){const c=p.shift(),g=ra(c.value,a);if(g)return g;const u=c.value&&c.value[oa];u&&p.push(...u)}}}}})}const $o=Symbol.for("vuetify:v-tabs"),Jw=te({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...bo(Lc({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Js=ce()({name:"VTab",props:Jw(),setup(e,n){let{slots:t,attrs:s}=n;const{textColorClasses:i,textColorStyles:a}=Pt(e,"sliderColor"),o=Y(),r=Y(),h=v(()=>e.direction==="horizontal"),l=v(()=>{var c,g;return((g=(c=o.value)==null?void 0:c.group)==null?void 0:g.isSelected.value)??!1});function p(c){var u,f;let{value:g}=c;if(g){const d=(f=(u=o.value)==null?void 0:u.$el.parentElement)==null?void 0:f.querySelector(".v-tab--selected .v-tab__slider"),b=r.value;if(!d||!b)return;const y=getComputedStyle(d).color,P=d.getBoundingClientRect(),S=b.getBoundingClientRect(),O=h.value?"x":"y",E=h.value?"X":"Y",j=h.value?"right":"bottom",I=h.value?"width":"height",B=P[O],_=S[O],V=B>_?P[j]-S[j]:P[O]-S[O],D=Math.sign(V)>0?h.value?"right":"bottom":Math.sign(V)<0?h.value?"left":"top":"center",R=(Math.abs(V)+(Math.sign(V)<0?P[I]:S[I]))/Math.max(P[I],S[I])||0,F=P[I]/S[I]||0,ne=1.5;dt(b,{backgroundColor:[y,"currentcolor"],transform:[`translate${E}(${V}px) scale${E}(${F})`,`translate${E}(${V/ne}px) scale${E}(${(R-1)/ne+1})`,"none"],transformOrigin:Array(3).fill(D)},{duration:225,easing:fs})}}return ve(()=>{const c=Nn.filterProps(e);return k(Nn,Ce({symbol:$o,ref:o,class:["v-tab",e.class],style:e.style,tabindex:l.value?0:-1,role:"tab","aria-selected":String(l.value),active:!1},c,s,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":p}),{...t,default:()=>{var g;return k(Se,null,[((g=t.default)==null?void 0:g.call(t))??e.text,!e.hideSlider&&k("div",{ref:r,class:["v-tab__slider",i.value],style:a.value},null)])}})}),Ho({},o)}}),Qw=e=>{const{touchstartX:n,touchendX:t,touchstartY:s,touchendY:i}=e,a=.5,o=16;e.offsetX=t-n,e.offsetY=i-s,Math.abs(e.offsetY)<a*Math.abs(e.offsetX)&&(e.left&&t<n-o&&e.left(e),e.right&&t>n+o&&e.right(e)),Math.abs(e.offsetX)<a*Math.abs(e.offsetY)&&(e.up&&i<s-o&&e.up(e),e.down&&i>s+o&&e.down(e))};function eb(e,n){var s;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(s=n.start)==null||s.call(n,{originalEvent:e,...n})}function nb(e,n){var s;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(s=n.end)==null||s.call(n,{originalEvent:e,...n}),Qw(n)}function tb(e,n){var s;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(s=n.move)==null||s.call(n,{originalEvent:e,...n})}function sb(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>eb(t,n),touchend:t=>nb(t,n),touchmove:t=>tb(t,n)}}function ib(e,n){var r;const t=n.value,s=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},a=(r=n.instance)==null?void 0:r.$.uid;if(!s||!a)return;const o=sb(n.value);s._touchHandlers=s._touchHandlers??Object.create(null),s._touchHandlers[a]=o,Tp(o).forEach(h=>{s.addEventListener(h,o[h],i)})}function ab(e,n){var a,o;const t=(a=n.value)!=null&&a.parent?e.parentElement:e,s=(o=n.instance)==null?void 0:o.$.uid;if(!(t!=null&&t._touchHandlers)||!s)return;const i=t._touchHandlers[s];Tp(i).forEach(r=>{t.removeEventListener(r,i[r])}),delete t._touchHandlers[s]}const zc={mounted:ib,unmounted:ab},ob=zc,Hc=Symbol.for("vuetify:v-window"),$c=Symbol.for("vuetify:v-window-group"),Uc=te({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...Oe(),...Qe(),...fn()},"VWindow"),Yh=ce()({name:"VWindow",directives:{Touch:zc},props:Uc(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:s}=Pn(e),{isRtl:i}=Kn(),{t:a}=Hp(),o=Lo(e,$c),r=Y(),h=v(()=>i.value?!e.reverse:e.reverse),l=ye(!1),p=v(()=>{const O=e.direction==="vertical"?"y":"x",j=(h.value?!l.value:l.value)?"-reverse":"";return`v-window-${O}${j}-transition`}),c=ye(0),g=Y(void 0),u=v(()=>o.items.value.findIndex(O=>o.selected.value.includes(O.id)));pe(u,(O,E)=>{const j=o.items.value.length,I=j-1;j<=2?l.value=O<E:O===I&&E===0?l.value=!0:O===0&&E===I?l.value=!1:l.value=O<E}),bn(Hc,{transition:p,isReversed:l,transitionCount:c,transitionHeight:g,rootRef:r});const f=v(()=>e.continuous||u.value!==0),d=v(()=>e.continuous||u.value!==o.items.value.length-1);function b(){f.value&&o.prev()}function y(){d.value&&o.next()}const P=v(()=>{const O=[],E={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${h.value?"right":"left"}`,onClick:o.prev,"aria-label":a("$vuetify.carousel.prev")};O.push(f.value?t.prev?t.prev({props:E}):k(Nn,E,null):k("div",null,null));const j={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${h.value?"left":"right"}`,onClick:o.next,"aria-label":a("$vuetify.carousel.next")};return O.push(d.value?t.next?t.next({props:j}):k(Nn,j,null):k("div",null,null)),O}),S=v(()=>e.touch===!1?e.touch:{...{left:()=>{h.value?b():y()},right:()=>{h.value?y():b()},start:E=>{let{originalEvent:j}=E;j.stopPropagation()}},...e.touch===!0?{}:e.touch});return ve(()=>un(k(e.tag,{ref:r,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},s.value,e.class],style:e.style},{default:()=>{var O,E;return[k("div",{class:"v-window__container",style:{height:g.value}},[(O=t.default)==null?void 0:O.call(t,{group:o}),e.showArrows!==!1&&k("div",{class:"v-window__controls"},[P.value])]),(E=t.additional)==null?void 0:E.call(t,{group:o})]}}),[[Is("touch"),S.value]])),{group:o}}}),rb=te({...bo(Uc(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),Gc=ce()({name:"VTabsWindow",props:rb(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const s=Be($o,null),i=xn(e,"modelValue"),a=v({get(){var o;return i.value!=null||!s?i.value:(o=s.items.value.find(r=>s.selected.value.includes(r.id)))==null?void 0:o.value},set(o){i.value=o}});return ve(()=>{const o=Yh.filterProps(e);return k(Yh,Ce({_as:"VTabsWindow"},o,{modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),t)}),{}}}),Yc=te({eager:Boolean},"lazy");function qc(e,n){const t=ye(!1),s=v(()=>t.value||e.eager||n.value);pe(n,()=>t.value=!0);function i(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:s,onAfterLeave:i}}function hb(){const e=ye(!1);return tn(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:js(e)}}const Xc=te({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...Oe(),...wc(),...Yc()},"VWindowItem"),qh=ce()({name:"VWindowItem",directives:{Touch:ob},props:Xc(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const s=Be(Hc),i=bc(e,$c),{isBooted:a}=hb();if(!s||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=ye(!1),r=v(()=>a.value&&(s.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function h(){!o.value||!s||(o.value=!1,s.transitionCount.value>0&&(s.transitionCount.value-=1,s.transitionCount.value===0&&(s.transitionHeight.value=void 0)))}function l(){var f;o.value||!s||(o.value=!0,s.transitionCount.value===0&&(s.transitionHeight.value=ue((f=s.rootRef.value)==null?void 0:f.clientHeight)),s.transitionCount.value+=1)}function p(){h()}function c(f){o.value&&He(()=>{!r.value||!o.value||!s||(s.transitionHeight.value=ue(f.clientHeight))})}const g=v(()=>{const f=s.isReversed.value?e.reverseTransition:e.transition;return r.value?{name:typeof f!="string"?s.transition.value:f,onBeforeEnter:l,onAfterEnter:h,onEnterCancelled:p,onBeforeLeave:l,onAfterLeave:h,onLeaveCancelled:p,onEnter:c}:!1}),{hasContent:u}=qc(e,i.isSelected);return ve(()=>k(Qn,{transition:g.value,disabled:!a.value},{default:()=>{var f;return[un(k("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[u.value&&((f=t.default)==null?void 0:f.call(t))]),[[$t,i.isSelected.value]])]}})),{groupItem:i}}}),lb=te({...Xc()},"VTabsWindowItem"),Qs=ce()({name:"VTabsWindowItem",props:lb(),setup(e,n){let{slots:t}=n;return ve(()=>{const s=qh.filterProps(e);return k(qh,Ce({_as:"VTabsWindowItem"},s,{class:["v-tabs-window-item",e.class],style:e.style}),t)}),{}}}),pb=te({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function hn(e,n,t){return ce()({name:e,props:pb({mode:t,origin:n}),setup(s,i){let{slots:a}=i;const o={onBeforeEnter(r){s.origin&&(r.style.transformOrigin=s.origin)},onLeave(r){if(s.leaveAbsolute){const{offsetTop:h,offsetLeft:l,offsetWidth:p,offsetHeight:c}=r;r._transitionInitialStyles={position:r.style.position,top:r.style.top,left:r.style.left,width:r.style.width,height:r.style.height},r.style.position="absolute",r.style.top=`${h}px`,r.style.left=`${l}px`,r.style.width=`${p}px`,r.style.height=`${c}px`}s.hideOnLeave&&r.style.setProperty("display","none","important")},onAfterLeave(r){if(s.leaveAbsolute&&(r!=null&&r._transitionInitialStyles)){const{position:h,top:l,left:p,width:c,height:g}=r._transitionInitialStyles;delete r._transitionInitialStyles,r.style.position=h||"",r.style.top=l||"",r.style.left=p||"",r.style.width=c||"",r.style.height=g||""}}};return()=>{const r=s.group?fo:Vn;return Cn(r,{name:s.disabled?"":e,css:!s.disabled,...s.group?void 0:{mode:s.mode},...s.disabled?{}:o},a.default)}}})}function Zc(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return ce()({name:e,props:{mode:{type:String,default:t},disabled:Boolean,group:Boolean},setup(s,i){let{slots:a}=i;const o=s.group?fo:Vn;return()=>Cn(o,{name:s.disabled?"":e,css:!s.disabled,...s.disabled?{}:n},a.default)}})}function Jc(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",s=gn(`offset-${t}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[t]:o.style[t]}},onEnter(o){const r=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const h=`${o[s]}px`;o.style[t]="0",o.offsetHeight,o.style.transition=r.transition,e&&o._parent&&o._parent.classList.add(e),requestAnimationFrame(()=>{o.style[t]=h})},onAfterEnter:a,onEnterCancelled:a,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[t]:o.style[t]},o.style.overflow="hidden",o.style[t]=`${o[s]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[t]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){e&&o._parent&&o._parent.classList.remove(e),a(o)}function a(o){const r=o._initialStyle[t];o.style.overflow=o._initialStyle.overflow,r!=null&&(o.style[t]=r),delete o._initialStyle}}const cb=te({target:[Object,Array]},"v-dialog-transition"),gb=ce()({name:"VDialogTransition",props:cb(),setup(e,n){let{slots:t}=n;const s={onBeforeEnter(i){i.style.pointerEvents="none",i.style.visibility="hidden"},async onEnter(i,a){var g;await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),i.style.visibility="";const{x:o,y:r,sx:h,sy:l,speed:p}=Zh(e.target,i),c=dt(i,[{transform:`translate(${o}px, ${r}px) scale(${h}, ${l})`,opacity:0},{}],{duration:225*p,easing:Wm});(g=Xh(i))==null||g.forEach(u=>{dt(u,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*p,easing:fs})}),c.finished.then(()=>a())},onAfterEnter(i){i.style.removeProperty("pointer-events")},onBeforeLeave(i){i.style.pointerEvents="none"},async onLeave(i,a){var g;await new Promise(u=>requestAnimationFrame(u));const{x:o,y:r,sx:h,sy:l,speed:p}=Zh(e.target,i);dt(i,[{},{transform:`translate(${o}px, ${r}px) scale(${h}, ${l})`,opacity:0}],{duration:125*p,easing:Km}).finished.then(()=>a()),(g=Xh(i))==null||g.forEach(u=>{dt(u,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*p,easing:fs})})},onAfterLeave(i){i.style.removeProperty("pointer-events")}};return()=>e.target?k(Vn,Ce({name:"dialog-transition"},s,{css:!1}),t):k(Vn,{name:"dialog-transition"},t)}});function Xh(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Zh(e,n){const t=Mp(e),s=Po(n),[i,a]=getComputedStyle(n).transformOrigin.split(" ").map(y=>parseFloat(y)),[o,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let h=t.left+t.width/2;o==="left"||r==="left"?h-=t.width/2:(o==="right"||r==="right")&&(h+=t.width/2);let l=t.top+t.height/2;o==="top"||r==="top"?l-=t.height/2:(o==="bottom"||r==="bottom")&&(l+=t.height/2);const p=t.width/s.width,c=t.height/s.height,g=Math.max(1,p,c),u=p/g||0,f=c/g||0,d=s.width*s.height/(window.innerWidth*window.innerHeight),b=d>.12?Math.min(1.5,(d-.12)*10+1):1;return{x:h-(i+s.left),y:l-(a+s.top),sx:u,sy:f,speed:b}}hn("fab-transition","center center","out-in");hn("dialog-bottom-transition");hn("dialog-top-transition");const Jh=hn("fade-transition");hn("scale-transition");hn("scroll-x-transition");hn("scroll-x-reverse-transition");hn("scroll-y-transition");hn("scroll-y-reverse-transition");hn("slide-x-transition");hn("slide-x-reverse-transition");const Qc=hn("slide-y-transition");hn("slide-y-reverse-transition");Zc("expand-transition",Jc());const ub=Zc("expand-x-transition",Jc("",!0));function db(e){let{selectedElement:n,containerElement:t,isRtl:s,isHorizontal:i}=e;const a=vs(i,t),o=eg(i,s,t),r=vs(i,n),h=ng(i,n),l=r*.4;return o>h?h-l:o+a<h+r?h-a+r+l:o}function mb(e){let{selectedElement:n,containerElement:t,isHorizontal:s}=e;const i=vs(s,t),a=ng(s,n),o=vs(s,n);return a-i/2+o/2}function Qh(e,n){const t=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[t])||0}function fb(e,n){const t=e?"clientWidth":"clientHeight";return(n==null?void 0:n[t])||0}function eg(e,n,t){if(!t)return 0;const{scrollLeft:s,offsetWidth:i,scrollWidth:a}=t;return e?n?a-i+s:s:t.scrollTop}function vs(e,n){const t=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[t])||0}function ng(e,n){const t=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[t])||0}const kb=Symbol.for("vuetify:v-slide-group"),tg=te({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:kb},nextIcon:{type:Ye,default:"$next"},prevIcon:{type:Ye,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Oe(),...Kf({mobile:null}),...Qe(),...kc({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),el=ce()({name:"VSlideGroup",props:tg(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{isRtl:s}=Kn(),{displayClasses:i,mobile:a}=Yp(e),o=Lo(e,e.symbol),r=ye(!1),h=ye(0),l=ye(0),p=ye(0),c=v(()=>e.direction==="horizontal"),{resizeRef:g,contentRect:u}=Ca(),{resizeRef:f,contentRect:d}=Ca(),b=$f(),y=v(()=>({container:g.el,duration:200,easing:"easeOutQuart"})),P=v(()=>o.selected.value.length?o.items.value.findIndex(N=>N.id===o.selected.value[0]):-1),S=v(()=>o.selected.value.length?o.items.value.findIndex(N=>N.id===o.selected.value[o.selected.value.length-1]):-1);if(Ee){let N=-1;pe(()=>[o.selected.value,u.value,d.value,c.value],()=>{cancelAnimationFrame(N),N=requestAnimationFrame(()=>{if(u.value&&d.value){const U=c.value?"width":"height";l.value=u.value[U],p.value=d.value[U],r.value=l.value+1<p.value}if(P.value>=0&&f.el){const U=f.el.children[S.value];E(U,e.centerActive)}})})}const O=ye(!1);function E(N,U){let ie=0;U?ie=mb({containerElement:g.el,isHorizontal:c.value,selectedElement:N}):ie=db({containerElement:g.el,isHorizontal:c.value,isRtl:s.value,selectedElement:N}),j(ie)}function j(N){if(!Ee||!g.el)return;const U=vs(c.value,g.el),ie=eg(c.value,s.value,g.el);if(!(Qh(c.value,g.el)<=U||Math.abs(N-ie)<16)){if(c.value&&s.value&&g.el){const{scrollWidth:$e,offsetWidth:me}=g.el;N=$e-me-N}c.value?b.horizontal(N,y.value):b(N,y.value)}}function I(N){const{scrollTop:U,scrollLeft:ie}=N.target;h.value=c.value?ie:U}function B(N){if(O.value=!0,!(!r.value||!f.el)){for(const U of N.composedPath())for(const ie of f.el.children)if(ie===U){E(ie);return}}}function _(N){O.value=!1}let V=!1;function D(N){var U;!V&&!O.value&&!(N.relatedTarget&&((U=f.el)!=null&&U.contains(N.relatedTarget)))&&F(),V=!1}function T(){V=!0}function R(N){if(!f.el)return;function U(ie){N.preventDefault(),F(ie)}c.value?N.key==="ArrowRight"?U(s.value?"prev":"next"):N.key==="ArrowLeft"&&U(s.value?"next":"prev"):N.key==="ArrowDown"?U("next"):N.key==="ArrowUp"&&U("prev"),N.key==="Home"?U("first"):N.key==="End"&&U("last")}function F(N){var ie,We;if(!f.el)return;let U;if(!N)U=xp(f.el)[0];else if(N==="next"){if(U=(ie=f.el.querySelector(":focus"))==null?void 0:ie.nextElementSibling,!U)return F("first")}else if(N==="prev"){if(U=(We=f.el.querySelector(":focus"))==null?void 0:We.previousElementSibling,!U)return F("last")}else N==="first"?U=f.el.firstElementChild:N==="last"&&(U=f.el.lastElementChild);U&&U.focus({preventScroll:!0})}function ne(N){const U=c.value&&s.value?-1:1,ie=(N==="prev"?-U:U)*l.value;let We=h.value+ie;if(c.value&&s.value&&g.el){const{scrollWidth:$e,offsetWidth:me}=g.el;We+=$e-me}j(We)}const J=v(()=>({next:o.next,prev:o.prev,select:o.select,isSelected:o.isSelected})),K=v(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!a.value;case!0:return r.value||Math.abs(h.value)>0;case"mobile":return a.value||r.value||Math.abs(h.value)>0;default:return!a.value&&(r.value||Math.abs(h.value)>0)}}),W=v(()=>Math.abs(h.value)>1),q=v(()=>{if(!g.value)return!1;const N=Qh(c.value,g.el),U=fb(c.value,g.el);return N-U-Math.abs(h.value)>1});return ve(()=>k(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!c.value,"v-slide-group--has-affixes":K.value,"v-slide-group--is-overflowing":r.value},i.value,e.class],style:e.style,tabindex:O.value||o.selected.value.length?-1:0,onFocus:D},{default:()=>{var N,U,ie;return[K.value&&k("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!W.value}],onMousedown:T,onClick:()=>W.value&&ne("prev")},[((N=t.prev)==null?void 0:N.call(t,J.value))??k(Jh,null,{default:()=>[k(On,{icon:s.value?e.nextIcon:e.prevIcon},null)]})]),k("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:I},[k("div",{ref:f,class:"v-slide-group__content",onFocusin:B,onFocusout:_,onKeydown:R},[(U=t.default)==null?void 0:U.call(t,J.value)])]),K.value&&k("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!q.value}],onMousedown:T,onClick:()=>q.value&&ne("next")},[((ie=t.next)==null?void 0:ie.call(t,J.value))??k(Jh,null,{default:()=>[k(On,{icon:s.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:o.selected,scrollTo:ne,scrollOffset:h,focus:F}}});function Uo(){const n=qe("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}function wb(e){return e?e.map(n=>hi(n)?n:{text:n,value:n}):[]}const bb=te({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...tg({mandatory:"force",selectedClass:"v-tab-item--selected"}),...It(),...Qe()},"VTabs"),yb=ce()({name:"VTabs",props:bb(),emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:t,slots:s}=n;const i=xn(e,"modelValue"),a=v(()=>wb(e.items)),{densityClasses:o}=Gt(e),{backgroundColorClasses:r,backgroundColorStyles:h}=vt(Ve(e,"bgColor")),{scopeId:l}=Uo();return xi({VTab:{color:Ve(e,"color"),direction:Ve(e,"direction"),stacked:Ve(e,"stacked"),fixed:Ve(e,"fixedTabs"),sliderColor:Ve(e,"sliderColor"),hideSlider:Ve(e,"hideSlider")}}),ve(()=>{const p=el.filterProps(e),c=!!(s.window||e.items.length>0);return k(Se,null,[k(el,Ce(p,{modelValue:i.value,"onUpdate:modelValue":g=>i.value=g,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,r.value,e.class],style:[{"--v-tabs-height":ue(e.height)},h.value,e.style],role:"tablist",symbol:$o},l,t),{default:()=>{var g;return[((g=s.default)==null?void 0:g.call(s))??a.value.map(u=>{var f;return((f=s.tab)==null?void 0:f.call(s,{item:u}))??k(Js,Ce(u,{key:u.text,value:u.value}),{default:s[`tab.${u.value}`]?()=>{var d;return(d=s[`tab.${u.value}`])==null?void 0:d.call(s,{item:u})}:void 0})})]}}),c&&k(Gc,Ce({modelValue:i.value,"onUpdate:modelValue":g=>i.value=g,key:"tabs-window"},l),{default:()=>{var g;return[a.value.map(u=>{var f;return((f=s.item)==null?void 0:f.call(s,{item:u}))??k(Qs,{value:u.value},{default:()=>{var d;return(d=s[`item.${u.value}`])==null?void 0:d.call(s,{item:u})}})}),(g=s.window)==null?void 0:g.call(s)]}})])}),{}}}),vb=["src"],Pb={__name:"PokemonDetailModal",props:{id:{type:Number,required:!0}},setup(e){const n=e,t=fw(),s=Y({}),i=Y("one");return tn(()=>{const a=mc.find(r=>r.id===n.id),o=t.pokemons.find(r=>r.id===n.id);s.value={...a,...o}}),(a,o)=>(we(),go(Kc,null,{default:ke(()=>[k(Ko,null,{default:ke(()=>[k(Nn,{icon:"",variant:"text",onClick:o[0]||(o[0]=r=>a.$emit("close"))},{default:ke(()=>[k(On,null,{default:ke(()=>[Ne("mdi-close")]),_:1})]),_:1}),Ne(" 포켓몬 상세 정보 ")]),_:1}),k(fi,null,{default:ke(()=>[G("img",{src:s.value.sprite,alt:"Pokemon Image",class:"pokemon-image"},null,8,vb),k(yb,{modelValue:i.value,"onUpdate:modelValue":o[1]||(o[1]=r=>i.value=r),class:"tabs"},{default:ke(()=>[k(Js,{value:"one"},{default:ke(()=>[Ne("한국어")]),_:1}),k(Js,{value:"two"},{default:ke(()=>[Ne("English")]),_:1}),k(Js,{value:"three"},{default:ke(()=>[Ne("日本語")]),_:1})]),_:1},8,["modelValue"]),k(fi,null,{default:ke(()=>[k(Gc,{modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=r=>i.value=r)},{default:ke(()=>[k(Qs,{value:"one"},{default:ke(()=>{var r,h;return[G("p",null,"포켓몬 이름: "+Ae((r=s.value.names)==null?void 0:r.korean),1),G("p",null,Ae((h=s.value.descriptions)==null?void 0:h.korean),1),G("p",null,"키: "+Ae(s.value.height/10)+" m",1),G("p",null,"몸무게: "+Ae(s.value.weight/10)+" kg",1)]}),_:1}),k(Qs,{value:"two"},{default:ke(()=>{var r,h;return[G("p",null,"Pokemon Name: "+Ae((r=s.value.names)==null?void 0:r.english),1),G("p",null,Ae((h=s.value.descriptions)==null?void 0:h.english),1),G("p",null,"Height: "+Ae(s.value.height/10)+" m",1),G("p",null,"Weight: "+Ae(s.value.weight/10)+" kg",1)]}),_:1}),k(Qs,{value:"three"},{default:ke(()=>{var r,h;return[G("p",null,"ポケモンの名前: "+Ae((r=s.value.names)==null?void 0:r.japanese),1),G("p",null,Ae((h=s.value.descriptions)==null?void 0:h.japanese),1),G("p",null,"高さ: "+Ae(s.value.height/10)+" m",1),G("p",null,"重さ: "+Ae(s.value.weight/10)+" kg",1)]}),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}))}},jb=Os(Pb,[["__scopeId","data-v-c1695e92"]]);function ha(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Ib(e,n){return{x:e.x-n.x,y:e.y-n.y}}function nl(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:s}=e,i=s==="left"?0:s==="center"?n.width/2:s==="right"?n.width:s,a=t==="top"?0:t==="bottom"?n.height:t;return ha({x:i,y:a},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:s}=e,i=t==="left"?0:t==="right"?n.width:t,a=s==="top"?0:s==="center"?n.height/2:s==="bottom"?n.height:s;return ha({x:i,y:a},n)}return ha({x:n.width/2,y:n.height/2},n)}const sg={static:Sb,connected:Cb},Ab=te({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in sg},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Tb(e,n){const t=Y({}),s=Y();Ee&&Dt(()=>!!(n.isActive.value&&e.locationStrategy),a=>{var o,r;pe(()=>e.locationStrategy,a),dn(()=>{window.removeEventListener("resize",i),s.value=void 0}),window.addEventListener("resize",i,{passive:!0}),typeof e.locationStrategy=="function"?s.value=(o=e.locationStrategy(n,e,t))==null?void 0:o.updateLocation:s.value=(r=sg[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function i(a){var o;(o=s.value)==null||o.call(s,a)}return{contentStyles:t,updateLocation:s}}function Sb(){}function Ob(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Po(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Cb(e,n,t){(Array.isArray(e.target.value)||$m(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:i,preferredOrigin:a}=vo(()=>{const f=Ia(n.location,e.isRtl.value),d=n.origin==="overlap"?f:n.origin==="auto"?Ji(f):Ia(n.origin,e.isRtl.value);return f.side===d.side&&f.align===Qi(d).align?{preferredAnchor:Qr(f),preferredOrigin:Qr(d)}:{preferredAnchor:f,preferredOrigin:d}}),[o,r,h,l]=["minWidth","minHeight","maxWidth","maxHeight"].map(f=>v(()=>{const d=parseFloat(n[f]);return isNaN(d)?1/0:d})),p=v(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const f=n.offset.split(" ").map(parseFloat);return f.length<2&&f.push(0),f}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let c=!1;const g=new ResizeObserver(()=>{c&&u()});pe([e.target,e.contentEl],(f,d)=>{let[b,y]=f,[P,S]=d;P&&!Array.isArray(P)&&g.unobserve(P),b&&!Array.isArray(b)&&g.observe(b),S&&g.unobserve(S),y&&g.observe(y)},{immediate:!0}),dn(()=>{g.disconnect()});function u(){if(c=!1,requestAnimationFrame(()=>c=!0),!e.target.value||!e.contentEl.value)return;const f=Mp(e.target.value),d=Ob(e.contentEl.value,e.isRtl.value),b=ci(e.contentEl.value),y=12;b.length||(b.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(d.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),d.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const P=b.reduce((D,T)=>{const R=T.getBoundingClientRect(),F=new yt({x:T===document.documentElement?0:R.x,y:T===document.documentElement?0:R.y,width:T.clientWidth,height:T.clientHeight});return D?new yt({x:Math.max(D.left,F.left),y:Math.max(D.top,F.top),width:Math.min(D.right,F.right)-Math.max(D.left,F.left),height:Math.min(D.bottom,F.bottom)-Math.max(D.top,F.top)}):F},void 0);P.x+=y,P.y+=y,P.width-=y*2,P.height-=y*2;let S={anchor:i.value,origin:a.value};function O(D){const T=new yt(d),R=nl(D.anchor,f),F=nl(D.origin,T);let{x:ne,y:J}=Ib(R,F);switch(D.anchor.side){case"top":J-=p.value[0];break;case"bottom":J+=p.value[0];break;case"left":ne-=p.value[0];break;case"right":ne+=p.value[0];break}switch(D.anchor.align){case"top":J-=p.value[1];break;case"bottom":J+=p.value[1];break;case"left":ne-=p.value[1];break;case"right":ne+=p.value[1];break}return T.x+=ne,T.y+=J,T.width=Math.min(T.width,h.value),T.height=Math.min(T.height,l.value),{overflows:nh(T,P),x:ne,y:J}}let E=0,j=0;const I={x:0,y:0},B={x:!1,y:!1};let _=-1;for(;!(_++>10);){const{x:D,y:T,overflows:R}=O(S);E+=D,j+=T,d.x+=D,d.y+=T;{const F=eh(S.anchor),ne=R.x.before||R.x.after,J=R.y.before||R.y.after;let K=!1;if(["x","y"].forEach(W=>{if(W==="x"&&ne&&!B.x||W==="y"&&J&&!B.y){const q={anchor:{...S.anchor},origin:{...S.origin}},N=W==="x"?F==="y"?Qi:Ji:F==="y"?Ji:Qi;q.anchor=N(q.anchor),q.origin=N(q.origin);const{overflows:U}=O(q);(U[W].before<=R[W].before&&U[W].after<=R[W].after||U[W].before+U[W].after<(R[W].before+R[W].after)/2)&&(S=q,K=B[W]=!0)}}),K)continue}R.x.before&&(E+=R.x.before,d.x+=R.x.before),R.x.after&&(E-=R.x.after,d.x-=R.x.after),R.y.before&&(j+=R.y.before,d.y+=R.y.before),R.y.after&&(j-=R.y.after,d.y-=R.y.after);{const F=nh(d,P);I.x=P.width-F.x.before-F.x.after,I.y=P.height-F.y.before-F.y.after,E+=F.x.before,d.x+=F.x.before,j+=F.y.before,d.y+=F.y.before}break}const V=eh(S.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${S.anchor.side} ${S.anchor.align}`,transformOrigin:`${S.origin.side} ${S.origin.align}`,top:ue(la(j)),left:e.isRtl.value?void 0:ue(la(E)),right:e.isRtl.value?ue(la(-E)):void 0,minWidth:ue(V==="y"?Math.min(o.value,f.width):o.value),maxWidth:ue(tl(Wt(I.x,o.value===1/0?0:o.value,h.value))),maxHeight:ue(tl(Wt(I.y,r.value===1/0?0:r.value,l.value)))}),{available:I,contentBox:d}}return pe(()=>[i.value,a.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>u()),He(()=>{const f=u();if(!f)return;const{available:d,contentBox:b}=f;b.height>d.y&&requestAnimationFrame(()=>{u(),requestAnimationFrame(()=>{u()})})}),{updateLocation:u}}function la(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function tl(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let La=!0;const ki=[];function Eb(e){!La||ki.length?(ki.push(e),Fa()):(La=!1,e(),Fa())}let sl=-1;function Fa(){cancelAnimationFrame(sl),sl=requestAnimationFrame(()=>{const e=ki.shift();e&&e(),ki.length?Fa():La=!0})}const ei={none:null,close:Mb,block:Rb,reposition:Nb},xb=te({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ei}},"VOverlay-scroll-strategies");function _b(e,n){if(!Ee)return;let t;rt(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ps(),await new Promise(s=>setTimeout(s)),t.active&&t.run(()=>{var s;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(s=ei[e.scrollStrategy])==null||s.call(ei,n,e,t)}))}),dn(()=>{t==null||t.stop()})}function Mb(e){function n(t){e.isActive.value=!1}ig(e.targetEl.value??e.contentEl.value,n)}function Rb(e,n){var o;const t=(o=e.root.value)==null?void 0:o.offsetParent,s=[...new Set([...ci(e.targetEl.value,n.contained?t:void 0),...ci(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),i=window.innerWidth-document.documentElement.offsetWidth,a=(r=>Ao(r)&&r)(t||document.documentElement);a&&e.root.value.classList.add("v-overlay--scroll-blocked"),s.forEach((r,h)=>{r.style.setProperty("--v-body-scroll-x",ue(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",ue(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",ue(i)),r.classList.add("v-overlay-scroll-blocked")}),dn(()=>{s.forEach((r,h)=>{const l=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),p=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),c=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-l,r.scrollTop=-p,r.style.scrollBehavior=c}),a&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Nb(e,n,t){let s=!1,i=-1,a=-1;function o(r){Eb(()=>{var p,c;const h=performance.now();(c=(p=e.updateLocation).value)==null||c.call(p,r),s=(performance.now()-h)/(1e3/60)>2})}a=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{ig(e.targetEl.value??e.contentEl.value,r=>{s?(cancelAnimationFrame(i),i=requestAnimationFrame(()=>{i=requestAnimationFrame(()=>{o(r)})})):o(r)})})}),dn(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(a),cancelAnimationFrame(i)})}function ig(e,n){const t=[document,...ci(e)];t.forEach(s=>{s.addEventListener("scroll",n,{passive:!0})}),dn(()=>{t.forEach(s=>{s.removeEventListener("scroll",n)})})}const Bb=Symbol.for("vuetify:v-menu"),Lb=te({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Fb(e,n){let t=()=>{};function s(o){t==null||t();const r=Number(o?e.openDelay:e.closeDelay);return new Promise(h=>{t=cm(r,()=>{n==null||n(o),h(o)})})}function i(){return s(!0)}function a(){return s(!1)}return{clearDelay:t,runOpenDelay:i,runCloseDelay:a}}const Vb=te({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Lb()},"VOverlay-activator");function Db(e,n){let{isActive:t,isTop:s}=n;const i=qe("useActivator"),a=Y();let o=!1,r=!1,h=!0;const l=v(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),p=v(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!l.value),{runOpenDelay:c,runCloseDelay:g}=Fb(e,I=>{I===(e.openOnHover&&o||l.value&&r)&&!(e.openOnHover&&t.value&&!s.value)&&(t.value!==I&&(h=!0),t.value=I)}),u=Y(),f={onClick:I=>{I.stopPropagation(),a.value=I.currentTarget||I.target,t.value||(u.value=[I.clientX,I.clientY]),t.value=!t.value},onMouseenter:I=>{var B;(B=I.sourceCapabilities)!=null&&B.firesTouchEvents||(o=!0,a.value=I.currentTarget||I.target,c())},onMouseleave:I=>{o=!1,g()},onFocus:I=>{pm(I.target,":focus-visible")!==!1&&(r=!0,I.stopPropagation(),a.value=I.currentTarget||I.target,c())},onBlur:I=>{r=!1,I.stopPropagation(),g()}},d=v(()=>{const I={};return p.value&&(I.onClick=f.onClick),e.openOnHover&&(I.onMouseenter=f.onMouseenter,I.onMouseleave=f.onMouseleave),l.value&&(I.onFocus=f.onFocus,I.onBlur=f.onBlur),I}),b=v(()=>{const I={};if(e.openOnHover&&(I.onMouseenter=()=>{o=!0,c()},I.onMouseleave=()=>{o=!1,g()}),l.value&&(I.onFocusin=()=>{r=!0,c()},I.onFocusout=()=>{r=!1,g()}),e.closeOnContentClick){const B=Be(Bb,null);I.onClick=()=>{t.value=!1,B==null||B.closeParents()}}return I}),y=v(()=>{const I={};return e.openOnHover&&(I.onMouseenter=()=>{h&&(o=!0,h=!1,c())},I.onMouseleave=()=>{o=!1,g()}),I});pe(s,I=>{I&&(e.openOnHover&&!o&&(!l.value||!r)||l.value&&!r&&(!e.openOnHover||!o))&&(t.value=!1)}),pe(t,I=>{I||setTimeout(()=>{u.value=void 0})},{flush:"post"});const P=ja();rt(()=>{P.value&&He(()=>{a.value=P.el})});const S=ja(),O=v(()=>e.target==="cursor"&&u.value?u.value:S.value?S.el:ag(e.target,i)||a.value),E=v(()=>Array.isArray(O.value)?void 0:O.value);let j;return pe(()=>!!e.activator,I=>{I&&Ee?(j=Ps(),j.run(()=>{Wb(e,i,{activatorEl:a,activatorEvents:d})})):j&&j.stop()},{flush:"post",immediate:!0}),dn(()=>{j==null||j.stop()}),{activatorEl:a,activatorRef:P,target:O,targetEl:E,targetRef:S,activatorEvents:d,contentEvents:b,scrimEvents:y}}function Wb(e,n,t){let{activatorEl:s,activatorEvents:i}=t;pe(()=>e.activator,(h,l)=>{if(l&&h!==l){const p=r(l);p&&o(p)}h&&He(()=>a())},{immediate:!0}),pe(()=>e.activatorProps,()=>{a()}),dn(()=>{o()});function a(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;h&&um(h,Ce(i.value,l))}function o(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;h&&dm(h,Ce(i.value,l))}function r(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const l=ag(h,n);return s.value=(l==null?void 0:l.nodeType)===Node.ELEMENT_NODE?l:void 0,s.value}}function ag(e,n){var s,i;if(!e)return;let t;if(e==="parent"){let a=(i=(s=n==null?void 0:n.proxy)==null?void 0:s.$el)==null?void 0:i.parentNode;for(;a!=null&&a.hasAttribute("data-no-activator");)a=a.parentNode;t=a}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Kb(){if(!Ee)return ye(!1);const{ssr:e}=Yp();if(e){const n=ye(!1);return tn(()=>{n.value=!0}),n}else return ye(!0)}const il=Symbol.for("vuetify:stack"),Jt=mn([]);function zb(e,n,t){const s=qe("useStack"),i=!t,a=Be(il,void 0),o=mn({activeChildren:new Set});bn(il,o);const r=ye(+n.value);Dt(e,()=>{var c;const p=(c=Jt.at(-1))==null?void 0:c[1];r.value=p?p+10:+n.value,i&&Jt.push([s.uid,r.value]),a==null||a.activeChildren.add(s.uid),dn(()=>{if(i){const g=de(Jt).findIndex(u=>u[0]===s.uid);Jt.splice(g,1)}a==null||a.activeChildren.delete(s.uid)})});const h=ye(!0);i&&rt(()=>{var c;const p=((c=Jt.at(-1))==null?void 0:c[0])===s.uid;setTimeout(()=>h.value=p)});const l=v(()=>!o.activeChildren.size);return{globalTop:js(h),localTop:l,stackStyles:v(()=>({zIndex:r.value}))}}function Hb(e){return{teleportTarget:v(()=>{const t=e();if(t===!0||!Ee)return;const s=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(s==null)return;let i=s.querySelector(":scope > .v-overlay-container");return i||(i=document.createElement("div"),i.className="v-overlay-container",s.appendChild(i)),i})}}function $b(){return!0}function og(e,n,t){if(!e||rg(e,t)===!1)return!1;const s=Dp(n);if(typeof ShadowRoot<"u"&&s instanceof ShadowRoot&&s.host===e.target)return!1;const i=(typeof t.value=="object"&&t.value.include||(()=>[]))();return i.push(n),!i.some(a=>a==null?void 0:a.contains(e.target))}function rg(e,n){return(typeof n.value=="object"&&n.value.closeConditional||$b)(e)}function Ub(e,n,t){const s=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&og(e,n,t)&&setTimeout(()=>{rg(e,t)&&s&&s(e)},0)}function al(e,n){const t=Dp(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Gb={mounted(e,n){const t=i=>Ub(i,e,n),s=i=>{e._clickOutside.lastMousedownWasOutside=og(i,e,n)};al(e,i=>{i.addEventListener("click",t,!0),i.addEventListener("mousedown",s,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:s}},unmounted(e,n){e._clickOutside&&(al(e,t=>{var a;if(!t||!((a=e._clickOutside)!=null&&a[n.instance.$.uid]))return;const{onClick:s,onMousedown:i}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",s,!0),t.removeEventListener("mousedown",i,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Yb(e){const{modelValue:n,color:t,...s}=e;return k(Vn,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&k("div",Ce({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},s),null)]})}const hg=te({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Vb(),...Oe(),...Cs(),...Yc(),...Ab(),...xb(),...fn(),...Di()},"VOverlay"),ol=ce()({name:"VOverlay",directives:{ClickOutside:Gb},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...hg()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:s,emit:i}=n;const a=xn(e,"modelValue"),o=v({get:()=>a.value,set:me=>{me&&e.disabled||(a.value=me)}}),{themeClasses:r}=Pn(e),{rtlClasses:h,isRtl:l}=Kn(),{hasContent:p,onAfterLeave:c}=qc(e,o),g=vt(v(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:u,localTop:f,stackStyles:d}=zb(o,Ve(e,"zIndex"),e._disableGlobalStack),{activatorEl:b,activatorRef:y,target:P,targetEl:S,targetRef:O,activatorEvents:E,contentEvents:j,scrimEvents:I}=Db(e,{isActive:o,isTop:f}),{teleportTarget:B}=Hb(()=>{var C;const me=e.attach||e.contained;if(me)return me;const be=(C=b==null?void 0:b.value)==null?void 0:C.getRootNode();return be instanceof ShadowRoot?be:!1}),{dimensionStyles:_}=Es(e),V=Kb(),{scopeId:D}=Uo();pe(()=>e.disabled,me=>{me&&(o.value=!1)});const T=Y(),R=Y(),F=Y(),{contentStyles:ne,updateLocation:J}=Tb(e,{isRtl:l,contentEl:F,target:P,isActive:o});_b(e,{root:T,contentEl:F,targetEl:S,isActive:o,updateLocation:J});function K(me){i("click:outside",me),e.persistent?ie():o.value=!1}function W(me){return o.value&&u.value&&(!e.scrim||me.target===R.value)}Ee&&pe(o,me=>{me?window.addEventListener("keydown",q):window.removeEventListener("keydown",q)},{immediate:!0}),vn(()=>{Ee&&window.removeEventListener("keydown",q)});function q(me){var be,C;me.key==="Escape"&&u.value&&(e.persistent?ie():(o.value=!1,(be=F.value)!=null&&be.contains(document.activeElement)&&((C=b.value)==null||C.focus())))}const N=Rw();Dt(()=>e.closeOnBack,()=>{Nw(N,me=>{u.value&&o.value?(me(!1),e.persistent?ie():o.value=!1):me()})});const U=Y();pe(()=>o.value&&(e.absolute||e.contained)&&B.value==null,me=>{if(me){const be=zm(T.value);be&&be!==document.scrollingElement&&(U.value=be.scrollTop)}});function ie(){e.noClickAnimation||F.value&&dt(F.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:fs})}function We(){i("afterEnter")}function $e(){c(),i("afterLeave")}return ve(()=>{var me;return k(Se,null,[(me=t.activator)==null?void 0:me.call(t,{isActive:o.value,targetRef:O,props:Ce({ref:y},E.value,e.activatorProps)}),V.value&&p.value&&k(od,{disabled:!B.value,to:B.value},{default:()=>[k("div",Ce({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":o.value,"v-overlay--contained":e.contained},r.value,h.value,e.class],style:[d.value,{"--v-overlay-opacity":e.opacity,top:ue(U.value)},e.style],ref:T},D,s),[k(Yb,Ce({color:g,modelValue:o.value&&!!e.scrim,ref:R},I.value),null),k(Qn,{appear:!0,persisted:!0,transition:e.transition,target:P.value,onAfterEnter:We,onAfterLeave:$e},{default:()=>{var be;return[un(k("div",Ce({ref:F,class:["v-overlay__content",e.contentClass],style:[_.value,ne.value]},j.value,e.contentProps),[(be=t.default)==null?void 0:be.call(t,{isActive:o})]),[[$t,o.value],[Is("click-outside"),{handler:K,closeConditional:W,include:()=>[b.value]}]])]}})])]})])}),{activatorEl:b,scrimEl:R,target:P,animateClick:ie,contentEl:F,globalTop:u,localTop:f,updateLocation:J}}}),qb=te({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...hg({origin:"center center",scrollStrategy:"block",transition:{component:gb},zIndex:2400})},"VDialog"),lg=ce()({name:"VDialog",props:qb(),emits:{"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{emit:t,slots:s}=n;const i=xn(e,"modelValue"),{scopeId:a}=Uo(),o=Y();function r(p){var u,f;const c=p.relatedTarget,g=p.target;if(c!==g&&((u=o.value)!=null&&u.contentEl)&&((f=o.value)!=null&&f.globalTop)&&![document,o.value.contentEl].includes(g)&&!o.value.contentEl.contains(g)){const d=xp(o.value.contentEl);if(!d.length)return;const b=d[0],y=d[d.length-1];c===b?y.focus():b.focus()}}Ee&&pe(()=>i.value&&e.retainFocus,p=>{p?document.addEventListener("focusin",r):document.removeEventListener("focusin",r)},{immediate:!0});function h(){var p;(p=o.value)!=null&&p.contentEl&&!o.value.contentEl.contains(document.activeElement)&&o.value.contentEl.focus({preventScroll:!0})}function l(){t("afterLeave")}return pe(i,async p=>{var c;p||(await He(),(c=o.value.activatorEl)==null||c.focus({preventScroll:!0}))}),ve(()=>{const p=ol.filterProps(e),c=Ce({"aria-haspopup":"dialog","aria-expanded":String(i.value)},e.activatorProps),g=Ce({tabindex:-1},e.contentProps);return k(ol,Ce({ref:o,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},p,{modelValue:i.value,"onUpdate:modelValue":u=>i.value=u,"aria-modal":"true",activatorProps:c,contentProps:g,role:"dialog",onAfterEnter:h,onAfterLeave:l},a),{activator:s.activator,default:function(){for(var u=arguments.length,f=new Array(u),d=0;d<u;d++)f[d]=arguments[d];return k(Ln,{root:"VDialog"},{default:()=>{var b;return[(b=s.default)==null?void 0:b.call(s,...f)]}})}})}),Ho({},o)}}),Xb={key:0,class:"loading-screen"},Zb=G("iframe",{src:"https://lottie.host/embed/d9047134-fec7-4dec-bba1-a5daccfa345f/Nxtp4KlqIX.json"},null,-1),Jb=[Zb],Qb={class:"searchBar"},ey={class:"type"},ny=G("p",{class:"typeTitle"},"속성으로 찾아보기",-1),ty={class:"typeGroup"},sy=["onClick"],iy=G("div",{class:"sort"},"번호순 (오름차순)",-1),ay={id:"searchResultCount"},oy={class:"cardSec"},ry=["onClick"],hy=["src","alt"],ly={class:"langEnJp"},py={class:"typeWrap"},cy={key:0,class:"endOfListMessage"},rl=16,gy={__name:"Main",setup(e){const n=Y(!1),t=Y(null),s=K=>{t.value=K,n.value=!0},i=()=>{n.value=!1},a=Y(""),o=Y(""),r=Y([]);let h=0;const l=new Set,p=Y(!1),c=Y("");Y("");const g=Y(!0),u=Y(!1),f=Y(!1),d=Y(!1),b=Y(!1);let y=Y([]);async function P(K){const q=await(await fetch(`https://pokeapi.co/api/v2/pokemon/${K}`)).json();return{id:q.id,sprite:q.sprites.front_default||q.sprites.other["official-artwork"].front_default||"@/assets/img/silhouette.png",types:q.types.map(N=>N.type.name),height:q.height,weight:q.weight}}pe(p,K=>{const W=document.documentElement;K?W.style.overflowY="hidden":W.style.overflowY="auto"});const S={normal:"노말",fire:"불꽃",water:"물",electric:"전기",grass:"풀",ice:"얼음",fighting:"격투",poison:"독",ground:"땅",flying:"비행",psychic:"에스퍼",bug:"벌레",rock:"바위",ghost:"고스트",dragon:"드래곤",dark:"악",steel:"강철",fairy:"페어리"};async function O(K,W,q=""){if(q)return(await(await fetch(`https://pokeapi.co/api/v2/type/${q}`)).json()).pokemon.map(We=>We.pokemon).slice(K,K+W);{const N=`https://pokeapi.co/api/v2/pokemon?offset=${K}&limit=${W}`;return(await(await fetch(N)).json()).results}}async function E(K){return await(await fetch(K.url)).json()}async function j(K){const q=await(await fetch(K.species.url)).json();return{korean:q.names.find(N=>N.language.name==="ko").name,english:q.names.find(N=>N.language.name==="en").name,japanese:q.names.find(N=>N.language.name==="ja").name}}async function I(){if(p.value||!g.value)return;u.value=!0,p.value=!0,document.body.style.overflow="hidden";const K=await O(h,rl,c.value);if(K.length===0){g.value=!1,V(),p.value=!1,u.value=!1,document.body.style.overflow="auto";return}for(let W of K)if(!l.has(W.name))try{const q=await E(W),N=await j(q);let U=q.sprites.front_default;U||(U=q.sprites.other["official-artwork"].front_default),U||(U="@/assets/img/silhouette.png"),r.value.push({id:q.id,name:W.name,names:N,sprite:U,types:q.types.map(ie=>ie.type.name)}),document.body.classList.contains("darkMode")&&He(()=>{document.querySelectorAll(".cardOne").forEach(ie=>{ie.classList.add("is-dark")})})}catch(q){console.error(`Error fetching data for ${W.name}:`,q)}h+=rl,p.value=!1,u.value=!1,document.body.style.overflow="auto"}async function B(){b.value=!0;const K=a.value.trim().toLowerCase();if(c.value="",!K){d.value=!1;return}const W=y.value.filter(N=>N.names.korean.includes(K)||N.names.english.toLowerCase().includes(K)||N.names.japanese.includes(K));if(W.length===0){o.value="일치하는 포켓몬이 없습니다.",r.value=[];return}const q=W.map(async N=>({...await P(N.id),names:N.names,descriptions:N.descriptions}));r.value=await Promise.all(q),o.value=`총 ${W.length}마리의 포켓몬이 소환되었습니다.`}async function _(K){b.value=!1,a.value="",h=0,l.clear(),r.value=[],c.value=K,D(),T(),g.value=!0,await I()}function V(){D(),f.value=!0}function D(){f.value=!1}function T(){o.value=""}function R(){if(b.value)return;window.innerHeight+window.scrollY>=document.documentElement.offsetHeight-200&&!p.value&&g.value&&I()}async function F(){y.value=mc}function ne(){const K=a.value.trim();if(!K){d.value=!1;return}const W=J(K);d.value=W==="unknown"||W==="number"}function J(K){const W=/[\u3131-\uD79D]/giu,q=/[\u3040-\u30ff\u31f0-\u31ff\ufb00-\uff9f]/giu,N=/^[A-Za-z]+$/;return/\d/.test(K)?"number":W.test(K)?"korean":q.test(K)?"japanese":N.test(K)?"english":"unknown"}return tn(()=>{F(),I(),window.addEventListener("scroll",R)}),(K,W)=>(we(),Te("div",null,[u.value?(we(),Te("div",Xb,Jb)):Ir("",!0),G("div",{class:"mainSec",onScroll:R},[G("div",null,[k(bw),G("div",Qb,[un(G("input",{type:"text",placeholder:"포켓몬을 검색해보세요!",id:"search","onUpdate:modelValue":W[0]||(W[0]=q=>a.value=q),onKeyup:jp(B,["enter"]),onInput:ne},null,544),[[Yd,a.value]]),G("span",{class:"tooltip",style:vi({display:d.value?"block":"none"})},"검색 가능한 언어: 한국어, 영어, 일본어",4),G("button",{id:"searchBt",onClick:B},"검색")])]),G("div",null,[G("div",ey,[ny,G("div",ty,[(we(),Te(Se,null,Bt(S,(q,N)=>G("p",{key:N,class:st(["nes-btn",N]),onClick:U=>_(N)},Ae(q),11,sy)),64))])]),iy,G("div",ay,Ae(o.value),1),G("div",oy,[(we(!0),Te(Se,null,Bt(r.value,q=>(we(),Te("div",{key:q.id},[G("div",{class:"cardOne nes-container is-rounded",onClick:N=>s(q.id)},[G("span",null,"no."+Ae(q.id),1),G("img",{src:q.sprite,alt:q.names.korean},null,8,hy),G("span",null,Ae(q.names.korean),1),G("div",ly,[G("span",null,Ae(q.names.english),1),G("span",null,Ae(q.names.japanese),1)]),G("div",py,[(we(!0),Te(Se,null,Bt(q.types,N=>(we(),Te("p",{key:N,class:st(["nes-btn",N])},Ae(S[N]),3))),128))])],8,ry)]))),128))]),f.value?(we(),Te("div",cy," 모든 포켓몬을 소환했습니다 ")):Ir("",!0)])],32),k(lg,{modelValue:n.value,"onUpdate:modelValue":W[1]||(W[1]=q=>n.value=q),"max-width":"600px"},{default:ke(()=>[k(jb,{id:t.value,onClose:i},null,8,["id"])]),_:1},8,["modelValue"])]))}},uy="/pokemon/assets/game_pokemon-lhewX10W.png",dy="/pokemon/assets/game_card_dark-aEbSi3Wa.png",my="/pokemon/assets/game_card-Cw65Zfdw.png",Go=e=>(Qa("data-v-cfbb8deb"),e=e(),eo(),e),fy={class:"gameMainSec"},ky=pd('<p class="gameTitle" data-v-cfbb8deb>포켓몬 미니게임 <i class="snes-jp-logo" data-v-cfbb8deb></i></p><div class="messageCon" data-v-cfbb8deb><section class="message -right" data-v-cfbb8deb><div class="nes-balloon from-right" data-v-cfbb8deb><p data-v-cfbb8deb>포켓몬 퀴즈에 도전해보자!</p></div></section><i class="nes-charmander" data-v-cfbb8deb></i></div>',2),wy={class:"gameBoxSet"},by=Go(()=>G("div",{class:"gameCon nes-container is-rounded"},[G("h3",null,[Ne("내가 "),G("span",null,"누구"),Ne("게요?")]),G("img",{src:uy,alt:"우파이미지"}),G("div",null,"이름 퀴즈!")],-1)),yy={class:"gameCon nes-container is-rounded"},vy=Go(()=>G("h3",null,[Ne("내 "),G("span",null,"짝"),Ne("을 찾아줘")],-1)),Py={key:0,src:dy,alt:"카드이미지"},jy={key:1,src:my,alt:"카드이미지"},Iy=Go(()=>G("div",null,"짝맞추기!",-1)),Ay={__name:"MiniGame",setup(e){const n=Y(!1),t=()=>{const s=document.querySelector(".nes-balloon"),i=document.querySelectorAll(".gameCon");s&&(n.value?s.classList.add("is-dark"):s.classList.remove("is-dark")),i.length>0&&i.forEach(a=>{n.value?a.classList.add("is-dark"):a.classList.remove("is-dark")})};return tn(()=>{n.value=document.body.classList.contains("darkMode"),He(t);const s=new MutationObserver(i=>{i.forEach(a=>{a.attributeName==="class"&&(n.value=document.body.classList.contains("darkMode"),He(t))})});s.observe(document.body,{attributes:!0}),vn(()=>{s.disconnect()})}),(s,i)=>{const a=to("router-link");return we(),Te("div",null,[G("div",fy,[ky,G("div",wy,[k(a,{to:"/minigame/namequiz"},{default:ke(()=>[by]),_:1}),k(a,{to:"/minigame/pokecard"},{default:ke(()=>[G("div",yy,[vy,n.value?(we(),Te("img",Py)):(we(),Te("img",jy)),Iy])]),_:1})])])])}}},Ty=Os(Ay,[["__scopeId","data-v-cfbb8deb"]]),Yo=e=>(Qa("data-v-533d0b27"),e=e(),eo(),e),Sy={id:"app"},Oy={class:"gameContainer"},Cy=Yo(()=>G("h1",null,"내 짝을 찾아줘!",-1)),Ey={class:"cardGrid"},xy=["onClick"],_y=Yo(()=>G("div",{class:"front"},null,-1)),My={class:"back"},Ry=["src","alt"],Ny=Yo(()=>G("p",null,"축하합니다! 모든 카드를 맞췄습니다!",-1)),By={__name:"poke_card",setup(e){const n=Y([]),t=Y(null),s=Y(null),i=Y(!1),a=Y(0),o=Y(!1),r=async()=>{const b=Math.floor(Math.random()*1e3),S=(await(await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${b}&limit=10`)).json()).results;n.value=[...S,...S].map(O=>({...O,id:Math.random(),flipped:!1,matched:!1})),n.value.sort(()=>Math.random()-.5),a.value=0,o.value=!1},h=b=>{const y=b.split("/");return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y[y.length-2]}.png`},l=b=>{if(!i.value&&!(t.value&&t.value.id===b.id)){if(b.flipped=!0,!t.value){t.value=b;return}s.value=b,i.value=!0,p()}},p=()=>{t.value.name===s.value.name?c():g()},c=()=>{t.value.matched=!0,s.value.matched=!0,u(),a.value++,a.value===10&&setTimeout(f,500)},g=()=>{setTimeout(()=>{t.value.flipped=!1,s.value.flipped=!1,u()},1e3)},u=()=>{t.value=null,s.value=null,i.value=!1},f=()=>{o.value=!0},d=()=>{window.location.reload()};return tn(r),(b,y)=>(we(),Te("div",Sy,[G("div",Oy,[Cy,G("div",Ey,[(we(!0),Te(Se,null,Bt(n.value,P=>(we(),Te("div",{key:P.id,class:st(["card",{flipped:P.flipped,matched:P.matched}]),onClick:S=>l(P)},[_y,G("div",My,[G("img",{src:h(P.url),alt:P.name},null,8,Ry)])],10,xy))),128))]),G("div",{class:st(["gameComplete",{active:o.value}])},[Ny,G("button",{class:"restartButton",onClick:d},"다시 하기")],2)])]))}},Ly=Os(By,[["__scopeId","data-v-533d0b27"]]),Fy=[{id:1,name:"이상해씨",types:["grass","poison"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif"},{id:4,name:"파이리",types:["fire"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif"},{id:7,name:"꼬부기",types:["water"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif"},{id:25,name:"피카츄",types:["electric"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"},{id:39,name:"푸린",types:["normal","fairy"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/39.gif"},{id:52,name:"나옹",types:["normal"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/52.gif"},{id:58,name:"가디",types:["fire"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/58.gif"},{id:63,name:"케이시",types:["psychic"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/63.gif"},{id:66,name:"알통몬",types:["fighting"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/66.gif"},{id:74,name:"꼬마돌",types:["rock","ground"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/74.gif"},{id:77,name:"포니타",types:["fire"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/77.gif"},{id:81,name:"코일",types:["electric","steel"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/81.gif"},{id:83,name:"파오리",types:["normal","flying"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/83.gif"},{id:88,name:"질퍽이",types:["poison"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/88.gif"},{id:92,name:"고오스",types:["ghost","poison"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif"},{id:95,name:"롱스톤",types:["rock","ground"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/95.gif"},{id:96,name:"슬리프",types:["psychic"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/96.gif"},{id:98,name:"크랩",types:["water"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/98.gif"},{id:102,name:"아라리",types:["grass","psychic"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/102.gif"},{id:104,name:"탕구리",types:["ground"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/104.gif"},{id:108,name:"내루미",types:["normal"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/108.gif"},{id:111,name:"뿔카노",types:["ground","rock"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/111.gif"},{id:116,name:"쏘드라",types:["water"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/116.gif"},{id:26,name:"라이츄",types:["electric"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/26.gif"},{id:27,name:"모래두지",types:["ground"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/27.gif"},{id:29,name:"니드런♀",types:["poison"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/29.gif"},{id:32,name:"니드런♂",types:["poison"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/32.gif"},{id:35,name:"삐삐",types:["fairy"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif"},{id:37,name:"식스테일",types:["fire"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/37.gif"},{id:41,name:"주뱃",types:["poison","flying"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/41.gif"},{id:43,name:"뚜벅초",types:["grass","poison"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/43.gif"},{id:50,name:"디그다",types:["ground"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/50.gif"},{id:54,name:"고라파덕",types:["water"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif"},{id:56,name:"망키",types:["fighting"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/56.gif"},{id:60,name:"발챙이",types:["water"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/60.gif"},{id:72,name:"왕눈해",types:["water","poison"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/72.gif"},{id:84,name:"두두",types:["normal","flying"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/84.gif"},{id:90,name:"셀러",types:["water"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/90.gif"},{id:100,name:"찌리리공",types:["electric"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/100.gif"},{id:106,name:"시라소몬",types:["fighting"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/106.gif"},{id:114,name:"덩쿠리",types:["grass"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/114.gif"},{id:120,name:"별가사리",types:["water"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/120.gif"},{id:129,name:"잉어킹",types:["water"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/129.gif"},{id:133,name:"이브이",types:["normal"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/133.gif"},{id:137,name:"폴리곤",types:["normal"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/137.gif"},{id:143,name:"잠만보",types:["normal"],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",gif:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif"}],Vy=te({fluid:{type:Boolean,default:!1},...Oe(),...Qe()},"VContainer"),Dy=ce()({name:"VContainer",props:Vy(),setup(e,n){let{slots:t}=n;const{rtlClasses:s}=Kn();return ve(()=>k(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},t)),{}}}),pg=Mi.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),cg=Mi.reduce((e,n)=>{const t="offset"+Dn(n);return e[t]={type:[String,Number],default:null},e},{}),gg=Mi.reduce((e,n)=>{const t="order"+Dn(n);return e[t]={type:[String,Number],default:null},e},{}),hl={col:Object.keys(pg),offset:Object.keys(cg),order:Object.keys(gg)};function Wy(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const i=n.replace(e,"");s+=`-${i}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const Ky=["auto","start","end","center","baseline","stretch"],zy=te({cols:{type:[Boolean,String,Number],default:!1},...pg,offset:{type:[String,Number],default:null},...cg,order:{type:[String,Number],default:null},...gg,alignSelf:{type:String,default:null,validator:e=>Ky.includes(e)},...Oe(),...Qe()},"VCol"),Hy=ce()({name:"VCol",props:zy(),setup(e,n){let{slots:t}=n;const s=v(()=>{const i=[];let a;for(a in hl)hl[a].forEach(r=>{const h=e[r],l=Wy(a,r,h);l&&i.push(l)});const o=i.some(r=>r.startsWith("v-col-"));return i.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),i});return()=>{var i;return Cn(e.tag,{class:[s.value,e.class],style:e.style},(i=t.default)==null?void 0:i.call(t))}}}),qo=["start","end","center"],ug=["space-between","space-around","space-evenly"];function Xo(e,n){return Mi.reduce((t,s)=>{const i=e+Dn(s);return t[i]=n(),t},{})}const $y=[...qo,"baseline","stretch"],dg=e=>$y.includes(e),mg=Xo("align",()=>({type:String,default:null,validator:dg})),Uy=[...qo,...ug],fg=e=>Uy.includes(e),kg=Xo("justify",()=>({type:String,default:null,validator:fg})),Gy=[...qo,...ug,"stretch"],wg=e=>Gy.includes(e),bg=Xo("alignContent",()=>({type:String,default:null,validator:wg})),ll={align:Object.keys(mg),justify:Object.keys(kg),alignContent:Object.keys(bg)},Yy={align:"align",justify:"justify",alignContent:"align-content"};function qy(e,n,t){let s=Yy[e];if(t!=null){if(n){const i=n.replace(e,"");s+=`-${i}`}return s+=`-${t}`,s.toLowerCase()}}const Xy=te({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:dg},...mg,justify:{type:String,default:null,validator:fg},...kg,alignContent:{type:String,default:null,validator:wg},...bg,...Oe(),...Qe()},"VRow"),Zy=ce()({name:"VRow",props:Xy(),setup(e,n){let{slots:t}=n;const s=v(()=>{const i=[];let a;for(a in ll)ll[a].forEach(o=>{const r=e[o],h=qy(a,o,r);h&&i.push(h)});return i.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),i});return()=>{var i;return Cn(e.tag,{class:["v-row",s.value,e.class],style:e.style},(i=t.default)==null?void 0:i.call(t))}}}),Jy=te({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Oe(),...Di({transition:{component:Qc}})},"VCounter"),Qy=ce()({name:"VCounter",functional:!0,props:Jy(),setup(e,n){let{slots:t}=n;const s=v(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return ve(()=>k(Qn,{transition:e.transition},{default:()=>[un(k("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[t.default?t.default({counter:s.value,max:e.max,value:e.value}):s.value]),[[$t,e.active]])]})),{}}}),ev=te({text:String,onClick:bt(),...Oe(),...fn()},"VLabel"),nv=ce()({name:"VLabel",props:ev(),setup(e,n){let{slots:t}=n;return ve(()=>{var s;return k("label",{class:["v-label",{"v-label--clickable":!!e.onClick},e.class],style:e.style,onClick:e.onClick},[e.text,(s=t.default)==null?void 0:s.call(t)])}),{}}}),tv=te({floating:Boolean,...Oe()},"VFieldLabel"),zs=ce()({name:"VFieldLabel",props:tv(),setup(e,n){let{slots:t}=n;return ve(()=>k(nv,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},t)),{}}});function yg(e){const{t:n}=Hp();function t(s){let{name:i}=s;const a={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[i],o=e[`onClick:${i}`],r=o&&a?n(`$vuetify.input.${a}`,e.label??""):void 0;return k(On,{icon:e[`${i}Icon`],"aria-label":r,onClick:o},null)}return{InputIcon:t}}const vg=te({focused:Boolean,"onUpdate:focused":bt()},"focus");function Pg(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:En();const t=xn(e,"focused"),s=v(()=>({[`${n}--focused`]:t.value}));function i(){t.value=!0}function a(){t.value=!1}return{focusClasses:s,isFocused:t,focus:i,blur:a}}const sv=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],jg=te({appendInnerIcon:Ye,bgColor:String,clearable:Boolean,clearIcon:{type:Ye,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Ye,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>sv.includes(e)},"onClick:clear":bt(),"onClick:appendInner":bt(),"onClick:prependInner":bt(),...Oe(),...Do(),...At(),...fn()},"VField"),Ig=ce()({name:"VField",inheritAttrs:!1,props:{id:String,...vg(),...jg()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:t,emit:s,slots:i}=n;const{themeClasses:a}=Pn(e),{loaderClasses:o}=Wo(e),{focusClasses:r,isFocused:h,focus:l,blur:p}=Pg(e),{InputIcon:c}=yg(e),{roundedClasses:g}=Tt(e),{rtlClasses:u}=Kn(),f=v(()=>e.dirty||e.active),d=v(()=>!e.singleLine&&!!(e.label||i.label)),b=Ut(),y=v(()=>e.id||`input-${b}`),P=v(()=>`${y.value}-messages`),S=Y(),O=Y(),E=Y(),j=v(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:I,backgroundColorStyles:B}=vt(Ve(e,"bgColor")),{textColorClasses:_,textColorStyles:V}=Pt(v(()=>e.error||e.disabled?void 0:f.value&&h.value?e.color:e.baseColor));pe(f,F=>{if(d.value){const ne=S.value.$el,J=O.value.$el;requestAnimationFrame(()=>{const K=Po(ne),W=J.getBoundingClientRect(),q=W.x-K.x,N=W.y-K.y-(K.height/2-W.height/2),U=W.width/.75,ie=Math.abs(U-K.width)>1?{maxWidth:ue(U)}:void 0,We=getComputedStyle(ne),$e=getComputedStyle(J),me=parseFloat(We.transitionDuration)*1e3||150,be=parseFloat($e.getPropertyValue("--v-field-label-scale")),C=$e.getPropertyValue("color");ne.style.visibility="visible",J.style.visibility="hidden",dt(ne,{transform:`translate(${q}px, ${N}px) scale(${be})`,color:C,...ie},{duration:me,easing:fs,direction:F?"normal":"reverse"}).finished.then(()=>{ne.style.removeProperty("visibility"),J.style.removeProperty("visibility")})})}},{flush:"post"});const D=v(()=>({isActive:f,isFocused:h,controlRef:E,blur:p,focus:l}));function T(F){F.target!==document.activeElement&&F.preventDefault()}function R(F){var ne;F.key!=="Enter"&&F.key!==" "||(F.preventDefault(),F.stopPropagation(),(ne=e["onClick:clear"])==null||ne.call(e,new MouseEvent("click")))}return ve(()=>{var q,N,U;const F=e.variant==="outlined",ne=!!(i["prepend-inner"]||e.prependInnerIcon),J=!!(e.clearable||i.clear),K=!!(i["append-inner"]||e.appendInnerIcon||J),W=()=>i.label?i.label({...D.value,label:e.label,props:{for:y.value}}):e.label;return k("div",Ce({class:["v-field",{"v-field--active":f.value,"v-field--appended":K,"v-field--center-affix":e.centerAffix??!j.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":ne,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!W(),[`v-field--variant-${e.variant}`]:!0},a.value,I.value,r.value,o.value,g.value,u.value,e.class],style:[B.value,e.style],onClick:T},t),[k("div",{class:"v-field__overlay"},null),k(jc,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:i.loader}),ne&&k("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&k(c,{key:"prepend-icon",name:"prependInner"},null),(q=i["prepend-inner"])==null?void 0:q.call(i,D.value)]),k("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&d.value&&k(zs,{key:"floating-label",ref:O,class:[_.value],floating:!0,for:y.value,style:V.value},{default:()=>[W()]}),k(zs,{ref:S,for:y.value},{default:()=>[W()]}),(N=i.default)==null?void 0:N.call(i,{...D.value,props:{id:y.value,class:"v-field__input","aria-describedby":P.value},focus:l,blur:p})]),J&&k(ub,{key:"clear"},{default:()=>[un(k("div",{class:"v-field__clearable",onMousedown:ie=>{ie.preventDefault(),ie.stopPropagation()}},[k(Ln,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[i.clear?i.clear({...D.value,props:{onKeydown:R,onFocus:l,onBlur:p,onClick:e["onClick:clear"]}}):k(c,{name:"clear",onKeydown:R,onFocus:l,onBlur:p},null)]})]),[[$t,e.dirty]])]}),K&&k("div",{key:"append",class:"v-field__append-inner"},[(U=i["append-inner"])==null?void 0:U.call(i,D.value),e.appendInnerIcon&&k(c,{key:"append-icon",name:"appendInner"},null)]),k("div",{class:["v-field__outline",_.value],style:V.value},[F&&k(Se,null,[k("div",{class:"v-field__outline__start"},null),d.value&&k("div",{class:"v-field__outline__notch"},[k(zs,{ref:O,floating:!0,for:y.value},{default:()=>[W()]})]),k("div",{class:"v-field__outline__end"},null)]),j.value&&d.value&&k(zs,{ref:O,floating:!0,for:y.value},{default:()=>[W()]})])])}),{controlRef:E}}});function iv(e){const n=Object.keys(Ig.props).filter(t=>!yo(t)&&t!=="class"&&t!=="style");return Sp(e,n)}const av=te({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Oe(),...Di({transition:{component:Qc,leaveAbsolute:!0,group:!0}})},"VMessages"),ov=ce()({name:"VMessages",props:av(),setup(e,n){let{slots:t}=n;const s=v(()=>as(e.messages)),{textColorClasses:i,textColorStyles:a}=Pt(v(()=>e.color));return ve(()=>k(Qn,{transition:e.transition,tag:"div",class:["v-messages",i.value,e.class],style:[a.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&s.value.map((o,r)=>k("div",{class:"v-messages__message",key:`${r}-${s.value}`},[t.message?t.message({message:o}):o]))]})),{}}}),rv=Symbol.for("vuetify:form");function hv(){return Be(rv,null)}const lv=te({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...vg()},"validation");function pv(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:En(),t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ut();const s=xn(e,"modelValue"),i=v(()=>e.validationValue===void 0?s.value:e.validationValue),a=hv(),o=Y([]),r=ye(!0),h=v(()=>!!(as(s.value===""?null:s.value).length||as(i.value===""?null:i.value).length)),l=v(()=>!!(e.disabled??(a==null?void 0:a.isDisabled.value))),p=v(()=>!!(e.readonly??(a==null?void 0:a.isReadonly.value))),c=v(()=>{var E;return(E=e.errorMessages)!=null&&E.length?as(e.errorMessages).concat(o.value).slice(0,Math.max(0,+e.maxErrors)):o.value}),g=v(()=>{let E=(e.validateOn??(a==null?void 0:a.validateOn.value))||"input";E==="lazy"&&(E="input lazy");const j=new Set((E==null?void 0:E.split(" "))??[]);return{blur:j.has("blur")||j.has("input"),input:j.has("input"),submit:j.has("submit"),lazy:j.has("lazy")}}),u=v(()=>{var E;return e.error||(E=e.errorMessages)!=null&&E.length?!1:e.rules.length?r.value?o.value.length||g.value.lazy?null:!0:!o.value.length:!0}),f=ye(!1),d=v(()=>({[`${n}--error`]:u.value===!1,[`${n}--dirty`]:h.value,[`${n}--disabled`]:l.value,[`${n}--readonly`]:p.value})),b=qe("validation"),y=v(()=>e.name??Ze(t));io(()=>{a==null||a.register({id:y.value,vm:b,validate:O,reset:P,resetValidation:S})}),vn(()=>{a==null||a.unregister(y.value)}),tn(async()=>{g.value.lazy||await O(!0),a==null||a.update(y.value,u.value,c.value)}),Dt(()=>g.value.input,()=>{pe(i,()=>{if(i.value!=null)O();else if(e.focused){const E=pe(()=>e.focused,j=>{j||O(),E()})}})}),Dt(()=>g.value.blur,()=>{pe(()=>e.focused,E=>{E||O()})}),pe([u,c],()=>{a==null||a.update(y.value,u.value,c.value)});async function P(){s.value=null,await He(),await S()}async function S(){r.value=!0,g.value.lazy?o.value=[]:await O(!0)}async function O(){let E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const j=[];f.value=!0;for(const I of e.rules){if(j.length>=+(e.maxErrors??1))break;const _=await(typeof I=="function"?I:()=>I)(i.value);if(_!==!0){if(_!==!1&&typeof _!="string"){console.warn(`${_} is not a valid value. Rule functions must return boolean true or a string.`);continue}j.push(_||"")}}return o.value=j,f.value=!1,r.value=E,o.value}return{errorMessages:c,isDirty:h,isDisabled:l,isReadonly:p,isPristine:r,isValid:u,isValidating:f,reset:P,resetValidation:S,validate:O,validationClasses:d}}const Ag=te({id:String,appendIcon:Ye,centerAffix:{type:Boolean,default:!0},prependIcon:Ye,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":bt(),"onClick:append":bt(),...Oe(),...It(),...am(Cs(),["maxWidth","minWidth","width"]),...fn(),...lv()},"VInput"),pl=ce()({name:"VInput",props:{...Ag()},emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:t,slots:s,emit:i}=n;const{densityClasses:a}=Gt(e),{dimensionStyles:o}=Es(e),{themeClasses:r}=Pn(e),{rtlClasses:h}=Kn(),{InputIcon:l}=yg(e),p=Ut(),c=v(()=>e.id||`input-${p}`),g=v(()=>`${c.value}-messages`),{errorMessages:u,isDirty:f,isDisabled:d,isReadonly:b,isPristine:y,isValid:P,isValidating:S,reset:O,resetValidation:E,validate:j,validationClasses:I}=pv(e,"v-input",c),B=v(()=>({id:c,messagesId:g,isDirty:f,isDisabled:d,isReadonly:b,isPristine:y,isValid:P,isValidating:S,reset:O,resetValidation:E,validate:j})),_=v(()=>{var V;return(V=e.errorMessages)!=null&&V.length||!y.value&&u.value.length?u.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return ve(()=>{var F,ne,J,K;const V=!!(s.prepend||e.prependIcon),D=!!(s.append||e.appendIcon),T=_.value.length>0,R=!e.hideDetails||e.hideDetails==="auto"&&(T||!!s.details);return k("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},a.value,r.value,h.value,I.value,e.class],style:[o.value,e.style]},[V&&k("div",{key:"prepend",class:"v-input__prepend"},[(F=s.prepend)==null?void 0:F.call(s,B.value),e.prependIcon&&k(l,{key:"prepend-icon",name:"prepend"},null)]),s.default&&k("div",{class:"v-input__control"},[(ne=s.default)==null?void 0:ne.call(s,B.value)]),D&&k("div",{key:"append",class:"v-input__append"},[e.appendIcon&&k(l,{key:"append-icon",name:"append"},null),(J=s.append)==null?void 0:J.call(s,B.value)]),R&&k("div",{class:"v-input__details"},[k(ov,{id:g.value,active:T,messages:_.value},{message:s.message}),(K=s.details)==null?void 0:K.call(s,B.value)])])}),{reset:O,resetValidation:E,validate:j,isValid:P,errorMessages:u}}}),cv=["color","file","time","date","datetime-local","week","month"],gv=te({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Ag(),...jg()},"VTextField"),uv=ce()({name:"VTextField",directives:{Intersect:Wc},inheritAttrs:!1,props:gv(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:t,emit:s,slots:i}=n;const a=xn(e,"modelValue"),{isFocused:o,focus:r,blur:h}=Pg(e),l=v(()=>typeof e.counterValue=="function"?e.counterValue(a.value):typeof e.counterValue=="number"?e.counterValue:(a.value??"").toString().length),p=v(()=>{if(t.maxlength)return t.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),c=v(()=>["plain","underlined"].includes(e.variant));function g(j,I){var B,_;!e.autofocus||!j||(_=(B=I[0].target)==null?void 0:B.focus)==null||_.call(B)}const u=Y(),f=Y(),d=Y(),b=v(()=>cv.includes(e.type)||e.persistentPlaceholder||o.value||e.active);function y(){var j;d.value!==document.activeElement&&((j=d.value)==null||j.focus()),o.value||r()}function P(j){s("mousedown:control",j),j.target!==d.value&&(y(),j.preventDefault())}function S(j){y(),s("click:control",j)}function O(j){j.stopPropagation(),y(),He(()=>{a.value=null,lm(e["onClick:clear"],j)})}function E(j){var B;const I=j.target;if(a.value=I.value,(B=e.modelModifiers)!=null&&B.trim&&["text","search","password","tel","url"].includes(e.type)){const _=[I.selectionStart,I.selectionEnd];He(()=>{I.selectionStart=_[0],I.selectionEnd=_[1]})}}return ve(()=>{const j=!!(i.counter||e.counter!==!1&&e.counter!=null),I=!!(j||i.details),[B,_]=rm(t),{modelValue:V,...D}=pl.filterProps(e),T=iv(e);return k(pl,Ce({ref:u,modelValue:a.value,"onUpdate:modelValue":R=>a.value=R,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":c.value},e.class],style:e.style},B,D,{centerAffix:!c.value,focused:o.value}),{...i,default:R=>{let{id:F,isDisabled:ne,isDirty:J,isReadonly:K,isValid:W}=R;return k(Ig,Ce({ref:f,onMousedown:P,onClick:S,"onClick:clear":O,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},T,{id:F.value,active:b.value||J.value,dirty:J.value||e.dirty,disabled:ne.value,focused:o.value,error:W.value===!1}),{...i,default:q=>{let{props:{class:N,...U}}=q;const ie=un(k("input",Ce({ref:d,value:a.value,onInput:E,autofocus:e.autofocus,readonly:K.value,disabled:ne.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:y,onBlur:h},U,_),null),[[Is("intersect"),{handler:g},null,{once:!0}]]);return k(Se,null,[e.prefix&&k("span",{class:"v-text-field__prefix"},[k("span",{class:"v-text-field__prefix__text"},[e.prefix])]),i.default?k("div",{class:N,"data-no-activator":""},[i.default(),ie]):Fn(ie,{class:N}),e.suffix&&k("span",{class:"v-text-field__suffix"},[k("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:I?R=>{var F;return k(Se,null,[(F=i.details)==null?void 0:F.call(i,R),j&&k(Se,null,[k("span",null,null),k(Qy,{active:e.persistentCounter||o.value,value:l.value,max:p.value,disabled:e.disabled},i.counter)])])}:void 0})}),Ho({},u,f,d)}}),dv=e=>(Qa("data-v-08df1972"),e=e(),eo(),e),mv={class:"sec"},fv=dv(()=>G("h1",null,"포켓몬 이름 퀴즈",-1)),kv={class:"num"},wv={key:1,class:"mb-4"},bv={key:0},yv={key:1},vv={__name:"poke_name_quiz",setup(e){const n=Y([]),t=Y([]),s=Y(0),i=Y(0),a=Y(""),o=Y(""),r=Y([]),h=Y(!1),l=Y(!1),p=Y(!1);tn(async()=>{try{t.value=Fy.sort(()=>.5-Math.random()).slice(0,10),c()}catch(b){console.error("Error fetching data:",b)}});function c(){if(s.value<t.value.length){const b=t.value[s.value];o.value=b.gif,a.value="",r.value=[],l.value=!1}}function g(){if(s.value>=t.value.length)return;const b=a.value.trim();if(b===""){r.value.includes("공백 금지!🚨")||r.value.push("공백 금지!🚨");return}const y=t.value[s.value].name;p.value=b===y,p.value?(i.value+=10,r.value.push("정답! 🎉"),n.value.push({correctAnswer:y,userAnswer:b,isCorrect:p.value}),setTimeout(f,1e3)):(r.value.push("땡!! 🤪"),l.value=!0,n.value.push({correctAnswer:y,userAnswer:b,isCorrect:p.value}))}function u(){a.value="",r.value=[],l.value=!1}function f(){s.value<t.value.length-1?(s.value++,c()):h.value=!0}function d(){s.value=0,i.value=0,a.value="",r.value=[],h.value=!1,n.value=[],c()}return pe(a,b=>{b.trim()!==""&&r.value.includes("공백 금지!🚨")&&(r.value=r.value.filter(y=>y!=="공백 금지!🚨"))}),(b,y)=>(we(),Te("div",mv,[k(Dy,{class:"container"},{default:ke(()=>[k(Zy,null,{default:ke(()=>[k(Hy,null,{default:ke(()=>[fv,G("div",null,[Ne(" 문제: "),G("span",kv,Ae(s.value+1),1),Ne(" / "+Ae(t.value.length),1)]),k(zo,{src:o.value,alt:"포켓몬 GIF",class:"question-box"},null,8,["src"]),k(uv,{modelValue:a.value,"onUpdate:modelValue":y[0]||(y[0]=P=>a.value=P),placeholder:"누구게요?",onKeypress:jp(g,["enter"]),outlined:"",dense:"",disabled:l.value||h.value},null,8,["modelValue","disabled"]),l.value?(we(),Te("div",wv,[k(Nn,{class:"mr-1",onClick:u,color:"primary"},{default:ke(()=>[Ne("다시 도전!")]),_:1}),k(Nn,{class:"ml-1",onClick:f,color:"secondary"},{default:ke(()=>[Ne("다음 문제")]),_:1})])):(we(),go(Nn,{key:0,class:"mb-4",onClick:g,color:"primary"},{default:ke(()=>[Ne("제출")]),_:1})),(we(!0),Te(Se,null,Bt(r.value,(P,S)=>(we(),Te("div",{key:S},Ae(P),1))),128)),G("div",null,"점수: "+Ae(i.value),1)]),_:1})]),_:1}),k(lg,{modelValue:h.value,"onUpdate:modelValue":y[1]||(y[1]=P=>h.value=P),"max-width":"500"},{default:ke(()=>[k(Kc,null,{default:ke(()=>[k(Ko,null,{default:ke(()=>[Ne("퀴즈가 끝났습니다! 🎉")]),_:1}),k(fi,null,{default:ke(()=>[G("div",null,"점수: "+Ae(i.value),1),(we(!0),Te(Se,null,Bt(n.value,(P,S)=>(we(),Te("div",{key:S},[Ne(Ae(S+1)+". 정답: "+Ae(P.correctAnswer)+" / 당신의 답: "+Ae(P.userAnswer)+" ",1),P.isCorrect?(we(),Te("span",bv,"✔️")):(we(),Te("span",yv,"❌"))]))),128))]),_:1}),k(Fc,null,{default:ke(()=>[k(Nn,{color:"primary",onClick:d},{default:ke(()=>[Ne("다시 도전")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]))}},Pv=Os(vv,[["__scopeId","data-v-08df1972"]]),jv=[{path:"/",component:gy},{path:"/minigame",component:Ty},{path:"/minigame/pokecard",component:Ly},{path:"/minigame/namequiz",component:Pv}],Iv=uw({history:Wk("/pokemon/"),routes:jv});function Av(e){e.use(nk).use(Iv).use(pk)}const Tv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALqSURBVHgB7VjhldowDFb6+r9s0HSCoxM0G5QNmg1KJ7h0Aq4TwAaMABtwnSB0AugEqo1lkBXFiZPQP8f3nl8SR/4syYqsGOCBN4SMPyBiTrfnLMvO8J9h5p+Zy+yiWJYdNYEVhjiZtjWtZMpPrpRpS5qnFvPvtAFSSGI9lbKWh/hiqLWBB+bBF2sJ3Us8wwiY8d8VXr9qL+yd6skNGzRj/QURSK/OEnTzS7sWPDvLL2Suc2gkJRMolfcLDENinagkN7TmyvXVwVvR7mq4xtKBEdmPrS3wD3j78FaiP2/h3zE5faXQxYRHEVG0xmGoIwoumFywSlqePIDLVUfTPmv5kgzg3rYyrzTmD41/Mm1O9x6W7xV0Je3XnNPjJzVPMuGKWbTqkNu2eZzJlbSMy4jMM5uzgi6gi82aDfoGdwS6lHQNh5SBNu54LivgDhBxeMLUzQLDdDC5Ry2fcMQChgBdeuFISuAR3pngXcIYsPjsHy/9eL0XTzAG6LbEaaxtcld9Y/5dnOqS5zz2MC02LfM00FfJs0zC6HLboSvg8bbnB9UTJWu/UTzBCCU/eiWVdyU4I75CHNaInK4SnjePEbyH4fgBTsGfHXIVKbOHewDDGnNUsatw850mqeyTRI1iFyYANv+nhvFie0lWwghgcye75EocslFgWOpXGCmI8bbXW8/P0VU9tb1XZH3RXGOYK7eQApoUuVIYFsS5kF+ijkrINf5hMKzG8xQl+aQF9ZURJe3kG6HgDsUSCuNL6itkn0SfFHSk6xfWF+RNqt6tERtzLUzbm769wsXHzZW+/nEprFuhsvxDgbflPWHzkKBI4ZKxMlkBLBzAedOrLGxW5xZpX2A7t8y/NQ49wkE9V+5wwCEWcS0xXCGvYLQKyvqQg9t/td8H/ytr21965kXDB7oWoH8Uvyz3ZMeM5IkNDj8Y8PAHYnnfuTs92aJwAc47Ni1ZD8WW6wjO07+hPTVFMUhJDZpnoqcQDzyg4x/dfSdlHJ9igAAAAABJRU5ErkJggg==",Sv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANnSURBVHgBvVddTttAEF47AVGBVPcAqO4NnLe+1ZEAUV4IJ4CeoOQECSdoOQHmBKRvCBDZ3iB9R6p7groPIMRf+k2YcSfOOk6ktiMtrHdm55uZnZ3ZeGZOarVawe3tbYBpSN9LS0uDXq+XzaHCeLMIbW5uxk9PT9uEORwOQ4dI5nmeBe/L+fl5UqXPqwJ7fHzsYBqb2SnFOJgGXgq6sbHxCZbvl270vLTE6xy8Vqs1T09P00pQOrPr6+s+ppFathjfMD7ydwaFDUThyHAUYEAPhvzCdLcK2C+CFgAzKGsjVE3MX4oM1g5JEf4f5NZ7Xgy5PUwbFAVeDmFYH8cUloJSSAWQNzYvLi4+x3FM2bon6/V6PaE5eJajQBSsra0R8MD3fTJyoIEpghOg6+vrkT5DzHdIAc0XFhZaat3qcBW8paQzxL+/v29qj29ubvZdnp4oRW0B5O9tmcOAQ7VHvJV7GolH1tqMPc5YR0d4o0Tiq9FXFqdasc7SIo/5pCwo2at5B2dnZ906fQBwtwzEAVDKm2EvZf8zqFHXY5ql5rnyZBVgEzJKR7C1tRXVOTMF1ML9pt6AjO7SebBBH8DvuUCRiEMxGjINzUNW72OdboZBgkU+EiNU/NRMIdTf0sIuEWKvxghrqZILfVSMQC38cOgLZbK4uDhXNxGCY2P7fCRRpix6bSatzPl3d3eB+QtEnuZK4emrooBOCty7UlBJJFeiPTw86ETNRvcUSfDTPGcXbSgmCimLWbEtu6dYl6rl0hHxINnmCBTZdaI2/VNCpfN8Rj82/4cS+iMVyeK8KCwBG0FF3IokF/KY5rg2O8Vz4zsYFfkUdug9UnpHzuVNXF9gULq8vNyQB1ehQIzqp+yjXgmjvzNvoAuDfn2A1wNvh+Z5l6G+qbwLqZlLV4C1ichByVid5jeU8A4VYEe1Suo47TwyWgFZjfD0VR3NnxvI8L75k8XU3C17Sesjeci+wZM0Q+/sFHpzm52aBCWiZo5QnBTaGYWXqtWRGEPhRzToOPZ4LcH4itExqopRfgCwqzGcr0GHxy5KFKCLMkShfXl5mRQZNZf01dVVtrq6egwPX2C8NW6KTDlZhPo97qR1MStf+HxuXYC/q/CcMn3A4bTTdM70s0KIzhthD+FF7iW3u8HKysrMv2l+AxgGAY+tot3+AAAAAElFTkSuQmCC",Ov="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANtSURBVHgB7VdLctpAEG1kyvYu5ATREdDG5c8icALjE8Q+QfAJjE/g+AQmJzA5AcrC5rOBnCDyCUJ2fArIa+gRrZEQgqRcWfhVqTQzPZp505/pFtEbosjRjuj1eoXhcFhA0+X+4eFh3/O8Ae2IrYi0Wq3S3t7e+Ww2qxgCFpiIP5/Pv52cnNRpC2QiwgRyudwNmiXKjgCEbrMS2kik2+3eQQPVlCkBJWtHEyqDUEC7EGEfGI/HTSxSVMM+nh94Pkt/ALkHbT3QSlsNjP3G2KdtyDjrBBYJtv318fFxGe93Zg7k97w4m0B9WsLYpeM4Hi21xXBBrAkTu1sRYXNoEtPptAwSX1hL6F/KeICnzg1s7NNSW4wC+9TR0VGftQACfU1G1thM5Onpqah9gkmcnZ0tFkO4VtRUX6taa0UcmwkG+/v7ZVKawRrVTEQQno+qe21ILCY7zrlq3+vvRCvmHimak/PdwpoxMiaZpJWIs0qYNtVQYM13U2SMgjxJ8lAmYV3TwnyEVdTT7Y1pC1mqHPtw1NUohUgRbE03sL7Xpx3QygzrCCTNMWsUEBBFdugYEbbbaDQykeJLqIaA2WrGCeHMV6enpw1KQLvdNicJsIanZc/Pz1X41h23EQS818r/TGMymbjqm4BSAEJpyS2Qd8whEQiB6rpaFhIBw/BDmOeF4nDVgjtlWWhy7XdO0uI48Qd7otaCJv2voDUSbgTm7+2J0NJAtdOIuPIeJKwR5i3bvJF7BI72i5a25UmNhA1K0vZp/T1SUUQia0hUFoVUWS7BOJFOp/OICRV6BSCiInvbV/xXeh3U7YHIhYYE5eMuYZWGVzGtsirpKg3tCzsK+I4wqtdyjBcw/qDWjR04VhjBT6p43Uk3ODg48ExRrC81O19wrQHZT+n29WVmVXkNyC7sfWPZl+sOpQWXCySVLevhCay8ZAgKyTAzw+9uFAnOxNeUgMTCCJOvSKKCVQ1z9fjEUn/4hiRna25I5VVSS/hMXgqsmhq/XVcurq1ZuUCS2sQNJ+dyNZzuRWpUxsJ0IMqmvJSxOjb/Lhpy1eFiqT8TEYbYvUnpKb+uSCRhYY5NvxUbfyckK9doVblvA/7Zutr0K5GJiIH4AUfNR0rXEEdYX0zhU0bs9O/L/pPP5134S5g7OBdxxf63/8Bv+O/wB6OB1SZy42tMAAAAAElFTkSuQmCC",Cv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFDSURBVHgBvZXNbYQwEIWHnwNHl0A62A7iSIC4poJsKkgJYTtICdtByA0B0jqVxOmAExcE5FnrSERZkAnrPAk8wMxna2aMnTiOR7IklyzKn9jCcZx32qhxHG8x8B9wBS7LMqONSpIkwwRc2XbT0nXdjTIYY82SYxRFr67r7rAqUVXVI5nAhRDSxBFpYwCHMEMylG/qCPAbJpDKTtN0r1+LoijkZnhd1y8azPu+P+nXKj3HuRi7BcUOPa0JwKrZ5PEJ8Q9IV4M2vv8FJ93wf9RO3VAPeemjggtaJ/YNVQXWYHkRjp69oxWaFhTgA+KPc77/9uNaFHboM9IQDsPwSecWJM/zxFXgAHMMXG//zCTGRw5DZQRB0OR53izA1YolroYM5aM4H8po2/aAIZtzRB/vaaWsFtSZnKH2TiI6F4vTFWU1LV/Cvn+qkx806QAAAABJRU5ErkJggg==",Ev="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE7SURBVHgBvVXLbYNAEJ1FHDi6BNIBnPhcsikhFcSpICUEd5AS3EGUCrw5AVVk3QFHTpA3ylgicUCL7PWTVvNAM49hZnZXNU0zkicE5BHhhJtxHD/pQiil7mH0L3EWLoqiogtR13WFD2jmfsuCjO+YRFHULTm2bfsO3wTU5Hn+TC7iKIV1cYTwBiaW5YTQ1XEYho8gCCxz1HUrr81Scs7iZVm+ibBGww7M8Tdcnv1cjN+GYoce1gQg6w0yPvEXxD/BdlmWPZ6Jkwy8K07CgkTe2f98WdzQCkjmiTzayToXx8w+0Ar8aegO07Kf873ZwbUI7NBXZBpjHWUEGeYq4hDUMFwS3v6VS0yIGsZM+GxJ07RbED9C2IJ25IgQAV9M+r7fwVRzjmjcllbCa0PV5A71dxPRT7M0XRFey/INzEWCrbdc8iUAAAAASUVORK5CYII=",xv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAYAAADiI6WIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATnSURBVHgB7Z1NiFtVGIbfpLdJZowYYXBEhjYLWwYtdVyoIBS6c+PChWB32p3udOXOnTuh4k5woaCoiCi0ooKCRSjqZor/UmFmtIvGVpupM5iZSe71fMSVzNxzy725OXfe94FvspiPJPc8NyecL+enhuqx6OJthMNbLl5CxYhQPVoulhAOX6CC1CEokXhSJJ4UiSdF4kmReFLKHM7Za7WRk9ujqJ3UEAxxnLRujEYd5GfDxRAlUWYTLrg46yJXI93Tnm29d9+ROxEI7/f+6r/w6+995OdFF6+hJMr+xHeRU3zkbtXDrSZCoVmv2fUU8YnP3RveDPqOJ0XiSZF4UiSeFIknReJJKXI4lzqkmW802ttJjAT5uOXAAYREs15H52D+ZhyM4vYgjn3DwsKKPEUVcGwM+jHGRZpdOTTTjN45fmThtiifuJZr6PnGQYTC+nCE/jC/i1fWrlx79XJvw5P2jItPUABFfeLteUx6d68Eu8Os8JJXfGjY9RRxTVG9Nuce5jxpLRSEvuNJkXhSJJ4UiSdF4kmReFKyDucWPLkdG6enFQXuajbcb+kBTZ0JjI4bEh6e8cwzSGpza4NBNz0JV1wMPDmZCjhWTfoSKcUZe9OfP3Bve74Rpd5InaiKC3fKYStO8E88Ss15+seVjXNXr/uqRSdcfO/JyfyJt8rcnuVEK8O26jWJzUHTtV+z7mm/WqZZOpkk6DueFIknReJJkXhSJJ4UiSdF4kmReFIknhSJJ0XiSZF4UiSeFIknReJJsd9ubW/YPSfq254zh2YaUdrSJ1vWNM3ZNWuDLawPY0wau8ajs82pXastSDl+62xqTm9ruNjb3oaHVbuCZaTsDWurRC48dCyo7Uf+z6nvLuHcH9cxaarQFg9/8wO+/XvTl3ZaXT0pEk+KxJMi8aRIPCkST4rEkxL8CogsxZmdUbLqHorYT3YvrMC1OHRVrJ82B7u+H1tQcnS2sA0rJk7w4p+/9FuW4sxzLj7E5LAC1/LmaITHL/6ya4JV1C48eAxVQV09KRJPisSTIvGkSDwpEk+KxJPiHcdb0eKzP2/gjsZ0hvy9rR1Ugf7OCGevTn4yiI/1m9hX12bgJBWPxzBZlgAk+yieUldPisSTIvGkSDwpEk+KxJMi8aR4V9JgfOrRGxifgBQqmTbuzYFNrQnmBGsPT8D/Xk/bH18Bx8pRXYTNB5hswWMZ1SFLQU4FHFYknhSJJ0XiSZF4UiSeFIknxabVvOvifEqOFUZOIb1AYkWe1zG9Is9HLtYwOS4jDB51cbcn5zzSfRoXkQE7hGgF1S/y7AeyFKqWsjyRunpSJJ4UiSdF4kmReFIknhSJJ0XiSZF4UiSeFIknReJJkXhSJJ4UiSdF4knJcpySLR+yGTgdT17X8/9rLl5G2Euxpolt53LSk9OHf7PmNzFu61LIMktnBf6bh5kz8M+uKWyvH3X1pEg8KRJPisSTIvGkSDwpEk9KUedh21Ksky7aKTk2hn8EKUeWZ8SWSj2LcLCx9ZPIz9cufvbkfIXxfj+VoovxUqv9th+N3YRF7LNT6s2srp4UiSdF4kmReFIknhSJJ0XiSSnzaCnbR+ZEAa/ZRVhj+U9d3I/8VK4wUzahnQh1BhVEXT0pEk+KxJMi8aRIPCkST4rEkzKds8HzsYr/TlEKBN+smSD5F4h4t3Q2YO7QAAAAAElFTkSuQmCC",_v={class:"catMenu"},Mv={class:"userMenu"},Rv={key:0,src:Sv,alt:"",id:"lang"},Nv={key:1,src:Ov,alt:"",id:"lang"},Bv={class:"updateNotice"},Lv={class:"login"},Fv={key:0,src:Cv,alt:"",id:"login"},Vv={key:1,src:Ev,alt:"",id:"login"},Dv=G("div",{id:"lightDarkToggle"},"light, dark mode toggle",-1),Wv=G("div",{class:"nes-btn is-error",id:"scrollUp"},[G("span",null,">")],-1),Kv={__name:"pokeHeader",setup(e){const n=Y(!1),t=Y(!1),s=Y(!1),i=()=>{n.value=!n.value},a=()=>{t.value=!0},o=()=>{t.value=!1},r=()=>{s.value=document.body.classList.contains("darkMode")};pe(s,l=>{});const h=new MutationObserver(l=>{l.forEach(p=>{p.attributeName==="class"&&r()})});return tn(()=>{h.observe(document.body,{attributes:!0}),r()}),vn(()=>{h.disconnect()}),(l,p)=>{const c=to("router-link");return we(),Te("div",null,[G("header",null,[G("img",{id:"menuBt",src:Tv,alt:"",onClick:Hr(i,["stop"])}),G("div",{class:st(["menu",{on:n.value}])},[G("div",_v,[k(c,{to:"/"},{default:ke(()=>[Ne(" 도감")]),_:1}),k(c,{to:"/minigame"},{default:ke(()=>[Ne(" 미니게임")]),_:1})]),G("div",Mv,[G("p",{class:"langText",onMouseover:a,onMouseout:o},[s.value?(we(),Te("img",Nv)):(we(),Te("img",Rv)),Ne(" 한국어 ")],32),un(G("span",Bv,"현재는 한국어만 지원됩니다. 추후 일본어 영어 지원 예정!",512),[[$t,t.value]]),G("p",Lv,[s.value?(we(),Te("img",Vv)):(we(),Te("img",Fv)),Ne("로그인")])]),G("img",{id:"monsterBall",src:xv,alt:"",onClick:Hr(i,["stop"])})],2),Dv]),Wv])}}},cl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABgSURBVHgB7ZRLCkAhCEX1jd962kDrbgOtp3nRwAYSJqEQ1Jn64XBBERglhgoCf8oo1T/woput7DR99oZaM+2cueFbeMPCwbGXgjMDaYC+DfXx7+OX4S48U/8MdyFLc8MGtMcwcgpO6BgAAAAASUVORK5CYII=",zv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABTSURBVHgB7ZRLCgAgCAW1+9/ZXGgLCRFTCGq2fhgeKIKBGHBAxqsP6IKE0756w6hZdK7c8C98YeHi2kvBnYE7IN9G++z36cswi820P8MsalluOAF/IEfinhnUpAAAAABJRU5ErkJggg==";function Hv(e,n){document.querySelectorAll(e).forEach(s=>{s.classList.toggle(n)})}function $v(){document.getElementById("lightDarkToggle").addEventListener("click",function(){document.body.classList.toggle("darkMode");const e=document.getElementById("searchBt");if(e){const n=window.getComputedStyle(e);e.style.backgroundImage=n.backgroundImage.includes(cl)?`url(${zv})`:`url(${cl})`}Hv(".cardOne","is-dark")})}function Uv(){window.scrollTo({top:0,behavior:"smooth"})}function Gv(){const e=document.querySelector("#scrollUp");e&&e.addEventListener("click",Uv)}const Yv={__name:"App",setup(e){return mw(),tn(()=>{$v(),Gv()}),(n,t)=>{const s=to("router-view");return we(),Te("div",null,[k(Kv),G("main",null,[k(s)])])}}},Tg=em(Yv);Av(Tg);Tg.mount("#app");
