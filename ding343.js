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

// 钉钉物理键监听
const ding_addEventListenerFn = ()=>{
  // 退到后台的事件监听(webview)
  document.addEventListener(
    "pause",
    function (e) {
      e.preventDefault();
      window.ding_Obj.alert({
        message: "事件：pause",
        title: "...警告...",
      });
      console.log("事件：pause");
      
    },
    false
  );

  // 页面被唤醒的事件监听(webview)
  document.addEventListener(
    "resume",
    function (e) {
      e.preventDefault();
      window.ding_Obj.alert({
        message: "事件：resume",
        title: "...警告...",
      });
      console.log("事件：resume");
    },
    false
  );

  //返回按钮点击的事件监听(android)
  document.addEventListener(
    "backbutton",
    function (e) {
      e.preventDefault();
      window.ding_Obj.alert({
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
      window.ding_Obj.alert({
        message: "事件：online",
        title: "...警告...",
      });
      console.log("事件：online");
    },
    false
  );

  // 网络连接断开的事件监听
  document.addEventListener(
    "offline",
    function (e) {
      e.preventDefault();
      window.ding_Obj.alert({
        message: "事件：offline",
        title: "...警告...",
      });
      console.log("事件：offline");
    },
    false
  );
}

const ding_getInfoFn = ()=>{
  dd.device.base.getPhoneInfo({
    onSuccess : function(data) {
      window.ding_Obj.alert({
        message: JSON.stringify(data),
        title: "...警告...",
      });
        /*
        {
            screenWidth: 1080, // 手机屏幕宽度
            screenHeight: 1920, // 手机屏幕高度
            brand:'Mi', // 手机品牌
            model:'Note4', // 手机型号
            version:'7.0', // 版本
            netInfo:'wifi', // 网络类型 wifi／4g／3g 
            operatorType:'xx' // 运营商信息
        }
        */

        const {screenWidth,screenHeight}
        window.ding_Obj.screenWidth = screenWidth;
        window.ding_Obj.screenHeight = screenHeight;

        window.ding_Obj.alert({
          message: JSON.stringify(window.ding_Obj),
          title: "...警告...",
        });
    },
    onFail : function(err) {}
});
  return {}
}

class Ding_Obj {
  // 新alert事件
    alert({title,message}){
      alert(1112)
      window.dd.device.notification.alert({
        message,
        title,
      });
    }
}

// 钉钉环境启动引擎
const dingEngineFn = ()=>{
  alert("启动引擎")

  //增加全局变量，辅助函数
  window.ding_Obj =  new Ding_Obj

  alert("启动引擎2")
  // 钉钉物理键监听
  ding_addEventListenerFn()

  alert("物理键监听3")

  //手机基本信息获取
  ding_getInfoFn()

}

window.onload = () => {
  // 钉钉环境
  _app_agent.ding &&
    window.dd.ready(dingEngineFn);
};
