

const url = "http://localhost:3000/filmes";


function lerDados() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            
            var conteudo = '<table border="1">';
            conteudo += '       <tr>';
            conteudo += '           <th>id</th>';
            conteudo += '           <th>Titulo</th>';
            conteudo += '           <th>pagina</th>';
            
            
            conteudo += '       </tr>';

            Object.keys(obj).forEach(key => {
               
                conteudo +="<tr>";
                
                conteudo +="    <td>"+obj[key].id+"</td>";
                conteudo +="    <td>"+obj[key].titulo+"</td>";
                conteudo +="    <td>"+obj[key].pagina+"</td>";
                
                conteudo +="</tr>";
                
                document.getElementById("dados").innerHTML = conteudo;
            });
            conteudo += "</table>";
        };
    };
    xhttp.open("GET", "filmes.json", true);
    xhttp.send();
}


function enviaDados() {
    var titulo = document.getElementById('titulo').value;
    var pagina = document.getElementById('pagina').value;
    const novoPost =
    {

        "titulo": titulo,
        "pagina": pagina,

    }
    console.log(titulo, pagina);
    console.log(novoPost);

    let xhttp = new XMLHttpRequest()
    xhttp.open("POST", url, true)
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify(novoPost))
    xhttp.onload = function () {
        console.log(this.responseText)
    }

    return xhttp.responseText
}


function deletar(){
    var id = document.getElementById("id");

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {

        }
    }

    xhttp.open("DELETE", url+'/:id='+id, true);
    xhttp.send();

    
}