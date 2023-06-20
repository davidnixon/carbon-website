"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[19758],{3624:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(67294),r=a(31304),l=a.n(r),i=a(71082),s=a(67242),o=a(9953),c=a(94184),d=a.n(c);var m=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":r.length,"PageHeader-module--dark-mode--58278":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:s,branch:o}=a||r,c=`${l}/edit/${o}${s}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},p=a(74703),b=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),s=t===r,o=new RegExp(`${r}/?(#.*)?$`),c=a.replace(o,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--68107":s},"PageTabs-module--list-item--d36e2")},n.createElement(i.Link,{className:"PageTabs-module--link--2b3ff",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},s))))))},t}(n.Component);var g=h,k=a(37296),f=a(75387),y=a(3732);var v=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var E=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:d={},relativePagePath:b,titleType:h}=t,{tabs:y,title:E,theme:w,description:N,keywords:C,date:P}=d,{interiorTheme:T}=(0,f.Z)(),{site:{pathPrefix:x}}=(0,i.useStaticQuery)("2456312558"),L=x?r.pathname.replace(x,""):r.pathname,D=y?L.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",Z=w||T;return n.createElement(o.Z,{tabs:y,homepage:!1,theme:Z,pageTitle:E,pageDescription:N,pageKeywords:C,titleType:h},n.createElement(m,{title:c?n.createElement(c,null):E,label:"label",tabs:y,theme:Z}),y&&n.createElement(g,{title:E,slug:L,tabs:y,currentTab:D}),n.createElement(k.Z,{padded:!0},a,n.createElement(u,{relativePagePath:b}),n.createElement(v,{date:P})),n.createElement(p.Z,{pageContext:t,location:r,slug:L,tabs:y,currentTab:D}),n.createElement(s.Z,null))}},30696:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return p}});var n=a(45987),r=(a(67294),a(3905)),l=a(3624);a(39099);const i=["components"],s={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=o("AnchorLinks"),d=o("AnchorLink"),m={_frontmatter:s},u=l.Z;function p(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,r.kt)(u,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"AnchorLinks"},(0,r.kt)(d,{mdxType:"AnchorLink"},"What Carbon provides"),(0,r.kt)(d,{mdxType:"AnchorLink"},"Developer considerations")),(0,r.kt)("h2",null,"What Carbon provides"),(0,r.kt)("p",null,"Carbon incorporates many accessibility considerations, some of which are\ndescribed below."),(0,r.kt)("h3",null,"Keyboard interaction"),(0,r.kt)("p",null,"Lists are not keyboard operable, unless the list items themselves are operable.\nIn such a situation, the list items will retain the component’s default keyboard\ninteraction. For example, in a list of links, each\n",(0,r.kt)("a",{parentName:"p",href:"https://carbondesignsystem.com/components/link/usage"},"link")," will be in the tab\norder and can be activated by ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,r.kt)("h2",null,"Development considerations"),(0,r.kt)("p",null,"Keep this in mind if you’re modifying Carbon or creating a custom component:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Carbon uses native\n",(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/page-structure/content/#lists"},"HTML")," ordered\n(",(0,r.kt)("inlineCode",{parentName:"li"},"ol"),") and unorder (",(0,r.kt)("inlineCode",{parentName:"li"},"ul"),") lists and list items (",(0,r.kt)("inlineCode",{parentName:"li"},"li"),"), then styles them with\nCSS."),(0,r.kt)("li",{parentName:"ul"},"Carbon uses ",(0,r.kt)("inlineCode",{parentName:"li"},"::before")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"::marker")," CSS pseudo-elements for the numbering\nand bulleting of lists, which are properly read by assistive technologies such\nas ",(0,r.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/toolkit/verify/screen-reader/"},"screen readers"),".")))}p.isMDXComponent=!0}}]);