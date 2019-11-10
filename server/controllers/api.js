/* eslint-disable curly */
/* eslint-disable no-console */
const conn = require('../db')
const jwt = require('jsonwebtoken')

module.exports = {
  'GET /api/hello': async (ctx, next) => {
    // conn('select * from user')
    await conn('SELECT * FROM `goods`')
      .then(data => {
        ctx.rest({
          status: true,
          message: '获取成功',
          data: data
        })
      }).catch(error => {
        console.log(error.sqlMessage)
      })
    next()
  },
  'POST /api/login': async (ctx, next) => {
    let postData = ctx.request.body
    let content = { name: postData.username } // 要生成token的主题信息 req.body.name
    let secretOrPrivateKey = 'jwt' // 这是加密的key（密钥）
    let token = jwt.sign(content, secretOrPrivateKey, {
      expiresIn: 30 * 30 * 1 // 1小时过期
    })
    // 首先判断用户名密码是否正确
    await conn('SELECT * FROM `user` where Account=?', [postData.username])
      .then(data => {
        if (data.length === 0) { // 判断是否有该用户名
          ctx.rest({
            status: false,
            message: '该用户不存在'
          })
        } else {
          if (data[0].PassWord === postData.password) { // 判断密码是否正确
            ctx.rest({
              status: 0,
              message: '登录成功',
              result: {
                nickName: data[0].NickName,
                openId: data[0].OpenID,
                token: token
              }
            })
          } else {
            ctx.rest({// 密码错误
              status: false,
              message: '密码错咯！'
            })
          }
        }
      }).catch(error => {
        console.log(error.sqlMessage)
      })
    next()
  },
  'POST /api/register': async (ctx, next) => {
    // let postData = ctx.body
    await conn('SELECT * FROM `user` where Account=?', ['liux1'])
      .then(result => {
        if (result.length !== 0)// 用户名被使用
          ctx.rest({
            status: false,
            message: '用户名已被使用'
          })
      }).then(() => {
        return conn('SELECT * FROM `user` where Account=?', ['liux'])
      }).then(() => {
        ctx.rest({//
          status: true,
          message: '注册成功！'
        })
      })
      .catch(error => {
        console.log(error.sqlMessage)
      })
    next()
  }

}
