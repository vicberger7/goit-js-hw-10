import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as D,i}from"./assets/vendor-77e16229.js";let o;const l=document.querySelector("[data-start]");let r;const E={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){console.log(e[0])}};document.addEventListener("DOMContentLoaded",function(){D("#datetime-picker",{...E,enableTime:!0,dateFormat:"Y-m-d H:i",onClose:function(e){o=e[0],o<new Date?(i.error({title:"Error",message:"Please choose a date in the future"}),l.disabled=!0,clearInterval(r)):l.disabled=!1}})});const f=document.querySelector("[data-days]"),h=document.querySelector("[data-hours]"),g=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");function n(e){return String(e).padStart(2,"0")}function M(){const e=new Date().getTime(),t=o.getTime()-e;if(t>0){const d=Math.floor(t/864e5),m=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),s=Math.floor(t%(1e3*60*60)/(1e3*60)),c=Math.floor(t%(1e3*60)/1e3);f.textContent=n(d),h.textContent=n(m),g.textContent=n(s),y.textContent=n(c)}else clearInterval(r),f.textContent="00",h.textContent="00",g.textContent="00",y.textContent="00",i.error({title:"Error",message:"Please choose a date in the future"})}l.addEventListener("click",function(){if(!document.getElementById("datetime-picker").value){alert("Please fill the field before starting.");return}new Date(o).getTime();const a=new Date().getTime();if(o<a){i.error({title:"Error",message:"Please choose a date in the future"});return}clearInterval(r),r=setInterval(M,1e3)});function u(e){const s=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),p=Math.floor(e%864e5%36e5/6e4),C=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:c,minutes:p,seconds:C}}console.log(u(2e3));console.log(u(14e4));console.log(u(2414e4));
//# sourceMappingURL=commonHelpers.js.map
