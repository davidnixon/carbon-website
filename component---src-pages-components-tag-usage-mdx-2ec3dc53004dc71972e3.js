"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[63701],{3624:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(67294),s=a(31304),l=a.n(s),i=a(71082),r=a(67242),o=a(9953),c=a(94184),g=a.n(c);var m=e=>{let{title:t,theme:a,tabs:s=[]}=e;return n.createElement("div",{className:g()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":s.length,"PageHeader-module--dark-mode--58278":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:s}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:r,branch:o}=a||s,c=`${l}/edit/${o}${r}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},p=a(74703),u=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,s=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),r=t===s,o=new RegExp(`${s}/?(#.*)?$`),c=a.replace(o,t);return n.createElement("li",{key:e,className:g()({"PageTabs-module--selected-item--68107":r},"PageTabs-module--list-item--d36e2")},n.createElement(i.Link,{className:"PageTabs-module--link--2b3ff",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},r))))))},t}(n.Component);var f=b,y=a(37296),A=a(75387),h=a(3732);var k=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(h.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(h.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:a,location:s,Title:c}=e;const{frontmatter:g={},relativePagePath:u,titleType:b}=t,{tabs:h,title:w,theme:T,description:E,keywords:v,date:x}=g,{interiorTheme:N}=(0,A.Z)(),{site:{pathPrefix:C}}=(0,i.useStaticQuery)("2456312558"),L=C?s.pathname.replace(C,""):s.pathname,U=h?L.split("/").filter(Boolean).slice(-1)[0]||l()(h[0],{lower:!0}):"",B=T||N;return n.createElement(o.Z,{tabs:h,homepage:!1,theme:B,pageTitle:w,pageDescription:E,pageKeywords:v,titleType:b},n.createElement(m,{title:c?n.createElement(c,null):w,label:"label",tabs:h,theme:B}),h&&n.createElement(f,{title:w,slug:L,tabs:h,currentTab:U}),n.createElement(y.Z,{padded:!0},a,n.createElement(d,{relativePagePath:u}),n.createElement(k,{date:x})),n.createElement(p.Z,{pageContext:t,location:s,slug:L,tabs:h,currentTab:U}),n.createElement(r.Z,null))}},89312:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return A}});var n=a(45987),s=(a(67294),a(3905)),l=a(3624);const i=["components"],r={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},c=o("PageDescription"),g=o("AnchorLinks"),m=o("AnchorLink"),d=o("Row"),p=o("Column"),u=o("ComponentDemo"),b=o("ComponentVariant"),f={_frontmatter:r},y=l.Z;function A(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,s.kt)(y,Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(c,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Use tags to label, categorize, or organize items using keywords that describe\nthem.")),(0,s.kt)(g,{mdxType:"AnchorLinks"},(0,s.kt)(m,{mdxType:"AnchorLink"},"Overview"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Live demo"),(0,s.kt)(m,{mdxType:"AnchorLink"},"Feedback")),(0,s.kt)("h2",null,"Overview"),(0,s.kt)("p",null,"Multiple or single tags can be used to categorize items."),(0,s.kt)("p",null,"Use short labels for easy scanning. Use two words only if necessary to describe\nthe status and differentiate it from other tags."),(0,s.kt)("h3",null,"When to use"),(0,s.kt)("p",null,"Use tags when content is mapped to multiple categories, and the user needs a way\nto differentiate between them."),(0,s.kt)(d,{mdxType:"Row"},(0,s.kt)(p,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACW0lEQVQoz3WT307UQBTGT9IYkCvixQbjDUFuiXLjLS/gS/AS8BBg1ER4DWOMBrKiJtplMSkL7mZppw2U7dLSP9syZ6a7C1MzZiayERMn+eU7c6bzfe2kA/Bn5HkOe3t7MBwOwfd9sG0bPM8D13W1/o9/12F5eVkzMzMDUkpYWVmBer2u69XVVR2mAm43qiA11DNBEAAh5K7h1NQUTE9P36vVanOLi4u12dnZOQC4v7a2Buvr63qzenNloNjd2YXn8AzKt+cg+u/Bsz7Ax506fPuyq9d1AiHkcavV2j84ONhvt9sNQkjDdV2z0+mYlmWZhJAJjuOYbevYPHU889RzTM91Gg4h3wkhD5UXxHGseOK6rux2uzIIAhlFkcb3fWnbtgzD8A5Nx5Kdni3JWSzPepG8jELZvwgXwjAE4JwrloqiqCilVVmWgjFWcc4rRKxUX9V/YxZHlZV3K6cvxHky+sUYv6HI55UXICIwxpaSJKnSNFUmglIqlOZ5LpIkEZMeRUGRikbSEofZiSDBSFjesDoJhtclZ/Ocs4nh0yzL5GAwkIwxiYhai6KQaZpOerc0siN5ODiRbv9aXqRclhxlccUWlJcyU5/8KEmSjTRNXyPiG0rpBiK+yvN8O47jTUrpS0rpFqVU1+3U2eqm3qbXL1+ECW4zpJvFFT6glAKMRiMYj8f6n1KHqs5BJSnNsgx6vZ6eI0NgWhm863+GT1ETmvYNuBclDEuEOKOgDcuy1LcjiiIjjmODMWYgotY8z40wDPV8AkPj6+UPoxkfGz9Px4Z/yY2So5EMrrThb59keczagHL9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of tags in a data table.",title:"Example of tags in a data table.",src:"/static/4a53a400bd7177aaa950ff9d2df21502/3cbba/tag-usage-2.png",srcSet:["/static/4a53a400bd7177aaa950ff9d2df21502/7fc1e/tag-usage-2.png 288w","/static/4a53a400bd7177aaa950ff9d2df21502/a5df1/tag-usage-2.png 576w","/static/4a53a400bd7177aaa950ff9d2df21502/3cbba/tag-usage-2.png 1152w","/static/4a53a400bd7177aaa950ff9d2df21502/392b1/tag-usage-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("p",null,"Tags can also be used as a method of filtering data, to show only items within\nthat particular category."),(0,s.kt)(d,{mdxType:"Row"},(0,s.kt)(p,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.63888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABX0lEQVQoz43Ru0oDQRQG4D+LQroN+BxiIb6ND2AhaGFlY6GPYBVIsYoXbERs7LwUGlExBiUiiSbubWZ2s2d2JkHixqwkEJGAl+Ljb+b8HOYgTVP01ev1jOM4hhDCCMPQCILAYIx9pZTS0FobSqlBjoBSCv3EsNB2G3B9GyJgCJscIuBg3IUQHL7vDwba7TZardavhoVjYTNYbUbhrpRkxUpaUtImyaifW1EU7SqldrTWo/a01nmttdnfTmudGRaOezY/8Rweew63XZuHvstt55U1fY9VPc8rRVFUJqK7b0pE9EBEJ0Q0QUQgogw2lgSO1iWezt+Xq8VkrXbZna8Wk8LL1cds9SKxXq57M8/l+Otr/oJ2nOBNd7E+94jtlQbOtgj5hRoqZ28oLL6idt0ZPJyanEY2m0Uul4Npmj9Cr5MiTVLs50s43q/g9tTGoXWD2n2AA+sS9nMwOAxj7F8+AdR7f/Oo7941AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of tags in search.",title:"Example of tags in search.",src:"/static/a15f7145d5b3f91893cfaf3e36977659/3cbba/tag-usage-1.png",srcSet:["/static/a15f7145d5b3f91893cfaf3e36977659/7fc1e/tag-usage-1.png 288w","/static/a15f7145d5b3f91893cfaf3e36977659/a5df1/tag-usage-1.png 576w","/static/a15f7145d5b3f91893cfaf3e36977659/3cbba/tag-usage-1.png 1152w","/static/a15f7145d5b3f91893cfaf3e36977659/392b1/tag-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,s.kt)("h2",null,"Live demo"),(0,s.kt)(u,{components:[{id:"tag",label:"Tag"}],mdxType:"ComponentDemo"},(0,s.kt)(b,{id:"tag",knobs:{Tag:["filter","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tag--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tag--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtag--filter","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tag--default"},mdxType:"ComponentVariant"},'\n  <>\n<Tag type="red" title="Clear Filter"> Red </Tag>\n<Tag type="magenta" title="Clear Filter"> Magenta </Tag>\n<Tag type="purple" title="Clear Filter"> Purple </Tag>\n<Tag type="blue" title="Clear Filter"> Blue </Tag>\n<Tag type="cyan" title="Clear Filter"> Cyan </Tag>\n<Tag type="teal" title="Clear Filter"> Teal </Tag>\n<Tag type="green" title="Clear Filter"> Green </Tag>\n<Tag type="gray" title="Clear Filter"> Gray </Tag>\n<Tag type="cool-gray" title="Clear Filter"> Cool gray </Tag>\n<Tag type="warm-gray" title="Clear Filter"> Warm gray </Tag>\n</>\n  ')),(0,s.kt)("h2",null,"Feedback"),(0,s.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}A.isMDXComponent=!0}}]);