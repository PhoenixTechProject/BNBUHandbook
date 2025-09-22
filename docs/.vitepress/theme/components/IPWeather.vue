<template>
  <p v-if="loading">祝您早午晚安！</p>
  <p v-else-if="error">{{ error }}</p>
  <p v-else v-html="htmlContent"></p>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const error = ref("")
const htmlContent = ref("")

onMounted(async () => {
  try {
    const res = await fetch("https://api.vore.top/api/Weather")
    const json = await res.json()

    const ipdata = json.data.ipdata || {}
    const tianqi = json.data.tianqi || {}

    htmlContent.value = `<strong>您的网络线路是${ipdata.info || '未知'}。您所在地的天气是${tianqi.weather || '未知'}，气温 ${tianqi.temperature || '未知'} 摄氏度，风向${tianqi.winddirection || '未知'}方向，风级 ${tianqi.windpower || '未知'} 级，祝您早午晚安！</strong>`
  } catch (e) {
    error.value = "祝您早午晚安！"
  } finally {
    loading.value = false
  }
})
</script>
