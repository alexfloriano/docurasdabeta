(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"A7z+":function(e,t,n){"use strict";n.r(t),n.d(t,"queryImage",(function(){return p}));var a=n("t8Zj"),o=n("q1tI"),c=n.n(o),r=n("y6RJ"),s=(n("5x/H"),n("7oih")),l=n("EYWl"),i=n("ZO1O"),u=n("0NyX"),d=n("CN8t"),p="2362263908";t.default=function(e){e.data;var t=Object(o.useState)([]),n=t[0],p=t[1];return console.log(n),Object(o.useEffect)((function(){r.a.firestore().collection("produtos").get().then((function(e){e.forEach((function(e){console.log(e.id,"=>",e.data());var t=e.data();p((function(e){return[].concat(Object(a.a)(e),[t])}))}))})).catch((function(e){console.log("Error getting documents",e)}))}),[]),c.a.createElement(s.a,null,c.a.createElement(l.a,{pageTitle:"Linha Gourmet",description:"Front end developer, developing apps and web pages",keywords:"React, Node, Gatsby, front end, developer, API"}),c.a.createElement("section",{className:"section is-size-4-desktop is-size-5-touch"},c.a.createElement(u.a,null,"Produtos"),c.a.createElement("p",{className:"title  has-text-light has-text-centered "}," Doces sob encomenda, consulte valores "),c.a.createElement("div",{className:"column is-half "},n.map((function(e){return c.a.createElement(i.a,{key:e.nomedoproduto,produto:e})})))),c.a.createElement(d.a,null))}}}]);
//# sourceMappingURL=component---src-pages-produtos-js-ce9e34b2cfb7c2fc3224.js.map