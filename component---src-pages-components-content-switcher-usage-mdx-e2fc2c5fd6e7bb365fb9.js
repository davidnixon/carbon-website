"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[72772],{3624:function(e,t,a){a.d(t,{Z:function(){return y}});var n=a(67294),i=a(31304),s=a.n(i),o=a(71082),c=a(67242),l=a(9953),r=a(94184),g=a.n(r);var d=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:g()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":i.length,"PageHeader-module--dark-mode--58278":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:c,branch:l}=a||i,r=`${s}/edit/${l}${c}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:r},"Edit this page on GitHub"))):null},m=a(74703),A=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,A.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],c=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),c=t===i,l=new RegExp(`${i}/?(#.*)?$`),r=a.replace(l,t);return n.createElement("li",{key:e,className:g()({"PageTabs-module--selected-item--68107":c},"PageTabs-module--list-item--d36e2")},n.createElement(o.Link,{className:"PageTabs-module--link--2b3ff",to:`${r}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},c))))))},t}(n.Component);var b=h,u=a(37296),w=a(75387),k=a(3732);var f=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(k.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(k.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:t,children:a,location:i,Title:r}=e;const{frontmatter:g={},relativePagePath:A,titleType:h}=t,{tabs:k,title:y,theme:v,description:x,keywords:N,date:S}=g,{interiorTheme:C}=(0,w.Z)(),{site:{pathPrefix:E}}=(0,o.useStaticQuery)("2456312558"),T=E?i.pathname.replace(E,""):i.pathname,z=k?T.split("/").filter(Boolean).slice(-1)[0]||s()(k[0],{lower:!0}):"",B=v||C;return n.createElement(l.Z,{tabs:k,homepage:!1,theme:B,pageTitle:y,pageDescription:x,pageKeywords:N,titleType:h},n.createElement(d,{title:r?n.createElement(r,null):y,label:"label",tabs:k,theme:B}),k&&n.createElement(b,{title:y,slug:T,tabs:k,currentTab:z}),n.createElement(u.Z,{padded:!0},a,n.createElement(p,{relativePagePath:A}),n.createElement(f,{date:S})),n.createElement(m.Z,{pageContext:t,location:i,slug:T,tabs:k,currentTab:z}),n.createElement(c.Z,null))}},91102:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return v}});var n=a(45987),i=(a(67294),a(3905)),s=a(3624);const o=["components"],c={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},r=l("PageDescription"),g=l("AnchorLinks"),d=l("AnchorLink"),p=l("Row"),m=l("Column"),A=l("ComponentDemo"),h=l("ComponentVariant"),b=l("Tabs"),u=l("Tab"),w=l("DoDontRow"),k=l("DoDont"),f={_frontmatter:c},y=s.Z;function v(e){let{components:t}=e,a=(0,n.Z)(e,o);return(0,i.kt)(y,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Content switchers allow users to toggle between two or more content sections\nwithin the same space on the screen.")),(0,i.kt)(g,{mdxType:"AnchorLinks"},(0,i.kt)(d,{mdxType:"AnchorLink"},"Overview"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Live demo"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Formatting"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Content"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Behaviors"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Icon variant"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Related"),(0,i.kt)(d,{mdxType:"AnchorLink"},"References"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Feedback")),(0,i.kt)("h2",null,"Overview"),(0,i.kt)("p",null,"Content switchers allow users to toggle between alternate views of similar or\nrelated content, showing only one content section at a time."),(0,i.kt)("h3",null,"Variants"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Variant"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Content switcher")),(0,i.kt)("td",{parentName:"tr",align:null},"Uses a text label to represent the content inside each tab.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Icon content switcher")),(0,i.kt)("td",{parentName:"tr",align:null},"Uses an icon to represent the content inside each tab. They are often used when space is limited or if icons can adequately describe the sections.")))),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(m,{colLg:12,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB8klEQVQ4y62Tua7aUBCGKQj7WiCMMZAiCCTuAgHb2CyXgERokEDCpmNpItIgFImlwBVQ8BhIPARPxx/NRIhLk6S4ln6Nzzkzn/9zPMd2vV7xUQ+xbPRyuVwwn8+x2WywWq2wXq85vtdyuXzQbZ5qFosFTqcTQxloWRZsNhsCgQDcbjc8Hg/8fj+Pb6Lxe1Gey+WC1+vlWsMw7sDD4cAJiUQCgiCwxuMxZrMZisUicrkcMpkMK5vNsig3Ho8jmUwiFAphMpncgbvdDg6HA6IoIhKJIBqNot1uo9frQdd1aJrGkVQqlVAoFBhG+QQOBoNs4AFot9vZGQEpUiEByuUyAyuVCovGtEYwypMkiY/gr0BySIWNRoOhiqKgVquhXq/zPB0DOYzFYv8HpCjLMkNUVWVpegWaXoVapm0rD0D6af90mM/neavkJp9/hSY/o6o8Qf2aReklDVGMQRBiDCaHo9HoDtzv93A6nbxIMPoquWu1Wmg2m/jWbCH39gPp+hzptzm+VH8i8TkNSYojlUohHA5jOp3egdvtlnuJeorAPp+PHdJWFVlGSVYRKPzCpxcLjlcLjuc1fCEBfp8HwWCIa03TvAPP5zM6nQ5PDgYDbtJ+v89tc5PR78DstWH2Sd9hGJRnYjgcotvt4ng8/gF+9F3+DXq2PLau9DaTAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a content switcher",title:"Example of a content switcher",src:"/static/a907db9d0a98b61063961f68b778cd61/3cbba/content-switcher-usage-1.png",srcSet:["/static/a907db9d0a98b61063961f68b778cd61/7fc1e/content-switcher-usage-1.png 288w","/static/a907db9d0a98b61063961f68b778cd61/a5df1/content-switcher-usage-1.png 576w","/static/a907db9d0a98b61063961f68b778cd61/3cbba/content-switcher-usage-1.png 1152w","/static/a907db9d0a98b61063961f68b778cd61/0b124/content-switcher-usage-1.png 1728w","/static/a907db9d0a98b61063961f68b778cd61/0c3f5/content-switcher-usage-1.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"When to use"),(0,i.kt)("p",null,"Content switchers are frequently used to let users toggle between different\nformattings, like a grid view and a table view. They are also often used to\nnarrow large content groups. For example, a messaging tool may use a content\nswitcher to divide messages into three views such as “All,” “Read,” and\n“Unread.”"),(0,i.kt)("h3",null,"When not to use"),(0,i.kt)("h4",null,"Tabs"),(0,i.kt)("p",null,"When navigating between distinct content areas like subpages, use\n",(0,i.kt)("a",{parentName:"p",href:"/components/tabs/usage"},"tabs")," instead of a content switcher. Tabs follow the\nmetaphor for sections in a filing cabinet, and two tabs wouldn’t contain the\nsame sheet of paper, so the role of tabs in the information hierarchy is to\nseparate content."),(0,i.kt)("h4",null,"Toggle"),(0,i.kt)("p",null,"For binary actions or choices, such as “yes/no” or “on/off” use a\n",(0,i.kt)("a",{parentName:"p",href:"/components/toggle/usage"},"toggle")," instead of a content switcher. A content\nswitcher can be used for binary views, like switching between a grid and list\nview but should not be used as a binary input control."),(0,i.kt)("h2",null,"Live demo"),(0,i.kt)(A,{components:[{id:"content-switcher",label:"Content switcher"}],mdxType:"ComponentDemo"},(0,i.kt)(h,{id:"content-switcher",knobs:{Switch:["disabled"],ContentSwitcher:["size"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-contentswitcher--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-content-switcher--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-content-switcher--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcontentswitcher--default"},mdxType:"ComponentVariant"},"\n<ContentSwitcher onChange={console.log}>\n  <Switch name={'first'} text='First section' />\n  <Switch name={'second'} text='Second section' />\n  <Switch name={'third'} text='Third section' />\n</ContentSwitcher>\n")),(0,i.kt)("h2",null,"Formatting"),(0,i.kt)("h3",null,"Anatomy"),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4ElEQVQoz61RQQ6CQAzkZXyFk35Eb/oI/YoP8KKJBz1JIomoKLsWhW3HIGAAl6iJTTbtTrrT6Y6DWojIKwuXNUsD/xROG6g/EuYGLlWuD24NcWxkJibo5RY5Ha0DZPtL1dAcYFFvJzxqyNwv6uUOtAme6kxmwMxvqup3K6HSGsPBAJ7nYTKdIrunICIkSQKlFK5aw9xS0MKHpKZbIZd/FkUR+r0eXNfFeDRCQgSl1ZM0DEPEhxPS8xXxbAW+Zd2EXU7mWD6sWrew54eVK/dsLhYNZY/h70xpE3Yd20YO/hwP1QgN+wCrLHEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Anatomy of a content switcher.",title:"Anatomy of a content switcher.",src:"/static/a9e6c1a4a182f4583a004557272c2a60/3cbba/contentswitcher-usage-2.png",srcSet:["/static/a9e6c1a4a182f4583a004557272c2a60/7fc1e/contentswitcher-usage-2.png 288w","/static/a9e6c1a4a182f4583a004557272c2a60/a5df1/contentswitcher-usage-2.png 576w","/static/a9e6c1a4a182f4583a004557272c2a60/3cbba/contentswitcher-usage-2.png 1152w","/static/a9e6c1a4a182f4583a004557272c2a60/92c65/contentswitcher-usage-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Selected content tab:")," Only one content tab can be selected at a time and\nthere should always be one selected."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Content tab:")," Selectable container for each content view."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Label:")," Text label or icon that describes the content view.")),(0,i.kt)("h3",null,"Sizing"),(0,i.kt)("h4",null,"Height"),(0,i.kt)("p",null,"There are three height sizes for the content switcher: small (32px), medium\n(40px), and large (48px). Choose a size that best fits your layout’s density or\nthe switcher’s prominence."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)(b,{mdxType:"Tabs"},(0,i.kt)(u,{label:"Default",mdxType:"Tab"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAABjElEQVQ4y7VUS4rCQBDNQvAQHiSLSG5g7iB4AfEAXsBzuHKpC3UnuBTP4EIQNfFvTPy84RVT0klmmChjQdHVIV39qt7rsgDg8XhA19vtlnB++8vNHBa+TT+8Y+ZZy/wwn8/R6/UwGAzQ7XYxGo1wOp2w3+9xPB5xPp9lfzgcZM/4fr9nEbI0GhO5rgvP8+A4DqrVqiRbLBZYLpcSB0Eg8Wq1wna7xfV6TSZM9yBvaeneq1vpH9RZyiuXPXvIg//pVpp6RWYizNOKTMm/HWbTVZOM0/uMDlXMtOFwKCxXKhWUy2XUajWEYSjM7nY7iSkZsqtSMlkWhFoebTKZoNFooNlsol6vo9VqidaYcLPZPDXJmEmZXMHkLvnll2KSQqTvvOUEKUq39lIbr/6ybD5aMt8oB8J4PJZ1Op0ijmNEUfSjXy6XxHB4kqJMtdttFItFlEolFAoF2LYtzPIi3/clpnzW67UwT8Z5YWba6C2z2UySdjodWfv9viDh2KITEbXIWFdTNp8fsO/KxkT4BYll/vxljv6qAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Height options for the default content switcher",title:"Height options for the default content switcher",src:"/static/5632c70743c448228a4b5c0c76799449/3cbba/content-switcher-usage-sizes.png",srcSet:["/static/5632c70743c448228a4b5c0c76799449/7fc1e/content-switcher-usage-sizes.png 288w","/static/5632c70743c448228a4b5c0c76799449/a5df1/content-switcher-usage-sizes.png 576w","/static/5632c70743c448228a4b5c0c76799449/3cbba/content-switcher-usage-sizes.png 1152w","/static/5632c70743c448228a4b5c0c76799449/92c65/content-switcher-usage-sizes.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(u,{label:"Icon",mdxType:"Tab"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAABCklEQVQ4y6WUMYqFMBRFXYdbcFc2rkArGxdgZWFtYWMh7kKwUCw0YGslIQiSBBKN78MIMsyokz//dQaO9+YdiAEfjPHje993AEAINU1TVRUh5DzUhcuydBzH87xhGJRSujAAKKUAwHXdoigopRjju3Dj8pdn2l3mE6y7sP1m1Nfsj3Ob/Fz4ovYBSCmTJImiKI7jh23dqqrr2rKsPM855xjjdV3fgDHGvu93Xcc5J4Qc8nS3rePpFt62TQixbdt/VH2voKvqwCilTdP0fY8Qei5/Ac/zHASBbdtpmgLAQ3/j920BIAxD0zTbtmWMjePIGHtDVdd1WZZN0ySEWJZF1/NHL8lZXkr5p+0XnLuI9UOXgocAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Height options for the icon content switcher",title:"Height options for the icon content switcher",src:"/static/d424d8211b475f47ddb42cb7001213b9/3cbba/content-switcher-usage-sizes-icon.png",srcSet:["/static/d424d8211b475f47ddb42cb7001213b9/7fc1e/content-switcher-usage-sizes-icon.png 288w","/static/d424d8211b475f47ddb42cb7001213b9/a5df1/content-switcher-usage-sizes-icon.png 576w","/static/d424d8211b475f47ddb42cb7001213b9/3cbba/content-switcher-usage-sizes-icon.png 1152w","/static/d424d8211b475f47ddb42cb7001213b9/92c65/content-switcher-usage-sizes-icon.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))))),(0,i.kt)("h4",null,"Width"),(0,i.kt)("p",null,"Each content tab in the group should be the same width. The content tab with the\nlongest text label should have at minimum 16px spacing to the right of the\nlabel."),(0,i.kt)(w,{mdxType:"DoDontRow"},(0,i.kt)(k,{type:"do",caption:"Do base content tab width on the longest text label.",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAA30lEQVQ4y+2TTQtEYBDH3XDxDTg6+K6UnFyURL6SciLlQPJSkpf/ZuqRwm5t27Ztpv7NPC/za6ZnHg4fNu4G/jBwWZbNT9N00Lp/pn3uocL9wZntIVc5G3CeZ/JJksBxHJLneXBdF2EYIssyNE2Duq5JZVmi67rrCsdxJB8EAQRBgKqqkCSJYkVRkKYp3SmKgkDDMKCqqtdA3/chiiI0TSMgz/OQZZmAbdsiiiLkeY6+758DWctxHEPXdRiGAcuyYJombNvegPuW1/X3HoUdrJWu7bNxYfFbY3P/5T8FPgA/8go5pww1iwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Do base content tab width on the longest text label.",title:"Do base content tab width on the longest text label.",src:"/static/4a138f2890391421d6356adade48acea/a5df1/contentswitcher-usage-3-do.png",srcSet:["/static/4a138f2890391421d6356adade48acea/7fc1e/contentswitcher-usage-3-do.png 288w","/static/4a138f2890391421d6356adade48acea/a5df1/contentswitcher-usage-3-do.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(k,{type:"dont",caption:"Do not use a different width for each content tab.",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"576px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyklEQVQ4y+2TvwqDMBDGXXXzIRx82Dg56+Ib6WQQ3FxCxCiK+OeTHLSkYrHQQkvx4CPcJffjO5JY+HBYF/DHgeu60rosC+Z5vkvXj2T2PHW4P2DW93tHZx+A2pmOsiwRRREpSRLK27ZF0zQkKSXlpw6naaI1jmPYtg3P8+C6LtI0pUYhBLquwziOBH0ZqJ05jgPf9wmYZRmGYQDnHFVVoe971HV9DryNnOc5GGMIggBhGKIoCnJmjqyU+sKlmM9Gj6/19rO5/vIfAjcbixmHvKve3wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Do not use a different width for each content tab.",title:"Do not use a different width for each content tab.",src:"/static/d1a84fda463d8b1fda43a0b84310cf4f/a5df1/contentswitcher-usage-3-dont.png",srcSet:["/static/d1a84fda463d8b1fda43a0b84310cf4f/7fc1e/contentswitcher-usage-3-dont.png 288w","/static/d1a84fda463d8b1fda43a0b84310cf4f/a5df1/contentswitcher-usage-3-dont.png 576w"],sizes:"(max-width: 576px) 100vw, 576px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Alignment"),(0,i.kt)("p",null,"A content switcher can align to a grid column or hang in the gutter to create\ntype alignment. Use layout and hierarchy cues to determine which alignment is\nbest. In contained space, the content switcher should never be flush to an edge\nand instead left-align with other content in the container."),(0,i.kt)(w,{mdxType:"DoDontRow"},(0,i.kt)(k,{type:"do",caption:"Do vertically align swichers with other page content.",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"720px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACpklEQVQ4y62Sy27TQBSG+wLAou0jACos2CIhQK0Q9w1bXpG2SBQqFCkI0ao0DU3a5h47PuOxHduxHcf3cezxoLFSRGEBFfyrbzT69EvnnCX0D1n6D7Isy7iMfJksZEEQ+pfPQq5Wq5VKZXd3d3Nzc2tr683fhcuAkGHoY8McSGpfVFRVGxsWKBbWLMuyVJ2zMuaMx5zHBmekWovmKApVzWgPcaMlyhineeGlLJwzxhjJ2YywJOccZZzTkv2Ulc0AURTmBQtI4SdFTmmSUiegs4hSSkNC7YAGCWcv5hynnKchXchJEpOMDXSmOEWeZ3PKPMLClDfEczaNWFRyQDiTjPMsPm8mJAki0pUspAe27fghwYY3cZMkSaK0+KNMPD+oNzufvtSOG41a/bi6V987bDSbTdcns+SCnPwix3HMGAsJ8yL+kc6ZF/MnH1jJpBxenHJOf5ZlJBtTU/L0jql3J4YSmOCZ3Yk5sE01MEau2ZmYwtRUQ3NoG23DGDl6nMSmS5YAQFPUDuq/fP1q/fnTjRfPHj5Zv/94/d6jjbvrD95+fCeMtW8DqQ2SoIzOAM5ArYntqe9qk6CUVa0t9dbu3L5+Y+3m2q3V1dXllZXlldUrV69tb2+rht3sQl+UAcEQjbHun0hDN5iNrXAJECgyFnWonO7vHO7t1PY/tw6qp1/fHx18qO+f4M6Zjo5k6USDgQ1NRaqBWMe9mV/KCCGMMJhykKVOQJ0wyykNkvk0pklxvueYRXNWsMIj1CNMckxn5uh29EPGtu+NZEuQTcuyAWuy7rlhnmVzP85MN/XKWy1PkMFFWUYTbLhOe4AbLUECGArQFdRWT5IkSQT1pAsCqEVRBIT9LmM0wZOZ2xXU0x6I4ghkrTfSW31ACA1HWJ+SuNyzf7H5O1BZFOVqm2K6AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Do base content tab width on the longest text label.",title:"Do base content tab width on the longest text label.",src:"/static/83216148932c6c5f36614b6ad250b289/b85f6/content-switcher-usage-alignment-do.png",srcSet:["/static/83216148932c6c5f36614b6ad250b289/7fc1e/content-switcher-usage-alignment-do.png 288w","/static/83216148932c6c5f36614b6ad250b289/a5df1/content-switcher-usage-alignment-do.png 576w","/static/83216148932c6c5f36614b6ad250b289/b85f6/content-switcher-usage-alignment-do.png 720w"],sizes:"(max-width: 720px) 100vw, 720px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(k,{type:"dont",caption:"Do not flush align the switcher to the edges of containers.",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"720px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACpElEQVQ4y62Sy27TQBSGjQQs2HTFAl4GXoEXQdALEhICqfACsC/QiraBttsuCpVoF4WWKKQ0rWM7tmfGlzh2fInH9owT24MmTZGoQFDBr1l8m0//zDkjgH+I8B9kCCEaB14kE1lRlPbFM5G3t7e3trY2NzfX19c3NjbW/i5c1nXgOF2725NUs90xLMuyHU83PGR5nueZXc6GzRlZnG2HMzC9SXOSJKbltGSjcdSBCOVFNchZMmSMMVqwiDJScE5HnPMxxzk7bdaTJCkqhmkVk6ooS5KXPi6jtCzLMqFlH5eYcB5knLOcc5CUE5lkKR0xqcsMvyqK0bBkA8qSnDdkQxakLB0zppzpiHOUnTVTQnBKTzQPdHG/78cJRc7ADQkhJM2rP8hZlvnR4HOj9X7n00G9vrdf39rZ/7hX/9pshgmNCEvH78c5C7KfZQAApZQxVlX8/AjHoshwHkTDFA9ZPsTxMAhzMr4Gl3UADAhXn7+Yn5l7Ovvwyf0Hz2Zm56fnHt+be3R3+mh3N4RdJIKegmKIHAXZHdvvwMS23XgkaAA4hnHn1u1rU1PXb9y8fOWqIAiXxhEEYbVWM3p+QwSiaugQSsCGXtpz+kFHs4JMABAiVf3wbm3xzcqrpbcvl2q1Wm15pbawWFt4vSyenNi9QAYutFzPdYHhykbfAGaoanZIBICQLskJMvjeaYXHU80L/h9G4zGc27OfsijAAwDtgMtQl+S+omCSd6CrIq/v+8CwUS/GdLLn8GzCmLKQsEGAIx2cNnM5UNWY5G3VbknIsiwNmrLea2umZZrIdg9FoOhmVVW/l1P6TdSbx6qidFQdiap91NY0TZNVhJw45O/5laxJcqhqEU6/fBUPmmJbklonUv1Q3m+0NE1rHB6rRn/Il35e/g5edhM8aguUZgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Do not use a different width for each content tab.",title:"Do not use a different width for each content tab.",src:"/static/a28ffca70df07675c0eb121392885e33/b85f6/content-switcher-usage-alignment-dont.png",srcSet:["/static/a28ffca70df07675c0eb121392885e33/7fc1e/content-switcher-usage-alignment-dont.png 288w","/static/a28ffca70df07675c0eb121392885e33/a5df1/content-switcher-usage-alignment-dont.png 576w","/static/a28ffca70df07675c0eb121392885e33/b85f6/content-switcher-usage-alignment-dont.png 720w"],sizes:"(max-width: 720px) 100vw, 720px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h4",null,"Aligning to the grid"),(0,i.kt)("p",null,"For grid-aware width, the content swither spans a set of columns, with each tab\nbeing equal in size. Depending on placement, the first tab or the tab’s label\nshould align to the first column you are using, with the last tab in the group\nalways ending at a column’s edge. The tabs in between will flow accordingly and\nmay or may not align with the grid, but they will always be the same width."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAACIElEQVQoz52QXW7TQBhFvZS0KygvXQ4S4hEJCRAb6AIQYi0ICSFIcZO4KRBok7RJ/DeJZ+z59eexM46TujEyFTzy0KOr+3Z1pGuFYRhFUfIgrNVqNRqNPjwIS0p5cnJycNA5Pj5+dHTU6XQODw/+cfhfWvPV1eX7T+cfu99Oe+d95+K0N+wPhnb/ojcYfrEdu+d0bedrz+metX161sbunX/u2pbvB0WR5+ZWQa50qYsSih3kBlMwm+quae6apm6a/d++T9M029vaCoJAShkS8FDiRSpYUYQ5jpmLSEyFgBK04WBSvRZtG5kZAQbyksmsHSulAgKJXEPZcDDjGz9cYg/Fro9G47nrLxcBvp55V1PXD/HcX01uvPF0PlsEFkIoilb24GLgDLu2czmexkIzkRIGXAJhwCQQnjGZxRyogERkLC2UNq0ZYzyZTJ49f/Hy1evHT56+efvOX9G5GwTLJCLs2kULH7khQVF8PQ+8IFpiFvNMQpHw1ArDkFKKiPDDyEOES0ARD5dkEeBwScY3Po4Zwtz1l99/TaYzL4rFZOb9+Dmeu2E7ZozGQlMBEVVcZUW1X5fbtNiazS5KUqG0Lmu9rnAiU23KXSNgTUUqoWgP44zx1CjIE6EhN2bXlFWdmdvNtiYsU1mxrvZFuSMshXxT1Y3K2qtltraCP2Yqc5FqTJUuyqLam83u3oypEqnOyzo3FWEq1WW5ayQUTIKE/DcPYoMZjcgcNAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"An example of a content switcher aligning to the grid.",title:"An example of a content switcher aligning to the grid.",src:"/static/03e1cec2dbd21ea5cb1e581fae73fcec/3cbba/content-switcher-alignment-3.png",srcSet:["/static/03e1cec2dbd21ea5cb1e581fae73fcec/7fc1e/content-switcher-alignment-3.png 288w","/static/03e1cec2dbd21ea5cb1e581fae73fcec/a5df1/content-switcher-alignment-3.png 576w","/static/03e1cec2dbd21ea5cb1e581fae73fcec/3cbba/content-switcher-alignment-3.png 1152w","/static/03e1cec2dbd21ea5cb1e581fae73fcec/92c65/content-switcher-alignment-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h4",null,"Aligning to the content"),(0,i.kt)("p",null,"For content-driven widths, the content tab with the longest text label should\nhave 16px spacing to the right of the label, and then the widths of all other\ntabs should match that widest tab."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAACD0lEQVQoz52Q32rUQBSH8yh2+wT1os9UfAURpC+gULwQL7zwWlBol7q07La7si3UWlcLpt1N0s3f2ZlJJpnJzGQyyUh2Bb0Uf/z44Bz4OHAs13V934//K9Zyuby+vu7/VyyE0P7+/tbWo93d3Z3HO71eb3u79y/Z7vW6y7PZt6OTi8HZVX9wetg//nj0aXg2Ho4vzifT4fn0D8cdzybT0Xh6/vnidDS2FguH0iKjEhOmWtOYrq0xes16Pf7NTY0xstaW4zgIQVzIlFChW8qrlFa0lGtWuJBFKXEhcybTQuZUEiqzblmhlG5kdPDq9d7ek6fPnj/40UMIkxV2fOCHSQTzNGcgZZiwVcpwxlDGYMpwXgJEOhlC+P7D4YuXB2/evvP8yA1AGK/she94/jJGAGUByFaYJCiHuFjhAqACZjQC2HJcFwDgx9iee3Mvch4Ce+HfzG77g+Hx4GQ0uZxeXo0ml1++fr+6ubXn3s/7rvbcm93alruRI+wto7kX+WHixzhM4A/buZu7d07gLsN7LwyiVRBjgEgCSQwJwGThBhs5yZhiol5TUdkobXKueaW5anVrhDaiaqjQlTaiNlwZ1ZgYpr/llHZfRYTnTDBphGog4aTgBdeybplsmVCEVlJ1ZlkZqU2YwE5Okk5mXOVlLVRDRSMqnbOay5qKRqqGyqaUuuA1r5qyaphshGoTmP0C97eJ5AIoMtcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"An example of a content-driven width content switcher.",title:"An example of a content-driven width content switcher.",src:"/static/4ae67828bdad2956f6778f160c31c2ab/3cbba/content-switcher-alignment-2.png",srcSet:["/static/4ae67828bdad2956f6778f160c31c2ab/7fc1e/content-switcher-alignment-2.png 288w","/static/4ae67828bdad2956f6778f160c31c2ab/a5df1/content-switcher-alignment-2.png 576w","/static/4ae67828bdad2956f6778f160c31c2ab/3cbba/content-switcher-alignment-2.png 1152w","/static/4ae67828bdad2956f6778f160c31c2ab/92c65/content-switcher-alignment-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Placement"),(0,i.kt)("p",null,"Place the content switcher above the content area to create a clear hierarchy\nfor the section that the switcher controls. It can be aligned to the left or\nright side of the content area but should never be centered in the content\nspace."),(0,i.kt)("h2",null,"Content"),(0,i.kt)("h3",null,"Main elements"),(0,i.kt)("h4",null,"Text label"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Be concise and specific and limit text labels to two to three words."),(0,i.kt)("li",{parentName:"ul"},"Text labels should clearly communicate the view users will see and the content\ncontained in the view.")),(0,i.kt)("h3",null,"Further guidance"),(0,i.kt)("p",null,"For further content guidance, see Carbon’s\n",(0,i.kt)("a",{parentName:"p",href:"/guidelines/content/overview/"},"content guidelines"),"."),(0,i.kt)("h2",null,"Behaviors"),(0,i.kt)("h3",null,"Default selection"),(0,i.kt)("p",null,"Only one content section can be shown at a time. The first content tab in the\nswitcher should be determined based on usage and should always be the default\nselection."),(0,i.kt)("h3",null,"States"),(0,i.kt)("p",null,"The content switcher includes two content tab states: ",(0,i.kt)("strong",{parentName:"p"},"selected")," and\n",(0,i.kt)("strong",{parentName:"p"},"unselected.")," The selected state uses a high contrast color."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAAhElEQVQoz61SwQnAIBDriOISils4hzO4mOBDfOhDTamglJZaSz0IB5LLGXIbFtd2fSil9D7CmTslmHNGSqnjifcq+ERuPzsWjXg3wTagtQbnHEIISCnhnIP3viLGOC/Y7CmlQAgBpRSMMVhrYYypPYQwLziyfLb+OZS3VKdDWX42fw97BxbrDhra3gl9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Selected and unselected content switcher states.",title:"Selected and unselected content switcher states.",src:"/static/7e603030c21618e1b357b2b7c0e6ae3e/3cbba/contentswitcher-usage-4.png",srcSet:["/static/7e603030c21618e1b357b2b7c0e6ae3e/7fc1e/contentswitcher-usage-4.png 288w","/static/7e603030c21618e1b357b2b7c0e6ae3e/a5df1/contentswitcher-usage-4.png 576w","/static/7e603030c21618e1b357b2b7c0e6ae3e/3cbba/contentswitcher-usage-4.png 1152w","/static/7e603030c21618e1b357b2b7c0e6ae3e/92c65/contentswitcher-usage-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("p",null,"For detailed visual information about the various interactive states for this\ncomponent, see the ",(0,i.kt)("a",{parentName:"p",href:"/components/content-switcher/style"},"Style")," tab."),(0,i.kt)("h3",null,"Interactions"),(0,i.kt)("h4",null,"Mouse"),(0,i.kt)("p",null,"Users can activate and navigate between content switcher tabs by clicking a\ncontent tab."),(0,i.kt)("h4",null,"Keyboard"),(0,i.kt)("p",null,"Users can activate and navigate between content switcher tabs by pressing the\n",(0,i.kt)("inlineCode",{parentName:"p"},"left")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"right")," arrow."),(0,i.kt)("h2",null,"Icon variant"),(0,i.kt)("p",null,"The icon content switcher variant uses an icon instead of a text label to\nindicate alternative views of similar or related content. Icon content switchers\nare often used when space is limited or when icons can adequately describe the\nsections (for example, a list view versus a card view)."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABf0lEQVQoz42QTY7iMBBGuSQbroTYseUO7GEkWAziBCCCJ078kxCJRRxSKTtO7BFxd0RL3WreymX71aeqiXgPzjkb4JwLIdI0TZJk8ucNttvtbrc7HA5/Bzabzel0YoxN4oF/P0MISdP0eDzO5/PFYrFarRhjhJBncjNgre26zlrb9304dANuwHtvjFkul7PZbL/fN00jhKCUTsqyVEq1bYuITdMgIgAgotYaAMam3vv1ej2dTqWU9/udc/6U8zyXUkZRxBgLu5FSXi6XOI6llJxzKSUh5Hw+CyHiOKaUKqU+km+3W5ZlhJAsy24DRVFcr1dKaVEUeZ4XRZEkSRRF44eqqj6SvffOOWOMfyGMMJbW2rqu27YdXxljT9k513UdIrpPvPd1XQNA6Ouc01pXVWWMCeXv8uPxCLL3XmtdluU3cj+gtX6VAaCu6zG5bVsA+Eb23vd9j4ivMwNASA4YY5RS416+JFtrAaD/xDlXVZVSyjkXbhCxLEtEDCUABPk/ysfISyNUmBIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"An example of an icon content switcher.",title:"An example of an icon content switcher.",src:"/static/963944b44538dec1b0bdce6c2f9c33ea/3cbba/content-switcher-icon.png",srcSet:["/static/963944b44538dec1b0bdce6c2f9c33ea/7fc1e/content-switcher-icon.png 288w","/static/963944b44538dec1b0bdce6c2f9c33ea/a5df1/content-switcher-icon.png 576w","/static/963944b44538dec1b0bdce6c2f9c33ea/3cbba/content-switcher-icon.png 1152w","/static/963944b44538dec1b0bdce6c2f9c33ea/92c65/content-switcher-icon.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h3",null,"Responsiveness"),(0,i.kt)("p",null,"Icon content switchers are compact and do not take up much screen space, and\ntherefore they often work in different screen sizes. Where necessary, icon\ncontent switchers can also be used as a responsive replacement for content\nswitchers."),(0,i.kt)(p,{mdxType:"Row"},(0,i.kt)(m,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.31944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABfElEQVQoz32RTU4CMRSAPZFLlBDXJKw0MQSUFQuuwcJEL0Dixo0egCO4wxtoTEzedH7aztR2ZjotA8NAaxwSgyPyrbr50ve9d4R+41Tsvn9Afziqmb7vY4y9iiAI8A6u6/4rA0AYhpPJpNvtDofD0Wg0GAx6vV6/3+9fXZ9fXE6nU0opAOyXGWPj8bjZbLbb7U6n02q1Go1G4+TkrHV6dnr89PgYRdF+eQvG+KMiCII8z5We21LP3vTwvgSXuOhXer2ZUoqQ43ke53w+n2dKlUvtfm4enkvXwwg5/y4MAFIpS2vX67VSqigKa+1yWdzd3njwKoTYnXnPz4RQH4cYkziOsyzTWqdpOpu9eD4mhNQOVmt2/IAQQiilaYVSSmu9Wq2UUhjjQzIAfMaZtdYYs9lsjDG2oixLYwxj7NDYgBwOqEgSLr6J4zjPc2utlDJJkjAMDzYjxN/fNedcCMZYFEVSSmttkiRCiNqR9ywMUCSV3q5qsVhsE7bxf+UvfF+Y5SO96I0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of an icon switcher in a mobile setting.",title:"Example of an icon switcher in a mobile setting.",src:"/static/68f978dde27e35916c534328329db38c/3cbba/content-switcher-icon-reponsive.png",srcSet:["/static/68f978dde27e35916c534328329db38c/7fc1e/content-switcher-icon-reponsive.png 288w","/static/68f978dde27e35916c534328329db38c/a5df1/content-switcher-icon-reponsive.png 576w","/static/68f978dde27e35916c534328329db38c/3cbba/content-switcher-icon-reponsive.png 1152w","/static/68f978dde27e35916c534328329db38c/92c65/content-switcher-icon-reponsive.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Related"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/components/tabs/usage"},"Tabs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/components/toggle/usage"},"Toggle"))),(0,i.kt)("h2",null,"Feedback"),(0,i.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}v.isMDXComponent=!0}}]);