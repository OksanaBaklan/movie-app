/*! For license information please see 453.2eb08337.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_simple_movie=self.webpackChunkreact_simple_movie||[]).push([[453],{497:function(e,t,n){n.d(t,{Jt:function(){return Ke},cF:function(){return Ve},iH:function(){return We},B0:function(){return Ge}});var r=n(2982),i=n(4165),o=n(5861),a=n(885),s=n(5671),u=n(3144),c=n(7326),l=n(136),h=n(9388),f=n(9474),d=n(5854),p=n(3258),_="firebasestorage.googleapis.com",v=function(e){(0,l.Z)(n,e);var t=(0,h.Z)(n);function n(e,r){var i,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return(0,s.Z)(this,n),(i=t.call(this,g(e),"Firebase Storage: ".concat(r," (").concat(g(e),")"))).status_=o,i.customData={serverResponse:null},i._baseMessage=i.message,Object.setPrototypeOf((0,c.Z)(i),n.prototype),i}return(0,u.Z)(n,[{key:"status",get:function(){return this.status_},set:function(e){this.status_=e}},{key:"_codeEquals",value:function(e){return g(e)===this.code}},{key:"serverResponse",get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message="".concat(this._baseMessage,"\n").concat(this.customData.serverResponse):this.message=this._baseMessage}}]),n}(d.ZR);function g(e){return"storage/"+e}function m(){return new v("unknown","An unknown error occurred, please check the error payload for server response.")}function k(){return new v("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function b(){return new v("canceled","User canceled the upload/download.")}function y(){return new v("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function w(e){return new v("invalid-argument",e)}function T(){return new v("app-deleted","The Firebase app was deleted.")}function R(e,t){return new v("invalid-format","String does not match format '"+e+"': "+t)}function x(e){throw new v("internal-error","Internal error: "+e)}var C,O=function(){function e(t,n){(0,s.Z)(this,e),this.bucket=t,this.path_=n}return(0,u.Z)(e,[{key:"path",get:function(){return this.path_}},{key:"isRoot",get:function(){return 0===this.path.length}},{key:"fullServerUrl",value:function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}},{key:"bucketOnlyServerUrl",value:function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}}],[{key:"makeFromBucketSpec",value:function(t,n){var r;try{r=e.makeFromUrl(t,n)}catch(i){return new e(t,"")}if(""===r.path)return r;throw new v("invalid-default-bucket","Invalid default bucket '"+t+"'.")}},{key:"makeFromUrl",value:function(t,n){var r=null,i="([A-Za-z0-9.\\-_]+)";var o=new RegExp("^gs://"+i+"(/(.*))?$","i");function a(e){e.path_=decodeURIComponent(e.path)}for(var s=n.replace(/[.]/g,"\\."),u=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://".concat(s,"/").concat("v[A-Za-z0-9_]+","/b/").concat(i,"/o").concat("(/([^?#]*).*)?$"),"i"),indices:{bucket:1,path:3},postModify:a},{regex:new RegExp("^https?://".concat(n===_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,"/").concat(i,"/").concat("([^?#]*)"),"i"),indices:{bucket:1,path:2},postModify:a}],c=0;c<u.length;c++){var l=u[c],h=l.regex.exec(t);if(h){var f=h[l.indices.bucket],d=h[l.indices.path];d||(d=""),r=new e(f,d),l.postModify(r);break}}if(null==r)throw function(e){return new v("invalid-url","Invalid URL '"+e+"'.")}(t);return r}}]),e}(),U=function(){function e(t){(0,s.Z)(this,e),this.promise_=Promise.reject(t)}return(0,u.Z)(e,[{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(){}}]),e}();function P(e){return"string"===typeof e||e instanceof String}function S(e){return Z()&&e instanceof Blob}function Z(){return"undefined"!==typeof Blob&&!(0,d.UG)()}function E(e,t,n,r){if(r<t)throw w("Invalid value for '".concat(e,"'. Expected ").concat(t," or greater."));if(r>n)throw w("Invalid value for '".concat(e,"'. Expected ").concat(n," or less."))}function A(e,t,n){var r=t;return null==n&&(r="https://".concat(t)),"".concat(n,"://").concat(r,"/v0").concat(e)}function I(e){var t=encodeURIComponent,n="?";for(var r in e){if(e.hasOwnProperty(r))n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1)}function q(e,t){var n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),i=-1!==t.indexOf(e);return n||r||i}!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(C||(C={}));var z=function(){function e(t,n,r,i,o,a,u,c,l,h,f){var d=this,p=!(arguments.length>11&&void 0!==arguments[11])||arguments[11];(0,s.Z)(this,e),this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((function(e,t){d.resolve_=e,d.reject_=t,d.start_()}))}return(0,u.Z)(e,[{key:"start_",value:function(){var e=this,t=function(t,n){var r=e.resolve_,i=e.reject_,o=n.connection;if(n.wasSuccessCode)try{var a=e.callback_(o,o.getResponse());void 0!==a?r(a):r()}catch(u){i(u)}else if(null!==o){var s=m();s.serverResponse=o.getErrorText(),e.errorCallback_?i(e.errorCallback_(o,s)):i(s)}else{if(n.canceled)i(e.appDelete_?T():b());else i(k())}};this.canceled_?t(0,new B(!1,null,!0)):this.backoffId_=function(e,t,n){var r=1,i=null,o=null,a=!1,s=0;function u(){return 2===s}var c=!1;function l(){if(!c){c=!0;for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.apply(null,n)}}function h(t){i=setTimeout((function(){i=null,e(d,u())}),t)}function f(){o&&clearTimeout(o)}function d(e){if(c)f();else{for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(e)return f(),void l.call.apply(l,[null,e].concat(n));var o;if(u()||a)return f(),void l.call.apply(l,[null,e].concat(n));r<64&&(r*=2),1===s?(s=2,o=0):o=1e3*(r+Math.random()),h(o)}}var p=!1;function _(e){p||(p=!0,f(),c||(null!==i?(e||(s=2),clearTimeout(i),h(0)):e||(s=1)))}return h(0),o=setTimeout((function(){a=!0,_(!0)}),n),_}((function(t,n){if(n)t(!1,new B(!1,null,!0));else{var r=e.connectionFactory_();e.pendingConnection_=r;var i=function(t){var n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)};null!==e.progressCallback_&&r.addUploadProgressListener(i),r.send(e.url_,e.method_,e.body_,e.headers_).then((function(){null!==e.progressCallback_&&r.removeUploadProgressListener(i),e.pendingConnection_=null;var n=r.getErrorCode()===C.NO_ERROR,o=r.getStatus();if(n&&!q(o,e.additionalRetryCodes_)||!e.retry){var a=-1!==e.successCodes_.indexOf(o);t(!0,new B(a,r))}else{var s=r.getErrorCode()===C.ABORT;t(!1,new B(!1,null,s))}}))}}),t,this.timeout_)}},{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}]),e}(),B=(0,u.Z)((function e(t,n,r){(0,s.Z)(this,e),this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}));function M(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}function F(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function H(e,t){t&&(e["X-Firebase-GMPID"]=t)}function N(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function j(e,t,n,r,i,o){var a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],s=I(e.urlParams),u=e.url+s,c=Object.assign({},e.headers);return H(c,t),M(c,n),F(c,o),N(c,r),new z(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,a)}function L(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function X(){for(var e=L(),t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(void 0!==e){for(var i=new e,o=0;o<n.length;o++)i.append(n[o]);return i.getBlob()}if(Z())return new Blob(n);throw new v("unsupported-environment","This browser doesn't seem to support creating Blobs")}var D="raw",G="base64",K="base64url",W="data_url",V=(0,u.Z)((function e(t,n){(0,s.Z)(this,e),this.data=t,this.contentType=n||null}));function J(e,t){switch(e){case D:return new V(Y(t));case G:case K:return new V($(e,t));case W:return new V(function(e){var t=new Q(e);return t.base64?$(G,t.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(n){throw R(W,"Malformed data URL.")}return Y(t)}(t.rest)}(t),new Q(t).contentType)}throw m()}function Y(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r))if(n<e.length-1&&56320===(64512&e.charCodeAt(n+1)))r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r);else t.push(239,191,189);else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function $(e,t){switch(e){case G:var n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r)throw R(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break;case K:var i=-1!==t.indexOf("+"),o=-1!==t.indexOf("/");if(i||o)throw R(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(t)}catch(c){throw R(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var Q=(0,u.Z)((function e(t){(0,s.Z)(this,e),this.base64=!1,this.contentType=null;var n=t.match(/^data:([^,]+)?,/);if(null===n)throw R(W,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=n[1]||null;null!=r&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=t.substring(t.indexOf(",")+1)}));var ee=function(){function e(t,n){(0,s.Z)(this,e);var r=0,i="";S(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}return(0,u.Z)(e,[{key:"size",value:function(){return this.size_}},{key:"type",value:function(){return this.type_}},{key:"slice",value:function(t,n){if(S(this.data_)){var r=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,t,n);return null===r?null:new e(r)}var i=new Uint8Array(this.data_.buffer,t,n-t);return new e(i,!0)}},{key:"uploadData",value:function(){return this.data_}}],[{key:"getBlob",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(Z()){var i=n.map((function(t){return t instanceof e?t.data_:t}));return new e(X.apply(null,i))}var o=n.map((function(e){return P(e)?J(D,e).data:e.data_})),a=0;o.forEach((function(e){a+=e.byteLength}));var s=new Uint8Array(a),u=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)s[u++]=e[t]})),new e(s,!0)}}]),e}();function te(e){var t,n;try{t=JSON.parse(e)}catch(r){return null}return"object"!==typeof(n=t)||Array.isArray(n)?null:t}function ne(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}function re(e,t){return t}var ie=(0,u.Z)((function e(t,n,r,i){(0,s.Z)(this,e),this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||re})),oe=null;function ae(){if(oe)return oe;var e=[];e.push(new ie("bucket")),e.push(new ie("generation")),e.push(new ie("metageneration")),e.push(new ie("name","fullPath",!0));var t=new ie("name");t.xform=function(e,t){return function(e){return!P(e)||e.length<2?e:ne(e)}(t)},e.push(t);var n=new ie("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new ie("timeCreated")),e.push(new ie("updated")),e.push(new ie("md5Hash",null,!0)),e.push(new ie("cacheControl",null,!0)),e.push(new ie("contentDisposition",null,!0)),e.push(new ie("contentEncoding",null,!0)),e.push(new ie("contentLanguage",null,!0)),e.push(new ie("contentType",null,!0)),e.push(new ie("metadata","customMetadata",!0)),oe=e}function se(e,t,n){for(var r={type:"file"},i=n.length,o=0;o<i;o++){var a=n[o];r[a.local]=a.xform(r,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var n=e.bucket,r=e.fullPath,i=new O(n,r);return t._makeStorageReference(i)}})}(r,e),r}function ue(e,t,n){var r=te(t);return null===r?null:se(e,r,n)}function ce(e,t){for(var n={},r=t.length,i=0;i<r;i++){var o=t[i];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}var le=(0,u.Z)((function e(t,n,r,i){(0,s.Z)(this,e),this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}));function he(e){if(!e)throw m()}function fe(e,t){return function(n,r){var i=ue(e,r,t);return he(null!==i),i}}function de(e,t){return function(n,r){var i=ue(e,r,t);return he(null!==i),function(e,t,n,r){var i=te(t);if(null===i)return null;if(!P(i.downloadTokens))return null;var o=i.downloadTokens;if(0===o.length)return null;var a=encodeURIComponent;return o.split(",").map((function(t){var i=e.bucket,o=e.fullPath;return A("/b/"+a(i)+"/o/"+a(o),n,r)+I({alt:"media",token:t})}))[0]}(i,r,e.host,e._protocol)}}function pe(e){return function(t,n){var r,i,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new v("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new v("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new v("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new v("unauthorized","User does not have permission to access '"+i+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function _e(e){var t=pe(e);return function(n,r){var i,o=t(n,r);return 404===n.getStatus()&&(i=e.path,o=new v("object-not-found","Object '"+i+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function ve(e,t,n){var r=A(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,o=new le(r,"GET",fe(e,n),i);return o.errorHandler=_e(t),o}function ge(e,t,n){var r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function me(e,t,n,r,i){var o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};var s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=ge(t,r,i),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ce(u,n)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",h=ee.getBlob(c,r,l);if(null===h)throw y();var f={name:u.fullPath},d=A(o,e.host,e._protocol),p=e.maxUploadRetryTime,_=new le(d,"POST",fe(e,n),p);return _.urlParams=f,_.headers=a,_.body=h.uploadData(),_.errorHandler=pe(t),_}var ke=(0,u.Z)((function e(t,n,r,i){(0,s.Z)(this,e),this.current=t,this.total=n,this.finalized=!!r,this.metadata=i||null}));function be(e,t){var n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(r){he(!1)}return he(!!n&&-1!==(t||["active"]).indexOf(n)),n}var ye=262144;function we(e,t,n,r,i,o,a,s){var u=new ke(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw new v("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var c=u.total-u.current,l=c;i>0&&(l=Math.min(l,i));var h=u.current,f=h+l,d={"X-Goog-Upload-Command":0===l?"finalize":c===l?"upload, finalize":"upload","X-Goog-Upload-Offset":"".concat(u.current)},p=r.slice(h,f);if(null===p)throw y();var _=t.maxUploadRetryTime,g=new le(n,"POST",(function(e,n){var i,a=be(e,["active","final"]),s=u.current+l,c=r.size();return i="final"===a?fe(t,o)(e,n):null,new ke(s,c,"final"===a,i)}),_);return g.headers=d,g.body=p.uploadData(),g.progressCallback=s||null,g.errorHandler=pe(e),g}var Te="running",Re="paused",xe="success",Ce="canceled",Oe="error";function Ue(e){switch(e){case"running":case"pausing":case"canceling":return Te;case"paused":return Re;case"success":return xe;case"canceled":return Ce;default:return Oe}}var Pe=(0,u.Z)((function e(t,n,r){if((0,s.Z)(this,e),"function"===typeof t||null!=n||null!=r)this.next=t,this.error=null!==n&&void 0!==n?n:void 0,this.complete=null!==r&&void 0!==r?r:void 0;else{var i=t;this.next=i.next,this.error=i.error,this.complete=i.complete}}));function Se(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,n)}))}}var Ze=function(){function e(){var t=this;(0,s.Z)(this,e),this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=C.NO_ERROR,this.sendPromise_=new Promise((function(e){t.xhr_.addEventListener("abort",(function(){t.errorCode_=C.ABORT,e()})),t.xhr_.addEventListener("error",(function(){t.errorCode_=C.NETWORK_ERROR,e()})),t.xhr_.addEventListener("load",(function(){e()}))}))}return(0,u.Z)(e,[{key:"send",value:function(e,t,n,r){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(var i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}},{key:"getErrorCode",value:function(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}},{key:"getStatus",value:function(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}},{key:"getResponse",value:function(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}},{key:"getErrorText",value:function(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}},{key:"abort",value:function(){this.xhr_.abort()}},{key:"getResponseHeader",value:function(e){return this.xhr_.getResponseHeader(e)}},{key:"addUploadProgressListener",value:function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}},{key:"removeUploadProgressListener",value:function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}]),e}(),Ee=function(e){(0,l.Z)(n,e);var t=(0,h.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,u.Z)(n,[{key:"initXhr",value:function(){this.xhr_.responseType="text"}}]),n}(Ze);function Ae(){return new Ee}var Ie=function(){function e(t,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(0,s.Z)(this,e),this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=i,this._mappings=ae(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=function(e){if(r._request=void 0,r._chunkMultiplier=1,e._codeEquals("canceled"))r._needToFetchStatus=!0,r.completeTransitions_();else{var t=r.isExponentialBackoffExpired();if(q(e.status,[])){if(!t)return r.sleepTime=Math.max(2*r.sleepTime,1e3),r._needToFetchStatus=!0,void r.completeTransitions_();e=k()}r._error=e,r._transition("error")}},this._metadataErrorHandler=function(e){r._request=void 0,e._codeEquals("canceled")?r.completeTransitions_():(r._error=e,r._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((function(e,t){r._resolve=e,r._reject=t,r._start()})),this._promise.then(null,(function(){}))}return(0,u.Z)(e,[{key:"isExponentialBackoffExpired",value:function(){return this.sleepTime>this.maxSleepTime}},{key:"_makeProgressCallback",value:function(){var e=this,t=this._transferred;return function(n){return e._updateProgress(t+n)}}},{key:"_shouldDoResumable",value:function(e){return e.size()>262144}},{key:"_start",value:function(){var e=this;"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((function(){e.pendingTimeout=void 0,e._continueUpload()}),this.sleepTime):this._oneShotUpload())}},{key:"_resolveToken",value:function(e){var t=this;Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((function(n){var r=(0,a.Z)(n,2),i=r[0],o=r[1];switch(t._state){case"running":e(i,o);break;case"canceling":t._transition("canceled");break;case"pausing":t._transition("paused")}}))}},{key:"_createResumable",value:function(){var e=this;this._resolveToken((function(t,n){var r=function(e,t,n,r,i){var o=t.bucketOnlyServerUrl(),a=ge(t,r,i),s={name:a.fullPath},u=A(o,e.host,e._protocol),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":"".concat(r.size()),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=ce(a,n),h=e.maxUploadRetryTime,f=new le(u,"POST",(function(e){var t;be(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){he(!1)}return he(P(t)),t}),h);return f.urlParams=s,f.headers=c,f.body=l,f.errorHandler=pe(t),f}(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),i=e._ref.storage._makeRequest(r,Ae,t,n);e._request=i,i.getPromise().then((function(t){e._request=void 0,e._uploadUrl=t,e._needToFetchStatus=!1,e.completeTransitions_()}),e._errorHandler)}))}},{key:"_fetchStatus",value:function(){var e=this,t=this._uploadUrl;this._resolveToken((function(n,r){var i=function(e,t,n,r){var i=e.maxUploadRetryTime,o=new le(n,"POST",(function(e){var t=be(e,["active","final"]),n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){he(!1)}n||he(!1);var i=Number(n);return he(!isNaN(i)),new ke(i,r.size(),"final"===t)}),i);return o.headers={"X-Goog-Upload-Command":"query"},o.errorHandler=pe(t),o}(e._ref.storage,e._ref._location,t,e._blob),o=e._ref.storage._makeRequest(i,Ae,n,r);e._request=o,o.getPromise().then((function(t){e._request=void 0,e._updateProgress(t.current),e._needToFetchStatus=!1,t.finalized&&(e._needToFetchMetadata=!0),e.completeTransitions_()}),e._errorHandler)}))}},{key:"_continueUpload",value:function(){var e=this,t=ye*this._chunkMultiplier,n=new ke(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((function(i,o){var a;try{a=we(e._ref._location,e._ref.storage,r,e._blob,t,e._mappings,n,e._makeProgressCallback())}catch(u){return e._error=u,void e._transition("error")}var s=e._ref.storage._makeRequest(a,Ae,i,o,!1);e._request=s,s.getPromise().then((function(t){e._increaseMultiplier(),e._request=void 0,e._updateProgress(t.current),t.finalized?(e._metadata=t.metadata,e._transition("success")):e.completeTransitions_()}),e._errorHandler)}))}},{key:"_increaseMultiplier",value:function(){2*(ye*this._chunkMultiplier)<33554432&&(this._chunkMultiplier*=2)}},{key:"_fetchMetadata",value:function(){var e=this;this._resolveToken((function(t,n){var r=ve(e._ref.storage,e._ref._location,e._mappings),i=e._ref.storage._makeRequest(r,Ae,t,n);e._request=i,i.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._transition("success")}),e._metadataErrorHandler)}))}},{key:"_oneShotUpload",value:function(){var e=this;this._resolveToken((function(t,n){var r=me(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),i=e._ref.storage._makeRequest(r,Ae,t,n);e._request=i,i.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._updateProgress(e._blob.size()),e._transition("success")}),e._errorHandler)}))}},{key:"_updateProgress",value:function(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}},{key:"_transition",value:function(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":var t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=b(),this._state=e,this._notifyObservers()}}},{key:"completeTransitions_",value:function(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}},{key:"snapshot",get:function(){var e=Ue(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}},{key:"on",value:function(e,t,n,r){var i=this,o=new Pe(t||void 0,n||void 0,r||void 0);return this._addObserver(o),function(){i._removeObserver(o)}}},{key:"then",value:function(e,t){return this._promise.then(e,t)}},{key:"catch",value:function(e){return this.then(null,e)}},{key:"_addObserver",value:function(e){this._observers.push(e),this._notifyObserver(e)}},{key:"_removeObserver",value:function(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}},{key:"_notifyObservers",value:function(){var e=this;this._finishPromise(),this._observers.slice().forEach((function(t){e._notifyObserver(t)}))}},{key:"_finishPromise",value:function(){if(void 0!==this._resolve){var e=!0;switch(Ue(this._state)){case xe:Se(this._resolve.bind(null,this.snapshot))();break;case Ce:case Oe:Se(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}},{key:"_notifyObserver",value:function(e){switch(Ue(this._state)){case Te:case Re:e.next&&Se(e.next.bind(e,this.snapshot))();break;case xe:e.complete&&Se(e.complete.bind(e))();break;default:e.error&&Se(e.error.bind(e,this._error))()}}},{key:"resume",value:function(){var e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}},{key:"pause",value:function(){var e="running"===this._state;return e&&this._transition("pausing"),e}},{key:"cancel",value:function(){var e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}]),e}(),qe=function(){function e(t,n){(0,s.Z)(this,e),this._service=t,this._location=n instanceof O?n:O.makeFromUrl(n,t.host)}return(0,u.Z)(e,[{key:"toString",value:function(){return"gs://"+this._location.bucket+"/"+this._location.path}},{key:"_newRef",value:function(t,n){return new e(t,n)}},{key:"root",get:function(){var e=new O(this._location.bucket,"");return this._newRef(this._service,e)}},{key:"bucket",get:function(){return this._location.bucket}},{key:"fullPath",get:function(){return this._location.path}},{key:"name",get:function(){return ne(this._location.path)}},{key:"storage",get:function(){return this._service}},{key:"parent",get:function(){var t=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;var n=new O(this._location.bucket,t);return new e(this._service,n)}},{key:"_throwIfRoot",value:function(e){if(""===this._location.path)throw function(e){return new v("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}]),e}();function ze(e){e._throwIfRoot("getDownloadURL");var t=function(e,t,n){var r=A(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,o=new le(r,"GET",de(e,n),i);return o.errorHandler=_e(t),o}(e.storage,e._location,ae());return e.storage.makeRequestWithTokens(t,Ae).then((function(e){if(null===e)throw new v("no-download-url","The given file does not have any download URLs.");return e}))}function Be(e,t){var n=function(e,t){var n=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new O(e._location.bucket,n);return new qe(e.storage,r)}function Me(e,t){if(e instanceof je){var n=e;if(null==n._bucket)throw new v("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");var r=new qe(n,n._bucket);return null!=t?Me(r,t):r}return void 0!==t?Be(e,t):e}function Fe(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof je)return new qe(e,t);throw w("To use ref(service, url), the first argument must be a Storage instance.")}return Me(e,t)}function He(e,t){var n=null===t||void 0===t?void 0:t.storageBucket;return null==n?null:O.makeFromBucketSpec(n,e)}function Ne(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.host="".concat(t,":").concat(n),e._protocol="http";var i=r.mockUserToken;i&&(e._overrideAuthToken="string"===typeof i?i:(0,d.Sg)(i,e.app.options.projectId))}var je=function(){function e(t,n,r,i,o){(0,s.Z)(this,e),this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?O.makeFromBucketSpec(i,this._host):He(this._host,this.app.options)}return(0,u.Z)(e,[{key:"host",get:function(){return this._host},set:function(e){this._host=e,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,e):this._bucket=He(e,this.app.options)}},{key:"maxUploadRetryTime",get:function(){return this._maxUploadRetryTime},set:function(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}},{key:"maxOperationRetryTime",get:function(){return this._maxOperationRetryTime},set:function(e){E("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}},{key:"_getAuthToken",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._overrideAuthToken){e.next=2;break}return e.abrupt("return",this._overrideAuthToken);case 2:if(!(t=this._authProvider.getImmediate({optional:!0}))){e.next=9;break}return e.next=6,t.getToken();case 6:if(null===(n=e.sent)){e.next=9;break}return e.abrupt("return",n.accessToken);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_getAppCheckToken",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this._appCheckProvider.getImmediate({optional:!0}))){e.next=6;break}return e.next=4,t.getToken();case 4:return n=e.sent,e.abrupt("return",n.token);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_delete",value:function(){return this._deleted||(this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear()),Promise.resolve()}},{key:"_makeStorageReference",value:function(e){return new qe(this,e)}},{key:"_makeRequest",value:function(e,t,n,r){var i=this,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(this._deleted)return new U(T());var a=j(e,this._appId,n,r,t,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then((function(){return i._requests.delete(a)}),(function(){return i._requests.delete(a)})),a}},{key:"makeRequestWithTokens",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t,n){var r,o,s,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this._getAuthToken(),this._getAppCheckToken()]);case 2:return r=e.sent,o=(0,a.Z)(r,2),s=o[0],u=o[1],e.abrupt("return",this._makeRequest(t,n,s,u).getPromise());case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),Le="@firebase/storage",Xe="0.9.13",De="storage";function Ge(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Ie(e,new ee(t),n)}(e=(0,d.m9)(e),t,n)}function Ke(e){return ze(e=(0,d.m9)(e))}function We(e,t){return Fe(e=(0,d.m9)(e),t)}function Ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,f.Mq)(),t=arguments.length>1?arguments[1]:void 0;e=(0,d.m9)(e);var n=(0,f.qX)(e,De),i=n.getImmediate({identifier:t}),o=(0,d.P0)("storage");return o&&Je.apply(void 0,[i].concat((0,r.Z)(o))),i}function Je(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};Ne(e,t,n,r)}function Ye(e,t){var n=t.instanceIdentifier,r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new je(r,i,o,n,f.Jn)}(0,f.Xd)(new p.wA(De,Ye,"PUBLIC").setMultipleInstances(!0)),(0,f.KN)(Le,Xe,""),(0,f.KN)(Le,Xe,"esm2017")}}]);
//# sourceMappingURL=453.2eb08337.chunk.js.map