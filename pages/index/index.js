//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articles: [
      {
        image: "../../image/products/item-1_thumb.jpg",
        title: "超好用的香皂，Goat soap山羊奶皂，你还没用过吗",
        description: "澳洲的Goat Soap山羊奶润肤香皂是灰常好用的一款皂皂，这款是我的大爱款~非常的温和......"
      }, 
      {
        image: "../../image/products/item-2_thumb.jpg",
        title: "澳洲的这支木瓜膏，大神级别的万用膏！便宜又好用！",
        description: "澳洲人手一支的万能膏！嘴角起水泡脸部手部脚部爆拆疮，还可以当护唇膏、护手足膏......"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toArticle: function(e){
    console.log(e.currentTarget.dataset.index)
    wx.navigateTo({
      url: '../article/article?index=' + e.currentTarget.dataset.index,
    })
  }
})
