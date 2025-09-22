import{v as o,c as r,o as s,ah as p}from"./chunks/framework.CyOEM546.js";const d=JSON.parse('{"title":"🌀 超强台风“桦加沙”实时资讯","description":"","frontmatter":{},"headers":[],"relativePath":"zh-cn/news/Ragasa.md","filePath":"zh-cn/news/Ragasa.md","lastUpdated":1758531110000}'),i={name:"zh-cn/news/Ragasa.md"},c=Object.assign(i,{setup(h){return o(async()=>{try{const a=(await(await fetch("https://free.xwteam.cn/api/weather/typhoon")).json()).data;let n=`
      <p><b>中文名：</b>${a.cn_name}</p>
      <p><b>英文名：</b>${a.en_name}</p>
      <p><b>编号：</b>${a.windid}</p>
      <p><b>更新时间：</b>${a.end_time}</p>
      <p><b>位置：</b>${a.location}</p>
    `;document.getElementById("typhoon").innerHTML=n}catch(e){document.getElementById("typhoon").innerHTML="获取数据失败",console.error(e)}}),(e,t)=>(s(),r("div",null,t[0]||(t[0]=[p("",21)])))}});export{d as __pageData,c as default};
