"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[17439],{3624:function(e,t,n){n.d(t,{Z:function(){return T}});var o=n(67294),a=n(31304),s=n.n(a),c=n(71082),r=n(67242),l=n(9953),m=n(94184),d=n.n(m);var i=e=>{let{title:t,theme:n,tabs:a=[]}=e;return o.createElement("div",{className:d()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":a.length,"PageHeader-module--dark-mode--58278":"dark"===n})},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var u=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:a}}}=(0,c.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:l}=n||a,m=`${s}/edit/${l}${r}/src/pages${t}`;return s?o.createElement("div",{className:"cds--row EditLink-module--row--04499"},o.createElement("div",{className:"cds--col"},o.createElement("a",{className:"EditLink-module--link--203ae",href:m},"Edit this page on GitHub"))):null},p=n(74703),b=n(51721);let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,a=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),r=t===a,l=new RegExp(`${a}/?(#.*)?$`),m=n.replace(l,t);return o.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--68107":r},"PageTabs-module--list-item--d36e2")},o.createElement(c.Link,{className:"PageTabs-module--link--2b3ff",to:`${m}`},e))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},o.createElement("nav",{"aria-label":e},o.createElement("ul",{className:"PageTabs-module--list--c4bab"},r))))))},t}(o.Component);var g=y,h=n(37296),k=n(75387),f=n(3732);var v=e=>{let{date:t}=e;const n=new Date(t);return t?o.createElement(f.X2,{className:"last-modified-date-module--row--5c9a1"},o.createElement(f.sg,null,o.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var T=e=>{let{pageContext:t,children:n,location:a,Title:m}=e;const{frontmatter:d={},relativePagePath:b,titleType:y}=t,{tabs:f,title:T,theme:E,description:x,keywords:w,date:C}=d,{interiorTheme:P}=(0,k.Z)(),{site:{pathPrefix:N}}=(0,c.useStaticQuery)("2456312558"),B=N?a.pathname.replace(N,""):a.pathname,M=f?B.split("/").filter(Boolean).slice(-1)[0]||s()(f[0],{lower:!0}):"",R=E||P;return o.createElement(l.Z,{tabs:f,homepage:!1,theme:R,pageTitle:T,pageDescription:x,pageKeywords:w,titleType:y},o.createElement(i,{title:m?o.createElement(m,null):T,label:"label",tabs:f,theme:R}),f&&o.createElement(g,{title:T,slug:B,tabs:f,currentTab:M}),o.createElement(h.Z,{padded:!0},n,o.createElement(u,{relativePagePath:b}),o.createElement(v,{date:C})),o.createElement(p.Z,{pageContext:t,location:a,slug:B,tabs:f,currentTab:M}),o.createElement(r.Z,null))}},32903:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return f}});var o=n(45987),a=(n(67294),n(3905)),s=n(3624),c=n(17141);const r=["components"],l={},m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=m("PageDescription"),i=m("Row"),u=m("Column"),p=m("ResourceCard"),b=m("MdxIcon"),y=m("ComponentDemo"),g=m("ComponentVariant"),h={_frontmatter:l},k=s.Z;function f(e){let{components:t}=e,n=(0,o.Z)(e,r);return(0,a.kt)(k,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{mdxType:"PageDescription"},(0,a.kt)("p",null,"Preview the button component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),(0,a.kt)("h2",null,"Documentation"),(0,a.kt)(i,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-button--default",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"react",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"Web Components",href:"https://web-components.carbondesignsystem.com/?path=/story/components-button--default",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"webcomponents",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-button--basic",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"angular",mdxType:"MdxIcon"}))),(0,a.kt)(u,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(p,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvbutton--default",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"vue",mdxType:"MdxIcon"})))),(0,a.kt)("h2",null,"Live demo"),(0,a.kt)(y,{scope:{Add:c.mm},components:[{id:"button",label:"Button"},{id:"button-with-icon",label:"Button with icon"},{id:"icon-only",label:"Icon only"}],mdxType:"ComponentDemo"},(0,a.kt)(g,{id:"button",knobs:{Button:["kind","disabled","size"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-button--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-button--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-button--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvbutton--default"},mdxType:"ComponentVariant"},"\n      <Button>Button</Button>\n    "),(0,a.kt)(g,{id:"button-with-icon",knobs:{Button:["kind","disabled","size"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-button--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-button--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-button--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvbutton--default"},mdxType:"ComponentVariant"},"\n      <Button renderIcon={Add}>Button</Button>\n    "),(0,a.kt)(g,{id:"icon-only",knobs:{},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-button--icon-button","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-button--icon",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-button--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvbutton--icon-only"},mdxType:"ComponentVariant"},"\n     <IconButton align='top' label='Icon button' className='cds--btn--icon-only'>\n       <Add size={16}/>\n     </IconButton>\n  ")))}f.isMDXComponent=!0}}]);