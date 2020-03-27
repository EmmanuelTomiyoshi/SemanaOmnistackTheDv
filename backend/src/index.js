const express = require('express'); 
const cors = require('cors');

const routes = require('./routes'); /* './' para falar que é arquivo */
/* '../' para voltar uma pasta */

const app = express();

app.use(cors());  //SEGURANÇA
app.use(express.json()); /* isso converte o json em java
script. Eu usei para quando fui fazer o "request body" */

app.use(routes);

app.listen(3333);




/**
 * Rota (3333) / Recurso
 (/user) */

 /**
  * Métodos HTTP:
  * GET: Buscar uma informação do back-end  -> Acessa a rota do navegador
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  * 
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição utilizado para criar/alterar recursos
   */



