// pages/index/index.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  gteNewsContent:function(event){
    wx.request({
      url: 'https://api.tianapi.com/bulletin/index?key=',
      success:res=>{
        if(res.data.code == 200){
          that.setData({
            content: res.data.newslist
          })
        }else{
            that.setData({
              content: res.data.msg
            }) 
        }
      }
    })
  },

  //查看图片
  ViewPostImage:function(event){
    var src = event.currentTarget.dataset.src;
    wx.previewImage({
      urls: [src], //需要预览的图片http链接列表
      current:src //当前显示图片的http链接
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    that.gteNewsContent();
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

  }
})