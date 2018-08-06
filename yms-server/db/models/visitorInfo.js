// 访客
const mongoose = require('mongoose')
const tool = require('../../utils/tool')

const visitorSchema = new mongoose.Schema({
  id: { type: String, default: tool.getUUID },
  name:  { type: String },
  sex: { type: Number, default: 1 }, // 0 - 女; 1 - 男
  birthday: { type: String },
  phoneNumber:  { type: String },
  address: { type: String },
  consumeFee: { type: Number, default: 0 }, // 消费金额
  bonusPoint: { type: Number, default: 0 }, // 积分
  createAt:  { type: String, default: tool.getCurrentDate },
  updateAt: { type: String, default: tool.getCurrentDate }
})

mongoose.model('Visitor', visitorSchema)