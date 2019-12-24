// pages/giftdetail/giftdetail.js

var fileData = require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: fileData.getGiftDetail(),
    imageWidth: 0,
    imageHeight: 0
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

  imageLoad: function(e) {
    var $width=e.detail.width, //获取图片真实高度
    $height = e.detail.height,
    ratio = $width/$height; //图片真实宽高比例
    var viewWidth = wx.getSystemInfoSync().windowWidth,
    viewHeight = viewWidth/ratio;
    console.log(viewWidth, viewHeight)
    this.setData({
      imageWidth: viewWidth,
      imageHeight: viewHeight
    })
  }
})