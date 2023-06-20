"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[31492],{3624:function(e,t,a){a.d(t,{Z:function(){return k}});var l=a(67294),n=a(31304),r=a.n(n),o=a(71082),s=a(67242),i=a(9953),c=a(94184),m=a.n(c);var u=e=>{let{title:t,theme:a,tabs:n=[]}=e;return l.createElement("div",{className:m()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":n.length,"PageHeader-module--dark-mode--58278":"dark"===a})},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:s,branch:i}=a||n,c=`${r}/edit/${i}${s}/src/pages${t}`;return r?l.createElement("div",{className:"cds--row EditLink-module--row--04499"},l.createElement("div",{className:"cds--col"},l.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},p=a(74703),h=a(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),s=t===n,i=new RegExp(`${n}/?(#.*)?$`),c=a.replace(i,t);return l.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--68107":s},"PageTabs-module--list-item--d36e2")},l.createElement(o.Link,{className:"PageTabs-module--link--2b3ff",to:`${c}`},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},l.createElement("div",{className:"cds--grid"},l.createElement("div",{className:"cds--row"},l.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},l.createElement("nav",{"aria-label":e},l.createElement("ul",{className:"PageTabs-module--list--c4bab"},s))))))},t}(l.Component);var b=g,E=a(37296),y=a(75387),f=a(3732);var v=e=>{let{date:t}=e;const a=new Date(t);return t?l.createElement(f.X2,{className:"last-modified-date-module--row--5c9a1"},l.createElement(f.sg,null,l.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:a,location:n,Title:c}=e;const{frontmatter:m={},relativePagePath:h,titleType:g}=t,{tabs:f,title:k,theme:w,description:N,keywords:P,date:T}=m,{interiorTheme:R}=(0,y.Z)(),{site:{pathPrefix:C}}=(0,o.useStaticQuery)("2456312558"),x=C?n.pathname.replace(C,""):n.pathname,D=f?x.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",H=w||R;return l.createElement(i.Z,{tabs:f,homepage:!1,theme:H,pageTitle:k,pageDescription:N,pageKeywords:P,titleType:g},l.createElement(u,{title:c?l.createElement(c,null):k,label:"label",tabs:f,theme:H}),f&&l.createElement(b,{title:k,slug:x,tabs:f,currentTab:D}),l.createElement(E.Z,{padded:!0},a,l.createElement(d,{relativePagePath:h}),l.createElement(v,{date:T})),l.createElement(p.Z,{pageContext:t,location:n,slug:x,tabs:f,currentTab:D}),l.createElement(s.Z,null))}},38042:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return d}});var l=a(45987),n=(a(67294),a(3905)),r=a(3624);const o=["components"],s={},i=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var c;const m={_frontmatter:s},u=r.Z;function d(e){let{components:t}=e,a=(0,l.Z)(e,o);return(0,n.kt)(u,Object.assign({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Thanks for completing our tutorial and helping us improve it along the way. If\nyou want to show the world your new skills, you can share your deployed\napplication and showcase the five pull requests you have completed with the\ngreen ",(0,n.kt)("inlineCode",{parentName:"p"},"status: approved")," label.")),(0,n.kt)("h3",null,"How can I show others my completion status?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Proof of your completion of the tutorial can be seen by filtering the PR list\nto show your five PRs with the ",(0,n.kt)("inlineCode",{parentName:"p"},"status: approved")," label.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can filter the pull request list to show only pull requests authored by\nyour username. Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"YOURUSERNAMEHERE")," with your username in the following\nlink:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/carbon-tutorial-vue/pulls?q=author%3AYOURUSERNAMEHERE"},"https://github.com/carbon-design-system/carbon-tutorial-vue/pulls?q=author%3AYOURUSERNAMEHERE"))))))}d.isMDXComponent=!0}}]);