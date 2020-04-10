// pages/laught/laught.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getContent:function(event){
    that = this;
    //对取出的数据进行判空
    var detail = {
      content:"",
      author:"佚名"
    }
    wx.request({
      url: 'https://api.tianapi.com/txapi/mnpara/index?key=',
      success:res=>{
        if(res.data.code == 200){
          if(res.data.newslist[0].author != ""){
            detail.author = res.data.newslist[0].author
          }
          detail.content = res.data.newslist[0].content
          that.setData({
            value:detail
          })
        }else{
            that.setData({
              value: res.data.msg
            }) 
        }
      }
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