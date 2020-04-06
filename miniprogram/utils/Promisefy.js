export class Promisefy {
    constructor(fn) {
        this.fn = fn;
    }
    static cast(fn) {
        return new Promisefy(fn);
    }
    call(option) {
        return new Promise(((resolve, reject) => {
            option.success = (res) => {
                resolve(res);
            };
            option.fail = (res) => {
                reject(new Error(res.errMsg));
            };
            this.fn(option);
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbWlzZWZ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvbWlzZWZ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxTQUFTO0lBT3BCLFlBQVksRUFBcUI7UUFDL0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBTkQsTUFBTSxDQUFDLElBQUksQ0FBUyxFQUFxQjtRQUN2QyxPQUFPLElBQUksU0FBUyxDQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFNRCxJQUFJLENBQU0sTUFBYTtRQUNyQixPQUFPLElBQUksT0FBTyxDQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQU8sRUFBRSxFQUFFO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDZCxDQUFDLENBQUM7WUFDSSxNQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBeUIsRUFBRSxFQUFFO2dCQUNqRCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7WUFDL0IsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdlbmVyYWxDYWxsYmFja1Jlc3VsdCA9IFdlY2hhdE1pbmlwcm9ncmFtLkdlbmVyYWxDYWxsYmFja1Jlc3VsdDtcblxuZXhwb3J0IGNsYXNzIFByb21pc2VmeTxPUFRJT04+IHtcbiAgcHJpdmF0ZSBmbjooYXBpOk9QVElPTik9PnZvaWQ7XG5cbiAgc3RhdGljIGNhc3Q8T1BUSU9OPihmbjooYXBpOk9QVElPTik9PnZvaWQpOlByb21pc2VmeTxPUFRJT04+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2VmeTxPUFRJT04+KGZuKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGZuOihhcGk6T1BUSU9OKT0+dm9pZCkge1xuICAgIHRoaXMuZm4gPSBmbjtcbiAgfVxuXG4gIGNhbGw8UmV0PihvcHRpb246T1BUSU9OKTpQcm9taXNlPFJldD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZXQ+KCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAoPGFueT5vcHRpb24pLnN1Y2Nlc3MgPSAocmVzOmFueSkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgIH07XG4gICAgICAoPGFueT5vcHRpb24pLmZhaWwgPSAocmVzOkdlbmVyYWxDYWxsYmFja1Jlc3VsdCkgPT4ge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcy5lcnJNc2cpKVxuICAgICAgfTtcblxuICAgICAgdGhpcy5mbihvcHRpb24pO1xuICAgIH0pKVxuICB9XG59Il19