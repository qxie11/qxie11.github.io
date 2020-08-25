(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{18:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAVklEQVRIie3RsQmAUAxF0YNgK7iDa7ifg1i5iVv8QYRvK9omhZALqQLvkjyKoojkwJwp6GhYMwUdFzaM70X0nFiGrHMeovDAz4siBU1iyTumrPCi+DM352Ali+fN16QAAAAASUVORK5CYII="},20:function(e,a,t){e.exports={loading:"styles_loading__3-9t8"}},21:function(e,a,t){e.exports={area:"style_area__tNnF2"}},24:function(e,a,t){e.exports=t(37)},3:function(e,a,t){e.exports={coin:"style_coin__1eaU9",coin__img:"style_coin__img__1qr95",coin__name:"style_coin__name__2vfJM",coin__fullname:"style_coin__fullname__2pQTi",coin__price:"style_coin__price__otJ6V"}},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),l=t(7),o=t.n(l),i=t(8),s=t(1),u=t(13),_=t.n(u),m=t(17);!function(e){e.SET_DATA="CRYPTO_AREA/SET_DATA"}(n||(n={}));var p,f=function(e){return{type:n.SET_DATA,payload:e}},d=function(){return function(){var e=Object(m.a)(_.a.mark((function e(a){var t,n,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{authorization:"6a74968c76cf49d6bfd1df3ad5559b6e9395e252afe44432e4a4c34464d30fae"}},e.next=3,fetch("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD",t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,r=c.Data.map((function(e){var a=e.CoinInfo,t=a.Name,n=a.ImageUrl,c=a.FullName;return{name:t,imgUrl:"https://cryptocompare.com"+n,price:e.DISPLAY.USD.PRICE,fullname:c}})),a(f(r));case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},A=t(3),b=t.n(A),v=function(e){var a=e.coinInfo,t=a.imgUrl,n=a.price,c=a.name,l=a.fullname;return r.a.createElement("div",{className:b.a.coin},r.a.createElement("div",{style:{background:"url('".concat(t,"')"),backgroundSize:"cover",backgroundPosition:"center center"},className:b.a.coin__img}),r.a.createElement("p",{className:b.a.coin__name},c),r.a.createElement("p",{className:b.a.coin__fullname},l),r.a.createElement("p",{className:b.a.coin__price},n))},y=t(23),E=t(9),g=t(4),N=t.n(g),j=t(18),O=t.n(j),D=function(e){var a=e.data,t=e.setData,n=Object(c.useState)(!1),l=Object(E.a)(n,2),o=l[0],i=l[1];return r.a.createElement("div",{className:N.a.topbar},r.a.createElement("div",{className:N.a.topbar__name},"Name"),r.a.createElement("div",{className:N.a.topbar__fullname},"FullName"),r.a.createElement("div",{className:N.a.topbar__price,onClick:function(){a.sort((function(e,a){var t=e.price.substring(2).replace(",",""),n=a.price.substring(2).replace(",","");return o?t-n:n-t})),i(!o);var e=Object(y.a)(a);t(e)}},"Price ",r.a.createElement("img",{className:o?N.a.sorted:"",src:O.a,alt:"arrow"})))},h=t(19),I=t(6),S=t.n(I),x=function(e){var a=e.data,t=Object(c.useRef)(null),n=Object(c.useRef)(null),l=Object(c.useState)(""),o=Object(E.a)(l,2),i=o[0],s=o[1],u=function(){var e,c,r,l,o=t.current.options[t.current.selectedIndex].value,i=n.current.options[n.current.selectedIndex].value,u=Object(h.a)(a);try{for(u.s();!(r=u.n()).done;){var _=r.value;if(_.name===o||_.name===i){var m=_.price.substring(2).replace(",","");_.name===o?e=+m:c=+m}}}catch(f){u.e(f)}finally{u.f()}if(c)l="".concat(o," = ").concat((e/c).toFixed(3)," ").concat(i," ");else{var p=a.filter((function(e){return e.name===o}));l="".concat(o," = ").concat(p[0].price," USD")}s(l)};return Object(c.useEffect)(u,[]),r.a.createElement("div",{className:S.a.calculator},r.a.createElement("p",{className:S.a.calculator__display},i),r.a.createElement("select",{className:S.a.calculator__select1,onChange:u,ref:t},a.map((function(e){var a=e.name;return r.a.createElement("option",{value:a,key:a},a)}))),r.a.createElement("select",{className:S.a.calculator__select2,onChange:u,ref:n},r.a.createElement("option",null,"USD"),a.map((function(e){var a=e.name;return r.a.createElement("option",{value:a,key:a},a)}))))},U=t(20),k=t.n(U),C=function(){return r.a.createElement("div",{className:k.a.loading})},R=t(21),T=t.n(R),w=Object(i.b)((function(e){return{data:e.cryptoArea.data}}),(function(e){return Object(s.b)({loadCryptoData:d,setData:f},e)}))(r.a.memo((function(e){var a=e.loadCryptoData,t=e.data,n=e.setData,l=Object(c.useRef)(null);return Object(c.useEffect)((function(){return a(),l.current=setInterval((function(){n(null),a()}),6e4),function(){clearInterval(l.current)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:T.a.area},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{data:t,setData:n}),t.map((function(e){return r.a.createElement(v,{key:e.name,coinInfo:e})}))):r.a.createElement(C,null)),t&&r.a.createElement(x,{data:t}))}))),F=(t(36),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null))}),Y=t(14),P={data:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0,t=a.type,c=a.payload;switch(t){case n.SET_DATA:return Object(Y.a)(Object(Y.a)({},e),{},{data:c});default:return e}},V=Object(s.c)({cryptoArea:Q}),z=t(22),J=s.d,B=(p={},Object(s.e)(V,p,J(Object(s.a)(z.a))));o.a.render(r.a.createElement(i.a,{store:B},r.a.createElement(F,null)),document.getElementById("root"))},4:function(e,a,t){e.exports={topbar:"style_topbar__1ozJh",topbar__name:"style_topbar__name__1YtVQ",topbar__fullname:"style_topbar__fullname__10W17",topbar__price:"style_topbar__price__CoAjI",sorted:"style_sorted__29ugY"}},6:function(e,a,t){e.exports={calculator:"style_calculator__37pOS",calculator__display:"style_calculator__display__1NzZE",calculator__select1:"style_calculator__select1__2PVAF",calculator__select2:"style_calculator__select2__gbPEr"}}},[[24,1,2]]]);
//# sourceMappingURL=main.d9c58d57.chunk.js.map