const Service = require('./controller')
const { depCondition, goodsCondition } = require('./parameter')


console.log('定时任务已启动...')

// var interval = 1000 * 1000
// setInterval(() => {
    // setDateTime()
    Service(depCondition,'getdepartment')
    // Service(goodsCondition,'getgoodsinfo')
// }, interval);


setDateTime => {
    var time = (new Date).getTime() - 24 * 60 * 60 * 1000;
    var yesday = new Date(time);
    var month = yesday.getMonth();
    var day = yesday.getDate();
    yesday = yesday.getFullYear() + "-" + (yesday.getMonth() > 9 ? (yesday.getMonth() + 1) : "0" + (yesday.getMonth() + 1)) + "-" + (yesday.getDate() > 9 ? (yesday.getDate()) : "0" + (yesday.getDate()));

    // 设置组织结构接口更新数据时间
    depCondition.cachet_qxerp.param.getdepartment.condition.begindate = yesday + ' 00:00:00'
    depCondition.cachet_qxerp.param.getdepartment.condition.enddate = yesday + ' 23:59:59'
    // 设置货品信息接口更新数据时间
    goodsCondition.cachet_qxerp.param.getgoodsinfo.condition.begindate = yesday + ' 00:00:00'
    goodsCondition.cachet_qxerp.param.getgoodsinfo.condition.enddate = yesday + ' 23:59:59'
}  
