//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '世界我最大',
    userInfo: {},
    src1: "http://b379.photo.store.qq.com/psb?/V12lT4tD2vZ8ZH/w0rZPHB*Ch02.j7tz8wFpOozlBNMm5X*M6ud*DhNQUM!/b/dEJi6OHjGAAA&bo=7gLoAwAAAAAFACQ!&rf=viewer_4",
    src2: "http://b380.photo.store.qq.com/psb?/V12lT4tD2vZ8ZH/mVIA9Nbzsvhg8VOgJQRVaTOLmp1jfhyHhHzKKqG06pw!/b/dEW9juJbJAAA&bo=gAJUAwAAAAAFAPY!&rf=viewer_4",
    src3: "http://b175.photo.store.qq.com/psb?/V12lT4tD2vZ8ZH/EeUoRQieKH*.aXYiLVf0jRo*8Wlm4u8NgcquYq56r30!/b/dMSHVmjyCAAA&bo=gAJVA7AEQAYBAAE!&rf=viewer_4",
  },
  onLoad: function () {
    wx.setNavigationBarTitle({ title: "站主相册"})
  },
  //个人简介
  showUserInfo: function (e) {
    wx.navigateTo({
      url: '/pages/userinfo/userinfo'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
