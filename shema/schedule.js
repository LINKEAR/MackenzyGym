var models = require('./models');
var Schema = models.Schema;
var val = require('./val/validator.js');
var timestamps = require('mongoose-timestamp');
var ScheduleShema = new Schema({
    activity: {
        type: Schema.Types.ObjectId,
        ref: 'Activity',
        required:[true,'Required']
    },
    startTime: {
        type: Date,
        required:[true,'Required']
    },
    endTime: {
        type: Date,
        required:[true,'Required']
    },
    state: {
        type: String,
        trim: true,
        default: 'Activo',
        enum: ['Activo', 'No Activo']
    }
});

scheduleShema.plugin(timestamps);
var Schedule=mongoose.model('Schedule', HorarioShema);

Schedule.schema.path('name').validate(val.validatorUndefined,
  'Required', 'required');
module.exports = Schedule;
