(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var n=s(9),c=s.n(n),a=s(10),i=s(7),r=s(2),l=s(4),o=s.n(l),d=s(1),j=(s(16),s(17),s(18),s(3)),m=s.n(j),u=s(0),b=function(e){var t=e.posts,s=e.handleSelectPost,n=e.selectedPost;return Object(u.jsxs)("div",{"data-cy":"PostsList",children:[Object(u.jsx)("p",{className:"title",children:"Posts:"}),Object(u.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"has-background-link-light",children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"Post",children:[Object(u.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(u.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:m()("button","is-link",{"is-light":(null===n||void 0===n?void 0:n.id)!==e.id}),onClick:function(){return s(e)},children:(null===n||void 0===n?void 0:n.id)===e.id?"Close":"Open"})})]})}))})]})]})},h=(s(20),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.selectedPostId,s=e.handleAddComment,n=Object(d.useState)(""),c=Object(r.a)(n,2),a=c[0],l=c[1],j=Object(d.useState)(!1),b=Object(r.a)(j,2),h=b[0],O=b[1],x=Object(d.useState)(""),f=Object(r.a)(x,2),p=f[0],N=f[1],v=Object(d.useState)(!1),y=Object(r.a)(v,2),g=y[0],C=y[1],S=Object(d.useState)(""),w=Object(r.a)(S,2),k=w[0],P=w[1],E=Object(d.useState)(!1),A=Object(r.a)(E,2),T=A[0],I=A[1],F=Object(d.useState)(!1),D=Object(r.a)(F,2),L=D[0],U=D[1],B=function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.trim().length?O(!1):O(!0),p.trim().length?C(!1):C(!0),k.length?I(!1):I(!0),!(a.trim().length&&p.trim().length&&k.trim().length)){e.next=18;break}return e.prev=5,U(!0),e.next=9,s(t,a,p,k);case 9:P(""),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(5),new Error;case 15:return e.prev=15,U(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[5,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:B,children:[Object(u.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:m()("input",{"is-danger":h}),value:a,onChange:function(e){l(e.target.value),O(!1)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-user"})}),h&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),h&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"email",name:"email",id:"comment-author-email",placeholder:"email@test.com",value:p,className:m()("input",{"is-danger":g}),onChange:function(e){N(e.target.value),O(!1)}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-envelope"})}),g&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),g&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:m()("textarea",{"is-danger":T}),onChange:function(e){P(e.target.value),I(!1)}})}),T&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(u.jsxs)("div",{className:"field is-grouped",children:[Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"submit",className:m()("button","is-link",{"is-loading":L}),children:"Add"})}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){l(""),O(!1),N(""),C(!1),P(""),I(!1)},children:"Clear"})})]})]})},x=function(e){var t=e.selectedPost,s=e.isCommentError,n=e.isCommentsLoading,c=e.comments,a=e.handleDelete,i=e.canWriteAComment,r=e.setCanWriteAComment,l=e.handleAddComment;return Object(u.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(u.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(u.jsxs)("div",{className:"block",children:[Object(u.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(t.id,": ").concat(t.title)}),Object(u.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(u.jsxs)("div",{className:"block",children:[n&&!s&&Object(u.jsx)(h,{}),s&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),0===(null===c||void 0===c?void 0:c.length)&&Object(u.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),c&&!n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"title is-4",children:"Comments:"}),c.map((function(e){return Object(u.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(u.jsxs)("div",{className:"message-header",children:[Object(u.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(u.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return a(e.id)},children:"delete button"})]}),Object(u.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),!i&&Object(u.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return r(!0)},children:"Write a comment"})]}),i&&Object(u.jsx)(O,{selectedPostId:t.id,handleAddComment:l})]})})},f=function(e){var t=e.users,s=e.handleSelectUser,n=e.selectedUser,c=Object(d.useState)(!1),a=Object(r.a)(c,2),i=a[0],l=a[1];return Object(u.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown is-active",children:[Object(u.jsx)("div",{className:"dropdown-trigger",children:Object(u.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return l(!i)},children:[Object(u.jsx)("span",{children:n?n.name:"Choose a user"}),Object(u.jsx)("span",{className:"icon is-small",children:Object(u.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),i&&Object(u.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(u.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(u.jsx)("a",{href:"#user-".concat(e.id),className:"dropdown-item",onClick:function(t){s(t,e),l(!1)},children:e.name},e.id)}))})})]})},p="https://mate.academy/students-api";function N(e){return new Promise((function(t){setTimeout(t,e)}))}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return s&&(n.body=JSON.stringify(s),n.headers={"Content-Type":"application/json; charset=UTF-8"}),N(300).then((function(){return fetch(p+e,n)})).then((function(e){return e.json()}))}var y=function(e){return v(e)},g=function(e,t){return v(e,"POST",t)},C=function(e){return v(e,"DELETE")},S=function(e,t,s,n){return g("/comments",{postId:e,name:t,email:s,body:n})},w=function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),s=t[0],n=t[1],c=Object(d.useState)(null),l=Object(r.a)(c,2),j=l[0],O=l[1],p=Object(d.useState)([]),N=Object(r.a)(p,2),v=N[0],g=N[1],w=Object(d.useState)(null),k=Object(r.a)(w,2),P=k[0],E=k[1],A=Object(d.useState)(!1),T=Object(r.a)(A,2),I=T[0],F=T[1],D=Object(d.useState)(!1),L=Object(r.a)(D,2),U=L[0],B=L[1],W=Object(d.useState)(!1),M=Object(r.a)(W,2),_=M[0],J=M[1],q=Object(d.useState)([]),G=Object(r.a)(q,2),Y=G[0],z=G[1],H=Object(d.useState)(!1),K=Object(r.a)(H,2),Q=K[0],R=K[1],V=Object(d.useState)(!1),X=Object(r.a)(V,2),Z=X[0],$=X[1];Object(d.useEffect)((function(){y("/users").then(n)}),[]);var ee=function(e){F(!0),function(e){return y("/posts?userId=".concat(e))}(e).then((function(e){g(e),B(!1)})).catch((function(){return B(!0)})).finally((function(){return F(!1)}))},te=function(e){J(!0),function(e){return y("/comments?postId=".concat(e))}(e).then((function(e){z(e),R(!1)})).catch((function(){return R(!0)})).finally((function(){F(!1),J(!1)}))},se=function(){var e=Object(i.a)(o.a.mark((function e(t,s,n,c){var i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t,s,n,c);case 2:i=e.sent,r=Y.filter((function(e){return(null===P||void 0===P?void 0:P.id)===e.postId})),z([].concat(Object(a.a)(r),[i]));case 5:case"end":return e.stop()}}),e)})));return function(t,s,n,c){return e.apply(this,arguments)}}();return Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"tile is-ancestor",children:[Object(u.jsx)("div",{className:"tile is-parent",children:Object(u.jsxs)("div",{className:"tile is-child box is-success",children:[Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(f,{users:s,handleSelectUser:function(e,t){e.preventDefault(),ee(t.id),O(t),E(null)},selectedUser:j})}),Object(u.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!j&&Object(u.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),I&&Object(u.jsx)(h,{}),U&&!I&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),!v.length&&j&&!I&&!U&&Object(u.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),v.length>0&&!I&&Object(u.jsx)(b,{handleSelectPost:function(e){E((function(t){return(null===t||void 0===t?void 0:t.id)===e.id?null:e})),te(e.id),$(!1)},posts:v,selectedPost:P})]})]})}),Object(u.jsx)("div",{"data-cy":"Sidebar",className:m()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":j}),children:Object(u.jsx)("div",{className:"tile is-child box is-success ",children:P&&Object(u.jsx)(x,{selectedPost:P,comments:Y,isCommentError:Q,isCommentsLoading:_,handleAddComment:se,handleDelete:function(e){var t=Y.filter((function(t){return t.id!==e}));z(t),function(e){C("/comments/".concat(e))}(e)},canWriteAComment:Z,setCanWriteAComment:$})})})]})})})};c.a.render(Object(u.jsx)(w,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5759560c.chunk.js.map