<<<<<<< HEAD
<<<<<<< HEAD
(()=>{"use strict";(()=>{const e=document.querySelector(".modal-overlay"),t=document.querySelector(".modal-callback");document.addEventListener("click",(l=>(l=>{l.target.closest(".callback-btn")&&(l.preventDefault(),t.style.display="block",e.style.display="block"),(l.target.closest(".modal-close")||l.target.closest(".modal-overlay"))&&(t.style.display="none",e.style.display="none")})(l)))})(),document.querySelector(".top-menu"),document.addEventListener("click",(e=>(e=>{if(e.target.closest(".top-menu")&&e.target.matches("ul>li>a")){e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}})(e)))})();
=======
(()=>{"use strict";(()=>{const e=document.querySelector(".modal-overlay"),t=document.querySelector(".modal-callback");document.addEventListener("click",(o=>(o=>{o.target.closest(".callback-btn")&&(o.preventDefault(),t.style.display="block",e.style.display="block"),(o.target.closest(".modal-close")||o.target.closest(".modal-overlay"))&&(t.style.display="none",e.style.display="none")})(o)))})(),document.querySelector(".top-menu"),document.addEventListener("click",(e=>(e=>{if(e.target.closest(".top-menu")&&e.target.matches("ul>li>a")){e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}})(e))),(()=>{const e=document.querySelector(".push70"),t=document.querySelector(".up"),o=document.querySelector(".up_href");window.addEventListener("scroll",(()=>{const o=document.documentElement.scrollTop;o<e.offsetTop?t.style.display="none":o>e.offsetTop&&(t.style.display="block")})),o.addEventListener("click",(e=>{e.preventDefault();const t=o.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))})()})();
>>>>>>> serviceScroll
=======
(()=>{"use strict";(()=>{const e=document.querySelector(".top-slider"),t=document.querySelectorAll(".item"),c=document.querySelector(".slick-dots");let o,l=document.querySelectorAll(".dot"),s=0;const a=(e,t,c)=>{e[t].classList.remove(c)},r=(e,t,c)=>{e[t].classList.add(c)},n=()=>{a(t,s,"item-active"),a(l,s,"slick-active"),s++,s>=t.length&&(s=0),r(t,s,"item-active"),r(l,s,"slick-active")},i=(e=1500)=>{o=setInterval(n,e)};t.length>0&&(c.innerHTML="",t.forEach(((e,t)=>{const o=document.createElement("li");o.classList.add("dot"),e.classList.contains("item-active")&&(o.classList.add("slick-active"),s=t),c.append(o)})),l=document.querySelectorAll(".dot"),e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot")&&(a(t,s,"item-active"),a(l,s,"slick-active"),e.target.classList.contains("dot")&&l.forEach(((t,c)=>{e.target===t&&(s=c)})),s>=t.length&&(s=0),s<0&&(s=t.length-1),r(t,s,"item-active"),r(l,s,"slick-active"))}))),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot")&&clearTimeout(o)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot")&&i(3e3)}),!0),i(3e3)})(),(()=>{const e=document.querySelector(".modal-overlay"),t=document.querySelector(".modal-callback");document.addEventListener("click",(c=>(c=>{c.target.closest(".callback-btn")&&(c.preventDefault(),t.style.display="block",e.style.display="block"),(c.target.closest(".modal-close")||c.target.closest(".modal-overlay"))&&(t.style.display="none",e.style.display="none")})(c)))})(),document.querySelector(".top-menu"),document.addEventListener("click",(e=>(e=>{if(e.target.closest(".top-menu")&&e.target.matches("ul>li>a")){e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}})(e))),(()=>{const e=document.querySelector(".push70"),t=document.querySelector(".up"),c=document.querySelector(".up_href");window.addEventListener("scroll",(()=>{const c=document.documentElement.scrollTop;c<e.offsetTop?t.style.display="none":c>e.offsetTop&&(t.style.display="block")})),c.addEventListener("click",(e=>{e.preventDefault();const t=c.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))})()})();
>>>>>>> slider
