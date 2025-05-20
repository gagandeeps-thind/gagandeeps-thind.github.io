import{r as x}from"./index.BVOCwoKb.js";var d={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function v(){if(c)return n;c=1;var a=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function e(s,r,t){var i=null;if(t!==void 0&&(i=""+t),r.key!==void 0&&(i=""+r.key),"key"in r){t={};for(var u in r)u!=="key"&&(t[u]=r[u])}else t=r;return r=t.ref,{$$typeof:a,type:s,key:i,ref:r!==void 0?r:null,props:t}}return n.Fragment=l,n.jsx=e,n.jsxs=e,n}var p;function f(){return p||(p=1,d.exports=v()),d.exports}var o=f();function R(){const[a,l]=x.useState(0);x.useEffect(()=>{const s=()=>l(window.scrollY);return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const e=s=>`${a*s}px`;return o.jsxs("div",{className:"fixed inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 transition-transform duration-300",style:{background:`radial-gradient(circle at ${50+a*.05}% ${30+a*.05}%, #1a1a1a, #000000 80%)`,transform:`translateY(${e(.1)})`}}),o.jsx("div",{className:"absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-500 opacity-20 rounded-full blur-3xl",style:{transform:`translateY(${e(.25)})`}}),o.jsx("div",{className:"absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-amber-400 opacity-20 rounded-full blur-3xl",style:{transform:`translateY(${e(.4)})`}}),o.jsx("div",{className:"absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] mix-blend-overlay"})]})}export{R as default};
