const crypto = require('crypto')

function encodeMac (data, key) {
  if (!(data && key)) {
    return false
  }

  key = Buffer.from(key)
  data = Buffer.from(data)
  let reqhash = getHmacMd5Bytes(key, data)
  reqhash = encodeURIComponent(reqhash.toString('base64'))
  return reqhash
}

function md5 (str) {
  let md5 = crypto.createHash('md5')
  md5.update(str)

  return md5.digest()
}

function getHmacMd5Bytes (key, data) {
  if (!(data && key)) {
    return false
  }

  let length = 64
  let ipad = Buffer.alloc(length)
  let opad = Buffer.alloc(length)

  for (let i = 0; i < length; i++) {
    ipad[i] = 0x36
    opad[i] = 0x5C
  }

  let actualKey = key
  let keyArr = Buffer.alloc(length)

  if (key.length > length) {
    actualKey = md5(key)
  }

  for (let i = 0; i < actualKey.length; i++) {
    keyArr[i] = actualKey[i]
  }

  if (actualKey.length < length) {
    for (let i = actualKey.length; i < keyArr.length; i++) {
      keyArr[i] = 0x00
    }
  }

  let kIpadXorResult = Buffer.alloc(length)
  for (let i = 0; i < length; i++) {
    kIpadXorResult[i] = (keyArr[i] ^ ipad[i])
  }

  let firstAppendResult = Buffer.alloc(kIpadXorResult.length + data.length)
  for (let i = 0; i < kIpadXorResult.length; i++) {
    firstAppendResult[i] = kIpadXorResult[i]
  }

  for (let i = 0; i < data.length; i++) {
    firstAppendResult[i + keyArr.length] = data[i]
  }

  let firstHashResult = md5(firstAppendResult)
  let kOpadXorResult = Buffer.alloc(length)
  for (let i = 0; i < length; i++) {
    kOpadXorResult[i] = (keyArr[i] ^ opad[i])
  }

  let secondAppendResult = Buffer.alloc(kOpadXorResult.length + firstHashResult.length)
  for (let i = 0; i < kOpadXorResult.length; i++) {
    secondAppendResult[i] = kOpadXorResult[i]
  }

  for (let i = 0; i < firstHashResult.length; i++) {
    secondAppendResult[i + keyArr.length] = firstHashResult[i]
  }

  let hmacMd5Bytes = Buffer.from(md5(secondAppendResult))
  return hmacMd5Bytes
}

function verificationSignature (reqParams, secretKey = 'demoEwUt%2BQecIMjU6d5s0OQ%3D%3D') {
  // 根据参数生成秘钥
  let secretObj = {}
  Object.assign(secretObj, reqParams)
  delete secretObj.signature
  let computedSignature = encodeMac(JSON.stringify(secretObj), secretKey)
  console.log(computedSignature)
}

// 输入参数
const reqData = {
  'appId': 'LFTCH',
  'industryCode': '802110048991169',
  'data': {
    'syncId': '690277e4 e8aa49e9bdd37dc1fd41f364',
    'plateNumber': '京123456',
    'orderId': '690277e4 e8aa49e9bdd37dc1fd41f364',
    'payAmount': 1,
    'serviceAmount': 1,
    'orderDate': '2018-07-25T01:43:18.000Z',
    'startTime': '2018-07-25T01:43:18.000Z',
    'endTime': '2018-07-25T01:45:18.000Z',
    'parkId': '89 a39524 - dae1 - 48 ce - 993 f - 74e3 f7020a0c',
    'parkName': '开放接口测试停车场',
    'payCallback': 'http: //webapi.mn.tingkaixin.net/api/UnionPay/PayResult',
    'accSplitData': 'null'
  },
  'timestamp': 1533028952,
  'signature': 'DCIPHP%2BWqRLRM3W%2FBPxclg%3D%3D'
}

verificationSignature(reqData)
