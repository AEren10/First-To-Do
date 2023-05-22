const username = document.querySelector("#username");
const listgrup = document.querySelector("#userList")
const gonder = document.querySelector("#submit");
const firstsection = document.querySelectorAll(".col-sm-8 offset-sm-2")[0];
const secondsection = document.querySelectorAll(".col-sm-8 offset-sm-2")[1];
const reset = document.querySelector("#reset");


gonder.addEventListener("click",check);
listgrup.addEventListener("click",deletetodo);
reset.addEventListener("click",deletealltodo);


function check(a){

    if(username.value == ""){
       
    }
    else{
        addtodo(username);
        alert("succsess","öalşsödşflsadö");
    }
    
    a.preventDefault();   
}

function deletetodo(e){

    if(e.target.className = "fa-solid fa-xmark"){
        e.target.parentElement.remove();
    }

}

function deletealltodo(){

    if(confirm("Tamamen silmek istediğinizden emin misiniz?")){
    listgrup.innerHTML =  ''}

}

function addtodo(username){


    let newLİ = document.createElement("li");
    newLİ.className = "list-group-item d-flex justify-content-between align-items-center";
    newLİ.textContent = username.value;
    listgrup.appendChild(newLİ);

    let newitem = document.createElement("i");
    newitem.className = "fa-solid fa-xmark";
    newLİ.appendChild(newitem);
    

    username.value = "";
    
    
}

function alert(type,message){

    const newdiw = document.createElement("div");
    newdiw.className = `alert alert-${type}`;
    newdiw.textContent = message;
    
    firstsection.appendChild[0](newdiw);

   

   
}