(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,r,n){"use strict";n.d(r,"a",(function(){return o})),n.d(r,"b",(function(){return v}));var c=n(0),b=n.n(c);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function t(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,c,b=function(e,r){if(null==e)return{};var n,c,b={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],r.indexOf(n)>=0||(b[n]=e[n]);return b}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var u=b.a.createContext({}),i=function(e){var r=b.a.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},o=function(e){var r=i(e.components);return b.a.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return b.a.createElement(b.a.Fragment,{},r)}},d=b.a.forwardRef((function(e,r){var n=e.components,c=e.mdxType,s=e.originalType,t=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),o=i(n),d=c,v=o["".concat(t,".").concat(d)]||o[d]||m[d]||s;return n?b.a.createElement(v,a(a({ref:r},u),{},{components:n})):b.a.createElement(v,a({ref:r},u))}));function v(e,r){var n=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var s=n.length,t=new Array(s);t[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:c,t[1]=a;for(var u=2;u<s;u++)t[u]=n[u];return b.a.createElement.apply(null,t)}return b.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return t})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return i}));var c=n(3),b=n(7),s=(n(0),n(104)),t={title:"Breadcrumbs"},a={unversionedId:"components/breadcrumbs",id:"components/breadcrumbs",isDocsHomePage:!1,title:"Breadcrumbs",description:"Breadcrumbs",source:"@site/docs/components/breadcrumbs.md",slug:"/components/breadcrumbs",permalink:"/components/breadcrumbs",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/components/breadcrumbs.md",version:"current",sidebar:"someSidebar",previous:{title:"Back to top",permalink:"/components/back-to-top"},next:{title:"Button",permalink:"/components/button"}},l=[{value:"Breadcrumbs",id:"breadcrumbs",children:[{value:"HTML",id:"html",children:[]},{value:"Nunjucks",id:"nunjucks",children:[]}]},{value:"Breadcrumbs with one level",id:"breadcrumbs-with-one-level",children:[{value:"HTML",id:"html-1",children:[]},{value:"Nunjucks",id:"nunjucks-1",children:[]}]},{value:"Breadcrumbs with multiple levels",id:"breadcrumbs-with-multiple-levels",children:[{value:"HTML",id:"html-2",children:[]},{value:"Nunjucks",id:"nunjucks-2",children:[]}]},{value:"Breadcrumbs without the home section",id:"breadcrumbs-without-the-home-section",children:[{value:"Nunjucks",id:"nunjucks-3",children:[]}]},{value:"Breadcrumbs with last breadcrumb as current page",id:"breadcrumbs-with-last-breadcrumb-as-current-page",children:[{value:"Nunjucks",id:"nunjucks-4",children:[]}]}],u={toc:l};function i(e){var r=e.components,n=Object(b.a)(e,["components"]);return Object(s.b)("wrapper",Object(c.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"breadcrumbs"},"Breadcrumbs"),Object(s.b)("div",{class:"govuk-breadcrumbs  lbh-breadcrumbs lbh-container"},Object(s.b)("ol",{class:"govuk-breadcrumbs__list"},Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/section"},"Section")),Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/section/sub-section"},"Sub-section")))),Object(s.b)("h3",{id:"html"},"HTML"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-breadcrumbs  lbh-breadcrumbs lbh-container">\n  <ol class="govuk-breadcrumbs__list">\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="/section">Section</a>\n    </li>\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="/section/sub-section"\n        >Sub-section</a\n      >\n    </li>\n  </ol>\n</div>\n')),Object(s.b)("h3",{id:"nunjucks"},"Nunjucks"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'{% from "lbh-breadcrumbs/macro.njk" import lbhBreadcrumbs %}\n\n{{ lbhBreadcrumbs({\n  "items": [\n    {\n      "text": "Section",\n      "href": "/section"\n    },\n    {\n      "text": "Sub-section",\n      "href": "/section/sub-section"\n    }\n  ]\n}) }}\n')),Object(s.b)("h2",{id:"breadcrumbs-with-one-level"},"Breadcrumbs with one level"),Object(s.b)("div",{class:"govuk-breadcrumbs  lbh-breadcrumbs lbh-container"},Object(s.b)("ol",{class:"govuk-breadcrumbs__list"},Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/section"},"Section")))),Object(s.b)("h3",{id:"html-1"},"HTML"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-breadcrumbs  lbh-breadcrumbs lbh-container">\n  <ol class="govuk-breadcrumbs__list">\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="/section">Section</a>\n    </li>\n  </ol>\n</div>\n')),Object(s.b)("h3",{id:"nunjucks-1"},"Nunjucks"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'{% from "lbh-breadcrumbs/macro.njk" import lbhBreadcrumbs %}\n\n{{ lbhBreadcrumbs({\n  "items": [\n    {\n      "text": "Section",\n      "href": "/section"\n    }\n  ]\n}) }}\n')),Object(s.b)("h2",{id:"breadcrumbs-with-multiple-levels"},"Breadcrumbs with multiple levels"),Object(s.b)("div",{class:"govuk-breadcrumbs  lbh-breadcrumbs lbh-container"},Object(s.b)("ol",{class:"govuk-breadcrumbs__list"},Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/"},"Home")),Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/section"},"Section")),Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/section/sub-section"},"Sub-section")),Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/section/sub-section/sub-sub-section"},"Sub Sub-section")))),Object(s.b)("h3",{id:"html-2"},"HTML"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-breadcrumbs  lbh-breadcrumbs lbh-container">\n  <ol class="govuk-breadcrumbs__list">\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="/">Home</a>\n    </li>\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="/section">Section</a>\n    </li>\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="/section/sub-section"\n        >Sub-section</a\n      >\n    </li>\n    <li class="govuk-breadcrumbs__list-item">\n      <a\n        class="govuk-breadcrumbs__link"\n        href="/section/sub-section/sub-sub-section"\n        >Sub Sub-section</a\n      >\n    </li>\n  </ol>\n</div>\n')),Object(s.b)("h3",{id:"nunjucks-2"},"Nunjucks"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'{% from "lbh-breadcrumbs/macro.njk" import lbhBreadcrumbs %}\n\n{{ lbhBreadcrumbs({\n  "items": [\n    {\n      "text": "Home",\n      "href": "/"\n    },\n    {\n      "text": "Section",\n      "href": "/section"\n    },\n    {\n      "text": "Sub-section",\n      "href": "/section/sub-section"\n    },\n    {\n      "text": "Sub Sub-section",\n      "href": "/section/sub-section/sub-sub-section"\n    }\n  ]\n}) }}\n')),Object(s.b)("h2",{id:"breadcrumbs-without-the-home-section"},"Breadcrumbs without the home section"),Object(s.b)("div",{class:"govuk-breadcrumbs  lbh-breadcrumbs lbh-container"},Object(s.b)("ol",{class:"govuk-breadcrumbs__list"},Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/service-manual"},"Service Manual")),Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/service-manual/agile-delivery"},"Agile Delivery")))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-breadcrumbs  lbh-breadcrumbs lbh-container">\n  <ol class="govuk-breadcrumbs__list">\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="/service-manual"\n        >Service Manual</a\n      >\n    </li>\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="/service-manual/agile-delivery"\n        >Agile Delivery</a\n      >\n    </li>\n  </ol>\n</div>\n')),Object(s.b)("h3",{id:"nunjucks-3"},"Nunjucks"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'{% from "lbh-breadcrumbs/macro.njk" import lbhBreadcrumbs %}\n\n{{ lbhBreadcrumbs({\n  "items": [\n    {\n      "text": "Service Manual",\n      "href": "/service-manual"\n    },\n    {\n      "text": "Agile Delivery",\n      "href": "/service-manual/agile-delivery"\n    }\n  ]\n}) }}\n')),Object(s.b)("h2",{id:"breadcrumbs-with-last-breadcrumb-as-current-page"},"Breadcrumbs with last breadcrumb as current page"),Object(s.b)("div",{class:"govuk-breadcrumbs  lbh-breadcrumbs lbh-container"},Object(s.b)("ol",{class:"govuk-breadcrumbs__list"},Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/"},"Home")),Object(s.b)("li",{class:"govuk-breadcrumbs__list-item"},Object(s.b)("a",{class:"govuk-breadcrumbs__link",href:"/browse/abroad"},"Passports, travel and living abroad")),Object(s.b)("li",{class:"govuk-breadcrumbs__list-item","aria-current":"page"},"Travel abroad"))),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-breadcrumbs  lbh-breadcrumbs lbh-container">\n  <ol class="govuk-breadcrumbs__list">\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="/">Home</a>\n    </li>\n    <li class="govuk-breadcrumbs__list-item">\n      <a class="govuk-breadcrumbs__link" href="/browse/abroad"\n        >Passports, travel and living abroad</a\n      >\n    </li>\n    <li class="govuk-breadcrumbs__list-item" aria-current="page">\n      Travel abroad\n    </li>\n  </ol>\n</div>\n')),Object(s.b)("h3",{id:"nunjucks-4"},"Nunjucks"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'{% from "lbh-breadcrumbs/macro.njk" import lbhBreadcrumbs %}\n\n{{ lbhBreadcrumbs({\n  "items": [\n    {\n      "text": "Home",\n      "href": "/"\n    },\n    {\n      "text": "Passports, travel and living abroad",\n      "href": "/browse/abroad"\n    },\n    {\n      "text": "Travel abroad"\n    }\n  ]\n}) }}\n')))}i.isMDXComponent=!0}}]);