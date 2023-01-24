const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {

    //hace la validacion del objeto de error que creo express-validator en el request
    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next();
}

module.exports = {
    validarCampos
}