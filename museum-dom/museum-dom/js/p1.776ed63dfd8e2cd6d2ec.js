(()=>{var e={288:()=>{var e;(e=["./assets/img/gallery/galery1.jpg","./assets/img/gallery/galery2.jpg","./assets/img/gallery/galery3.jpg","./assets/img/gallery/galery4.jpg","./assets/img/gallery/galery5.jpg","./assets/img/gallery/galery6.jpg","./assets/img/gallery/galery7.jpg","./assets/img/gallery/galery8.jpg","./assets/img/gallery/galery9.jpg","./assets/img/gallery/galery10.jpg","./assets/img/gallery/galery11.jpg","./assets/img/gallery/galery12.jpg","./assets/img/gallery/galery13.jpg","./assets/img/gallery/galery14.jpg","./assets/img/gallery/galery15.jpg"],e.sort((()=>Math.random()-.5))).forEach((e=>{let t=document.createElement("img");t.setAttribute("src",e),t.classList.add("section__gallery_item"),document.querySelector(".section__gallery_inner-container").append(t)}))},660:()=>{const e=document.querySelectorAll(".popup-link");if(e.length>0)for(let t=0;t<e.length;t++){const o=e[t];o.addEventListener("click",(function(e){const t=o.getAttribute("href").replace("#","");l(document.getElementById(t)),e.preventDefault()}))}const t=document.querySelector(".close-popup");if(t.length>0)for(let e=0;e<t.length;e++){const l=t[e];l.addEventListener("click",(function(e){o(l.closest(".popup")),e.preventDefault()}))}function l(e){if(e){const t=document.querySelector(".popup.open");t&&o(t),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||o(e.target.closest(".popup"))}))}}function o(e){e.classList.remove("open")}},268:()=>{const e=document.querySelector(".play"),t=document.querySelector(".pause"),l=document.querySelectorAll(".video_one"),o=document.querySelector(".video_arrow_right"),n=document.querySelector(".video_arrow_left"),r=document.querySelector(".play_active"),s=document.querySelector(".pause_active"),c=document.querySelector(".video_one_button-play"),i=document.querySelector(".video_one_button"),d=(document.querySelector(".progress__space-line"),document.querySelector(".progress__wrapper")),a=document.querySelector(".progress__red-line"),u=document.querySelector(".volume_on"),y=document.querySelector(".volume_off"),p=document.querySelector(".j-volume"),g=document.querySelector(".fullscrin"),m=document.querySelector(".fullscrin_exit"),_=document.querySelector(".section__video_one"),v=document.querySelector(".video_controls");e.addEventListener("click",L),t.addEventListener("click",k),o.addEventListener("click",(function(){f==l.length&&(f=0),f++,r.style.display="block",s.style.display="none",c.style.display="block"})),o.addEventListener("click",(function(){l[f]==l[5]&&(l[f-1].pause(),l[f-1].currentTime=0,f=0),l[f-1].pause(),l[f-1].currentTime=0})),n.addEventListener("click",(function(){-1==f&&(f=4),f--,c.style.display="block"})),n.addEventListener("click",(function(){l[f]==l[-1]&&(l[f+1].pause(),l[f+1].currentTime=0,f=4),l[f+1].pause(),l[f+1].currentTime=0})),c.addEventListener("click",L),d.addEventListener("click",(function(e){const t=e.offsetX/d.offsetWidth*l[f].duration;l[f].currentTime=t})),u.addEventListener("click",S),y.addEventListener("click",q),p.addEventListener("input",(function(){let e=p.value;l[f].volume=e/100,0==l[f].volume?(u.style.display="none",y.style.display="block"):(u.style.display="block",y.style.display="none")})),g.addEventListener("click",b),m.addEventListener("click",x),window.addEventListener("keydown",(e=>{console.log(e),"Space"==e.code&&e.preventDefault()})),l.forEach((e=>{e.addEventListener("timeupdate",E),e.addEventListener("ended",w),e.addEventListener("keydown",(e=>{!function(e){let t=window.event||e;"Space"==e.code?l[f].paused?L():k():"KeyM"==e.code?0!==l[f].volume?S():q():"KeyF"==e.code?document.fullscreenElement?x():b():"ShiftRight"==t.code&&"Comma"==t.code&&(l[f].playbackRate=1.5)}(e)})),e.addEventListener("click",h)}));let f=0;function h(){return l[f].paused?L():k()}function L(){l[f].play(),r.style.display="none",s.style.display="block",c.style.display="none"}function k(){l[f].pause(),r.style.display="block",s.style.display="none",c.style.display="block"}function E(){const e=Number(l[f].duration.toFixed()),t=Number(l[f].currentTime.toFixed());a.style.width=t/(e/100)+"%"}function w(){r.style.display="block",s.style.display="none",c.style.display="block"}function S(){u.style.display="none",y.style.display="block",l[f].volume=0,p.value=0,p.style.background="#C4C4C4"}function q(){u.style.display="block",y.style.display="none",l[f].volume=.4,p.value=40}function b(){_.requestFullscreen(),g.style.display="none",m.style.display="block",l[f].classList.add("video_one_fullscreen"),l[f].classList.remove("video_one"),_.classList.add("video_controls_fullscreen"),v.style.left="50%",v.style.transform="translateX(-50%)",i.style.left="50%",i.style.top="50%",i.style.transform="translate(-50%, -50%)"}function x(){document.fullscreenElement?document.exitFullscreen():_.requestFullscreen(),l[f].classList.add("video_one"),l[f].classList.remove("video_one_fullscreen"),g.style.display="block",m.style.display="none",v.style.left="",v.style.transform="",i.style.left="",i.style.top="",i.style.transform=""}[...document.querySelectorAll(".progress_style")].forEach((function(e){e.addEventListener("input",(function(){const e=this.value;this.style.background=`linear-gradient(to right, \n      #710707 0%, #710707 ${e}%, #C4C4C4 ${e}%, #C4C4C4 100%)`}))})),document.querySelectorAll(".hamb").length>0&&(document.querySelector(".hamb").onclick=function(){document.querySelector("html").classList.toggle("menu_open")}),$(".section__welcome_slider_container").slick({prevArrow:$(".welcome__arrow_left"),nextArrow:$(".welcome__arrow_right"),speed:1e3,dots:!0,appendDots:$(".welcome__slider_dots")});const j=document.querySelector(".section__explore_slider_wrap"),C=j.querySelector(".explore_slider_before"),A=C.querySelector(".explore_slider_before-pic"),T=j.querySelector(".explore_slider_change"),F=document.querySelector(".section__explore_slider_wrap");let D=!1;document.addEventListener("DOMContentLoaded",(()=>{let e=j.offsetWidth;A.style.width=`${e}px`}));const M=e=>{let t=Math.max(0,Math.min(e,j.offsetWidth));C.style.width=`${t}px`,T.style.left=`${t}px`},N=e=>(e.stopPropagation(),e.preventDefault(),!1);F.addEventListener("mousedown",(()=>{D=!0})),F.addEventListener("mouseup",(()=>{D=!1})),F.addEventListener("mouseleave",(()=>{D=!1})),F.addEventListener("mousemove",(e=>{if(!D)return;let t=e.pageX;t-=j.getBoundingClientRect().left,M(t),N(e)})),F.addEventListener("touchstart",(()=>{D=!0})),F.addEventListener("touchend",(()=>{D=!1})),F.addEventListener("touchcancel",(()=>{D=!1})),F.addEventListener("touchmove",(e=>{if(!D)return;let t,l;for(l=0;l<e.changedTouches.length;l++)t=e.changedTouches[l].pageX;t-=j.getBoundingClientRect().left,M(t),N(e)})),$(".section__video_slider-one").slick({prevArrow:$(".video_arrow_left"),nextArrow:$(".video_arrow_right"),swipe:!1,dots:!0,appendDots:$(".slider_dot_item_dot"),asNavFor:".slider_video_two"}),$(".slider_video_two").slick({prevArrow:$(".video_arrow_left"),nextArrow:$(".video_arrow_right"),swipe:!1,slidesToShow:3,slidesToScroll:1,asNavFor:".section__video_slider-one"})}},t={};function l(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,l),r.exports}l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";l(268),l(288),l(660)})()})();