"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[99],{3624:function(e,t,a){a.d(t,{Z:function(){return A}});var n=a(67294),l=a(31304),r=a.n(l),i=a(71082),d=a(67242),s=a(9953),o=a(94184),m=a.n(o);var p=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":l.length,"PageHeader-module--dark-mode--58278":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var c=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:d,branch:s}=a||l,o=`${r}/edit/${s}${d}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:o},"Edit this page on GitHub"))):null},g=a(74703),u=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],d=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),d=t===l,s=new RegExp(`${l}/?(#.*)?$`),o=a.replace(s,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--68107":d},"PageTabs-module--list-item--d36e2")},n.createElement(i.Link,{className:"PageTabs-module--link--2b3ff",to:`${o}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},d))))))},t}(n.Component);var k=b,N=a(37296),f=a(75387),y=a(3732);var h=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var A=e=>{let{pageContext:t,children:a,location:l,Title:o}=e;const{frontmatter:m={},relativePagePath:u,titleType:b}=t,{tabs:y,title:A,theme:v,description:E,keywords:w,date:x}=m,{interiorTheme:S}=(0,f.Z)(),{site:{pathPrefix:C}}=(0,i.useStaticQuery)("2456312558"),I=C?l.pathname.replace(C,""):l.pathname,B=y?I.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",P=v||S;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:P,pageTitle:A,pageDescription:E,pageKeywords:w,titleType:b},n.createElement(p,{title:o?n.createElement(o,null):A,label:"label",tabs:y,theme:P}),y&&n.createElement(k,{title:A,slug:I,tabs:y,currentTab:B}),n.createElement(N.Z,{padded:!0},a,n.createElement(c,{relativePagePath:u}),n.createElement(h,{date:x})),n.createElement(g.Z,{pageContext:t,location:l,slug:I,tabs:y,currentTab:B}),n.createElement(d.Z,null))}},99811:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return u}});var n=a(45987),l=(a(67294),a(3905)),r=a(3624);const i=["components"],d={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},o=s("Row"),m=s("Column"),p=s("Caption"),c={_frontmatter:d},g=r.Z;function u(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,l.kt)(g,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Item"),(0,l.kt)("td",{parentName:"tr",align:null},"text-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))))),(0,l.kt)(o,{mdxType:"Row"},(0,l.kt)(m,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABQ0lEQVQoz42STWoCQRCFS8M4kMA4MczX6RkZk0iCIZhcyY3gMQTxJnoC7+BeBAXxZ1y48QIuDT20ZkL8yeLR0PX61at+JYCcQ5IkKVarlZMkiYGMx2O59OZisd/vG7Gj4Hq9lmazeV1QKXW6KCJGxIgZ0dlslt79x+EN4AEBcA88AHetVkt2u50sFgvjztnv9xKGYdHyShY+kD81sgO8AJ/AK/CulKo0Gg0ZjUbOZDJx2u22lMtlF/gAvoAa8AY8H0QPYjngFtBABQgNtNZ+t9uV6XTqGJfD4VCiKDK8GHgCIouS1ZCsO21JypKKruuKGXO5XB5H1lo/2qbaNlae5/38YRAEKWyHfPbsdDq/Ut5ut1Kv13P2z/MZfhqs7/si1WpV4jg+mdhgMDDujinP5/OzKRcKhet7uNls/ix2r9e7uDbfUuiisFyjIPgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of ordered and unordered lists",title:"Example of ordered and unordered lists",src:"/static/40f5466be5f49186e49f0dd862b81dcf/3cbba/list-style-1.png",srcSet:["/static/40f5466be5f49186e49f0dd862b81dcf/7fc1e/list-style-1.png 288w","/static/40f5466be5f49186e49f0dd862b81dcf/a5df1/list-style-1.png 576w","/static/40f5466be5f49186e49f0dd862b81dcf/3cbba/list-style-1.png 1152w","/static/40f5466be5f49186e49f0dd862b81dcf/92c65/list-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(p,{mdxType:"Caption"},"Ordered list (left) and unordered list (right)."),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"List items should use sentence case, that is, only the first word and any proper\nnouns are capitalized. In IBM product, use the 14px options below. For IBM.com,\nuse the larger expressive 16px options."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Item"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Item: nested"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Item (expressive)"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Item: nested (expressive)"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-02"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("p",null,"There are two types of lists, ordered and unordered. Level 1 ordered list points\nare marked numerically while level 2 points are marked with letters. Level 1\nunordered list points are dashed while level 2 points are marked with a dot."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Item"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Level 1"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Level 2"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Level 2"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACtElEQVQoz62R309ScQDFj8LMuWS5TJH0clHgYpi/xQIUVAQnzZg6UhOnyL2IIviDoagY4a90hnO2XEun66Vmaz20npr54lbONM3Wky/92qqXXnrp6dvkpX/A83z2OefsAKetyNQqFrlJdLZ6YMjWoCu9FN2UGscKF3bkHThiWISCSxhYeYK53jtoaHDAnlaMPkqLIbEu6vmV7QVRBnAgdwD3vREsWwMwGdOhSBLBlaVDV8YVEI6gWVSAfcYBgj40bliwcMMKpUoIu6gMg5QGt2kDSNk+SPEa3jGdOGRY4Jkrgud1w7xcS0Z8ktEk8F/U8J3UVT4hJLrgfRToR+12GpbrjXxBs15QW1gXN55SwgtlVvNILQHJn/8PHH25hdDio8TgwGNzj9payaUWlHrosuJ52qT4onDH7zB23lPrfGxw/QDTdzclPjZidabklbgpjaqf0hYtScxZJG+O91pm40WB9r+/4fh6HB8ObNt8BofFmZyrc9Na/bi4svSzwi3YYzrPvjJMxs08+IbQ2k9p0LvRx6Uq9W5KW+GmNPowXVVIckYSduQdiYcMG4uJ0DJmnZNCTxNb0Z2cX+Shy0qGxLq8Q4YV7srt/COGQ9vqQ7jW1zHdP8101zRV9pwvLHKLNSofVV64JbMJSd4CfmR7sCvtAHIHR6F3+fkSz3BKdgubEEnR8pZlFt6fS76Yt/IOfFQ4YeoahSIwAeVAMJHmvBc0ldfPjJ4r4A9k6vlEORLzQtqEk+APJ5Mbu8fA2nyoaXLBKVLjltSIFUkdSE4IWzIb3sjbcc07Bn0gjBZuBFUmKxwiFXooNfxiHcjlMO5JzNiUtUahaBueRS8XRH2bF1yWDn5ajym6Gp8YJ3bl9mjqzeEZmGcXYfeGYbG0gxWVwE2pMSgux568E98VvdEC0VNOW/8Aj3nh2wl1px0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for ordered and unordered lists",title:"Structure and spacing measurements for ordered and unordered lists",src:"/static/d2e63b0193d07bdebb8d8b7cf374af40/3cbba/list-style-2.png",srcSet:["/static/d2e63b0193d07bdebb8d8b7cf374af40/7fc1e/list-style-2.png 288w","/static/d2e63b0193d07bdebb8d8b7cf374af40/a5df1/list-style-2.png 576w","/static/d2e63b0193d07bdebb8d8b7cf374af40/3cbba/list-style-2.png 1152w","/static/d2e63b0193d07bdebb8d8b7cf374af40/392b1/list-style-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(p,{mdxType:"Caption"},"Structure and spacing measurements for an ordered and an unordered list | px / rem"))}u.isMDXComponent=!0}}]);