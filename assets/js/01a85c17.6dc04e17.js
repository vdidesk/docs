(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return i})),a.d(t,"g",(function(){return o}));a(141);var n=["en"],r=!1,s=null,c=null,l=8,i=50,o={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},148:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),s=a(137),c=a(140),l=a(56),i=a.n(l);function o({sidebar:e}){return 0===e.items.length?null:r.a.createElement("div",{className:Object(s.a)(i.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:i.a.sidebarItemTitle},e.title),r.a.createElement("ul",{className:i.a.sidebarItemList},e.items.map((e=>r.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},r.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))))))}},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(144),c=a(140),l=a(148),i=a(139);t.default=function(e){const{tags:t,sidebar:a}=e,n={};Object.keys(t).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e);n[t]=n[t]||[],n[t].push(e)}));const o=Object.entries(n).sort((([e],[t])=>e===t?0:e>t?1:-1)).map((([e,a])=>r.a.createElement("div",{key:e},r.a.createElement("h3",null,e),a.map((e=>r.a.createElement(c.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")"))),r.a.createElement("hr",null)))).filter((e=>null!=e));return r.a.createElement(s.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_list"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(l.a,{sidebar:a})),r.a.createElement("main",{className:"col col--7"},r.a.createElement("h1",null,r.a.createElement(i.a,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),r.a.createElement("div",{className:"margin-vert--lg"},o)))))}}}]);