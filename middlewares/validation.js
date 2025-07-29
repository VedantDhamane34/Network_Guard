const { validationResult } = require('express-validator');
require('dotenv').config();

const validateInputs = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        console.log("h");
        req.flash('DataSiteKey', process.env.DataSiteKey);
        console.log("h");
        return res.redirect("/auth")
    }
    console.log("u");
    next();
};

module.exports = { validateInputs };
