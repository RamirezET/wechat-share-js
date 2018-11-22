<template>
  <div class="home-container">
      测试
  </div>
</template>

<script>
import { initShare } from '@/utils/wechatShare.js'

export default {
  name: 'index',
  data() {
    return {
    }
  },
  mounted: function() {
    const shareData = {
      title: '大视VLOG',
      desc: '全民VLOG神器,遇见有趣的灵魂,用视频记录你的故事',
      link: location.href,
      imgUrl: 'https://ossvlog.dashimedia.cn/prod/images/logo/logo.png',
      signUrl: encodeURIComponent(location.href)
    }
    initShare(shareData)
  },
  methods: {
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
