import { Promisefy } from "./utils/Promisefy";
App({
    globalData: {},
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        // 登录
        // wx.login({
        //   success: res => {
        //     console.log(res.code)
        //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //   },
        // })
        Promisefy.cast(wx.login).call({})
            .then((res) => {
            console.log("login res", res);
        });
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo;
                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res);
                            }
                        },
                    });
                }
            },
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUU1QyxHQUFHLENBQWE7SUFDZCxVQUFVLEVBQUUsRUFBRTtJQUNkLFFBQVE7UUFDTixXQUFXO1FBQ1gsTUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUUvQixLQUFLO1FBQ0wsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qiw0QkFBNEI7UUFDNUIsdURBQXVEO1FBQ3ZELE9BQU87UUFDUCxLQUFLO1FBRUwsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUE2QixFQUFFLENBQUM7YUFDMUQsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtRQUNKLFNBQVM7UUFDVCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUNyQyxzQ0FBc0M7b0JBQ3RDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFOzRCQUNiLDJCQUEyQjs0QkFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQTs0QkFFdkMsOENBQThDOzRCQUM5QywwQkFBMEI7NEJBQzFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dDQUM5QixJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUE7NkJBQ2hDO3dCQUNILENBQUM7cUJBQ0YsQ0FBQyxDQUFBO2lCQUNIO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbmltcG9ydCBMb2dpblN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCA9IFdlY2hhdE1pbmlwcm9ncmFtLkxvZ2luU3VjY2Vzc0NhbGxiYWNrUmVzdWx0O1xuaW1wb3J0IHtQcm9taXNlZnl9IGZyb20gXCIuL3V0aWxzL1Byb21pc2VmeVwiO1xuXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBnbG9iYWxEYXRhOiB7fSxcbiAgb25MYXVuY2goKSB7XG4gICAgLy8g5bGV56S65pys5Zyw5a2Y5YKo6IO95YqbXG4gICAgY29uc3QgbG9ncyA9IHd4LmdldFN0b3JhZ2VTeW5jKCdsb2dzJykgfHwgW11cbiAgICBsb2dzLnVuc2hpZnQoRGF0ZS5ub3coKSlcbiAgICB3eC5zZXRTdG9yYWdlU3luYygnbG9ncycsIGxvZ3MpXG5cbiAgICAvLyDnmbvlvZVcbiAgICAvLyB3eC5sb2dpbih7XG4gICAgLy8gICBzdWNjZXNzOiByZXMgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMuY29kZSlcbiAgICAvLyAgICAgLy8g5Y+R6YCBIHJlcy5jb2RlIOWIsOWQjuWPsOaNouWPliBvcGVuSWQsIHNlc3Npb25LZXksIHVuaW9uSWRcbiAgICAvLyAgIH0sXG4gICAgLy8gfSlcblxuICAgIFByb21pc2VmeS5jYXN0KHd4LmxvZ2luKS5jYWxsPExvZ2luU3VjY2Vzc0NhbGxiYWNrUmVzdWx0Pih7fSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiByZXNcIiwgcmVzKTtcbiAgICAgIH0pXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG5cbiAgICAgICAgICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgICAgICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KVxuICB9LFxufSkiXX0=