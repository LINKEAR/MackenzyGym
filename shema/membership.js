var models = require('./models');
var val = require('./val/validator.js');
var Schema = models.Schema;
var timestamps = require('mongoose-timestamp');
var MembershipShema = new Schema({
    image: {
      type: String,
      require
    },
    imageFlickr: {
      type: String,
      trim: true
    },
    name: {type: String,  required:[true,'Required'],  unique:true},
    state: {
        required:[true,'Required'],
        type: String,
        trim: true,
        default:'Activo',
        enum: ['Activo', 'No Activo']
    }

});

MembershipShema.plugin(timestamps);
var Membership=models.model('Membership', MembershipShema);
Membership.schema.path('name').validate(val.validatorUndefined,
  'Required', 'required');

Membership.schema.path('image').validate(val.validatorUndefined,
    'Required', 'required');

//Membership.schema.path('state').validate(val.validatorState, 'Out Of Context', 'context');
module.exports = Membership;
