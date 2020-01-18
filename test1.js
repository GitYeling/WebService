/**
 * 
 * 回调函数版本
 * 
 */

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '18483621011',
    port: '3306',
    database: 'invoicetest'
});

var app = (param, callback) => {
    router(param, (data) => {
        callback(data)
    })
}

var router = (param, callback) => {
    controller(param, (data) => {
        // console.log('router收到返回数据：' + data)
        callback(data)
    })
}

var controller = (param, callback) => {
    var sql = `select * from users where username = '${param}'`
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------数据查询成功----------------------------');
        // console.log(result);
        callback(result[0].role_id)
        console.log('--------------------------数据查询结束-----------------------\n\n');
    });
}

app('admin', (role_id1) => {
    console.log('admin的role_id为：' + role_id1)
})

app('小王', (role_id2) => {
    console.log('小王的role_id为：' + role_id2)
})