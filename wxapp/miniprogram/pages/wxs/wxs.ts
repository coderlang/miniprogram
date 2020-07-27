Page({
  data: {
    timestamp:new Date().getTime() as number,
    maoTaiPrice:1700*100 as number,
    str1:["一", "二", "三"] as string[],
    str2:["1", "2", "3"] as string[],
  },
  sell():void {
    this.setData({
      maoTaiPrice:1500*100
    })
  },
  buy():void {
    this.setData({
      maoTaiPrice:1700*100
    })
  },
  del1():void {
    this.setData({
      str1:this.data.str1.filter((r) => r!=='一')
    })
  },
  add1():void {
    this.setData({
      str1:['一', ...this.data.str1]
    })
  }
})