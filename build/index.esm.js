import e,{createContext as n,useContext as t,useEffect as r,useState as a,useRef as i}from"react";import o from"prop-types";import l from"scenejs";function s(n,e){var t,r=Object.keys(n);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(n),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)),r}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach(function(e){p(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){var t;if(e)return"string"==typeof e?u(e,n):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}!function(e,n){var t,r,n=(n=void 0===n?{}:n).insertAt;"undefined"!=typeof document&&(t=document.head||document.getElementsByTagName("head")[0],(r=document.createElement("style")).type="text/css","top"===n&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)))}(':root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #494949;\n    --font-color: #fafafa; } }\n\n#canvasContainer {\n  min-width: 100%;\n  min-height: 100%; }\n\n.Canvas {\n  font-family: "Avenir Next", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin: auto;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background: #ebecf0; }\n  .Canvas .CanvasInner {\n    grid-area: canvas;\n    position: relative;\n    z-index: 0;\n    padding: 10px; }\n    .Canvas .CanvasInner .Composition {\n      position: relative;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      transform-origin: center center;\n      -webkit-box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      -moz-box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      overflow: hidden; }\n      .Canvas .CanvasInner .Composition .Layers {\n        pointer-events: none;\n        background: white; }\n\n.playerWrapper {\n  position: absolute;\n  bottom: 20px;\n  margin: 0;\n  left: 0;\n  right: 0;\n  z-index: 99999999999;\n  display: flex;\n  justify-content: center; }\n\n.player {\n  position: relative;\n  align-items: center;\n  display: flex; }\n\n.circles .circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 200px;\n  height: 200px;\n  border: 100px solid black;\n  border-radius: 50%;\n  transform: translate(-50%, -50%); }\n\n.player .play, .player .pause, .player .progress {\n  display: inline-block;\n  vertical-align: middle; }\n\n.player .play {\n  border-left: 14px solid #333;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent; }\n\n.player .pause {\n  border-left: 4px solid #333;\n  border-right: 4px solid #333;\n  width: 14px;\n  height: 16px;\n  box-sizing: border-box; }\n\n.player input[type=range] {\n  flex: auto; }\n\n.player input[type=range] {\n  -webkit-appearance: none;\n  background: rgba(0, 0, 0, 0.2);\n  height: 3px;\n  margin-left: 10px; }\n\n.player input[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 7px;\n  background: #333; }\n\n.player input[type=range]:focus {\n  outline: none; }\n\n.raindrop {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  border: 100px solid black;\n  border-radius: 50%;\n  box-sizing: border-box;\n  transform: scale(0); }\n');var h=n(null),f=function(n){var a=n.children,o=n.name,i=(n.id,n.ratio,n.keyframes),l=n.style,s=(n.layerStyle,n.playSpeed,n.delay),d=(n.autoPlay,n.iteration),p=n.uid,u=t(h);return r(function(){u.newItem(".Layer-".concat(o.replaceAll(" ","_")+p),{selector:!0}).set(c(c({},i),{},{options:{delay:s,iteration:d}}))},[]),e.createElement("div",{"data-testid":"Layer-".concat(o.replaceAll(" ","_")+p),style:c({margin:"auto"},l),className:"Layer-".concat(o.replaceAll(" ","_")+p)},a)};function y(){var e="undefined"!=typeof window?window:{};return{width:e.innerWidth,height:e.innerHeight}}f.defaultProps={name:"animation",id:1,ratio:{width:1080,height:720},keyframes:{},style:{},layerStyle:{},playSpeed:1,delay:0,autoPlay:!1,children:e.createElement("div",null),iteration:"infinite",uid:Math.floor(1e3*Math.random()+1)},f.propTypes={name:o.string,id:o.number,ratio:o.object,keyframes:o.object,style:o.object,layerStyle:o.object,playSpeed:o.number,delay:o.number,autoPlay:o.bool,children:o.any,iteration:o.any};var m=function(n){var o,l,s,c=n.children,p=n.width,u=n.height,f=n.jsCanva,m=n.autoPlay,b=n.controls,n=n.fullWidth,g=t(h),v=i(null),w=d(a(!1),2),x=w[0],C=w[1],w=d(a(0),2),j=w[0],E=w[1],w=(o=p,l=u,w=d(a(y()),2),O=w[0],s=w[1],r(function(){function e(){var e={height:y().height/(16/9),width:y().width/(16/9)};e.scale=Math.min(e.width/o,e.height/l),s(e)}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),O),O=w.height,P=w.width,w=w.scale;return r(function(){var n=g.getDuration();f(g),m&&(g.play(),C(!0)),g.on("play",function(e){C(!0)}),g.on("paused",function(e){C(!1)}),g.on("animate",function(e){E(100*e.time/n)})},[m]),e.createElement("div",{id:"canvasContainer"},e.createElement("div",{className:"Canvas",id:"recorderCanvas",ref:v},e.createElement("div",{className:"CanvasInner",style:n?{width:"100%",height:"100%"}:{width:P,height:O}},e.createElement("div",{id:"Composition",className:"Composition",style:n?{width:p,height:u}:{width:p,height:u,transform:"translate(-50%, -50%) scale(".concat(w||1,")")}},e.createElement("div",{className:"Layers",style:{width:p,height:u}},c)))),b&&e.createElement("div",{className:"playerWrapper"},e.createElement("div",{className:"player",style:{width:P}},e.createElement("div",{className:"".concat(x?"pause":"play"),onClick:function(){g.isPaused()?g.play():g.pause()}}),e.createElement("input",{className:"progress",type:"range",onChange:function(e){g.pause(),g.setTime(e.target.value+"%")},value:j.toString(),min:"0",max:"100"}))))},b=function(n){var t=n.children,r=n.width,a=n.height,o=n.jsCanva,i=n.autoPlay,s=n.controls,n=n.fullWidth;return e.createElement(h.Provider,{value:new l({},{easing:l.EASE_IN_OUT,iterationCount:1,selector:!0}).setTime(0)},e.createElement(m,{height:a,width:r,autoPlay:i,controls:s,jsCanva:o,fullWidth:n},t))};b.defaultProps={width:1920,height:1080,children:[],autoPlay:!1,controls:!0,jsCanva:function(){},fullWidth:!1},b.propTypes={width:o.number,height:o.number,children:o.any,autoPlay:o.bool,controls:o.bool,jsCanva:o.any,fullWidth:o.bool};export{b as Canvas,f as Layer};
//# sourceMappingURL=index.esm.js.map
