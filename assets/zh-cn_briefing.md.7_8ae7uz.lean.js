import{v as l,c as i,o,ah as d}from"./chunks/framework.CyOEM546.js";const b=JSON.parse('{"title":"💾 前言","description":"","frontmatter":{},"headers":[],"relativePath":"zh-cn/briefing.md","filePath":"zh-cn/briefing.md","lastUpdated":1758547469000}'),h={name:"zh-cn/briefing.md"},g=Object.assign(h,{setup(s){return l(async()=>{try{const n=(await(await fetch("https://v2.xxapi.cn/api/weather?city=香洲")).json()).data.data;let a=`<table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <th>日期</th><th>天气</th><th>温度</th><th>风向</th><th>空气质量</th>
                  </tr>`;n.forEach(t=>{a+=`<tr>
                 <td>${t.date}</td>
                 <td>${t.weather}</td>
                 <td>${t.temperature}</td>
                 <td>${t.wind}</td>
                 <td>${t.air_quality}</td>
               </tr>`}),a+="</table>",document.getElementById("weather").innerHTML=a}catch{document.getElementById("weather").innerHTML="❌ 加载失败，请稍后再试"}}),(r,e)=>(o(),i("div",null,e[0]||(e[0]=[d("",54)])))}});export{b as __pageData,g as default};
