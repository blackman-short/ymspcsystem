const tool = require('../../utils/tool')
const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({
  id: { type: String, default: tool.getUUID, index: true },
  name: { type: String },
  sex: { type: Number, default: 1 },
  phoneNumber: { type: String },
  password: { type: String },
  createAt: { type: String, default: tool.getCurrentTime },
  updateAt: { type: String, default: tool.getCurrentTime }
})

mongoose.model('Employee', employeeSchema)
