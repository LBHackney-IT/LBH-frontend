(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(4),a=t(9),i=(t(0),t(116)),o={title:"Text input"},u={unversionedId:"components/input",id:"components/input",isDocsHomePage:!1,title:"Text input",description:"Use the text input component when you need to let users enter text that\u2019s no longer than a single line, such as their name or phone number.",source:"@site/docs/components/input.md",slug:"/components/input",permalink:"/LBH-frontend/components/input",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/components/input.md",version:"current",sidebar:"someSidebar",previous:{title:"Accordion",permalink:"/LBH-frontend/components/accordion"},next:{title:"Announcement",permalink:"/LBH-frontend/components/announcement"}},l=[{value:"Input",id:"input",children:[{value:"HTML",id:"html",children:[]},{value:"Nunjucks",id:"nunjucks",children:[]}]},{value:"With hint text",id:"with-hint-text",children:[{value:"HTML",id:"html-1",children:[]},{value:"Nunjucks",id:"nunjucks-1",children:[]}]},{value:"With error message",id:"with-error-message",children:[{value:"HTML",id:"html-2",children:[]},{value:"Nunjucks",id:"nunjucks-2",children:[]}]}],s={toc:l};function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use the text input component when you need to let users enter text that\u2019s no longer than a single line, such as their name or phone number."),Object(i.b)("h2",{id:"input"},"Input"),Object(i.b)("div",{class:"govuk-form-group lbh-form-group"},Object(i.b)("label",{class:"govuk-label  lbh-label",for:"input-example"},"National Insurance number"),Object(i.b)("input",{class:"govuk-input  lbh-input",id:"input-example",name:"test-name",type:"text"})),Object(i.b)("h3",{id:"html"},"HTML"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-form-group lbh-form-group">\n  <label class="govuk-label  lbh-label" for="input-example">\n    National Insurance number\n  </label>\n  <input\n    class="govuk-input  lbh-input"\n    id="input-example"\n    name="test-name"\n    type="text"\n  />\n</div>\n')),Object(i.b)("h3",{id:"nunjucks"},"Nunjucks"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{% from "lbh-input/macro.njk" import lbhInput %}\n\n{{ lbhInput({\n  "label": { "text": "National Insurance number" },\n  "id": "input-example",\n  "name": "test-name"\n}) }}\n')),Object(i.b)("h2",{id:"with-hint-text"},"With hint text"),Object(i.b)("div",{class:"govuk-form-group lbh-form-group"},Object(i.b)("label",{class:"govuk-label  lbh-label",for:"input-with-hint-text"},"National insurance number"),Object(i.b)("span",{id:"input-with-hint-text-hint",class:"govuk-hint  lbh-hint"},"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."),Object(i.b)("input",{class:"govuk-input  lbh-input",id:"input-with-hint-text",name:"test-name-2",type:"text","aria-describedby":"input-with-hint-text-hint"})),Object(i.b)("h3",{id:"html-1"},"HTML"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-form-group lbh-form-group">\n  <label class="govuk-label  lbh-label" for="input-with-hint-text">\n    National insurance number\n  </label>\n  <span id="input-with-hint-text-hint" class="govuk-hint  lbh-hint">\n    It\u2019s on your National Insurance card, benefit letter, payslip or P60. For\n    example, \u2018QQ 12 34 56 C\u2019.\n  </span>\n  <input\n    class="govuk-input  lbh-input"\n    id="input-with-hint-text"\n    name="test-name-2"\n    type="text"\n    aria-describedby="input-with-hint-text-hint"\n  />\n</div>\n')),Object(i.b)("h3",{id:"nunjucks-1"},"Nunjucks"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{% from "lbh-input/macro.njk" import lbhInput %}\n\n{{ lbhInput({\n  "label": {\n    "text": "National insurance number"\n  },\n  "hint": {\n    "text": "It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."\n  },\n  "id": "input-with-hint-text",\n  "name": "test-name-2"\n}) }}\n')),Object(i.b)("h2",{id:"with-error-message"},"With error message"),Object(i.b)("div",{class:"govuk-form-group govuk-form-group--error lbh-form-group"},Object(i.b)("label",{class:"govuk-label  lbh-label",for:"input-with-error-message"},"National Insurance number"),Object(i.b)("span",{id:"input-with-error-message-hint",class:"govuk-hint  lbh-hint"},"It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."),Object(i.b)("span",{id:"input-with-error-message-error",class:"govuk-error-message"},Object(i.b)("span",{class:"govuk-visually-hidden"},"Error:")," Error message goes here"),Object(i.b)("input",{class:"govuk-input  lbh-input govuk-input--error",id:"input-with-error-message",name:"test-name-3",type:"text","aria-describedby":"input-with-error-message-hint input-with-error-message-error"})),Object(i.b)("h3",{id:"html-2"},"HTML"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-form-group govuk-form-group--error lbh-form-group">\n  <label class="govuk-label  lbh-label" for="input-with-error-message">\n    National Insurance number\n  </label>\n  <span id="input-with-error-message-hint" class="govuk-hint  lbh-hint">\n    It\u2019s on your National Insurance card, benefit letter, payslip or P60. For\n    example, \u2018QQ 12 34 56 C\u2019.\n  </span>\n  <span id="input-with-error-message-error" class="govuk-error-message">\n    <span class="govuk-visually-hidden">Error:</span> Error message goes here\n  </span>\n  <input\n    class="govuk-input  lbh-input govuk-input--error"\n    id="input-with-error-message"\n    name="test-name-3"\n    type="text"\n    aria-describedby="input-with-error-message-hint input-with-error-message-error"\n  />\n</div>\n')),Object(i.b)("h3",{id:"nunjucks-2"},"Nunjucks"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{% from "lbh-input/macro.njk" import lbhInput %}\n\n{{ lbhInput({\n  "label": {\n    "text": "National Insurance number"\n  },\n  "hint": {\n    "text": "It\u2019s on your National Insurance card, benefit letter, payslip or P60. For example, \u2018QQ 12 34 56 C\u2019."\n  },\n  "id": "input-with-error-message",\n  "name": "test-name-3",\n  "errorMessage": {\n    "text": "Error message goes here"\n  }\n}) }}\n')))}c.isMDXComponent=!0},116:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),c=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=c(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return t?a.a.createElement(h,u(u({ref:n},s),{},{components:t})):a.a.createElement(h,u({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<i;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);