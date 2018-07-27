function EditField(fieldName, type = 'input', length = '50px', isRequired = true) {
  this.fieldName = fieldName
  this.type = type
  this.length = length
  this.isRequired = isRequired
}

exports.EditField = EditField