(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,b=p["".concat(i,".").concat(g)]||p[g]||d[g]||o;return n?a.a.createElement(b,s(s({ref:t},u),{},{components:n})):a.a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(122)),i={title:"Warning text"},s={unversionedId:"components/warning-text",id:"components/warning-text",isDocsHomePage:!1,title:"Warning text",description:"Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.",source:"@site/docs/components/warning-text.md",slug:"/components/warning-text",permalink:"/components/warning-text",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/main/docs/components/warning-text.md",version:"current",sidebar:"someSidebar",previous:{title:"Textarea",permalink:"/components/textarea"},next:{title:"Coming soon!",permalink:"/patterns/manage-a-caseload"}},c=[{value:"Warning Text",id:"warning-text",children:[{value:"HTML",id:"html",children:[]}]},{value:"With multiple lines",id:"with-multiple-lines",children:[{value:"HTML",id:"html-1",children:[]}]}],u={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take."),Object(o.b)("h2",{id:"warning-text"},"Warning Text"),Object(o.b)("div",{class:"govuk-warning-text  lbh-warning-text"},Object(o.b)("span",{class:"govuk-warning-text__icon","aria-hidden":"true"},"!"),Object(o.b)("strong",{class:"govuk-warning-text__text"},Object(o.b)("span",{class:"govuk-warning-text__assistive"},"Warning"),"You can be fined up to \xa35,000 if you don\u2019t register.")),Object(o.b)("h3",{id:"html"},"HTML"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-warning-text  lbh-warning-text">\n  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>\n  <strong class="govuk-warning-text__text">\n    <span class="govuk-warning-text__assistive">Warning</span>\n    You can be fined up to \xa35,000 if you don\u2019t register.\n  </strong>\n</div>\n')),Object(o.b)("h2",{id:"with-multiple-lines"},"With multiple lines"),Object(o.b)("div",{class:"govuk-warning-text  lbh-warning-text"},Object(o.b)("span",{class:"govuk-warning-text__icon","aria-hidden":"true"},"!"),Object(o.b)("strong",{class:"govuk-warning-text__text"},Object(o.b)("span",{class:"govuk-warning-text__assistive"},"Warning"),"If you are not covered by this License), You must: (a) comply with the terms stated above for the purpose of this license. It explains, for example, the production of a Source form, including but not limited to, the implied warranties or conditions of this License, without any additional file created by such Respondent to you under Sections 2.1 and 2.2 above. Larger Works. You may choose to distribute such a notice and a brief idea of what it does.")),Object(o.b)("h3",{id:"html-1"},"HTML"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-warning-text  lbh-warning-text">\n  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>\n  <strong class="govuk-warning-text__text">\n    <span class="govuk-warning-text__assistive">Warning</span>\n    If you are not covered by this License), You must: (a) comply with the terms\n    stated above for the purpose of this license. It explains, for example, the\n    production of a Source form, including but not limited to, the implied\n    warranties or conditions of this License, without any additional file\n    created by such Respondent to you under Sections 2.1 and 2.2 above. Larger\n    Works. You may choose to distribute such a notice and a brief idea of what\n    it does.\n  </strong>\n</div>\n')))}l.isMDXComponent=!0}}]);