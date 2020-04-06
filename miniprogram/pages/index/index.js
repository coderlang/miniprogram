"use strict";
// index.ts
// 获取应用实例
const app = getApp();
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    onLoad() {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            };
        }
        else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo;
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                    });
                },
            });
        }
    },
    getUserInfo(e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsV0FBVztBQUNYLFNBQVM7QUFDVCxNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQWMsQ0FBQTtBQUVoQyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsYUFBYTtRQUNwQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO0tBQ3BEO0lBQ0QsTUFBTTtRQUNKLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUIsOENBQThDO1lBQzlDLDBCQUEwQjtZQUMxQixHQUFHLENBQUMscUJBQXFCLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO29CQUN0QixXQUFXLEVBQUUsSUFBSTtpQkFDbEIsQ0FBQyxDQUFBO1lBQ0osQ0FBQyxDQUFBO1NBQ0Y7YUFBTTtZQUNMLG9DQUFvQztZQUNwQyxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUNiLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDYixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFBO29CQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNYLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTt3QkFDdEIsV0FBVyxFQUFFLElBQUk7cUJBQ2xCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsV0FBVyxDQUFDLENBQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1lBQzNCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbmRleC50c1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG5jb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIG1vdHRvOiAnSGVsbG8gV29ybGQnLFxuICAgIHVzZXJJbmZvOiB7fSxcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgaWYgKGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXG4gICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XG4gICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBnZXRVc2VySW5mbyhlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKVxuICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gZS5kZXRhaWwudXNlckluZm9cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgdXNlckluZm86IGUuZGV0YWlsLnVzZXJJbmZvLFxuICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgfSlcbiAgfSxcbn0pXG4iXX0=