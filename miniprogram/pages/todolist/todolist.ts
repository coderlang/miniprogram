Page({
  data:{
    items:[],
    text:null as string,
    cnt:0 as number,
    doneListHide:false as boolean,
  },
  onNewTodoInput(e:{detail:{value:string}}):void {
    this.setData({text:e.detail.value});
  },
  onNewTodoConfirm():void {
    let text = this.data.text||"关注微信公众号：码农浪哥（微信ID：coderlang）"
    this.setData({items:[...this.data.items, text], text:null});
  },
  hideTodoListDone():void {
    this.setData({doneListHide:true})
  },
  showTodoListDone():void {
    this.setData({doneListHide:false});
  }
})