const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query; //enviar usando '?'

        const [count] = await connection('incidents').count(); //[count] foi para contar 

        console.log(count); //contou o total de registros de incidentes

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')  //relacionar dados de duas tabelas
        //colocou mais dados 
        .limit(5) //retorna apenas 5 registros
        .offset((page - 1) * 5) //1-1 = 0 ; 0*5 = 0   --- 2-1 = 1  ; 1*5 = 5...
        .select(['incidents.*', 
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp', 
        'ongs.city', 
        'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']); //manda para o header do imsonia o total de incidentes (resultado final)

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

    return response.json({ id });
    },
    //ISSO É PARA O route.delete
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;  //esse id é para verificar se o incidente realmente foi criado pela ong que está querendo deletá-lo

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')  //selecionar apenas essa coluna
            .first();   //retorna apenas um resultado

        if (incident.ong_id  !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted'}); //não autorizado

        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send(); //204 sem conteúdo

    }
};