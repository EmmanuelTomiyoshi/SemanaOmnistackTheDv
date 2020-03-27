/* LOGIN PARA VALIDAR SE A ONG REALMENTE EXISTE*/
const connection = require('../database/connection'); //callback
module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first(); //para retornar apenas um resultado, pois está buscando por id

        if (!ong) {
            return response.status(400).json({ error: 'No Ong found with this ID'});

        }
        return response.json(ong);

    }
}