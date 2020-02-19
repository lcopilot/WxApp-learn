// pages/demo15/demo15.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:""
  },
  handleChang(e){
    // 1 获取单选框的值
    let gender=e.detail.value;
    // 2 把值赋值给 data中的数据
    this.setData({
      // gender:gender
      gender
    })
  }

  
})