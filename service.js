const soap = require('soap');
const InsertData = require('./db')

function RequestData(condition) {
    var isDepComplated = false
    var isGoodsComplated = false
    var pageNum = 1
    var url = 'http://qxerptest.cachet.cn:8100/services/jsBaseDataService?wsdl';
    
    while (isComplated === false) {
        console.log('')
        condition.cachet_qxerp.param.getdepartment.pageNum = pageNum + ''
        ConstrParam(condition)
        soap.createClient(url, (err, client) => {
            client.getDepartment(args, (err, result) => {
                if (err) {
                    console.log('ERROR-WAN:' + err);
                } else {
                    console.log('数据请求成功')
                    data = JSON.parse(result.return)
                    if (data.cachet_qxerp.result.getDepartment.total_num < 3) {
                        isComplated = true
                        pageNum++
                    }
                    InsertData(data.cachet_qxerp.result.getDepartment.result_list.department, 'department', () => {
                    });
                }
            }); 
        })
    }
    pageNum = 1
    while (isGoodsComplated === false) {
        condition.cachet_qxerp.param.getGoodsInfo.pageNum = pageNum + ''
        ConstrParam(condition)
        soap.createClient(url, (err, client) => {
            client.getGoodsInfo(args, (err, result) => {
                if (err) {
                    console.log('ERROR-WAN:' + err);
                } else {
                    console.log('数据请求成功')
                    data = JSON.parse(result.return)
                    if (data.cachet_qxerp.result.getGoodsInfo.total_num < 3) {
                        isGoodsComplated = true
                        pageNum++
                    }
                    InsertData(data.cachet_qxerp.result.getGoodsInfo.result_list.goodsinfo, 'goodsinfo', () => {
                        console.log('****************接口请求完成****************')
                    });

                }
            });
        })
    }

}

// 接口请求参数构建
function ConstrParam(condition) {
    // JSON对象转字符串，然后进行base64编码
    condition = JSON.stringify(condition)
    condition = new Buffer(condition).toString('base64');

    var args = {
        appkey: "test",
        appsecret: "test",
        condition: condition
    }
}

module.exports = RequestData