// 菜单 侧边栏
export default [
  { path: '/admin/dashboard', title: 'Dashboard', icon: 'home' },
  {
    title: '文章管理',
    icon: 'android',
    children: [
      { path: '/admin/article', title: '文章管理', icon: 'tripadvisor' },
      { path: '/admin/article', title: '类型管理' }
      // { path: '/admin/article', title: '新增文章', icon: 'apple' }
    ]
  },
  // {
  //   title: '系统设置',
  //   icon: 'apple',
  //   children: [
  //     { path: '/admin/article', title: '用户管理' },
  //     { path: '/admin/article', title: '系统日志' }
  //   ]
  // }
]
