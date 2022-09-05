const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');



inputEl.checked = JSON.parse(localStorage.getItem("node"));
updateBody();


function updateBody(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "black";
    }
    else{
        bodyEl.style.backgroundColor = "white";
    }
}

inputEl.addEventListener("input", ()=>{
    updateBody();
    updateLocalStorage();
}
)

function updateLocalStorage(){
    localStorage.setItem("node", JSON.stringify(inputEl.checked));
}