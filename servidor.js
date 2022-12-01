const restify = require('restify');
const erros = require('restify-errors');
const corsMiddleware = require('restify-cors-middleware2')



const server = restify.createServer({
    name: 'lojinha',
    version: '0.1'
});

const cors = corsMiddleware({
    preflightMaxAge: 5, //Optional
    origins: ['*'],
    allowHeaders: ['API-Token'],
    exposeHeaders: ['API-Token-Expiry']
})

server.pre(cors.preflight)
server.use(cors.actual)




server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());



server.listen(3000, function () {
    console.log("%s excutando em %s", server.name, server.url);

});

const knex = require("knex")({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'filmes'
    },
});



server.get("/filmes", (req, res, next) => {
    knex('filmes').then((dados) => {

        res.send(dados);
    }, next);
});


server.post("/filmes", (req, res, next) => {
    knex('filmes')
        .insert(req.body)
        .then((dados) => {
            if (!dados) {
                return res.send(new erros.BadRequestError('Erro ao inserir o produto'));
            }
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.send("Produto inserido");
        }, next);
});

server.put("/filmes/:id", (req, res, next) => {
    const idfilme = req.params.id;
    knex('filmes')
        .where('id', idfilme)
        .update(req.body)
        .then((dados) => {
            if (!dados) {
                return res.send(new erros.BadRequestError('Erro ao editar o produto'));
            }
            res.send("Produto editado");
        }, next);
});


server.del("/filmes/:id", (req, res, next) => {
    const idfilme = req.params.id;

    console.log(idfilme)
        / knex('filmes')
            .where('id', idfilme)
            .delete()
            .then((dados) => {
                if (!dados) {
                    return res.send(new erros.BadRequestError('Erro ao deletar o produto'));
                }
                res.send(dados);
            }, next);
});