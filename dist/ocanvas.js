!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("react"),require("prop-types"),require("scenejs")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","scenejs"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).ocanvas={},e.React,e.PropTypes,e.Scene)}(this,function(e,v,n,l){"use strict";function t(n,e){var t,r=Object.keys(n);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(n),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)),r}function s(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?t(Object(a),!0).forEach(function(e){var n,t;n=r,t=a[e=e],e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))})}return r}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,l=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(l)throw a}}return i}}(e,n)||function(e,n){var t;if(e)return"string"==typeof e?r(e,n):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e){var n=e.children,t=e.name,r=(e.id,e.ratio,e.keyframes),a=e.style,i=(e.layerStyle,e.playSpeed,e.delay),o=(e.autoPlay,e.iteration),l=v.useContext(x);return v.useEffect(function(){l.newItem(".Layer-".concat(t),{selector:!0}).set(s(s({},r),{},{options:{delay:i,iteration:o}}))},[]),v.createElement("div",{"data-testid":"Layer-".concat(t),style:s({margin:"auto"},a),className:"Layer-".concat(t)},n)}i=':root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #494949;\n    --font-color: #fafafa; } }\n\n#canvasContainer {\n  min-width: 100%;\n  min-height: 100%; }\n\n.Canvas {\n  font-family: "Avenir Next", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin: auto;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background: #ebecf0; }\n  .Canvas .CanvasInner {\n    grid-area: canvas;\n    position: relative;\n    z-index: 0;\n    padding: 10px; }\n    .Canvas .CanvasInner .Composition {\n      position: relative;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      transform-origin: center center;\n      -webkit-box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      -moz-box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      overflow: hidden; }\n      .Canvas .CanvasInner .Composition .Layers {\n        pointer-events: none;\n        background: white; }\n\n.playerWrapper {\n  position: absolute;\n  bottom: 20px;\n  margin: 0;\n  left: 0;\n  right: 0;\n  z-index: 99999999999;\n  display: flex;\n  justify-content: center; }\n\n.player {\n  position: relative;\n  align-items: center;\n  display: flex; }\n\n.circles .circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  border: 100px solid black;\n  border-radius: 50%;\n  transform: translate(-50%, -50%); }\n\n.player .play, .player .pause, .player .progress {\n  display: inline-block;\n  vertical-align: middle; }\n\n.player .play {\n  border-left: 14px solid #333;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent; }\n\n.player .pause {\n  border-left: 4px solid #333;\n  border-right: 4px solid #333;\n  width: 14px;\n  height: 16px;\n  box-sizing: border-box; }\n\n.player input[type=range] {\n  flex: auto; }\n\n.player input[type=range] {\n  -webkit-appearance: none;\n  background: rgba(0, 0, 0, 0.2);\n  height: 3px;\n  margin-left: 10px; }\n\n.player input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 7px;\n  background: #333; }\n\n.player input[type=range]:focus {\n  outline: none; }\n\n.raindrop {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  border: 100px solid black;\n  border-radius: 50%;\n  box-sizing: border-box;\n  transform: scale(0); }\n',o=(o=void 0===o?{}:o).insertAt,"undefined"!=typeof document&&(c=document.head||document.getElementsByTagName("head")[0],(d=document.createElement("style")).type="text/css","top"===o&&c.firstChild?c.insertBefore(d,c.firstChild):c.appendChild(d),d.styleSheet?d.styleSheet.cssText=i:d.appendChild(document.createTextNode(i)));var i,o,c,d,x=v.createContext(null);function C(){var e="undefined"!=typeof window?window:{};return{width:e.innerWidth,height:e.innerHeight}}a.defaultProps={name:"animation",id:1,ratio:{width:1080,height:720},keyframes:{},style:{},layerStyle:{},playSpeed:1,delay:0,autoPlay:!1,children:v.createElement("div",null),iteration:"infinite"},a.propTypes={name:n.string,id:n.number,ratio:n.object,keyframes:n.object,style:n.object,layerStyle:n.object,playSpeed:n.number,delay:n.number,autoPlay:n.bool,children:n.any,iteration:n.any};function p(e){var n,t,r,a=e.children,i=e.width,o=e.height,l=e.jsCanva,s=e.autoPlay,c=e.controls,e=e.fullWidth,d=v.useContext(x),p=v.useRef(null),u=(g=w(v.useState(!1),2))[0],f=g[1],h=(g=w(v.useState(0),2))[0],y=g[1];n=i,t=o,g=w(v.useState(C()),2),m=g[0],r=g[1],v.useEffect(function(){function e(){var e={height:C().height/(16/9),width:C().width/(16/9)};e.scale=Math.min(e.width/n,e.height/t),r(e)}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]);var m=(g=m).height,b=g.width,g=g.scale;return v.useEffect(function(){var n=d.getDuration();l(d),s&&(d.play(),f(!0)),d.on("play",function(e){f(!0)}),d.on("paused",function(e){f(!1)}),d.on("animate",function(e){y(100*e.time/n)})},[s]),v.createElement("div",{id:"canvasContainer"},v.createElement("div",{className:"Canvas",id:"recorderCanvas",ref:p},v.createElement("div",{className:"CanvasInner",style:e?{width:"100%",height:"100%"}:{width:b,height:m}},v.createElement("div",{id:"Composition",className:"Composition",style:e?{width:i,height:o}:{width:i,height:o,transform:"translate(-50%, -50%) scale(".concat(g||1,")")}},v.createElement("div",{className:"Layers",style:{width:i,height:o}},a)))),c&&v.createElement("div",{className:"playerWrapper"},v.createElement("div",{className:"player",style:{width:b}},v.createElement("div",{className:"".concat(u?"pause":"play"),onClick:function(){d.isPaused()?d.play():d.pause()}}),v.createElement("input",{className:"progress",type:"range",onChange:function(e){d.pause(),d.setTime(e.target.value+"%")},value:h.toString(),min:"0",max:"100"}))))}function u(e){var n=e.children,t=e.width,r=e.height,a=e.jsCanva,i=e.autoPlay,o=e.controls,e=e.fullWidth;return v.createElement(x.Provider,{value:new l({},{easing:l.EASE_IN_OUT,iterationCount:1,selector:!0}).setTime(0)},v.createElement(p,{height:r,width:t,autoPlay:i,controls:o,jsCanva:a,fullWidth:e},n))}u.defaultProps={width:1920,height:1080,children:[],autoPlay:!1,controls:!0,jsCanva:function(){},fullWidth:!1},u.propTypes={width:n.number,height:n.number,children:n.any,autoPlay:n.bool,controls:n.bool,jsCanva:n.any,fullWidth:n.bool},e.Canvas=u,e.Layer=a});
//# sourceMappingURL=ocanvas.js.map
