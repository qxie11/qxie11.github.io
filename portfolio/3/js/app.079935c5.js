!function(e){function t(t){for(var n,u,d=t[0],l=t[1],i=t[2],a=0,m=[];a<d.length;a++)u=d[a],r[u]&&m.push(r[u][0]),r[u]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);m.length;)m.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,d=1;d<o.length;d++){var l=o[d];0!==r[l]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=o[0]))}return e}var n={},r={0:0},c=[];function u(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=n,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(o,n,function(t){return e[t]}.bind(null,n));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var d=window.webpackJsonp=window.webpackJsonp||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var s=l;c.push([28,1]),o()}({28:function(e,t,o){"use strict";o.r(t);o(29),o(48);var n=o(1),r=o.n(n),c=o(13),u=o(27),d=o.n(u);r()(window).width()>"576"?r()(".menu-btn").on("click",function(e){e.preventDefault(),r()(this).toggleClass("menu-btn_active"),r()(".menu-nav").toggleClass("menu-nav_active")}):r()(".menu-btn").on("click",function(e){r()(".menu").css({display:"flex"}),r()(".menu").addClass("bounceIn"),r()(".menu").removeClass("bounceOut"),r()("body").css({overflowY:"hidden"})}),r()(".menu__close").on("click",function(){r()(".menu").addClass("bounceOut"),setTimeout(function(){r()(".menu").css({display:"none"})},700),r()(".menu").removeClass("bounceIn"),r()("body").css({overflowY:"scroll"})});var l=new c.a,i=document.querySelector(".ourservices__webdev");l.pause(),i.addEventListener("mouseout",function(){l.reverse()}),i.addEventListener("mouseover",function(){l.play()});document.querySelector("svg"),document.querySelector(".bar-circle");var s=document.querySelector(".f_1"),a=document.querySelector(".f_2"),m=document.querySelector(".s_1"),f=document.querySelector(".s_2"),h=document.querySelector(".s_3"),y=document.querySelector(".t_1"),v=document.querySelector(".t_2"),p=document.querySelector(".t_3"),b=document.querySelector(".ff_1"),w=document.querySelector(".ff_2"),_=document.querySelector(".ff_3"),g=document.querySelector(".fff_1"),S=document.querySelector(".fff_2"),k=document.querySelector(".fff_3"),q=document.querySelector(".ss_1"),E=document.querySelector(".ss_2"),x=document.querySelector(".ss_3"),I=document.querySelector(".web_dev_circle"),B=document.querySelector(".shadow");l.to(s,.5,{width:45},"-=0.5").to(a,.5,{width:30,x:20},"-=0.5").to(m,.5,{width:35},"-=0.5").to(f,.5,{width:15,x:10},"-=0.5").to(h,.5,{width:50,x:-25},"-=0.5").to(y,.5,{width:35},"-=0.5").to(v,.5,{width:15,x:15},"-=0.5").to(p,.5,{width:35,x:-10},"-=0.5").to(b,.5,{width:65},"-=0.5").to(w,.5,{width:10,x:35},"-=0.5").to(_,.5,{width:20,x:-12},"-=0.5").to(g,.5,{width:15},"-=0.5").to(S,.5,{width:15,x:-20},"-=0.5").to(k,.5,{width:55,x:-40},"-=0.5").to(q,.5,{width:15},"-=0.5").to(E,.5,{width:15,x:-10},"-=0.5").to(x,.5,{width:15,x:-10},"-=0.5").to(I,.5,{fill:"#479EE1"},"-=0,5").to(B,.5,{fill:"black",opacity:"0.2"},"-=0.5");var O=new c.a;O.pause();var A=document.querySelector(".ourservices__photo");A.addEventListener("mouseout",function(){O.reverse()}),A.addEventListener("mouseover",function(){O.play()});var j=document.querySelectorAll(".button__photo"),C=document.querySelector(".lens");O.to(j,.3,{y:40}).to(C,.2,{rotation:150,transformOrigin:"center center",morphSVG:B});var L=document.querySelector(".whatcustomersay__btnwrap-prev");function P(){for(var e,t=document.querySelector(".whatcustomersay__slider"),o=0;o<=t.children.length;o++)if("check"==t.children[o].dataset.check){e=t.children[o].id[1];break}if(3==e)document.getElementById("s3").removeAttribute("checked"),document.getElementById("s3").removeAttribute("data-check"),document.getElementById("s1").dataset.check="check",document.getElementById("s1").checked=!0;else{var n=Number(e)+1;document.getElementById("s"+e).removeAttribute("checked"),document.getElementById("s"+e).removeAttribute("data-check"),document.getElementById("s"+n).dataset.check="check",document.getElementById("s"+n).checked=!0}}function M(){for(var e,t=document.querySelector(".whatcustomersay__slider"),o=0;o<=t.children.length;o++)if("check"==t.children[o].dataset.check){e=t.children[o].id[1];break}if(1==e)document.getElementById("s1").removeAttribute("checked"),document.getElementById("s1").removeAttribute("data-check"),document.getElementById("s3").dataset.check="check",document.getElementById("s3").checked=!0;else{var n=Number(e)-1;document.getElementById("s"+e).removeAttribute("checked"),document.getElementById("s"+e).removeAttribute("data-check"),document.getElementById("s"+n).dataset.check="check",document.getElementById("s"+n).checked=!0}}document.querySelector(".whatcustomersay__btnwrap-next").addEventListener("click",P),L.addEventListener("click",M);var T=document.querySelector(".whatcustomersay__slider"),J=new d.a(T);J.on("swiperight",P),J.on("swipeleft",M)},48:function(e,t,o){}});
//# sourceMappingURL=app.079935c5.js.map