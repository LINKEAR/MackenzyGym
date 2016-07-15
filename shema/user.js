var models = require('./models');
var val = require('./val/validator.js');
var Roll=require('./roll');
var Schema = models.Schema;
var timestamps = require('mongoose-timestamp');
var UserShema = new Schema({

    image: {
        type: String,
        default:'',
        trim: true,
    },

    idUser: {
        type: String,
        required:[true,'Required'],  unique:true
    },
    firstName: {
        type: String,
        required:[true,'Required']
    },
    lastName: {
        type: String,
        required:[true,'Required'],
    },
    username: {
        type: String,
        required:[true,'Required'],
    },
    password: {
        type: String,
        required:[true,'Required'],
    },
    email: {
        type: String,
        trim: true,
        default: ''
    },
    phone: {
        type: String,
        trim: true,
        default: ''
    },
    mobil: {
        type: String,
        trim: true,
        default: ''
    },
    resources: {
        type: Schema.Types.ObjectId,
        ref: 'Roll'
        //Habilitar cuando este enlazada//required:[true,'Required'],  unique:true
    },
    state: {
        required:[true,'Required'],
        type: String,
        trim: true,
        default:'Activo',
        enum: ['Activo', 'No Activo']
    }

});

UserShema.plugin(timestamps);
var User=mongoose.model('User', UserShema);

User.schema.path('idUser').validate(val.validatorUndefined,
  'Required', 'required');
User.schema.path('firstName').validate(val.validatorUndefined,
  'Required', 'required');

User.schema.path('lastName').validate(val.validatorUndefined,
    'Required', 'required');

User.schema.path('username').validate(val.validatorUndefined,
        'Required', 'required');
User.schema.path('password').validate(val.validatorUndefined,
            'Required', 'required');

module.exports = User;
