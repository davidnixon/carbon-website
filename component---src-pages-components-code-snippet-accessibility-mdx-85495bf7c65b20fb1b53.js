"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[35380],{3624:function(e,t,a){a.d(t,{Z:function(){return w}});var i=a(67294),n=a(31304),s=a.n(n),c=a(71082),o=a(67242),l=a(9953),p=a(94184),r=a.n(p);var d=e=>{let{title:t,theme:a,tabs:n=[]}=e;return i.createElement("div",{className:r()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":n.length,"PageHeader-module--dark-mode--58278":"dark"===a})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,c.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:o,branch:l}=a||n,p=`${s}/edit/${l}${o}/src/pages${t}`;return s?i.createElement("div",{className:"cds--row EditLink-module--row--04499"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--203ae",href:p},"Edit this page on GitHub"))):null},b=a(74703),g=a(51721);let A=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),o=t===n,l=new RegExp(`${n}/?(#.*)?$`),p=a.replace(l,t);return i.createElement("li",{key:e,className:r()({"PageTabs-module--selected-item--68107":o},"PageTabs-module--list-item--d36e2")},i.createElement(c.Link,{className:"PageTabs-module--link--2b3ff",to:`${p}`},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--c4bab"},o))))))},t}(i.Component);var u=A,y=a(37296),k=a(75387),f=a(3732);var h=e=>{let{date:t}=e;const a=new Date(t);return t?i.createElement(f.X2,{className:"last-modified-date-module--row--5c9a1"},i.createElement(f.sg,null,i.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:n,Title:p}=e;const{frontmatter:r={},relativePagePath:g,titleType:A}=t,{tabs:f,title:w,theme:v,description:C,keywords:E,date:N}=r,{interiorTheme:x}=(0,k.Z)(),{site:{pathPrefix:S}}=(0,c.useStaticQuery)("2456312558"),T=S?n.pathname.replace(S,""):n.pathname,B=f?T.split("/").filter(Boolean).slice(-1)[0]||s()(f[0],{lower:!0}):"",z=v||x;return i.createElement(l.Z,{tabs:f,homepage:!1,theme:z,pageTitle:w,pageDescription:C,pageKeywords:E,titleType:A},i.createElement(d,{title:p?i.createElement(p,null):w,label:"label",tabs:f,theme:z}),f&&i.createElement(u,{title:w,slug:T,tabs:f,currentTab:B}),i.createElement(y.Z,{padded:!0},a,i.createElement(m,{relativePagePath:g}),i.createElement(h,{date:N})),i.createElement(b.Z,{pageContext:t,location:n,slug:T,tabs:f,currentTab:B}),i.createElement(o.Z,null))}},49588:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return u}});var i=a(45987),n=(a(67294),a(3905)),s=a(3624);a(39099);const c=["components"],o={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=l("PageDescription"),r=l("AnchorLinks"),d=l("AnchorLink"),m=l("Row"),b=l("Column"),g={_frontmatter:o},A=s.Z;function u(e){let{components:t}=e,a=(0,i.Z)(e,c);return(0,n.kt)(A,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(p,{mdxType:"PageDescription"},(0,n.kt)("p",null,"No accessibility annotations are needed for code snippets, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),(0,n.kt)(r,{mdxType:"AnchorLinks"},(0,n.kt)(d,{mdxType:"AnchorLink"},"What Carbon provides"),(0,n.kt)(d,{mdxType:"AnchorLink"},"Development considerations")),(0,n.kt)("h2",null,"What Carbon provides"),(0,n.kt)("p",null,"Carbon bakes keyboard operation into its components, as well as many other\naccessibility considerations."),(0,n.kt)("h3",null,"Keyboard interaction"),(0,n.kt)("p",null,"For all three variants, the code snippet can be copied with ",(0,n.kt)("inlineCode",{parentName:"p"},"Space")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),".\nArrow keys can operate scroll bars."),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAArElEQVQoz6WRPQ7CMAyFe2QuwMzCxMDIyg1gYmBAnACJDpXKj6pWikTSKP1J/FwUyloUWk+W7Kfv+TnqJlQ0NAAYxCPFk8i3WCSX4m8xs3e7XZ3X84Oz5Cw6DhaDoGWjpC5LmT0LY6pQsrNoKtuTN4vjaX9dznb3JDeVVkr1pgbFTe36hfyhsvQlhUlj0daWGSD8IoNgW/rcPSrt1pP5+2f4FuDQwMjBO0cQ+g1k3oc58knQgwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"inline code snippet keyboard interaction",title:"inline code snippet keyboard interaction",src:"/static/6c2987d50a493ce1101c2f9bb50636fd/3cbba/code-snippet-accessibility-1.png",srcSet:["/static/6c2987d50a493ce1101c2f9bb50636fd/7fc1e/code-snippet-accessibility-1.png 288w","/static/6c2987d50a493ce1101c2f9bb50636fd/a5df1/code-snippet-accessibility-1.png 576w","/static/6c2987d50a493ce1101c2f9bb50636fd/3cbba/code-snippet-accessibility-1.png 1152w","/static/6c2987d50a493ce1101c2f9bb50636fd/92c65/code-snippet-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("p",null,"By default, each inline code snippet is reachable by ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab")," and copied with\n",(0,n.kt)("inlineCode",{parentName:"p"},"Space")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABPklEQVQoz51Ry07CQBTt97vwFxT3Ji50ifGRmIgJYkpITAM1vIpUoBSYmTv3UTMdiqi48eQuZubOOec+guIPCAtotECIbIGMRmbxKSYxGtFSsPtNxGSZiB1TRCtkkj2twigUEWYxykqZCUolNgrBODEwzs0CEXqVbbhv7AxBOwmvWDpLGRUskFrDwV5AEyjcXQNmaTcGUThBJDC2bJVWmSH0VbgAg1pZtDR7z1eZ8hU5sgU6Pbq/rLU2m3U3isOXTqf92noO417/LR4ko2nc6w8H4yxfLLN8PJpki6UfSlV2URBy8y5OhtNpms5ni490ppUhN2fXYTrOr85aUTipn7ebt7HfRUkWd7JAj/VuNl99675ySJO8dnzTfIguThpP1/vkH+ut8HvxSMBM+09fZGY+xPHE7YSEhZkPkP+BT6Q4fkrTjQ6XAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"single line code snippet interaction, with 2 tab stops",title:"single line code snippet interaction, with 2 tab stops",src:"/static/7e86c6ba0d5cb4ab338f5b98bc55a773/3cbba/code-snippet-accessibility-2.png",srcSet:["/static/7e86c6ba0d5cb4ab338f5b98bc55a773/7fc1e/code-snippet-accessibility-2.png 288w","/static/7e86c6ba0d5cb4ab338f5b98bc55a773/a5df1/code-snippet-accessibility-2.png 576w","/static/7e86c6ba0d5cb4ab338f5b98bc55a773/3cbba/code-snippet-accessibility-2.png 1152w","/static/7e86c6ba0d5cb4ab338f5b98bc55a773/92c65/code-snippet-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("p",null,"The single line code snippet tabstop supports left and right arrow key\nscrolling."),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABTUlEQVQoz42STU7DMBCFe18uwAlgz56eAVghdiyQ2IC6Syq7bWJa8iO3iR07Yzv+gbii0G7op1mN9PRm3swknI33QXClYDh0JufJfAgBenNz+XR3+xZCcM4fibXWMgIAfUT9wRjdSyCLqvxotLKnzpxzhBDGeLPZrNdrhFAeoZRyzoUQnHVlUVXFFuRgB3ckBgBCyCqS5znGOMsyjHGe51mWEULatm0a1ot+HBMG7/yvmDGGEFoul/P5PE3Tsizrut5FtiOUMSalUEqFEIwazSeHSJRShBCEUJqmSZKsVqumafYpdFzEks2OSTk6qxNnAKCUYoyrqtq7CSG6SF3Sqq6KomjbZke5YOp05yFirR1+MMZobawdaM1mr4sMfyazD4Kpd34f+D939vGeJWmvLx5eHpPp1fP99H0cuzfWurOexHknRAcAh47R9lv8BSRpc7yzMxw5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"multi-line code snippet keyboard interaction",title:"multi-line code snippet keyboard interaction",src:"/static/dfc86d03f38c1d0911314b2c886cae3d/3cbba/code-snippet-accessibility-3.png",srcSet:["/static/dfc86d03f38c1d0911314b2c886cae3d/7fc1e/code-snippet-accessibility-3.png 288w","/static/dfc86d03f38c1d0911314b2c886cae3d/a5df1/code-snippet-accessibility-3.png 576w","/static/dfc86d03f38c1d0911314b2c886cae3d/3cbba/code-snippet-accessibility-3.png 1152w","/static/dfc86d03f38c1d0911314b2c886cae3d/92c65/code-snippet-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("p",null,"The multi-line’s buttons are reachable by ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab")," and activated with ",(0,n.kt)("inlineCode",{parentName:"p"},"Space")," or\n",(0,n.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,n.kt)("h3",null,"Labeling and updates"),(0,n.kt)("p",null,"Carbon provides the copy button’s default label and tooltip behavior. Carbon\nhandles notices about the success of the copy function, as well as updates to\nthe Show more mechanism."),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAAjklEQVQoz72QQQrDIBBFc/+NwYU30oV4AtcyigOiuBKt00UhJJDSNoG+9Tze8Be6wfLl3Zxz7Jhz/iBfLL8izjkppdbaGKOUQsSD/HjDGIOIjDGMsXVdhRCcc2vtQS6lOOdCCIgIADFGAEgpee9DCLVWIkLEGOP2zufyRu+9tZZz7r3/ZbDT/S7Kt8p7+Qm/14QOcpQvAQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"hovering on the button exposes ‘copy to clipboard’ tooltip",title:"hovering on the button exposes ‘copy to clipboard’ tooltip",src:"/static/bad91b117b0ac5b9d39cf117385cfae3/3cbba/code-snippet-accessibility-4.png",srcSet:["/static/bad91b117b0ac5b9d39cf117385cfae3/7fc1e/code-snippet-accessibility-4.png 288w","/static/bad91b117b0ac5b9d39cf117385cfae3/a5df1/code-snippet-accessibility-4.png 576w","/static/bad91b117b0ac5b9d39cf117385cfae3/3cbba/code-snippet-accessibility-4.png 1152w","/static/bad91b117b0ac5b9d39cf117385cfae3/92c65/code-snippet-accessibility-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("p",null,"The code snippet’s buttons expose their labels on hover or focus."),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/0lEQVQoz6XSW46DIBQG4K7fBbgW4wJcgpccouIlUYOCwABOFSeBdNo0Psyk3yPhD+fC7fzA7S+XrLXneaZpGsdxFEXruvrDZ3jbti9Ha60c88JamyRJEARhGDLG3sOccwBACPV933UdAGCHEMKd4zgAgBDyW8szrLVumqZyMMYIobquEUIY47qu27allAohlFIXPa/rCgBlWRZFkef5MAzTNC3OPM+EEMaYEMIY8x621hpjmqYBgDzPsyyrqopS6qfg+9daSykvwr5sQghCaBxH/5qUUgghpWSMDc6yLNfhu7Pv+/3h+2HbNs45Y0wpte/7//b80SfxQ/HreQ3/AFjDeDWxFY7mAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"the activated button shows a ‘copied!’ message",title:"the activated button shows a ‘copied!’ message",src:"/static/f11bf886d2282ca7f48c960815d7362a/3cbba/code-snippet-accessibility-5.png",srcSet:["/static/f11bf886d2282ca7f48c960815d7362a/7fc1e/code-snippet-accessibility-5.png 288w","/static/f11bf886d2282ca7f48c960815d7362a/a5df1/code-snippet-accessibility-5.png 576w","/static/f11bf886d2282ca7f48c960815d7362a/3cbba/code-snippet-accessibility-5.png 1152w","/static/f11bf886d2282ca7f48c960815d7362a/92c65/code-snippet-accessibility-5.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("p",null,"The results of activating buttons are provided in text."),(0,n.kt)("h2",null,"Development considerations"),(0,n.kt)("p",null,"Keep this in mind if you are modifying Carbon or creating a custom component:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the inline code text is implemented as a button so its text can be copied"),(0,n.kt)("li",{parentName:"ul"},"single line snippets take an additional tabstop to support arrow key scrolling")))}u.isMDXComponent=!0}}]);