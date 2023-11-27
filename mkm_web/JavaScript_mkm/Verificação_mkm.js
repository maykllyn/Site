
//function logar(){

 //   var login = document.getElementById('login').value;
  //  var senha = document.getElementById('senha').value;

   // if(login == "admin" && senha == "admin"){
   //     alert('Sucesso');
   //     location.href = "index.html";
  //  }else{
   //     alert('Usuario ou senha incorretos,');
        
  //  }

//}
let senhaCorreta = "minhasenha";  
let tentativas = 0; 
function verificarLogin() {
    const login = $("#login").val();
    const senha = $("#senha").val();

    if (login === "admin" && senha === "admin") {
        alert("Login bem-sucedido!");
        
        
    } else {
        tentativas++;
        alert("Senha incorreta. Tentativa " + tentativas + " de 3.");

        if (tentativas >= 3) {
            $("#loginButton").hide();
            alert("Você excedeu o número de tentativas.");
        }
    }
}