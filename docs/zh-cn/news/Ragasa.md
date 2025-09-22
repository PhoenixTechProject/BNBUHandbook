# 🌀 超强台风“桦加沙”实时资讯

<!-- 闪烁小红点置于文档开头左上角 -->
<style>
  .dot {
    display:inline-block;
    width:12px;
    height:12px;
    border-radius:50%;
    background:#e53935;
    animation: blink 1s infinite ease-in-out;
    vertical-align:middle;
  }
  @keyframes blink {
    0%   { transform:scale(1); opacity:1; }
    50%  { transform:scale(1.4); opacity:0.35; }
    100% { transform:scale(1); opacity:1; }
  }
</style>

<span class="dot"></span> ***LIVE UP TO DATE***

<sub>文文新闻编辑部珠海 9 月 22 日讯</sub>

## 台风信息

<div id="typhoon">正在加载台风数据...</div>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  try {
    const res = await fetch("https://free.xwteam.cn/api/weather/typhoon");
    const json = await res.json();
    const d = json.data;

    let html = `
      <p><b>中文名：</b>${d.cn_name}</p>
      <p><b>英文名：</b>${d.en_name}</p>
      <p><b>编号：</b>${d.windid}</p>
      <p><b>更新时间：</b>${d.end_time}</p>
      <p><b>位置：</b>${d.location}</p>
    `;

    document.getElementById("typhoon").innerHTML = html;
  } catch (err) {
    document.getElementById("typhoon").innerHTML = "获取数据失败";
    console.error(err);
  }
})
</script>

<!-- SMG 页面嵌入 -->
<iframe src="https://www.smg.gov.mo/zh/subpage/28/typhoon-other" 
        width="100%" 
        height="600" 
        style="border:1px solid #ccc; margin-top:20px;">
  您的浏览器不支持 iframe。
</iframe>


目前超强台风“桦加沙”（17 级，62 米/秒）中心位于珠海东南方约 1050 公里的西北太平洋洋面上。预计其将在 23 日凌晨进入南海，24 日以强台风或超强台风级在广东省中西部沿海地区登陆。

受其影响，预计 23 日下午到傍晚珠海风力逐渐加大，23 日夜间至 24 日陆地风力 10-12 级阵风 12-14 级，沿岸及海面风力 12-14 级阵风 14-16 级，有大暴雨局部特大暴雨，累积雨量 120-180 毫米，局部 300-350 毫米。9 月 22 日 11 时 00 分，市气象台发布全市台风蓝色预警信号，请迅速做好各项防御工作。根据此前发布的消息，其影响力可能比“天鸽”还大。

## 应对政策

### BNBU

在超强台风“桦加沙”的威胁之下，当地政府已宣布，2025 年 9 月 23 日和 24 日的所有课程都将取消。

有关拉加萨台风的强度极大以及覆盖范围广的情况已发出警告，该台风可能会给广东省的沿海及内陆地区（包括珠海市）带来强风、暴雨和风暴潮。请密切关注恶劣天气警报，并做好应对准备。

关于行程安排，请注意以下事项：

1. 原定于 2025 年 9 月 23 日进行的课程将改在 2025 年 10 月 18 日（星期六）进行；
2. 原定于 2025 年 9 月 24 日进行的课程将改在 2025 年 10 月 25 日（星期六）进行。

### 珠海市

珠海市三防指挥部决定：于 2025 年 9 月 22 日 11 时，将防风 Ⅳ 级应急响应升级为 II 级。2025 年 9 月 23 日、24 日均全天停课。预计 23 日晚 20 时至 22 时开始实施“五停”和视情实施封桥封路措施。具体实施“五停”和封桥封路的工作措施的时间，视风情雨情确定。请市民关注市三防指挥部发布的相关指令、通知、防御指引和行业单位发布的相关信息，提前做好工作和生活安排。

### 国铁广州局

为保障列车运行安全，国铁广州局根据台风动态及影响范围，对管内列车运行计划进行调整，具体安排如下：

9 月 23 日 12 时起：广东省内高铁及普速列车开始逐步停运，停运范围随台风影响动态调整；

9 月 24 日全天：广东省内所有高铁、普速列车停运；

9 月 25 日凌晨起：将根据台风影响减弱情况，逐步恢复列车开行，具体恢复车次将动态更新。
