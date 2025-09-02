---
layout: doc
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const host = window.location.hostname

  if (host === 'bnbutech.cn') {
    // 跳转到 u.xiedada.net
    window.location.href = 'https://u.xiedada.net';
  } else if (host === 'u.xiedada.net') {
    // 跳转到 bnbutech.cn
    window.location.href = 'https://bnbutech.cn';
  }
})
</script>
