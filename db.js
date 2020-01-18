const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '18483621011',
    port: '3306',
    database: 'invoicetest'
});

// 这里传入的数据是最内层的产品信息
var InsertData = (data, type) => {
    // return new Promise((resolve,reject) => {
    //     var sql = `SELECT * FROM '${type}'`;
    //     connection.query(sql, function (err, result) {
    //         if (err) {
    //             reject('[SELECT ERROR] - ', err.message);
    //         }
    //         console.log('--------------------------数据插入成功----------------------------');
    //         resolve(result);
    //     });
    // })
}

module.exports = InsertData