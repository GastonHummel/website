(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AYps:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("Wbzz"),i=a("Efxr"),o=a("z1px"),c=a.n(o),l=a("Bl7J"),p=a("WpAo"),m=a.n(p),u=(a("y7hu"),a("9M33")),d=a.n(u);var h=i.a.div({hoverable:!0,pressable:!0,init:{scale:1},hover:{scale:1.05},press:{scale:.95}}),v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:d.a.summary},r.a.createElement(s.Link,{to:this.props.link},r.a.createElement(h,{className:d.a.picture},r.a.createElement("img",{className:d.a.pictureImage,src:this.props.image,alt:"Icon",height:"100",width:"100"}))),r.a.createElement("div",{className:d.a.info},r.a.createElement("h4",null,this.props.title," | ",this.props.date),r.a.createElement("div",{className:d.a.desc,dangerouslySetInnerHTML:{__html:this.props.description}}),r.a.createElement("div",{className:d.a.btns},r.a.createElement(s.Link,{to:this.props.link},r.a.createElement("button",{className:d.a.button},"Watch")))))},n}(r.a.Component);a.d(t,"query",(function(){return g}));var f=i.a.div({closed:{y:"300px"},open:{y:"0px",transition:{duration:600}}}),E=i.a.div({hoverable:!0,pressable:!0,init:{scale:1},hover:{scale:1.2},press:{scale:1.1}}),g=(t.default=function(e){var t=e.data;return r.a.createElement(l.a,null,r.a.createElement(f,{className:"container",initialPose:"closed",pose:"open"},r.a.createElement("div",{className:"headerOther"},r.a.createElement(E,null,r.a.createElement(s.Link,{to:"/"},r.a.createElement("img",{src:c.a,alt:"back",height:"32",width:"32"}))),r.a.createElement("h1",{className:"center"},"Gaston's Speeches")),r.a.createElement("div",{className:m.a.summaries},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement(v,{key:t.id,title:t.frontmatter.title,date:t.frontmatter.date,image:t.frontmatter.svg,video:t.frontmatter.video,description:t.html,link:t.fields.slug})})))))},"1684103817")},"t+fG":function(e,t,a){var n=a("P8UN"),r=a("96qb"),s=a("ap2Z"),i=/"/g,o=function(e,t,a,n){var r=String(s(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},y7hu:function(e,t,a){"use strict";a("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-speeches-js-626325eb18c4312223ba.js.map