// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [
      { 
        imgpath: "../../image/products/item-1.jpg",
        name: "羊奶皂",
        number: 1,
        unitprice: 15.9
      },
      {
        imgpath: "../../image/products/item-2.jpg",
        name: "木瓜膏",
        number: 2,
        unitprice: 15.9
      },
    ],
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTotal();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  goback: function() {
    wx.navigateBack();
  }, 
  minus: function(e) {
    console.log("array的第"+ e.currentTarget.dataset.num +"项")
    if (this.data.goods[e.currentTarget.dataset.num].number==1){
      console.log("不能更少了")
    }
    else {
      var arrayCopy = this.data.goods
      arrayCopy[e.currentTarget.dataset.num].number-=1
      this.setData({
        goods: arrayCopy
      })
    }
    this.getTotal();
    
  },
  plus: function(e) {
    console.log("array的第" + e.currentTarget.dataset.num + "项")
    if (this.data.goods[e.currentTarget.dataset.num].number == 10) {
      console.log("不能更多了")
    }
    else {
      var arrayCopy = this.data.goods
      arrayCopy[e.currentTarget.dataset.num].number += 1
      this.setData({
        goods: arrayCopy
      })
    }
    this.getTotal();
  },
  getTotal: function() {
    var total = 0;
    var goods = this.data.goods;
    for (var i = 0; i < goods.length; i++) {
      total += goods[i].number * goods[i].unitprice
    }
    this.setData({
      total: total.toFixed(1)
    })
  },
  deleteItem: function(e) {
    var arrayCopy = this.data.goods
    arrayCopy.splice(e.currentTarget.dataset.num,1)
    this.setData({
      goods: arrayCopy
    })
    this.getTotal();
  }
})