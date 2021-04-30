var control = 0;

function abrirCartao(){
    let el = document.getElementById("card");
    if(control == 0){
        el.style.visibility = "visible";
        control = 1;
    }else{
        el.style.visibility = "hidden";
        control = 0;
    }


}