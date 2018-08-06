// 就诊记录.
const mongoose = require('mongoose')
const tool = require('../../utils/tool')

const visitRecordSchema = new mongoose.Schema({
  id: { type: String, default: tool.getUUID },
  visitorId: { type: String },
  visitAt: { type: String, default: tool.getCurrentTime },
  visitedBy: { type: String  },
  isActive: { type: Boolean, default: true }
})

mongoose.model('VisitRecord', visitRecordSchema)