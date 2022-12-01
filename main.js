function handleCredentialResponse(response) {
   const data = jwt_decode(response.credential)

   if(data != null){ 
      window.location.href = "/index.html";
   }
   else{
      document.getElementById("user").innerHTML = "<h1>Favor Realizar o login</h1>";
   }

   //window.location.href = "/index.html";

   //document.getElementById("user").innerHTML = data.name;

  }