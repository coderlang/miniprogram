// index.ts
Page({
  data: {
    thumbsUpCnt:1000 as number,
  },
  onLoad() {
  },
  inc1():void {
    this.data.thumbsUpCnt += 1;
    console.log("inc1", this.data.thumbsUpCnt);
  },
  inc2():void {
    this.setData({thumbsUpCnt:this.data.thumbsUpCnt+2});
    console.log("inc2", this.data.thumbsUpCnt);
  }
})
