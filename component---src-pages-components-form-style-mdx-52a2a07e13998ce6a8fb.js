"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[53824],{3624:function(e,t,a){a.d(t,{Z:function(){return A}});var n=a(67294),l=a(31304),r=a.n(l),i=a(71082),o=a(67242),m=a(9953),d=a(94184),s=a.n(d);var p=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:s()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":l.length,"PageHeader-module--dark-mode--58278":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var c=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:o,branch:m}=a||l,d=`${r}/edit/${m}${o}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:d},"Edit this page on GitHub"))):null},g=a(74703),u=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),o=t===l,m=new RegExp(`${l}/?(#.*)?$`),d=a.replace(m,t);return n.createElement("li",{key:e,className:s()({"PageTabs-module--selected-item--68107":o},"PageTabs-module--list-item--d36e2")},n.createElement(i.Link,{className:"PageTabs-module--link--2b3ff",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},o))))))},t}(n.Component);var k=b,N=a(37296),h=a(75387),f=a(3732);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var A=e=>{let{pageContext:t,children:a,location:l,Title:d}=e;const{frontmatter:s={},relativePagePath:u,titleType:b}=t,{tabs:f,title:A,theme:v,description:w,keywords:x,date:E}=s,{interiorTheme:S}=(0,h.Z)(),{site:{pathPrefix:T}}=(0,i.useStaticQuery)("2456312558"),C=T?l.pathname.replace(T,""):l.pathname,P=f?C.split("/").filter(Boolean).slice(-1)[0]||r()(f[0],{lower:!0}):"",V=v||S;return n.createElement(m.Z,{tabs:f,homepage:!1,theme:V,pageTitle:A,pageDescription:w,pageKeywords:x,titleType:b},n.createElement(p,{title:d?n.createElement(d,null):A,label:"label",tabs:f,theme:V}),f&&n.createElement(k,{title:A,slug:C,tabs:f,currentTab:P}),n.createElement(N.Z,{padded:!0},a,n.createElement(c,{relativePagePath:u}),n.createElement(y,{date:E})),n.createElement(g.Z,{pageContext:t,location:l,slug:C,tabs:f,currentTab:P}),n.createElement(o.Z,null))}},10072:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return c}});var n=a(45987),l=(a(67294),a(3905)),r=a(3624);const i=["components"],o={},m=(d="Caption",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var d;const s={_frontmatter:o},p=r.Z;function c(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,l.kt)(p,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("p",null,"Refer to the ",(0,l.kt)("a",{parentName:"p",href:"/components/text-input/usage"},"text input"),",\n",(0,l.kt)("a",{parentName:"p",href:"/components/dropdown/usage"},"dropdown"),", ",(0,l.kt)("a",{parentName:"p",href:"/components/checkbox/usage"},"checkbox"),",\n",(0,l.kt)("a",{parentName:"p",href:"/components/radio-button/usage"},"radio button"),",\n",(0,l.kt)("a",{parentName:"p",href:"/components/toggle/usage"},"toggle"),", and ",(0,l.kt)("a",{parentName:"p",href:"/components/button/usage"},"button")," pages\nfor specific typography details on each component."),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3UlEQVQoz52QUWqEMBCGx+YShbJX9dUb+FYWFfYuXiTRrJmYTFQUTYpily2ELe0HH//L8CczACdZlkGapod5nsMwDEBEYK098pVRQgjPvjVNw6SUrO97RkTMWvvDvxZC27Zwv9/BGAPOuZdGEUIknPM9P4QQN6VUpZQqjDElEX1bEFFFRFciupw/TKKFWuvkHHiXUn5yzishRNF1Xam1LhFxt0DEChGviHhBREDEeKH3/rHuNE3HqvsDy7LAtm2wruuRMX+94TzPzDnHxnFk3nsWQoj5mI9S1/W/feYLeNpXgSTNIs8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of form fields in the two colors",title:"Example of form fields in the two colors",src:"/static/916c4adac4d8ce799cf24c415a01bc09/3cbba/form-style-3.png",srcSet:["/static/916c4adac4d8ce799cf24c415a01bc09/7fc1e/form-style-3.png 288w","/static/916c4adac4d8ce799cf24c415a01bc09/a5df1/form-style-3.png 576w","/static/916c4adac4d8ce799cf24c415a01bc09/3cbba/form-style-3.png 1152w","/static/916c4adac4d8ce799cf24c415a01bc09/392b1/form-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Form headings and labels should be set in sentence case with the first letter of\nthe first word capitalized. Refer to the\n",(0,l.kt)("a",{parentName:"p",href:"/components/text-input/usage"},"text input"),",\n",(0,l.kt)("a",{parentName:"p",href:"/components/dropdown/usage"},"dropdown"),", ",(0,l.kt)("a",{parentName:"p",href:"/components/checkbox/usage"},"checkbox"),",\n",(0,l.kt)("a",{parentName:"p",href:"/components/radio-button/usage"},"radio button"),",\n",(0,l.kt)("a",{parentName:"p",href:"/components/toggle/usage"},"toggle"),", and ",(0,l.kt)("a",{parentName:"p",href:"/components/button/usage"},"button")," pages\nfor specific typography details on each component."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Heading"),(0,l.kt)("td",{parentName:"tr",align:null},"28 / 1.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$heading-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field text"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$body-compact-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Helper text"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$helper-text-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("p",null,"Forms are made up of several different components. The order in which these\nelements are arranged is flexible and by default the vertical spacing between\nelements follow the guidelines below. The vertical spacing in a default form can\nbe adjusted to be smaller than the default depending on the use case or layout."),(0,l.kt)("p",null,"Forms can be one column or two. The width of each column varies based on the\ncontent and layout of the design. On mobile, forms can only have one column."),(0,l.kt)("h3",null,"Recommended for default forms"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Form items"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-07"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Title area"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-08"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gutter between items"),(0,l.kt)("td",{parentName:"tr",align:null},"–"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-07"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Buttons"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-09"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"116.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEO0lEQVQ4y4WV328UVRTH74PGBKJPqDwtxPjgE/+A7yY++Wh8MfHBHwwxjTGRBx+MVDAxMQpiRYwQTGikWoKptGiMtBb6A6G0mBba3W27v+bnzq977/zYmTv3a2Z2WwotOpvPnjNnzv3uOXPuzhDSOwBs41HHTrnb1ux08VlCHv+QlJ58gzy26xB5atd7ZM/ulwh54j8F869P5hdeG1kuL/yxXB7/q9aYvGGYk7OakXNtVtO30DvXjckZTZ+cVrWciSlVu3l+de1ziIyQ4UaTDK7X+u5UK1itVlBvNmGYJnTDKOyGn6Pp+ua55/vgQQDGOSjnuG6Z40WFF9Zr5Mda/Z3FchOtWiPSNE0YurGJruvCMAyRx1VVLfw87rqu4JwLzliHMobrpnm5EPx+ukXOzDWV7/oY1BUvCWNfBpwjCP4HzsA5y61gjGLaMsYKwXP36uTsSl25dcuB70SJz0Pp0RA+C+HTHixEHnsgzjYRLg0xoVtjiEHIyXmNnJhXlbnFAGY7TjQ7km0/hcMy2A8guzH6YNzlmTC8DGN1ZwzLIGTgzyY5NdVUhr6ksM0gcSmXbYfhPhSuy2HbPiybwvUD2C6/f91lwnIoJnVjDCkIGbFb5KLZVFzpIApYwjmTQqTIRIrcIhPQoxBLroOA+sjvVxyFyDKBXl7+wQ3H7t7DM7MGOTunKVd+oLBUO7EdW3IeIAjCYlukYYi7novJdhvUcWBaFjzPQxCGCIIiT+R5U5bVG8pCnZxbrCt/X3MQ8yiJokh2E4NCMAlDLPsexnUNIaWI4hjhplhBvn0wZZldwV80gwyrmlI3PLhtO2nbtkySBGmaIrcQAquc5y3B71VIKYUQoshJ01QkaYrZjZZPTbTI6ZmWcmnAg2f6SRgFMv/FgrwCzmG6Lpq2XfiMsYcRlNF8Y3cFB8s1cr5aV24vNGCoWtJSVWmaJizLgq7rxaJCfMNuR+T/lM2WB642yKmphjJ8woGje4nj2tK2bbiui3Y+CEp3quqhCtn9Ci82W2So2VIaRUs0cT1f8iBEp5MWRHEHcdxBp/NIRBhFmLHbXcGfqjoZWteU2SsMVtlP4siRacSALAZEVNgsjRHHj0TkU59u97bN1xMq+fZm6+AHr3QwMtjp3DPCbL4SyPkqlwtVLm9XuFxpcMkYk7QH69Hz027Lxmgh2D+rks9uq4cOHE6w7yCy5/syPPOWxNNvSux9W2LX6xKvfpEiiXgx5Zywx4afD2faMn/bfGK//8/iu/1zBo7MWO2PZ0z/yBY+mrL843dMf9TU/cvGdkYN3fnV0MU3jdrPYIyQw7VF8uKlC3u/al49UMbSfhWVUh0r+xool+ool3SslGZQKfWvrZWOrXc5uoVjtbVS/2p1/8u/jz1H9ux++AXVIXO4R5ZRIXdRIUuokDLKZBxVcnRtjXxa25lj66vF+hdOHif/Apb/67vJgNbbAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for a double column form ",title:"Structure and spacing measurements for a double column form ",src:"/static/e0180ddb2cda3b82fe6d43d37968b957/3cbba/form-style-1.png",srcSet:["/static/e0180ddb2cda3b82fe6d43d37968b957/7fc1e/form-style-1.png 288w","/static/e0180ddb2cda3b82fe6d43d37968b957/a5df1/form-style-1.png 576w","/static/e0180ddb2cda3b82fe6d43d37968b957/3cbba/form-style-1.png 1152w","/static/e0180ddb2cda3b82fe6d43d37968b957/a5e39/form-style-1.png 1492w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements for a double column form | px / rem"),(0,l.kt)("h3",null,"Recommended for fluid forms"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Form items"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"0 px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Title area"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-08"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Gutter between items"),(0,l.kt)("td",{parentName:"tr",align:null},"–"),(0,l.kt)("td",{parentName:"tr",align:null},"1 px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Buttons"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-top"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-09"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"112.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAEN0lEQVQ4y42V328UVRTHDx1ToSZ1wQeefdIYjfpH8AjKkzFUiBXllajRhK4mxkR9xE0MMUBiBMq2KpS0mviDlh9VgzWwEEqp23Z3dmZ2fu783l12r3u/5s7s1mXBxEk+OefO3PnMufee7BIAOg5suQ5I19GWSoDkAJIJSDEwBGBLqwsHtjSAIQuQeoh5NUC6CgwRQCSExwBaRESXmE1FgFyATCB5Ji4M5Hb3ud7FAuhyKksnfFq4+dbMyurszPKdyR83yvlLmp6fV6v5hYo6vSCr3yQxJc3Van5e0fIXK6rg7IKifXtmbeOLvdeWHqPfFIOmS+UTf5Uq2JDLqJomHN+D7bpp9NJcRMutbY7dMEQQx/DjCFEc43rN8XbfXd5O88oGXVDloxW9DEWWm6qiMIGmqqyXCyqynKBpWjJ2bJvV45jFUdRqxjFuOs76S3duZ+jYlxYdv1jNnXo3gF6xWRj6PI5jDBINjqOoR6eRCst7VpYzdG7BorOFau6P2Rhx2GD1esz7Jv8fEmGhJ7xUXacZtZRTnRI0TWW2bSfCMAwfoCfpvxeEYScOQ9yw7fKeldsZmi/LdF6WcxVNh1urMc/z+KAoCAJYlgXTNOG6bjLuF9b7hZcVhWaUSk7VDZiGwWq12n0VilwIHMdJhIZhwPf9/ko79ShCoSdcUDbofKWUkzUFtmUlwl5VvUpENA0DmqYllXqe95AlW6nwu8saTRaUXHHFhO0YzHO9+w5FvOT5PizbTqS6rm8KxYf8IOjEQYAbVlc4VyjT9KqcKxZFhSYzDZPbtp0sUVQjpH4YohYEaDYaaDQag+2Utk2te8onz+h08oqaW/qphiB0mF7VuRAJqdgzsV/9h9N/IA8sWTT2D7fkpMK1ogbHsZnnpY0tKhPxYe3zn0Kx5Ku6QhfUSk63TVimxVzX5b1K+vG9AIH/4P0g2cNUuFtUeLFUonNyOVdSFLFMZlkWD8VhDND8O0LcjOAHYk+7MaUThTH+NK3yy6srGfpVU2lOVT5P2sGymGvbvB4EvB6GvB6kNKKA/368ydcWYg74vHPP57y1SQdtH3d9o7x3dTlDv9g2nVYquWLgoxwG90pBwNZ9n637Hlv3/CQvhR5779U2++yjNvv5ToPNXmuyuaVGwuxSo/39UhMnlryNXYXbmeQH9oO14lenDR2Tho4z3TiYv/BxC9vfBHYe4hg5wDE8xvGo4DWO4X0co4frzouLd1Ph27cKe09p6idTevXIlF6dmNKr2X6mjWr2uSOt7NZ9PLv9YCe742An+8S/cWLHOP9w5/vuO0/NXRmh3iXEi+02fa0qlDcNOmvom+RNnZ6eaBG9Ahoe69C2/ZxGDnAaSSJo2/4WPTMOokNjUv+f0NCsW5Mmq5qUN/QUPY1Thi49m21JW8cgZd7oSKPjKY+P84TR19kjTx7GEO16nv4BOY7OcPPcOXkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for a single column form",title:"Structure and spacing measurements for a single column form",src:"/static/b59d40909d48870074bdf769417cc218/3cbba/form-style-4.png",srcSet:["/static/b59d40909d48870074bdf769417cc218/7fc1e/form-style-4.png 288w","/static/b59d40909d48870074bdf769417cc218/a5df1/form-style-4.png 576w","/static/b59d40909d48870074bdf769417cc218/3cbba/form-style-4.png 1152w","/static/b59d40909d48870074bdf769417cc218/a5e39/form-style-4.png 1492w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(m,{mdxType:"Caption"},"Structure and spacing measurements"))}c.isMDXComponent=!0}}]);