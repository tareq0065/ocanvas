import e,{useEffect as t,useState as n,useRef as r}from"react";import i from"prop-types";import a,{EASE_IN_OUT as o}from"scenejs";import{isString as l}from"@daybrush/utils";function s(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){f(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");t=e;if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=m(n);return g(this,r?(e=m(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){l=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){var n;if(e)return"string"==typeof e?w(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e,t){var n,r,t=(t=void 0===t?{}:t).insertAt;"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(r=document.createElement("style")).type="text/css","top"===t&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)))}("\n:root {\n  --background: #fff;\n  --font-color: #494949;\n}\n\n#canvasContainer {\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.Canvas {\n  font-size: 14px;\n  margin: auto;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background: #ebecf0;\n}\n\n.CanvasInner {\n  grid-area: canvas;\n  position: relative;\n  z-index: 0;\n  padding: 10px;\n}\n\n.Composition {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n  -webkit-box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);\n  -moz-box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);\n  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);\n  overflow: hidden;\n}\n\n.Layers {\n  pointer-events: none;\n  background: white;\n}\n\n/*Player*/\n\n.playerWrapper {\n  position: absolute;\n  bottom: 20px;\n  margin: 0;\n  left: 0;\n  right: 0;\n  z-index: 99999999999;\n  display: flex;\n  justify-content: center;\n}\n\n.player {\n  position: relative;\n  align-items: center;\n  display: flex;\n}\n\n.circles .circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  border: 100px solid black;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.player .play, .player .pause, .player .progress {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.player .play {\n  border-left: 14px solid #333;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n}\n\n.player .pause {\n  border-left: 4px solid #333;\n  border-right: 4px solid #333;\n  width: 14px;\n  height: 16px;\n  box-sizing: border-box;\n}\n\n.player input[type=range] {\n  flex: auto;\n}\n\n.player input[type=range] {\n  -webkit-appearance: none;\n  background: rgba(0, 0, 0, 0.2);\n  height: 3px;\n  margin-left: 10px;\n}\n\n.player input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 7px;\n  background: #333;\n}\n\n.player input[type=range]:focus {\n  outline: none;\n}\n");var k=new a({},{easing:o,iterationCount:1,selector:!0}).setTime(0),x=function(n){var r=n.children,i=n.name,a=n.id,o=n.ratio,l=n.keyframes,s=n.style,c=n.playSpeed,d=n.delay,p=n.iteration,f=i.replaceAll(" ","_")+a;return t(function(){k.newItem(".Layer-".concat(f),{selector:!0,delay:d,playSpeed:c}).set(u(u({},l),{},{options:{delay:d,iteration:p,playSpeed:c}}))},[i,l,p]),e.createElement("div",{"data-testid":"Layer-".concat(f),className:"Layer-".concat(f),style:u({position:"absolute",width:o.width,height:o.height,left:0,right:0,top:0,bottom:0,margin:"auto"},s)},r)},P=(x.defaultProps={name:"animation",id:1,ratio:{width:1080,height:720},keyframes:{},style:{},playSpeed:1,delay:0,children:e.createElement("div",null),iteration:"infinite"},x.propTypes={name:i.string,id:i.number,ratio:i.object,keyframes:i.object,style:i.object,layerStyle:i.object,playSpeed:i.number,delay:i.number||i.string,children:i.any,iteration:i.any},function(){y(r,a);var n=b(r);function r(e){var t;return c(this,r),(t=n.call(this)).isPlayMedia=!0,t.init(e),t}return p(r,[{key:"getMediaItem",value:function(){return this.mediaItem}},{key:"getVolume",value:function(){return this.mediaItem.get(0,"volume")}},{key:"setVolume",value:function(e){return this.mediaItem.set(0,"volume",e),this}},{key:"setPlaySpeed",value:function(e){return this.mediaItem.setPlaySpeed(e),this}},{key:"seek",value:function(e,t){var n=this.mediaItem;return n.set(0,"seek",e),n.set("100%","seek",t),n.setDuration(t-e),this}},{key:"setElement",value:function(e){return this.mediaItem.setElement(e),this}},{key:"getMediaElement",value:function(){return this.mediaItem.getElements()[0]}},{key:"getInfo",value:function(){var e=this.mediaItem,t=[e.get(0,"seek"),e.get("100%","seek")],e=e.getPlaySpeed(),n=this.getVolume(),r=this.getDelay();return{url:this.url,seek:t,playSpeed:e,delay:r,volume:n}}},{key:"init",value:function(e){var t,c=this,d=this.newItem("media"),p=(d.newFrame(0),d.newFrame(1),d.set(0,"volume",1),d.set(0,"seek",0),d.set("100%","seek",0),this.mediaItem=d,l(e)?((t=new Audio).src=e,this.setElement(t),this.url=e):(e.src?this.url=e.src:(t=e.querySelector("[src]"),this.url=t?t.src:""),this.setElement(e)),0);this.on("paused",function(e){var t;c.isPlayMedia=!1,null!=(t=c.getMediaElement())&&t.pause()}),this.on("animate",function(e){var t=c.getMediaElement(),n=(t.muted=!1,e.time),r=n<p,i="running"===c.getPlayState(),a=-1<c.getDirection().indexOf("reverse"),o=c.isPlayMedia,e=e.frames.media,l=d.getPlaySpeed(),s=c.getDuration(),u=c.getVolume(),e=e.get("seek");p=n,i&&o||(t.playbackRate=l*(a?-1:1),t.currentTime=e),r||n<=0||s<=n?i&&(c.isPlayMedia=!1,t.pause()):(t.volume=u,!o&&i&&(c.isPlayMedia=!0,(l=t.play())instanceof Promise)&&l.catch(function(){t.muted=!0,t.play()}))})}}]),r}()),j=function(){y(n,a);var t=b(n);function n(){var e;return c(this,n),(e=t.call(this)).playInfos={},e}return p(n,[{key:"addMedia",value:function(e){var t=new P(1<arguments.length&&void 0!==arguments[1]?arguments[1]:e);return this.setItem(e,t),t}},{key:"getInfo",value:function(){var t={duration:0,medias:[]};return this.forEach(function(e){t.medias.push(e.getInfo())}),t.duration=this.getDuration(),t}}]),n}(),E=function(n){var r=n.name,i=n.id,a=n.audio,o=n.volume,l=n.playSpeed,s=n.delay,u=n.seekStart,c=n.seekEnd;return n.stop,t(function(){var e=new j,t=k.getDuration(),e=e.addMedia(r+i,a);e.setVolume(o).setPlaySpeed(l).setDelay(s),0<c?e.seek(u,c):e.seek(0,t),k.setItem("media",e)},[u,c]),e.createElement(e.Fragment,null)};function O(){var e="undefined"!=typeof window?window:{};return{width:e.innerWidth,height:e.innerHeight}}E.defaultProps={name:"audio",id:1,audio:"http://cld3097web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/5.02.mp3",volume:1,playSpeed:1,delay:0,seekStart:0,seekEnd:0,stop:!1},E.propTypes={name:i.string,id:i.number,volume:i.number,audio:i.string,playSpeed:i.number,delay:i.number||i.string,seekStart:i.number,seekEnd:i.number,stop:i.bool};var S=function(i){var a,o,l,s=i.children,u=i.width,c=i.height,d=i.jsCanva,p=i.autoPlay,f=i.controls,y=i.playing,m=i.fullWidth,h=i.animationDuration,i=r(null),g=v(n(!1),2),b=g[0],w=g[1],g=v(n(0),2),x=g[0],E=g[1],g=(a=u,o=c,g=v(n(O()),2),P=g[0],l=g[1],t(function(){function e(){var e={height:O().height/(16/9),width:O().width/(16/9)};e.scale=Math.min(e.width/a,e.height/o),l(e)}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),P),P=g.height,j=g.width,g=g.scale;return t(function(){var t=k.getDuration();d(k),h(t),p&&(k.play(),w(!0)),k.on("play",function(e){w(!0)}),k.on("paused",function(e){w(!1)}),k.on("animate",function(e){E(100*e.time/t)}),y({playing:b,progress:x})},[b,x]),e.createElement("div",{id:"canvasContainer"},e.createElement("div",{className:"Canvas",id:"recorderCanvas",ref:i},e.createElement("div",{className:"CanvasInner",style:m?{width:"100%",height:"100%"}:{width:j,height:P}},e.createElement("div",{id:"Composition",className:"Composition",style:m?{width:u,height:c}:{width:u,height:c,transform:"translate(-50%, -50%) scale(".concat(g||1,")")}},e.createElement("div",{className:"Layers",style:{width:u,height:c}},s)))),f&&e.createElement("div",{className:"playerWrapper"},e.createElement("div",{className:"player",style:{width:j}},e.createElement("div",{className:"".concat(b?"pause":"play"),onClick:function(){k.isPaused()?k.play():k.pause()}}),e.createElement("input",{className:"progress",type:"range",onChange:function(e){k.pause(),k.setTime(e.target.value+"%")},value:x.toString(),min:"0",max:"100"}))))},C=function(t){var n=t.children,r=t.width,i=t.height,a=t.jsCanva,o=t.autoPlay,l=t.controls,s=t.playing,u=t.fullWidth,t=t.animationDuration;return e.createElement(S,{height:i,width:r,autoPlay:o,controls:l,playing:s,jsCanva:a,fullWidth:u,animationDuration:t},n)};C.defaultProps={width:1920,height:1080,children:[],autoPlay:!1,controls:!0,playing:function(){},jsCanva:function(){},fullWidth:!1,animationDuration:function(){}},C.propTypes={width:i.number,height:i.number,children:i.any,autoPlay:i.bool,controls:i.bool,playing:i.func,jsCanva:i.any,fullWidth:i.bool,animationDuration:i.func};export{E as AudioLayer,C as Canvas,x as Layer};
//# sourceMappingURL=index.esm.js.map
