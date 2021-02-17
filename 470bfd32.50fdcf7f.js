(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{117:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,m=s["".concat(a,".").concat(b)]||s[b]||d[b]||i;return t?o.a.createElement(m,l(l({ref:n},p),{},{components:t})):o.a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},86:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),i=(t(0),t(117)),a={title:"Updating using NPM"},l={unversionedId:"developing/updating-with-npm",id:"developing/updating-with-npm",isDocsHomePage:!1,title:"Updating using NPM",description:"You can update with Node.js package manager (npm) if you [originally installed",source:"@site/docs/developing/updating-with-npm.md",slug:"/developing/updating-with-npm",permalink:"/LBH-frontend/developing/updating-with-npm",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/master/docs/developing/updating-with-npm.md",version:"current",sidebar:"someSidebar",previous:{title:"Installing with node package manager (NPM)",permalink:"/LBH-frontend/developing/installing-from-npm"},next:{title:"Installing from dist",permalink:"/LBH-frontend/developing/installing-from-dist"}},c=[{value:"Find out which version you&#39;re using",id:"find-out-which-version-youre-using",children:[]},{value:"Update LBH Frontend using npm",id:"update-lbh-frontend-using-npm",children:[]}],p={toc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can update with Node.js package manager (npm) if you ",Object(i.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/lbh-frontend/blob/master/docs/installation/installing-with-npm.md"},"originally installed\nLBH Frontend with npm"),"."),Object(i.b)("h2",{id:"find-out-which-version-youre-using"},"Find out which version you're using"),Object(i.b)("p",null,"To find out which version of LBH Frontend your project is using, you can run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm list lbh-frontend\n")),Object(i.b)("p",null,"If you do not have command line access, you can see the version number in the\n",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file in the root of your project directory. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},"'lbh-frontend': \u20181.9.4\u2019\n")),Object(i.b)("h2",{id:"update-lbh-frontend-using-npm"},"Update LBH Frontend using npm"),Object(i.b)("p",null,"To find out the latest version of LBH Frontend, check the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/lbh-frontend/releases"},"release\nnotes")," in the LBH Frontend GitHub repository."),Object(i.b)("p",null,"You may need to make code changes to keep LBH Frontend working in your project, if the major version number changes when you update. The major version number is the first digit in the version number."),Object(i.b)("p",null,"To update to the most recent version, run:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install lbh-frontend@latest\n")),Object(i.b)("p",null,"If you want to install an earlier version, replace ",Object(i.b)("inlineCode",{parentName:"p"},"latest")," with the version that you want to update to. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npm install lbh-frontend@1.7.0\n")))}u.isMDXComponent=!0}}]);