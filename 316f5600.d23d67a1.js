(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(104)),o={title:"Installing from dist"},l={unversionedId:"developing/installing-from-dist",id:"developing/installing-from-dist",isDocsHomePage:!1,title:"Installing from dist",description:"You should only use the code from dist if you're adapting a legacy app. If you're starting something new, use NPM instead.",source:"@site/docs/developing/installing-from-dist.md",slug:"/developing/installing-from-dist",permalink:"/developing/installing-from-dist",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/developing/installing-from-dist.md",version:"current",sidebar:"someSidebar",previous:{title:"Updating",permalink:"/developing/updating"},next:{title:"Browser support",permalink:"/developing/browser-support"}},s=[{value:"Installation",id:"installation",children:[{value:"1. Download resources",id:"1-download-resources",children:[]},{value:"2. Include resources",id:"2-include-resources",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"You should only use the code from dist if you're adapting a legacy app. If you're starting something new, ",Object(i.b)("a",{parentName:"p",href:"/developing/installing-from-npm"},"use NPM instead"),"."))),Object(i.b)("p",null,"When installing from ",Object(i.b)("inlineCode",{parentName:"p"},"dist"),", you are using compiled and minified versions of the\nstylesheet. This means that you will not be able to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"selectively include the CSS or JavaScript for individual components."),Object(i.b)("li",{parentName:"ul"},"build your own styles or components based on the palette or typography and\nspacing mixins."),Object(i.b)("li",{parentName:"ul"},"customise the build (for example, overriding colours or enabling global\nstyles).")),Object(i.b)("p",null,"If you need any of this functionality, you must ",Object(i.b)("a",{parentName:"p",href:"installing-with-npm.md"},"install using node package manager")," instead."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"1-download-resources"},"1. Download resources"),Object(i.b)("p",null,"Download the latest compiled and minified versions of the stylesheets,\nJavaScript and the assets:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/lbh-frontend/tree/master/dist"},"CSS and JavaScript")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/lbh-frontend/tree/master/dist/assets"},"Assets"))),Object(i.b)("h3",{id:"2-include-resources"},"2. Include resources"),Object(i.b)("p",null,"You must copy the entire ",Object(i.b)("inlineCode",{parentName:"p"},"assets")," folder to the root of your service."),Object(i.b)("p",null,"Follow the below example to add the CSS and JavaScript files to your HTML template. This example assumes you have copied the stylesheets and JavaScript files to ",Object(i.b)("inlineCode",{parentName:"p"},"/stylesheets")," and ",Object(i.b)("inlineCode",{parentName:"p"},"/javascript")," respectively."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Example</title>\n    \x3c!--[if !IE 8]>\x3c!--\x3e\n    <link\n      rel="stylesheet"\n      href="stylesheets/lbh-frontend-[latest version].min.css"\n    />\n    \x3c!--<![endif]--\x3e\n    \x3c!--[if IE 8]>\n      <link\n        rel="stylesheet"\n        href="stylesheets/lbh-frontend-ie8-[latest-version].min.css"\n      />\n    <![endif]--\x3e\n  </head>\n  <body>\n    \x3c!-- Copy and paste component HTML--\x3e\n    <button class="lbh-button">This is a button component</button>\n    <script src="javascript/lbh-frontend-[latest version].min.js"><\/script>\n    <script>\n      window.LBHFrontend.initAll()\n    <\/script>\n  </body>\n</html>\n')))}p.isMDXComponent=!0}}]);