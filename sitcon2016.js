!function t(e,n,r){function o(s,a){if(!n[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return o(n?n:t)},c,c.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){t("./init-page.js"),t("./navbar.js"),t("./footer.js"),t("./pages/location-open.js"),console.log("Hello~ ^^")},{"./footer.js":2,"./init-page.js":3,"./navbar.js":7,"./pages/location-open.js":8}],2:[function(t,e,n){function r(t){var e=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("img"),i=document.createElement("div"),s=document.createElement("div"),a=document.createElement("p");return e.className="staff-card",n.className="photo-frame",r.className="staff-photo-container unactive",i.className="staff-photo",o.style.display="none",loadPagePleaseWait.regist(o),"http"!==t.avatar.slice(0,4)?(o.src="https://staff.sitcon.org"+t.avatar,i.style.backgroundImage="url(https://staff.sitcon.org"+t.avatar+")"):(o.src=t.avatar+"&s=80",i.style.backgroundImage="url("+t.avatar+"&s=80)"),s.className="stone-photo",a.innerHTML=t.display_name,r.appendChild(o),r.appendChild(i),r.appendChild(s),n.appendChild(r),e.appendChild(n),e.appendChild(a),e}function o(t){for(var e=t.length,n=0;e>n;++n)-1!=t[n].profile.title.search("暨")&&(t.push(t[n]),t[n]=null)}t("./lib/dom.js"),t("./lib/loadpage-handler.js");var i=t("superagent"),s=Qid("staffs"),a=function(){var t=function(t){for(var e=function(t){return function(){removeClass(t,"unactive")}},n=0,r=t.querySelectorAll(".staff-photo-container"),o=getX(r[0]),i=0;i<r.length;++i)getX(r[i])==o&&(n=0),setTimeout(e(r[i]),n),n+=80},e=function(t){return getScrollY()+window.innerHeight-getY(t)},n=[],r=0,o=0;return{regist:function(t){n.push(t)},proc:function(){if(!o){if(r==n.length)return removeEvent(window,"scroll",a.proc),n=null,void(a=null);o=1,e(n[r])>150?(t(n[r]),++r,setTimeout(function(){o=0,a.proc()},100)):o=0}}}}(),l=function(t){for(var e=0;e<t.length;++e){var n=t[e],i=document.createElement("div");i.id="group"+n.pk,i.className="group";var l=document.createElement("h2");l.innerHTML=n.name,i.appendChild(l);var c=n.users;o(c);for(var u=0;u<c.length;++u)null!==c[u]&&i.appendChild(r(c[u].profile));s.appendChild(i),a.regist(i),i=null}addEvent(window,"scroll",a.proc)};i.get("https://staff.sitcon.org/api/staffgroups/").query({format:"json"}).end(function(t,e){var n=JSON.parse(e.text);l(n)})},{"./lib/dom.js":4,"./lib/loadpage-handler.js":5,superagent:11}],3:[function(t,e,n){t("./lib/dom.js");var r=location.hash.slice(8)||"home";location.hash="#target-"+r,r="page-"+r,Qid("h-controller").style.height=Qid(r).offsetHeight+"px",setTimeout(function(){addClass(Qid("image-group-title"),"active")},100)},{"./lib/dom.js":4}],4:[function(t,e,n){Q=function(t){return document.querySelector(t)},Qid=function(t){return document.getElementById(t)},Qall=function(t,e){for(var n=document.querySelectorAll(t),r=0;r<n.length;++r)e(n[r],r);n=null},addEvent=function(t,e,n){t.addEventListener?t.addEventListener(e,n):t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},removeEvent=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n):t.detachEvent?t.detachEvent("on"+e,n):t[e]=null},removeClass=function(t,e){if(t&&"undefined"!=typeof t.className){var n=new RegExp(e,"g");t.className=t.className.replace(n,"")}},addClass=function(t,e){t&&"undefined"!=typeof t.className&&-1==t.className.indexOf(e)&&(t.className.length>0?t.className+=" "+e:t.className=e)},getScrollY=function(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body?document.body.scrollTop:void 0},getY=function(t){return t.offsetTop},getX=function(t){return t.offsetLeft}},{}],5:[function(t,e,n){loadPagePleaseWait=function(){var t=document.getElementById("loading-page"),e=document.getElementById("loading-percentage"),n=0,r=0,o=!1,i=function(){o||(o=!0,setTimeout(function(){document.getElementById("loading-page").style.display="none"},1e3),t.style.opacity="0")},s=document.querySelectorAll("img");return n+=s.length,r+=s.length,s=null,window.onload=function(){e.style.opacity="1"},{regist:function(t){n++,t.onload=function(){r++,r==n&&i(),e.innerHTML=parseInt(100*r/n,10)+"%",t.onload=null}},forceStartPage:function(){i()}}}(),setTimeout(loadPagePleaseWait.forceStartPage,1e4)},{}],6:[function(t,e,n){t("./dom.js"),resizeHandler=function(){var t=[],e=function(){for(var e=document.body.offsetWidth,n=0;n<t.length;++n)t[n](e)};return addEvent(window,"resize",e),{regist:function(e){"function"==typeof e&&t.push(e)},forceHandle:function(){e()}}}()},{"./dom.js":4}],7:[function(t,e,n){t("./lib/dom.js"),t("./lib/resize-handler.js");var r=["home","schedule","sponsor","location"],o=location.hash.slice(8)||"home";addClass(Qid("link-"+o),"active");for(var i=0;i<r.length;++i)addEvent(Qid("link-"+r[i]),"click",function(){var t=r[i];return function(){Qid("h-controller").style.height=Qid("page-"+t).offsetHeight+"px",removeClass(Qid("link-"+o),"active"),o=t,addClass(Qid("link-"+o),"active")}}());resizeHandler.regist(function(){Qid("h-controller").style.height=Qid("page-"+o).offsetHeight+"px"})},{"./lib/dom.js":4,"./lib/resize-handler.js":6}],8:[function(t,e,n){function r(){if(i.offsetWidth!=i.parentElement.offsetWidth)return c>0&&setTimeout(r,500),void--c;var t=o("main","image/stone-sm.png",[121.6116,25.041]),e=o("bus","image/bus.png",[121.6166,25.0433]);new ol.Map({target:"location-map",interactions:ol.interaction.defaults({mouseWheelZoom:!1}),layers:[new ol.layer.Tile({source:new ol.source.OSM}),t,e],view:new ol.View({center:ol.proj.fromLonLat([121.6116,25.041]),zoom:15})})}function o(t,e,n){var r=new ol.Feature({geometry:new ol.geom.Point(ol.proj.fromLonLat(n)),name:t}),o=new ol.style.Style({image:new ol.style.Icon({scale:.5,anchor:[.5,1],anchorXUnits:"fraction",anchorYUnits:"fraction",src:e})});return new ol.layer.Vector({source:new ol.source.Vector({features:[r]}),style:o})}t("../lib/dom.js");var i=Qid("location-map"),s=function(){addClass(i,"middle")},a=function(){addClass(i,"open"),setTimeout(r,1500)},l=function(){removeEvent(Qid("link-location"),"click",l),setTimeout(s,1e3),setTimeout(a,1500)};"location"===location.hash.slice(8)?(setTimeout(s,100),setTimeout(a,500)):addEvent(Qid("link-location"),"click",l),addEvent(i,"scroll",function(){console.log("scroll map")});var c=10},{"../lib/dom.js":4}],9:[function(t,e,n){function r(t){return t?o(t):void 0}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){r.off(t,n),e.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[t];if(n){n=n.slice(0);for(var r=0,o=n.length;o>r;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],10:[function(t,e,n){e.exports=function(t,e,n){for(var r=0,o=t.length,i=3==arguments.length?n:t[r++];o>r;)i=e.call(null,i,t[r],++r,t);return i}},{}],11:[function(t,e,n){function r(){}function o(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}}function i(t){return t===Object(t)}function s(t){if(!i(t))return t;var e=[];for(var n in t)null!=t[n]&&a(e,n,t[n]);return e.join("&")}function a(t,e,n){return Array.isArray(n)?n.forEach(function(n){a(t,e,n)}):void t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))}function l(t){for(var e,n,r={},o=t.split("&"),i=0,s=o.length;s>i;++i)n=o[i],e=n.split("="),r[decodeURIComponent(e[0])]=decodeURIComponent(e[1]);return r}function c(t){var e,n,r,o,i=t.split(/\r?\n/),s={};i.pop();for(var a=0,l=i.length;l>a;++a)n=i[a],e=n.indexOf(":"),r=n.slice(0,e).toLowerCase(),o=w(n.slice(e+1)),s[r]=o;return s}function u(t){return/[\/+]json\b/.test(t)}function h(t){return t.split(/ *; */).shift()}function p(t){return b(t.split(/ *; */),function(t,e){var n=e.split(/ *= */),r=n.shift(),o=n.shift();return r&&o&&(t[r]=o),t},{})}function d(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this.setStatusProperties(this.xhr.status),this.header=this.headers=c(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this.setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this.parseBody(this.text?this.text:this.xhr.response):null}function f(t,e){var n=this;v.call(this),this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new d(n)}catch(r){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=r,t.rawResponse=n.xhr&&n.xhr.responseText?n.xhr.responseText:null,n.callback(t)}if(n.emit("response",e),t)return n.callback(t,e);if(e.status>=200&&e.status<300)return n.callback(t,e);var o=new Error(e.statusText||"Unsuccessful HTTP response");o.original=t,o.response=e,o.status=e.status,n.callback(o,e)})}function m(t,e){return"function"==typeof e?new f("GET",t).end(e):1==arguments.length?new f("GET",t):new f(t,e)}function g(t,e){var n=m("DELETE",t);return e&&n.end(e),n}var y,v=t("emitter"),b=t("reduce");y="undefined"!=typeof window?window:"undefined"!=typeof self?self:this,m.getXHR=function(){if(!(!y.XMLHttpRequest||y.location&&"file:"==y.location.protocol&&y.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var w="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};m.serializeObject=s,m.parseString=l,m.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},m.serialize={"application/x-www-form-urlencoded":s,"application/json":JSON.stringify},m.parse={"application/x-www-form-urlencoded":l,"application/json":JSON.parse},d.prototype.get=function(t){return this.header[t.toLowerCase()]},d.prototype.setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=h(e);var n=p(e);for(var r in n)this[r]=n[r]},d.prototype.parseBody=function(t){var e=m.parse[this.type];return e&&t&&(t.length||t instanceof Object)?e(t):null},d.prototype.setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=4==e||5==e?this.toError():!1,this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},d.prototype.toError=function(){var t=this.req,e=t.method,n=t.url,r="cannot "+e+" "+n+" ("+this.status+")",o=new Error(r);return o.status=this.status,o.method=e,o.url=n,o},m.Response=d,v(f.prototype),f.prototype.use=function(t){return t(this),this},f.prototype.timeout=function(t){return this._timeout=t,this},f.prototype.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},f.prototype.abort=function(){return this.aborted?void 0:(this.aborted=!0,this.xhr.abort(),this.clearTimeout(),this.emit("abort"),this)},f.prototype.set=function(t,e){if(i(t)){for(var n in t)this.set(n,t[n]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},f.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},f.prototype.getHeader=function(t){return this._header[t.toLowerCase()]},f.prototype.type=function(t){return this.set("Content-Type",m.types[t]||t),this},f.prototype.parse=function(t){return this._parser=t,this},f.prototype.accept=function(t){return this.set("Accept",m.types[t]||t),this},f.prototype.auth=function(t,e){var n=btoa(t+":"+e);return this.set("Authorization","Basic "+n),this},f.prototype.query=function(t){return"string"!=typeof t&&(t=s(t)),t&&this._query.push(t),this},f.prototype.field=function(t,e){return this._formData||(this._formData=new y.FormData),this._formData.append(t,e),this},f.prototype.attach=function(t,e,n){return this._formData||(this._formData=new y.FormData),this._formData.append(t,e,n),this},f.prototype.send=function(t){var e=i(t),n=this.getHeader("Content-Type");if(e&&i(this._data))for(var r in t)this._data[r]=t[r];else"string"==typeof t?(n||this.type("form"),n=this.getHeader("Content-Type"),"application/x-www-form-urlencoded"==n?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||o(t)?this:(n||this.type("json"),this)},f.prototype.callback=function(t,e){var n=this._callback;this.clearTimeout(),n(t,e)},f.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},f.prototype.timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},f.prototype.withCredentials=function(){return this._withCredentials=!0,this},f.prototype.end=function(t){var e=this,n=this.xhr=m.getXHR(),i=this._query.join("&"),s=this._timeout,a=this._formData||this._data;this._callback=t||r,n.onreadystatechange=function(){if(4==n.readyState){var t;try{t=n.status}catch(r){t=0}if(0==t){if(e.timedout)return e.timeoutError();if(e.aborted)return;return e.crossDomainError()}e.emit("end")}};var l=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),e.emit("progress",t)};this.hasListeners("progress")&&(n.onprogress=l);try{n.upload&&this.hasListeners("progress")&&(n.upload.onprogress=l)}catch(c){}if(s&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},s)),i&&(i=m.serializeObject(i),this.url+=~this.url.indexOf("?")?"&"+i:"?"+i),n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof a&&!o(a)){var h=this.getHeader("Content-Type"),p=this._parser||m.serialize[h?h.split(";")[0]:""];!p&&u(h)&&(p=m.serialize["application/json"]),p&&(a=p(a))}for(var d in this.header)null!=this.header[d]&&n.setRequestHeader(d,this.header[d]);return this.emit("request",this),n.send("undefined"!=typeof a?a:null),this},f.prototype.then=function(t,e){return this.end(function(n,r){n?e(n):t(r)})},m.Request=f,m.get=function(t,e,n){var r=m("GET",t);return"function"==typeof e&&(n=e,e=null),e&&r.query(e),n&&r.end(n),r},m.head=function(t,e,n){var r=m("HEAD",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.del=g,m["delete"]=g,m.patch=function(t,e,n){var r=m("PATCH",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.post=function(t,e,n){var r=m("POST",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},m.put=function(t,e,n){var r=m("PUT",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},e.exports=m},{emitter:9,reduce:10}]},{},[1]);