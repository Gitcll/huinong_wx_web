// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  getUserName: function(e){
    this.setData({
      userName: e.detail.value
    })
  },
  getPassWord: function(e){
    this.setData({
      passWord: e.detail.value
    })
  },
  
  login: function() {
    console.log("用户名" + this.data.userName + "_密码" + this.data.passWord)
    if(!this.data.userName || !this.data.passWord){
      wx.showModal({
        title: '',
        content: '用户名密码错误'
      })
    }else{
      wx.request({
        url: 'http://localhost:8080/users/login',
        method: 'POST',
        data:{
          userName: this.data.userName,
          passWord: this.data.passWord
        },
        success: (res) => {
          console.log(res.data)
          if(res.data == "success"){
            wx.navigateTo({
              url: '/pages/home/home',
            })
          }
        }
      })
    }
  },
  register: function(){
    //console.log("用户名" + this.data.userName + "_密码" + this.data.passWord)
    if(!this.data.userName || !this.data.passWord){
      wx.showModal({
        title: '',
        content: '请输入正确用户名和密码'
      })
    }else{
      wx.request({
      url: 'http://localhost:8080/users/register',
      method: 'POST',
      data:{
        userName: this.data.userName,
        passWord: this.data.passWord
      },
      success: (res) => {
        console.log(res.data)
        if(res.data == "success"){
          wx.navigateTo({
            url: '/pages/index/index',
          })
        }
      }
    })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})