(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{125:function(t,e,a){"use strict";var s=a(0);e.a=function(t){var e=t.children;return Object(s.useEffect)((function(){"undefined"!=typeof window&&a(126).initAll()}),[]),e}},126:function(t,e,a){"use strict";a.r(e),a.d(e,"initAll",(function(){return S})),a.d(e,"Accordion",(function(){return c})),a.d(e,"BackToTop",(function(){return i})),a.d(e,"Button",(function(){return d})),a.d(e,"CharacterCount",(function(){return _})),a.d(e,"Checkboxes",(function(){return g})),a.d(e,"CookieBanner",(function(){return p})),a.d(e,"Details",(function(){return j})),a.d(e,"ErrorSummary",(function(){return w})),a.d(e,"Map",(function(){return $})),a.d(e,"Radios",(function(){return M})),a.d(e,"Tabs",(function(){return B}));var s=a(128),l=a.n(s),o=a(129),c=a.n(o).a,n=a(137);function b(t){this.$module=t}b.prototype.checkScrollPosition=function(t){var e=window.innerHeight,a=e>480?480:e;window.scrollY>a?t.classList.add("lbh-back-to-top--visible"):t.classList.remove("lbh-back-to-top--visible")},b.prototype.init=function(){if(this.$module){var t=Object(n.a)(this.checkScrollPosition,200),e=this.$module;window.addEventListener("scroll",(function(){t(e)}))}};var i=b,r=a(130),d=a.n(r).a,u=a(131),_=a.n(u).a,h=a(132),g=a.n(h).a,k="seen_cookie_message",v=void 0===window.dropCookie||window.dropCookie;function m(t){this.$module=t,this.$button=this.$module.querySelector('[data-behavior="lbh-cookie-close"]')}m.prototype.checkCookies=function(){for(var t=k+"=",e=document.cookie.split(";"),a=0;a<e.length;a++){for(var s=e[a];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return null},m.prototype.showCookieBanner=function(){this.$module.style.display="block",this.bindAcceptButton()},m.prototype.bindAcceptButton=function(){var t=this.$module;this.$button.addEventListener("click",(function(){var e=new Date;e.setTime(e.getTime()+31536e6);var a="; expires="+e.toGMTString();v&&(document.cookie=k+"=true"+a+"; path=/"),t.style.display="none"}))},m.prototype.init=function(){return!!this.$module&&("true"!==this.checkCookies()&&void this.showCookieBanner())};var p=m,O=a(133),j=a.n(O).a,f=a(134),w=a.n(f).a;if(window.L=window.L||{},L!=={})var y=L.map,C=L.control,P=L.tileLayer,x=L.icon,T=L.marker;function A(t){this.$module=t,this.moduleId=this.$module.getAttribute("id"),this.accessToken=this.$module.getAttribute("data-access-token"),this.map=null,this.markerLat=this.$module.getAttribute("data-marker-lat")||null,this.markerLng=this.$module.getAttribute("data-marker-lng")||null,this.centreLat=this.$module.getAttribute("data-centre-lat")||this.markerLat||51.549,this.centreLng=this.$module.getAttribute("data-centre-lng")||this.markerLng||-.077928,this.maxZoom=this.$module.getAttribute("data-max-zoom")||19,this.minZoom=this.$module.getAttribute("data-min-zoom")||12,this.initialZoom=this.$module.getAttribute("data-initial-zoom")||15,this.showZoomControl=this.$module.getAttribute("data-show-zoom-control")||!0,this.minLat=this.$module.getAttribute("data-min-lat")||51.491112,this.minLng=this.$module.getAttribute("data-min-lng")||-.275464,this.maxLat=this.$module.getAttribute("data-max-lat")||51.607351,this.maxLng=this.$module.getAttribute("data-max-lng")||.096129}A.prototype.initLeaflet=function(){this.map=y(this.moduleId,{zoomControl:!1,maxZoom:this.maxZoom,minZoom:this.minZoom,center:[this.centreLat,this.centreLng],zoom:this.initialZoom}),this.showZoomControl&&C.zoom({position:"topright"}).addTo(this.map)},A.prototype.setBounds=function(){this.map.setMaxBounds([[this.minLat,this.minLng],[this.maxLat,this.maxLng]])},A.prototype.initMapboxTiles=function(){var t=P("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{fadeAnimation:!1,opacity:1,attribution:'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://mapbox.com">Mapbox</a>',maxZoom:this.maxZoom,id:"mapbox.streets",accessToken:this.accessToken});this.map.addLayer(t)},A.prototype.addMarker=function(){if(null!==this.markerLat&&null!==this.markerLng){var t=x({iconUrl:"../../../assets/images/contact/map-marker.svg",iconSize:[48,48],iconAnchor:[24,48]});T([this.markerLat,this.markerLng],{icon:t}).addTo(this.map)}},A.prototype.init=function(){this.$module&&L!={}&&(this.initLeaflet(),this.setBounds(),this.initMapboxTiles(),this.addMarker())};var $=A,F=a(135),M=a.n(F).a,D=a(136),B=a.n(D).a;function S(t){t=void 0!==t?t:{},l.a.initAll();var e=void 0!==t.scope?t.scope:document,a=e.querySelector('[data-module="lbh-cookie-banner"]');a&&new p(a).init(),function(t,e){if(window.NodeList.prototype.forEach)return t.forEach(e);for(var a=0;a<t.length;a++)e.call(window,t[a],a,t)}(e.querySelectorAll('[data-module="lbh-map"]'),(function(t){new $(t).init()}));var s=e.querySelector('[data-module="lbh-back-to-top"]');s&&new i(s).init()}},64:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return n})),a.d(e,"metadata",(function(){return b})),a.d(e,"toc",(function(){return i})),a.d(e,"default",(function(){return d}));var s=a(3),l=a(7),o=(a(0),a(122)),c=a(125),n={title:"Tabs"},b={unversionedId:"components/tabs",id:"components/tabs",isDocsHomePage:!1,title:"Tabs",description:"Tabs can be a helpful way of letting users quickly switch between related information if:",source:"@site/docs/components/tabs.md",slug:"/components/tabs",permalink:"/components/tabs",editUrl:"https://github.com/LBHackney-IT/lbh-frontend/edit/main/docs/components/tabs.md",version:"current",sidebar:"someSidebar",previous:{title:"Tag",permalink:"/components/tag"},next:{title:"Textarea",permalink:"/components/textarea"}},i=[{value:"Tabs",id:"tabs",children:[{value:"HTML",id:"html",children:[]}]}],r={toc:i};function d(t){var e=t.components,a=Object(l.a)(t,["components"]);return Object(o.b)("wrapper",Object(s.a)({},r,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)(c.a,{mdxType:"InitAll"},Object(o.b)("p",null,"Tabs can be a helpful way of letting users quickly switch between related information if:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"your content can be usefully separated into clearly labelled sections"),Object(o.b)("li",{parentName:"ul"},"the first section is more relevant than the others for most users"),Object(o.b)("li",{parentName:"ul"},"users will not need to view all the sections at once")),Object(o.b)("p",null,"Tabs can work well for people who use a service regularly, for example, users of a caseworking system. Their need to perform tasks quickly may be greater than their need for simplicity of first-time use."),Object(o.b)("h2",{id:"tabs"},"Tabs"),Object(o.b)("div",{class:"govuk-tabs lbh-tabs","data-module":"govuk-tabs"},Object(o.b)("h2",{class:"govuk-tabs__title"},"Contents"),Object(o.b)("ul",{class:"govuk-tabs__list"},Object(o.b)("li",{class:"govuk-tabs__list-item govuk-tabs__list-item--selected"},Object(o.b)("a",{class:"govuk-tabs__tab",href:"#past-day"},"Past day")),Object(o.b)("li",{class:"govuk-tabs__list-item"},Object(o.b)("a",{class:"govuk-tabs__tab",href:"#past-week"},"Past week")),Object(o.b)("li",{class:"govuk-tabs__list-item"},Object(o.b)("a",{class:"govuk-tabs__tab",href:"#past-month"},"Past month")),Object(o.b)("li",{class:"govuk-tabs__list-item"},Object(o.b)("a",{class:"govuk-tabs__tab",href:"#past-year"},"Past year"))),Object(o.b)("section",{class:"govuk-tabs__panel",id:"past-day"},Object(o.b)("h2",{class:"lbh-heading-h2"},"Past day"),Object(o.b)("table",{class:"govuk-table"},Object(o.b)("thead",{class:"govuk-table__head"},Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Case manager"),Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Cases opened"),Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Cases closed"))),Object(o.b)("tbody",{class:"govuk-table__body"},Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"David Francis"),Object(o.b)("td",{class:"govuk-table__cell"},"3"),Object(o.b)("td",{class:"govuk-table__cell"},"0")),Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"Paul Farmer"),Object(o.b)("td",{class:"govuk-table__cell"},"1"),Object(o.b)("td",{class:"govuk-table__cell"},"0")),Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"Rita Patel"),Object(o.b)("td",{class:"govuk-table__cell"},"2"),Object(o.b)("td",{class:"govuk-table__cell"},"0"))))),Object(o.b)("section",{class:"govuk-tabs__panel govuk-tabs__panel--hidden",id:"past-week"},Object(o.b)("h2",{class:"lbh-heading-h2"},"Past week"),Object(o.b)("table",{class:"govuk-table"},Object(o.b)("thead",{class:"govuk-table__head"},Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Case manager"),Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Cases opened"),Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Cases closed"))),Object(o.b)("tbody",{class:"govuk-table__body"},Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"David Francis"),Object(o.b)("td",{class:"govuk-table__cell"},"24"),Object(o.b)("td",{class:"govuk-table__cell"},"18")),Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"Paul Farmer"),Object(o.b)("td",{class:"govuk-table__cell"},"16"),Object(o.b)("td",{class:"govuk-table__cell"},"20")),Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"Rita Patel"),Object(o.b)("td",{class:"govuk-table__cell"},"24"),Object(o.b)("td",{class:"govuk-table__cell"},"27"))))),Object(o.b)("section",{class:"govuk-tabs__panel govuk-tabs__panel--hidden",id:"past-month"},Object(o.b)("h2",{class:"lbh-heading-h2"},"Past month"),Object(o.b)("table",{class:"govuk-table"},Object(o.b)("thead",{class:"govuk-table__head"},Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Case manager"),Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Cases opened"),Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Cases closed"))),Object(o.b)("tbody",{class:"govuk-table__body"},Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"David Francis"),Object(o.b)("td",{class:"govuk-table__cell"},"98"),Object(o.b)("td",{class:"govuk-table__cell"},"95")),Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"Paul Farmer"),Object(o.b)("td",{class:"govuk-table__cell"},"122"),Object(o.b)("td",{class:"govuk-table__cell"},"131")),Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"Rita Patel"),Object(o.b)("td",{class:"govuk-table__cell"},"126"),Object(o.b)("td",{class:"govuk-table__cell"},"142"))))),Object(o.b)("section",{class:"govuk-tabs__panel govuk-tabs__panel--hidden",id:"past-year"},Object(o.b)("h2",{class:"lbh-heading-h2"},"Past year"),Object(o.b)("table",{class:"govuk-table"},Object(o.b)("thead",{class:"govuk-table__head"},Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Case manager"),Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Cases opened"),Object(o.b)("th",{class:"govuk-table__header",scope:"col"},"Cases closed"))),Object(o.b)("tbody",{class:"govuk-table__body"},Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"David Francis"),Object(o.b)("td",{class:"govuk-table__cell"},"1380"),Object(o.b)("td",{class:"govuk-table__cell"},"1472")),Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"Paul Farmer"),Object(o.b)("td",{class:"govuk-table__cell"},"1129"),Object(o.b)("td",{class:"govuk-table__cell"},"1083")),Object(o.b)("tr",{class:"govuk-table__row"},Object(o.b)("td",{class:"govuk-table__cell"},"Rita Patel"),Object(o.b)("td",{class:"govuk-table__cell"},"1539"),Object(o.b)("td",{class:"govuk-table__cell"},"1265")))))),Object(o.b)("h3",{id:"html"},"HTML"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<div class="govuk-tabs  lbh-tabs" data-module="govuk-tabs">\n  <h2 class="govuk-tabs__title">Contents</h2>\n  <ul class="govuk-tabs__list">\n    <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">\n      <a class="govuk-tabs__tab" href="#past-day"> Past day </a>\n    </li>\n    <li class="govuk-tabs__list-item">\n      <a class="govuk-tabs__tab" href="#past-week"> Past week </a>\n    </li>\n    <li class="govuk-tabs__list-item">\n      <a class="govuk-tabs__tab" href="#past-month"> Past month </a>\n    </li>\n    <li class="govuk-tabs__list-item">\n      <a class="govuk-tabs__tab" href="#past-year"> Past year </a>\n    </li>\n  </ul>\n  <section class="govuk-tabs__panel" id="past-day">\n    <h2 class="lbh-heading-h2">Past day</h2>\n    <table class="govuk-table">\n      <thead class="govuk-table__head">\n        <tr class="govuk-table__row">\n          <th class="govuk-table__header" scope="col">Case manager</th>\n          <th class="govuk-table__header" scope="col">Cases opened</th>\n          <th class="govuk-table__header" scope="col">Cases closed</th>\n        </tr>\n      </thead>\n      <tbody class="govuk-table__body">\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">David Francis</td>\n          <td class="govuk-table__cell">3</td>\n          <td class="govuk-table__cell">0</td>\n        </tr>\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">Paul Farmer</td>\n          <td class="govuk-table__cell">1</td>\n          <td class="govuk-table__cell">0</td>\n        </tr>\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">Rita Patel</td>\n          <td class="govuk-table__cell">2</td>\n          <td class="govuk-table__cell">0</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n  <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">\n    <h2 class="lbh-heading-h2">Past week</h2>\n    <table class="govuk-table">\n      <thead class="govuk-table__head">\n        <tr class="govuk-table__row">\n          <th class="govuk-table__header" scope="col">Case manager</th>\n          <th class="govuk-table__header" scope="col">Cases opened</th>\n          <th class="govuk-table__header" scope="col">Cases closed</th>\n        </tr>\n      </thead>\n      <tbody class="govuk-table__body">\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">David Francis</td>\n          <td class="govuk-table__cell">24</td>\n          <td class="govuk-table__cell">18</td>\n        </tr>\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">Paul Farmer</td>\n          <td class="govuk-table__cell">16</td>\n          <td class="govuk-table__cell">20</td>\n        </tr>\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">Rita Patel</td>\n          <td class="govuk-table__cell">24</td>\n          <td class="govuk-table__cell">27</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n  <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">\n    <h2 class="lbh-heading-h2">Past month</h2>\n    <table class="govuk-table">\n      <thead class="govuk-table__head">\n        <tr class="govuk-table__row">\n          <th class="govuk-table__header" scope="col">Case manager</th>\n          <th class="govuk-table__header" scope="col">Cases opened</th>\n          <th class="govuk-table__header" scope="col">Cases closed</th>\n        </tr>\n      </thead>\n      <tbody class="govuk-table__body">\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">David Francis</td>\n          <td class="govuk-table__cell">98</td>\n          <td class="govuk-table__cell">95</td>\n        </tr>\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">Paul Farmer</td>\n          <td class="govuk-table__cell">122</td>\n          <td class="govuk-table__cell">131</td>\n        </tr>\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">Rita Patel</td>\n          <td class="govuk-table__cell">126</td>\n          <td class="govuk-table__cell">142</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n  <section class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-year">\n    <h2 class="lbh-heading-h2">Past year</h2>\n    <table class="govuk-table">\n      <thead class="govuk-table__head">\n        <tr class="govuk-table__row">\n          <th class="govuk-table__header" scope="col">Case manager</th>\n          <th class="govuk-table__header" scope="col">Cases opened</th>\n          <th class="govuk-table__header" scope="col">Cases closed</th>\n        </tr>\n      </thead>\n      <tbody class="govuk-table__body">\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">David Francis</td>\n          <td class="govuk-table__cell">1380</td>\n          <td class="govuk-table__cell">1472</td>\n        </tr>\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">Paul Farmer</td>\n          <td class="govuk-table__cell">1129</td>\n          <td class="govuk-table__cell">1083</td>\n        </tr>\n        <tr class="govuk-table__row">\n          <td class="govuk-table__cell">Rita Patel</td>\n          <td class="govuk-table__cell">1539</td>\n          <td class="govuk-table__cell">1265</td>\n        </tr>\n      </tbody>\n    </table>\n  </section>\n</div>\n'))))}d.isMDXComponent=!0}}]);