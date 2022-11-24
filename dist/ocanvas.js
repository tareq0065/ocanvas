!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("prop-types"),require("scenejs"),require("@daybrush/utils")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","scenejs","@daybrush/utils"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ocanvas={},e.React,e.PropTypes,e.Scene,e.utils)}(this,function(e,w,t,d,n){"use strict";function a(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function p(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach(function(e){var t,n;t=r,n=i[e=e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))})}return r}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1})}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function c(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=s(n),t=(e=r?(e=s(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),this);if(!e||"object"!=typeof e&&"function"!=typeof e){if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");if(void 0===(e=t))throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){l=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){var n;if(e)return"string"==typeof e?f(e,t):"Map"===(n="Object"===(n=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){var t=e.children,n=e.name,r=e.id,i=e.ratio,a=e.keyframes,o=e.style,l=e.playSpeed,s=e.delay,u=e.iteration,c=w.useContext(k),d=n.replaceAll(" ","_")+r;return w.useEffect(function(){c.newItem(".Layer-".concat(d),{selector:!0,delay:s,playSpeed:l}).set(p(p({},a),{},{options:{delay:s,iteration:u,playSpeed:l}}))},[n,a,u]),w.createElement("div",{"data-testid":"Layer-".concat(d),className:"Layer-".concat(d),style:p({position:"absolute",width:i.width,height:i.height,left:0,right:0,top:0,bottom:0,margin:"auto"},o)},t)}h="\n:root {\n  --background: #fff;\n  --font-color: #494949;\n}\n\n#canvasContainer {\n  min-width: 100%;\n  min-height: 100%;\n}\n\n.Canvas {\n  font-size: 14px;\n  margin: auto;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background: #ebecf0;\n}\n\n.CanvasInner {\n  grid-area: canvas;\n  position: relative;\n  z-index: 0;\n  padding: 10px;\n}\n\n.Composition {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n  -webkit-box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);\n  -moz-box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);\n  box-shadow: 0 1px 6px 0 rgb(32 33 36 / 28%);\n  overflow: hidden;\n}\n\n.Layers {\n  pointer-events: none;\n  background: white;\n}\n\n/*Player*/\n\n.playerWrapper {\n  position: absolute;\n  bottom: 20px;\n  margin: 0;\n  left: 0;\n  right: 0;\n  z-index: 99999999999;\n  display: flex;\n  justify-content: center;\n}\n\n.playerWrapperInline {\n  position: relative;\n  z-index: 99999999999;\n}\n\n.player {\n  position: relative;\n  align-items: center;\n  display: flex;\n}\n\n.circles .circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  border: 100px solid black;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.player .play, .player .pause, .player .progress {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.player .play {\n  border-left: 14px solid #333;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n}\n\n.player .pause {\n  border-left: 4px solid #333;\n  border-right: 4px solid #333;\n  width: 14px;\n  height: 16px;\n  box-sizing: border-box;\n}\n\n.player input[type=range] {\n  flex: auto;\n}\n\n.player input[type=range] {\n  -webkit-appearance: none;\n  background: rgba(0, 0, 0, 0.2);\n  height: 3px;\n  margin-left: 10px;\n}\n\n.player input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 7px;\n  background: #333;\n}\n\n.player input[type=range]:focus {\n  outline: none;\n}\n",T=(T=void 0===T?{}:T).insertAt,"undefined"!=typeof document&&(m=document.head||document.getElementsByTagName("head")[0],(g=document.createElement("style")).type="text/css","top"===T&&m.firstChild?m.insertBefore(g,m.firstChild):m.appendChild(g),g.styleSheet?g.styleSheet.cssText=h:g.appendChild(document.createTextNode(h)));var h,m,g,b,v,k=w.createContext(null),E=(y.defaultProps={name:"animation",id:1,ratio:{width:1080,height:720},keyframes:{},style:{},playSpeed:1,delay:0,children:w.createElement("div",null),iteration:"infinite"},y.propTypes={name:t.string,id:t.number,ratio:t.object,keyframes:t.object,style:t.object,layerStyle:t.object,playSpeed:t.number,delay:t.number||t.string,children:t.any,iteration:t.any},l(j,d),v=c(j),o(j,[{key:"getMediaItem",value:function(){return this.mediaItem}},{key:"getVolume",value:function(){return this.mediaItem.get(0,"volume")}},{key:"setVolume",value:function(e){return this.mediaItem.set(0,"volume",e),this}},{key:"setPlaySpeed",value:function(e){return this.mediaItem.setPlaySpeed(e),this}},{key:"seek",value:function(e,t){var n=this.mediaItem;return n.set(0,"seek",e),n.set("100%","seek",t),n.setDuration(t-e),this}},{key:"setElement",value:function(e){return this.mediaItem.setElement(e),this}},{key:"getMediaElement",value:function(){return this.mediaItem.getElements()[0]}},{key:"getInfo",value:function(){var e=this.mediaItem,t=[e.get(0,"seek"),e.get("100%","seek")],e=e.getPlaySpeed(),n=this.getVolume(),r=this.getDelay();return{url:this.url,seek:t,playSpeed:e,delay:r,volume:n}}},{key:"init",value:function(e){var t,c=this,d=this.newItem("media"),p=(d.newFrame(0),d.newFrame(1),d.set(0,"volume",1),d.set(0,"seek",0),d.set("100%","seek",0),this.mediaItem=d,n.isString(e)?((t=new Audio).src=e,this.setElement(t),this.url=e):(e.src?this.url=e.src:(t=e.querySelector("[src]"),this.url=t?t.src:""),this.setElement(e)),0);this.on("paused",function(e){var t;c.isPlayMedia=!1,null!=(t=c.getMediaElement())&&t.pause()}),this.on("animate",function(e){var t=c.getMediaElement(),n=(t.muted=!1,e.time),r=n<p,i="running"===c.getPlayState(),a=-1<c.getDirection().indexOf("reverse"),o=c.isPlayMedia,e=e.frames.media,l=d.getPlaySpeed(),s=c.getDuration(),u=c.getVolume(),e=e.get("seek");p=n,i&&o||(t.playbackRate=l*(a?-1:1),t.currentTime=e),r||n<=0||s<=n?i&&(c.isPlayMedia=!1,t.pause()):(t.volume=u,!o&&i&&(c.isPlayMedia=!0,(l=t.play())instanceof Promise)&&l.catch(function(){t.muted=!0,t.play()}))})}}]),j),O=(l(S,d),b=c(S),o(S,[{key:"addMedia",value:function(e){var t=new E(1<arguments.length&&void 0!==arguments[1]?arguments[1]:e);return this.setItem(e,t),t}},{key:"getInfo",value:function(){var t={duration:0,medias:[]};return this.forEach(function(e){t.medias.push(e.getInfo())}),t.duration=this.getDuration(),t}}]),S);function S(){var e;return r(this,S),(e=b.call(this)).playInfos={},e}function j(e){var t;return r(this,j),(t=v.call(this)).isPlayMedia=!0,t.init(e),t}new d({},{easing:d.EASE_IN_OUT,iterationCount:1,selector:!0}).setTime(0);function P(e){var n=e.name,r=e.id,i=e.audio,a=e.volume,o=e.playSpeed,l=e.delay,s=e.seekStart,u=e.seekEnd,c=w.useContext(k);return w.useEffect(function(){var e=new O,t=c.getDuration(),e=e.addMedia(n+r,i);e.setVolume(a).setPlaySpeed(o).setDelay(l),0<u?e.seek(s,u):e.seek(0,t),c.setItem("media",e)},[s,u]),w.createElement(w.Fragment,null)}function I(){var e="undefined"!=typeof window?window:{};return{width:e.innerWidth,height:e.innerHeight}}P.defaultProps={name:"audio",id:1,audio:"http://cld3097web.audiovideoweb.com/va90web25003/companions/Foundations%20of%20Rock/5.02.mp3",volume:1,playSpeed:1,delay:0,seekStart:0,seekEnd:0},P.propTypes={name:t.string,id:t.number,volume:t.number,audio:t.string,playSpeed:t.number,delay:t.number||t.string,seekStart:t.number,seekEnd:t.number};var C=w.forwardRef(function(e,t){var n,r,i,a=e.children,o=e.width,l=e.height,s=e.controls,u=e.playing,c=e.fullWidth,d=e.animationDuration,e=e.inline,p=w.useContext(k),f=w.useRef(null),y=x(w.useState(!1),2),h=y[0],m=y[1],y=x(w.useState(0),2),g=y[0],b=y[1],y=(w.useImperativeHandle(t,function(){return{play:function(){p.play()},pause:function(){p.pause()},finish:function(){p.finish()}}}),n=o,r=l,y=x(w.useState(I()),2),t=y[0],i=y[1],w.useEffect(function(){function e(){var e={height:I().height/(16/9),width:I().width/(16/9)};e.scale=Math.min(e.width/n,e.height/r),i(e)}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),t),t=y.height,v=y.width,y=y.scale;return w.useEffect(function(){var t=p.getDuration();d(t),p.on("play",function(e){m(!0)}),p.on("paused",function(e){m(!1)}),p.on("animate",function(e){b(100*e.time/t)}),u&&u({playing:h,progress:g})},[h,g]),w.createElement("div",{id:"canvasContainer"},w.createElement("div",{className:e?"":"Canvas",id:"recorderCanvas",ref:f},w.createElement("div",{className:"CanvasInner",style:c?{width:"100%",height:"100%"}:{width:v,height:t}},w.createElement("div",{id:"Composition",className:"Composition",style:c?{width:o,height:l}:{width:o,height:l,transform:"translate(-50%, -50%) scale(".concat(y||1,")")}},w.createElement("div",{className:"Layers",style:{width:o,height:l}},a)))),s&&w.createElement("div",{className:e?"playerWrapperInline":"playerWrapper"},w.createElement("div",{className:"player",style:{width:v}},w.createElement("div",{className:"".concat(h?"pause":"play"),onClick:function(){p.isPaused()?p.play():p.pause()}}),w.createElement("input",{className:"progress",type:"range",onChange:function(e){p.pause(),p.setTime(e.target.value+"%")},value:g.toString(),min:"0",max:"100"}))))}),T=w.forwardRef(function(e,t){var n=e.children,r=e.width,i=e.height,a=e.jsCanva,o=e.controls,l=e.playing,s=e.fullWidth,u=e.animationDuration,e=e.inline,c=new d({},{easing:d.EASE_IN_OUT,iterationCount:1,selector:!0}).setTime(0);return w.createElement(k.Provider,{value:c},w.createElement(C,{ref:t,height:i,width:r,controls:o,playing:l,jsCanva:a,fullWidth:s,animationDuration:u,inline:e},n))});T.defaultProps={width:1920,height:1080,children:[],controls:!0,playing:function(){},fullWidth:!1,animationDuration:function(){},inline:!1},T.propTypes={width:t.number,height:t.number,children:t.any,controls:t.bool,playing:t.func,fullWidth:t.bool,animationDuration:t.func,inline:t.bool},e.AudioLayer=P,e.Canvas=T,e.Layer=y});
//# sourceMappingURL=ocanvas.js.map
