// components/page/index.js
import SIZE from "./wx-size";
Component({
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    pageType:String,
    bgSrc:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    pageShow:false,
    header:0,
    content:0,
    statusBar:0,
    bottom:0,
    footer:0,
    menuLeft:0,
  },
  ready:function(){
    let that=this;
    if(this.data.bgSrc!=''&&this.data.bgSrc!=undefined){
      return "";
    }
    let _page=setTimeout(function(){
      that.setData({
        pageShow:true
      })
      clearTimeout(_page);
    },50)
  },
  observers: {
    bgSrc:function(val){
      // console.log('背景图改变')
    },
    "pageType":function(val){
      // console.log(val)
      // console.log("page模式发生改变");
      SIZE.setSize();
      const size=SIZE.getSize();
      if(val==2){
        this.setData({
          //有底部
          header:size.type.header,
          content:size.type.content,
          statusBar:size.type.statusBar,
          bottom:size.type.bottom,
          footer:size.type.footer,
          menuLeft:size.type.menuLeft,
        })
      }else{
        this.setData({
          //无底部
          header:size.header,
          content:size.content,
          statusBar:size.statusBar,
          bottom:size.bottom,
          footer:size.footer,
          menuLeft:size.menuLeft,
        })
      }
    }
  },
  lifetimes: {
    // 组件所在页面的生命周期函数
    attached: function () {},
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {},
    hide: function () { },
    resize: function () { },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bgOk(){
      this.setData({
        pageShow:true
      })
    }
  }
})
