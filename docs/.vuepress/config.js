module.exports = {
  title: '个人主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.png' }],
    /*['link', { rel: 'manifest', href: '/images/photo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.png' }],*/
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}],
    ['script', {}, `
    function getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]); return null;
    }
    window.dataLayer=[{
      "clientID": getQueryString('app_instanced_id')? getQueryString('app_instanced_id'):""
    }];
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WH8HSHK');
    `
  ] 
    /*['script', {}, `
      var _hmt = _hmt || [];
      window._hmt = _hmt;
      (function() {
      // 引入谷歌,不需要可删除这段
      var hm1 = document.createElement("script");
      hm1.src = "https://www.googletagmanager.com/gtag/js?id=UA-166137413-1";
      var s1 = document.getElementsByTagName("script")[0]; 
      s1.parentNode.insertBefore(hm1, s1);
      })();

      // 谷歌加载,不需要可删除
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-166137413-1',{
        'user_id': 'USER_ID_003'
      });`
    ]*/
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置google_analytics
      {
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/web/js/' },
          { text: 'VuePress', link: '/web/vuepress/' },
          { text: 'test', link: 'http://192.168.36.1:9527/'}
        ]
      },
      { text: 'GA', link: '/ga/' },
      { text: '碎言碎语', link: '/others/' },
      { text: '测试', link: 'https://oppostoreid.page.link/?apn=com.heytap.mall&ofl=https://www.oppo.com/id/online-store/&link=https%3A%2F%2Foppostoreid.page.link%2F%3Furi%3Dcom.heytap.mall.action.web%26data%3Dhttps%3A%2F%2Fwww.oppo.com%2Fid%2Fonline-store%2F' }    
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};