"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[35907],{3624:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(67294),i=n(31304),l=n.n(i),r=n(71082),o=n(67242),s=n(9953),d=n(94184),p=n.n(d);var u=e=>{let{title:t,theme:n,tabs:i=[]}=e;return a.createElement("div",{className:p()("PageHeader-module--page-header--36a7c",{"PageHeader-module--with-tabs--bdb43":i.length,"PageHeader-module--dark-mode--58278":"dark"===n})},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--12bd8"},t)))))};var m=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:i}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:s}=n||i,d=`${l}/edit/${s}${o}/src/pages${t}`;return l?a.createElement("div",{className:"cds--row EditLink-module--row--04499"},a.createElement("div",{className:"cds--col"},a.createElement("a",{className:"EditLink-module--link--203ae",href:d},"Edit this page on GitHub"))):null},c=n(74703),h=n(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,i=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),o=t===i,s=new RegExp(`${i}/?(#.*)?$`),d=n.replace(s,t);return a.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--68107":o},"PageTabs-module--list-item--d36e2")},a.createElement(r.Link,{className:"PageTabs-module--link--2b3ff",to:`${d}`},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--09d7f"},a.createElement("div",{className:"cds--grid"},a.createElement("div",{className:"cds--row"},a.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},a.createElement("nav",{"aria-label":e},a.createElement("ul",{className:"PageTabs-module--list--c4bab"},o))))))},t}(a.Component);var k=g,b=n(37296),y=n(75387),f=n(3732);var x=e=>{let{date:t}=e;const n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--5c9a1"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--a203d"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:t,children:n,location:i,Title:d}=e;const{frontmatter:p={},relativePagePath:h,titleType:g}=t,{tabs:f,title:w,theme:v,description:N,keywords:T,date:z}=p,{interiorTheme:L}=(0,y.Z)(),{site:{pathPrefix:F}}=(0,r.useStaticQuery)("2456312558"),A=F?i.pathname.replace(F,""):i.pathname,C=f?A.split("/").filter(Boolean).slice(-1)[0]||l()(f[0],{lower:!0}):"",D=v||L;return a.createElement(s.Z,{tabs:f,homepage:!1,theme:D,pageTitle:w,pageDescription:N,pageKeywords:T,titleType:g},a.createElement(u,{title:d?a.createElement(d,null):w,label:"label",tabs:f,theme:D}),f&&a.createElement(k,{title:w,slug:A,tabs:f,currentTab:C}),a.createElement(b.Z,{padded:!0},n,a.createElement(m,{relativePagePath:h}),a.createElement(x,{date:z})),a.createElement(c.Z,{pageContext:t,location:i,slug:A,tabs:f,currentTab:C}),a.createElement(o.Z,null))}},89207:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return y}});var a=n(45987),i=(n(67294),n(3905)),l=n(3624);const r=["components"],o={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=s("PageDescription"),p=s("AnchorLinks"),u=s("AnchorLink"),m=s("Video"),c=s("DoDontRow"),h=s("DoDont"),g=s("Caption"),k={_frontmatter:o},b=l.Z;function y(e){let{components:t}=e,n=(0,a.Z)(e,r);return(0,i.kt)(b,Object.assign({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"PageDescription"},(0,i.kt)("p",null,"It’s fundamental to everything we design. The 2x Grid is the geometric\nfoundation of all the visual elements of IBM Design, from typography to columns,\nboxes, icons, and illustrations. It provides structure and guidance for all\ncreative decision-making.")),(0,i.kt)(p,{mdxType:"AnchorLinks"},(0,i.kt)(u,{mdxType:"AnchorLink"},"Mini unit"),(0,i.kt)(u,{mdxType:"AnchorLink"},"2x Grid fundamentals"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Grid behaviors"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Grid influencers"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Sizing scale")),(0,i.kt)(m,{title:"2x Grid Overview",vimeoId:"281513522",mdxType:"Video"}),(0,i.kt)("h2",null,"Mini unit"),(0,i.kt)("p",null,"The basic unit of 2x Grid geometry is the 8-pixel square mini unit. Multiples of\nmini units compose the dimensions of columns, rows, boxes, along with their\nmargins and padding. The mini unit adapts to your content while maintaining a\nconsistent visual rhythm."),(0,i.kt)("p",null,"At breakpoint boundaries, mini units divide the screen into a fixed master grid,\nand multiples of mini units map to fluid grid column widths and row heights.\nFixed boxes are sized in mini units, as are the fixed dimension of hybrid boxes."),(0,i.kt)("p",null,"Margin and padding are always applied in fixed mini unit multiples. Boxes are\nsized by applying a sizing scale based on either fixed mini units or fluid\ncolumn widths, along with a core set of aspect ratios."),(0,i.kt)(m,{title:"Mini unit",vimeoId:"292608020",mdxType:"Video"}),(0,i.kt)("h2",null,"2x Grid fundamentals"),(0,i.kt)("p",null,"The core concept of the 2x Grid is to divide or multiply by two, forming a\nvisual rhythm. Fluid grids are built by division, whereas fixed grids are built\nwith multiplication. On breakpoint boundaries, these sizes match. Margins and\npadding are applied consistently in both cases."),(0,i.kt)(p,{small:!0,mdxType:"AnchorLinks"},(0,i.kt)(u,{mdxType:"AnchorLink"},"Columns and rows"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Margins"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Padding"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Gutters"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Breakpoints")),(0,i.kt)("h3",null,"Columns and Rows"),(0,i.kt)("p",null,"Columns and rows create key lines that are essential for visual rhythm,\nespecially for typography. Construct columns by either dividing a space into a\nfluid grid, or by tiling fixed boxes in multiples."),(0,i.kt)("img",{src:"/0302ac75ce345781aa42298affd6184c/Layout_overview_Columns-rows.svg",alt:"Columns and rows"}),(0,i.kt)("h4",null,"Fluid grid"),(0,i.kt)("p",null,"A fluid grid divides space by twos. This division is immediately evident in the\n2x column structure. Within a breakpoint, the column count is constant, and unit\nsize scales with screen size. Choose a column count by starting with one, then\ndivide by two as needed."),(0,i.kt)("h4",null,"Fixed grid"),(0,i.kt)("p",null,"A fixed grid starts with a fixed unit size from the sizing scale, then tiles and\nwraps as needed, like text. To employ the 2x concept, once you’ve determined the\noriginal box size that you want to use, you can multiply it by two and so forth\nto create a layout."),(0,i.kt)("p",null,"When tiling fixed boxes, the column count is not known in advance, but a grid\nemerges visually due to the use of a consistent sizing scale. On breakpoint\nboundaries, fixed sizing scales match column sizes."),(0,i.kt)("h4",null,"Hybrid grid"),(0,i.kt)("p",null,"Hybrid grids are also frequent in practice, and hybrid boxes have properties of\nboth."),(0,i.kt)("h4",null,"Decision tree"),(0,i.kt)("p",null,"For dense content, use mini units for further alignment and spatial guidance."),(0,i.kt)("img",{src:"/5eadef91f662465ebd2f81ff4063997c/Layout_overview_Columns-rows-light-dense.svg",alt:"Columns and rows for dense content"}),(0,i.kt)("h3",null,"Margins"),(0,i.kt)("p",null,"The margins at the outer edge of the grid are always a fixed size within a\nbreakpoint, even when columns are fluid. See ",(0,i.kt)("a",{parentName:"p",href:"#breakpoints"},"breakpoints")," for a\ntable of margin sizes."),(0,i.kt)("img",{src:"/540521dec8b3851fd1866474884730c6/Layout_overview_Margins.svg",alt:"Margins"}),(0,i.kt)("h3",null,"Padding"),(0,i.kt)("p",null,"Padding is always a fixed multiple of mini units: 16 pixels at all standard\nbreakpoints. Always align type to the edge of box padding. Note, some design\ntools add padding to text boxes by default; check text box padding and remove it\nif necessary."),(0,i.kt)("img",{src:"/8893a694995a6d89a523161f3983ef37/Layout_overview_Paddings.svg",alt:"Padding"}),(0,i.kt)(c,{mdxType:"DoDontRow"},(0,i.kt)(h,{type:"do",caption:"Always place type against the padding.",mdxType:"DoDont"},(0,i.kt)("img",{src:"/7d8b9a6ee3d649916fea33f50813b3cd/Layout_overview_Paddings-do.svg",alt:"Always place type against the padding."})),(0,i.kt)(h,{type:"dont",caption:"Never place type on the padding.",mdxType:"DoDont"},(0,i.kt)("img",{src:"/1a0dd4fb8f00b13e376a284400765163/Layout_overview_Paddings-dont.svg",alt:"Never place type on the padding."}))),(0,i.kt)("h3",null,"Gutters"),(0,i.kt)("p",null,"Grid gutters can be absent as shown above, or present as shown below. The margin\naround each grid box matches its padding, for a total gutter of 32 pixels. For\nclosely related content, consider a gutterless grid. Apply gutters when content\nwarrants more separation."),(0,i.kt)("img",{src:"/82636d76c3a3a8e785b85febb0596375/Layout_overview_Gutters.svg",alt:"Gutters"}),(0,i.kt)("h3",null,"Breakpoints"),(0,i.kt)("p",null,"Use this set of standard breakpoints to maintain layout integrity across screen\nsizes. For best results, test designs and code at each of these standard\nbreakpoints."),(0,i.kt)("p",null,"Create custom breakpoints to accommodate special needs, by writing your own\nmedia queries and CSS rules. Refer to the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/grid"},"grid code package"),"\nfor more information."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Breakpoint"),(0,i.kt)("th",{parentName:"tr",align:null},"Value (px/rem)"),(0,i.kt)("th",{parentName:"tr",align:null},"Columns"),(0,i.kt)("th",{parentName:"tr",align:null},"Size (%)"),(0,i.kt)("th",{parentName:"tr",align:null},"Size"),(0,i.kt)("th",{parentName:"tr",align:null},"Padding"),(0,i.kt)("th",{parentName:"tr",align:null},"Margin"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Small"),(0,i.kt)("td",{parentName:"tr",align:null},"320 / 20"),(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"25%"),(0,i.kt)("td",{parentName:"tr",align:null},"80 px"),(0,i.kt)("td",{parentName:"tr",align:null},"16 px"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Medium"),(0,i.kt)("td",{parentName:"tr",align:null},"672 / 42"),(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"12.5%"),(0,i.kt)("td",{parentName:"tr",align:null},"80 px"),(0,i.kt)("td",{parentName:"tr",align:null},"16 px"),(0,i.kt)("td",{parentName:"tr",align:null},"16 px")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Large"),(0,i.kt)("td",{parentName:"tr",align:null},"1056 / 66"),(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"6.25%"),(0,i.kt)("td",{parentName:"tr",align:null},"64 px"),(0,i.kt)("td",{parentName:"tr",align:null},"16 px"),(0,i.kt)("td",{parentName:"tr",align:null},"16 px")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,i.kt)("td",{parentName:"tr",align:null},"1312 / 82"),(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"6.25%"),(0,i.kt)("td",{parentName:"tr",align:null},"80 px"),(0,i.kt)("td",{parentName:"tr",align:null},"16 px"),(0,i.kt)("td",{parentName:"tr",align:null},"16 px")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Max"),(0,i.kt)("td",{parentName:"tr",align:null},"1584 / 99"),(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"6.25%"),(0,i.kt)("td",{parentName:"tr",align:null},"96 px"),(0,i.kt)("td",{parentName:"tr",align:null},"16 px"),(0,i.kt)("td",{parentName:"tr",align:null},"24 px")))),(0,i.kt)("p",null,"For best results, test designs and code at each of these standard breakpoints."),(0,i.kt)(m,{title:"Breakpoints",vimeoId:"292015984",mdxType:"Video"}),(0,i.kt)("h2",null,"Grid behaviors"),(0,i.kt)("p",null,"In user interfaces, screen size is dictated by the device and the user’s chosen\nwindow size. We may know content in advance, or the content may be dynamic."),(0,i.kt)("p",null,"Carefully consider the user’s goal for their screen space, particularly when\ndisplaying dynamic content. If a user’s goal is to see more items, scale column\ncount by tiling fixed boxes. If a user wants to see more content within each\nitem, scale boxes and use fixed column counts."),(0,i.kt)(p,{small:!0,mdxType:"AnchorLinks"},(0,i.kt)(u,{mdxType:"AnchorLink"},"Fluid columns"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Fixed boxes"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Hybrid boxes"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Key lines")),(0,i.kt)("h3",null,"Fluid columns"),(0,i.kt)("p",null,"Fluid column structures are ideal for editorial content, dashboards, images,\nvideo, data visualizations, etc. In each case, scaling the size of things is\nmore useful to the user than scaling the number of visible things. In a fluid\ngrid, we divide available width in half to create columns, repeating as\nnecessary."),(0,i.kt)("p",null,"At each breakpoint, column count is fixed and column width is a multiple of mini\nunits. Row height is a multiple of column size, following recommended aspect\nratios. Margin and padding are fixed multiples of mini units. In between\nbreakpoints, actual column width is a percentage of the grid area, not a mini\nunit multiple. Content scales fluidly."),(0,i.kt)(m,{title:"Fluid grid",vimeoId:"292024522",mdxType:"Video"}),(0,i.kt)("h3",null,"Fixed boxes"),(0,i.kt)("p",null,"A grid can be formed with fixed boxes by arranging tiles in an inline block,\nicons in toolbars, etc. Column count grows with browser width. Tiles wrap to the\nnext line, or are sometimes truncated with an overflow scroll."),(0,i.kt)(m,{title:"Fixed boxes",vimeoId:"292024183",mdxType:"Video"}),(0,i.kt)("p",null,"First choose a base size from the ",(0,i.kt)("a",{parentName:"p",href:"#sizing-scale"},"sizing scale"),", then build up\neach box in multiples of the base size, following recommended\n",(0,i.kt)("a",{parentName:"p",href:"#aspect-ratio"},"aspect ratios"),". A grid emerges when each tile uses a multiple of\na consistent base size. Following this method ensures consistency of tile sizes,\neven across products."),(0,i.kt)("h3",null,"Hybrid boxes"),(0,i.kt)("p",null,"Hybrid boxes have different scaling rules in each dimension, so they do not use\naspect ratios. When a user would resize the browser expecting content to scale\nin one dimension but not the other, use hybrid boxes."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"#sizing-scale"},"sizing scale")," to size a fixed dimension. Use\ncolumn-width multiples to size a grid-fluid dimension. Aspect ratios do not\napply."),(0,i.kt)(m,{title:"Hybrid boxes",vimeoId:"292025098",mdxType:"Video"}),(0,i.kt)("p",null,"Here are some common UI behaviors:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Examples"),(0,i.kt)("th",{parentName:"tr",align:null},"Width"),(0,i.kt)("th",{parentName:"tr",align:null},"Height"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"Fluid (Grid)"),(0,i.kt)("td",{parentName:"tr",align:null},"Fixed (m.u.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Toolbar"),(0,i.kt)("td",{parentName:"tr",align:null},"Fluid (Grid)"),(0,i.kt)("td",{parentName:"tr",align:null},"Fixed (m.u.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Side Panel"),(0,i.kt)("td",{parentName:"tr",align:null},"Fixed"),(0,i.kt)("td",{parentName:"tr",align:null},"Fluid (Grid)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Menu"),(0,i.kt)("td",{parentName:"tr",align:null},"Fixed"),(0,i.kt)("td",{parentName:"tr",align:null},"Fluid (Content)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Content"),(0,i.kt)("td",{parentName:"tr",align:null},"Fixed"),(0,i.kt)("td",{parentName:"tr",align:null},"Fluid (Content)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data Table"),(0,i.kt)("td",{parentName:"tr",align:null},"Fluid (Grid)"),(0,i.kt)("td",{parentName:"tr",align:null},"Fluid (Content)")))),(0,i.kt)("h3",null,"Key lines"),(0,i.kt)("p",null,"Regardless of how your grid is built, ensure the overall layout has visible key\nlines: vertical and horizontal lines on which multiple objects align."),(0,i.kt)("p",null,"Horizontal and vertical alignment are equally critical. When present, the eye\ncan follow content more easily, increasing the perception of visual harmony."),(0,i.kt)("h2",null,"Grid influencers"),(0,i.kt)("p",null,"Within a design system, layouts often follow a common structure, especially with\nregard to navigation. This section covers which of these UI patterns you’ll\nneed, where users will expect to see them on a page, and how they’ll affect the\ncontent that lives within the responsive grid."),(0,i.kt)(p,{small:!0,mdxType:"AnchorLinks"},(0,i.kt)(u,{mdxType:"AnchorLink"},"Screen regions"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Panel behavior")),(0,i.kt)("h3",null,"Screen regions"),(0,i.kt)("p",null,"In a UI layout, users expect to find certain types of content in certain areas.\nWe call these areas ",(0,i.kt)("em",{parentName:"p"},"screen regions"),". It is especially important for these zones\nto be consistent across devices and adapt across breakpoints.\n",(0,i.kt)("a",{parentName:"p",href:"/patterns/global-header"},"Learn more on the Global header pattern page"),"."),(0,i.kt)("img",{src:"/ecee1075b9bbac41880288d8e193bbe4/Layout_overview_Screen-regions-1.svg",alt:"Shell Illustration"}),(0,i.kt)(g,{mdxType:"Caption"},"1. Header 2. Global sidenav 3. Local sidenav"),(0,i.kt)("img",{src:"/3c6685912818f0b3b9769acb8219da8b/Layout_overview_Screen-regions-2.svg",alt:"Dropdown Illustration"}),(0,i.kt)(g,{mdxType:"Caption"},"4. Dropdown menu 5. Content 6. Footer"),(0,i.kt)("img",{src:"/1b59fa17b91916311a3f8bddeefcfef7/Layout_overview_Screen-regions-3.svg",alt:"Dialog Illustration"}),(0,i.kt)(g,{mdxType:"Caption"},"7. Dialog"),(0,i.kt)("h3",null,"Panel behavior"),(0,i.kt)("p",null,"All vertical panels expand to fill the full height of the browser window."),(0,i.kt)("h4",null,"Flexible panels"),(0,i.kt)("p",null,"The flexible panels allow for both collapsed and expanded states. The expanded\nstate of a flexible Panel is a fixed width that cannot be adjusted by the user.\nThe collapsed Flexible Panel expands when the user hovers over any portion of\nit. When flexible panels expand, they either condense both the content and the\ngrid or they push content beyond the edge of the browser."),(0,i.kt)(m,{title:"Flexible panels",vimeoId:"292975726",mdxType:"Video"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h4",null,"Fixed panels"),(0,i.kt)("p",null,"Fixed panels maintain a static width, cannot be collapsed, and also exist\noutside of the responsive grid."),(0,i.kt)(m,{title:"Fixed panels",vimeoId:"292988292",mdxType:"Video"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h4",null,"Floating panels"),(0,i.kt)("p",null,"This panel style floats above the primary content area and does not affect the\nresponsive grid. Floating panels conceal any UI elements below them and must be\ndismissible by the user. Inline menus, dropdowns and tooltips also float."),(0,i.kt)(m,{title:"Floating panels",vimeoId:"292977039",mdxType:"Video"}),(0,i.kt)("h2",null,"Sizing scale"),(0,i.kt)("p",null,"We provide a sizing scale for both fixed and fluid sizes. Use it to size content\nas well as negative space. Like a type scale, the sizing scale constrains the\nrange of sizes to improve consistency and rhythm, while still allowing a wide\nrange of sizes. Spacing tokens are used to apply these relationships\nconsistently across UIs."),(0,i.kt)(p,{small:!0,mdxType:"AnchorLinks"},(0,i.kt)(u,{mdxType:"AnchorLink"},"Fixed base unit"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Fluid base unit"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Scaling multiple"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Aspect ratio"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Vertical rhythm"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Components")),(0,i.kt)("h3",null,"Fixed base unit"),(0,i.kt)("p",null,"Use this fixed sizing scale, comprised of select mini unit multiples, when\nsizing icons, tiling boxes, and applying vertical margin space."),(0,i.kt)("img",{src:"/9b93a7180ed8f492aca4a79c510f5ef8/Layout_overview_Fixed-base-unit.svg",alt:"Fixed base unit"}),(0,i.kt)("p",null,"Choose a size to use as your fixed base unit. Also see the\n",(0,i.kt)("a",{parentName:"p",href:"#breakpoints"},"breakpoints table"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Sizing scale (px)"),(0,i.kt)("th",{parentName:"tr",align:null},"Mini units"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"1x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"16"),(0,i.kt)("td",{parentName:"tr",align:null},"2x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"24"),(0,i.kt)("td",{parentName:"tr",align:null},"3x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"32"),(0,i.kt)("td",{parentName:"tr",align:null},"4x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"48"),(0,i.kt)("td",{parentName:"tr",align:null},"6x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"64"),(0,i.kt)("td",{parentName:"tr",align:null},"8x")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"80"),(0,i.kt)("td",{parentName:"tr",align:null},"10x")))),(0,i.kt)("h3",null,"Fluid base unit"),(0,i.kt)("p",null,"For fluid grids, the column width is the base unit. Just as a box can span\nmultiple columns, its height is a multiple of column width. Use cases are\nleading section in a webpage, divided section for editorial content, modals,\netc. Check out the ",(0,i.kt)("a",{parentName:"p",href:"#breakpoints"},"breakpoints table")," for pixel sizings."),(0,i.kt)("img",{src:"/bc32290b3061521b11cf6296a028a9d9/Layout_overview_Fluid-base-unit.svg",alt:"Fluid base unit"}),(0,i.kt)("h3",null,"Scaling multiple"),(0,i.kt)("p",null,"After determining your base size, multiply it as needed for each use. For box\nsizing, apply an ",(0,i.kt)("a",{parentName:"p",href:"#aspect-ratio"},"aspect ratio")," too."),(0,i.kt)(m,{title:"Scaling multiple",vimeoId:"292026497",mdxType:"Video"}),(0,i.kt)("h3",null,"Aspect ratio"),(0,i.kt)("p",null,"When sizing boxes, constrain dimensions to one of the aspect ratios shown below\nwhenever possible. Doing so will heighten the perception of unity between\nproducts."),(0,i.kt)("p",null,"Choose an aspect ratio from the table, then multiply the base unit in each\ndimension as needed to set width and height, maintaining the ratio in either\nportrait or landscape."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Aspect ratios"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1:1, 2:1, 2:3, 3:2, 4:3, 16:9"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"For example, to size a fluid box with a 2:1 landscape aspect ratio, you could\nspan 4 columns in width and 2 column-widths of height. To size a fixed box with\nthe same aspect ratio, you could start with an 80 pixel base unit, then multiply\nit by 4 in width and 2 in height, for a fixed box size of 320 by 160."),(0,i.kt)("img",{src:"/8bc822065abf171bc399ad25870d147e/Layout_overview_Aspect-ratio.svg",alt:"aspect ratio"}),(0,i.kt)("h3",null,"Vertical rhythm"),(0,i.kt)("p",null,"Use the fixed sizing scale to set vertical spacing between sections, by adding\nit to the top or bottom margin of a box:"),(0,i.kt)(m,{title:"Vertical rhythm",vimeoId:"292028388",mdxType:"Video"}),(0,i.kt)(c,{mdxType:"DoDontRow"},(0,i.kt)(h,{type:"do",caption:"Mini unit is the guide when needed. Spacer snaps to the text box and does not necessarily need to snap to the mini unit.",mdxType:"DoDont"},(0,i.kt)("img",{src:"/ac39caec3b35832a83c12e5679444025/Layout_overview_Visual-rhythm-do.svg",alt:"Mini unit is the guide when needed. Spacer snaps to the text box and does not necessarily need to snap to the mini unit."})),(0,i.kt)(h,{type:"dont",caption:"In Figma, always use “Auto width” in the Text panel to ensure the text box is fitting with the content. Spacer snaps to the text box.",mdxType:"DoDont"},(0,i.kt)("img",{src:"/de96bb05e5a37a5f8fb6453a50e34f22/Layout_overview_Visual-rhythm-dont.svg",alt:"Always use “Auto” in alignment to ensure the text box is fitting with the content. Spacer snaps to the text box."}))),(0,i.kt)("h3",null,"Components"),(0,i.kt)("p",null,"Components can be sized like other boxes: either fixed or fluid, and often\nhybrid, with fixed height and fluid width. When interior space within a\ncomponent is cramped, use the minor sizing scale:"),(0,i.kt)("p",null,"When multiple components adhere to the same scale, grid relationships naturally\nemerge. For example, vertically aligning form fields such as checkboxes and\nradio buttons produces a grid effect when interior spacing is consistent."),(0,i.kt)(m,{title:"Components",vimeoId:"292028752",mdxType:"Video"}))}y.isMDXComponent=!0}}]);