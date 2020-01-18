// getDepartment 接口
var depCondition = {
    "cachet_qxerp": {
        "param": {
            "getdepartment": {
                "condition": {
                    "entseqno": "000020000020",
                    "customid": "",
                    "storageid": "",
                    "pagesize": "3",
                    "page": "1",
                    "begindate": "2019-01-13 00:00:00",
                    "enddate": "2020-01-13 23:59:59"
                }
            }
        }
    }
}

//  getGoodsInfo 接口
var goodsCondition = {
    "cachet_qxerp": {
        "param": {
            "getgoodsinfo": {
                "condition": {
                    "entseqno": "000020000020",
                    "goodsid": "",
                    "goodsname": "",
                    "factoryname": "",
                    "pagesize": "3",
                    "page": "1",
                    "begindate": "2019-12-01 00:00:00",
                    "enddate": "2020-01-13 23:59:59"
                }
            }
        }
    } 
}

module.exports = {
    depCondition,
    goodsCondition
} 