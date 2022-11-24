function handleCredentialResponse(response) {
   const data = jwt_decode(response.credential)
   console.log(data)
  
   console.log(data.name)
   window.location.href = "/index.html";

   //document.getElementById("user").innerHTML = data.name;

  }