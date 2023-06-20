"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[36156],{3624:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(67294),s=n(31304),o=n.n(s),i=n(71082),r=n(67242),l=n(9953),c=n(94184),h=n.n(c);var p=e=>{let{title:t,theme:n,tabs:s=[]}=e;return a.createElement("div",{className:h()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":s.length,"PageHeader-module--dark-mode--58278":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var d=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:s}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:r,branch:l}=n||s,c=`${o}/edit/${l}${r}/src/pages${t}`;return o?a.createElement("div",{className:"cds--row EditLink-module--row--04499"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--203ae",href:c},"Edit this page on GitHub"))):null},u=n(74703),m=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,m.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,s=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),r=t===s,l=new RegExp(`${s}/?(#.*)?$`),c=n.replace(l,t);return a.createElement("li",{key:e,className:h()({"PageTabs-module--selected-item--68107":r},"PageTabs-module--list-item--d36e2")},a.createElement(i.Link,{className:"PageTabs-module--link--2b3ff",to:`${c}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--c4bab"},r))))))},t}(a.Component);var f=g,y=n(37296),w=n(75387),b=n(3732);var v=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(b.X2,{className:"last-modified-date-module--row--5c9a1"},a.createElement(b.sg,null,a.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:n,location:s,Title:c}=e;const{frontmatter:h={},relativePagePath:m,titleType:g}=t,{tabs:b,title:k,theme:x,description:E,keywords:A,date:D}=h,{interiorTheme:L}=(0,w.Z)(),{site:{pathPrefix:P}}=(0,i.useStaticQuery)("2456312558"),T=P?s.pathname.replace(P,""):s.pathname,N=b?T.split("/").filter(Boolean).slice(-1)[0]||o()(b[0],{lower:!0}):"",I=x||L;return a.createElement(l.Z,{tabs:b,homepage:!1,theme:I,pageTitle:k,pageDescription:E,pageKeywords:A,titleType:g},a.createElement(p,{title:c?a.createElement(c,null):k,label:"label",tabs:b,theme:I}),b&&a.createElement(f,{title:k,slug:T,tabs:b,currentTab:N}),a.createElement(y.Z,{padded:!0},n,a.createElement(d,{relativePagePath:m}),a.createElement(v,{date:D})),a.createElement(u.Z,{pageContext:t,location:s,slug:T,tabs:b,currentTab:N}),a.createElement(r.Z,null))}},82943:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return u}});var a=n(45987),s=(n(67294),n(3905)),o=n(3624);const i=["components"],r={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},c=l("PageDescription"),h=l("Caption"),p={_frontmatter:r},d=o.Z;function u(e){let{components:t}=e,n=(0,a.Z)(e,i);return(0,s.kt)(d,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(c,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Patterns are best practice solutions for how a user achieves a goal. They show\nreusable combinations of components and templates that address common user\nobjectives with sequences and flows.")),(0,s.kt)("h2",null,"How to write a pattern"),(0,s.kt)("p",null,"We’ve created guidelines to help you prepare a complete and comprehensive\npattern. There are two Markdown templates to choose from:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Pattern with a single variant"),": Use this template if your pattern has one\nprimary solution. This is the most common."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Pattern with multiple variants"),": Use this template if your content covers\nmultiple variants of the pattern.")),(0,s.kt)("p",null,"You may need to adjust the topic order to best tell the story but your pattern\nshould cover all of the topics outlined in each of these templates."),(0,s.kt)("p",null,"If you would like some assistance with the best approach for your pattern,\nplease ",(0,s.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/help/contact-us"},"reach out"),". We’d be\nhappy to work through the options with you."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Pattern name\ndescription: Explain the pattern in one or two sentences.\n---\n\n<PageDescription>\n\nExplain the pattern in one or two sentences.\n\n</PageDescription>\n\n<AnchorLinks>\n\n<AnchorLink>Overview</AnchorLink>  \n<AnchorLink>Designing with [pattern]</AnchorLink>  \n<AnchorLink>Accessibility</AnchorLink>  \n<AnchorLink>Related</AnchorLink>  \n<AnchorLink>References</AnchorLink>  \n<AnchorLink>Feedback</AnchorLink>\n\n</AnchorLinks>\n\n## Overview\n\nThis section answers the question: “What problem does this pattern solve?”\n\n- Define the use of your pattern and what it does.\n- Explain a user’s needs and how the pattern meets those needs.\n\n### Anatomy\n\nInclude an image with callouts explaining each part of the pattern. See the\n[Forms pattern](https://www.carbondesignsystem.com/patterns/forms-pattern#anatomy-of-a-form)\nfor an example.\n\n### When to use\n\nInclude a short list describing situations where this pattern could be applied.\n\nFor example, use this pattern when:\n\n- Situation 1\n- Situation 2\n\n### When not to use (optional)\n\nIf required, include a short explanation about when not to use this pattern.\n\n## Designing with [pattern]\n\nThis section explains the pattern in detail. Use a combination of written\nexplanations and visuals to tell the story.\n\nDescribe the elements, components, and content that make up the pattern.\n\nShow the pattern in context. Use visuals throughout your written commentary to\nillustrate your guidance.\n\nDifferent patterns require different visuals to best explain the behaviors and\nhierarchy. Choose the options that make the most sense for the story you are\ntelling.\n\n- Use annotated wireframes or sketches to explain the visual hierarchy of\n  components.\n- Create high-level user flows to explain the big picture.\n- Create a functional prototype if that is the best way to illustrate the\n  pattern's behavior.\n\nProvide a Sketch file with any symbols you've created in the development of this\npattern.\n\nUse the following headings as guidelines for the kind of information to include.\nDepending on the requirements of your pattern, you may choose to present these\nheadings as H2 headings or as H3 headings underneath a more general \"Designing\nwith [pattern]\" heading. See the\n[Dialogs pattern](https://www.carbondesignsystem.com/patterns/dialog-pattern/#designing-with-dialogs)\nas an example.\n\n### Types of [pattern]\n\nIf the pattern has different types or visual treatments that serve different use\ncases, cover them here and be sure to explain when to use each type.\n\nSee the\n[Empty states](https://www.carbondesignsystem.com/patterns/empty-states-pattern#when-to-use)\npattern and the\n[Notification](https://www.carbondesignsystem.com/patterns/notification-pattern#notification-types)\npattern for examples.\n\n### Behaviors\n\nDescribe behaviors, including guidance on interactions, and changes in states\nand content.\n\n### Best practices\n\nAre there any do's and don'ts specific to this variant? Include them here.\n\nFor examples of how to lay out this kind of information, see\n[Dropdown](https://www.carbondesignsystem.com/components/dropdown/usage) and\n[Modal](https://www.carbondesignsystem.com/components/modal/usage#variations).\n\n### Visual guidance\n\nCover any important topics such as alignment, image choice considerations, or\nspecial treatments in situations with no data or multiple instances of elements.\nSee the\n[Empty states pattern](https://www.carbondesignsystem.com/patterns/empty-states-pattern#visual-guidelines-for-smaller-empty-spaces)\nand the\n[Forms pattern](https://www.carbondesignsystem.com/patterns/forms-pattern#designing-a-form)\nfor examples.\n\n### Other use cases\n\nIf there are use cases that require a different solution, include those here\nwith corresponding explanations and visuals. Be sure to explain the reasons for\nusing one solution over another.\n\n## Accessibility\n\nEvaluate your pattern to ensure it meets\n[accessibility standards](notion://www.notion.so/guidelines/accessibility/overview)\nand guidelines, and provide details of compliance.\n\nFor example, “Users should be able to TAB into the input field of the search box\nto begin typing and press ENTER to run the search query.”\n\nFor examples, see the\n[Text toolbar pattern](https://www.carbondesignsystem.com/patterns/text-toolbar-pattern#accessibility)\nand the\n[Search pattern](https://www.carbondesignsystem.com/patterns/search-pattern#accessibility).\n\n## Related\n\nWhich components are used when building this pattern? Did you reference other\npatterns? List them here.\n\nIf necessary, clarify any differences between this pattern and related patterns.\n\n## References\n\nHelp designers understand your process by explaining your rationale for the way\nyou implemented the pattern. Include any research, citations, books or articles\nthat you found helpful.\n\n## Feedback\n\nHelp us improve this pattern by providing feedback, asking questions, and\nleaving any other comments on\n[GitHub](https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md).\n")),(0,s.kt)(h,{mdxType:"Caption"},"Template for patterns with one primary solution"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Pattern name (multiple variants)\ndescription: Explain the pattern in one or two sentences.\n---\n\n<PageDescription>\n\nExplain the pattern in one or two sentences.\n\n</PageDescription>\n\n<AnchorLinks>\n\n<AnchorLink>Overview</AnchorLink>  \n<AnchorLink>Designing with [pattern]</AnchorLink>  \n<AnchorLink>[Pattern] variant</AnchorLink>  \n<AnchorLink>Accessibility</AnchorLink>  \n<AnchorLink>Related</AnchorLink>  \n<AnchorLink>References</AnchorLink>  \n<AnchorLink>Feedback</AnchorLink>\n\n</AnchorLinks>\n\n## Overview\n\nInclude a paragraph or two that describes the primary use cases for the pattern\nand details about how it helps the user achieve any tasks.\n\nThe purpose of this overview section is to set context for your readers.\n\n### Anatomy\n\nIt can be helpful to show images of all of the variants in small form together.\nSee the\n[Dialogs pattern](https://www.carbondesignsystem.com/patterns/dialog-pattern#modal-variants)\nand the\n[Notifications pattern](https://www.carbondesignsystem.com/patterns/notification-pattern#notification-types)\nfor examples of this visual treatment.\n\nAlternatively, if there is one variant that includes common aspects of the\npattern that are seen across all or most variants, include an image with\ncallouts explaining each part of the pattern. See the\n[Forms pattern](https://www.carbondesignsystem.com/patterns/forms-pattern#anatomy-of-a-form)\nfor an example.\n\n### [Pattern] variants\n\nInclude a table with the variants discussed in this pattern. Include a short\ndescription about the usage of each pattern variant. The table in\n[Modal component](https://www.carbondesignsystem.com/components/modal/usage/#variants)\nis a good example of the level of detail required.\n\nThe variant names should link to the H2 headings for the variants below.\n\nAdd more columns, if needed. For example, you could add a column that includes\nshort explanations about when not to use the variant and guide the user to an\nalternative that may be more appropriate.\n\n## Designing with [pattern]\n\nThis section covers _universal_ content related to all variants, and depending\non the requirements of your pattern, may include the following H3s.\n\n### When to use\n\nIf you need to elaborate on the content included in the pattern variants table\nin the Overview, include that detail here. The\n[Notifications pattern](https://www.carbondesignsystem.com/patterns/notification-pattern#when-to-use)\nis a good example of the kind of content to include.\n\n### When not to use (optional)\n\nIf required, include a short explanation about when not to use this pattern and\nprovide alternatives.\n\n### Universal behaviors\n\nDescribe any behaviors that are universal to all pattern variants, and include\nguidance on interactions, and changes in states and content.\n\n### Best practices\n\nList out best practices and include any design considerations that help with\nmaking choices.\n\n- Do's\n- Dont's\n\n### Visual guidance\n\nCover any important topics such as alignment, image choice considerations, or\nspecial treatments in situations with no data or multiple instances of elements.\nSee\n[Empty states](https://www.carbondesignsystem.com/patterns/empty-states-pattern#visual-guidelines-for-smaller-empty-spaces)\nfor an example.\n\n### Other considerations\n\nIf there are any other considerations particular to your pattern that are\napplicable to all variants, include them here.\n\n## [Pattern] variant\n\nRename this H2 heading with the first pattern variant name, and repeat for all\nvariants within this pattern. These sections should map directly to the variant\ntable in the Overview.\n\nThis section describes the pattern variant in detail, and highlights content\nthat is _unique_ to the pattern variant. Use a combination of written\nexplanations and visuals to tell the story.\n\nThe H3s headings below are suggested that be included and adapted to suit the\nrequirements and complexity of the variant.\n\nInclude an introductory paragraph about the pattern variant to set context.\n\n### [Pattern variant] anatomy\n\nInclude an image with callouts explaining each part of the pattern variant. See\nthe\n[Forms pattern](https://www.carbondesignsystem.com/patterns/forms-pattern#anatomy-of-a-form)\nfor an example.\n\n### When to use\n\nProvide use cases and situations for when this pattern should be used.\n\n### When not to use\n\nIf required, also include a \"When not to use\" section with details about when\nnot to use and suggest alternatives.\n\n### Designing with [pattern variant]\n\nDescribe the elements, components, and content that make up the pattern.\n\nShow the variant in context. Use visuals throughout your written commentary to\nillustrate your guidance.\n\nDifferent patterns require different visuals to best explain the behaviors and\nhierarchy. Choose the options that make the most sense for the story you are\ntelling.\n\n- Use annotated wireframes or sketches to explain the visual hierarchy of\n  components.\n- Create high-level user flows to explain the big picture.\n- Create a functional prototype if that is the best way to illustrate the\n  pattern's behavior.\n\nProvide a Sketch file with any symbols you've created in the development of this\npattern.\n\n### [Pattern variant] behaviors\n\nDescribe behaviors specific to the pattern variant, including guidance on\ninteractions, and changes in states and content.\n\n### Best practices\n\nList out best practices and include any design considerations that help with\nmaking choices.\n\n- Do's\n- Dont's\n\nFor examples of how to lay out this kind of information, see the\n[Dropdown component](https://www.carbondesignsystem.com/components/dropdown/usage)\nand the\n[Modal component](https://www.carbondesignsystem.com/components/modal/usage#variations).\n\n### Visual guidance\n\nCover any important topics such as alignment, image choice considerations, or\nspecial treatments in situations with no data or multiple instances of elements.\nSee the\n[Empty states pattern](https://www.carbondesignsystem.com/patterns/empty-states-pattern#visual-guidelines-for-smaller-empty-spaces)\nand the\n[Forms pattern](https://www.carbondesignsystem.com/patterns/forms-pattern#designing-a-form)\nfor examples.\n\n### Other use cases\n\nIf there are similar use cases that may require a different solution, include\ndetails here and explain the reasons for using one solution over another.\n\nRepeat the H2 heading `Pattern variant` with the necessary H3 headings for each\nvariant within the pattern.\n\n## Accessibility\n\nEvaluate your pattern to ensure it meets\n[accessibility standards](/guidelines/accessibility/overview) and guidelines,\nand provide details of compliance.\n\nFor example, “Users should be able to TAB into the input field of the search box\nto begin typing and press ENTER to run the search query.”\n\n## Related\n\nWhich components did you use when building this pattern? Did you reference other\npatterns? List them here.\n\nIf necessary, clarify any differences between this pattern and related patterns.\n\n## References\n\nHelp designers understand your process by explaining your rationale for the way\nyou implemented the pattern. Include any research, citations, books or articles\nthat you found helpful.\n\n## Feedback\n\nHelp us improve this pattern by providing feedback, asking questions, and\nleaving any other comments on\n[GitHub](https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md).\n")),(0,s.kt)(h,{mdxType:"Caption"},"Template for patterns with multiple variants"),(0,s.kt)("h2",null,"First steps to contributing"),(0,s.kt)("p",null,"If you’ve designed a pattern that is not currently in Carbon, contributing it\nback allows others in the community to refine and use your pattern in their\nprojects."),(0,s.kt)("p",null,"Start by opening a\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new"},"Github issue"),".\nInclude a detailed description in which you:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Define your pattern and explain the rationale"),(0,s.kt)("li",{parentName:"ul"},"Include mockups and/or prototypes of any fidelity"),(0,s.kt)("li",{parentName:"ul"},"Clarify whether it uses existing components, new components, or both"),(0,s.kt)("li",{parentName:"ul"},"Include competitive and comparative analysis, and any inspirations from other\nproducts")),(0,s.kt)("p",null,"This issue will be the staging ground for the pattern contribution, and you\nshould expect the Carbon core team and the community to weigh in with\nsuggestions."),(0,s.kt)("p",null,"We encourage you to surface work in progress. If you’re not able to complete all\nof the parts yourself, someone in the community may be able to help."))}u.isMDXComponent=!0}}]);