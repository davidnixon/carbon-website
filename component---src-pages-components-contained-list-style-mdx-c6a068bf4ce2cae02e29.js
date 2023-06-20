"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[46029],{3624:function(t,e,a){a.d(e,{Z:function(){return h}});var n=a(67294),l=a(31304),i=a.n(l),r=a(71082),s=a(67242),d=a(9953),o=a(94184),c=a.n(o);var p=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:c()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":l.length,"PageHeader-module--dark-mode--58278":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},e)))))};var m=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:s,branch:d}=a||l,o=`${i}/edit/${d}${s}/src/pages${e}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:o},"Edit this page on GitHub"))):null},g=a(74703),b=a(51721);let A=function(t){function e(){return t.apply(this,arguments)||this}return(0,b.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],s=e.map((t=>{const e=i()(t,{lower:!0,strict:!0}),s=e===l,d=new RegExp(`${l}/?(#.*)?$`),o=a.replace(d,e);return n.createElement("li",{key:t,className:c()({"PageTabs-module--selected-item--68107":s},"PageTabs-module--list-item--d36e2")},n.createElement(r.Link,{className:"PageTabs-module--link--2b3ff",to:`${o}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},s))))))},e}(n.Component);var k=A,u=a(37296),N=a(75387),y=a(3732);var f=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var h=t=>{let{pageContext:e,children:a,location:l,Title:o}=t;const{frontmatter:c={},relativePagePath:b,titleType:A}=e,{tabs:y,title:h,theme:w,description:x,keywords:v,date:C}=c,{interiorTheme:S}=(0,N.Z)(),{site:{pathPrefix:E}}=(0,r.useStaticQuery)("2456312558"),M=E?l.pathname.replace(E,""):l.pathname,B=y?M.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",z=w||S;return n.createElement(d.Z,{tabs:y,homepage:!1,theme:z,pageTitle:h,pageDescription:x,pageKeywords:v,titleType:A},n.createElement(p,{title:o?n.createElement(o,null):h,label:"label",tabs:y,theme:z}),y&&n.createElement(k,{title:h,slug:M,tabs:y,currentTab:B}),n.createElement(u.Z,{padded:!0},a,n.createElement(m,{relativePagePath:b}),n.createElement(f,{date:C})),n.createElement(g.Z,{pageContext:e,location:l,slug:M,tabs:y,currentTab:B}),n.createElement(s.Z,null))}},92435:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return s},default:function(){return u}});var n=a(45987),l=(a(67294),a(3905)),i=a(3624);const r=["components"],s={},d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},o=d("PageDescription"),c=d("AnchorLinks"),p=d("AnchorLink"),m=d("Caption"),g=d("Row"),b=d("Column"),A={_frontmatter:s},k=i.Z;function u(t){let{components:e}=t,a=(0,n.Z)(t,r);return(0,l.kt)(k,Object.assign({},A,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(o,{mdxType:"PageDescription"},(0,l.kt)("p",null,"The following page documents visual specifications such as color, typography,\nstructure, and size.")),(0,l.kt)(c,{mdxType:"AnchorLinks"},(0,l.kt)(p,{mdxType:"AnchorLink"},"Color"),(0,l.kt)(p,{mdxType:"AnchorLink"},"Typography"),(0,l.kt)(p,{mdxType:"AnchorLink"},"Structure"),(0,l.kt)(p,{mdxType:"AnchorLink"},"Size"),(0,l.kt)(p,{mdxType:"AnchorLink"},"Feedback")),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List title: on-page"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$background"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List title: disclosed"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer"),"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List item"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Row divider"),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-subtle"),"*")))),(0,l.kt)(m,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)(g,{mdxType:"Row"},(0,l.kt)(b,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACqUlEQVQ4y7WUT0giURzHf+PMZC2RSuCCWYMrQeGhU3uLwEux7KFTt6Quew5BD96lq1KXIAg6Gh0ivHSJoPO6gYT/ZxwtvWSj7+lBlFl+TyesdAt298FnfjM/3vu+3/x+v/fAbrfDe/zVEEWR2ZOTEyCEgKIoIMvyGww/2kFejzEAGAcA4fz8HB4fH98sMECxYrEIrVYLMpkMpFKpnuDGxgZsbm5CMBgUVlZWPi8tLX3xer3Tuq7z6XRakGVZUBTlDehXVVXodDo8it3d3fUEw+Ew7O/vQzwe57e2tqzb29uWvpioKMpQZFkWS6WSmEwmxb29vQld1zld13uCkUgEDg4O4OLiQtjd3bX6/X5LuVweKxQKZlmWGYqivAB9xWLRnMlkzKenpxOtVovrdrs9wYWFBfB4PLC6uspJkmSTJMmCyby6uoJCoTA08ejHiKLRKOd0OkWjAEwQE/r09ASxWAzFucXFRRZ+MpkcKmYUBNfE43FYXl6GdrsN2WyW+Z8X4a43NzcMrN6wVhnWNrjxYAvhy3OiDQa/RxXl9RzDQv9DKJVKYw8PD+MGlUrlw6iqKvbbSwRVVcHn87GcGGiaBo1G48PgmsvLS6aFp4FDgXq97tY07bumaWuNRmOdUrpOCHmPNULIN0LIdLPZZML44PsR/ahWq7lyufyzVqv9opTeEkJu0Y4A5yQIISlK6VdKKVBKTSBJErjdbnC5XDA7O2uZm5ubMvoK22cUh4eHxjTBZrPB5OQk88Px8THrwevrayEYDFpDodDU/f29OZfLmfP5/EjwtKTTafPZ2dmnWq3G4SWRz+eBRTY/P48Nys3MzEw5HA4WIR74P0WIhEIhsFqtwuAfvRgmkwl4noejoyNW6VFXF5JIJJ4FAoEA7Ozs9E7Kf72t/8X4DW5XCRRGYWqWAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Enabled states for contained list variants",title:"Enabled states for contained list variants",src:"/static/990eabdad7dfc05fa95b5c10de90936c/3cbba/contained-list-style-1.png",srcSet:["/static/990eabdad7dfc05fa95b5c10de90936c/7fc1e/contained-list-style-1.png 288w","/static/990eabdad7dfc05fa95b5c10de90936c/a5df1/contained-list-style-1.png 576w","/static/990eabdad7dfc05fa95b5c10de90936c/3cbba/contained-list-style-1.png 1152w","/static/990eabdad7dfc05fa95b5c10de90936c/92c65/contained-list-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(m,{mdxType:"Caption"},"Example of enabled states for contained list variants."),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hover"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer-hover"),"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Active"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$layer-active"),"*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-disabled"))))),(0,l.kt)(m,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)(g,{mdxType:"Row"},(0,l.kt)(b,{colLg:12,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAArklEQVQoz6WRSw6DMAxEuf/V2NCIM3RFKfmR2IntiqCqoiVh0afZxSNnxp00YebGayciiAgAtYl5nqdpeh5ZloWINjMAxghlz0E7xhittf+Bmbt/vw1JMAnmgyAL8eYOITjnzjezyP0BT5tcFBs+0qusJYpSqu97pdTtzTAM4zgiYiksn6sk51ThIjMzxybdPkREX1XvTXnvjTG2wmYmopzz6XLvvbXWVbg4Vdv8AmmigotSitPUAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Interactive states for contained list item rows",title:"Interactive states for contained list item rows",src:"/static/ce204a017c04e01330fc9d8513809619/3cbba/contained-list-style-2.png",srcSet:["/static/ce204a017c04e01330fc9d8513809619/7fc1e/contained-list-style-2.png 288w","/static/ce204a017c04e01330fc9d8513809619/a5df1/contained-list-style-2.png 576w","/static/ce204a017c04e01330fc9d8513809619/3cbba/contained-list-style-2.png 1152w","/static/ce204a017c04e01330fc9d8513809619/0b124/contained-list-style-2.png 1728w","/static/ce204a017c04e01330fc9d8513809619/0c3f5/contained-list-style-2.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(m,{mdxType:"Caption"},"Example of interactive states for contained list item rows."),(0,l.kt)("br",null),(0,l.kt)(g,{mdxType:"Row"},(0,l.kt)(b,{colLg:12,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAq0lEQVQoz6WRQRKDIAxFuf+FPIVLD9GFTkcaSSDJ71gdp61IF33b8Hn8ENDE3RvTAGBZFiLajh6o6pZMKYkIADMD0Pd913XjOKpqODInJ6qjGOM0TSLi7uHfZ9cykAJbg5WwmaWUdjMz55zfO6v67W5JPjofFXLOwzAw84UZyPoy157t7qWUdudVw032bZuZf7NeQETzPMcLwrYAVT173Z2IYoyPC358VTv8BA6LiFMXi/RCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Interactive states for contained list inline actions",title:"Interactive states for contained list inline actions",src:"/static/1d27182df778de169193f1b94699beaa/3cbba/contained-list-style-3.png",srcSet:["/static/1d27182df778de169193f1b94699beaa/7fc1e/contained-list-style-3.png 288w","/static/1d27182df778de169193f1b94699beaa/a5df1/contained-list-style-3.png 576w","/static/1d27182df778de169193f1b94699beaa/3cbba/contained-list-style-3.png 1152w","/static/1d27182df778de169193f1b94699beaa/0b124/contained-list-style-3.png 1728w","/static/1d27182df778de169193f1b94699beaa/0c3f5/contained-list-style-3.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(m,{mdxType:"Caption"},"Example of interactive states for contained list inline actions."),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"All contained list text should be set in sentence case, with only the first word\nin a phrase and any proper nouns capitalized."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List title: on-page"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"SemiBold / 600"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$heading-compact-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List title: disclosed"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List item"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List header area: on-page"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-07"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List header area: disclosed"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-09"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"List item"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Icon (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},"—")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqklEQVQoz72SQQuDMAyF9///5BgbOwwimqZpbJo47GXg1GGFPd4hl4/k9fUyndDlM7p7Lqqacz4M26iGacABAHxD25urRISZG2EiQsQ1bg5lcdyDmZmIVmHTYin/ho+/9qmqqkqZ22qEMQQAaISJiEJoqUrdbzFeiR4iC99FniJdYuAIMUqNttzcIb4Asvu31T2pdsx9SlavWMIBcej7qX6KFe9ntqp/9PwGjm21789hxX4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for the on-page list variant.",title:"Structure and spacing measurements for the on-page list variant.",src:"/static/1221ed7a390332128716e51716510403/3cbba/contained-list-style-4.png",srcSet:["/static/1221ed7a390332128716e51716510403/7fc1e/contained-list-style-4.png 288w","/static/1221ed7a390332128716e51716510403/a5df1/contained-list-style-4.png 576w","/static/1221ed7a390332128716e51716510403/3cbba/contained-list-style-4.png 1152w","/static/1221ed7a390332128716e51716510403/392b1/contained-list-style-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for the on-page list variant. | px / rem"),(0,l.kt)("br",null),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAAAnElEQVQoz72T2xKDMAhE/f9fbTXYQDYoYEdn+lIvndrLDq8LCydppg/UfMcco1kGL6o7ioidyR4xWt/3KSXb0YvYtVYA2ynNY7Ajs4jknGOtaXId7YYjMwAROXntzd1+jGqmFZFzZmZVfRPV42DMfAaVubdEl64TYF0FYNWrSFtEl0bPsRNRIkKt65qfwDB0pRBg7tuoymlU//tVdzSXtPmkWx6LAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for the disclosed list variant.",title:"Structure and spacing measurements for the disclosed list variant.",src:"/static/e478577c831351bf3a32edb567bda2cb/3cbba/contained-list-style-5.png",srcSet:["/static/e478577c831351bf3a32edb567bda2cb/7fc1e/contained-list-style-5.png 288w","/static/e478577c831351bf3a32edb567bda2cb/a5df1/contained-list-style-5.png 576w","/static/e478577c831351bf3a32edb567bda2cb/3cbba/contained-list-style-5.png 1152w","/static/e478577c831351bf3a32edb567bda2cb/392b1/contained-list-style-5.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for the disclosed list variant. | px / rem"),(0,l.kt)("br",null),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAm0lEQVQoz62S0Q6CMAxF+f//3MbE4Bpp161rMWD0gSAmyklfT+5t027+g+5MGRHHcfxdBgD7wBe51srMuzmmZmpHMgB470MI/UqM0a8476YbyAVqBCuylZ+tUkrOucUL/TAMRJRpAQmFWK53RZ5f+dvknDMi7t/HbLaD2mZCXInblFuaWkIBEkDFokW0yKH8pqkVWactG6qe/yQPbCKKdIKMpgoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for height and width of row content.",title:"Structure and spacing measurements for height and width of row content.",src:"/static/ee88e24e3a9ae9f92801ec1d5d6d8d08/3cbba/contained-list-style-6.png",srcSet:["/static/ee88e24e3a9ae9f92801ec1d5d6d8d08/7fc1e/contained-list-style-6.png 288w","/static/ee88e24e3a9ae9f92801ec1d5d6d8d08/a5df1/contained-list-style-6.png 576w","/static/ee88e24e3a9ae9f92801ec1d5d6d8d08/3cbba/contained-list-style-6.png 1152w","/static/ee88e24e3a9ae9f92801ec1d5d6d8d08/392b1/contained-list-style-6.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for height and width of row content. | px / rem"),(0,l.kt)("br",null),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQoz7WS0W6DMAxF+/9/OGkPnSoNGKGEBBLj+DoTRepIle5lnXVfEvnY8rVP+Q9xehksqiElEammroCoVuD9zwPv/Zcdhqx6lN6Ylmi+1dU6LHLuhzg6IcZBQpyJGz/PKW21oDvw2PnjOq5uBoseBJbM0oY4mQmdZePELlm1gBeRi7UUgpbT7s+eaNk6Z4Wq4AfeIwExpWfexsQM/M+qImBCWImqqVNKVO18N+ztsxmarmYYmnnxv64KF2t5CRDoQRBkQRujC5SJEVmT6IPbHjibIYxTdVVdJHf1ajwbLy6AuJxZZAhBy8HuMa5rLC+3gKGaIM+83Y7+hav6BviOs4EstVx4AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for padding and rule alignment.",title:"Structure and spacing measurements for padding and rule alignment.",src:"/static/bb12d9acf818388b4cb1f24b7cb6ccb5/3cbba/contained-list-style-7.png",srcSet:["/static/bb12d9acf818388b4cb1f24b7cb6ccb5/7fc1e/contained-list-style-7.png 288w","/static/bb12d9acf818388b4cb1f24b7cb6ccb5/a5df1/contained-list-style-7.png 576w","/static/bb12d9acf818388b4cb1f24b7cb6ccb5/3cbba/contained-list-style-7.png 1152w","/static/bb12d9acf818388b4cb1f24b7cb6ccb5/392b1/contained-list-style-7.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for padding and rule alignment. | px / rem"),(0,l.kt)("br",null),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAAApElEQVQoz7XTOw7DIAwG4Nz/fF269QBBAsc2GIOpki5V82za/ANi8CewEV37Id0/cSlFVU/iYRiccwuF1prZuG5gZiYi+0hrVVQ8Fk8Fk2VdxjFGZp5hq7lkT5XFUm7FVjERLV3blJOJjt7sgmlvxfYwAPR9f/JkRAwhvA+rTh2C6gNRpr0df6oXdiK3EGKtOxgR5536nO8AO3gtURUkXfkxvsJP1k23u3tD1rQAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for inline actions.",title:"Structure and spacing measurements for inline actions.",src:"/static/ea05245d1ce98c6406825ab78b6ca61d/3cbba/contained-list-style-8.png",srcSet:["/static/ea05245d1ce98c6406825ab78b6ca61d/7fc1e/contained-list-style-8.png 288w","/static/ea05245d1ce98c6406825ab78b6ca61d/a5df1/contained-list-style-8.png 576w","/static/ea05245d1ce98c6406825ab78b6ca61d/3cbba/contained-list-style-8.png 1152w","/static/ea05245d1ce98c6406825ab78b6ca61d/392b1/contained-list-style-8.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for inline actions. | px / rem"),(0,l.kt)("h2",null,"Size"),(0,l.kt)("h3",null,"On-page list"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Height px / rem"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small (sm)"),(0,l.kt)("td",{parentName:"tr",align:null},"Header and row"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium (md)"),(0,l.kt)("td",{parentName:"tr",align:null},"Header and row"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large (lg)"),(0,l.kt)("td",{parentName:"tr",align:null},"Header and row"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extra large (xl)"),(0,l.kt)("td",{parentName:"tr",align:null},"Header"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Row"),(0,l.kt)("td",{parentName:"tr",align:null},"64 / 4")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"95.13888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAAC/UlEQVQ4y4VUW0gUURj+3Z1dXXXNjCJX3XUv58zuapYFUSlBmKSJZVRiPohihem6M+MlpchLGOZD9wvRS4mPPSRB+CIUkS2VNjO7+lRQBL0ZgUQQESfO7Jl1V1cb+PiZOXM+zvd9/38AAICULQI5QoCUTtJXULAIMhKiNSmE5XUkgMpL2rcIkrT9QMqXgNQTILumgRACM6jdoGLRICPBIOPVUNgaq4xQhHkPIxxyVEOPvQLuOY9ba2zbHZ/482YZCakasJgUCq1IoDVb5aV0SqrwYpTwWuFRGCushSeuJmttXqm9315p/eW7bH6LAskJo0R63aTykjWB8I/vCpCiW7DkHUohxXeMb1AHp2KRk5HAyTgZRE5h61R2xNcFC8W9oOqEVx21MOiohkfOBnNT/t7sh876tC98n2kWBU0KFteEjARa01ReMmonxMzDEUcNDDiqYMLVmFVhK3YJBQesxD9qCqEAlWReCRkJ8ZVKzohKZoT3nSdoIPDc3Wqpse3IOVNQbiFF1zXpCpOXDDISjAoWNywTMsmzKAjvUCfMoSBtA24OBeM9Wo9Q85D2I8W8vztK+NrTDi88bRBCHaYpd6s5jCX6s+aRTL1aCaR5qBPGPFR1yTSQXvtBeOA8aS3L9RbQJCNY4j5oG9ZCjDBH5aXMBA+pf3ejHqZX2Uo2N+fvSydFt40zqH1d2WsSTrlPwzN3C7z0tHHjrlOp056zpsiybK3v4hFHqLVPxNcDYSoZs1DCWNKGnM7nZ76P++0bMcaHsqqxUYJkjp4u7O3SgtGeYcdhuGg/BI+dDRn7c322Pbl4ywLu+m/SbC17VR/eLDwGNwrrYNLdnFFp27a1Lm9nFvGPGUMoYJKTBCMnhrJR5aXUhEmZdLfAU3czvPKcs3TbKzInXI3mb/wF7j3qjI1YArCgf9dPaIkSMsl/6eXgH4WvfH8K2S2n/PQNG0IoEHcniglgzRy7E3UPY3246L0E370D8BH3AikZhx/eQW1yVDYBKyHrld3a8YT/AIFQ712VvY79AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for contained list on-page variant.",title:"Sizes for contained list on-page variant.",src:"/static/bcde508c46c5d953083ac4663adce27a/3cbba/contained-list-style-9.png",srcSet:["/static/bcde508c46c5d953083ac4663adce27a/7fc1e/contained-list-style-9.png 288w","/static/bcde508c46c5d953083ac4663adce27a/a5df1/contained-list-style-9.png 576w","/static/bcde508c46c5d953083ac4663adce27a/3cbba/contained-list-style-9.png 1152w","/static/bcde508c46c5d953083ac4663adce27a/392b1/contained-list-style-9.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Sizes for contained list on-page variant | px / rem"),(0,l.kt)("h3",null,"Disclosed list"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Height px / rem"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large (lg)"),(0,l.kt)("td",{parentName:"tr",align:null},"Header"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Row"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABRUlEQVQoz2NgQAMJDKSB3QxKDMcZfBgOM9gxXFQvhAj+//+fbBzLwMCwg0GYYTUDA8LAN3ceM725+4Th7c1HLi8ePN776dXbrZ9evd2OB2/79Prdro9PX624X7NcAWY43MAHF64zPLt2l+H1jQdCpw8ctbl6+rz5lxdv9T88eWXw8SkO/Oy14YeHL3TeHL/O8qh/M8PTBfsQBjoyMDC4MDAw9DIwMDMwMHAxMDCw/iTCuyBwXjqT96p1HdM1l2aEgTtM8xgOmBcznDEt42gyDRPss4rnfRQ8keOqfyfHdf8ubJjzRkgvxxXHRp6LmkV8F5XzGS8q5iIMbJf3YZiuGMKwWyWNQUdCkUFTQp7hv+9/hl0qqQznVfMZLqgVYGCYOMgQZAwGHQq+DDMVQ8EGGkkog/F/0xMMB1QywBrPgwxAwvgMBADDahM+PRtpAAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for contained list disclosed variant.",title:"Sizes for contained list disclosed variant.",src:"/static/b6078f28130da72b887fefd2262190eb/3cbba/contained-list-style-10.png",srcSet:["/static/b6078f28130da72b887fefd2262190eb/7fc1e/contained-list-style-10.png 288w","/static/b6078f28130da72b887fefd2262190eb/a5df1/contained-list-style-10.png 576w","/static/b6078f28130da72b887fefd2262190eb/3cbba/contained-list-style-10.png 1152w","/static/b6078f28130da72b887fefd2262190eb/392b1/contained-list-style-10.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Sizes for contained list disclosed variant | px / rem"),(0,l.kt)("h2",null,"Feedback"),(0,l.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}u.isMDXComponent=!0}}]);