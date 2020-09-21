let punto1 = document.getElementById("punto1");
let punto2 = document.getElementById("punto2");
let punto3 = document.getElementById("punto3");
const exercise = document.getElementById('exercise');
const answer = document.getElementById('answer');
const header = document.getElementById('header');

punto1.addEventListener('click', () =>{
    let namesList = [];
    let name = prompt('Ingresa un nombre');
    
    while(name != ' '){
        if(namesList.indexOf(name)!=-1){
            alert("No debes repetir nombres");
        }
        else{
            namesList.push(name); 
        }
        name = prompt('Ingresa un nombre');
    }
    exercise.innerText = 'La lista es: ' + namesList;
    header.innerText = 'Tu lista ordenada alfabeticamente es:';
    answer.innerText = '[' + namesList.sort().join(", ") + ']';
});

punto2.addEventListener('click', () =>{
    let frase2 = prompt("Ingrese una palabra o frase: ");
    let invertedPhrase = '';
    let letters = 0;
    
    for(i = frase2.length-1; i >= 0; i--){
        invertedPhrase += frase2[i];
        if(frase2[i] != ' ')
        letters++;
    }
    
    exercise.innerText = 'Tu frase es: ' + frase2;
    header.innerHTML = 'Invertida queda: <p class="font-weight-normal">' + invertedPhrase + '</p>';
    answer.innerText = 'Tiene ' + letters + ' letra(s) y ' + (frase2.length - letters) + ' espacio(s)';
});

punto3.addEventListener('click', () =>{
    let frase3 = prompt("Ingrese una palabra o frase: ");
    let separatedPhrase = '';
    
    for(let i = 0; i < frase3.length; i++){
        if(frase3[i] == ' ')
        separatedPhrase += '--';
        else if((i == frase3.length - 1) || (frase3[i+1] == ' '))
        separatedPhrase += frase3[i];
        else
        separatedPhrase += frase3[i] + '-';
    }
    exercise.innerText = 'Tu frase es: ' + frase3;
    header.innerText = 'Tu frase separada por guiones asi queda:';
    answer.innerText = separatedPhrase;
})
