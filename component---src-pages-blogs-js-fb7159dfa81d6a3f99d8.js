(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Wo83:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),s=a("Wbzz"),i=a("TJpk"),l=a("Efxr"),o=a("z1px"),c=a.n(o),p=a("Bl7J"),m=a("WpAo"),u=a.n(m),d=(a("y7hu"),a("ZZBs")),h=a.n(d);var f=l.a.div({hoverable:!0,pressable:!0,init:{scale:1},hover:{scale:1.05},press:{scale:.95}}),v=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement("div",{className:h.a.summary},n.a.createElement(s.Link,{to:this.props.link},n.a.createElement(f,{className:h.a.picture},n.a.createElement("img",{className:h.a.pictureImage,src:this.props.image,alt:"Icon",height:"100",width:"100"}))),n.a.createElement(s.Link,{to:this.props.link},n.a.createElement("div",{className:h.a.info},n.a.createElement("h4",null,this.props.title," | ",this.props.date),n.a.createElement("div",{className:h.a.desc,dangerouslySetInnerHTML:{__html:this.props.excerpt}}))))},r}(n.a.Component);a.d(t,"query",(function(){return k}));var E=l.a.div({closed:{y:"300px"},open:{y:"0px",transition:{duration:600}}}),g=l.a.div({hoverable:!0,pressable:!0,init:{scale:1},hover:{scale:1.2},press:{scale:1.1}}),k=(t.default=function(e){var t=e.data;return n.a.createElement(p.a,null,n.a.createElement(i.Helmet,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Gaston Hummel")),n.a.createElement(E,{className:"container",initialPose:"closed",pose:"open"},n.a.createElement("div",{className:"headerOther"},n.a.createElement(g,null,n.a.createElement(s.Link,{to:"/"},n.a.createElement("img",{src:c.a,alt:"back",height:"32",width:"32"}))),n.a.createElement("h2",{className:"center"},"Gaston's Blog")),n.a.createElement("div",{className:u.a.summaries},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return n.a.createElement(v,{key:t.id,title:t.frontmatter.title,date:t.frontmatter.date,image:t.frontmatter.svg,video:t.frontmatter.video,excerpt:t.excerpt,link:t.fields.slug})})))))},"2549001653")},"t+fG":function(e,t,a){var r=a("P8UN"),n=a("96qb"),s=a("ap2Z"),i=/"/g,l=function(e,t,a,r){var n=String(s(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(i,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},y7hu:function(e,t,a){"use strict";a("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-blogs-js-fb7159dfa81d6a3f99d8.js.map