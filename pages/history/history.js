const app = getApp()

Page({
  data: {
    history: []
  },
  onShow: function () {
    this.setData({
      history: wx.getStorageSync('history')
    })
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  onTapItem: function (e) {
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.query}`
    })
  },
  onShareAppMessage: function () {

  }
})