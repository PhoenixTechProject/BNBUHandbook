import{v as r,c as n,o as s,ah as i}from"./chunks/framework.CyOEM546.js";const c=JSON.parse('{"title":"🌀 超强台风“桦加沙”实时资讯","description":"","frontmatter":{},"headers":[],"relativePath":"zh-cn/news/Ragasa.md","filePath":"zh-cn/news/Ragasa.md","lastUpdated":1758546890000}'),p={name:"zh-cn/news/Ragasa.md"},d=Object.assign(p,{setup(l){return r(async()=>{try{const a=(await(await fetch("https://free.xwteam.cn/api/weather/typhoon")).json()).data;let o=`
      <p><b>中文名：</b>${a.cn_name}</p>
      <p><b>英文名：</b>${a.en_name}</p>
      <p><b>编号：</b>${a.windid}</p>
      <p><b>更新时间：</b>${a.end_time}</p>
      <p><b>位置：</b>${a.location}</p>
    `;document.getElementById("typhoon").innerHTML=o}catch(e){document.getElementById("typhoon").innerHTML="获取数据失败",console.error(e)}}),(e,t)=>(s(),n("div",null,t[0]||(t[0]=[i("",27)])))}});export{c as __pageData,d as default};
