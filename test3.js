/**
 * 
 * async、await版本
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

var app =async(param) => {
    var data = await router(param)
    return data
}

var router = async(param) => {
    var data = await controller(param)
    return data
}

var controller = param => {
    return new Promise((resolve, reject) => {
        var sql = `select * from users where username = '${param}'`
        connection.query(sql, function (err, result) {
            if (err) {
                reject('[SELECT ERROR] - ', err.message);
            }
            console.log('--------------------------数据查询成功----------------------------');
            // console.log(result);
            resolve(result[0].role_id)
        })
    }).then((role_id) => {
        return role_id
    }).catch((err) => {
        return err
    });
}

app('admin').then((role_id)=>{
    console.log('admin的role_id为：' + role_id)
})
app('小王').then((role_id)=>{
    console.log('admin的role_id为：' + role_id)
})
