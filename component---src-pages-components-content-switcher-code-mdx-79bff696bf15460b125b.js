"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[20825],{3624:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(67294),o=n(31304),s=n.n(o),c=n(71082),r=n(67242),l=n(9953),m=n(94184),i=n.n(m);var d=e=>{let{title:t,theme:n,tabs:o=[]}=e;return a.createElement("div",{className:i()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":o.length,"PageHeader-module--dark-mode--58278":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var u=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,c.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:l}=n||o,m=`${s}/edit/${l}${r}/src/pages${t}`;return s?a.createElement("div",{className:"cds--row EditLink-module--row--04499"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--203ae",href:m},"Edit this page on GitHub"))):null},p=n(74703),h=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),r=t===o,l=new RegExp(`${o}/?(#.*)?$`),m=n.replace(l,t);return a.createElement("li",{key:e,className:i()({"PageTabs-module--selected-item--68107":r},"PageTabs-module--list-item--d36e2")},a.createElement(c.Link,{className:"PageTabs-module--link--2b3ff",to:`${m}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--c4bab"},r))))))},t}(a.Component);var b=g,y=n(37296),w=n(75387),f=n(3732);var k=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--5c9a1"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var T=e=>{let{pageContext:t,children:n,location:o,Title:m}=e;const{frontmatter:i={},relativePagePath:h,titleType:g}=t,{tabs:f,title:T,theme:v,description:x,keywords:E,date:C}=i,{interiorTheme:P}=(0,w.Z)(),{site:{pathPrefix:N}}=(0,c.useStaticQuery)("2456312558"),S=N?o.pathname.replace(N,""):o.pathname,M=f?S.split("/").filter(Boolean).slice(-1)[0]||s()(f[0],{lower:!0}):"",D=v||P;return a.createElement(l.Z,{tabs:f,homepage:!1,theme:D,pageTitle:T,pageDescription:x,pageKeywords:E,titleType:g},a.createElement(d,{title:m?a.createElement(m,null):T,label:"label",tabs:f,theme:D}),f&&a.createElement(b,{title:T,slug:S,tabs:f,currentTab:M}),a.createElement(y.Z,{padded:!0},n,a.createElement(u,{relativePagePath:h}),a.createElement(k,{date:C})),a.createElement(p.Z,{pageContext:t,location:o,slug:S,tabs:f,currentTab:M}),a.createElement(r.Z,null))}},13975:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return w}});var a=n(45987),o=(n(67294),n(3905)),s=n(3624);const c=["components"],r={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=l("PageDescription"),i=l("Row"),d=l("Column"),u=l("ResourceCard"),p=l("MdxIcon"),h=l("ComponentDemo"),g=l("ComponentVariant"),b={_frontmatter:r},y=s.Z;function w(e){let{components:t}=e,n=(0,a.Z)(e,c);return(0,o.kt)(y,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the content switcher component with the React live demo. For detailed\ncode usage documentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(i,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-contentswitcher--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Web Components",href:"https://web-components.carbondesignsystem.com/?path=/story/components-content-switcher--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"webcomponents",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-content-switcher--basic",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(d,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvcontentswitcher--default",mdxType:"ResourceCard"},(0,o.kt)(p,{name:"vue",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(h,{components:[{id:"content-switcher",label:"Content switcher"}],mdxType:"ComponentDemo"},(0,o.kt)(g,{id:"content-switcher",knobs:{Switch:["disabled"],ContentSwitcher:["size"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-contentswitcher--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-content-switcher--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-content-switcher--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcontentswitcher--default"},mdxType:"ComponentVariant"},"\n<ContentSwitcher onChange={console.log}>\n  <Switch name={'first'} text='First section' />\n  <Switch name={'second'} text='Second section' />\n  <Switch name={'third'} text='Third section' />\n</ContentSwitcher>\n")))}w.isMDXComponent=!0}}]);