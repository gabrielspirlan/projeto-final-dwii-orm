const Internacao = require('../models/internacaoModels');
module.exports = {
    async index(req, res) {
        const internacao = await Internacao.findAll();
        return res.json(internacao);
    },

    async store(req, res) {
        const { int_paciente, int_convenio, int_medico, int_codigocid } = req.body; 
        const internacao = await Internacao.create({ int_paciente, int_convenio, int_medico, int_codigocid });
        return res.status(200).send({
            status: 1,
            message: "Internacao cadastrado com sucesso!!!",
            internacao
        })
    },
     async update(req, res) {
         const { int_paciente, int_convenio, int_medico, int_codigocid } = req.body;
         const { codigo } = req.params; 
         await Internacao.update({ int_paciente, int_convenio, int_medico, int_codigocid }, { 
             where: {
             id: codigo
             }
         });
         return res.status(200).send({
             status: 1,
             message: "Internacao atualizado com sucesso!!!",
         })
     },
     async delete(req, res) {
         const { codigo } = req.params;
         await Internacao.destroy({
             where: {
                 id: codigo
             }
         });
         return res.status(200).send({
             status: 1,
             message: "Internacao excluido com sucesso!!!",
         })
     }
}