(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{31:function(e,a,t){e.exports=t(48)},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},43:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(14),i=t.n(c),o=(t(36),t(7)),l=t(22),s=t(23),u=t(29),d=t(24),m=t(30),h=t(10),y=(t(37),function(e){var a=e.city,t=e.rusCity,c=e.data,i=e.loadData,o=Object(r.useState)(!1),l=Object(h.a)(o,2),s=l[0],u=l[1],d=Object(r.useState)(""),m=Object(h.a)(d,2),y=m[0],w=m[1];return Object(r.useEffect)((function(){c[a]||i(a)}),[]),Object(r.useEffect)((function(){if(c[a]&&!y){var e=c[a].weather[0].icon;w("https://openweathermap.org/img/wn/".concat(e,"@2x.png"))}})),n.a.createElement("div",{className:"ukraine-weather__city weather__city",style:{backgroundImage:"url(".concat(y&&y,")")}},y?s?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"ukraine-weather__city-describe"},c[a].weather[0].main),n.a.createElement("p",{className:"ukraine-weather__city-pressure"},"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",c[a].main.pressure," \u041f\u0441\u043a"),n.a.createElement("p",{className:"ukraine-weather__city-humidity"},"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",c[a].main.humidity,"%"),n.a.createElement("p",{className:"ukraine-weather__city-wind"},"\u0412\u0435\u0442\u0435\u0440: ",c[a].wind.speed," \u043a\u043c/\u0447")):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"ukraine-weather__city-name"},t),n.a.createElement("p",{className:"ukraine-weather__city-country"},"UA"),n.a.createElement("p",{className:"ukraine-weather__city-temp"},Math.round(c[a].main.temp),"\xb0")):n.a.createElement("div",{className:"loading"}),y&&n.a.createElement("p",{className:"ukraine-weather__city-advance",onClick:function(){return u(!s)}},s?"\u041d\u0430\u0437\u0430\u0434":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435..."))}),w=(t(38),t(11)),p=[["Kiev","\u041a\u0438\u0435\u0432"],["Lvov","\u041b\u044c\u0432\u043e\u0432"],["Odessa","\u041e\u0434\u0435\u0441\u0441\u0430"],["Kharkiv","\u0425\u0430\u0440\u044c\u043a\u043e\u0432"],["Dnipropetrovsk","\u0414\u043d\u0435\u043f\u0440\u043e"],["Donetsk","\u0414\u043e\u043d\u0435\u0446\u043a"],["Ivano-Frankivsk","\u0418\u0432\u0430\u043d\u043e-\u0424\u0440\u0430\u043d\u043a\u043e\u0432\u0441\u043a"],["Khmelnytskyy","\u0425\u043c\u0435\u043b\u044c\u043d\u0438\u0446\u043a\u0438\u0439"],["Cherkasy","\u0427\u0435\u0440\u043a\u0430\u0441\u0441\u044b"],["Mykolayiv","\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432"],["Vinnytsya","\u0412\u0438\u043d\u043d\u0438\u0446\u0430"],["Poltava","\u041f\u043e\u043b\u0442\u0430\u0432\u0430"],["Luhansk","\u041b\u0443\u0433\u0430\u043d\u0441\u043a"],["Chernivtsi","\u0427\u0435\u0440\u043d\u043e\u0432\u0446\u044b"],["Ternopil","\u0422\u0435\u0440\u043d\u043e\u043f\u043e\u043b\u044c"],["Rivne","\u0420\u043e\u0432\u043d\u043e"],["Sumy","\u0421\u0443\u043c\u044b"],["Simferopol","\u0421\u0438\u043c\u0444\u0435\u0440\u043e\u043f\u043e\u043b\u044c"],["Sevastopol","\u0421\u0435\u043f\u0430\u0441\u0442\u043e\u043f\u043e\u043b\u044c"],["Kirovohrad","\u041a\u0438\u0440\u043e\u0432\u043e\u0433\u0440\u0430\u0434"],["Chernihiv","\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432"],["Zaporizhzhya","\u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"],["Zhytomyr","\u0416\u0438\u0442\u043e\u043c\u0438\u0440"],["Kryvyy Rih","\u041a\u0440\u0438\u0432\u043e\u0439 \u0420\u043e\u0433"],["Bila Tserkva","\u0411\u0435\u043b\u0430\u044f \u0426\u0435\u0440\u043a\u043e\u0432\u044c"]],v=function(e){var a=e.cityList,t=e.removeCity;return n.a.createElement("div",{className:"ukraine-weather__search"},n.a.createElement("input",{type:"text",placeholder:"\u041e\u0434\u0435\u0441\u0441\u0430...",className:"ukraine-weather__search-input",onChange:function(e){var r=e.target.value,n=p.filter((function(e){return-1!==e[1].toLowerCase().search(r.toLowerCase().trim())}));JSON.stringify(a)!==JSON.stringify(n)&&t(n)}}),n.a.createElement(w.b,{to:"/search",className:"ukraine-weather__search-another"},"\u0414\u0440\u0443\u0433\u043e\u0439 \u0433\u043e\u0440\u043e\u0434"))},E=(t(43),function(e){function a(){return Object(l.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.removeCity,t=e.cityList,r=e.data,c=e.loadData;return n.a.createElement("div",{className:"ukraine-weather"},n.a.createElement(v,{removeCity:a,cityList:t}),t.map((function(e){return n.a.createElement(y,{key:e,city:e[0],rusCity:e[1],data:r,loadData:c})})))}}]),a}(r.Component)),_=t(9),f=function(e){return{type:"SET_DATA",payload:e}},b=function(e){return{type:"UPDATE_WORLDWIDE_DATA",payload:e}},g=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Ukraine",t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"1b389effa61d214000353bcab89a9f52";return function(n,c){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,",").concat(a,"&appid=").concat(r,"&units=metric")).then((function(a){if(404!==a.status)return a.json().then((function(a){if(t)n(b(a));else{var r=c().ukrainianCitysReducer.data,i=Object.assign({},r);i[e]=a,n(f(i))}}));n(b({error:a.statusText}))}))}},k=Object(_.b)((function(e){var a=e.ukrainianCitysReducer;return{cityList:a.cityList,data:a.data}}),{removeCity:function(e){return{type:"REMOVE_CITY",payload:e}},loadData:g})((function(e){var a=e.cityList,t=e.data,r=e.removeCity,c=e.loadData;return n.a.createElement(E,{cityList:a,data:t,removeCity:r,loadData:c})})),O=(t(45),t(46),function(e){var a=e.data,t=Object(r.useState)(!1),c=Object(h.a)(t,2),i=c[0],o=c[1],l=Object(r.useState)(!1),s=Object(h.a)(l,2),u=s[0],d=s[1];return Object(r.useEffect)((function(){if(0!==Object.keys(a).length&&!u&&!a.error){var e=a.weather[0].icon;d("https://openweathermap.org/img/wn/".concat(e,"@2x.png"))}})),n.a.createElement("div",{className:"worldwide-weather__city weather__city",style:{backgroundImage:"url(".concat(u&&u,")")}},u||a.error?i?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"worldwide-weather__city-describe"},a.weather[0].main),n.a.createElement("p",{className:"worldwide-weather__city-pressure"},"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",a.main.pressure," \u041f\u0441\u043a"),n.a.createElement("p",{className:"worldwide-weather__city-humidity"},"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",a.main.humidity,"%"),n.a.createElement("p",{className:"worldwide-weather__city-wind"},"\u0412\u0435\u0442\u0435\u0440: ",a.wind.speed," \u043a\u043c/\u0447")):n.a.createElement(n.a.Fragment,null,a.error?n.a.createElement("p",{className:"worldwide-weather__city-error"},a.error&&a.error):n.a.createElement(n.a.Fragment,null," ",n.a.createElement("p",{className:"worldwide-weather__city-name"},!a.error&&a.name),n.a.createElement("p",{className:"worldwide-weather__city-country"},!a.error&&a.sys.country),n.a.createElement("p",{className:"worldwide-weather__city-temp"},!a.error&&Math.round(a.main.temp)+"\xb0"))):n.a.createElement("div",{className:"loading"}),u&&!a.error&&n.a.createElement("p",{className:"worldwide-weather__city-advance",onClick:function(){return o(!i)}},i?"\u041d\u0430\u0437\u0430\u0434":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435..."))}),N=function(e){var a=e.worldwideData,t=e.loadData;return n.a.createElement("div",{className:"search-worldwide"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"search-worldwide__area"},n.a.createElement("input",{type:"text",placeholder:"Type city in English...",className:"search-worldwide__city"}),n.a.createElement("input",{type:"text",placeholder:"Type country in English...",className:"search-worldwide__country"}),n.a.createElement("button",{className:"search-worldwide__button",onClick:function(e){var a=e.currentTarget,r=a.previousElementSibling.value,n=a.previousElementSibling.previousElementSibling.value;r&&n&&t(n,r,!0)}},"Search")),0!==Object.keys(a).length&&n.a.createElement(O,{data:a})))},D=Object(_.b)((function(e){return{worldwideData:e.worldwideCitysReducer.worldwideData}}),{loadData:g})((function(e){var a=e.worldwideData,t=e.loadData;return n.a.createElement(N,{worldwideData:a,loadData:t})}));var j=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{exact:!0,path:"/",component:k}),n.a.createElement(o.a,{exact:!0,path:"/search",component:D}))},C=(t(47),t(27)),T=t(6),S=t(28),L=t(13),R={cityList:p,data:{}},A={worldwideData:{}},x=Object(T.combineReducers)({ukrainianCitysReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REMOVE_CITY":return Object(L.a)({},e,{cityList:a.payload});case"SET_DATA":return Object(L.a)({},e,{data:a.payload});default:return e}},worldwideCitysReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_WORLDWIDE_DATA":return Object(L.a)({},e,{worldwideData:a.payload});default:return e}}}),I=Object(T.createStore)(x,Object(S.composeWithDevTools)(Object(T.applyMiddleware)(C.a)));i.a.render(n.a.createElement(_.a,{store:I},n.a.createElement(w.a,{basename:"/weather"},n.a.createElement(j,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1b38335f.chunk.js.map