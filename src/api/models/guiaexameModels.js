'use strict';

const { Model, DataTypes } = require('sequelize');

class Guiaexame extends Model {
    static init(sequelize) {
        super.init({
            gui_numeroguia: DataTypes.STRING,
            gui_exame: DataTypes.STRING,
            int_codigo: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'guiaexame'
        }
        );
        return this;
    }
};
Guiaexame.associations = models => {
    Guiaexame.hasOne(models.Internacao)
}

module.exports = Guiaexame 
