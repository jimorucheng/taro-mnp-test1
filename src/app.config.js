export default {
  pages: [
    'pages/index/index',
    'pages/disease/index/index',
    'pages/product/index/index',
    'pages/meeting/index/index',
    'pages/my/index/index',
  ],
  tabBar: {
    "color": "#999999",
    "selectedColor": "#005EAB",
    "borderStyle": "black",
    "list": [
      {
        "selectedIconPath": "images/disease/disease_active.png",
        "iconPath": "images/disease/disease_default.png",
        "pagePath": "pages/disease/index/index",
        "text": "疾病"
      },
      {
        "selectedIconPath": "images/disease/product_active.png",
        "iconPath": "images/disease/product_default.png",
        "pagePath": "pages/product/index/index",
        "text": "产品"
      },
      {
        "selectedIconPath": "images/disease/meeting_active.png",
        "iconPath": "images/disease/meeting_default.png",
        "pagePath": "pages/meeting/index/index",
        "text": "会议"
      },
      {
        "selectedIconPath": "images/disease/my_active.png",
        "iconPath": "images/disease/my_default.png",
        "pagePath": "pages/my/index/index",
        "text": "我的"
      }
    ] 
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '诺医荟',
    navigationBarTextStyle: 'black'
  }
}
