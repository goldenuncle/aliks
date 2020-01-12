import request from '@/plugin/axios'

export function ArticleList (page) {
  return request({
    url: '/admin/article',
    method: 'get',
    params:page
  })
}
export function ArticleByTitle(title) {
  return request({
    url: '/admin/article/findbytitle',
    method: 'get',
    params:{
      title
    }
  })
}
export function ArticleAdd(data) {
  return request({
    url: '/admin/article/add',
    method: 'post',
    data
  })
}
export function GetClassify() {
  return request({
    url: '/admin/article/sort',
    method: 'get'
  })
}
export function UpdateIsTop(data) {
  return request({
    url: '/admin/article/updatetop',
    method: 'get',
    params: data

  })
}
