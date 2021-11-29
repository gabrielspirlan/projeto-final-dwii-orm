const Guiaexame = require('../models/guiaexameModels');

module.exports = {
    async index(req, res) {
        const guiaexame = await Guiaexame.findAll();
        return res.json(guiaexame);
    },

    async store(req, res) {
        const { gui_numeroguia, gui_exame, int_codigo } = req.body; 
        const guiaexame = await Guiaexame.create({ gui_numeroguia, gui_exame, int_codigo });
        return res.status(200).send({
            status: 1,
            message: "Guiaexame cadastrado com sucesso!!!",
            guiaexame
        })
    },
     async update(req, res) {
         const { gui_numeroguia, gui_exame, int_codigo } = req.body;
         const { codigo } = req.params; 
         await Guiaexame.update({ gui_numeroguia, gui_exame, int_codigo }, { 
             where: {
             id: codigo
             }
         });
         return res.status(200).send({
             status: 1,
             message: "Guiaexame atualizado com sucesso!!!",
         })
     },
     async delete(req, res) {
         const { codigo } = req.params;
         await Guiaexame.destroy({
             where: {
                 id: codigo
             }
         });
         return res.status(200).send({
             status: 1,
             message: "Guiaexame excluido com sucesso!!!",
         })
     }
}