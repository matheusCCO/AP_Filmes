function handleCredentialResponse(response) {
   const data = jwt_decode(response.credential)

   if(data != null){ 

      var conteudo = "<h1> ID: " + data.sub+"</h1>";
      conteudo +="Image URL: <img src='"+data.picture+"'>"+"<br>";
      conteudo +='Full Name: ' +data.name+"<br>";
      conteudo +='Given Name: ' +data.given_name+"<br>";
      conteudo +='Family Name: ' + data.family_name+"<br>";
      conteudo +="Email: " + data.email+"<br>";
     document.getElementById("user").innerHTML = conteudo;
     window.location.href = "/index.html"
   }
   else{
      document.getElementById("user").innerHTML = "<h1>Favor Realizar o login</h1>";
   }

   //window.location.href = "/index.html";

   //document.getElementById("user").innerHTML = data.name;

  }