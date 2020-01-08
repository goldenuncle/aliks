// 数据库连接配置
var mysql = require('mysql')
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'alsoi',
  port: '3306',
  charset: 'UTF8_GENERAL_CI',
  //typeCast: false
})

let query = function (sql, values) {

  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {

          if (err) {
            reject(err)
          } else {             
            resolve(rows)
            //console.log(JSON.parse(JSON.stringify(rows)))
          }
          connection.release()
        })
      }
    })
  })
}
module.exports = query
