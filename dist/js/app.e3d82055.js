(function(e){function t(t){for(var o,i,u=t[0],s=t[1],a=t[2],f=0,d=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(d.length)d.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},c=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4fdd":function(e,t,n){"use strict";n("abc7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=Object(o["l"])("data-v-33b91ffe");Object(o["h"])("data-v-33b91ffe");var c={style:{"font-size":"xx-large",padding:"20px","text-align":"center"}},i={style:{"text-align":"center",padding:"10px"}};Object(o["g"])();var u=r((function(e,t,n,r,u,s){return Object(o["f"])(),Object(o["c"])(o["a"],null,[Object(o["e"])("div",{onClick:t[1]||(t[1]=function(e){return s.onClick(e)}),onContextmenu:t[2]||(t[2]=function(e){return s.onClick(e)}),class:"click-area noselect",style:{color:s.clickNumberColor}},Object(o["i"])(e.clickAmount),37),Object(o["e"])("div",c,Object(o["i"])(e.lastCpsResult)+" cps ",1),Object(o["e"])("div",i,Object(o["i"])(e.testDurationSecs)+" second(s) ",1),e.isTestRunning?Object(o["d"])("",!0):Object(o["k"])((Object(o["f"])(),Object(o["c"])("input",{key:0,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.testDurationSecs=t}),type:"range",min:"1",max:"15",step:"1",style:{display:"block",margin:"auto"}},null,512)),[[o["j"],e.testDurationSecs]])],64)})),s=(n("99af"),n("a9e3"),n("3d20")),a=n.n(s);function l(e,t,n){return"rgb(".concat(e,",").concat(t,",").concat(n,")")}function f(e,t){return Number(Math.round(e+"e"+t)+"e-"+t)}function d(){var e;(e=document).addEventListener.apply(e,b)}function p(){var e;(e=document).removeEventListener.apply(e,b)}var b=["contextmenu",function(e){e.preventDefault()}],v={name:"App",data:function(){return{isTestRunning:!1,clickAmount:0,testDurationSecs:8,lastCpsResult:0}},methods:{onClick:function(e){var t=this;e.preventDefault(),this.isTestRunning||(this.isTestRunning=!0,this.clickAmount=0,setTimeout((function(){return t.onTestEnd()}),1e3*this.testDurationSecs)),this.clickAmount+=1},onTestEnd:function(){this.isTestRunning=!1;var e=f(this.clickAmount/this.testDurationSecs,2);this.lastCpsResult=e,this.clickAmount=0,this.showResultAlert(e)},showResultAlert:function(e){d(),setTimeout((function(){return a.a.fire({text:"".concat(e," CPS"),confirmButtonText:"Ok",allowOutsideClick:!1,willClose:p})}),10)}},computed:{clickNumberColor:function(){return l(8*this.clickAmount,0,0)}}};n("4fdd");v.render=u,v.__scopeId="data-v-33b91ffe";var h=v,g=n("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(o["b"])(h).mount("#app")},abc7:function(e,t,n){}});
//# sourceMappingURL=app.e3d82055.js.map