(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},31:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),s=a(37),l=a(11),i=a(17),m=(a(27),a(30),a(31),a(2)),u=a(3),h=a(5),p=a(4),d=a(6),b=a(18),f=a(38),E=a(39),j=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,Object.assign({},this.props,{className:"nav-link",activeClassName:"active"}))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"renderTags",value:function(){return this.props.data.tags.map(function(e){return r.a.createElement("code",{key:e,className:"p-1 rounded-lg mr-2 tag"},e)})}},{key:"render",value:function(){var e={background:"url(./media/".concat(this.props.data.slug,".png)"),backgroundSize:"cover"},t=this.props.data.url;return r.a.createElement("div",{className:"d-flex portfolio-item mb-4"},r.a.createElement("a",{href:t},r.a.createElement("div",{className:"thumb-container mr-3"},r.a.createElement("div",{className:"img-container rounded-lg",style:e}))),r.a.createElement("div",null,r.a.createElement("h6",{className:"badge badge-custom"},this.props.data.publication),r.a.createElement("a",{href:t},r.a.createElement("h6",null,this.props.data.title)),r.a.createElement("p",null,this.props.data.description),r.a.createElement("div",{className:"mb-4"},this.renderTags())))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"fetchItems",value:function(){var e=this;fetch("https://mysterious-sands-79444.herokuapp.com/api/search/stories").then(function(e){return e.json()}).then(function(t){return e.setState({data:t.data})})}},{key:"renderItems",value:function(){return this.state.data.map(function(e){return r.a.createElement(v,{key:e.slug,data:e})})}},{key:"render",value:function(){return this.state.data?r.a.createElement("div",{className:"portfolio"},this.renderItems()):r.a.createElement("div",{className:"portfolio"},r.a.createElement("p",null,"loading..."))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchItems()}},{key:"fetchItems",value:function(){var e=this;fetch("https://mysterious-sands-79444.herokuapp.com/api/search/about").then(function(e){return e.json()}).then(function(t){return e.setState({data:t.data[0].text})})}},{key:"renderItems",value:function(){return console.log(this.state.data),this.state.data.map(function(e,t){return r.a.createElement("p",{key:t},e)})}},{key:"render",value:function(){return this.state.data?r.a.createElement("div",{className:"about-container"},this.renderItems()):r.a.createElement("div",{className:"about-container"},r.a.createElement("p",null,"loading..."))}}]),t}(n.Component),y=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("nav",{className:"mb-4"},r.a.createElement("ul",{className:"nav nav-tabs"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(j,{to:"/home",exact:!0},"My work")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(j,{to:"/home/about-me"},"More about me")))),r.a.createElement(b.a,{path:"".concat(this.props.match.path),exact:!0,component:O}),r.a.createElement(b.a,{path:"".concat(this.props.match.path,"/about-me"),component:g}))}}]),t}(n.Component),k=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("p",{className:"mb-4"},"Hi! I'm ",r.a.createElement("strong",null,"Felippe Rodrigues"),". I use ",r.a.createElement("code",{className:"p-1 rounded-lg"},"data")," and ",r.a.createElement("code",{className:"p-1 rounded-lg"},"code")," to make journalism."),r.a.createElement("p",{className:"mb-4"},"I currently work at ",r.a.createElement("a",{href:"https://www.vtdigger.org"},"VTDigger.org")," as a visual journalist. I'm a front-end developer and data geek too. My reporting and graphics can also be seen on ",r.a.createElement("a",{href:"https://www.politifact.com"},"PolitiFact"),", ",r.a.createElement("a",{href:"https://www.insideclimatenews.org/"},"InsideClimate News"),", ",r.a.createElement("a",{href:"https://www.smithsonianmag.com/"},"Smithsonian Mag"),", among others."))}}]),t}(n.Component),N=a(14),w=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-container mt-5"},r.a.createElement("ul",{className:"list-group list-group-horizontal justify-content-around border-top"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("h3",null,r.a.createElement(N.a,{icon:["fab","twitter"]}))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("h3",null,r.a.createElement(N.a,{icon:["fab","github"]})))))}}]),t}(n.Component),I=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"entry-content col-12 col-sm-10 col-md-8 col-lg-6 mb-5"},r.a.createElement(k,null),r.a.createElement(y,{match:this.props.match}),r.a.createElement(w,null))}}]),t}(n.Component),C=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"admin-content col-12"},r.a.createElement("h3",null,"Admin"))}}]),t}(n.Component),x=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row d-flex flex-column align-items-center"},r.a.createElement(b.a,{path:"/",exact:!0,render:function(){return r.a.createElement(f.a,{to:"/home"})}}),r.a.createElement(b.a,{path:"/home",component:I}),r.a.createElement(b.a,{path:"/admin",component:C}))}}]),t}(n.Component);l.b.add(i.a),o.a.render(r.a.createElement("div",{className:"container-fluid mt-5 mb-4"},r.a.createElement(s.a,null,r.a.createElement(x,null))),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.830ae7a1.chunk.js.map