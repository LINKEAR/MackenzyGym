var models = require('./models');
var val = require('./val/validator.js');
var Schema = models.Schema;
var timestamps = require('mongoose-timestamp');
var ResourceShema = new Schema({

    resource: {
        type: String,
        required:[true,'Required'],  unique:true,
        trim: true,
    },
    typeResource{
        type: String,
        required:[true,'Required']
        default:'Url',
        enum: ['Url', 'Function']
        trim: true
    },
    state: {
        type: String,
        trim: true,
        default: 'Activo',
        enum: ['Activo', 'No Activo']
    }

});

ResourceShema.plugin(timestamps);
var Resource=mongoose.model('Resource', ResourceShema);

Resource.schema.path('resource').validate(val.validatorUndefined,
  'Required', 'required');
Resource.schema.path('typeResource').validate(val.validatorUndefined,
  'Required', 'required');

module.exports = Resource;
