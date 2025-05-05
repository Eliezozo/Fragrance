let BIENVENUE = document.querySelector('span')
let score =0;
BIENVENUE.addEventListener("click", ()=>{
    let nom = prompt("Entrez votre nom !!😎") 
    score =1;

    if(score = 1){
        BIENVENUE.textContent = nom;
    }
})