var models = require('./models');
var val = require('./val/validator.js');
var Schema = models.Schema;
var timestamps = require('mongoose-timestamp');
var Resource=require('./resource');
var invoiceShema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',required:[true,'Required']
    },
    detail:[{
      economicActivity: {
          type: Schema.Types.ObjectId,
          ref: 'EconomicActivity',required:[true,'Required']
      },
      code: {
          type: String,
          trim: true,
      },
      cost: {
          type: Number,
          required:[true,'Required'],
          trim: true,
      },
      unit: {
          type: Number,
          required:[true,'Required'],
          trim: true,
      },

      iva: {
          type: Number,
          required:[true,'Required'],
          trim: true,
      },
      totalCost: {
          type: Number,
          required:[true,'Required'],
          trim: true,
      }


    }]


    subtotalInvoice: {
        type: Number,
        required:[true,'Required'],
        trim: true,
    }
    ivaInvoice: {
        type: Number,
        required:[true,'Required'],
        trim: true,
    },



});

invoiceShema.plugin(timestamps);
var invoice=mongoose.model('invoice', invoiceShema);

invoice.schema.path('type').validate(val.validatorUndefined,
  'Required', 'required');
invoice.schema.path('cost').validate(val.validatorUndefined,
  'Required', 'required');
invoice.schema.path('iva').validate(val.validatorUndefined,
    'Required', 'required');
invoice.schema.path('inventory').validate(val.validatorUndefined,
      'Required', 'required');
invoice.schema.path('unitMeasure').validate(val.validatorUndefined,
        'Required', 'required');
invoice.schema.path('unit').validate(val.validatorUndefined,
                'Required', 'required');

module.exports = invoice;
