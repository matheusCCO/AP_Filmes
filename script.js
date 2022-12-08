


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
            conteudo += '           <th></th>';


            conteudo += '       </tr>';

            Object.keys(obj).forEach(key => {
                if (obj[key].visto == 1) {
                    var visto = "VISTO"
                }
                if (obj[key].visto == 0) {
                    var visto = "NÃO VISTO"
                }

                conteudo += "<tr>";

                conteudo += "    <td>" + obj[key].id + "</td>";
                conteudo += "    <td>" + obj[key].nome + "</td>";
                conteudo += "    <td>" + visto + "</td>";
                conteudo += "    <td> <button onclick='deletar(" + obj[key].id +")'>Deletar</button> </td>";

                conteudo += "</tr>";

                document.getElementById("dados").innerHTML = conteudo;
            });
            conteudo += "</table>";
        };
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
lerDados()

function enviaDados() {
    var nome = document.getElementById('titulo').value;
    var visto = document.getElementById('pagina').value;
    const novoPost =
    {

        "nome": nome,
        "visto": visto,

    }
    console.log(nome, visto);
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

function deletar(id) {
    //var id = document.getElementById("id").value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            lerDados()

        }
    }
    console.log(url + '/' + id)
    xhttp.open("DELETE", url + '/' + id, true);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send();
}


function mudarPag() {
    var id = document.getElementById('Id').value;
    var pagina = document.getElementById('Pagina').value;
    console.log(url + '/' + id);
    var novoUpDate = {
        "visto": pagina
    }

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            lerDados()
            console.log("ok")
        } else {
            console.log(" erro")
        }
    }
    xhttp.open("PUT", url + '/' + id, true);
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(JSON.stringify(novoUpDate));
}