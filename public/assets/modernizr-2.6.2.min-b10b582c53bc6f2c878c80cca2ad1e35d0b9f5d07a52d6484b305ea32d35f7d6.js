window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function i(e,t){return r(_.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var i=e[r];if(!a(i,"-")&&b[i]!==n)return"pfx"!=t||i}return!1}function u(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+k.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?s(i,t):(i=(e+" "+E.join(r+" ")+r).split(" "),u(i,t,n))}function c(){f.input=function(n){for(var r=0,i=n.length;r<i;r++)A[n[r]]=n[r]in w;return A.list&&(A.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var r,i,o,a=0,s=e.length;a<s;a++)w.setAttribute("type",i=e[a]),r="text"!==w.type,r&&(w.value=x,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&w.style.WebkitAppearance!==n?(g.appendChild(w),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?w.checkValidity&&w.checkValidity()===!1:w.value!=x)),D[e[a]]=!!r;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,p,h="2.6.2",f={},m=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,w=t.createElement("input"),x=":)",C={}.toString,_=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",k=S.split(" "),E=S.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},M={},D={},A={},I=[],R=I.slice,O=function(e,n,r,i){var o,a,s,u,l=t.createElement("div"),c=t.body,d=c||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:v+(r+1),l.appendChild(s);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(c?l:d).innerHTML+=o,d.appendChild(l),c||(d.style.background="",d.style.overflow="hidden",u=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),a=n(l,e),c?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),g.style.overflow=u),!!a},P=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),N={}.hasOwnProperty;p=o(N,"undefined")||o(N.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return N.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=R.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(R.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(R.call(arguments)))};return r}),M.flexbox=function(){return l("flexWrap")},M.flexboxlegacy=function(){return l("boxDirection")},M.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},M.canvastext=function(){return!!f.canvas&&!!o(t.createElement("canvas").getContext("2d").fillText,"function")},M.webgl=function(){return!!e.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:O(["@media (",_.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!e.postMessage},M.websqldatabase=function(){return!!e.openDatabase},M.indexedDB=function(){return!!l("indexedDB",e)},M.hashchange=function(){return P("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},M.history=function(){return!!e.history&&!!history.pushState},M.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},M.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},M.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},M.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return l("backgroundSize")},M.borderimage=function(){return l("borderImage")},M.borderradius=function(){return l("borderRadius")},M.boxshadow=function(){return l("boxShadow")},M.textshadow=function(){return""===t.createElement("div").style.textShadow},M.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return l("animationName")},M.csscolumns=function(){return l("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+_.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},M.cssreflections=function(){return l("boxReflect")},M.csstransforms=function(){return!!l("transform")},M.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},M.csstransitions=function(){return l("transition")},M.fontface=function(){var e;return O('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},M.generatedcontent=function(){var e;return O(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},M.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},M.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},M.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},M.webworkers=function(){return!!e.Worker},M.applicationcache=function(){return!!e.applicationCache},M.svg=function(){return!!t.createElementNS&&!!t.createElementNS(T.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T.svg},M.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(C.call(t.createElementNS(T.svg,"animate")))},M.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(C.call(t.createElementNS(T.svg,"clipPath")))};for(var L in M)p(M,L)&&(d=L.toLowerCase(),f[d]=M[L](),I.push((f[d]?"":"no-")+d));return f.input||c(),f.addTest=function(e,t){if("object"==typeof e)for(var r in e)p(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(g.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),y=w=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=g[e[f]];return t||(t={},m++,e[f]=m,g[m]=t),t}function o(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),o.canHaveChildren&&!p.test(e)?r.frag.appendChild(o):o}function a(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),u=s.length;a<u;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function u(e){e||(e=t);var r=i(e);return v.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),c||s(e,r),e}var l,c,d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f="_html5shiv",m=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){l=!0,c=!0}}();var v={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:c,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:u,createElement:o,createDocumentFragment:a};e.html5=v,u(t)}(this,t),f._version=h,f._prefixes=_,f._domPrefixes=E,f._cssomPrefixes=k,f.hasEvent=P,f.testProp=function(e){return s([e])},f.testAllProps=l,f.testStyles=O,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+I.join(" "):""),f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function i(e){return"string"==typeof e}function o(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();y=1,e?e.t?f(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function u(e,n,r,i,o,u,l){function c(t){if(!h&&a(d.readyState)&&(b.r=h=1,!y&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&f(function(){x.removeChild(d)},50);for(var r in E[n])E[n].hasOwnProperty(r)&&E[n][r].onload()}}var l=l||p.errorTimeout,d=t.createElement(e),h=0,g=0,b={t:r,s:n,e:o,a:u,x:l};1===E[n]&&(g=1,E[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){c.call(this,g)},v.splice(i,0,b),"img"!=e&&(g||2===E[n]?(x.insertBefore(d,w?null:m),f(c,l)):E[n].push(d))}function l(e,t,n,r,o){return y=0,t=t||"j",i(e)?u("c"==t?_:C,e,t,this.i++,n,r,o):(v.splice(this.i++,0,e),1==v.length&&s()),this}function c(){var e=p;return e.loader={load:l,i:0},e}var d,p,h=t.documentElement,f=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in h.style,w=b&&!!t.createRange().compareNode,x=w?h:m.parentNode,h=e.opera&&"[object Opera]"==g.call(e.opera),h=!!t.attachEvent&&!h,C=b?"object":h?"script":"img",_=h?"script":C,S=Array.isArray||function(e){return"[object Array]"==g.call(e)},k=[],E={},T={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),i=k.length,o=e.pop(),a=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;n<a;n++)r=e[n].split("="),(t=T[r.shift()])&&(o=t(o,r));for(n=0;n<i;n++)o=k[n](o);return o}function a(e,i,o,a,s){var u=t(e),l=u.autoCallback;u.url.split(".").pop().split("?").shift(),u.bypass||(i&&(i=r(i)?i:i[e]||i[a]||i[e.split("/").pop().split("?")[0]]),u.instead?u.instead(e,i,o,a,s):(E[u.url]?u.noexec=!0:E[u.url]=1,o.load(u.url,u.forceCSS||!u.forceJS&&"css"==u.url.split(".").pop().split("?").shift()?"c":n,u.noexec,u.attrs,u.timeout),(r(i)||r(l))&&o.load(function(){c(),i&&i(u.origUrl,s,a),l&&l(u.origUrl,s,a),E[u.url]=2})))}function s(e,t){function n(e,n){if(e){if(i(e))n||(d=function(){var e=[].slice.call(arguments);p.apply(this,e),h()}),a(e,d,t,0,l);else if(Object(e)===e)for(u in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(u)&&(!n&&!--s&&(r(d)?d=function(){var e=[].slice.call(arguments);p.apply(this,e),h()}:d[u]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),h()}}(p[u])),a(e[u],d,t,u,l))}else!n&&h()}var s,u,l=!!e.test,c=e.load||e.both,d=e.callback||o,p=d,h=e.complete||o;n(l?e.yep:e.nope,!!c),c&&n(c)}var u,l,d=this.yepnope.loader;if(i(e))a(e,0,d,0);else if(S(e))for(u=0;u<e.length;u++)l=e[u],i(l)?a(l,0,d,0):S(l)?p(l):Object(l)===l&&s(l,d);else Object(e)===e&&s(e,d)},p.addPrefix=function(e,t){T[e]=t},p.addFilter=function(e){k.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=c(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,i,u,l){var c,d,h=t.createElement("script"),i=i||p.errorTimeout;h.src=e;for(d in r)h.setAttribute(d,r[d]);n=l?s:n||o,h.onreadystatechange=h.onload=function(){!c&&a(h.readyState)&&(c=1,n(),h.onload=h.onreadystatechange=null)},f(function(){c||(c=1,n(1))},i),u?h.onload():m.parentNode.insertBefore(h,m)},e.yepnope.injectCss=function(e,n,r,i,a,u){var l,i=t.createElement("link"),n=u?s:n||o;i.href=e,i.rel="stylesheet",i.type="text/css";for(l in r)i.setAttribute(l,r[l]);a||(m.parentNode.insertBefore(i,m),f(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};