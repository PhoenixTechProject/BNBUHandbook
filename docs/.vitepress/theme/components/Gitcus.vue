<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const giscusContainer = document.getElementById('giscus-container')
  if (!giscusContainer || giscusContainer.hasChildNodes()) return

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'PhoenixTechProject/BNBUHandbook')
  script.setAttribute('data-repo-id', 'R_kgDOPe_glA')
  script.setAttribute('data-category', 'Announcements')
  script.setAttribute('data-category-id', 'DIC_kwDOPe_glM4CuPpv')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '1')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'top')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'zh-CN')
  script.setAttribute('data-loading', 'lazy')
  script.crossOrigin = 'anonymous'
  script.async = true

  giscusContainer.appendChild(script)
})
</script>

<template>
  <div id="giscus-container" class="mt-8" />
</template>
