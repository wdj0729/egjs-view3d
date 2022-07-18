"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7561],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),c=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(d.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),N=c(n),s=a,k=N["".concat(d,".").concat(s)]||N[s]||l[s]||o;return n?r.createElement(k,i(i({ref:e},m),{},{components:n})):r.createElement(k,i({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},746:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return s},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={custom_edit_url:null},d=void 0,c={unversionedId:"api/EVENTS",id:"api/EVENTS",title:"EVENTS",description:"Event type object with event name strings of View3D",source:"@site/docs/api/EVENTS.mdx",sourceDirName:"api",slug:"/api/EVENTS",permalink:"/egjs-view3d/docs/api/EVENTS",editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"AUTO",permalink:"/egjs-view3d/docs/api/AUTO"},next:{title:"EASING",permalink:"/egjs-view3d/docs/api/EASING"}},m={},l=[],N={toc:l};function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const EVENTS\n")),(0,o.kt)("div",{className:"bulma-tags"}),(0,o.kt)("p",null,"Event type object with event name strings of ",(0,o.kt)("a",{parentName:"p",href:"View3D"},"View3D")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": object"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,o.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"READY"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"ready"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/ready"},"Ready event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"LOAD_START"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"loadStart"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/loadStart"},"Load start event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"LOAD"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"load"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/load"},"Load event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"LOAD_ERROR"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"loadError"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/loadError"},"Load error event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"RESIZE"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"resize"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/resize"},"Resize event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"BEFORE_RENDER"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"beforeRender"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/beforeRender"},"Before render event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"RENDER"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"render"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/render"},"Render event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"PROGRESS"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"progress"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/progress"},"Progress event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"INPUT_START"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"inputStart"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/inputStart"},"Input start event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"INPUT_END"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"inputEnd"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/inputEnd"},"Input end event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"CAMERA_CHANGE"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"cameraChange"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/cameraChange"},"Camera change event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ANIMATION_START"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"animationStart"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/animationStart"},"Animation start event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ANIMATION_LOOP"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"animationLoop"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/animationLoop"},"Animation loop event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ANIMATION_FINISHED"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"animationFinished"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/animationFinished"},"Animation finished event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ANNOTATION_FOCUS"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"annotationFocus"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/annotationFocus"},"Annotation focus event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ANNOTATION_UNFOCUS"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"annotationUnfocus"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/annotationUnfocus"},"Annotation unfocus event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"QUICK_LOOK_TAP"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"quickLookTap"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/quickLookTap"},"Quick Look Tap event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"AR_START"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"arStart"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/arStart"},"AR start evemt"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"AR_END"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"arEnd"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/arEnd"},"AR end event"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"AR_MODEL_PLACED"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"arModelPlaced"'),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("a",{parentName:"td",href:"/docs/events/arModelPlaced"},"AR model placed event"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { EVENTS } from "@egjs/view3d";\nEVENTS.RESIZE; // "resize"\n')))}s.isMDXComponent=!0}}]);