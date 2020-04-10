// pages/comment/comment.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textFlag:false
  },
  //溢出文本隐藏与显示
  onContentTap:function(event){
    //获取文本内容 在wxml所在标签加上data-
    // var content = event.target.dataset.text
    this.setData({
      textFlag:!this.data.textFlag
    })
  },

  getContent:function(event){
    that = this;
    wx.request({
      url: 'https://api.tianapi.com/txapi/hotreview/index?key=',
      success: res => {
        if(res.data.code == 200){
          that.setData({
            detail: res.data.newslist[0],
            textFlag:false
          })
        }else{
            that.setData({
              detail: res.data.msg
            }) 
        }
      },
    })
    wx.stopPullDownRefresh();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    that.getContent();
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
    that = this;
    that.getContent();
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

  }
})