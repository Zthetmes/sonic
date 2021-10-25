const menuhamb = document.querySelector('.hamburgueja');
const nav = document.querySelector('.nbar');
menuhamb.onclick = function(){
    menuhamb.classList.toggle('active');
    nav.classList.toggle('active');
}

var nameValid = false
var emailValid = false
var telValid = false
var comValid = false

const nameRegExp  = new RegExp( /^[a-zA-ZÀ-ÿ\s]{1,40}$/ )
const emailRegExp = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
const telRegExp = new RegExp(/^\d{8,14}$/)

const inputs = document.querySelectorAll(".input")

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");

}
function blurFunc(){
  let parent = this.parentNode;
  if (this.value ==""){
  parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



function limpiarName(){
  errorName.innerHTML ="";
}
function limpiarEmail(){
  errorEmail.innerHTML ="";
}
function limpiarTel(){
  errorTel.innerHTML ="";
}
function limpiarCom(){
  errorCom.innerHTML ="";
}


  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
  document.getElementById("name").addEventListener("focus", limpiarName);
  document.getElementById("email").addEventListener("focus", limpiarEmail);
  document.getElementById("tel").addEventListener("focus", limpiarTel);
  document.getElementById("comentarios").addEventListener("focus", limpiarCom);
});



function validarFormulario(evento) {
  evento.preventDefault();

  valUno();
  valDos();
  valTres();
  valCuatro();
  var msgenvio = document.getElementById("envioExitoso");
  if(nameValid & emailValid & telValid & comValid){
    msgenvio.innerHTML = "Envio exitoso. Gracias por contactarnos.";
    funcion_reiniciar();
  }
}

 function valUno(){
  var usuario = document.getElementById('name').value;
  var errorName = document.getElementById("errorName");

  document.getElementById("errorName").innerHTML = "";
  if(usuario.length == "") {

    errorName.innerHTML = "Escriba su nombre";
    return;
  }
  if(nameRegExp.test(usuario) == false){
    errorName.innerHTML = "Este campo solo puede contener letras";

  }
  else{
    nameValid = true;
    console.log('Esta todo mas que bien hasta aca')
  }
 }
  /*email*/
  function valDos(){
  var email = document.getElementById('email').value;
  var errorEmail = document.getElementById("errorEmail");
  document.getElementById("errorEmail").innerHTML = "";
  if(email.length == "") {

    errorEmail.innerHTML = "Escriba su email";
    return;
    }
  if(emailRegExp.test(email) == false){
    errorEmail.innerHTML = "Escriba un email valido";

  }
  else{
    emailValid = true;
    console.log('Esta todo mas que bien hasta aca el email')
  }
  }
  /*tel*/
  function valTres(){
   var telefono = document.getElementById('tel').value;
   var errorTel = document.getElementById("errorTel");
  document.getElementById("errorTel").innerHTML = "";
  if(telefono.length < 8) {

    errorTel.innerHTML = "Escriba su teléfono de 8 dígitos o más";
    return;
    }
  if(telRegExp.test(telefono) == false){
    errorTel.innerHTML = "Este campo solo puede contener números";

  }
  else{
    telValid = true;
    console.log('Esta todo mas que bien hasta aca el tel')
  }
  }
  function valCuatro(){
    var comentarios = document.getElementById('comentarios').value;
    var errorCom = document.getElementById("errorCom");
   document.getElementById("errorCom").innerHTML = "";
   if(comentarios.length == "") {

     errorCom.innerHTML = "Escriba un comentario";
     return;
     }

   else{
     comValid = true;
     console.log('todo valido')
   }
   }
   function funcion_reiniciar(){
    document.getElementById("formulario").reset();
    }
