/**
 * 
 * controller模块作为该程序的控制器，负责处理如下事务：
 * 1.循环获取数据以及处理
 * 2.调用 requestdata 模块获取数据；
 * 3.判断获取到的接口数据是否为最后一页，如果是最后一页，则将满足循环的条件设置为 FALSE
 * 4.
 * 
 */

const Request = require('./requestdata')
const InsertData = require('./db')

var requestNum = 0
var pageNum = 1
var totalNum = 0

var Service = async (condition) => {
    return new Promise(async(resolve,reject) => {
        console.log(condition)
        key = Object.keys(condition.cachet_qxerp.param)[0]
        if (key === 'getdepartment') {
            pageSize = condition.cachet_qxerp.param.getdepartment.condition.pagesize;
        } else {
            pageSize = condition.cachet_qxerp.param.getgoodsinfo.condition.pagesize;
        }
        do {
            var requestdata = await Request(condition, key)
            if (requestdata.msg_code === 'SUCCESS') {
                // console.log(JSON.stringify(requestdata));
                requestNum = requestNum + parseInt(pageSize)
                console.log('***********已请求：' + requestNum + '条*************')
                pageNum++
                // InsertData()
                if (key === 'getdepartment') {
                    InsertData(requestdata.getDepartment.result_list.department,'')
                    totalNum = requestdata.getDepartment.total_num
                    condition.cachet_qxerp.param.getdepartment.condition.page = pageNum;
                } else {
                    InsertData(requestdata.getGoodsInfo.result_list.goodsinfo,'')
                    totalNum = requestdata.getGoodsInfo.total_num
                    condition.cachet_qxerp.param.getgoodsinfo.condition.page = pageNum;
                }
            }
        } while (requestNum < totalNum)
        requestNum = 0
        pageNum = 1
        totalNum = 0
        resolve('OK')
    })

}

module.exports = Service