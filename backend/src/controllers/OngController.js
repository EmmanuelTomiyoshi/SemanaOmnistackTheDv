const crypto = require('crypto'); //importante
const connection = require('../database/connection'); //importante '../' porque tá em outra pasta e precisa voltar


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);  
    },
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
/*ASYNC!!! */   
        const id = crypto.randomBytes(4).toString('HEX');
/* gera 4 bytes hexadecimais*/
        await connection ('ongs').insert({  
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({ id }); 
    }
};