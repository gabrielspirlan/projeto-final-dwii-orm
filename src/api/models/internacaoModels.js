'use strict';

const { Model, DataTypes } = require('sequelize');

class Internacao extends Model {
    static init(sequelize) {
        super.init({
            int_paciente: DataTypes.STRING,
            int_convenio: DataTypes.STRING,
            int_medico: DataTypes.STRING,
            int_codigocid: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'internacao'
        }
        );
        return this;
    }
};

Internacao.associations = models => {
    Internacao.belongsTo(models.Guiaexame)
}
module.exports = Internacao 
