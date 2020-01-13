var soap = require('soap');

var url = 'http://qxerptest.cachet.cn:8100/services/jsBaseDataService?wsdl';
// var url = 'http://qxerptest.cachet.cn:8100/services/jsOrderDataService?wsdl'

var condition = {
    "cachet_qxerp": {
        "param": {
            "getgoodsinfo": {
                "condition": {
                    "entseqno": "000020000020",
                    "goodsid": "",
                    "goodsname": "",
                    "factoryname": "",
                    "pagesize": "20",
                    "page": "1",
                    "begindate": "2019-12-01 00:00:00",
                    "enddate": "2020-01-13 23:59:59"
                }
            }
        }
    }
}

// JSON对象转字符串，然后进行base64编码
condition = JSON.stringify(condition)
condition = new Buffer(condition).toString('base64');

var args = {
    appkey: "test",
    appsecret: "test",
    condition: condition
}

soap.createClient(url, function (err, client) {
    client.getGoodsInfo(args, function (err, result) {
        if (err) {
            console.log('ERROR-WAN:' + err);
        } else {
            console.log(result);
        }
    });
});