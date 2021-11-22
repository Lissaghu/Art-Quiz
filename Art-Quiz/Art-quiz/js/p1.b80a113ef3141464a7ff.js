(()=>{"use strict";let t;(async()=>{let t=await fetch("../../components/Images/images.json");return await t.json()})().then((e=>{t=e}));const e=["Portrait","Landscape","Still Life","Graphic","Antique","Avant-Garde","Renaissance","Surrealism","Kitsch","Minimalism","Avangard","Industrial"],n=class{constructor(){this.state}render(t){return(async()=>{const e=document.querySelector(".main-wrapper");e.innerHTML="",e.innerHTML='\n      <div class="categories-pictures-wrapper">\n        <div class="main-categories-pictures">\n          <div class="categories-pictures-title">Categories</div>\n          <div class="pictures-grid"></div>\n          <div class="categories-pictures-sidebar">\n              <button class="sidebar-home sidebar-button button-controller" data-page="Main">Home</button>\n              <button class="sidebar-categories sidebar-button" data-page="Pictures">Categories</button>\n          </div>\n        </div>\n      </div>',this.state=t,await this.createCategoryCard(12,10,0),this.setEventListeners()})()}createCategoryCard(t,n,s){let a=document.querySelector(".pictures-grid"),o=0;return(async()=>{let i=await fetch("../../components/Images/images.json"),r=await i.json();for(let i of r)if(i.imageNum%n==0&&i.imageNum<t*n+s-1&&i.imageNum>=s){let t=document.createElement("div");t.classList.add("pictures-grid-item"),a.append(t);let n=document.createElement("div");n.classList.add("pictures-grid-item-wrap-title"),t.append(n);let s=document.createElement("div");s.classList.add("pictures-grid-item-title"),s.textContent=e[o],n.append(s);let r=document.createElement("div");r.classList.add("pictures-count"),n.append(r);let c=document.createElement("div");c.classList.add("pictures-img-wrap"),t.append(c);let u=document.createElement("img");u.src=`https://raw.githubusercontent.com/Lissaghu/image-data/master/img/${i.imageNum}.webp`,u.classList.add("pictures-img"),u.setAttribute("data-category",o),c.append(u),o++}})()}setEventListeners(){document.querySelectorAll("img").forEach((t=>{t.addEventListener("click",(()=>this.questionRender(event)))}))}questionRender(e){e.target.dataset.category&&(this.state.category=+e.target.dataset.category,this.state.currentPage=new class{constructor(){this.author=new class{constructor(){this.state}createAuthor(e,n,s){return(async()=>{this.state=s;let n=0,a=document.querySelectorAll(".question-author-button"),o=10*this.state.category,i=t.slice(o).map((t=>t.author)),r=t.map((t=>t.author)),c=t=>Math.floor(Math.random()*t);a.forEach((t=>{t.textContent=r[c(240)]})),a[c(4)].textContent=i[n];let u=document.querySelector(".button-next-wrap");document.querySelector(".button-modal-next").addEventListener("click",(()=>{u.classList.remove("button-next-wrap-open"),document.querySelectorAll(".question-author-button").forEach((t=>{t.classList.remove("question-author-button-green"),t.classList.remove("question-author-button-red")})),a.forEach((t=>{t.textContent=r[c(240)]})),a[c(4)].textContent=i[n+1],n!=e&&n++}))})()}},this.state}render(t){let e=async()=>{let n=document.querySelector(".main-wrapper");n.innerHTML="",n.innerHTML='\n        <div class="question-picture-wrapper">\n            <div class="question-picture">\n                <div class="question-close-modal">\n                    <button class="button-close-modal-menu btn-question-close"></button>\n                    <div class="question-close-modal-text btn-question-close">Do you really want to quit the game?</div>\n                    <button class="button question-close-modal-menu btn-question-close button-controller" data-page="Main">Menu</button>\n                    <button class="button  question-close-modal-category btn-question-close button-controller" data-page="Pictures">Categories</button>\n                </div>\n                <div class="question-picture-header">\n                    <button class="question-close button-controller"></button>\n                    <div class="question-picture-header-time"></div>\n                </div>\n                <div class="question-picture-question">Who is the author of this picture?</div>\n                <div class="question-picture-wrap"></div>\n                <div class="question-author-button-wrap">\n                    <button class="button question-author-button"></button>\n                    <button class="button question-author-button"></button>\n                    <button class="button question-author-button"></button>\n                    <button class="button question-author-button"></button>\n                </div>\n                <div class="main-footer">\n                    <a href="https://rs.school/js/" target="blank"><img class="footer-logo" src="./assets/svg/rs_school_js.svg" alt=""></a>\n                    <div class="footer-name">App developer: <a class="footer-name-link" href="https://github.com/Lissaghu" target="blank">Anton Dogadin</a></div>\n                    <div class="footer-year">2021</div>\n                </div>\n                <div class="button-next-wrap">\n                    <div class="current-image"></div>\n                    <div class="current-name"></div>\n                    <div class="current-author"></div>\n                    <div class="current-year"></div>\n                    <button class="button button-modal-next">Next</button>\n                </div>\n                <div class="quiz-modal-end">\n                    <button class="quiz-modal-end-close button-controller quiz-end-main" data-page="Main"></button>\n                    <div class="end-text">Congratulations!</div>\n                    <div class="end-result">8/10</div>\n                    <button class="button modal-button-end-exit button-controller quiz-end-main" data-page="Main">Exit</button>\n                    <button class="button modal-button-end-next button-controller" data-page="Pictures">Next Quiz</button>\n                </div>\n                <div class="overflow"></div>\n            </div>\n        </div>',this.state=t,t.setEventListeners(),await this.author.createAuthor(9,e,this.state),await this.createImage(9,e),this.modalCloseQuiz(),this.target(e)};return e()}createImage(e){return(async()=>{let n=0,s=(document.querySelector(".main-wrapper"),document.querySelector(".question-picture-wrap")),a=10*this.state.category,o=t.slice(a).map((t=>t.imageNum)),i=document.createElement("img");i.classList.add("question-picture-img"),i.src=`https://raw.githubusercontent.com/Lissaghu/image-data/master/full/${o[n]}full.webp`,s.append(i);let r=document.querySelector(".overflow");document.querySelector(".button-modal-next").addEventListener("click",(()=>{r.classList.remove("overflow-active"),s.innerHTML="";let t=document.createElement("img");t.classList.add("question-picture-img"),t.src=`https://raw.githubusercontent.com/Lissaghu/image-data/master/full/${+o[n]+1}full.webp`,s.append(t),n==e?(this.state.setEventListeners(),this.modalEndQuiz()):n++}))})()}target(e){let n=0,s=document.querySelectorAll(".question-author-button"),a=10*this.state.category,o=t.slice(a).map((t=>t.author)),i=t.slice(a).map((t=>t.imageNum)),r=t.slice(a).map((t=>t.year)),c=t.slice(a).map((t=>t.name)),u=document.querySelector(".current-image"),l=document.querySelector(".current-name"),d=document.querySelector(".current-author"),m=document.querySelector(".current-year"),v=document.querySelector(".button-next-wrap"),p=document.createElement("div");p.classList.add("answer-true");let g=document.querySelector(".overflow");s.forEach((t=>{t.addEventListener("click",(e=>{g.classList.add("overflow-active"),e.target.innerText==o[n]?(t.classList.add("question-author-button-green"),p.classList.remove("answer-false")):(p.classList.add("answer-false"),t.classList.add("question-author-button-red")),u.innerHTML="",l.innerHTML="",d.innerHTML="",m.innerHTML="";let s=document.createElement("img");s.classList.add("question-picture-img-modal"),s.src=`https://raw.githubusercontent.com/Lissaghu/image-data/master/full/${i[n]}full.webp`,u.append(p),u.append(s),l.append(c[n]),d.append(o[n]),m.append(r[n]),v.classList.add("button-next-wrap-open"),n++}))}))}modalCloseQuiz(){let t=document.querySelector(".question-close"),e=document.querySelector(".overflow"),n=document.querySelector(".question-close-modal");t.addEventListener("click",(()=>{e.classList.add("overflow-active"),n.classList.add("question-close-modal-open")})),document.querySelectorAll(".btn-question-close").forEach((t=>{t.addEventListener("click",(()=>{e.classList.remove("overflow-active"),n.classList.remove("question-close-modal-open")}))}))}modalEndQuiz(){return(async()=>{let t=document.querySelector(".quiz-modal-end");t.classList.add("quiz-modal-end-open");let e=document.querySelector(".overflow");e.classList.add("overflow-active"),document.querySelectorAll(".quiz-end-main").forEach((n=>{n.addEventListener("click",(()=>{t.classList.remove("quiz-modal-end-open"),e.classList.remove("overflow-active")}))})),document.querySelector(".modal-button-end-next").addEventListener("click",(()=>{t.classList.remove("quiz-modal-end-open"),e.classList.remove("overflow-active")}))})()}}),this.state.currentPage.render(this.state)}},s=class{render(){const t=document.querySelector(".main-wrapper");t.innerHTML="",t.innerHTML='\n      <div class="main-page" id="main">\n        <button class="settings button-controller" data-page="Settings"></button>\n        <div class="main">\n            <img class="logo-main" src="./assets/img/logo-main.png" alt="">\n            <button class="button button-artist button-controller" data-page="Artists">Artist quiz</button>\n            <button class="button button-pictures button-controller" data-page="Pictures">Pictures quiz</button>\n        </div>\n        <div class="main-footer">\n            <a href="https://rs.school/js/" target="blank"><img class="footer-logo" src="./assets/svg/rs_school_js.svg" alt=""></a>\n            <div class="footer-name">App developer: <a class="footer-name-link" href="https://github.com/Lissaghu" target="blank">Anton Dogadin</a></div>\n            <div class="footer-year">2021</div>\n        </div>\n      </div>'}},a=new Map([["Settings",class{render(){const t=document.querySelector(".main-wrapper");t.innerHTML="",t.innerHTML='\n    <div class="main-settings">\n      <button class="settigs-back button-controller" data-page="Main"></button>\n      <div class="settings-name">Settings</div>\n      <div class="volume-name">Volume</div>\n      <div class="settings-volume-range">\n          <input class="volume-range" id="volume" type="range"\n      max="100" value="34" min="0" step="2">\n          <div class="button-mute"></div>\n          <div class="button-volume"></div>\n      </div>\n      <div class="time-game-name">Time game</div>\n      <div class="time-game-input">\n          <input type="checkbox">\n\n      </div>\n      <div class="time-answer">Time to answer</div>\n      <div class="time-input">\n          <button class="button-prev btn-settings">&minus;</button>\n          <div class="time-input-count">20</div>\n          <button class="button-next btn-settings">+</button>\n      </div>\n      <div class="main-settings-button">\n          <button class="button-default button button-controller" data-page="Main">Default</button>\n          <button class="button-save button button-controller" data-page="Main">Save</button>\n      </div>\n      <div class="main-footer">\n          <a href="https://rs.school/js/" target="blank"><img class="footer-logo" src="./assets/svg/rs_school_js.svg" alt=""></a>\n          <div class="footer-name">App developer: <a class="footer-name-link" href="https://github.com/Lissaghu" target="blank">Anton Dogadin</a></div>\n          <div class="footer-year">2021</div>\n      </div>\n    </div>'}}],["Main",s],["Pictures",n],["Artists",class{constructor(){this.pictureClass=new n}render(){const t=document.querySelector(".main-wrapper");t.innerHTML="",t.innerHTML='\n    <div class="categories-pictures-wrapper">\n    <div class="main-categories-pictures">\n      <div class="categories-pictures-title">Categories</div>\n      <div class="pictures-grid"></div>\n      <div class="categories-pictures-sidebar">\n          <button class="sidebar-home sidebar-button button-controller" data-page="Main">Home</button>\n          <button class="sidebar-categories sidebar-button" data-page="Artists">Categories</button>\n      </div>\n    </div>\n  </div>',this.pictureClass.createCategoryCard(12,10,119)}}]]);window.onload=()=>{document.querySelector(".pswp__preloader__icn").classList.add("pswp__preloader__icn-hide"),(new class{constructor(t=new s,e,n){this.state={currentPage:t,trueAnswer:e,category:n}}init(){this.state.currentPage.render(),this.setEventListeners()}setEventListeners(){document.querySelectorAll(".button-controller").forEach((t=>{t.addEventListener("click",(()=>this.changePage(event)))}))}changePage(t){var e;t&&(this.state.currentPage=(e=t.target.dataset.page,new(a.get(e)))),this.state.currentPage.render(this),this.setEventListeners()}}).init()}})();