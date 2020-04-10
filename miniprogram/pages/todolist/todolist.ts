Page({
  data:{
    items:["你说", "222", "444"],
    text:null as string,
  },
  onNewTodoInput(e:{detail:{value:string}}):void {
    console.log("----e", e);
    this.setData({text:e.detail.value});
  },
  onNewTodoConfirm():void {
    this.setData({items:[...this.data.items, this.data.text], text:null});
  }
})