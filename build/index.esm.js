import React,{useState,useEffect,createElement,useRef}from"react";import PropTypes from"prop-types";import{Scene}from"react-scenejs";function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);o=!0);}catch(e){s=!0,a=e}finally{try{o||null==t.return||t.return()}finally{if(s)throw a}}return i}}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _unsupportedIterableToArray(e,n){var t;if(e)return"string"==typeof e?_arrayLikeToArray(e,n):"Map"===(t="Object"===(t=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _slicedToArray(e,n){return _arrayWithHoles(e)||_iterableToArrayLimit(e,n)||_unsupportedIterableToArray(e,n)||_nonIterableRest()}function styleInject(e,n){var t,r,n=(n=void 0===n?{}:n).insertAt;e&&"undefined"!=typeof document&&(t=document.head||document.getElementsByTagName("head")[0],(r=document.createElement("style")).type="text/css","top"===n&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)))}var css_248z$1=':root {\n  --background: #fff;\n  --font-color: #494949; }\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --background: #494949;\n    --font-color: #fafafa; } }\n\n#canvasContainer {\n  min-width: 100%;\n  min-height: 100%; }\n\n.Canvas {\n  font-family: "Avenir Next", Helvetica, Arial, sans-serif;\n  margin: auto;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background: #ebecf0; }\n  .Canvas .CanvasInner {\n    grid-area: canvas;\n    position: relative;\n    z-index: 0;\n    padding: 10px; }\n    .Canvas .CanvasInner .Composition {\n      position: relative;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      transform-origin: center center;\n      -webkit-box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      -moz-box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      box-shadow: 0 2px 8px rgba(14, 19, 24, 0.07);\n      overflow: hidden; }\n      .Canvas .CanvasInner .Composition .Layer {\n        pointer-events: none;\n        background: white; }\n';function getWindowDimensions(){var e="undefined"!=typeof window?window:{};return{width:e.innerWidth,height:e.innerHeight}}function useWindowDimensions(e,n,t){var r=_slicedToArray(useState(getWindowDimensions()),2),a=r[0],i=r[1];return useEffect(function(){function e(){var e={height:getWindowDimensions().height/(16/9),width:getWindowDimensions().width/(16/9)};e.scale=Math.min(e.width/n,e.height/t),i(e)}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[]),a}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}styleInject(css_248z$1);var css_248z=".RainDrop .raindrops {\n  pointer-events: none; }\n  .RainDrop .raindrops .raindrop {\n    position: absolute;\n    width: 300px;\n    height: 300px;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    border: 100px solid black;\n    border-radius: 50%;\n    box-sizing: border-box;\n    transform: scale(0); }\n",RainDrop=(styleInject(css_248z),function(e){e.name,e.id;var n=e.keyframes,t=e.playSpeed,e=e.delay;return React.createElement("div",{"data-testid":"RainDrop",className:"RainDrop"},React.createElement(Scene,{keyframes:n,easing:"ease-in-out",fillMode:"forwards",direcition:"normal",iterationCount:"infinite",playSpeed:t,delay:e,autoplay:!0,ready:!0},React.createElement("div",{className:"raindrops"},React.createElement("div",{className:"raindrop circle1"}),React.createElement("div",{className:"raindrop circle2"}),React.createElement("div",{className:"raindrop circle3"}))))});function ownKeys(n,e){var t,r=Object.keys(n);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(n),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),r.push.apply(r,t)),r}function _objectSpread(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach(function(e){_defineProperty(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}RainDrop.defaultProps={name:"animation",id:1,keyframes:{},playSpeed:1,delay:0},RainDrop.propTypes={name:PropTypes.string,id:PropTypes.number,keyframes:PropTypes.object,playSpeed:PropTypes.number,delay:PropTypes.number};var Animations={raindrop:RainDrop},Animations$1=function(e){return void 0!==Animations[e.name]?createElement(Animations[e.name],_objectSpread({key:e.id},e)):createElement(function(){return React.createElement("div",null,"The animation ",e.name," has not been created yet.")},{key:e.id})},Canvas=function(e){var n=e.slides,t=e.width,e=e.height,r=useRef(null),a=useWindowDimensions(r,t,e),i=a.height,o=a.width,a=a.scale,s=_slicedToArray(useState(.1),2);return s[0],s[1],React.createElement("div",{id:"canvasContainer"},React.createElement("div",{className:"Canvas",id:"recorderCanvas",ref:r},React.createElement("div",{className:"CanvasInner",style:{width:o,height:i}},React.createElement("div",{className:"Composition",style:{width:t,height:e,transform:"translate(-50%, -50%) scale(".concat(a,")")}},React.createElement("div",{className:"Layer",style:{width:t,height:e}},n.map(function(e,n){return Animations$1(e)}))))))};Canvas.propTypes={slides:PropTypes.array,width:PropTypes.number,height:PropTypes.number},"undefined"!=typeof window&&(window.scene=Scene);export{Canvas};
//# sourceMappingURL=index.esm.js.map
