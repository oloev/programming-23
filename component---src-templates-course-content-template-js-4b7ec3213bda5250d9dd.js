(self.webpackChunkohjelmoinnin_mooc=self.webpackChunkohjelmoinnin_mooc||[]).push([[280],{21530:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var o=n(92137),r=n(41788),a=n(87757),l=n.n(a),i=n(67294),c=n(50535),u=n(24555),m=n.n(u),s=n(25444),p=n(35414),d=n(99914),f=n(80583),h=n(64663),g=n(13578),w=c.default.footer.withConfig({displayName:"CoursePageFooter__CoursePageFooterWrapper",componentId:"sc-1wp274x-0"})(["background-color:white;color:black;padding:3rem;"]),C=c.default.div.withConfig({displayName:"CoursePageFooter__CoursePageFooterContent",componentId:"sc-1wp274x-1"})(["display:flex;justify-content:center;max-width:960px;margin:0 auto;"]),v=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return i.createElement(w,null,i.createElement(C,null,i.createElement(h.Z,{style:{width:"400px",fontSize:"0.8rem",margin:0}})))},t}(i.Component),y=(0,g.Z)(v),E=n(52311),b=n(27611),k=n(54021),_=n(86810),x=n(47065),Z=n(77606),P=n(23168),I=n(50238),S=(0,c.default)(s.Link).withConfig({displayName:"EndOfSubSection__StyledLink",componentId:"ees48a-0"})(["color:black;text-decoration:none;padding:1rem;border-radius:0.25rem;margin:1rem 0;display:inline-block;width:100%;border-radius:10px;transition:background-color 0.2s;&:hover{text-decoration:none;color:black;background-color:#eeeeee;}"]),N=(0,c.default)(Z.G).withConfig({displayName:"EndOfSubSection__StyledIcon",componentId:"ees48a-1"})(["vertical-align:middle;margin-right:1rem;margin-left:0.5rem;color:var(--color);font-size:1.5em;"]),T=c.default.div.withConfig({displayName:"EndOfSubSection__ButtonWrapper",componentId:"ees48a-2"})(["display:flex;align-items:center;"]),F=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this;return i.createElement(b.Z.Consumer,null,(function(t){var n=t.current.frontmatter.path,o=n,r=(0,x.Nk)(n,"/",2);-1!==r&&(o=n.substr(0,r));var a=t.all.filter((function(e){return e.path.startsWith(o+"/")})).sort((function(e,t){return(e=e.path.toLowerCase())>(t=t.path.toLowerCase())?1:t>e?-1:0})),l=null;a.forEach((function(e,t){e.path===n&&(l=t)}));var c=null;return null!==l&&l!==a.length-1&&(c=a[l+1]),i.createElement("div",null,e.props.t("endReached")," ",c&&i.createElement(i.Fragment,null,e.props.t("continueToNext")," ",i.createElement(T,null,i.createElement(S,{to:c.path},i.createElement(N,{icon:P.eFW}),l+2,". ",c.title))),i.createElement("p",null,e.props.t("rememberToCheckPoints")))}))},t}(i.Component),L=(0,I.Z)("common")((0,g.Z)(F));function O(e){if("undefined"!=typeof window)try{var t=document.querySelector(e);if(!t)return void console.warn("Could not find the element to scroll to.");t.scrollIntoView()}catch(n){console.warn("Could not scroll element into view",n)}}var W=(0,c.default)(Z.G).withConfig({displayName:"CourseContentTemplate__StyledIcon",componentId:"sc-1m06ow0-0"})(["margin-right:0.25rem;font-size:1em;"]),A=c.default.article.withConfig({displayName:"CourseContentTemplate__ContentWrapper",componentId:"sc-1m06ow0-1"})([""]),j=(0,c.default)(s.Link).withConfig({displayName:"CourseContentTemplate__UpLink",componentId:"sc-1m06ow0-2"})(["color:#332c2cb3 !important;font-weight:bold;margin-bottom:1rem !important;display:block;:hover{text-decoration:none;color:#805050b3 !important;}"]),z=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,o.Z)(l().mark((function e(){var t,n,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!=typeof window&&window.location.hash&&(n=window.location.hash,setTimeout((function(){O(n)}),100),setTimeout((function(){O(n)}),500),setTimeout((function(){O(n)}),1e3),setTimeout((function(){O(n)}),2e3)),(0,E.Pl)()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,E.gb)();case 5:o=e.sent,void 0===(null==o||null===(t=o.extra_fields)||void 0===t?void 0:t.research)&&(0,s.navigate)("/missing-info");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this.props.data,t=e.page,n=t.frontmatter,o=t.htmlAst,r=e.allPages.edges.map((function(e){var t;return null===(t=e.node)||void 0===t?void 0:t.frontmatter})),a=(0,f.Z)(),l=new(m())({createElement:i.createElement,components:a}).Compiler,c=(0,x.fm)(""+n.path.split(/\//g)[1].replace(/-/g," ")),u="/"+n.path.split(/\//g)[1],s=e.page.fileAbsolutePath.substring(e.page.fileAbsolutePath.lastIndexOf("/data/"),e.page.fileAbsolutePath.length);return i.createElement(i.Fragment,null,i.createElement(p.q,{title:n.title}),i.createElement(b.Z.Provider,{value:{all:r,current:{frontmatter:n,filePath:s}}},i.createElement(k.Oo,null,i.createElement(d.Z,null,i.createElement(i.Fragment,null,i.createElement(_.Z,null,i.createElement(A,null,i.createElement(j,{to:u},i.createElement(W,{icon:P.M3_}),c),i.createElement("h1",null,n.title),l(o),i.createElement(L,null))),i.createElement(y,null))))))},t}(i.Component);z.contextType=k.ZP}}]);
//# sourceMappingURL=component---src-templates-course-content-template-js-4b7ec3213bda5250d9dd.js.map