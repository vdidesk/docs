(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{132:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),u=a(144),o=a(25),s=a(140),l=a(23),m=a(9);var d=function(){const e=Object(l.useHistory)(),t=Object(l.useLocation)(),{siteConfig:{baseUrl:a}}=Object(r.default)();return{searchValue:m.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}},h=a(181),i=a(205),f=a(160),p=a(206),_=a(183),b=a(184),g=a(146);function O(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,((e,a)=>Object.prototype.hasOwnProperty.call(t,a)?String(t[a]):e))}var j=a(77),E=a.n(j);function w({searchResult:{document:e,type:t,page:a,tokens:n,metadata:r}}){const u=0===t,o=2===t,l=(u?e.b:a.b).slice(),m=o?e.s:e.t;return u||l.push(a.t),c.a.createElement("article",{className:E.a.searchResultItem},c.a.createElement("h2",null,c.a.createElement(s.a,{to:e.u+(e.h||""),dangerouslySetInnerHTML:{__html:o?Object(f.a)(m,n):Object(p.a)(m,Object(_.a)(r,"t"),n,100)}})),l.length>0&&c.a.createElement("p",{className:E.a.searchResultItemPath},l.join(" \u203a ")),o&&c.a.createElement("p",{className:E.a.searchResultItemSummary,dangerouslySetInnerHTML:{__html:Object(p.a)(e.t,Object(_.a)(r,"t"),n,100)}}))}t.default=function(){const{siteConfig:{baseUrl:e}}=Object(r.default)(),{searchValue:t,updateSearchPath:a}=d(),[s,l]=Object(n.useState)(t),[m,f]=Object(n.useState)(),[p,_]=Object(n.useState)(),j=Object(n.useMemo)((()=>s?O(g.g.search_results_for,{keyword:s}):g.g.search_the_documentation),[s]);Object(n.useEffect)((()=>{a(s),m&&(s?m(s,(e=>{_(e)})):_(void 0))}),[s,m]);const S=Object(n.useCallback)((e=>{l(e.target.value)}),[]);return Object(n.useEffect)((()=>{t&&t!==s&&l(t)}),[t]),Object(n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await Object(h.a)(e);f((()=>Object(i.a)(t,a,100)))}()}),[e]),c.a.createElement(u.a,{title:j},c.a.createElement(o.a,null,c.a.createElement("meta",{property:"robots",content:"noindex, follow"})),c.a.createElement("div",{className:"container margin-vert--lg"},c.a.createElement("h1",null,j),c.a.createElement("form",null,c.a.createElement("input",{type:"search",name:"q",className:E.a.searchQueryInput,"aria-label":"Search",onChange:S,value:s,autoComplete:"off",autoFocus:!0})),!m&&s&&c.a.createElement("div",null,c.a.createElement(b.a,null)),p&&(p.length>0?c.a.createElement("p",null,O(1===p.length?g.g.count_documents_found:g.g.count_documents_found_plural,{count:p.length})):c.a.createElement("p",null,g.g.no_documents_were_found)),c.a.createElement("section",null,p&&p.map((e=>c.a.createElement(w,{key:e.document.i,searchResult:e}))))))}},142:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return u})),a.d(t,"f",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"g",(function(){return l}));a(141);var n=["en"],c=!1,r=null,u=null,o=8,s=50,l={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}}}]);