(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),u=n(1),o=n.n(u),s=n(5),i=n(2),m=(n(12),function(){var e;return o.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(fetch("https://jsonplaceholder.typicode.com/posts"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})}),p=function(){var e;return o.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(fetch("https://jsonplaceholder.typicode.com/users"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},d=function(){var e;return o.a.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(fetch("https://jsonplaceholder.typicode.com/comments"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}})},f=function(e){var t=e.name,n=e.email,a=e.address;return r.a.createElement("div",{className:"author"},r.a.createElement("h4",null,"Name: ".concat(t)),r.a.createElement("p",null,"Email: ".concat(n)),r.a.createElement("p",null,"City: ".concat(a.city)))},E=function(e){var t=e.name,n=e.email,a=e.body;return r.a.createElement("div",null,r.a.createElement("h3",null,"Comment: ".concat(t)),r.a.createElement("p",null,a),r.a.createElement("p",null,n))},b=function(e){var t=e.list;return r.a.createElement("div",{className:"comment__list"},t.map(function(e){return r.a.createElement(E,Object.assign({key:e.id},e))}))},v=function(e){var t=e.bolderText,n=e.id,c=e.title,l=e.body,u=e.user,o=e.comments,s=function(e){return t?e.split(new RegExp("(".concat(t,")"),"gi")).map(function(e,n){return r.a.createElement(a.Fragment,{key:"".concat(e+n)},e.toLowerCase()===t.toLowerCase()?r.a.createElement("span",null,e):e)}):e};return r.a.createElement("section",null,r.a.createElement(r.a.Fragment,null,r.a.createElement("article",null,r.a.createElement("p",{className:"post__id"},"Post ".concat(n)),r.a.createElement("h2",null,s(c)),r.a.createElement("p",null,s(l))),r.a.createElement(f,u)),r.a.createElement(b,{list:o}))},h=function(e){var t=e.posts,n=e.result;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(v,Object.assign({bolderText:n,key:e.id},e))}))},y=function(){var e,t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],l=n[1],u=Object(a.useState)([]),f=Object(i.a)(u,2),E=f[0],b=f[1],v=Object(a.useState)(!1),y=Object(i.a)(v,2),j=y[0],w=y[1],O=Object(a.useState)(!1),x=Object(i.a)(O,2),g=x[0],C=x[1],k=Object(a.useState)(""),L=Object(i.a)(k,2),S=L[0],N=L[1],T=function(e,t){var n;return function(){clearTimeout(n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];n=setTimeout.apply(void 0,[e,t].concat(r))}}(function(e){return b(c.filter(function(t){return(t.title+t.body).toLowerCase().includes(e)}))},500);return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Dynamic list of posts"),j?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"search",placeholder:"Search",onChange:function(e){var t=e.target.value.toLowerCase().slice(0,37);N(t),T(t)},value:S}),r.a.createElement(h,{posts:E,searchResultValue:S})):r.a.createElement("button",{type:"button",onClick:function(){var t,n,a,r,c;return o.a.async(function(u){for(;;)switch(u.prev=u.next){case 0:return C(!0),u.prev=1,u.next=4,o.a.awrap(Promise.all([m(),p(),d()]));case 4:t=u.sent,n=Object(i.a)(t,3),a=n[0],r=n[1],c=n[2],e=a.map(function(e){return Object(s.a)({},e,{user:r.find(function(t){return e.userId===t.id}),comments:c.filter(function(t){return e.id===t.postId})})}),l(e),b(e),C(!1),w(!0),u.next=19;break;case 16:u.prev=16,u.t0=u.catch(1),C(!1);case 19:case"end":return u.stop()}},null,null,[[1,16]])},disabled:g},g?"Load...":"Load"))};l.a.render(r.a.createElement(y,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.a7cbe888.chunk.js.map