const mongoose = require('mongoose');
const Schema = mongoose.Schema


const programSchema = new Schema({
  typee: {
    type: String,
    enum: ['curso', 'diplomado']
  },
  school: {
    type: String,
    enum: ['ITAM', 'ITESM', 'IBERO']
  },
  name: String,
  initDate: Date,
  endDate: Date,
  schedule: String,
  modules: Number,
  hours: Number,
  registrationCost: Number,
  moduleCost: Number,

},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Program = mongoose.model("Program", programSchema);
module.exports = Program;
