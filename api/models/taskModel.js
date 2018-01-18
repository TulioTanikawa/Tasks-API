'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Nome da Tarefa'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      required: 'Tempo da Tarefa'
    }],
    default: ['Não Terminada']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);