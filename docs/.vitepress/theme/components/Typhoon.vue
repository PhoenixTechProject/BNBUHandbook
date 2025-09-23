<script setup>
import { onMounted, ref } from 'vue'

const content = ref("正在加载台风数据...")

onMounted(async () => {
  try {
    const res = await fetch("https://free.xwteam.cn/api/weather/typhoon")
    const json = await res.json()
    const d = json.data

    content.value = `
      <p><b>中文名：</b>${d.cn_name}</p>
      <p><b>英文名：</b>${d.en_name}</p>
      <p><b>编号：</b>${d.windid}</p>
      <p><b>更新时间：</b>${d.end_time}</p>
      <p><b>位置：</b>${d.location}</p>
    `
  } catch (err) {
    content.value = "获取数据失败"
    console.error(err)
  }
})
</script>

<template>
  <!-- 用 v-html 渲染动态生成的内容 -->
  <div v-html="content"></div>
</template>
