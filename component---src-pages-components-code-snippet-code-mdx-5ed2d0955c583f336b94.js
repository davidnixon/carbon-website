"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[59258],{3624:function(e,t,n){n.d(t,{Z:function(){return C}});var s=n(67294),o=n(31304),a=n.n(o),c=n(71082),r=n(67242),i=n(9953),l=n(94184),p=n.n(l);var d=e=>{let{title:t,theme:n,tabs:o=[]}=e;return s.createElement("div",{className:p()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":o.length,"PageHeader-module--dark-mode--58278":"dark"===n})},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12"},s.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:o}}}=(0,c.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:r,branch:i}=n||o,l=`${a}/edit/${i}${r}/src/pages${t}`;return a?s.createElement("div",{className:"cds--row EditLink-module--row--04499"},s.createElement("div",{className:"cds--col"},s.createElement("a",{className:"EditLink-module--link--203ae",href:l},"Edit this page on GitHub"))):null},u=n(74703),b=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,o=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=a()(e,{lower:!0,strict:!0}),r=t===o,i=new RegExp(`${o}/?(#.*)?$`),l=n.replace(i,t);return s.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--68107":r},"PageTabs-module--list-item--d36e2")},s.createElement(c.Link,{className:"PageTabs-module--link--2b3ff",to:`${l}`},e))}));return s.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},s.createElement("nav",{"aria-label":e},s.createElement("ul",{className:"PageTabs-module--list--c4bab"},r))))))},t}(s.Component);var y=g,h=n(37296),k=n(75387),f=n(3732);var v=e=>{let{date:t}=e;const n=new Date(t);return t?s.createElement(f.X2,{className:"last-modified-date-module--row--5c9a1"},s.createElement(f.sg,null,s.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var C=e=>{let{pageContext:t,children:n,location:o,Title:l}=e;const{frontmatter:p={},relativePagePath:b,titleType:g}=t,{tabs:f,title:C,theme:E,description:T,keywords:x,date:w}=p,{interiorTheme:P}=(0,k.Z)(),{site:{pathPrefix:S}}=(0,c.useStaticQuery)("2456312558"),N=S?o.pathname.replace(S,""):o.pathname,L=f?N.split("/").filter(Boolean).slice(-1)[0]||a()(f[0],{lower:!0}):"",M=E||P;return s.createElement(i.Z,{tabs:f,homepage:!1,theme:M,pageTitle:C,pageDescription:T,pageKeywords:x,titleType:g},s.createElement(d,{title:l?s.createElement(l,null):C,label:"label",tabs:f,theme:M}),f&&s.createElement(y,{title:C,slug:N,tabs:f,currentTab:L}),s.createElement(h.Z,{padded:!0},n,s.createElement(m,{relativePagePath:b}),s.createElement(v,{date:w})),s.createElement(u.Z,{pageContext:t,location:o,slug:N,tabs:f,currentTab:L}),s.createElement(r.Z,null))}},45959:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return f}});var s=n(45987),o=(n(67294),n(3905)),a=n(3624),c=n(41652);const r=["components"],i={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},p=l("PageDescription"),d=l("Row"),m=l("Column"),u=l("ResourceCard"),b=l("MdxIcon"),g=l("ComponentDemo"),y=l("ComponentVariant"),h={_frontmatter:i},k=a.Z;function f(e){let{components:t}=e,n=(0,s.Z)(e,r);return(0,o.kt)(k,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the code snippet component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(d,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--inline",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"react",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Web Components",href:"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--single-line",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"webcomponents",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"angular",mdxType:"MdxIcon"}))),(0,o.kt)(m,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default",mdxType:"ResourceCard"},(0,o.kt)(b,{name:"vue",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(g,{scope:{codeSnippet:c.o,codeSnippetSingle:c.L},components:[{id:"code-snippet-single",label:"Single line"},{id:"code-snippet-multi",label:"Multi line"},{id:"code-snippet-inline",label:"Inline"}],mdxType:"ComponentDemo"},(0,o.kt)(y,{id:"code-snippet-single",knobs:{CodeSnippet:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--singleline","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--single-line",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default"},mdxType:"ComponentVariant"},`\n    <CodeSnippet type="single">\n    ${c.L}\n    </CodeSnippet>\n`),(0,o.kt)(y,{id:"code-snippet-multi",knobs:{CodeSnippet:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--multiline","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--multi-line",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default"},mdxType:"ComponentVariant"},`\n      <CodeSnippet type="multi">\n      {\`${c.o}\`}\n      </CodeSnippet>\n  `),(0,o.kt)(y,{id:"code-snippet-inline",knobs:{CodeSnippet:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--inline","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--inline",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default"},mdxType:"ComponentVariant"},`\n    <CodeSnippet type="inline">${c.L}</CodeSnippet>\n`)),(0,o.kt)("h2",null,"Sample data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const codeSnippet = `"scripts": {\n  "build": "lerna run build --stream --prefix --npm-client yarn",\n  "ci-check": "carbon-cli ci-check",\n  "clean": "lerna run clean && lerna clean --yes && rimraf node_modules",\n  "doctoc": "doctoc --title \'## Table of Contents\'",\n  "format": "prettier --write \'**/*.{js,md,scss,ts}\' \'!**/{build,es,lib,storybook,ts,umd}/**\'",\n  "format:diff": "prettier --list-different \'**/*.{js,md,scss,ts}\' \'!**/{build,es,lib,storybook,ts,umd}/**\' \'!packages/components/**\'",\n  "lint": "eslint actions config codemods packages",\n  "lint:styles": "stylelint \'**/*.{css,scss}\' --report-needless-disables --report-invalid-scope-disables",\n  "sync": "carbon-cli sync",\n  "test": "cross-env BABEL_ENV=test jest",\n  "test:e2e": "cross-env BABEL_ENV=test jest --testPathPattern=e2e --testPathIgnorePatterns=\'examples,/packages/components/,/packages/react/\'"\n},\n"resolutions": {\n  "react": "~16.9.0",\n  "react-dom": "~16.9.0",\n  "react-is": "~16.9.0",\n  "react-test-renderer": "~16.9.0"\n}`;\n\nconst codeSnippetSingle = `node -v`;\n')))}f.isMDXComponent=!0}}]);