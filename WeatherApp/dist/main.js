(()=>{"use strict";var e={642:(e,t,o)=>{function r(e,t){document.getElementById(e).innerText=t}o.r(t),o.d(t,{default:()=>n});const n=function(){(async function(){const e=await fetch("https://api.openweathermap.org/data/2.5/weather?id=5913490&appid=812094d10dc57aeb1bbaf6899556b3c6",{mode:"cors"}),t=await e.json();return console.log(t),t})().then((function(e){r("temperature",e.main.temp),r("feels-like",e.main.feels_like),r("weather",e.weather[0].description),r("wind",e.wind.speed)}))}}},t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=o(642);const{temperature:t}=o(642);console.log((0,e.default)())})()})();