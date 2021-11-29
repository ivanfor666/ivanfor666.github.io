const _app_agent = {
  trident: navigator.userAgent.indexOf("Trident") > -1, // IE内核
  presto: navigator.userAgent.indexOf("Presto") > -1, // opera内核
  webKit: navigator.userAgent.indexOf("AppleWebKit") > -1, // 苹果、谷歌内核
  gecko:
    navigator.userAgent.indexOf("Gecko") > -1 &&
    navigator.userAgent.indexOf("KHTML") === -1, // 火狐内核
  mobile: !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
  ios: !!navigator.userAgent.match(/Mac OS X/), // ios终端
  android:
    navigator.userAgent.indexOf("Android") > -1 ||
    navigator.userAgent.indexOf("Linux") > -1, // android终端或者uc浏览器
  iPhone: navigator.userAgent.indexOf("iPhone") > -1, // 是否为iPhone或者QQHD浏览器
  iPad: navigator.userAgent.indexOf("iPad") > -1, // 是否iPad
  weixin: navigator.userAgent.indexOf("MicroMessenger") > -1, // 是否微信
  ali: navigator.userAgent.indexOf("AlipayClient") > -1, // 是否支付宝
  qq: navigator.userAgent.match(/\sQQ/i) === " qq", // 是否QQ
  ding: navigator.userAgent.indexOf("DingTalk") > -1, // 是否钉钉
  wxwork: navigator.userAgent.indexOf("wxwork") > -1, // 是否企业微信
};

window.onload = () => {
  // 钉钉环境
  _app_agent.ding &&
    window.dd.ready(function () {
      // 退到后台的事件监听(webview)
      document.addEventListener(
        "pause",
        function (e) {
          e.preventDefault();
          console.log("事件：pause");
        },
        false
      );

      // 页面被唤醒的事件监听(webview)
      document.addEventListener(
        "resume",
        function (e) {
          e.preventDefault();
          console.log("事件：resume");
        },
        false
      );

      //返回按钮点击的事件监听(android)
      document.addEventListener(
        "backbutton",
        function (e) {
          e.preventDefault();
          dd.device.notification.alert({
            message: "哎呀，你不小心点到返回键啦!",
            title: "...警告...",
          });
        },
        false
      );

      // 网络连接成功的事件监听
      document.addEventListener(
        "online",
        function (e) {
          e.preventDefault();
          console.log("事件：online");
        },
        false
      );

      // 网络连接断开的事件监听
      document.addEventListener(
        "offline",
        function (e) {
          e.preventDefault();
          console.log("事件：offline");
        },
        false
      );
    });
};
