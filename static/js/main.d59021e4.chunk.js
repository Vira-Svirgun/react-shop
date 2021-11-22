(this["webpackJsonpreact-shop"]=this["webpackJsonpreact-shop"]||[]).push([[0],{12:function(e,t,r){e.exports={left:"Header_left__1xH7F",logo:"Header_logo__2fddk",right:"Header_right__1TL3M",user:"Header_user__2Hx4x",favorites:"Header_favorites__Vo9FO",cart:"Header_cart__2fIf-",cart__img:"Header_cart__img__Nz_4S"}},15:function(e,t,r){e.exports={card:"Card_card__2TsZh",favorite:"Card_favorite__H-NNo",img:"Card_img__ZIDmC",bottom:"Card_bottom__1FPnn",plus:"Card_plus__8jmv9",loader:"Card_loader__27aXF"}},19:function(e,t,r){e.exports={empty:"CartInfo_empty__39iZ7",empty__img:"CartInfo_empty__img__2_QTa",greenBtn:"CartInfo_greenBtn__3ak9A","button-loading":"CartInfo_button-loading__3B5aH"}},35:function(e,t,r){},56:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(29),s=r.n(n),i=r(13),o=(r(35),r(9)),d=r(10),j=r(7),l=r.n(j),b=r(11),u=r(3),m=r(2),h=r(4),O=r.n(h),x=r(12),f=r.n(x),p=Object(a.createContext)({}),v=function(){var e=Object(a.useContext)(p),t=e.cartItems,r=e.setCartItems,c=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:r,totalPrice:c}},_=r(1);var g=function(e){var t=v().totalPrice;return Object(_.jsx)("div",{children:Object(_.jsxs)("header",{children:[Object(_.jsx)(i.b,{to:"/",children:Object(_.jsxs)("div",{className:f.a.left,children:[Object(_.jsx)("img",{className:f.a.logo,src:"/img/logo.png",alt:""}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{children:"Baseball caps"}),Object(_.jsx)("p",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u0431\u0435\u0439\u0441\u0431\u043e\u043b\u043e\u043a"})]})]})}),Object(_.jsxs)("ul",{className:f.a.right,children:[Object(_.jsxs)("li",{className:f.a.cart,onClick:e.onClickCart,children:[Object(_.jsx)("img",{className:f.a.cart__img,src:"/img/cart.svg",alt:"Cart"}),Object(_.jsxs)("span",{children:[t," \u0433\u0440\u043d."]})]}),Object(_.jsx)("li",{children:Object(_.jsx)(i.b,{to:"/favorites",children:Object(_.jsx)("img",{className:f.a.favorites,src:"/img/heart.svg",alt:"Favorites"})})}),Object(_.jsx)("li",{children:Object(_.jsx)(i.b,{to:"/orders",children:Object(_.jsx)("img",{className:f.a.user,src:"/img/user.svg",alt:"User"})})})]})]})})},C=r(8),N=r.n(C),k=r(19),w=r.n(k),y=function(e){var t=e.title,r=e.description,c=e.imgUrl,n=Object(a.useContext)(p).setCartOpened;return Object(_.jsxs)("div",{className:w.a.empty,children:[Object(_.jsx)("img",{className:w.a.empty__img,src:c,alt:"Empty cart"}),Object(_.jsx)("h2",{children:t}),Object(_.jsx)("p",{children:r}),Object(_.jsxs)("button",{onClick:function(){return n(!1)},className:w.a.greenBtn,children:[Object(_.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},I=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var S=function(e){var t=e.onClose,r=e.onRemove,c=(e.cartOpened,e.items),n=void 0===c?[]:c,s=v(),i=s.cartItems,o=s.setCartItems,d=s.totalPrice,j=Object(a.useState)(!1),m=Object(u.a)(j,2),h=m[0],x=m[1],f=Object(a.useState)(null),p=Object(u.a)(f,2),g=p[0],C=p[1],k=Object(a.useState)(!1),w=Object(u.a)(k,2),S=w[0],T=w[1],B=function(){var e=Object(b.a)(l.a.mark((function e(){var t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,O.a.post("https://6190de0941928b001768fea3.mockapi.io/orders",{items:i});case 4:t=e.sent,r=t.data,C(r.id),x(!0),o([]),a=0;case 10:if(!(i.lenght>a)){e.next=19;break}return i[a],e.next=14,O.a.delete("https://6190de0941928b001768fea3.mockapi.io/cart"+n.id);case 14:return e.next=16,I(1e3);case 16:a++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.error(e.t0);case 24:T(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:N.a.overlay,children:Object(_.jsxs)("div",{className:N.a.drawer,children:[Object(_.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(_.jsx)("img",{className:N.a.removeBtn,src:"/img/btn-remove.svg",alt:"Close",width:"20px",height:"20px",onClick:t})]}),n.length>0?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{className:N.a.items,children:n.map((function(e){return Object(_.jsxs)("div",{className:N.a.item,children:[Object(_.jsx)("img",{src:e.imageUrl,className:N.a.item__img,alt:"Items"}),Object(_.jsxs)("div",{className:N.a.item__list,children:[Object(_.jsx)("p",{children:e.title}),Object(_.jsxs)("b",{children:[e.price," \u0433\u0440\u043d."]}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{onClick:function(){return r(e.id)},className:N.a.removeBtn,src:"/img/btn-remove.svg",alt:"Remove"})})]})]},e.id)}))}),Object(_.jsxs)("div",{className:N.a.bottom,children:[Object(_.jsxs)("ul",{children:[Object(_.jsxs)("li",{children:[Object(_.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(_.jsx)("div",{}),Object(_.jsxs)("b",{children:[d," \u0433\u0440\u043d."]})]}),Object(_.jsxs)("li",{children:[Object(_.jsx)("span",{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 5%:"}),Object(_.jsx)("div",{}),Object(_.jsxs)("b",{children:[Math.ceil(.05*d)," \u0433\u0440\u043d."]})]})]}),Object(_.jsxs)("button",{disabled:S,onClick:B,className:N.a.greenBtn,children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(_.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow"})]})]})]}):Object(_.jsx)(y,{title:h?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:h?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(g," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",imgUrl:h?"/img/complete-order.jpg":"/img/empty-cart.jpg"})]})})})},T=r(30),B=r(15),F=r.n(B);var H=function(e){var t=e.id,r=e.imageUrl,c=e.title,n=e.price,s=e.addToFavorite,i=e.addToCart,o=e.favorited,d=void 0!==o&&o,j=(e.added,e.loading),l=void 0!==j&&j,b=Object(a.useContext)(p).isItemAdded,m=Object(a.useState)(d),h=Object(u.a)(m,2),O=h[0],x=h[1],f={id:t,parentId:t,title:c,imageUrl:r,price:n};return Object(_.jsx)("div",{className:F.a.card,children:l?Object(_.jsxs)(T.a,{speed:2,width:200,height:250,viewBox:"0 0 200 250",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(_.jsx)("rect",{x:"10",y:"10",rx:"10",ry:"10",width:"180",height:"105"}),Object(_.jsx)("rect",{x:"10",y:"130",rx:"3",ry:"3",width:"180",height:"18"}),Object(_.jsx)("rect",{x:"10",y:"210",rx:"8",ry:"8",width:"90",height:"32"}),Object(_.jsx)("rect",{x:"148",y:"210",rx:"8",ry:"8",width:"32",height:"32"}),Object(_.jsx)("rect",{x:"10",y:"154",rx:"3",ry:"3",width:"140",height:"18"})]}):Object(_.jsxs)(_.Fragment,{children:[s&&Object(_.jsx)("div",{onClick:function(){s(f),x(!O)},className:F.a.favorite,children:Object(_.jsx)("img",{width:14.5,height:13,src:O?"/img/like.png":"/img/unlike.png",alt:"Unliked",onClick:s})}),Object(_.jsx)("img",{className:F.a.img,src:r,alt:"Beisbolka"}),Object(_.jsx)("h5",{children:c}),Object(_.jsxs)("div",{className:F.a.bottom,children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(_.jsxs)("b",{children:[n," \u0433\u0440\u043d."]})]}),i&&Object(_.jsx)("img",{className:F.a.plus,src:b(t)?"/img/btn-checked.svg":"/img/btn-plus.svg",alt:"Plus",onClick:function(){i(f)}})]})]})})};var D=function(e){var t=e.items,r=e.searchValue,a=(e.cartItems,e.addToCart),c=e.addToFavorite,n=e.changeSearchValue,s=e.setSearchValue,i=e.isLoading;return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:"content",children:[Object(_.jsxs)("div",{className:"content__searchBlock",children:[Object(_.jsx)("h1",{children:r?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(r,'"'):"\u0412\u0441\u0435 \u0431\u0435\u0439\u0441\u0431\u043e\u043b\u043a\u0438"}),Object(_.jsxs)("div",{className:"search",children:[r&&Object(_.jsx)("img",{onClick:function(){return s("")},className:"clear",src:"/img/btn-remove.svg",alt:"Clear"}),Object(_.jsx)("img",{className:"search__img",src:"/img/search.svg",alt:"Search"}),Object(_.jsx)("input",{onChange:n,value:r,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(_.jsx)("div",{className:"content__container",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));return(i?Object(d.a)(Array(10)):e).map((function(e,t){return Object(_.jsx)(H,Object(o.a)({addToFavorite:function(e){return c(e)},addToCart:function(e){return a(e)},loading:i},e),t)}))}()})]})})};var P=function(){var e=Object(a.useContext)(p),t=e.favorites,r=e.addToFavorite;return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:"content",children:[Object(_.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(_.jsx)("div",{className:"content__container",children:t.map((function(e,t){return Object(_.jsx)(H,Object(o.a)({favorited:!0,addToFavorite:r},e),t)}))})]})})};var V=function(){var e=Object(a.useContext)(p),t=(e.addToCart,e.addToFavorite,Object(a.useState)([])),r=Object(u.a)(t,2),c=r[0],n=r[1],s=Object(a.useState)(!0),i=Object(u.a)(s,2),j=i[0],m=i[1];return Object(a.useEffect)((function(){Object(b.a)(l.a.mark((function e(){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://6190de0941928b001768fea3.mockapi.io/orders");case 3:t=e.sent,r=t.data,n(r.reduce((function(e,t){return[].concat(Object(d.a)(e),Object(d.a)(t.items))}),[])),m(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:"content",children:[Object(_.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"}),Object(_.jsx)("div",{className:"content__container",children:(j?Object(d.a)(Array(10)):c).map((function(e,t){return Object(_.jsx)(H,Object(o.a)({loading:j},e),t)}))})]})})};var U=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),r=t[0],c=t[1],n=Object(a.useState)(!0),s=Object(u.a)(n,2),i=s[0],j=s[1],h=Object(a.useState)([]),x=Object(u.a)(h,2),f=x[0],v=x[1],C=Object(a.useState)([]),N=Object(u.a)(C,2),k=N[0],w=N[1],y=Object(a.useState)([]),I=Object(u.a)(y,2),T=I[0],B=I[1],F=Object(a.useState)(""),H=Object(u.a)(F,2),U=H[0],A=H[1];Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){var t,r,a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([O.a.get("https://6190de0941928b001768fea3.mockapi.io/items"),O.a.get("https://6190de0941928b001768fea3.mockapi.io/cart"),O.a.get("https://6190de0941928b001768fea3.mockapi.io/favorites")]);case 3:t=e.sent,r=Object(u.a)(t,3),a=r[0],c=r[1],n=r[2],j(!1),B(c.data),w(n.data),v(a.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var L=function(){var e=Object(b.a)(l.a.mark((function e(t){var r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r=T.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return B((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,O.a.delete("https://6190de0941928b001768fea3.mockapi.io/cart/".concat(r.id));case 6:e.next=14;break;case 8:return B((function(e){return[].concat(Object(d.a)(e),[t])})),e.next=11,O.a.post("https://6190de0941928b001768fea3.mockapi.io/cart",t);case 11:a=e.sent,c=a.data,B((function(e){return e.map((function(e){if(e.parentId===c.parentId)return Object(o.a)(Object(o.a)({},e),{},{id:c.id})}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(b.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!k.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=7;break}O.a.delete("https://6190de0941928b001768fea3.mockapi.io/favorites/".concat(t.id)),w((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=12;break;case 7:return e.next=9,O.a.post("https://6190de0941928b001768fea3.mockapi.io/favorites",t);case 9:r=e.sent,a=r.data,w((function(e){return[].concat(Object(d.a)(e),[a])}));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)(p.Provider,{value:{items:f,cartItems:T,favorites:k,isItemAdded:function(e){return T.some((function(t){return Number(t.parentId)===Number(e)}))},addToFavorite:E,addToCart:L,setCartOpened:c,setCartItems:B},children:Object(_.jsxs)("div",{className:"wrapper",children:[r&&Object(_.jsx)(S,{items:T,onClose:function(){return c(!1)},onRemove:function(e){try{O.a.delete("https://6190de0941928b001768fea3.mockapi.io/cart/".concat(e)),B((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){console.log(t)}},cartOpened:r}),Object(_.jsx)(g,{onClickCart:function(){return c(!0)}}),Object(_.jsxs)(m.c,{children:[Object(_.jsx)(m.a,{path:"/",element:Object(_.jsx)(D,{items:f,cartItems:T,searchValue:U,addToCart:L,addToFavorite:E,changeSearchValue:function(e){A(e.target.value)},setSearchValue:A,isLoading:i})}),Object(_.jsx)(m.a,{path:"/favorites",element:Object(_.jsx)(P,{})}),Object(_.jsx)(m.a,{path:"/orders",element:Object(_.jsx)(V,{})})]})]})})};s.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(i.a,{children:Object(_.jsx)(U,{})})}),document.getElementById("root"))},8:function(e,t,r){e.exports={overlay:"Drawer_overlay__sw5F1",greenBtn:"Drawer_greenBtn__16VSe",drawer:"Drawer_drawer__4R7G1",bottom:"Drawer_bottom__fYoWd","button-loading":"Drawer_button-loading__1bBzh",items:"Drawer_items__3hSHz",item:"Drawer_item__1W_4q",item__img:"Drawer_item__img__XsuKW",item__list:"Drawer_item__list__1PInZ",removeBtn:"Drawer_removeBtn__2wV3U"}}},[[56,1,2]]]);
//# sourceMappingURL=main.d59021e4.chunk.js.map