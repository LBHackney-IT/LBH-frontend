(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||c;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(4),r=n(9),c=(n(0),n(116)),a={title:"Accordion"},i={unversionedId:"components/accordion",id:"components/accordion",isDocsHomePage:!1,title:"Accordion",description:"Test",source:"@site/docs/components/accordion.md",slug:"/components/accordion",permalink:"/LBH-frontend/components/accordion",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/components/accordion.md",version:"current",sidebar:"someSidebar",previous:{title:"Generating components",permalink:"/LBH-frontend/developing/generating-components"},next:{title:"Text input",permalink:"/LBH-frontend/components/input"}},l=[{value:"Test",id:"test",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"test"},"Test"),Object(c.b)("div",{class:"govuk-accordion myClass lbh-accordion","data-module":"govuk-accordion",id:"default-example","data-attribute":"value"},Object(c.b)("div",{class:"govuk-accordion__section "},Object(c.b)("div",{class:"govuk-accordion__section-header"},Object(c.b)("h5",{class:"govuk-accordion__section-heading"},Object(c.b)("span",{class:"govuk-accordion__section-button",id:"default-example-heading-1"},"Section A"))),Object(c.b)("div",{id:"default-example-content-1",class:"govuk-accordion__section-content","aria-labelledby":"default-example-heading-1"},Object(c.b)("ul",{class:"lbh-list lbh-list--bullet"},Object(c.b)("li",null,"Example item 1")))),Object(c.b)("div",{class:"govuk-accordion__section "},Object(c.b)("div",{class:"govuk-accordion__section-header"},Object(c.b)("h5",{class:"govuk-accordion__section-heading"},Object(c.b)("span",{class:"govuk-accordion__section-button",id:"default-example-heading-2"},"Section B"))),Object(c.b)("div",{id:"default-example-content-2",class:"govuk-accordion__section-content","aria-labelledby":"default-example-heading-2"},Object(c.b)("ul",{class:"lbh-list lbh-list--bullet"},Object(c.b)("li",null,"Example item 2"))))))}u.isMDXComponent=!0}}]);