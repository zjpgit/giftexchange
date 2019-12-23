// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx:0,
    mode:[
      {
        id: 0,
        val:'直接赠送',
        note: '人手一份'
      },
      {
        id: 1,
        val: '定时开奖',
        note: ''
      },
      {
        id: 2,
        val: '满人开奖',
        note: '3人开奖'
      },
    ],
    data_wishes: '',
    data_amount:0,
    data_gifts:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  selectGifts: function(event){
    wx.navigateTo({
      url: '/pages/giftlist/giftlist',
    })
  },
  bindModeChange: function(event){
    this.setData({
      idx: event.detail.value,
    })
  },
  checkMoney: function(event){
    if (this.data.data_amount == 0){
      wx.showToast({
        title: '请添加一档礼物!',
        icon: 'none',
        duration: 2000
      })
    } else {
      //调用微信支付接口
    }
  }
})