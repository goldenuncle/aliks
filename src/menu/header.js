// 菜单 顶栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '系统设置',
    icon: 'folder-o',
    children: [
      { path: '/admin/page1', title: '页面 1' },
      { path: '/admin/page2', title: '页面 2' },
      { path: '/admin/page3', title: '页面 3' }
    ]
  }
]
