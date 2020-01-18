const soap = require('soap');
const InsertData = require('./db')

var url = 'http://qxerptest.cachet.cn:8100/services/jsBaseDataService?wsdl';

var Request = (condition, type) => {
    var args = ConstrParam(condition)
    return new Promise((resolve, reject) => {
        soap.createClient(url, (err, client) => {
            if (type === 'getdepartment') {
                client.getDepartment(args, (err, result) => {
                    if (err) {
                        reject('ERROR-WAN:' + err);
                    } else {
                        console.log('数据请求成功')
                        data = JSON.parse(result.return)
                        resolve(data.cachet_qxerp.result)
                    }
                });
            } else {
                client.getGoodsInfo(args, (err, result) => {
                    if (err) {
                        reject('ERROR-WAN:' + err);
                    } else {
                        console.log('数据请求成功')
                        data = JSON.parse(result.return)
                        resolve(data.cachet_qxerp.result)
                    }
                });
            }

        })
    })
}


// 接口请求参数构建
var ConstrParam = (condition) => {
    // JSON对象转字符串，然后进行base64编码
    condition = JSON.stringify(condition)
    condition = new Buffer(condition).toString('base64');

    var args = {
        appkey: "test",
        appsecret: "test",
        condition: condition
    }
    return args;
}


module.exports = Request