exports.validatorUndefined = function (value) {
        if(value=='undefined')
            return false;
        else
            return true;
};
exports.validatorState = function (value) {
      return /Activo|Inactivo/i.test(value);
};

