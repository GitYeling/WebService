// getDepartment 接口
var condition = {
    "cachet_qxerp": {
        "param": {
            "getdepartment": {
                "condition": {
                    "entseqno": "000020000020",
                    "customid": "",
                    "storageid": "",
                    "pagesize": "20",
                    "page": "1",
                    "begindate": "2019-07-01 00:00:00",
                    "enddate": "2019-07-01 23:59:59"
                }
            }
        }
    }
}

//  getGoodsInfo 接口
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
                    "enddate": "2019-12-01 23:59:59"
                }
            }
        }
    }
}


// getStockInfo 接口
var condition = {
    "cachet_qxerp": {
        "param": {
            "getstockinfo": {
                "condition": {
                    "entseqno": "000020000020",
                    "storageid": "1327",
                    "serialno": "",
                    "goods": "14415",
                    "pagesize": "50",
                    "page": "1"
                }
            }
        }
    }
}


// sendSalesOrder接口
var condition = {
	"cachet_qxerp": {
		"param": {
			"sendsalesorder": {
				"content": {
					"entseqno": "000020000020",
					"customid": "2934",
					"storageid": "1327",
					"shiptoid": "5446",
					"ordercode": "S12345678",
					"operater": "张三",
					"orderdate": "2019-08-11 17:18:18",
					"confirmman": "李四",
					"confirmdate": "2019-08-12 17:18:18",
					"goodslists": [{
							"recordid": "1234567891",
							"goodsid": "1234",
							"lotno": "20191201",
							"proddate": "2019-12-01",
							"invaliddate": "2022-11-30",
							"killlotno": " 20191211",
							"killdate": " 2019-12-11",
							"serialno": " 34535434DF43",
							"goodsqty": 1.0
						},
						{
							"recordid": "1234567892",
							"goodsid": "2345",
							"lotno": "20191201",
							"proddate": "2019-12-01",
							"invaliddate": "2022-11-30",
							"killlotno": "",
							"killdate": "",
							"serialno": "",
							"goodsqty": 10.0
						}
					]

				}
			}
		}
	}
}

// getMovelist接口
var condition = {
	"cachet_qxerp": {
		"param": {
			"getmovelist": {
				"condition": {
					"entseqno": "000020000020",
					"tostorageid": "1327",
					"ordercode ": "12345678",
					"pagesize": "50",
					"page": "1",
					"begindate": "2019-07-01 00:00:00",
					"enddate": "2019-07-31 23:59:59"
				}
			}
		}
	}
}

// sendApplyReplenish接口
var condition = {
	"cachet_qxerp": {
		"param": {
			"sendapplyreplenish": {
				"content": {
					"entseqno": "000020000020",
					"customid": "",
					"fromstorageid": "827",
					"tostorageid": "1327",
					"shiptoid": "45456",
					"ordercode": "A12345678",
					"operater": "张三",
					"orderdate": "2019-08-11 17:18:18",
					"confirmman": "李四",
					"confirmdate": "2019-08-12 17:18:18",
					"goodslists": [{
							"recordid": "1234567891",
							"goodsid": "1234",
							"applyqty": 20.0
						},
						{
							"recordid": "1234567892",
							"goodsid": "2345",
							"applyqty": 10.0
						}
					]
				}
			}
		}
	}
}