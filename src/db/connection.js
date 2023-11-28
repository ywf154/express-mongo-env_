const monk = require('monk');

const dbUrl = process.env.DB_URL;

// console.log(process.env.NODE_ENV);

const db = monk(dbUrl);

db.then(() => {
  console.log('Connected correctly to server');
});

module.exports = db;

/*
首先，通过 require('monk') 引入 monk 模块。
通过 process.env.DB_URL 获取环境变量 DB_URL 的值，该值应该是 MongoDB 数据库的连接字符串。
使用获取到的连接字符串 dbUrl 创建数据库连接 db。
db.then() 用于在数据库连接成功后执行回调函数，并输出 'Connected correctly to server'。
最后，通过 module.exports = db 导出数据库连接，以便在其他文件中可以引入和使用该数据库连接。
*/
