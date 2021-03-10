(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=i,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(122)),o={title:"Using it with React"},s={unversionedId:"developing/react",id:"developing/react",isDocsHomePage:!1,title:"Using it with React",description:"While the design system doesn't use React components, it is fully compatible with them. In fact, this documentation website is a React app.",source:"@site/docs/developing/react.md",slug:"/developing/react",permalink:"/developing/react",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/main/docs/developing/react.md",version:"current",sidebar:"someSidebar",previous:{title:"Browser support",permalink:"/developing/browser-support"},next:{title:"Supporting Internet Explorer 8",permalink:"/developing/supporting-ie8"}},c=[{value:"Setting it up",id:"setting-it-up",children:[{value:"Modify your class names",id:"modify-your-class-names",children:[]},{value:"Client-side routing",id:"client-side-routing",children:[]},{value:"Server-side rendering",id:"server-side-rendering",children:[]},{value:"Image assets",id:"image-assets",children:[]}]},{value:"Building components with complex interactions and logic",id:"building-components-with-complex-interactions-and-logic",children:[]},{value:"Why is there no React component library any more?",id:"why-is-there-no-react-component-library-any-more",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"While the design system doesn't use React components, it ",Object(r.b)("em",{parentName:"p"},"is")," fully compatible with them. In fact, ",Object(r.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"this documentation website")," is a React app."))),Object(r.b)("p",null,"If you're reading this, you're probably trying to use the design system with ",Object(r.b)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," or a similar kind of React app."),Object(r.b)("p",null,"The design system can save you a lot of time and effort in making your React components look right. But, if you need complex pre-made components that have lots of stateful client-side functionality, you're better off ",Object(r.b)("a",{parentName:"p",href:"#building-components-with-complex-interactions-and-logic"},"going elsewhere"),"."),Object(r.b)("h2",{id:"setting-it-up"},"Setting it up"),Object(r.b)("h3",{id:"modify-your-class-names"},"Modify your class names"),Object(r.b)("p",null,"React doesn't support the ",Object(r.b)("inlineCode",{parentName:"p"},"class")," attribute, so you'll need to replace all instances with ",Object(r.b)("inlineCode",{parentName:"p"},"className")," instead."),Object(r.b)("h3",{id:"client-side-routing"},"Client-side routing"),Object(r.b)("p",null,"All components need to be initialised before their JavaScript features will work. The init function must be called ",Object(r.b)("em",{parentName:"p"},"after")," the HTML has been rendered to the page."),Object(r.b)("p",null,"On a server-rendered page this is straightforward, but on a client-rendered React app you must remember to re-initialise the JS whenever you render new components."),Object(r.b)("p",null,"One option is to call the component's init function in a ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-effect.html"},Object(r.b)("inlineCode",{parentName:"a"},"useEffect"))," hook after it renders. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'useEffect(() => {\n  if (typeof window !== "undefined") {\n    require("lbh-frontend").initAll()\n  }\n}, [])\n')),Object(r.b)("h3",{id:"server-side-rendering"},"Server-side rendering"),Object(r.b)("p",null,"If you're using a SSR framework like Next.js, you might see errors like ",Object(r.b)("inlineCode",{parentName:"p"},"document is not defined"),"."),Object(r.b)("p",null,"This is because Next will automatically try to compile the JavaScript to run on the server as well as the client."),Object(r.b)("p",null,"You can solve this issue by wrapping your component init calls in an ",Object(r.b)("inlineCode",{parentName:"p"},"if")," statement that checks the global window variable is set:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},'if (typeof window !== "undefined") {\n  require("lbh-frontend").initAll()\n}\n')),Object(r.b)("h3",{id:"image-assets"},"Image assets"),Object(r.b)("p",null,"Depending on your bundler settings, you might have issues with images not appearing in components like the ",Object(r.b)("a",{parentName:"p",href:"/components/contacts-block"},"contact block"),"."),Object(r.b)("p",null,"Fixing this usually involves making a tweak to the ",Object(r.b)("inlineCode",{parentName:"p"},"$lbh-assets-path")," sass variable."),Object(r.b)("p",null,"For example, this documentation website uses:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-scss"},'$lbh-asset-path: "~!file-loader!../lbh/assets";\n')),Object(r.b)("p",null,"That ",Object(r.b)("inlineCode",{parentName:"p"},"~!file-loader!")," prefix ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/3566#issue-718199061"},"forces webpack to interpret SVG files as static images")," rather than JavaScript modules."),Object(r.b)("h2",{id:"building-components-with-complex-interactions-and-logic"},"Building components with complex interactions and logic"),Object(r.b)("p",null,"This design system doesn't include many components that users need to have complex, stateful interactions with (yet)."),Object(r.b)("p",null,"If you need to build something more powerful, you are better off ignoring the JavaScript this library comes with and starting with a React solution first."),Object(r.b)("p",null,"You can then customise the look and feel of your components using code samples from this library."),Object(r.b)("p",null,"There are plenty of well-maintained, accessible-by-default React libraries to choose from:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://reach.tech/"},"Reach UI")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/surevine/govuk-react-jsx"},"GOV.UK React JSX"))),Object(r.b)("p",null,"This advice might change as the design system grows."),Object(r.b)("h2",{id:"why-is-there-no-react-component-library-any-more"},"Why is there no React component library any more?"),Object(r.b)("p",null,"In the past Hackney has tried to make React ports of this design system, but it's always been more trouble than it's worth to maintain them."),Object(r.b)("p",null,"The alternative would be to go all-in with React, but this wouldn't work for the many non-React apps we still need to maintain."))}p.isMDXComponent=!0}}]);