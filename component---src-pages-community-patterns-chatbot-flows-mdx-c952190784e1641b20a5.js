"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[11750],{3624:function(e,t,a){a.d(t,{Z:function(){return k}});var i=a(67294),n=a(31304),s=a.n(n),c=a(71082),o=a(67242),l=a(9953),r=a(94184),d=a.n(r);var g=e=>{let{title:t,theme:a,tabs:n=[]}=e;return i.createElement("div",{className:d()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":n.length,"PageHeader-module--dark-mode--58278":"dark"===a})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,c.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:o,branch:l}=a||n,r=`${s}/edit/${l}${o}/src/pages${t}`;return s?i.createElement("div",{className:"cds--row EditLink-module--row--04499"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--203ae",href:r},"Edit this page on GitHub"))):null},b=a(74703),m=a(51721);let A=function(e){function t(){return e.apply(this,arguments)||this}return(0,m.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),o=t===n,l=new RegExp(`${n}/?(#.*)?$`),r=a.replace(l,t);return i.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--68107":o},"PageTabs-module--list-item--d36e2")},i.createElement(c.Link,{className:"PageTabs-module--link--2b3ff",to:`${r}`},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--c4bab"},o))))))},t}(i.Component);var h=A,u=a(37296),f=a(75387),w=a(3732);var y=e=>{let{date:t}=e;const a=new Date(t);return t?i.createElement(w.X2,{className:"last-modified-date-module--row--5c9a1"},i.createElement(w.sg,null,i.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:a,location:n,Title:r}=e;const{frontmatter:d={},relativePagePath:m,titleType:A}=t,{tabs:w,title:k,theme:E,description:x,keywords:v,date:N}=d,{interiorTheme:B}=(0,f.Z)(),{site:{pathPrefix:S}}=(0,c.useStaticQuery)("2456312558"),C=S?n.pathname.replace(S,""):n.pathname,Q=w?C.split("/").filter(Boolean).slice(-1)[0]||s()(w[0],{lower:!0}):"",X=E||B;return i.createElement(l.Z,{tabs:w,homepage:!1,theme:X,pageTitle:k,pageDescription:x,pageKeywords:v,titleType:A},i.createElement(g,{title:r?i.createElement(r,null):k,label:"label",tabs:w,theme:X}),w&&i.createElement(h,{title:k,slug:C,tabs:w,currentTab:Q}),i.createElement(u.Z,{padded:!0},a,i.createElement(p,{relativePagePath:m}),i.createElement(y,{date:N})),i.createElement(b.Z,{pageContext:t,location:n,slug:C,tabs:w,currentTab:Q}),i.createElement(o.Z,null))}},71790:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return A}});var i=a(45987),n=(a(67294),a(3905)),s=a(3624);const c=["components"],o={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},r=l("PageDescription"),d=l("InlineNotification"),g=l("AnchorLinks"),p=l("AnchorLink"),b={_frontmatter:o},m=s.Z;function A(e){let{components:t}=e,a=(0,i.Z)(e,c);return(0,n.kt)(m,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Depending on the complexity of the use case and user needs, chatbots may require\nother interactions that supplement the conversational experience.")),(0,n.kt)(d,{mdxType:"InlineNotification"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," This page documents some common chatbot scenarios in IBM products and\ntheir recommended best practices. Flows still under consideration are marked\nwith “Experimental”.")),(0,n.kt)(g,{mdxType:"AnchorLinks"},(0,n.kt)(p,{mdxType:"AnchorLink"},"Launching a bot"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Multiple threads"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Expanding cards"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Error states")),(0,n.kt)("h2",null,"Launching a bot"),(0,n.kt)("p",null,"Bots should be launched from a button positioned at the bottom right of the\nscreen, or from a button embedded within the UI. See Carbon Chatbot Add-on\nDesign Kit for the appropriate variants."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAA0klEQVQoz6WSXQrCMBCEe/97+OBBBM8gfWhJFR8U7F+Spt2MTErVFmkqBob87X6ZTZIAgPd+VbGYz/1kLVhEZgmcL/UXcBgGOOdm4tpmIIMnIFvXdWiaBm3bBnFM6E9AupyatRZlWaKqqpd4SBQ4lboEGmuDK611cLgJ+HnZXuZArQ2UUsjzDEVxRl094FzU4Zgs4qE7gt8PQ2dpmiLLCFS43kpoE3MYkj3utWB3sESHQyiWx1K1Gdf3R4fTZXwUiZXc9wNa03/9h7xbyjr2MnP4BJdGFAqNt2uGAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Launching a bot",title:"Launching a bot",src:"/static/e5b4f571dfb3845d9b14adc51ee6ca3c/3cbba/chatbot-5.png",srcSet:["/static/e5b4f571dfb3845d9b14adc51ee6ca3c/7fc1e/chatbot-5.png 288w","/static/e5b4f571dfb3845d9b14adc51ee6ca3c/a5df1/chatbot-5.png 576w","/static/e5b4f571dfb3845d9b14adc51ee6ca3c/3cbba/chatbot-5.png 1152w","/static/e5b4f571dfb3845d9b14adc51ee6ca3c/0b124/chatbot-5.png 1728w","/static/e5b4f571dfb3845d9b14adc51ee6ca3c/4ea69/chatbot-5.png 2304w","/static/e5b4f571dfb3845d9b14adc51ee6ca3c/25a5b/chatbot-5.png 2400w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("h2",null,"Multiple threads (Experimental)"),(0,n.kt)("p",null,"When a bot cannot complete a request, the bot detects frustration, or the user\nwould simply prefer interacting with a person, it becomes necessary to connect\nthe user to a human agent."),(0,n.kt)("h3",null,"User initiates change"),(0,n.kt)("p",null,"Sometimes, a user indicates that they would like to chat with a human. Other\ntimes, this process can be suggested if a bot is repeatedly unsuccessful in\nanswering a user’s question."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAy0lEQVQoz6WSTQqDMBCFPbwXEDyKWzf1AF10JyhIsRVtinZixpqfVwzYRWm70AfDYybk44VMgC9yzvla1EuDWWvfW2vf89U/FfwCrl7WhK7rMKoRRARjzHbgkoiVBDP7UkptB64X2rZFHMcIwxBRFEFKuQ/YNA2yLEOapt6nadr35L4fkOc5kiTB4bAT6KyDuAlUVYWiKFDXF2it9/yyxfAgEEnchIAcxJIb/ngrkEYGSfagY8m43DcndD7EPD/BPAFO43Q2uPb/F/sFhRYOqaYDrggAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"User initiates change",title:"User initiates change",src:"/static/7d5036d55a193da011d303f158aa4b0f/3cbba/chatbot-12.png",srcSet:["/static/7d5036d55a193da011d303f158aa4b0f/7fc1e/chatbot-12.png 288w","/static/7d5036d55a193da011d303f158aa4b0f/a5df1/chatbot-12.png 576w","/static/7d5036d55a193da011d303f158aa4b0f/3cbba/chatbot-12.png 1152w","/static/7d5036d55a193da011d303f158aa4b0f/0b124/chatbot-12.png 1728w","/static/7d5036d55a193da011d303f158aa4b0f/99571/chatbot-12.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("h3",null,"Notify the user"),(0,n.kt)("p",null,"Use a toast notification bar to indicate when the user is in a new conversation\ncontext, or that a new user has joined the the chat. Call out any significant\nchanges with in-conversation status messages."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzUlEQVQoz6XSzUoDMRDA8b66F0/FV1G8+RJeROhJKQttqW5rPsjma+Yvm+1FWIR2B8KEZPJjCLNiNhRVbbuaAyCX83q5m2rmYjXLtRdKzLB+OnL/PPDwotw9JnbnCRe9GoRShc/DwKbzbDrH+9YRYv1TcxWoKqTgSMGShjEbpJbbQRHBOYexFmsdxlhKqctA731Dx2WtpdaF4IgYY3AtL+xwzH3/zddxT386t79E6zQwt4Leu9ahlMjrR2B3WthhzpkYUxvqt07Y/+i/4C8aSBNAmPDACgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Notify the user",title:"Notify the user",src:"/static/7c4f2a84e1d9dd043b87efca322263a7/3cbba/chatbot-13.png",srcSet:["/static/7c4f2a84e1d9dd043b87efca322263a7/7fc1e/chatbot-13.png 288w","/static/7c4f2a84e1d9dd043b87efca322263a7/a5df1/chatbot-13.png 576w","/static/7c4f2a84e1d9dd043b87efca322263a7/3cbba/chatbot-13.png 1152w","/static/7c4f2a84e1d9dd043b87efca322263a7/0b124/chatbot-13.png 1728w","/static/7c4f2a84e1d9dd043b87efca322263a7/99571/chatbot-13.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("h3",null,"Multiple users"),(0,n.kt)("p",null,"Combining two or more human agents into the same thread is a common practice.\nWhere necessary, call out significant changes in who the user is addressing\n(particularly if they have different purposes)."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABVklEQVQoz5WSS0sCURiG/b0u/AOtFNu3rn5AC7OgC7QLWpS2CUQZgqBRc0bn5nhuc+bMmTfOUcNAcjrw8sHh+x7e71LDzivL0kalFLIs+/nTuoQucqBUm0xttU4vdxGo7QNyxjD3PYhMgFKGIufo9giOLhKcPCi0rjI8jvI1WlcAGoeEEKxWK6RpCs4ZJnMCZ5zCnQuMoxIxKay7bc2fwDzPLWgLJYRCCorXlyfc3XRxf3sNbzb9VXMQGEUh0nQJzjmEEFCqQKdziXb7GM1mC8PhaNOyPgyUMsPXdILRcADHceB5HhiliKIIYRhCSmnHUsnhNqHf76PRaKBer+P07ByCc/i+jyRJrLgQ/2s5CAK4rmvd6ZyBEoKZ52GxCCAFQ6mEPZhKQHODcRzbhVBK8fwuES+JdcaI2TTH26es7tBE49LIDL33oSFkgVwaSAF/qTGY6L3Ab0jqANw2zIc7AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Multiple users",title:"Multiple users",src:"/static/93489695aae43e7f2c98739080335372/3cbba/chatbot-14.png",srcSet:["/static/93489695aae43e7f2c98739080335372/7fc1e/chatbot-14.png 288w","/static/93489695aae43e7f2c98739080335372/a5df1/chatbot-14.png 576w","/static/93489695aae43e7f2c98739080335372/3cbba/chatbot-14.png 1152w","/static/93489695aae43e7f2c98739080335372/0b124/chatbot-14.png 1728w","/static/93489695aae43e7f2c98739080335372/99571/chatbot-14.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("h3",null,"Incoming messages"),(0,n.kt)("p",null,"For new messages appearing in another thread, be sure to use dots above the\nThreads icon to alert the user of new messages. Then, within the menu, indicate\nthe amount of new messages on the specific thread. Visually distinguish threads\nwith new messages."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABL0lEQVQoz5VSy2rDMBDMtye4PxNo/A+lLc2ppDTQlEJDjW05tqJ4ZcuSJU2RaEoOOTgLy4h9DLO7muHCvPcRrbXQWse3cx7WeThrAG//Yi76Zc/ZZtcIlRpQlAVIEloiDKrDPhd4/8zAxQlEBKXUdMKgjvMGqpcwZgwZHJoTWFVDSoK1DuM4TicMxbvdB1b390jTFOv1GkYPeHp8QJquYizLsmmE54LNZoMkucNiscByuYyxgEmSYD6fY7vd/u9z0shN00QP+wpNbdvGNdR1HfM3jTwohbIswTnH8XgEyS5ixVjE4P0tRzHGgDGGoiiiQtgekgh5nqOqDtCqgx8V/C1XDiqEECAp8bwbwAXFWEcn7FmP1289XWHAoDJ42N/Ll4PSFsYEEotSOLz9XP/Yv6OSAxhBK3TWAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Incoming messages",title:"Incoming messages",src:"/static/205db7c5224c1b9be270bc38b1a62127/3cbba/chatbot-15.png",srcSet:["/static/205db7c5224c1b9be270bc38b1a62127/7fc1e/chatbot-15.png 288w","/static/205db7c5224c1b9be270bc38b1a62127/a5df1/chatbot-15.png 576w","/static/205db7c5224c1b9be270bc38b1a62127/3cbba/chatbot-15.png 1152w","/static/205db7c5224c1b9be270bc38b1a62127/0b124/chatbot-15.png 1728w","/static/205db7c5224c1b9be270bc38b1a62127/99571/chatbot-15.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("h2",null,"Expanding cards (Experimental)"),(0,n.kt)("p",null,"Where needed, use expanding cards to progressively disclose content. Use a full\npage view to show a very large amount of content to the user."),(0,n.kt)("h3",null,"Default state"),(0,n.kt)("p",null,"Call out critical information in the default state. Provide a trigger to expand\nthe card."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAoklEQVQoz82S2wrCMBBE+/9/px8gIkihKdhcSJpmkyOJ1gdRH9oXB4ZZEjjMhnR8UCmluWpyQkqJQiHn/Dpf813dN+Bz4HQ1qFHhg8dah4hsB9ZGwTustRhj0FrvB66wNf8P6JxrrkC9F1izvtswDA3otSHtA2a0sSg1MscICBThcb0FWFf2M85HyAuHc6S/bW5YWpNliYQQWrvjRein3x/7Dlq2Fqk8ipcjAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Default state",title:"Default state",src:"/static/8a5416789797b5e86202f444571900ec/3cbba/chatbot-16.png",srcSet:["/static/8a5416789797b5e86202f444571900ec/7fc1e/chatbot-16.png 288w","/static/8a5416789797b5e86202f444571900ec/a5df1/chatbot-16.png 576w","/static/8a5416789797b5e86202f444571900ec/3cbba/chatbot-16.png 1152w","/static/8a5416789797b5e86202f444571900ec/0b124/chatbot-16.png 1728w","/static/8a5416789797b5e86202f444571900ec/99571/chatbot-16.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("h3",null,"Expanded state"),(0,n.kt)("p",null,"Provide more detailed information in the expanded state. Only if absolutely\nnecessary, provide a way to access the full view of the content."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAtUlEQVQoz6WS7QrCIBSGd/93VxcQEcSwxTaPx4/No2/oqh9R/ZgvyJFXeHhEO3xJzrmukpkFMcbSIqX07l/zM91P4LbB6UoY7gOcd2BjICL7gCXFyDsGM4OIoImetg1AYwzGaaxQT9RmWKbWGkopLCEgxdh+ZWstvPe1K7BmQ9Iaw03BWYsoqd2Q3QJyAkmlESALtuM9huVRbIDmBUgrDueAftptmKvJui4IwVe740XQz/8/9gMw6BdcSWP8hwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Expanded state",title:"Expanded state",src:"/static/12f7b07d0076764f4244a259626eac51/3cbba/chatbot-17.png",srcSet:["/static/12f7b07d0076764f4244a259626eac51/7fc1e/chatbot-17.png 288w","/static/12f7b07d0076764f4244a259626eac51/a5df1/chatbot-17.png 576w","/static/12f7b07d0076764f4244a259626eac51/3cbba/chatbot-17.png 1152w","/static/12f7b07d0076764f4244a259626eac51/0b124/chatbot-17.png 1728w","/static/12f7b07d0076764f4244a259626eac51/99571/chatbot-17.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("h3",null,"Full view"),(0,n.kt)("p",null,"The full view is a generic container that can be used to display long-form\ncontent that would otherwise crowd a conversation thread."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAnklEQVQoz6WR2wrEIAxE+/9fKS2ttUrtRbTW1lkirOxDl4VNXhIIOcxkGjxUzrn2+75xXRdSSmX+3D1V8w34PljXFcMwlE5gNnCaJnRdBykltm2ru7+Bfd+jbdsCnOeZDxzHEVrrapf+yLJMQKUUjDHY952vkAIRQhTbBGeHQn9blgXOOXjv+UBSRSmTUmstH3gcB0IIiDHiPM+fobwAk+EU6SHzvaoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Full view",title:"Full view",src:"/static/ab95d9039ed5c64f85783ebf6a26d2e6/3cbba/chatbot-18.png",srcSet:["/static/ab95d9039ed5c64f85783ebf6a26d2e6/7fc1e/chatbot-18.png 288w","/static/ab95d9039ed5c64f85783ebf6a26d2e6/a5df1/chatbot-18.png 576w","/static/ab95d9039ed5c64f85783ebf6a26d2e6/3cbba/chatbot-18.png 1152w","/static/ab95d9039ed5c64f85783ebf6a26d2e6/0b124/chatbot-18.png 1728w","/static/ab95d9039ed5c64f85783ebf6a26d2e6/99571/chatbot-18.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)("h2",null,"Error states (Experimental)"),(0,n.kt)("p",null,"Be sure to indicate to a user when their message has not been sent due to a\nconnectivity or server problem. When in a connected state, temporarily show the\nsuccess notification, and then remove it along with any message error\nindicators."),(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.958333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABWElEQVQoz5WST0/jMBDF+b7l0suK79JPwI1Lb3tYDpQiwQW123LYkm4LIgmBOP6TehP7h+y03QNILSONPPOe58nPmhO24X1IH2tZQ9N2mAuQh/ofGBvLiDnX8QHZjsU4+S+4Ixx//q5ZJg8o8USzKXC2JH0tmD/85j1f0NoCa17xrt3PfinYnQ5rcmSZIkWOqjKMFrSbAlE88pYtMdUztcpwxwl6pDJUlaKSCiEkWhtMbRGVRiq951zwfYyg1hopJUoppKxiv9nUW6zLgB8U3BFlKciyjDRNyfMcYwxK6dgHPOS3BNOXlMlkwnw+Z7VadXaFYDqdMpvNSJKEUsjjLLdtG3MwGNA7PeXs7AfZeha54XBIv9+n1+txf3cZMec8HPpDa218zfj6ip+XN1yM38C3LBaPjEYjxtcjzn+tEfVuDw9YbppmfyFUNwvizu0shrhNQBj/yfIHDxMAjBDnaN8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Chatbot error notification",title:"Chatbot error notification",src:"/static/34af964999a53cfc8a2884c35865ee05/3cbba/chatbot-6.png",srcSet:["/static/34af964999a53cfc8a2884c35865ee05/7fc1e/chatbot-6.png 288w","/static/34af964999a53cfc8a2884c35865ee05/a5df1/chatbot-6.png 576w","/static/34af964999a53cfc8a2884c35865ee05/3cbba/chatbot-6.png 1152w","/static/34af964999a53cfc8a2884c35865ee05/0b124/chatbot-6.png 1728w","/static/34af964999a53cfc8a2884c35865ee05/99571/chatbot-6.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))}A.isMDXComponent=!0}}]);