import e,{createContext as t,useContext as n,useEffect as r,useState as i,useRef as a}from"react";import o from"prop-types";import l from"scenejs";import{isString as s}from"@daybrush/utils";function u(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");t=e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=m(n);return v(this,r?(e=m(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){l=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){var n;if(e)return"string"==typeof e?x(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e,t){var n,r,t=(t=void 0===t?{}:t).insertAt;"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(r=document.createElement("style")).type="text/css","top"===t&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)))}(':root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #494949;\n    --font-color: #fafafa; } }\n\n#canvasContainer {\n  min-width: 100%;\n  min-height: 100%; }\n\n.Canvas {\n  font-family: "Avenir Next", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin: auto;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background: #ebecf0; }\n  .Canvas .CanvasInner {\n    grid-area: canvas;\n    position: relative;\n    z-index: 0;\n    padding: 10px; }\n    .Canvas .CanvasInner .Composition {\n      position: relative;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      transform-origin: center center;\n      -webkit-box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      -moz-box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      overflow: hidden; }\n      .Canvas .CanvasInner .Composition .Layers {\n        pointer-events: none;\n        background: white; }\n\n.playerWrapper {\n  position: absolute;\n  bottom: 20px;\n  margin: 0;\n  left: 0;\n  right: 0;\n  z-index: 99999999999;\n  display: flex;\n  justify-content: center; }\n\n.player {\n  position: relative;\n  align-items: center;\n  display: flex; }\n\n.circles .circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  border: 100px solid black;\n  border-radius: 50%;\n  transform: translate(-50%, -50%); }\n\n.player .play, .player .pause, .player .progress {\n  display: inline-block;\n  vertical-align: middle; }\n\n.player .play {\n  border-left: 14px solid #333;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent; }\n\n.player .pause {\n  border-left: 4px solid #333;\n  border-right: 4px solid #333;\n  width: 14px;\n  height: 16px;\n  box-sizing: border-box; }\n\n.player input[type=range] {\n  flex: auto; }\n\n.player input[type=range] {\n  -webkit-appearance: none;\n  background: rgba(0, 0, 0, 0.2);\n  height: 3px;\n  margin-left: 10px; }\n\n.player input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 7px;\n  background: #333; }\n\n.player input[type=range]:focus {\n  outline: none; }\n\n.raindrop {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  border: 100px solid black;\n  border-radius: 50%;\n  box-sizing: border-box;\n  transform: scale(0); }\n');var k=t(null),P=t(null),j=function(t){var i=t.children,a=t.name,o=t.id,l=t.ratio,s=t.keyframes,u=t.style,p=(t.layerStyle,t.playSpeed),d=t.delay,f=(t.autoPlay,t.iteration),y=n(k),h=a.replaceAll(" ","_")+o;return r(function(){y.newItem(".Layer-".concat(h),{selector:!0,delay:d,playSpeed:p}).set(c(c({},s),{},{options:{delay:d,iteration:f,playSpeed:p}}))},[a,s,f]),e.createElement("div",{"data-testid":"Layer-".concat(h),className:"Layer-".concat(h),style:c({position:"absolute",width:l.width,height:l.height,left:0,right:0,top:0,bottom:0,margin:"auto"},u)},i)};function O(){var e="undefined"!=typeof window?window:{};return{width:e.innerWidth,height:e.innerHeight}}j.defaultProps={name:"animation",id:1,ratio:{width:1080,height:720},keyframes:{},style:{},layerStyle:{},playSpeed:1,delay:0,autoPlay:!1,children:e.createElement("div",null),iteration:"infinite"},j.propTypes={name:o.string,id:o.number,ratio:o.object,keyframes:o.object,style:o.object,layerStyle:o.object,playSpeed:o.number,delay:o.number||o.string,autoPlay:o.bool,children:o.any,iteration:o.any};var E=function(){h(r,l);var n=b(r);function r(e){var t;return p(this,r),(t=n.call(this)).isPlayMedia=!0,t.init(e),t}return f(r,[{key:"getMediaItem",value:function(){return this.mediaItem}},{key:"getVolume",value:function(){return this.mediaItem.get(0,"volume")}},{key:"setVolume",value:function(e){return this.mediaItem.set(0,"volume",e),this}},{key:"setPlaySpeed",value:function(e){return this.mediaItem.setPlaySpeed(e),this}},{key:"seek",value:function(e,t){var n=this.mediaItem;return n.set(0,"seek",e),n.set("100%","seek",t),n.setDuration(t-e),this}},{key:"setElement",value:function(e){return this.mediaItem.setElement(e),this}},{key:"getMediaElement",value:function(){return this.mediaItem.getElements()[0]}},{key:"getInfo",value:function(){var e=this.mediaItem,t=[e.get(0,"seek"),e.get("100%","seek")],e=e.getPlaySpeed(),n=this.getVolume(),r=this.getDelay();return{url:this.url,seek:t,playSpeed:e,delay:r,volume:n}}},{key:"init",value:function(e){var t,c=this,p=this.newItem("media"),d=(console.log("mediaItem:",p),p.newFrame(0),p.newFrame(1),p.set(0,"volume",1),p.set(0,"seek",0),p.set("100%","seek",0),console.log("mediaItemafter:",p),this.mediaItem=p,s(e)?((t=new Audio).src=e,this.setElement(t),this.url=e):(e.src?this.url=e.src:(t=e.querySelector("[src]"),this.url=t?t.src:""),this.setElement(e)),0);this.on("paused",function(e){var t;c.isPlayMedia=!1,null!=(t=c.getMediaElement())&&t.pause()}),this.on("animate",function(e){var t=c.getMediaElement(),n=(t.muted=!1,e.time),r=n<d,i="running"===c.getPlayState(),a=-1<c.getDirection().indexOf("reverse"),o=c.isPlayMedia,e=e.frames.media,l=p.getPlaySpeed(),s=c.getDuration(),u=c.getVolume(),e=e.get("seek");d=n,i&&o||(t.playbackRate=l*(a?-1:1),t.currentTime=e),r||n<=0||s<=n?i&&(c.isPlayMedia=!1,t.pause()):(t.volume=u,!o&&i&&(c.isPlayMedia=!0,(l=t.play())instanceof Promise)&&l.catch(function(){t.muted=!0,t.play()}))})}}]),r}(),C=function(){h(n,l);var t=b(n);function n(){var e;return p(this,n),(e=t.call(this)).playInfos={},e}return f(n,[{key:"addMedia",value:function(e){var t=new E(1<arguments.length&&void 0!==arguments[1]?arguments[1]:e);return this.setItem(e,t),t}},{key:"getInfo",value:function(){var t={duration:0,medias:[]};return this.forEach(function(e){t.medias.push(e.getInfo())}),t.duration=this.getDuration(),t}}]),n}(),I=function(t){var o,l,s,u=t.children,c=t.width,p=t.height,d=t.jsCanva,f=t.autoPlay,y=t.controls,h=t.playing,m=t.fullWidth,g=t.animationDuration,b=n(k),t=a(null),v=w(i(!1),2),x=v[0],P=v[1],v=w(i(0),2),j=v[0],E=v[1],v=(o=c,l=p,v=w(i(O()),2),C=v[0],s=v[1],r(function(){function e(){var e={height:O().height/(16/9),width:O().width/(16/9)};e.scale=Math.min(e.width/o,e.height/l),s(e)}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),C),C=v.height,S=v.width,v=v.scale;return r(function(){var t=b.getDuration();d(b),g(t),f&&(b.play(),P(!0)),b.on("play",function(e){P(!0)}),b.on("paused",function(e){P(!1)}),b.on("animate",function(e){E(100*e.time/t)}),h({playing:x,progress:j})},[x,j]),e.createElement("div",{id:"canvasContainer"},e.createElement("div",{className:"Canvas",id:"recorderCanvas",ref:t},e.createElement("div",{className:"CanvasInner",style:m?{width:"100%",height:"100%"}:{width:S,height:C}},e.createElement("div",{id:"Composition",className:"Composition",style:m?{width:c,height:p}:{width:c,height:p,transform:"translate(-50%, -50%) scale(".concat(v||1,")")}},e.createElement("div",{className:"Layers",style:{width:c,height:p}},u)))),y&&e.createElement("div",{className:"playerWrapper"},e.createElement("div",{className:"player",style:{width:S}},e.createElement("div",{className:"".concat(x?"pause":"play"),onClick:function(){b.isPaused()?b.play():b.pause()}}),e.createElement("input",{className:"progress",type:"range",onChange:function(e){b.pause(),b.setTime(e.target.value+"%")},value:j.toString(),min:"0",max:"100"}))))},S=function(t){var n=t.children,r=t.width,i=t.height,a=t.jsCanva,o=t.autoPlay,s=t.controls,u=t.playing,c=t.fullWidth,t=t.animationDuration;return e.createElement(k.Provider,{value:new l({},{easing:l.EASE_IN_OUT,iterationCount:1,selector:!0}).setTime(0)},e.createElement(P.Provider,{value:new C},e.createElement(I,{height:i,width:r,autoPlay:o,controls:s,playing:u,jsCanva:a,fullWidth:c,animationDuration:t},n)))};S.defaultProps={width:1920,height:1080,children:[],autoPlay:!1,controls:!0,playing:function(){},jsCanva:function(){},fullWidth:!1,animationDuration:function(){}},S.propTypes={width:o.number,height:o.number,children:o.any,autoPlay:o.bool,controls:o.bool,playing:o.func,jsCanva:o.any,fullWidth:o.bool,animationDuration:o.func};export{S as Canvas,j as Layer};
//# sourceMappingURL=index.esm.js.map
