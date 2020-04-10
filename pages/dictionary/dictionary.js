// pages/dictionary/dictionary.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    inputvalue:"",
    contentShow:true,
    searchShow:false
  },

  onBindfocus:function(event){
    that = this;
    that.setData({
      contentShow:false,
      searchShow:true,
      //清空上一次搜索的记录内容 如果没有清空的话再次点击会出现上次的搜索结果
      content:""
    })
  },

  onBindChange:function(event){
    //获取input输入框的值
    var word = event.detail.value;
    wx.request({
      url: 'https://api.tianapi.com/txapi/chengyu/index?key=&word=' + word,
      success:res=>{
        if(res.data.code == 200){
          that.setData({
            content: res.data.newslist[0]
          })
        }else{
            that.setData({
              content: res.data.msg
            }) 
        }
      }
    })
  },

  onCancelImgTap:function(event){
    that = this;
    that.setData({
      //清空input输入框的值
      inputvalue:"",
      contentShow:true,
      searchShow:false
    })
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

  }
})