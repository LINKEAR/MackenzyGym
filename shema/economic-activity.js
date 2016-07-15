var models = require('./models');
var val = require('./val/validator.js');
var Schema = models.Schema;
var timestamps = require('mongoose-timestamp');
var Resource=require('./resource');
var economicActivityShema = new Schema({
    code: {
        type: String,
        unique:true,
        trim: true,
    },
    type: {
      type: String,
      trim: true,
      required:[true,'Required'],
      enum: ['Producto', 'Servicio','Kit-Producto']
    },
    cost: {
        type: Number,
        required:[true,'Required'],
        trim: true,
    },
    iva: {
        type: Boolean,
        required:[true,'Required'],
        trim: true,
    },
    inventory: {
        type: Boolean,
        required:[true,'Required'],
        trim: true,
    },

    unitMeasure : {
        type: String,
        required:[true,'Required'],
        trim: true,
    },
    unit{
        type: Number,
        required:[true,'Required'],
        trim: true,
    },
    minimiumUnit{
        type: Number,
        required:[true,'Required'],
        trim: true,
    },
    state: {
        type: String,
        trim: true,
        default: 'En-Venta',
        enum: ['En-Venta', 'Vendido','No-Disponible']
    }


});

economicActivityShema.plugin(timestamps);
var economicActivity=mongoose.model('economicActivity', economicActivityShema);

economicActivity.schema.path('type').validate(val.validatorUndefined,
  'Required', 'required');
economicActivity.schema.path('cost').validate(val.validatorUndefined,
  'Required', 'required');
economicActivity.schema.path('iva').validate(val.validatorUndefined,
    'Required', 'required');
economicActivity.schema.path('inventory').validate(val.validatorUndefined,
      'Required', 'required');
economicActivity.schema.path('unitMeasure').validate(val.validatorUndefined,
        'Required', 'required');
economicActivity.schema.path('unit').validate(val.validatorUndefined,
                'Required', 'required');
economicActivity.schema.path('minimiumUnit').validate(val.validatorUndefined,
                                'Required', 'required');

module.exports = economicActivity;
