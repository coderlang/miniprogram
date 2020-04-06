import GeneralCallbackResult = WechatMiniprogram.GeneralCallbackResult;

export class Promisefy<OPTION> {
  private fn:(api:OPTION)=>void;

  static cast<OPTION>(fn:(api:OPTION)=>void):Promisefy<OPTION> {
    return new Promisefy<OPTION>(fn);
  }

  constructor(fn:(api:OPTION)=>void) {
    this.fn = fn;
  }

  call<Ret>(option:OPTION):Promise<Ret> {
    return new Promise<Ret>(((resolve, reject) => {
      (<any>option).success = (res:any) => {
        resolve(res)
      };
      (<any>option).fail = (res:GeneralCallbackResult) => {
        reject(new Error(res.errMsg))
      };

      this.fn(option);
    }))
  }
}