const express = require('express');
const server = express();
const cors = require('cors');

const fs = require("fs");

server.use(express.json());
var ok = server.use(express.urlencoded({ extended: true }));

const filmes = require("./filmes.json");

//const obj = JSON.stringify(filmes);

//console.log(obj);

server.use(cors())
/*const novoPost = [{
    "id": "8",
    "nome": "Vingadores Guerra Infinita",
    "foto": "https://i.pinimg.com/736x/63/c7/41/63c741c433aa938eadafdbd386e4e676.jpg",
    "descricao": "Em Vingadores: Guerra Infinita, Thanos (Josh Brolin) enfim chega à Terra, disposto a reunir as Joias do Infinito. Para enfrentá-lo, os Vingadores precisam unir forças com os Guardiões da Galáxia, ao mesmo tempo em que lidam com desavenças entre alguns de seus integrantes.",
    "elenco": "Tom Holland,Chris Evans,Scarlett Johansson,Robert Downey Jr"
}];

filmes.push(novoPost);*/

fs.writeFile("./filmes.json", JSON.stringify(filmes), err => {

    // Checking for errors
    if (err) throw err;

    console.log("Done writing"); // Success
});



server.listen(3000, () => {
    console.log('servidor iniciado');
});


server.route('/filmes').get((req, res) => res.json({
    filmes
}))

server.post('/filmes', (req, res) => {
    // validar se a possição do Arry é igual ao id
    // validar se o id criado ja existe
    var data = {
        "id": filmes.length + 1,
        "titulo": req.body.titulo,
        "pagina": req.body.pagina
    }
    console.log(data);
    res.send();
    //console.log(data)
    filmes.push(data)
    fs.writeFile("./filmes.json", JSON.stringify(filmes), err => {

        // Checking for errors
        if (err) throw err;

        console.log("Done writing"); 
    });

    res.json('Saved user')
})


server.delete("/filmes/:id", (req, res)=>{
    //validar uma o id com a possição do arry
    //pois esta excluindo o id + 1

    const id = req.params.id;
    console.log(id);
    
    filmes.splice(id, 1);


    fs.writeFile("./filmes.json", JSON.stringify(filmes), err => {

        
        if (err) throw err;

        console.log("Done writing"); 
        console.log(filmes);

    });
    res.send("ok")

})

server.put("filmes/:id",(req, res)=>{
    const id = req.params.id
    
})