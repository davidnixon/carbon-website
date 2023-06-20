"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[59350],{3624:function(n,e,t){t.d(e,{Z:function(){return C}});var o=t(67294),a=t(31304),i=t.n(a),s=t(71082),l=t(67242),r=t(9953),p=t(94184),c=t.n(p);var d=n=>{let{title:e,theme:t,tabs:a=[]}=n;return o.createElement("div",{className:c()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":a.length,"PageHeader-module--dark-mode--58278":"dark"===t})},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},e)))))};var m=n=>{let{relativePagePath:e,repository:t}=n;const{site:{siteMetadata:{repository:a}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:r}=t||a,p=`${i}/edit/${r}${l}/src/pages${e}`;return i?o.createElement("div",{className:"cds--row EditLink-module--row--04499"},o.createElement("div",{className:"cds--col"},o.createElement("a",{className:"EditLink-module--link--203ae",href:p},"Edit this page on GitHub"))):null},u=t(74703),g=t(51721);let h=function(n){function e(){return n.apply(this,arguments)||this}return(0,g.Z)(e,n),e.prototype.render=function(){const{title:n,tabs:e,slug:t}=this.props,a=t.split("/").filter(Boolean).slice(-1)[0],l=e.map((n=>{const e=i()(n,{lower:!0,strict:!0}),l=e===a,r=new RegExp(`${a}/?(#.*)?$`),p=t.replace(r,e);return o.createElement("li",{key:n,className:c()({"PageTabs-module--selected-item--68107":l},"PageTabs-module--list-item--d36e2")},o.createElement(s.Link,{className:"PageTabs-module--link--2b3ff",to:`${p}`},n))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},o.createElement("nav",{"aria-label":n},o.createElement("ul",{className:"PageTabs-module--list--c4bab"},l))))))},e}(o.Component);var f=h,b=t(37296),k=t(75387),N=t(3732);var y=n=>{let{date:e}=n;const t=new Date(e);return e?o.createElement(N.X2,{className:"last-modified-date-module--row--5c9a1"},o.createElement(N.sg,null,o.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var C=n=>{let{pageContext:e,children:t,location:a,Title:p}=n;const{frontmatter:c={},relativePagePath:g,titleType:h}=e,{tabs:N,title:C,theme:w,description:v,keywords:I,date:A}=c,{interiorTheme:x}=(0,k.Z)(),{site:{pathPrefix:M}}=(0,s.useStaticQuery)("2456312558"),S=M?a.pathname.replace(M,""):a.pathname,T=N?S.split("/").filter(Boolean).slice(-1)[0]||i()(N[0],{lower:!0}):"",P=w||x;return o.createElement(r.Z,{tabs:N,homepage:!1,theme:P,pageTitle:C,pageDescription:v,pageKeywords:I,titleType:h},o.createElement(d,{title:p?o.createElement(p,null):C,label:"label",tabs:N,theme:P}),N&&o.createElement(f,{title:C,slug:S,tabs:N,currentTab:T}),o.createElement(b.Z,{padded:!0},t,o.createElement(m,{relativePagePath:g}),o.createElement(y,{date:A})),o.createElement(u.Z,{pageContext:e,location:a,slug:S,tabs:N,currentTab:T}),o.createElement(l.Z,null))}},50898:function(n,e,t){t.r(e),t.d(e,{_frontmatter:function(){return r},default:function(){return b}});var o=t(45987),a=(t(67294),t(3905)),i=t(3624),s=t(69296);const l=["components"],r={},p=n=>function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},c=p("PageDescription"),d=p("AnchorLinks"),m=p("AnchorLink"),u=p("InlineNotification"),g=p("Caption"),h={_frontmatter:r},f=i.Z;function b(n){let{components:e}=n,t=(0,o.Z)(n,l);return(0,a.kt)(f,Object.assign({},h,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(c,{mdxType:"PageDescription"},(0,a.kt)("p",null,"With two pages comprised entirely of Carbon components, let’s revisit the\nlanding page and build a couple components of our own by using Carbon icons and\ntokens.")),(0,a.kt)(d,{mdxType:"AnchorLinks"},(0,a.kt)(m,{mdxType:"AnchorLink"},"Fork, clone and branch"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Review design"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Create components"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Use components"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Add styling"),(0,a.kt)(m,{mdxType:"AnchorLink"},"Submit pull request")),(0,a.kt)("h2",null,"Preview"),(0,a.kt)("p",null,"Carbon provides a solid foundation for building web applications through its\ncolor palette, layout, spacing, type, as well as common building blocks in the\nform of components. So far, we’ve only used Carbon components to build out two\npages."),(0,a.kt)("p",null,"Next, we’re going to use Carbon assets to build application-specific components.\nWe’ll create our components with considerations for accessibility and\nresponsiveness."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://angular-step-5-carbon-tutorial.netlify.com"},"preview")," of what you’ll\nbuild (see bottom of page):"),(0,a.kt)(s.Z,{height:"400",title:"Carbon Angular Tutorial Step 4",src:"https://angular-step-5-carbon-tutorial.netlify.com",frameBorder:"no",allowtransparency:"true",allowFullScreen:"true",mdxType:"Preview"}),(0,a.kt)(u,{mdxType:"InlineNotification"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you get lint errors when you copy the code from the snippets, run\n",(0,a.kt)("inlineCode",{parentName:"p"},"ng lint --fix")," to fix them.")),(0,a.kt)("h2",null,"Fork, clone and branch"),(0,a.kt)("p",null,"This tutorial has an accompanying GitHub repository called\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial-angular"},"carbon-tutorial-angular"),"\nthat we’ll use as a starting point for each step. If you haven’t forked and\ncloned that repository yet, and haven’t added the upstream remote, go ahead and\ndo so by following the\n",(0,a.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/step-1#fork-clone-and-branch"},"step 1 instructions"),"."),(0,a.kt)("h3",null,"Branch"),(0,a.kt)("p",null,"With your repository all set up, let’s check out the branch for this tutorial\nstep’s starting point."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git fetch upstream\ngit checkout -b angular-step-4 upstream/angular-step-4\n")),(0,a.kt)(u,{mdxType:"InlineNotification"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This builds on top of step 3, but be sure to check out the upstream\nstep 4 branch because it includes the static assets required to get through this\nstep.")),(0,a.kt)("h3",null,"Build and start app"),(0,a.kt)("p",null,"Install the app’s dependencies (in case you’re starting fresh in your current\ndirectory and not continuing from the previous step):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,a.kt)("p",null,"Then, start the app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"You should see something similar to where the\n",(0,a.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/step-3"},"previous step")," left off."),(0,a.kt)("h2",null,"Review design"),(0,a.kt)("p",null,"Here’s what we’re building – an informational section that has a heading and\nthree subheadings. Each subheading has accompanying copy and a pictogram. We’ll\nassume that this informational section is used elsewhere on the site, meaning\nit’s a great opportunity to build it as a reusable component. As for naming,\nwe’ll call it an ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection")," with three ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard"),"s as children."),(0,a.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,a.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABQ0lEQVQoz01Q23KCMBD1/z+s1GkfEGgVASFXkItIEqBvp7NBax92ZnOyey67W6zFvSrhpMRaa6xNg1lJTKyCkQI/TYNFa1gpcWfM42tdY6lrGM4wliUmzrFqhWUcsXNmQp9luFcVrBBwSuF2KcCjA8RXgqEo4ITA9ZyCRRFkHPu5SXDIJEYVhuBxDMMY3DBgNxuDWUrvigbnWqPLzkj3e2SfH9DHb//HogO+gwDp/h1DkXv3xyDAMXhDGYawnMPdHoRWcDgptlIKhnN/hokzOCU9PlwKdHnucSO4J5RJgmuaYqR0RPh0SJHohk9CH516rf5wuiG9KQ2JWC8kMROmNZz475Az79KrKIlbkWPIs22RBjnHQO5Y5XtaphTX02nbJcHnDRfn4LoWruu26vvt3baPfsMtYX33mqNq29dO22KeJvwCv9gGl26eLHMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,a.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Info section layout",title:"Info section layout",src:"/static/b545e95ae155163f1ab04c2711c9cb30/3cbba/info-layout.png",srcSet:["/static/b545e95ae155163f1ab04c2711c9cb30/7fc1e/info-layout.png 288w","/static/b545e95ae155163f1ab04c2711c9cb30/a5df1/info-layout.png 576w","/static/b545e95ae155163f1ab04c2711c9cb30/3cbba/info-layout.png 1152w","/static/b545e95ae155163f1ab04c2711c9cb30/0b124/info-layout.png 1728w","/static/b545e95ae155163f1ab04c2711c9cb30/4ea69/info-layout.png 2304w","/static/b545e95ae155163f1ab04c2711c9cb30/02d7b/info-layout.png 2748w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,a.kt)(g,{mdxType:"Caption"},"Info section layout"),(0,a.kt)("h2",null,"Create components"),(0,a.kt)("p",null,"First we need files for the components, so create an ",(0,a.kt)("inlineCode",{parentName:"p"},"Info")," folder in\n",(0,a.kt)("inlineCode",{parentName:"p"},"src/components"),". Even though we’re building multiple components, their names\nall start with ",(0,a.kt)("inlineCode",{parentName:"p"},"Info"),", so it makes sense to have them share one folder in\ncomponents. Create these files:"),(0,a.kt)("h3",null,"Generate modules & components using the Angular CLI"),(0,a.kt)("p",null,"Let’s generate a new module that’ll handle our ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection"),"\ncomponents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate module info\n")),(0,a.kt)("p",null,"Now we generate our ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection")," components:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate component info/info-card --lint-fix\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate component info/info-section --lint-fix\n")),(0,a.kt)(u,{mdxType:"InlineNotification"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"--lint-fix")," flag will automatically resolve lint issues in the\nnewly generated files.")),(0,a.kt)("p",null,"Running the above commands should get you the folder structure below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"src/app/info\n└──info.module.ts\n└──info-card\n    ├──info-card.component.scss\n    ├──info-card.component.ts\n    ├──info-card.component.spec.ts\n    └──info-card.component.html\n└──info-section\n    ├──info-section.component.scss\n    ├──info-section.component.ts\n    ├──info-section.component.spec.ts\n    └──info-section.component.html\n")),(0,a.kt)("p",null,"Now let’s create a JSON file that’ll include our content to be shown in the\ncomponents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"path=src/app/info/info.json",path:"src/app/info/info.json"},'{\n  "title": "The Principles",\n  "items": [\n    {\n      "heading": "Carbon is Open",\n      "content": "It\'s a distributed effort, guided by the principles of the open-source movement. Carbon\'s users are also it\'s makers, and everyone is encouraged to contribute."\n    },\n    {\n      "heading": "Carbon is Modular",\n      "content": "Carbon\'s modularity ensures maximum flexibility in execution. It\'s components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."\n    },\n    {\n      "heading": "Carbon is Consistent",\n      "content": "Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Now we also need to tell typescript to resolve JSON files as modules when\ncompiling:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"path=src/tsconfig.app.json",path:"src/tsconfig.app.json"},'{\n    "compilerOptions": {\n        "sourceMap": true,\n        "declaration": false,\n        ...\n        "resolveJsonModule": true\n    },\n    ...\n}\n')),(0,a.kt)("h3",null,"InfoSection component"),(0,a.kt)("p",null,"Let’s create the parent component that includes the “The Principles” heading.\nThat markup currently looks like this in ",(0,a.kt)("inlineCode",{parentName:"p"},"landing-page.component.html"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/home/landing-page/landing-page.component.html",path:"src/app/home/landing-page/landing-page.component.html"},"<div ibmRow class=\"landing-page__r3\">\n  <div ibmCol [columnNumbers]=\"{'md': 4, 'lg': 4}\">\n    <h3 class=\"landing-page__label\">The Principles</h3>\n  </div>\n  <div ibmCol [columnNumbers]=\"{'md': 4, 'lg': 4}\">Carbon is Open</div>\n  <div ibmCol [columnNumbers]=\"{'md': 4, 'lg': 4}\">Carbon is Modular</div>\n  <div ibmCol [columnNumbers]=\"{'md': 4, 'lg': 4}\">Carbon is Consistent</div>\n</div>\n")),(0,a.kt)("p",null,"We want to do a few things when abstracting it to a component. Firstly, we want\nto encapsulate the component’s styles within it’s dedicated stylesheet. We don’t\nwant to include ",(0,a.kt)("inlineCode",{parentName:"p"},"landing-page__r3")," within the component template as that’s\nspecific to the landing page. In order to allow the landing page to have access\nto styling this specific instance of an ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection")," component we could pass\nthe class into the instance of the component. However, we won’t need to do any\nadditional styling from the ",(0,a.kt)("inlineCode",{parentName:"p"},"landing-page")," so we can just go ahead use the\ncomponent as is."),(0,a.kt)("p",null,"We’ll also:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add component class names like ",(0,a.kt)("inlineCode",{parentName:"li"},".info-section")," and ",(0,a.kt)("inlineCode",{parentName:"li"},".info-section__heading")),(0,a.kt)("li",{parentName:"ul"},"Semantically use ",(0,a.kt)("inlineCode",{parentName:"li"},"<section>")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"<div>")),(0,a.kt)("li",{parentName:"ul"},"Update the grid columns to match the design"),(0,a.kt)("li",{parentName:"ul"},"Update the component content to use ",(0,a.kt)("inlineCode",{parentName:"li"},"info.json")),(0,a.kt)("li",{parentName:"ul"},"Replace columns 2 - 4 with ",(0,a.kt)("inlineCode",{parentName:"li"},"InfoCard")," components"),(0,a.kt)("li",{parentName:"ul"},"Remove class styling from ",(0,a.kt)("inlineCode",{parentName:"li"},"landing-page")," component")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/home/landing-page/landing-page.component.html",path:"src/app/home/landing-page/landing-page.component.html"},"<app-info-section></app-info-section>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/info/info-section/info-section.component.html",path:"src/app/info/info-section/info-section.component.html"},"<section ibmRow class=\"info-section info-section__r1\">\n  <div ibmCol [columnNumbers]=\"{'md': 8, 'lg': 4}\">\n    <h3 class=\"info-section__heading\">The Principles</h3>\n  </div>\n  <app-info-card ibmCol [columnNumbers]=\"{'md': 4, 'lg': 4}\"> </app-info-card>\n  <app-info-card ibmCol [columnNumbers]=\"{'md': 4, 'lg': 4}\"> </app-info-card>\n  <app-info-card ibmCol [columnNumbers]=\"{'md': 4, 'lg': 4}\"> </app-info-card>\n</section>\n")),(0,a.kt)("p",null,"As you can see we’ve added instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," component. There is a few\nthings that we need to do to resolve the errors in the browser. Firstly we need\nto update ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoModule")," to be able to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"GridModule"),". At the same time we\nwill export the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," components from the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoModule")," so\nthat we can use them in the ",(0,a.kt)("inlineCode",{parentName:"p"},"HomeModule")," components (specifically\n",(0,a.kt)("inlineCode",{parentName:"p"},"landing-page"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"path=src/app/info/info.module.ts",path:"src/app/info/info.module.ts"},'import { NgModule } from "@angular/core";\n...\nimport { GridModule } from "carbon-components-angular";\n\n\n@NgModule({\n    declarations: [InfoCardComponent, InfoSectionComponent],\n    imports: [\n        CommonModule,\n        GridModule\n    ],\n    exports:  [InfoCardComponent, InfoSectionComponent]\n})\nexport class InfoModule { }\n\n')),(0,a.kt)("p",null,"We also need to import ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoModule")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"HomeModule")," otherwise we cannot use\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection")," component within ",(0,a.kt)("inlineCode",{parentName:"p"},"landing-page"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"path=src/app/home/home.module.ts",path:"src/app/home/home.module.ts"},'...\nimport { InfoModule } from "./../info/info.module";\nimport {\n    BreadcrumbModule,\n    ButtonModule,\n    GridModule,\n    TabsModule\n} from "carbon-components-angular";\n\n@NgModule({\n    declarations: [LandingPageComponent],\n    imports: [\n        CommonModule,\n    ...\n        TabsModule,\n        InfoModule\n    ]\n})\nexport class HomeModule { }\n')),(0,a.kt)("p",null,"Now we’re going to go into the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection")," component to add content from\n",(0,a.kt)("inlineCode",{parentName:"p"},"info.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"path=src/app/info/info-section/info-section.component.ts",path:"src/app/info/info-section/info-section.component.ts"},"import { Component, OnInit } from '@angular/core';\nimport * as data from '../info.json';\n\n@Component({\n  selector: 'app-info-section',\n  templateUrl: './info-section.component.html',\n  styleUrls: ['./info-section.component.scss'],\n})\nexport class InfoSectionComponent implements OnInit {\n  heading = data.title;\n  items = data.items;\n\n  constructor() {}\n\n  ngOnInit() {}\n}\n")),(0,a.kt)("p",null,"We essentially have added a ",(0,a.kt)("inlineCode",{parentName:"p"},"heading")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," variable into the model of ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSectionComponent"),", which we’ll be using later to pass content into the children components ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard"),"."),(0,a.kt)("p",null,"We’ve also added class names that are specific to this component that we’ll target in our stylesheet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss",metastring:"path=src/app/info/info-section/info-section.component.scss",path:"src/app/info/info-section/info-section.component.scss"},'@import "~carbon-components/scss/globals/scss/typography";\n@import "~carbon-components/scss/globals/scss/vendor/@carbon/type/scss/font-family";\n\n@mixin info-section-background() {\n  background-color: $ui-01;\n  position: relative;\n\n  &::before {\n    content: \'\';\n    position: absolute;\n    left: -$spacing-05;\n    top: 0;\n    right: -$spacing-05;\n    bottom: 0;\n    background: $ui-01;\n    z-index: -1;\n  }\n}\n\n.info-section {\n  @include info-section-background;\n  display: flex;\n  height: fit-content;\n\n  &.info-section__r1 {\n    padding-top: $spacing-09;\n    padding-bottom: $spacing-09;\n    height: auto;\n  }\n\n  .info-section__heading {\n    @include type-style("heading-01");\n    @include font-weight("semibold");\n  }\n}\n')),(0,a.kt)("h3",null,"InfoCard component"),(0,a.kt)("p",null,"Next up we’re going to build a component for columns 2 - 4, which currently\nlooks like\n",(0,a.kt)("inlineCode",{parentName:"p"},"<div ibmCol [columnNumbers]=\"{'md': 4, 'lg': 4}\">Carbon is Open</div>"),". We’ve\nadded the data into the parent component but we have not told ",(0,a.kt)("inlineCode",{parentName:"p"},"snfo-section"),"\ncomponent to give any data to the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," because we first need to tell\n",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," that it will have data to display. In\n",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/info/info-card/info-card.component.html"),", add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/info/info-card/info-card.component.html",path:"src/app/info/info-card/info-card.component.html"},'<div class="info-card">\n  <h4 class="info-card__heading">{{heading}}</h4>\n  <div class="info-card__body">{{content}}</div>\n</div>\n')),(0,a.kt)("p",null,"Now we’ve setup our ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," to display a heading and some content. We will\nsetup the component ",(0,a.kt)("inlineCode",{parentName:"p"},".ts")," file to accept a ",(0,a.kt)("inlineCode",{parentName:"p"},"heading")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," input to be\ndisplayed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"path=src/app/info/info-card/info-card.component.ts",path:"src/app/info/info-card/info-card.component.ts"},'import { Component, OnInit, Input } from "@angular/core";\n\n@Component({\n  selector: "app-info-card",\n  templateUrl: "./info-card.component.html",\n  styleUrls: ["./info-card.component.scss"],\n})\nexport class InfoCardComponent implements OnInit {\n  @Input() heading;\n  @Input() content;\n\n  constructor() {}\n\n  ngOnInit() {}\n}\n')),(0,a.kt)("p",null,"Finally, we’ll update ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection")," to use the new ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/info/info-section/info-section.component.html",path:"src/app/info/info-section/info-section.component.html"},'<section ibmRow class="info-section info-section__r1">\n  <div ibmCol [columnNumbers]="{\'md\': 4, \'lg\': 4}">\n    <h3 class="info-section__heading">{{heading}}</h3>\n  </div>\n  <app-info-card\n    ibmCol\n    [columnNumbers]="{\'md\': 4, \'lg\': 4}"\n    [heading]="items[0].heading"\n    [content]="items[0].content"\n  >\n  </app-info-card>\n  <app-info-card\n    ibmCol\n    [columnNumbers]="{\'md\': 4, \'lg\': 4}"\n    [heading]="items[1].heading"\n    [content]="items[1].content"\n  >\n  </app-info-card>\n  <app-info-card\n    ibmCol\n    [columnNumbers]="{\'md\': 4, \'lg\': 4}"\n    [heading]="items[2].heading"\n    [content]="items[2].content"\n  >\n  </app-info-card>\n</section>\n')),(0,a.kt)("h2",null,"Use components"),(0,a.kt)("p",null,"Next we’re going to use Carbon Icon components in our custom components. We’re\ngoing to place the icons within the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," components as children. In the\n",(0,a.kt)("inlineCode",{parentName:"p"},"InfoModule")," we will import the modules we need for the Carbon Angular Icons:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"path=src/info/info.module.ts",path:"src/info/info.module.ts"},'import { NgModule } from "@angular/core";\n...\n\nimport { PersonFavorite32Module } from "@carbon/icons-angular/lib/person--favorite/32";\nimport { Globe32Module } from "@carbon/icons-angular/lib/globe/32";\nimport { Application32Module } from "@carbon/icons-angular/lib/application/32";\n\nimport { GridModule } from "carbon-components-angular";\n\n@NgModule({\n  declarations: [InfoSectionComponent, InfoCardComponent],\n  imports: [\n    ...\n    PersonFavorite32Module,\n    Globe32Module,\n    Application32Module,\n  ],\n  exports: [InfoSectionComponent, InfoCardComponent],\n})\nexport class InfoModule {}\n')),(0,a.kt)("p",null,"Next we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"<ng-content>")," so that we can inject icons into the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard"),"\nfrom it’s parent component (",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/info/info-card/info-card.component.html",path:"src/app/info/info-card/info-card.component.html"},'<div class="info-card">\n  ...\n  <div class="info-card__body">{{content}}</div>\n  <div class="info-card__icon">\n    <ng-content></ng-content>\n  </div>\n</div>\n')),(0,a.kt)("p",null,"We also need to update ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection")," with the icon components:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/info/info-section/info-section.component.html",path:"src/app/info/info-section/info-section.component.html"},'<section ibmRow class="info-section info-section__r1">\n  <div ibmCol [columnNumbers]="{\'md\': 4, \'lg\': 4}">\n    <h3 class="info-section__heading">{{heading}}</h3>\n  </div>\n  <app-info-card\n    ibmCol\n    [columnNumbers]="{\'md\': 4, \'lg\': 4}"\n    [heading]="items[0].heading"\n    [content]="items[0].content"\n  >\n    <ibm-icon-person-favorite32></ibm-icon-person-favorite32>\n  </app-info-card>\n  <app-info-card\n    ibmCol\n    [columnNumbers]="{\'md\': 4, \'lg\': 4}"\n    [heading]="items[1].heading"\n    [content]="items[1].content"\n  >\n    <ibm-icon-application32></ibm-icon-application32>\n  </app-info-card>\n  <app-info-card\n    ibmCol\n    [columnNumbers]="{\'md\': 4, \'lg\': 4}"\n    [heading]="items[2].heading"\n    [content]="items[2].content"\n  >\n    <ibm-icon-globe32></ibm-icon-globe32>\n  </app-info-card>\n</section>\n')),(0,a.kt)("h2",null,"Add styling"),(0,a.kt)("p",null,"We currently have the components displaying the content we created. We need to\nadd more styling for Carbon breakpoints, icon alignments, as well as the\n",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," title styling."),(0,a.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,a.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABI0lEQVQoz2WRwU7DMBBE8/X8Ch/AhQtXUMUF1EhuVZo4iJCSNGm8XjsCIQaNaaoCh1F2J+vnsZ0NuwmLSw/vPYJGfHwFbG4j8huP8D4ihgkhBIgIhmHAOI6IMSaPNb3D4XDyMi+K2nbJFCcIk6B47GEeLJ5fLLquS7CmaVCWJaqqSj1htqqwLQpYa+GcS6EyUkPU1HBQVfHWvmG1Mliv1qjrOnlFUWC5XMIYkzYhYJPnMHmOp+32tDYBmYwGRTCHmZhiT+33e7Rtm44o/O8crssKpmnghgHuF/AImnXez/XJU0XgBl5w4XvcieBT9T/wPCHT8FgziGKf7pkzKuhbh/vFDr04+LO1GV+HBemz5nR/vZ+vIkyK/lWRX02IvP/jDF/5G66rES4t/xIcAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,a.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Info section spacing",title:"Info section spacing",src:"/static/2ea2681b6eeb1a14dd7c9dc91ec8724e/3cbba/info-spacing.png",srcSet:["/static/2ea2681b6eeb1a14dd7c9dc91ec8724e/7fc1e/info-spacing.png 288w","/static/2ea2681b6eeb1a14dd7c9dc91ec8724e/a5df1/info-spacing.png 576w","/static/2ea2681b6eeb1a14dd7c9dc91ec8724e/3cbba/info-spacing.png 1152w","/static/2ea2681b6eeb1a14dd7c9dc91ec8724e/0b124/info-spacing.png 1728w","/static/2ea2681b6eeb1a14dd7c9dc91ec8724e/4ea69/info-spacing.png 2304w","/static/2ea2681b6eeb1a14dd7c9dc91ec8724e/02d7b/info-spacing.png 2748w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,a.kt)("h3",null,"Layout"),(0,a.kt)("p",null,"Starting with layout, add the following to\n",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/info/info-card/info-card.component.scss"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss",metastring:"path=src/app/info/info-card/info-card.component.scss",path:"src/app/info/info-card/info-card.component.scss"},'@import "~carbon-components/scss/globals/scss/typography";\n@import "~carbon-components/scss/globals/scss/layout";\n\n.info-card {\n  display: flex;\n  flex-direction: column;\n\n  .info-card__heading {\n    @include type-style("productive-heading-03");\n  }\n\n  .info-card__body {\n    margin-top: $spacing-06;\n    flex-grow: 1;\n    @include type-style("body-long-01");\n\n    // prevent large line lengths between small and medium viewports\n    @include breakpoint-between(321px, md) {\n      max-width: 75%;\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Once you save, go ahead and resize your browser to see the responsive layout at\nthe different breakpoints. Make sure to review these color and spacing tokens.\nThere are also a few breakpoint mixins that may be new to you."),(0,a.kt)("h3",null,"Type"),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," headings have to be updated to match the specs. We need to make\nthe last word of each heading bold. Add the below custom function\n(",(0,a.kt)("inlineCode",{parentName:"p"},"createArrayFromPhrase"),") to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/app/info/info-card/info-card.component.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"path=src/app/info/info-card/info-card.component.ts",path:"src/app/info/info-card/info-card.component.ts"},'import { Component, OnInit, Input } from \'@angular/core\';\n\n@Component({\n  selector: "app-info-card",\n  templateUrl: "./info-card.component.html",\n  styleUrls: ["./info-card.component.scss"],\n})\nexport class InfoCardComponent implements OnInit {\n  @Input() heading;\n  @Input() content;\n  splitHeading;\n\n  constructor() {}\n\n  ngOnInit() {\n    // create the split title to get bold styles\n    this.splitHeading = this.createArrayFromPhrase(this.heading);\n  }\n\n  // Take in a phrase and separate the third word in an array\n  createArrayFromPhrase(phrase) {\n    const splitPhrase = phrase.split(" ");\n    const thirdWord = splitPhrase.pop();\n    return [splitPhrase.join(" "), thirdWord];\n  }\n}\n')),(0,a.kt)("p",null,"This will allow us to still accept ",(0,a.kt)("inlineCode",{parentName:"p"},"heading")," as an input to the component, but\nwe’ll need to change the template to use ",(0,a.kt)("inlineCode",{parentName:"p"},"splitHeading")," rather than ",(0,a.kt)("inlineCode",{parentName:"p"},"heading")," to\ndisplay our heading content."),(0,a.kt)("p",null,"Update the component template to use ",(0,a.kt)("inlineCode",{parentName:"p"},"splitHeading"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"path=src/app/info/info-card/info-card.component.html",path:"src/app/info/info-card/info-card.component.html"},'<div class="info-card">\n  <h4 class="info-card__heading">\n    {{splitHeading[0]}}\n    <strong>{{splitHeading[1]}}</strong>\n  </h4>\n  <div class="info-card__body">{{content}}</div>\n  <div class="info-card__icon">\n    <ng-content></ng-content>\n  </div>\n</div>\n')),(0,a.kt)("p",null,"Then, add some styling for the icons within our ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss",metastring:"path=src/app/info/info-card/info-card.component.scss",path:"src/app/info/info-card/info-card.component.scss"},'@import "~carbon-components/scss/globals/scss/typography";\n@import "~carbon-components/scss/globals/scss/layout";\n\n.info-card {\n  ... .info-card__icon {\n    margin-top: $spacing-09;\n  }\n}\n')),(0,a.kt)("p",null,"Finally, we need styles for the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard")," borders. We will use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection")," to apply styles using the children selectors. Update the\n",(0,a.kt)("inlineCode",{parentName:"p"},"InfoSection")," stylesheet to include styles targeting the ",(0,a.kt)("inlineCode",{parentName:"p"},"InfoCard"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss",metastring:"path=src/app/info/info-section/info-section.component.scss",path:"src/app/info/info-section/info-section.component.scss"},".info-section {\n  ... app-info-card {\n    margin-top: $spacing-09;\n  }\n\n  // top border in only small breakpoints to prevent overrides\n  @include breakpoint-down(md) {\n    app-info-card:not(:nth-child(2)) {\n      border-top: 1px solid $ui-03;\n      padding-top: $spacing-09;\n    }\n  }\n\n  // left border in just the 2nd column items\n  @include breakpoint(md) {\n    app-info-card:nth-child(odd) {\n      border-left: 1px solid $ui-03;\n    }\n  }\n\n  // left border in all items\n  @include breakpoint(lg) {\n    app-info-card {\n      margin-top: 0;\n      border-left: 1px solid $ui-03;\n    }\n  }\n}\n")),(0,a.kt)("h2",null,"Submit pull request"),(0,a.kt)("p",null,"We’re going to submit a pull request to verify completion of this tutorial step."),(0,a.kt)("h3",null,"Git commit and push"),(0,a.kt)("p",null,"Before we can create a pull request, stage and commit all of your changes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git add --all && git commit -m "feat(tutorial): complete step 4"\n')),(0,a.kt)("p",null,"Then, push to your repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git push origin angular-step-4\n")),(0,a.kt)(u,{mdxType:"InlineNotification"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Having issues pushing your changes?\n",(0,a.kt)("a",{parentName:"p",href:"/developing/angular-tutorial/step-1#git-commit-and-push"},"Step 1")," has\ntroubleshooting notes that may help.")),(0,a.kt)("h3",null,"Pull request (PR)"),(0,a.kt)("p",null,"Finally, visit\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial-angular"},"carbon-tutorial"),"\nto “Compare & pull request”. In doing so, make sure that you are comparing to\n",(0,a.kt)("inlineCode",{parentName:"p"},"angular-step-4")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"base: angular-step-4"),"."),(0,a.kt)(u,{mdxType:"InlineNotification"},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Your tutorial step will be automatically reviewed based on the status\nof your tests. Ensure that your tests pass when you submit your PR. Expect your\ntutorial step PRs to be reviewed by the Carbon team but not merged. We’ll close\nyour PR so we can keep the repository’s remote branches pristine and ready for\nthe next person!")))}b.isMDXComponent=!0}}]);