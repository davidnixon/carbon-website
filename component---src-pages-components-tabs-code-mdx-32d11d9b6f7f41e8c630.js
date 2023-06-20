"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[78829],{3624:function(e,a,t){t.d(a,{Z:function(){return v}});var n=t(67294),o=t(31304),s=t.n(o),l=t(71082),r=t(67242),b=t(9953),c=t(94184),i=t.n(c);var m=e=>{let{title:a,theme:t,tabs:o=[]}=e;return n.createElement("div",{className:i()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":o.length,"PageHeader-module--dark-mode--58278":"dark"===t})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},a)))))};var d=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:o}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:b}=t||o,c=`${s}/edit/${b}${r}/src/pages${a}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--04499"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},T=t(74703),p=t(51721);let u=function(e){function a(){return e.apply(this,arguments)||this}return(0,p.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,o=t.split("/").filter(Boolean).slice(-1)[0],r=a.map((e=>{const a=s()(e,{lower:!0,strict:!0}),r=a===o,b=new RegExp(`${o}/?(#.*)?$`),c=t.replace(b,a);return n.createElement("li",{key:e,className:i()({"PageTabs-module--selected-item--68107":r},"PageTabs-module--list-item--d36e2")},n.createElement(l.Link,{className:"PageTabs-module--link--2b3ff",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--c4bab"},r))))))},a}(n.Component);var y=u,g=t(37296),h=t(75387),P=t(3732);var f=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(P.X2,{className:"last-modified-date-module--row--5c9a1"},n.createElement(P.sg,null,n.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:a,children:t,location:o,Title:c}=e;const{frontmatter:i={},relativePagePath:p,titleType:u}=a,{tabs:P,title:v,theme:k,description:x,keywords:w,date:C}=i,{interiorTheme:E}=(0,h.Z)(),{site:{pathPrefix:L}}=(0,l.useStaticQuery)("2456312558"),I=L?o.pathname.replace(L,""):o.pathname,N=P?I.split("/").filter(Boolean).slice(-1)[0]||s()(P[0],{lower:!0}):"",M=k||E;return n.createElement(b.Z,{tabs:P,homepage:!1,theme:M,pageTitle:v,pageDescription:x,pageKeywords:w,titleType:u},n.createElement(m,{title:c?n.createElement(c,null):v,label:"label",tabs:P,theme:M}),P&&n.createElement(y,{title:v,slug:I,tabs:P,currentTab:N}),n.createElement(g.Z,{padded:!0},t,n.createElement(d,{relativePagePath:p}),n.createElement(f,{date:C})),n.createElement(T.Z,{pageContext:a,location:o,slug:I,tabs:P,currentTab:N}),n.createElement(r.Z,null))}},14499:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return d},default:function(){return x}});var n=t(45987),o=(t(67294),t(3905)),s=t(3624),l=t(39099),r=t(59658),b=t(95977),c=t(29427),i=t(77913);const m=["components"],d={},T=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",a)},p=T("PageDescription"),u=T("Row"),y=T("Column"),g=T("ResourceCard"),h=T("MdxIcon"),P=T("ComponentDemo"),f=T("ComponentVariant"),v={_frontmatter:d},k=s.Z;function x(e){let{components:a}=e,t=(0,n.Z)(e,m);return(0,o.kt)(k,Object.assign({},v,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the tabs component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(y,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(g,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-tabs--default",mdxType:"ResourceCard"},(0,o.kt)(h,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(y,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(g,{subTitle:"Web Components",href:"https://web-components.carbondesignsystem.com/?path=/story/components-tabs--default",mdxType:"ResourceCard"},(0,o.kt)(h,{name:"webcomponents",mdxType:"MdxIcon"}))),(0,o.kt)(y,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(g,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-tabs--basic",mdxType:"ResourceCard"},(0,o.kt)(h,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(y,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(g,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvtabs--default",mdxType:"ResourceCard"},(0,o.kt)(h,{name:"vue",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(P,{scope:{Bat:r.cz,Bee:r.gv,Corn:b.gf,Home:c.SK,Monster:i.Qd,Tabs:l.Tabs,TabList:l.TabList,Tab:l.Tab,TabPanels:l.TabPanels,TabPanel:l.TabPanel},components:[{id:"tabs",label:"Tabs"},{id:"tabs--with-icons",label:"Tabs with icon"},{id:"icon-only",label:"Icon only"}],mdxType:"ComponentDemo"},(0,o.kt)(f,{id:"tabs",knobs:{TabList:["contained"],Tab:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tabs--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tabs--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtabs--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tabs--default"},mdxType:"ComponentVariant"},"\n<div style={{ width: '75%' }}>\n  <Tabs>\n    <TabList aria-label=\"List of tabs\">\n      <Tab>Tab Label 1</Tab>\n      <Tab>Tab Label 2</Tab>\n      <Tab disabled>Tab Label 3</Tab>\n      <Tab>\n          Tab Label 4 with a very long long title\n      </Tab>\n      <Tab>Tab Label 5</Tab>\n    </TabList>\n    <TabPanels>\n      <TabPanel>Tab Panel 1</TabPanel>\n      <TabPanel>\n        Tab Panel 2 <Button>Example button</Button>\n      </TabPanel>\n      <TabPanel>Tab Panel 3</TabPanel>\n      <TabPanel>Tab Panel 4</TabPanel>\n      <TabPanel>Tab Panel 5</TabPanel>\n    </TabPanels>\n  </Tabs>\n</div>\n  "),(0,o.kt)(f,{id:"tabs--with-icons",knobs:{TabList:["contained"],Tab:["type","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tabs--with-icons",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tabs--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtabs--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tabs--default"},mdxType:"ComponentVariant"},'\n<div style={{ width: \'75%\' }}>\n  <Tabs>\n    <TabList activation="manual" aria-label="List of tabs">\n      <Tab renderIcon={Bee}>Tab label 1</Tab>\n      <Tab renderIcon={Monster}>Tab label 2</Tab>\n      <Tab renderIcon={Corn}>\n        Tab label 3\n      </Tab>\n      <Tab title="Tab label 4" renderIcon={Bat} disabled>\n         Tab label 4\n       </Tab>\n       <Tab renderIcon={Home}>Tab label 5</Tab>\n     </TabList>\n     <TabPanels>\n       <TabPanel>Tab Panel 1</TabPanel>\n       <TabPanel>\n         <form style={{ margin: \'2em\' }}>\n           <legend className=\'cds--label\'>Validation example</legend>\n           <Checkbox id="cb" labelText="Accept privacy policy" />\n           <Button\n             style={{ marginTop: \'1rem\', marginBottom: \'1rem\' }}\n             type="submit">\n             Submit\n           </Button>\n           <TextInput\n             type="text"\n             labelText="Text input label"\n             helperText="Optional help text"\n             id="text-input-1"\n           />\n         </form>\n       </TabPanel>\n       <TabPanel>Tab Panel 3</TabPanel>\n       <TabPanel>Tab Panel 4</TabPanel>\n       <TabPanel>Tab Panel 5</TabPanel>\n     </TabPanels>\n   </Tabs>\n</div>\n  '),(0,o.kt)(f,{id:"icon-only",knobs:{TabList:["contained"],IconTab:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-tabs--icon-only",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-tabs--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvtabs--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-tabs--default"},mdxType:"ComponentVariant"},'\n<div style={{ width: \'75%\' }}>\n  <Tabs>\n    <TabList iconSize="default" aria-label="List of tabs">\n      <IconTab label="Monster">\n        <Monster aria-label="Monster" />\n      </IconTab>\n      <IconTab label="Corn">\n        <Corn aria-label="Corn" />\n      </IconTab>\n      <IconTab label="Bat" disabled>\n        <Bat aria-label="Bat" />\n      </IconTab>\n    </TabList>\n    <TabPanels>\n      <TabPanel>Tab Panel 1</TabPanel>\n      <TabPanel>Tab Panel 2</TabPanel>\n      <TabPanel>Tab Panel 3</TabPanel>\n    </TabPanels>\n  </Tabs>\n</div>\n  ')))}x.isMDXComponent=!0}}]);