import request from '@/plugin/axios'

export function AccountLogin (data) {
  console.log(data)
  return request({
    url: '/logins',
    method: 'post',
    data
  })
}
