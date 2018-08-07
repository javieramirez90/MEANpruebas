const Schema = require('mongoose').Schema


const schoolSchema = new Schema({
  name: {
    type: String,
    enum: ['ITAM', 'ITESM', 'IBERO']
  },
  address: {
    type: String,
    enum: ['Santa Teresa', 'Xochimilco', 'Santa Fe']
  },
  discount: Number
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


module.exports = require('mongoose').model('School', schoolSchema);