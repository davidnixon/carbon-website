"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[22510],{3624:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(67294),o=n(31304),l=n.n(o),s=n(71082),r=n(67242),i=n(9953),c=n(94184),m=n.n(c);var d=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:m()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":o.length,"PageHeader-module--dark-mode--58278":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var u=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:r,branch:i}=n||o,c=`${l}/edit/${i}${r}/src/pages${t}`;return l?a.createElement("div",{className:"cds--row EditLink-module--row--04499"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},p=n(74703),g=n(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),r=t===o,i=new RegExp(`${o}/?(#.*)?$`),c=n.replace(i,t);return a.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--68107":r},"PageTabs-module--list-item--d36e2")},a.createElement(s.Link,{className:"PageTabs-module--link--2b3ff",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--c4bab"},r))))))},t}(a.Component);var h=b,y=n(37296),k=n(75387),f=n(3732);var v=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--5c9a1"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var T=e=>{let{pageContext:t,children:n,location:o,Title:c}=e;const{frontmatter:m={},relativePagePath:g,titleType:b}=t,{tabs:f,title:T,theme:E,description:x,keywords:w,date:C}=m,{interiorTheme:P}=(0,k.Z)(),{site:{pathPrefix:N}}=(0,s.useStaticQuery)("2456312558"),L=N?o.pathname.replace(N,""):o.pathname,M=f?L.split("/").filter(Boolean).slice(-1)[0]||l()(f[0],{lower:!0}):"",D=E||P;return a.createElement(i.Z,{tabs:f,homepage:!1,theme:D,pageTitle:T,pageDescription:x,pageKeywords:w,titleType:b},a.createElement(d,{title:c?a.createElement(c,null):T,label:"label",tabs:f,theme:D}),f&&a.createElement(h,{title:T,slug:L,tabs:f,currentTab:M}),a.createElement(y.Z,{padded:!0},n,a.createElement(u,{relativePagePath:g}),a.createElement(v,{date:C})),a.createElement(p.Z,{pageContext:t,location:o,slug:L,tabs:f,currentTab:M}),a.createElement(r.Z,null))}},70509:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return k}});var a=n(45987),o=(n(67294),n(3905)),l=n(3624);const s=["components"],r={},i=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=i("PageDescription"),m=i("Row"),d=i("Column"),u=i("ResourceCard"),p=i("MdxIcon"),g=i("ComponentDemo"),b=i("ComponentVariant"),h={_frontmatter:r},y=l.Z;function k(e){let{components:t}=e,n=(0,a.Z)(e,s);return(0,o.kt)(y,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the inline loading component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-inlineloading--inline-loading",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Web Components",href:"https://web-components.carbondesignsystem.com/?path=/story/components-inline-loading--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"webcomponents",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-inline-loading--basic",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvinlineloading--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"vue",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(g,{components:[{id:"inline-loading",label:"Inline loading"}],mdxType:"ComponentDemo"},(0,o.kt)(b,{id:"inline-loading",knobs:{InlineLoading:["status"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-inlineloading--inline-loading","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-inline-loading--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-inline-loading--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvinlineloading--default"},mdxType:"ComponentVariant"},'\n    <InlineLoading description="Loading..." />\n  ')))}k.isMDXComponent=!0}}]);