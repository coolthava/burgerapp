(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{119:function(e,n,r){e.exports={Order:"Order_Order__1sfD1"}},127:function(e,n,r){"use strict";r.r(n);var t=r(5),a=r(6),o=r(9),i=r(7),s=r(8),c=r(0),u=r.n(c),l=r(16),d=r(119),p=r.n(d),m=function(e){var n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var t=n.map(function(e){return u.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return console.log(e.ingredients),console.log(t),console.log(e),u.a.createElement("div",{className:p.a.Order},u.a.createElement("p",null,"Ingredients: ",t),u.a.createElement("p",null," Price: ",u.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},f=r(40),g=r(13),h=r(14),b=r(39),O=function(e){function n(){return Object(t.a)(this,n),Object(o.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=u.a.createElement(b.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return u.a.createElement(m,{key:e.id,ingredients:e.ingredients,price:e.price})})),u.a.createElement("div",null,e)}}]),n}(c.Component);n.default=Object(g.b)(function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onFetchOrders:function(n,r){return e(h.d(n,r))}}})(Object(f.a)(O,l.a))}}]);
//# sourceMappingURL=2.c68a353f.chunk.js.map