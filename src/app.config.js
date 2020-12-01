export default {
  pages: [
    'pages/index/index',
    'pages/itpServe/index/index',
    'pages/my/index/index',
  ],
  tabBar: {
    list: [{
      // 'iconPath': 'resource/latest.png',
      // 'selectedIconPath': 'resource/lastest_on.png',
       pagePath: 'pages/index/index',
       text: '首页'
    }, 
    {
      // 'iconPath': 'resource/hotest.png',
      // 'selectedIconPath': 'resource/hotest_on.png',
       pagePath: 'pages/itpServe/index/index',
       text: '服务'
    }, 
    {
      // 'iconPath': 'resource/node.png',
      // 'selectedIconPath': 'resource/node_on.png',
       pagePath: 'pages/my/index/index',
       text: '我的'
    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '小艾卫士',
    navigationBarTextStyle: 'black'
  }
}
