'use strict';

module.exports = (app) => {
    const userController = require('./controller/usercontroller');

    app.route('/biodata')
    .get(userController.showAllBiodata)
    .post(userController.addBiodata); 

app.route('/biodata/:id')
    .get(userController.showBiodataById)
    .put(userController.updateBiodataById)
    .delete(userController.deleteUserById);

};