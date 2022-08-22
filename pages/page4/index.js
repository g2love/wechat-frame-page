// pages/page3/index.js
let s1;let s2;
Page({
  data: {
    pullDown:false,
    pullUp:false,
  },
  goBackHome:function(e) {
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad(options) {
    
  },
  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  top() {
    if(this.data.pullDown==false){
      console.log('下拉动作')
      let that=this;
      that.setData({
        pullDown:true
      })
      s1=setTimeout(function(){
        that.setData({
          pullDown:false
        })
        clearTimeout(s1);
      },3000)
    }
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  bottom() {
    if(this.data.pullUp==false){
      console.log('上拉触底')
      let that=this;
      that.setData({
        pullUp:true
      })
      s2=setTimeout(function(){
        that.setData({
          pullUp:false
        })
        clearTimeout(s2);
      },5000)
    }
  },
  onUnload(){
    clearTimeout(s1);
    clearTimeout(s2);
  },
  onHide(){
    clearTimeout(s1);
    clearTimeout(s2);
  },
})