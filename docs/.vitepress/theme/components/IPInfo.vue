<template>
  <div id="ipinfo">
    `<div style="text-align:center;">您好，远道而来的友人！</div>`
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

onMounted(async () => {
  const el = document.getElementById("ipinfo")
  el.innerHTML = `<div style="text-align:center;">您好，远道而来的友人！</div>`

  try {
    const res = await fetch("http://ip-api.com/json?lang=zh-CN")
    const json = await res.json()

    const html = `<div style="text-align:center;">
      您好，来自 <strong>${json.country}${json.regionName}${json.city}</strong> 的友人！<br/><br/>
    </div>`

    el.innerHTML = html
  } catch (e) {
    el.innerHTML = `<div style="text-align:center;">您好，远道而来的友人！</div>`
  }
})
</script>
