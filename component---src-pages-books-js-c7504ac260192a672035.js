(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ZsSW:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("TJpk"),s=a("Wbzz"),o=a("Efxr"),i=a("z1px"),c=a.n(i),m=a("Bl7J"),p=a("D6Th"),u=a.n(p),h=(a("y7hu"),a("WJtl")),f=a.n(h);var d=o.a.img({hoverable:!0,pressable:!0,init:{scale:1},hover:{scale:1.05},press:{scale:.95}}),v=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement("div",{className:f.a.summary},n.a.createElement("a",{href:this.props.amazonLink,target:"_new"},n.a.createElement("div",{className:f.a.picture},n.a.createElement(d,{className:f.a.bookImage,src:this.props.image,alt:"Icon",height:"150"}))),n.a.createElement(s.Link,{to:this.props.link},n.a.createElement("div",{className:f.a.info},n.a.createElement("h4",null,this.props.title),n.a.createElement("div",{className:f.a.desc,dangerouslySetInnerHTML:{__html:this.props.excerpt}}))))},r}(n.a.Component);a.d(t,"query",(function(){return k}));var E=o.a.div({closed:{y:"300px"},open:{y:"0px",transition:{duration:600}}}),g=o.a.div({hoverable:!0,pressable:!0,init:{scale:1},hover:{scale:1.2},press:{scale:1.1}}),k=(t.default=function(e){var t=e.data;return n.a.createElement(m.a,null,n.a.createElement(l.Helmet,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Gaston Hummel")),n.a.createElement(E,{className:"container",initialPose:"closed",pose:"open"},n.a.createElement("div",{className:"headerOther"},n.a.createElement(g,null,n.a.createElement(s.Link,{to:"/"},n.a.createElement("img",{src:c.a,alt:"back",height:"32",width:"32"}))),n.a.createElement("div",null,n.a.createElement("h2",{className:"center"},"Books"),n.a.createElement("p",{className:"center"},"Here I share insights from some of my favourite books."))),n.a.createElement("div",{className:u.a.summaries},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return n.a.createElement(v,{key:t.id,title:t.frontmatter.title,date:t.frontmatter.date,image:t.frontmatter.image,amazonLink:t.frontmatter.amazonLink,excerpt:t.excerpt,link:t.fields.slug})})))))},"1417564025")},"t+fG":function(e,t,a){var r=a("P8UN"),n=a("96qb"),l=a("ap2Z"),s=/"/g,o=function(e,t,a,r){var n=String(l(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},y7hu:function(e,t,a){"use strict";a("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-books-js-c7504ac260192a672035.js.map