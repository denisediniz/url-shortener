const mongoose = require('mongoose')
const sequence = require('mongoose-sequence')

const AutoIncrement = sequence(mongoose)

const DataSchema = new mongoose.Schema({
    original_url: {
        type: String,
        required: true
    }
})

// Auto increment the field
DataSchema.plugin(AutoIncrement, {inc_field: 'short_url'})

module.exports = mongoose.model('Data', DataSchema);