module.exports = {
  sayHello() {
    console.log('Hello plugin!')
  },
  setSize(){
    wx.removeStorageSync("size");
    wx.getSystemInfo({
			success: res => {
        // console.log(res)
        let menu = wx.getMenuButtonBoundingClientRect();
        let systemBar = res.statusBarHeight//状态栏高度
        let headerHeight=menu.top+menu.height+4;//和小程序右边功能菜单持平，下边界多4px
        let windowHeight=res.windowHeight;
        let height=windowHeight-headerHeight;
        let system=res.system.split(" ")[0];
        let model=res.model.split(" ")[0];
        let model1=res.model.split(" ")[1];
        let bottom=0;
        if(model=="iPhone"&&system=="iOS"&&model1!=5&&model1!=6&&model1!=7&&model1!=8&&model1!="6/7/8"){
          bottom=34;//34是底部的高度默认菜单的高度,van库中用的34，最小是20
        }
        wx.setStorageSync("size",{
          statusBar:systemBar,
          header:headerHeight,
          allHeight:windowHeight,
          content:height,
          bottom:bottom,
          system:system,
          footer:0,
          menuLeft:menu.left,
          type:{
            statusBar:systemBar,
            header:headerHeight,
            content:height-50-bottom,
            footer:50+bottom,//van库中van-tabbar用的50
            bottom:bottom,
            system:system,
            menuLeft:menu.left,
          }
        });
			}
		})
  },
  getSize(){
    return wx.getStorageSync('size');
  }
}
