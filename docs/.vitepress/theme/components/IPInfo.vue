<template>
  <p v-if="loading">您好，远道而来的友人！</p>
  <p v-else-if="error">{{ error }}</p>
  <p v-else v-html="htmlContent"></p>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const error = ref("")
const htmlContent = ref("")
const deviceType = ref("未知设备")

function getDeviceType(others) {
  if (others.isAndroid) return "安卓手机"
  if (others.isIOS) return "苹果手机"
  if (others.isTablet) return "平板"
  if (others.isWindows) return "Windows 系统"
  if (others.isMac) return "Mac 系统"
  if (others.isLinux) return "Linux 系统"
  if (others.isDesktop) return "桌面电脑"
  return "未知设备"
}

onMounted(async () => {
  try {
    const res = await fetch("https://api.vore.top/api/welcome")
    const json = await res.json()
    const texts = json.data.text || []
    const others = json.data.device.others || {}
    const browser = json.data.device.browser || {未知浏览器}

    deviceType.value = getDeviceType(others)

    htmlContent.value = `<strong>${texts[0] || '您好，远道而来的友人！'}，您正在使用 ${deviceType.value}通过 ${browser} 访问本页面。`
  } catch (e) {
    error.value = "您好，远道而来的友人！"
  } finally {
    loading.value = false
  }
})
</script>
