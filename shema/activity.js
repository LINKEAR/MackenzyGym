var models = require('./models');
var val = require('./val/validator.js');
var Schema = models.Schema;
var timestamps = require('mongoose-timestamp');
var ActivityShema = new Schema({
    name: {type: String,  required:[true,'Required'],  unique:true},
    state: {
        required:[true,'Required'],
        type: String,
        trim: true,
        default:'Activo',
        enum: ['Activo', 'No Activo']
    }

});

ActivityShema.plugin(timestamps);
var Activity=models.model('Activity', ActivityShema);
Activity.schema.path('name').validate(val.validatorUndefined,
  'Required', 'required');
//Activity.schema.path('state').validate(val.validatorState, 'Out Of Context', 'context');
module.exports = Activity;
