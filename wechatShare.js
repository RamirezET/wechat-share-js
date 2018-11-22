import wx from 'weixin-js-sdk'
import axios from 'axios'

export function initShare(shareData) {
  var ua = window.navigator.userAgent.toLowerCase()
  /* eslint-disable */
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      /* eslint-enable */
    axios.get(process.env.BASE_API + 'wechat/getShareInfo?url=' + shareData.signUrl).then(function(response) {
      const data = response.data
      if (!data.hasError && data.code === 200) {
        const result = data.results
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
          appId: result.appId, // 必填，公众号的唯一标识
          timestamp: result.timestamp, // 必填，生成签名的时间戳
          nonceStr: result.noncestr, // 必填，生成签名的随机串
          signature: result.signature, // 必填，签名
          jsApiList: ['checkJsApi', 'onMenuShareTimeline',
            'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'hideMenuItems']
        })
        wx.ready(function() {
          wx.onMenuShareTimeline({
            title: shareData.title, // 分享标题
            desc: shareData.desc, // 分享描述
            link: shareData.link, // 分享链接
            imgUrl: shareData.imgUrl // 分享图标
          })
          // 分享给朋友
          wx.onMenuShareAppMessage({
            title: shareData.title, // 分享标题
            desc: shareData.desc, // 分享描述
            link: shareData.link, // 分享链接
            imgUrl: shareData.imgUrl, // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空

          })
          wx.onMenuShareQQ({
            title: shareData.title, // 分享标题
            desc: shareData.desc, // 分享描述
            link: shareData.link, // 分享链接
            imgUrl: shareData.imgUrl // 分享图标
          })
          wx.onMenuShareWeibo({
            title: shareData.title, // 分享标题
            desc: shareData.desc, // 分享描述
            link: shareData.link, // 分享链接
            imgUrl: shareData.imgUrl // 分享图标
          })
          wx.onMenuShareQZone({
            title: shareData.title, // 分享标题
            desc: shareData.desc, // 分享描述
            link: shareData.link, // 分享链接
            imgUrl: shareData.imgUrl // 分享图标
          })
          wx.hideMenuItems({
            menuList: ['menuItem:originPage', // 原网页
              'menuItem:copyUrl' // 复制链接
            ]
          })
        })
        wx.error(function(res) {
          console.log('微信分享异常', res)
        })
        wx.checkJsApi({
          jsApiList: ['onMenuShareTimeline',
            'onMenuShareAppMessage', 'hideMenuItems'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
          success: function(res) {
            // alert("检测接口:"+res.err_msg);
          }
        })
      }
    })
  }
}

export function hidenMenu(shareData) {
  var ua = window.navigator.userAgent.toLowerCase()
  /* eslint-disable */
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      /* eslint-enable */
    axios.get(process.env.BASE_API + 'wechat/getShareInfo?url=' + shareData.signUrl).then(function(response) {
      const data = response.data
      if (!data.hasError && data.code === 200) {
        const result = data.results
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
          appId: result.appId, // 必填，公众号的唯一标识
          timestamp: result.timestamp, // 必填，生成签名的时间戳
          nonceStr: result.noncestr, // 必填，生成签名的随机串
          signature: result.signature, // 必填，签名
          jsApiList: ['checkJsApi']
        })
        wx.ready(function() {
          wx.hideOptionMenu()
          wx.error(function(res) {
            console.log('微信分享异常', res)
          })
        })
      }
    })
  }
}

