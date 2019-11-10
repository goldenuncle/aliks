/* eslint-disable no-path-concat */
/* eslint-disable camelcase */
const fs = require('fs')
const router = require('koa-router')()

function addMapping (router, mapping) {
  for (var url in mapping) {
    if (url.startsWith('GET ')) {
      let path = url.substring(4) // path对应请求路径   mapping[url]对应controllers下对应path 的函数
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST ')) {
      let path = url.substring(5)
      router.post(path, mapping[url])
      console.log(`register URL mapping: POST ${path}`)
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

function addControllers (router) {
  var files = fs.readdirSync(__dirname + '/controllers')
  var js_files = files.filter((f) => {
    return f.endsWith('.js')
  })

  for (var f of js_files) {
    console.log(`process controller: ${f}...`)
    let mapping = require(__dirname + '/controllers/' + f)
    addMapping(router, mapping)
  }
}

addControllers(router)
module.exports = function (dir) {
  let controllers_dir = dir || 'controllers' // 如果不传参数，扫描目录默认为'controllers'
  let router = require('koa-router')()
  addControllers(router, controllers_dir)
  return router.routes()
}
