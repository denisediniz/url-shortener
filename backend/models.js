import mongoose, { Schema } from 'mongoose'
import sequence from 'mongoose-sequence'

const AutoIncrement = sequence(mongoose)

const DataSchema = new Schema({
    original_url: {
        type: String,
        required: true
    }
})

// Auto increment the field
DataSchema.plugin(AutoIncrement, {inc_field: 'short_url'})

module.exports = mongoose.model('Data', DataSchema);