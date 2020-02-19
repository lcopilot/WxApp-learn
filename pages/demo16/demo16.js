// pages/demo16/demo16.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 0,
        name: "苹果",
        value: "apple"
      },
      {
        id: 1,
        name: "葡萄",
        value: "grape"
      },
      {
        id: 2,
        name: "香蕉",
        value: "bananer"
      }
    ],
    checkList:[]
  },
  // 复选框的选中事件
  handleItemChange(e) {
    let checkList=e.detail.value;
    this.setData({
      checkList
    })
  }
});
