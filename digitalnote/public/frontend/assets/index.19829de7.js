var h=(n,t,o)=>new Promise((r,e)=>{var s=c=>{try{u(o.next(c))}catch(f){e(f)}},i=c=>{try{u(o.throw(c))}catch(f){e(f)}},u=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,i);u((o=o.apply(n,t)).next())});import{c as p,r as y,a as v,b as E,d as P,_ as b,e as I,o as k,f as R,g as O,h as A,s as T,i as j,j as w,C as x,I as C,k as S}from"./vendor.eaeaa53a.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};V();const $="modulepreload",L={},D="/assets/digitalnote/frontend/",m=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${D}${r}`,r in L)return;L[r]=!0;const e=r.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":$,e||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),e)return new Promise((u,c)=>{i.addEventListener("load",u),i.addEventListener("error",c)})})).then(()=>t())},_=p({url:"frappe.auth.get_logged_user",cache:"User",onError(n){n&&n.exc_type==="AuthenticationError"&&d.push({name:"LoginPage"})}});function g(){let t=new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");return t==="Guest"&&(t=null),t}const l=y({login:p({url:"login",makeParams({email:n,password:t}){return{usr:n,pwd:t}},onSuccess(n){_.reload(),l.user=g(),l.login.reset(),d.replace(n.default_route||"/")}}),logout:p({url:"logout",onSuccess(){_.reset(),l.user=g(),d.replace({name:"Login"})}}),user:g(),isLoggedIn:v(()=>!!l.user)}),H=[{path:"/",name:"Home",component:()=>m(()=>import("./Home.0ea17580.js"),["assets/Home.0ea17580.js","assets/Home.8abb9cef.css","assets/vendor.eaeaa53a.js","assets/vendor.1875b906.css"])},{name:"Login",path:"/account/login",component:()=>m(()=>import("./Login.2b81bcbd.js"),["assets/Login.2b81bcbd.js","assets/vendor.eaeaa53a.js","assets/vendor.1875b906.css"])},{path:"/Texteditor",component:()=>m(()=>import("./Texteditor.7136e3fa.js"),["assets/Texteditor.7136e3fa.js","assets/Texteditor.4c9b1e06.css","assets/vendor.eaeaa53a.js","assets/vendor.1875b906.css"])},{path:"/Text",component:()=>m(()=>import("./Text.dcbab0be.js"),["assets/Text.dcbab0be.js","assets/vendor.eaeaa53a.js","assets/vendor.1875b906.css"])}];let d=E({history:P("/frontend"),routes:H});d.beforeEach((n,t,o)=>h(void 0,null,function*(){let r=l.isLoggedIn;try{yield _.promise}catch(e){r=!1}n.name==="Login"&&r?o({name:"Home"}):n.name!=="Login"&&!r?o({name:"Login"}):o()}));const N={};function U(n,t){const o=I("router-view");return k(),R("div",null,[O(o)])}var q=b(N,[["render",U]]);let a=A(q);T("resourceFetcher",S);a.use(d);a.use(j);a.component("Button",w);a.component("Card",x);a.component("Input",C);a.mount("#app");export{l as s};