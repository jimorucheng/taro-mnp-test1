export default {
  pages: [
    'pages/index/index',
    'pages/itpServe/index/index',
    'pages/my/index/index',
  ],
  tabBar: {
    list: [{
      'iconPath': 'images/home.png',
      'selectedIconPath': 'images/home_g.png',
       pagePath: 'pages/index/index',
       text: '首页'
    }, 
    {
      'iconPath': 'images/cart.png',
      'selectedIconPath': 'images/cart_g.png',
       pagePath: 'pages/itpServe/index/index',
       text: '服务'
    }, 
    {
      'iconPath': 'images/my.png',
      'selectedIconPath': 'images/my_g.png',
       pagePath: 'pages/my/index/index',
       text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#FF3B30',
    'backgroundColor': '#fff',
    'borderStyle': 'black'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '小艾卫士',
    navigationBarTextStyle: 'black'
  }
}
