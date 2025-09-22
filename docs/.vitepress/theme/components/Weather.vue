<template>
  <div>
    <p v-if="loading">正在加载天气数据...</p>
    <p v-else-if="error" class="text-red-500">❌ {{ error }}</p>
    <table v-else border="1" cellspacing="0" cellpadding="5">
      <tr>
        <th>日期</th>
        <th>天气</th>
        <th>温度</th>
        <th>风向</th>
        <th>空气质量</th>
      </tr>
      <tr v-for="(item, index) in weatherData" :key="index">
        <td>{{ item.date }}</td>
        <td>{{ item.weather }}</td>
        <td>{{ item.temperature }}</td>
        <td>{{ item.wind }}</td>
        <td>{{ item.air_quality }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const weatherData = ref([])
const loading = ref(true)
const error = ref("")

onMounted(async () => {
  try {
    const res = await fetch("https://v2.xxapi.cn/api/weather?city=香洲")
    const json = await res.json()
    weatherData.value = json.data.data
  } catch (e) {
    error.value = "加载失败，请稍后再试"
  } finally {
    loading.value = false
  }
})
</script>
