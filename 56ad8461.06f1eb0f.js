(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=l.a.createContext({}),u=function(e){var n=l.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return l.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},m=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,d=s["".concat(o,".").concat(m)]||s[m]||p[m]||r;return t?l.a.createElement(d,c(c({ref:n},i),{},{components:t})):l.a.createElement(d,c({ref:n},i))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var c={};for(var b in n)hasOwnProperty.call(n,b)&&(c[b]=n[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<r;i++)o[i]=t[i];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var a=t(3),l=t(7),r=(t(0),t(126)),o={title:"Label"},c={unversionedId:"components/label",id:"components/label",isDocsHomePage:!1,title:"Label",description:"National Insurance number",source:"@site/docs/components/label.md",slug:"/components/label",permalink:"/components/label",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/main/docs/components/label.md",version:"current",sidebar:"someSidebar",previous:{title:"Inset Text",permalink:"/components/inset-text"},next:{title:"Page Announcement",permalink:"/components/page-announcement"}},b=[{value:"HTML",id:"html",children:[]},{value:"Label with bold text",id:"label-with-bold-text",children:[{value:"HTML",id:"html-1",children:[]}]},{value:"Label as page heading",id:"label-as-page-heading",children:[{value:"HTML",id:"html-2",children:[]}]}],i={toc:b};function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("label",{class:"govuk-label  lbh-label"},"National Insurance number"),Object(r.b)("h3",{id:"html"},"HTML"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<label class="govuk-label  lbh-label">\n  National Insurance number\n</label>\n')),Object(r.b)("h2",{id:"label-with-bold-text"},"Label with bold text"),Object(r.b)("label",{class:"govuk-label govuk-label--s lbh-label"},"National Insurance number"),Object(r.b)("h3",{id:"html-1"},"HTML"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<label class="govuk-label govuk-label--s lbh-label">\n  National Insurance number\n</label>\n')),Object(r.b)("h2",{id:"label-as-page-heading"},"Label as page heading"),Object(r.b)("label",{class:"govuk-label govuk-label--xl lbh-label"},"National Insurance number"),Object(r.b)("h3",{id:"html-2"},"HTML"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<label class="govuk-label govuk-label--xl lbh-label">\n  National Insurance number\n</label>\n')))}u.isMDXComponent=!0}}]);