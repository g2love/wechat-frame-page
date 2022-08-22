// pages/page3/index.js
let s1;let s2;
Page({
  data: {
    pullDown:false,
    pullUp:false
  },
  goBackHome:function(e) {
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad(options) {
    let that=this;
    wx.createIntersectionObserver().relativeToViewport({bottom: 50}).observe('.target-pullUp', (res) => {
      // console.log(res)
      if(this.data.pullUp==false&&res.intersectionRatio!=0){
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
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    clearTimeout(s1);
    clearTimeout(s2);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    clearTimeout(s1);
    clearTimeout(s2);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    wx.stopPullDownRefresh();
    if(this.data.pullDown==false){
      console.log("下拉动作")
      let that=this;
      that.setData({
        pullDown:true
      })
      s1=setTimeout(function(){
        that.setData({
          pullDown:false
        })
        clearTimeout(s1);
      },5000)
    }
  },
})