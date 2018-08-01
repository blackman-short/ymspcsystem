const crypto = require('crypto')
const merchantKey = 'DA13B436E338431F9B91ACF1E6C6B455'

function sign (strData, strCurrentDateTime) {
  let signResult = null
  let signStr = strData + merchantKey + strCurrentDateTime
  signStr = signStr.split(' ').join('')
  signStr = signStr.split('\t').join('')
  signStr = signStr.split('\r').join('')
  signStr = signStr.split('\n').join('')
  signResult = crypto.createHash('md5').update(signStr).digest('hex')
  console.log(signResult.toUpperCase())
}

const data = {'out_trade_no': 'p1531411932091028004001562739475', 'extendParam': '{"entranceTime":"2018-07-24 00:11:51","exitTime":"2018-07-24 00:11:55","plateNumber":"京V45092","parkId":18398}', 'create_time': '2018-07-24 00:12:12', 'agreement_no': '201807100942569197004083e211e88bfacb0d3437f2be', 'total_fee': '0.01', 'notify_url': 'http://mapi.test.etcp.cn/merchant/open/1.0.0/openapi/orderpaid', 'type': 0, 'app_id': 'ETCP'}

const timeStamp = '20180724095252'

sign(JSON.stringify(data), timeStamp)
