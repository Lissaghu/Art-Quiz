(()=>{var e={288:()=>{var e;(e=["./assets/img/gallery/galery1.jpg","./assets/img/gallery/galery2.jpg","./assets/img/gallery/galery3.jpg","./assets/img/gallery/galery4.jpg","./assets/img/gallery/galery5.jpg","./assets/img/gallery/galery6.jpg","./assets/img/gallery/galery7.jpg","./assets/img/gallery/galery8.jpg","./assets/img/gallery/galery9.jpg","./assets/img/gallery/galery10.jpg","./assets/img/gallery/galery11.jpg","./assets/img/gallery/galery12.jpg","./assets/img/gallery/galery13.jpg","./assets/img/gallery/galery14.jpg","./assets/img/gallery/galery15.jpg"],e.sort((()=>Math.random()-.5))).forEach((e=>{let t=document.createElement("img");t.setAttribute("src",e),t.classList.add("section__gallery_item"),document.querySelector(".section__gallery_inner-container").append(t)}))},660:()=>{const e=document.querySelectorAll(".popup-link");if(e.length>0)for(let t=0;t<e.length;t++){const r=e[t];r.addEventListener("click",(function(e){const t=r.getAttribute("href").replace("#","");o(document.getElementById(t)),e.preventDefault()}))}const t=document.querySelector(".close-popup");if(t.length>0)for(let e=0;e<t.length;e++){const o=t[e];o.addEventListener("click",(function(e){r(o.closest(".popup")),e.preventDefault()}))}function o(e){if(e){const t=document.querySelector(".popup.open");t&&r(t),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||r(e.target.closest(".popup"))}))}}function r(e){e.classList.remove("open")}},268:()=>{const e=document.querySelector(".play"),t=document.querySelector(".pause"),o=document.querySelectorAll(".video_one"),r=document.querySelector(".video_arrow_right"),l=document.querySelector(".video_arrow_left"),n=document.querySelector(".play_active"),s=document.querySelector(".pause_active"),i=document.querySelector(".video_one_button-play"),c=document.querySelector(".video_one_button"),a=(document.querySelector(".progress__space-line"),document.querySelector(".progress__wrapper")),d=document.querySelector(".progress__red-line"),u=document.querySelector(".volume_on"),p=document.querySelector(".volume_off"),y=document.querySelector(".j-volume"),m=document.querySelector(".fullscrin"),g=document.querySelector(".fullscrin_exit"),v=document.querySelector(".section__video_one"),_=document.querySelector(".video_controls");e.addEventListener("click",k),t.addEventListener("click",h),r.addEventListener("click",(function(){f==o.length&&(f=0),f++,n.style.display="block",s.style.display="none",i.style.display="block"})),r.addEventListener("click",(function(){o[f]==o[5]&&(o[f-1].pause(),o[f-1].currentTime=0,f=0),o[f-1].pause(),o[f-1].currentTime=0})),l.addEventListener("click",(function(){-1==f&&(f=4),f--,i.style.display="block"})),l.addEventListener("click",(function(){o[f]==o[-1]&&(o[f+1].pause(),o[f+1].currentTime=0,f=4),o[f+1].pause(),o[f+1].currentTime=0})),i.addEventListener("click",k),a.addEventListener("click",(function(e){const t=e.offsetX/a.offsetWidth*o[f].duration;o[f].currentTime=t})),u.addEventListener("click",E),p.addEventListener("click",S),y.addEventListener("input",(function(){let e=y.value;o[f].volume=e/100,0==o[f].volume?(u.style.display="none",p.style.display="block"):(u.style.display="block",p.style.display="none")})),m.addEventListener("click",q),g.addEventListener("click",x),window.addEventListener("keydown",(e=>{console.log(e),"Space"==e.code&&e.preventDefault()})),o.forEach((e=>{e.addEventListener("timeupdate",b),e.addEventListener("ended",w),e.addEventListener("keydown",(e=>{!function(e){"Space"==e.code?o[f].paused?k():h():"KeyM"==e.code?0!==o[f].volume?E():S():"KeyF"==e.code?document.fullscreenElement?x():q():e.shiftKey&&"Comma"==e.code?o[f].playbackRate+=.1:e.shiftKey&&"Period"==e.code&&(o[f].playbackRate-=.1)}(e)})),e.addEventListener("click",L)}));let f=0;function L(){return o[f].paused?k():h()}function k(){o[f].play(),n.style.display="none",s.style.display="block",i.style.display="none"}function h(){o[f].pause(),n.style.display="block",s.style.display="none",i.style.display="block"}function b(){const e=Number(o[f].duration.toFixed()),t=Number(o[f].currentTime.toFixed());d.style.width=t/(e/100)+"%"}function w(){n.style.display="block",s.style.display="none",i.style.display="block"}function E(){u.style.display="none",p.style.display="block",o[f].volume=0,y.value=0,y.style.background="#C4C4C4"}function S(){u.style.display="block",p.style.display="none",o[f].volume=.4,y.value=40}function q(){v.requestFullscreen(),m.style.display="none",g.style.display="block",o[f].classList.add("video_one_fullscreen"),o[f].classList.remove("video_one"),v.classList.add("video_controls_fullscreen"),_.style.left="50%",_.style.transform="translateX(-50%)",c.style.left="50%",c.style.top="50%",c.style.transform="translate(-50%, -50%)"}function x(){document.fullscreenElement?document.exitFullscreen():v.requestFullscreen(),o[f].classList.add("video_one"),o[f].classList.remove("video_one_fullscreen"),m.style.display="block",g.style.display="none",_.style.left="",_.style.transform="",c.style.left="",c.style.top="",c.style.transform=""}[...document.querySelectorAll(".progress_style")].forEach((function(e){e.addEventListener("input",(function(){const e=this.value;this.style.background=`linear-gradient(to right, \n      #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`}))})),document.querySelectorAll(".hamb").length>0&&(document.querySelector(".hamb").onclick=function(){document.querySelector("html").classList.toggle("menu_open")}),$(".section__welcome_slider_container").slick({prevArrow:$(".welcome__arrow_left"),nextArrow:$(".welcome__arrow_right"),speed:1e3,dots:!0,appendDots:$(".welcome__slider_dots")});const j=document.querySelector(".section__explore_slider_wrap"),M=j.querySelector(".explore_slider_before"),C=M.querySelector(".explore_slider_before-pic"),F=j.querySelector(".explore_slider_change"),T=document.querySelector(".section__explore_slider_wrap");let A=!1;document.addEventListener("DOMContentLoaded",(()=>{let e=j.offsetWidth;C.style.width=`${e}px`}));const P=e=>{let t=Math.max(0,Math.min(e,j.offsetWidth));M.style.width=`${t}px`,F.style.left=`${t}px`},D=e=>(e.stopPropagation(),e.preventDefault(),!1);T.addEventListener("mousedown",(()=>{A=!0})),T.addEventListener("mouseup",(()=>{A=!1})),T.addEventListener("mouseleave",(()=>{A=!1})),T.addEventListener("mousemove",(e=>{if(!A)return;let t=e.pageX;t-=j.getBoundingClientRect().left,P(t),D(e)})),T.addEventListener("touchstart",(()=>{A=!0})),T.addEventListener("touchend",(()=>{A=!1})),T.addEventListener("touchcancel",(()=>{A=!1})),T.addEventListener("touchmove",(e=>{if(!A)return;let t,o;for(o=0;o<e.changedTouches.length;o++)t=e.changedTouches[o].pageX;t-=j.getBoundingClientRect().left,P(t),D(e)})),$(".section__video_slider-one").slick({prevArrow:$(".video_arrow_left"),nextArrow:$(".video_arrow_right"),swipe:!1,dots:!0,appendDots:$(".slider_dot_item_dot"),asNavFor:".slider_video_two"}),$(".slider_video_two").slick({prevArrow:$(".video_arrow_left"),nextArrow:$(".video_arrow_right"),swipe:!1,slidesToShow:3,slidesToScroll:1,asNavFor:".section__video_slider-one"}),mapboxgl.accessToken="pk.eyJ1IjoibGlzc2FnaHUiLCJhIjoiY2t1b2g3Z3ltMGVtMDJ3bWR2M2k4M2l2OCJ9.PviHQpficoBcUBvFo5Y9HA";const N=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[2.3364,48.86091],zoom:15.75}),O=[{type:"One",geometry:{type:"Point",coordinates:[2.3364,48.86091]},properties:{title:"Mapbox",description:"Louvre, France"}},{type:"Two",geometry:{type:"Point",coordinates:[2.3333,48.8602]},properties:{title:"Mapbox",description:"Louvre, France"}},{type:"Three",geometry:{type:"Point",coordinates:[2.3397,48.8607]},properties:{title:"Mapbox",description:"Louvre, France"}},{type:"Four",geometry:{type:"Point",coordinates:[2.333,48.8619]},properties:{title:"Mapbox",description:"Louvre, France"}},{type:"Five",geometry:{type:"Point",coordinates:[2.3365,48.8625]},properties:{title:"Mapbox",description:"Louvre, France"}}];for(const{geometry:e,properties:t}of O)document.createElement("div").className="marker",new mapboxgl.Marker({color:"#757575"}).setLngLat(e.coordinates).addTo(N);new mapboxgl.Marker({color:"#171717"}).setLngLat([2.3364,48.86091]).addTo(N),N.addControl(new mapboxgl.NavigationControl),alert("Проверь пожалуйста в последний день cross-check, я не успел многое доделать, буду очень признателен)")}},t={};function o(r){var l=t[r];if(void 0!==l)return l.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(268),o(288),o(660)})()})();