<template>
    <p v-if="loading">祝您日安！</p>
    <p v-else-if="error">{{ error }}</p>
    <div v-else>
      <p><strong>今天是北京时间{{ lunarDate }}，农历{{ month }}{{ year }}，是谓{{ day }}{{ weekday }}。</strong></p>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const error = ref("")
const lunarDate = ref("")
const weekday = ref("")
const year = ref("")
const month = ref("")
const day = ref("")

onMounted(async () => {
  try {
    const res = await fetch("https://api.vore.top/api/lunar?type=json")
    const json = await res.json()
    const data = json.data || {}
    const hl = data.黄历 || {}

    lunarDate.value = data.日期?.中文 || ""
    year.value = hl.年份 || ""
    month.value = hl.月份 || ""
    weekday.value = hl.星期 || ""
    day.value = hl.日期 || ""
  } catch (e) {
    error.value = "祝您日安！"
  } finally {
    loading.value = false
  }
})
</script>
