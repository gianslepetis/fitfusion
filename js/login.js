// function login(){
//     var user = document.getElementById("username").value;
//     var passw = document.getElementById("password").value;
//     var remember = document.getElementById("remember-me").checked;
    
//     if(remember){
//         console.log(remember)
//     }else{
//         console.log(remember)
//     }

//     if(user && passw){
//         if(user == localStorage.getItem("usuario") 
//         && passw == localStorage.getItem("contraseña") || 
//         user == "usuario" 
//         && passw == "contraseña"){
//             if(remember){
//                 console.log(remember)
//             }
//             alert("Bienvenido " + user);
//             window.location="perfil.html"
//         }else{
//             alert("Datos incorrectos")
//             console.log("Usuario: " + user + " Contraseña: " + passw)
//         }
//     }else{
//         alert("Ingrese usuario y contraseña!")
//     } 
// }
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  login(username, password);
});

function login(username, password) {
    // Obtener datos de usuarios del localStorage
    let userData = JSON.parse(localStorage.getItem('myData'));

    // Comprobar si el usuario y la contraseña son correctos
    let userFound = false;
    for (let i = 0; i < userData.length; i++) {
      if (userData[i].data.nombre === username && userData[i].data.pass === password) {
        var logedUser = userData[i].data.nombre;
        var logedUserAge = userData[i].data.edad;
        var logedUserLocation = userData[i].data.ubicacion;
        localStorage.setItem("nombre", logedUser),
        localStorage.setItem("edad", logedUserAge),
        localStorage.setItem("ubicacion", logedUserLocation),
        localStorage.setItem("sesion_iniciada", 1)

        userFound = true;
        break;
      }
    }
  
    if (userFound) {

      alert('Bienvenido ' + username + '! Has iniciado sesión correctamente');
      window.location.href = 'perfil.html';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
  
