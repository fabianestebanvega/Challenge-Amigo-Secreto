// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let list = [];


function agregarAmigo() {
    let name = document.getElementById("amigo").value.trim();

    if (name !== "") {
        list.push(name);
        showList();
        document.getElementById("amigo").value = "";
        document.getElementById("error").textContent = "";
    } else {
        document.getElementById("error").textContent = "Agregue algún valor";
    }
}


function showList(){
    let ul = document.getElementById("list");
    ul.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        
        let li = document.createElement("li");
        li.textContent = list[i];
        ul.appendChild(li);
        
    }
}

function sortearAmigo(){
    if(list.length==0){
        document.getElementById("error").textContent ="No se ha agregado ningun amigo";
    }else{
        let indice = Math.floor(Math.random() * list.length);
        let amigoSecreto = list[indice];

        document.getElementById("msj").textContent= "El amigo secreto sorteado es:"+amigoSecreto
    }

}
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo(); // llama a tu función existente
    }
});