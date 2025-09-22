import{v as i,c as o,o as d,ah as h}from"./chunks/framework.CyOEM546.js";i(async()=>{const a=document.getElementById("ipinfo");a.innerHTML="您好，远道而来的友人！";try{const t=await(await fetch("http://ip-api.com/json?lang=zh-CN")).json();let n=`<div style="text-align:center;">
      您好，来自 <strong>${t.country}${t.regionName}${t.city}</strong> 的朋友！<br/><br/>
    </div>`;a.innerHTML=n}catch{a.innerHTML="您好，远道而来的友人！"}});const b=JSON.parse('{"title":"💾 前言","description":"","frontmatter":{},"headers":[],"relativePath":"zh-cn/briefing.md","filePath":"zh-cn/briefing.md","lastUpdated":1758555224000}'),s={name:"zh-cn/briefing.md"},g=Object.assign(s,{setup(a){return i(async()=>{try{const n=(await(await fetch("https://v2.xxapi.cn/api/weather?city=香洲")).json()).data.data;let l=`<table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <th>日期</th><th>天气</th><th>温度</th><th>风向</th><th>空气质量</th>
                  </tr>`;n.forEach(e=>{l+=`<tr>
                 <td>${e.date}</td>
                 <td>${e.weather}</td>
                 <td>${e.temperature}</td>
                 <td>${e.wind}</td>
                 <td>${e.air_quality}</td>
               </tr>`}),l+="</table>",document.getElementById("weather").innerHTML=l}catch{document.getElementById("weather").innerHTML="❌ 加载失败，请稍后再试"}}),(r,t)=>(d(),o("div",null,t[0]||(t[0]=[h("",56)])))}});export{b as __pageData,g as default};
