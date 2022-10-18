/* funzioni */   
function cellsCreation(maxCells, containerEl){
    for (let i = 1; i <= maxCells; i++) {
            //nel ciclo for aggiungo le caselle dentro al container
            const cellMarkup = `<div class="cella">${i}</div>`
            containerEl.innerHTML += cellMarkup;
            
    }
}

function interazione(elencoCasella, arrayBombs) {
    for (let i = 0; i < elencoCasella.length; i++) {
        const casellaAttuale = elencoCasella[i];
        //console.log(casellaAttuale);
        casellaAttuale.addEventListener('click', function(){
            //console.log('ho cliccato sulla casella');

            // prendere il contenuto della cella
            const numeroCella = this.innerText;
            //console.log('contunto cella', numeroCella);

            // verificare se il contenuto esiste nell'array 'bombs'
            for (let i = 0; i < arrayBombs.length; i++) {
                const bomb = arrayBombs[i];
                if (numeroCella == bomb) {
                    // aggiungere la classe .red a quella cella
                    casellaAttuale.classList.add('red');
                    const h2El = document.querySelector('h2').innerHTML=`Hai Perso`;
                    
                }
            }


            casellaAttuale.classList.toggle('azzurro');
            //console.log(this.innerText);
            
    } 
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function generateBombs(min, max) {
    const bombs= [];
    while (bombs.length !== 16) {
        const bomb = generateRandomNumber(min, max);
        if (!bombs.includes(bomb)){
            bombs.push(bomb);
        }
    }
    return bombs;
}

/* ################################################## */ 

const buttonEl = document.querySelector('.btn');
let containerElement = document.querySelector('.container');
buttonEl.addEventListener('click', function(){
    //console.log('ho clicato');
    containerElement.innerHTML = '';
    cellsCreation(100, containerElement);
    const cellsEl = document.querySelectorAll('.cella');
    const bombs = generateBombs(1, 100);
    interazione(cellsEl, bombs);
    console.log(bombs);

})