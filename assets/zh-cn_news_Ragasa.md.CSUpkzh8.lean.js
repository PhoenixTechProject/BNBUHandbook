import{p,v as c,c as n,o as s,C as h,aj as o,G as l}from"./chunks/framework.D26WZD1w.js";const d=["innerHTML"],b={__name:"Typhoon",setup(i){const a=p("正在加载台风数据...");return c(async()=>{try{const e=(await(await fetch("https://free.xwteam.cn/api/weather/typhoon")).json()).data;a.value=`
      <p><b>中文名：</b>${e.cn_name}</p>
      <p><b>英文名：</b>${e.en_name}</p>
      <p><b>编号：</b>${e.windid}</p>
      <p><b>更新时间：</b>${e.end_time}</p>
      <p><b>位置：</b>${e.location}</p>
    `}catch(t){a.value="获取数据失败",console.error(t)}}),(t,r)=>(s(),n("div",{innerHTML:a.value},null,8,d))}},_=JSON.parse('{"title":"🌀 超强台风“桦加沙”实时资讯","description":"","frontmatter":{},"headers":[],"relativePath":"zh-cn/news/Ragasa.md","filePath":"zh-cn/news/Ragasa.md","lastUpdated":1758612136000}'),m={name:"zh-cn/news/Ragasa.md"},f=Object.assign(m,{setup(i){return(a,t)=>{const r=h("Giscus");return s(),n("div",null,[t[0]||(t[0]=o("",10)),l(b),t[1]||(t[1]=o("",34)),l(r)])}}});export{_ as __pageData,f as default};
