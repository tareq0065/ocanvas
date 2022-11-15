"use strict";var e=require("react"),n=require("prop-types"),t=require("scenejs");function r(n,e){var t,r=Object.keys(n);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(n),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)),r}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach(function(e){i(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}return i}}(e,n)||function(e,n){var t;if(e)return"string"==typeof e?l(e,n):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}!function(e,n){var t,r,n=(n=void 0===n?{}:n).insertAt;"undefined"!=typeof document&&(t=document.head||document.getElementsByTagName("head")[0],(r=document.createElement("style")).type="text/css","top"===n&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)))}(':root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #494949;\n    --font-color: #fafafa; } }\n\n#canvasContainer {\n  min-width: 100%;\n  min-height: 100%; }\n\n.Canvas {\n  font-family: "Avenir Next", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin: auto;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background: #ebecf0; }\n  .Canvas .CanvasInner {\n    grid-area: canvas;\n    position: relative;\n    z-index: 0;\n    padding: 10px; }\n    .Canvas .CanvasInner .Composition {\n      position: relative;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      transform-origin: center center;\n      -webkit-box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      -moz-box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      overflow: hidden; }\n      .Canvas .CanvasInner .Composition .Layers {\n        pointer-events: none;\n        background: white; }\n\n.playerWrapper {\n  position: absolute;\n  bottom: 20px;\n  margin: 0;\n  left: 0;\n  right: 0;\n  z-index: 99999999999;\n  display: flex;\n  justify-content: center; }\n\n.player {\n  position: relative;\n  align-items: center;\n  display: flex; }\n\n.circles .circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  border: 100px solid black;\n  border-radius: 50%;\n  transform: translate(-50%, -50%); }\n\n.player .play, .player .pause, .player .progress {\n  display: inline-block;\n  vertical-align: middle; }\n\n.player .play {\n  border-left: 14px solid #333;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent; }\n\n.player .pause {\n  border-left: 4px solid #333;\n  border-right: 4px solid #333;\n  width: 14px;\n  height: 16px;\n  box-sizing: border-box; }\n\n.player input[type=range] {\n  flex: auto; }\n\n.player input[type=range] {\n  -webkit-appearance: none;\n  background: rgba(0, 0, 0, 0.2);\n  height: 3px;\n  margin-left: 10px; }\n\n.player input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 7px;\n  background: #333; }\n\n.player input[type=range]:focus {\n  outline: none; }\n\n.raindrop {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  border: 100px solid black;\n  border-radius: 50%;\n  box-sizing: border-box;\n  transform: scale(0); }\n');var s=e.createContext(null),c=function(n){var t=n.children,r=n.name,i=(n.id,n.ratio,n.keyframes),o=n.style,l=(n.layerStyle,n.playSpeed,n.delay),c=(n.autoPlay,n.iteration),d=n.uid,p=e.useContext(s);return e.useEffect(function(){p.newItem(".Layer-".concat(r.replaceAll(" ","_")+d),{selector:!0}).set(a(a({},i),{},{options:{delay:l,iteration:c}}))},[]),e.createElement("div",{"data-testid":"Layer-".concat(r.replaceAll(" ","_")+d),style:a({margin:"auto"},o),className:"Layer-".concat(r.replaceAll(" ","_")+d)},t)};function d(){var e="undefined"!=typeof window?window:{};return{width:e.innerWidth,height:e.innerHeight}}c.defaultProps={name:"animation",id:1,ratio:{width:1080,height:720},keyframes:{},style:{},layerStyle:{},playSpeed:1,delay:0,autoPlay:!1,children:e.createElement("div",null),iteration:"infinite",uid:Math.floor(1e3*Math.random()+1)},c.propTypes={name:n.string,id:n.number,ratio:n.object,keyframes:n.object,style:n.object,layerStyle:n.object,playSpeed:n.number,delay:n.number,autoPlay:n.bool,children:n.any,iteration:n.any};var u=function(n){var t,r,a,i=n.children,l=n.width,c=n.height,p=n.jsCanva,u=n.autoPlay,h=n.controls,n=n.fullWidth,f=e.useContext(s),y=e.useRef(null),m=o(e.useState(!1),2),b=m[0],g=m[1],m=o(e.useState(0),2),v=m[0],w=m[1],m=(t=l,r=c,m=o(e.useState(d()),2),x=m[0],a=m[1],e.useEffect(function(){function e(){var e={height:d().height/(16/9),width:d().width/(16/9)};e.scale=Math.min(e.width/t,e.height/r),a(e)}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),x),x=m.height,C=m.width,m=m.scale;return e.useEffect(function(){var n=f.getDuration();p(f),u&&(f.play(),g(!0)),f.on("play",function(e){g(!0)}),f.on("paused",function(e){g(!1)}),f.on("animate",function(e){w(100*e.time/n)})},[u]),e.createElement("div",{id:"canvasContainer"},e.createElement("div",{className:"Canvas",id:"recorderCanvas",ref:y},e.createElement("div",{className:"CanvasInner",style:n?{width:"100%",height:"100%"}:{width:C,height:x}},e.createElement("div",{id:"Composition",className:"Composition",style:n?{width:l,height:c}:{width:l,height:c,transform:"translate(-50%, -50%) scale(".concat(m||1,")")}},e.createElement("div",{className:"Layers",style:{width:l,height:c}},i)))),h&&e.createElement("div",{className:"playerWrapper"},e.createElement("div",{className:"player",style:{width:C}},e.createElement("div",{className:"".concat(b?"pause":"play"),onClick:function(){f.isPaused()?f.play():f.pause()}}),e.createElement("input",{className:"progress",type:"range",onChange:function(e){f.pause(),f.setTime(e.target.value+"%")},value:v.toString(),min:"0",max:"100"}))))},p=function(n){var r=n.children,a=n.width,i=n.height,o=n.jsCanva,l=n.autoPlay,c=n.controls,n=n.fullWidth;return e.createElement(s.Provider,{value:new t({},{easing:t.EASE_IN_OUT,iterationCount:1,selector:!0}).setTime(0)},e.createElement(u,{height:i,width:a,autoPlay:l,controls:c,jsCanva:o,fullWidth:n},r))};p.defaultProps={width:1920,height:1080,children:[],autoPlay:!1,controls:!0,jsCanva:function(){},fullWidth:!1},p.propTypes={width:n.number,height:n.number,children:n.any,autoPlay:n.bool,controls:n.bool,jsCanva:n.any,fullWidth:n.bool},exports.Canvas=p,exports.Layer=c;
//# sourceMappingURL=index.js.map
