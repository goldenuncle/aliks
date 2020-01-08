import request from '@/plugin/axios'

export function ArticleList () {
  return request({
    url: '/article',
    method: 'get'
  })
}
export function ArticleAdd(data) {
  return request({
    url: '/article/add',
    method: 'post',
    data
  })
}
export function GetClassify() {
  return request({
    url: '/article/classify',
    method: 'get'
  })
}
