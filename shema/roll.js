var models = require('./models');
var val = require('./val/validator.js');
var Schema = models.Schema;
var timestamps = require('mongoose-timestamp');
var Resource=require('./resource');
var RollShema = new Schema({

    roll: {
        type: String,
        required:[true,'Required'],  unique:true,
        trim: true,
    },
    description: {
        type: String,
        required:[true,'Required']
        trim: true,
    },
    resources: [{
        type: Schema.Types.ObjectId,
        ref: 'Resource'

        //Habilitar cuando este enlazada//required:[true,'Required'],  unique:true
    }],

    state: {
        type: String,
        trim: true,
        default: 'Activo',
        enum: ['Activo', 'No Activo']
    }


});

RollShema.plugin(timestamps);
var Roll=mongoose.model('Roll', RollShema);

Roll.schema.path('roll').validate(val.validatorUndefined,
  'Required', 'required');
Roll.schema.path('description').validate(val.validatorUndefined,
  'Required', 'required');

module.exports = Roll;
