Page({
  data: {
    timestamp:new Date().getTime() as number,
    maoTaiPrice:1700*100 as number
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
  }
})