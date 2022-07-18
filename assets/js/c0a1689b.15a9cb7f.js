"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5699],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},367:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={custom_edit_url:null},p=void 0,l={unversionedId:"api/CameraResetButtonOptions",id:"api/CameraResetButtonOptions",title:"CameraResetButtonOptions",description:"|PARAMETER|TYPE|OPTIONAL|DEFAULT|DESCRIPTION|",source:"@site/docs/api/CameraResetButtonOptions.mdx",sourceDirName:"api",slug:"/api/CameraResetButtonOptions",permalink:"/egjs-view3d/docs/api/CameraResetButtonOptions",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"AnimationSelectorOptions",permalink:"/egjs-view3d/docs/api/AnimationSelectorOptions"},next:{title:"AutoHideOptions",permalink:"/egjs-view3d/docs/api/AutoHideOptions"}},u={},s=[],m={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"member CameraResetButtonOptions\n")),(0,o.kt)("div",{className:"bulma-tags"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,o.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"position"),(0,o.kt)("td",{parentName:"tr",align:"center"},"string"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"right"'),(0,o.kt)("td",{parentName:"tr",align:"center"},"Position inside the control bar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"order"),(0,o.kt)("td",{parentName:"tr",align:"center"},"number"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"9999"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Order within the current position, items will be sorted in ascending order")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,o.kt)("td",{parentName:"tr",align:"center"},"number"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"500"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Duration of the reset animation")))))}d.isMDXComponent=!0}}]);