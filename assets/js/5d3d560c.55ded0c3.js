"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9413],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),s=l(n),d=a,g=s["".concat(p,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(g,o(o({ref:e},m),{},{components:n})):r.createElement(g,o({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9545:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={custom_edit_url:null},p=void 0,l={unversionedId:"api/NavigationGizmoOptions",id:"api/NavigationGizmoOptions",title:"NavigationGizmoOptions",description:"|PARAMETER|TYPE|OPTIONAL|DEFAULT|DESCRIPTION|",source:"@site/docs/api/NavigationGizmoOptions.mdx",sourceDirName:"api",slug:"/api/NavigationGizmoOptions",permalink:"/egjs-view3d/docs/api/NavigationGizmoOptions",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"FullscreenButtonOptions",permalink:"/egjs-view3d/docs/api/FullscreenButtonOptions"},next:{title:"PlayButtonOptions",permalink:"/egjs-view3d/docs/api/PlayButtonOptions"}},m={},u=[],s={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"member NavigationGizmoOptions\n")),(0,i.kt)("div",{className:"bulma-tags"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"strokeWidth"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"5"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Width of the axis")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"font"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"14px sans-serif"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"Font of the axis text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"xAxisColor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"ef2746"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"Color of the X-axis")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"yAxisColor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"a7c031"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"Color of the Y-axis")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"zAxisColor"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},'"6571a6"'),(0,i.kt)("td",{parentName:"tr",align:"center"},"Color of the Z-axis")))))}d.isMDXComponent=!0}}]);