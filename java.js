const c = document.querySelectorAll(".caracteristica");
const p = document.querySelectorAll(".dot");

function setActive(i){
    for(x of c)
    x.classList.remove('active');
    c[i].classList.add('active');


    for(d of p)
    d.classList.remove('active');
    p[i].classList.add('active');


}

for(let j=0; j<p.length; j++){
    p[j].addEventListener('click', function(){
        setActive(j);
    });

}

const menuhamb = document.querySelector('.hamburgueja');
const nav = document.querySelector('.navbar');
menuhamb.onclick = function(){
    menuhamb.classList.toggle('active');
    nav.classList.toggle('active');
}





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

//validacion de nombre//
function validateUsername(username) {
  var regex = /^[a-z][a-z0-9_]{4,20}$/gi;
  return regex.test(username);
}
