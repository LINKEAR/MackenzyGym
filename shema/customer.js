var models = require('./models');
var Membership=require('./membership');
var val = require('./val/validator.js');
var Schema = models.Schema;
var timestamps = require('mongoose-timestamp');
var CustomerShema = new Schema({

    image: {
        type: String,
        default:'',
        trim: true,
    },

    idCustomer: {
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
    membership: {
        type: Schema.Types.ObjectId,
        ref: 'Membership'
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

CustomerShema.plugin(timestamps);
var Customer=mongoose.model('Customer', CustomerShema);

Customer.schema.path('firstName').validate(val.validatorUndefined,
  'Required', 'required');

Customer.schema.path('lastName').validate(val.validatorUndefined,
    'Required', 'required');

module.exports = Customer;
