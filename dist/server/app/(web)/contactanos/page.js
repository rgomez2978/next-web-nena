(()=>{var e={};e.id=638,e.ids=[638],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3806:e=>{e.exports={style:{fontFamily:"'__segoe_169947', '__segoe_Fallback_169947'"},className:"__className_169947",variable:"__variable_169947"}},5285:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GlobalError:()=>a.a,__next_app__:()=>f,originalPathname:()=>l,pages:()=>d,routeModule:()=>p,tree:()=>u}),o(8976),o(9272),o(5866);var n=o(3191),r=o(8716),i=o(7922),a=o.n(i),s=o(5231),c={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>s[e]);o.d(t,c);let u=["",{children:["(web)",{children:["contactanos",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.bind(o,8976)),"D:\\develop\\repositories\\web-nena\\next-nena-web-good\\src\\app\\(web)\\contactanos\\page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(o.bind(o,9272)),"D:\\develop\\repositories\\web-nena\\next-nena-web-good\\src\\app\\(web)\\layout.jsx"],"not-found":[()=>Promise.resolve().then(o.t.bind(o,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(o.bind(o,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(o.t.bind(o,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(o.bind(o,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\develop\\repositories\\web-nena\\next-nena-web-good\\src\\app\\(web)\\contactanos\\page.jsx"],l="/(web)/contactanos/page",f={require:o,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/(web)/contactanos/page",pathname:"/contactanos",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},1604:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,2994,23)),Promise.resolve().then(o.t.bind(o,6114,23)),Promise.resolve().then(o.t.bind(o,9727,23)),Promise.resolve().then(o.t.bind(o,9671,23)),Promise.resolve().then(o.t.bind(o,1868,23)),Promise.resolve().then(o.t.bind(o,4759,23))},3957:(e,t,o)=>{Promise.resolve().then(o.bind(o,4282))},5303:()=>{},6680:function(e){var t;t=function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=(n(o(1)),o(6)),a=n(i),s=n(o(7)),c=n(o(8)),u=n(o(9)),d=n(o(10)),l=n(o(11)),f=n(o(14)),p=[],m=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(m=!0),m)return p=(0,l.default)(p,b),(0,d.default)(p,b.once),p},y=function(){p=(0,f.default)(),v()},g=function(){p.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){b=r(b,e),p=(0,f.default)();var t,o=document.all&&!window.atob;return!0===(t=b.disable)||"mobile"===t&&u.default.mobile()||"phone"===t&&u.default.phone()||"tablet"===t&&u.default.tablet()||"function"==typeof t&&!0===t()||o?g():(b.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,function(){v(!0)}):document.addEventListener(b.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,d.default)(p,b.once)},b.throttleDelay)),b.disableMutationObserver||c.default.ready("[data-aos]",y),p)},refresh:v,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function n(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":r(t))||t&&"object"==(void 0===t?"undefined":r(t))&&v.call(t)==s)return a;if(o(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;var i=d.test(e=e.replace(c,""));return i||l.test(e)?f(e.slice(2),i?2:8):u.test(e)?a:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i="Expected a function",a=NaN,s="[object Symbol]",c=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,p="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,b=p||m||Function("return this")(),v=Object.prototype.toString,y=Math.max,g=Math.min,h=function(){return b.Date.now()};e.exports=function(e,t,r){var a=!0,s=!0;if("function"!=typeof e)throw TypeError(i);return o(r)&&(a="leading"in r?!!r.leading:a,s="trailing"in r?!!r.trailing:s),function(e,t,r){function a(t){var o=l,n=f;return l=f=void 0,w=t,m=e.apply(n,o)}function s(e){var o=e-v,n=e-w;return void 0===v||o>=t||o<0||k&&n>=p}function c(){var e,o,n,r=h();return s(r)?u(r):void(b=setTimeout(c,(e=r-v,o=r-w,n=t-e,k?g(n,p-o):n)))}function u(e){return b=void 0,_&&l?a(e):(l=f=void 0,m)}function d(){var e,o=h(),n=s(o);if(l=arguments,f=this,v=o,n){if(void 0===b)return w=e=v,b=setTimeout(c,t),x?a(e):m;if(k)return b=setTimeout(c,t),a(v)}return void 0===b&&(b=setTimeout(c,t)),m}var l,f,p,m,b,v,w=0,x=!1,k=!1,_=!0;if("function"!=typeof e)throw TypeError(i);return t=n(t)||0,o(r)&&(x=!!r.leading,p=(k="maxWait"in r)?y(n(r.maxWait)||0,t):p,_="trailing"in r?!!r.trailing:_),d.cancel=function(){void 0!==b&&clearTimeout(b),w=0,l=v=f=b=void 0},d.flush=function(){return void 0===b?m:u(h())},d}(e,t,{leading:a,maxWait:t,trailing:s})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function n(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":r(t))||t&&"object"==(void 0===t?"undefined":r(t))&&b.call(t)==a)return i;if(o(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;var f=u.test(e=e.replace(s,""));return f||d.test(e)?l(e.slice(2),f?2:8):c.test(e)?i:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=NaN,a="[object Symbol]",s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,l=parseInt,f="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,m=f||p||Function("return this")(),b=Object.prototype.toString,v=Math.max,y=Math.min,g=function(){return m.Date.now()};e.exports=function(e,t,r){function i(t){var o=d,n=l;return d=l=void 0,h=t,p=e.apply(n,o)}function a(e){var o=e-b,n=e-h;return void 0===b||o>=t||o<0||x&&n>=f}function s(){var e,o,n,r=g();return a(r)?c(r):void(m=setTimeout(s,(e=r-b,o=r-h,n=t-e,x?y(n,f-o):n)))}function c(e){return m=void 0,k&&d?i(e):(d=l=void 0,p)}function u(){var e,o=g(),n=a(o);if(d=arguments,l=this,b=o,n){if(void 0===m)return h=e=b,m=setTimeout(s,t),w?i(e):p;if(x)return m=setTimeout(s,t),i(b)}return void 0===m&&(m=setTimeout(s,t)),p}var d,l,f,p,m,b,h=0,w=!1,x=!1,k=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=n(t)||0,o(r)&&(w=!!r.leading,f=(x="maxWait"in r)?v(n(r.maxWait)||0,t):f,k="trailing"in r?!!r.trailing:k),u.cancel=function(){void 0!==m&&clearTimeout(m),h=0,d=b=l=m=void 0},u.flush=function(){return void 0===m?p:c(g())},u}}).call(t,function(){return this}())},function(e,t){"use strict";function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(function e(t){var o=void 0,n=void 0;for(o=0;o<t.length;o+=1)if((n=t[o]).dataset&&n.dataset.aos||n.children&&e(n.children))return!0;return!1}(t.concat(o)))return r()})}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){};t.default={isSupported:function(){return!!o()},ready:function(e,t){var i=window.document,a=new(o())(n);r=t,a.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!i.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!a.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===n||"false"!==n&&(o||"true"===n)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var n=window.pageYOffset,r=window.innerHeight;e.forEach(function(e,i){o(e,r+n,t)})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=o(12))&&n.__esModule?n:{default:n};t.default=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=o(13))&&n.__esModule?n:{default:n};t.default=function(e,t){var o=0,n=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(n=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),o=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=i/2;break;case"bottom-center":o+=i/2+e.offsetHeight;break;case"center-center":o+=i/2+e.offsetHeight/2;break;case"top-top":o+=i;break;case"bottom-top":o+=e.offsetHeight+i;break;case"center-top":o+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(n=t),o+n}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},e.exports=t()},4282:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var n=o(326);o(7577);var r=o(3806),i=o.n(r);o(4453),o(6680),o(8593),o(3824);var a=o(5442),s=o.n(a);function c({children:e}){return n.jsx("html",{children:n.jsx("body",{className:`${i().variable} ${s().layout_body} `,children:n.jsx("main",{children:e})})})}},4453:(e,t,o)=>{"use strict";o(326)},5442:e=>{e.exports={layout_body:"style_layout_body__FZ2Jg"}},8976:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var n=o(9510);function r(){return n.jsx("main",{className:"flex flex-col items-center justify-between min-h-screen p-24",children:n.jsx("span",{children:"PAGE - CONTACTANOS"})})}},9272:(e,t,o)=>{"use strict";o.r(t),o.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>s});var n=o(8570);let r=(0,n.createProxy)(String.raw`D:\develop\repositories\web-nena\next-nena-web-good\src\app\(web)\layout.jsx`),{__esModule:i,$$typeof:a}=r;r.default;let s=(0,n.createProxy)(String.raw`D:\develop\repositories\web-nena\next-nena-web-good\src\app\(web)\layout.jsx#default`)},3881:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var n=o(6621);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},8593:()=>{},3824:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),n=t.X(0,[948,471,621],()=>o(5285));module.exports=n})();