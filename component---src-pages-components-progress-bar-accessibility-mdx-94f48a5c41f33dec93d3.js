"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[93313],{3624:function(e,a,t){t.d(a,{Z:function(){return w}});var i=t(67294),s=t(31304),r=t.n(s),n=t(71082),o=t(67242),l=t(9953),c=t(94184),d=t.n(c);var p=e=>{let{title:a,theme:t,tabs:s=[]}=e;return i.createElement("div",{className:d()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":s.length,"PageHeader-module--dark-mode--58278":"dark"===t})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))};var m=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:s}}}=(0,n.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:o,branch:l}=t||s,c=`${r}/edit/${l}${o}/src/pages${a}`;return r?i.createElement("div",{className:"cds--row EditLink-module--row--04499"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},b=t(74703),g=t(51721);let u=function(e){function a(){return e.apply(this,arguments)||this}return(0,g.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,s=t.split("/").filter(Boolean).slice(-1)[0],o=a.map((e=>{const a=r()(e,{lower:!0,strict:!0}),o=a===s,l=new RegExp(`${s}/?(#.*)?$`),c=t.replace(l,a);return i.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--68107":o},"PageTabs-module--list-item--d36e2")},i.createElement(n.Link,{className:"PageTabs-module--link--2b3ff",to:`${c}`},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--c4bab"},o))))))},a}(i.Component);var h=u,y=t(37296),f=t(75387),A=t(3732);var k=e=>{let{date:a}=e;const t=new Date(a);return a?i.createElement(A.X2,{className:"last-modified-date-module--row--5c9a1"},i.createElement(A.sg,null,i.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:a,children:t,location:s,Title:c}=e;const{frontmatter:d={},relativePagePath:g,titleType:u}=a,{tabs:A,title:w,theme:v,description:x,keywords:E,date:C}=d,{interiorTheme:N}=(0,f.Z)(),{site:{pathPrefix:T}}=(0,n.useStaticQuery)("2456312558"),B=T?s.pathname.replace(T,""):s.pathname,P=A?B.split("/").filter(Boolean).slice(-1)[0]||r()(A[0],{lower:!0}):"",z=v||N;return i.createElement(l.Z,{tabs:A,homepage:!1,theme:z,pageTitle:w,pageDescription:x,pageKeywords:E,titleType:u},i.createElement(p,{title:c?i.createElement(c,null):w,label:"label",tabs:A,theme:z}),A&&i.createElement(h,{title:w,slug:B,tabs:A,currentTab:P}),i.createElement(y.Z,{padded:!0},t,i.createElement(m,{relativePagePath:g}),i.createElement(k,{date:C})),i.createElement(b.Z,{pageContext:a,location:s,slug:B,tabs:A,currentTab:P}),i.createElement(o.Z,null))}},88773:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return y}});var i=t(45987),s=(t(67294),t(3905)),r=t(3624);const n=["components"],o={},l=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)},c=l("PageDescription"),d=l("AnchorLinks"),p=l("AnchorLink"),m=l("Row"),b=l("Column"),g=l("Caption"),u={_frontmatter:o},h=r.Z;function y(e){let{components:a}=e,t=(0,i.Z)(e,n);return(0,s.kt)(h,Object.assign({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(c,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Design annotations are needed for specific instances shown below, but for the\nstandard progress bar component, Carbon already incorporates accessibility.")),(0,s.kt)(d,{mdxType:"AnchorLinks"},(0,s.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,s.kt)(p,{mdxType:"AnchorLink"},"Design recommendations"),(0,s.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,s.kt)("h2",null,"What Carbon provides"),(0,s.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via keyboard. Carbon also incorporates other\naccessibility considerations, some of which are described below."),(0,s.kt)("h3",null,"Keyboard interaction"),(0,s.kt)("p",null,"The progress bar itself is not keyboard operable; however, when a progress bar\nis active, it may temporarily disable any dependent components. For example, if\na progress bar is being used to upload a file, the Upload button is disabled\nuntil the progress bar state changes to either error or completed."),(0,s.kt)(m,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABrElEQVQoz7WRvUtbURjGH3O1+NXkWkgUP6YWN4fSSrDFRf8BERMVHSouHdwMWBfrUsEMTgUR1Kkt+LXoam7IPfccJSgmt3Uw4d7zolC1ERU6CEW8JaERhzRYqD94eM/wnh/P4QAPhdrzDZ5eCbVrG2r3HtTu3Vxqhq6gDDgIr2aQObZh2QQpJYjoNgUp678C3jhAzy+U9/5AeeAEjwKnqB52oAzcILx6VlCYPRfE638HtXUcNc9H4POHmnz+ULPPP/a0YXD/ifet4wmvnLozx7bbssktpfQQUUXRhu6gRF3fHuqCOyWVwaMXVQHqfBywOir6L1+jy3k5vXLWlvluv7JsaiOidiJ6VlT4ZXEGH96PYmoyhPWlWe/G8lzj2uePjZvri7UXdtTjOPU4ogNIOrx9aj4FEVtbME0Tpvm1lHOuM8auGWPnQoifnOfSwgwD8XjcdfdD/tqQc45EIoFkMukyDGMiFot90nV9nnO+IITIzqbsjhCiJN+wqFAIAcuycou6riMSiUDTNPyR5GY+9yJ7KZVKIZ1OgzHm0jRNiUajCudcEUIo/yz8X/wGOjAV0eX1htsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of Upload file button in disabled state while the Uploading file progress bar is active",title:"example of Upload file button in disabled state while the Uploading file progress bar is active",src:"/static/220b7a0f13c572ab1d17e06e8156ab00/3cbba/progress-bar-accessibility-1.png",srcSet:["/static/220b7a0f13c572ab1d17e06e8156ab00/7fc1e/progress-bar-accessibility-1.png 288w","/static/220b7a0f13c572ab1d17e06e8156ab00/a5df1/progress-bar-accessibility-1.png 576w","/static/220b7a0f13c572ab1d17e06e8156ab00/3cbba/progress-bar-accessibility-1.png 1152w","/static/220b7a0f13c572ab1d17e06e8156ab00/92c65/progress-bar-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)(g,{mdxType:"Caption"},"Progress bars are not interactive, but may temporarily disable dependent components."))),(0,s.kt)("h3",null,"Labelling and states"),(0,s.kt)("p",null,"The label above the progress bar as well as the optional helper text below it\nare surfaced to assistive technologies. Changes to the helper text are provided\nprogrammatically as status updates."),(0,s.kt)(m,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB80lEQVQoz62RQWsTQRiG33ZVECEBiwTBlKaprWiaTU0VLSiCUrQGTWpMqvUHePAi1ZOHXsRaQmPIboOIepBSBXvswUs2zU5m1K1iyaFgwmZHK5VapIqiF2EkoQkeYlTwgZfvMvPM+zHAOsGdtxBom0DANYGzniSisoqoV8GQrCK8J4lIt4KR0DRGBqdxwhnDHzndmcBJV0W4IexRvBHfZG9EVv1R36T/jEfZH5HVXcBFzD1ZwCtjEZzzWuoS6ow3DbTGyq87zvuU2xf2qo+HfcrDc3JyarhHmRnyKqOzDyi+iY9YXVuuySzLqi884L6Oo63j6HeO27fLV112/+WOrf4rbkfoaQuEkPJCbFp5Z9rMErdxzu2c880NG/b0zuBIVwrH2hO2HceN/m2BfMgxsBDcMvj5MIJi39ijD32r70t9ZokftCzrEOe8o6Hw0qkYwvINBHePbYxfS7Tdj6fcd26m2vNzsy2f3qTtQnRhib+Gxd/WVq2mLsb8cyytFPFdLEuU0qxOyA9CyBql9Cul7AulrJvkcjAMo/nXD/ltw1yOYt54iWf0hUQIGc1ms1O6rt+llN5jjJWnk1IKxlhTtWFDIWMMpmlWDuq6jnQ6DU3TsC6pzGr+ivKlQqGAYrEIQkizpmlSJpMpry8xxqR/Fv4vfgLUYh7JzszYUwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:'The "uploading file" label and "48% uploaded" helper text are conveyed to assistive technology',title:'The "uploading file" label and "48% uploaded" helper text are conveyed to assistive technology',src:"/static/16e40158d13b7665ca78f16d0343da54/3cbba/progress-bar-accessibility-2.png",srcSet:["/static/16e40158d13b7665ca78f16d0343da54/7fc1e/progress-bar-accessibility-2.png 288w","/static/16e40158d13b7665ca78f16d0343da54/a5df1/progress-bar-accessibility-2.png 576w","/static/16e40158d13b7665ca78f16d0343da54/3cbba/progress-bar-accessibility-2.png 1152w","/static/16e40158d13b7665ca78f16d0343da54/92c65/progress-bar-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)(g,{mdxType:"Caption"},"The label, the progress bar’s status, and the optional helper text underneath are all surfaced to assistive technologies."))),(0,s.kt)("h2",null,"Design recommendations"),(0,s.kt)("p",null,"Design annotations are needed for the following instance."),(0,s.kt)("h3",null,"Provide status for indeterminate and errored progress bars"),(0,s.kt)("p",null,"The indeterminate progress bar does not measure progress, and so cannot\nprogrammatically inform the user when the process is complete. Also, neither\nvariant of the progress bar can programmatically indicate to assistive\ntechnologies when it is in error. Information on both outcomes must be presented\nin the help text below the progress bar."),(0,s.kt)(m,{mdxType:"Row"},(0,s.kt)(b,{colLg:8,mdxType:"Column"},(0,s.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB7ElEQVQoz7XST08TQRgG8MfAxFjQUCqtrexMCYXdFmiJmlhbiKGlmrZK6a6ycRMPgHrCPwc5qFFR46oRTDx5UWPi0fghTDyaeDCCXVh214sc6Bfw4JhdC8aEeCD6Js9hkplf3jfzAn8p27Y3QhrxztuubYGhUAjBYPCP3OzsgtHVB3PhKb5yDstxPJBzDlVVN++Fs92QHhYgPhhFar6MgcfFXyA6AsDedqB9N2YjDG+EmAd+AWBemIFdM8iyaZLp8+c2GykOFzA9dhbZWxX06vnfoBKXXLAFHYE9CLSRSxEKvSeBlVQa5qHhXSuxZKTGedP3er0ZgM/v97cBIJmjQ9A0DeKdHGL3R0j80THmdosfrA/vhJ7R90Kv9lEQK8tUOl4TxHxNEEcMKpUNQUw+43wH57xp/8zBPL18WGOzRyr0RqbErmdOhG+nc+G5dJHeGzrQeTcLvKXd4NGBnTza71tnCd8ilcgnKsJg8cbIF7G6tES+ra01l4olMjU55VMn1Fa5KrcqstJyWj6F1LUCkguNka8wwQXBo/2oswQ+UwkfXJBKWH31Gg7nsB2HWJZFnr98gbFqBRNnVIwrVVQVGbnJMgpXFQw+OYnB+TKwKMW8x1vFsixvTVxs45d1XYcsy1tm31z6P+zhvwZ/Aj+g548EBk21AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:'Two progress bars respectively in error and successful, show the help text "Invalid file format" and "File uploading succeeded"',title:'Two progress bars respectively in error and successful, show the help text "Invalid file format" and "File uploading succeeded"',src:"/static/5d0b9460f025fb0876bfce1e0335d382/3cbba/progress-bar-accessibility-3.png",srcSet:["/static/5d0b9460f025fb0876bfce1e0335d382/7fc1e/progress-bar-accessibility-3.png 288w","/static/5d0b9460f025fb0876bfce1e0335d382/a5df1/progress-bar-accessibility-3.png 576w","/static/5d0b9460f025fb0876bfce1e0335d382/3cbba/progress-bar-accessibility-3.png 1152w","/static/5d0b9460f025fb0876bfce1e0335d382/92c65/progress-bar-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,s.kt)(g,{mdxType:"Caption"},"Helper text is required when a progress bar is in error or indeterminate."))),(0,s.kt)("h2",null,"Development considerations"),(0,s.kt)("p",null,"Keep this in mind if you’re modifying Carbon or creating a custom component:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Carbon uses ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-valuemin"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-valuemax"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-valuenow"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-busy"),"\nto provide status on the progress bar. Due to inconsistent support for these\nattributes, Carbon also assigns an ",(0,s.kt)("inlineCode",{parentName:"li"},'aria-live="polite"')," to the container\nholding the helper text."),(0,s.kt)("li",{parentName:"ul"},"Carbon uses ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"aria-describedby")," to associate the label\nand helper text with the component."),(0,s.kt)("li",{parentName:"ul"},"The red error and green success SVG icons have ",(0,s.kt)("inlineCode",{parentName:"li"},'aria-hidden="true"')," set, since\nthe helper text and aria attributes provide the same information.")))}y.isMDXComponent=!0}}]);