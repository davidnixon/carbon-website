"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[81282],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(67294),r=a(31304),l=a.n(r),s=a(71082),o=a(67242),i=a(9953),c=a(94184),d=a.n(c);var m=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":r.length,"PageHeader-module--dark-mode--58278":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var u=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:i}=a||r,c=`${l}/edit/${i}${o}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},p=a(74703),g=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),o=t===r,i=new RegExp(`${r}/?(#.*)?$`),c=a.replace(i,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--68107":o},"PageTabs-module--list-item--d36e2")},n.createElement(s.Link,{className:"PageTabs-module--link--2b3ff",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},o))))))},t}(n.Component);var h=b,E=a(37296),f=a(75387),k=a(3732);var v=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:t,children:a,location:r,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:b}=t,{tabs:k,title:y,theme:P,description:T,keywords:N,date:w}=d,{interiorTheme:x}=(0,f.Z)(),{site:{pathPrefix:D}}=(0,s.useStaticQuery)("2456312558"),L=D?r.pathname.replace(D,""):r.pathname,C=k?L.split("/").filter(Boolean).slice(-1)[0]||l()(k[0],{lower:!0}):"",Z=P||x;return n.createElement(i.Z,{tabs:k,homepage:!1,theme:Z,pageTitle:y,pageDescription:T,pageKeywords:N,titleType:b},n.createElement(m,{title:c?n.createElement(c,null):y,label:"label",tabs:k,theme:Z}),k&&n.createElement(h,{title:y,slug:L,tabs:k,currentTab:C}),n.createElement(E.Z,{padded:!0},a,n.createElement(u,{relativePagePath:g}),n.createElement(v,{date:w})),n.createElement(p.Z,{pageContext:t,location:r,slug:L,tabs:k,currentTab:C}),n.createElement(o.Z,null))}},83153:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return b}});var n=a(45987),r=(a(67294),a(3905)),l=a(3624);const s=["components"],o={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=i("PageDescription"),d=i("InlineNotification"),m=i("AnchorLinks"),u=i("AnchorLink"),p={_frontmatter:o},g=l.Z;function b(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,r.kt)(g,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(c,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Design annotations are needed for specific instances shown below, but for the\nstandard accordion component, Carbon already incorporates accessibility.")),(0,r.kt)(d,{mdxType:"InlineNotification"},(0,r.kt)("p",null,"This page is underdevelopment. Please check back later for updates.")),(0,r.kt)(m,{mdxType:"AnchorLinks"},(0,r.kt)(u,{mdxType:"AnchorLink"},"What Carbon provides"),(0,r.kt)(u,{mdxType:"AnchorLink"},"Design recommendations"),(0,r.kt)(u,{mdxType:"AnchorLink"},"Development considerations")))}b.isMDXComponent=!0}}]);