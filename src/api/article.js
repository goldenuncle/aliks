import request from '@/plugin/axios'

export function ArticleList () {
  return request({
    url: '/article',
    method: 'get'
  })
}
