/**
 * 
 * 模拟服务器请求
 * 业务需求：
 * 1.有一个主函数，该主函数接收客户端请求，当请求到来时被调用；
 * 2.主函数调用路由函数，由路由函数来分发处理函数
 * 3.处理函数负责接收路由函数传来的请求参数，然后查找数据库
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

var app = (param) => {
    return router(param)
}

var router = param => {
    return controller(param)
}

var controller = param => {
    var sql = `select * from users where username = '${param}'`
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------数据查询成功----------------------------');
        // console.log(result);
        return result[0].role_id
        console.log('--------------------------数据查询结束-----------------------\n\n');
    });
}

var role_id1 = app('admin')
console.log('admin的role_id为：' + role_id1)
var role_id2 = app('小王')
console.log('小王的role_id为：' + role_id2)