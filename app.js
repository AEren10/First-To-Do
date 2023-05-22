const username = document.querySelector("#username");
const listgrup = document.querySelector("#userList")
const gonder = document.querySelector("#submit");
const firstsection = document.querySelector("#first");
const reset = document.querySelector("#reset");


gonder.addEventListener("click",check);
listgrup.addEventListener("click",deletetodo);
reset.addEventListener("click",deletealltodo);


function check(a){
    
    
    if(username.value == ""){
        show("danger","Lütfen Bir To-Do Giriniz")
    }
    else{
        addtodo(username);  
        show("success","To-Do Başarıyla Eklendi")
        
    }
    
    a.preventDefault();
}

function deletetodo(e){

    if(e.target.className = "fa-solid fa-xmark"){
        e.target.parentElement.remove();
        show("primary","To-Do  Silindi")
    }

}

function deletealltodo(){

    if(confirm("Tamamen silmek istediğinizden emin misiniz?")){
    listgrup.innerHTML =  ''
    show("warning","Tüm To-Do Listesi Silindi")
    }

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

function show(type,message){
    
    const newdiw = document.createElement("div");
    newdiw.className = `alert alert-${type}`;
    newdiw.textContent = message;
    
    firstsection.appendChild(newdiw);

   setTimeout(function(){
    newdiw.remove();
   },1000);

   
}