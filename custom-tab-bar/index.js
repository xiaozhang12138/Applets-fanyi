Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    dateurl:'',
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      text: "翻译"
    }, {
      pagePath: "/pages/history/history",
      text: "历史"
    }]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index,
        dateurl: url
      })
    },
    changeColor(index) {
      
    }
  }
})