(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{KZV1:function(e,t,o){},QfWi:function(e,t,o){"use strict";o.r(t);o("KZV1"),o("ZoDA")},ZoDA:function(e,t){const o={dayRef:document.querySelector("[data-value='days']"),hoursRef:document.querySelector("[data-value='hours']"),minRef:document.querySelector("[data-value='mins']"),secsRef:document.querySelector("[data-value='secs']"),timerRef:document.querySelector(".timer")},{dayRef:n,hoursRef:a,minRef:r,secsRef:u,timerRef:c}=o,f=e=>String(e).padStart(2,"0");var s,i;s="#timer-2",i=new Date("Jul 17, 2021"),(e=>{c.id=e})(s),setInterval(()=>{(e=>{const t=f(Math.floor(e/864e5)),o=f(Math.floor(e%864e5/36e5)),c=f(Math.floor(e%36e5/6e4)),s=f(Math.floor(e%6e4/1e3));n.textContent=t,a.textContent=o,r.textContent=c,u.textContent=s})(i-Date.now())},1e3)}},[["QfWi",1]]]);
//# sourceMappingURL=main.cefd426d4675fbe6deed.js.map