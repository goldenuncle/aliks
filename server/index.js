/* eslint-disable no-console */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('./router')
const rest = require('./rest')
const app = new Koa()
const cors = require('koa2-cors')

// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/test') {
      return false
    }
    return '*'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'x-token']
}))

// parse request body:
app.use(bodyParser())

// bind .rest() for ctx:
app.use(rest.restify())

// add controllers:
app.use(router())

app.listen(3000, () => {
  console.log('app started at port 3000...')
})
