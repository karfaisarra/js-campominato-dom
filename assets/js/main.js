/* funzioni */   
function cellsCreation(maxCells, containerEl){
    for (let i = 1; i <= maxCells; i++) {
            //nel ciclo for aggiungo le caselle dentro al container
            const cellMarkup = `<div class="cella">${i}</div>`
            containerEl.innerHTML += cellMarkup;
    }
}
function interazione(elencoCasella) {
    for (let i = 0; i < elencoCasella.length; i++) {
        const casellaAttuale = elencoCasella[i];
        //console.log(casellaAttuale);
        casellaAttuale.addEventListener('click', function(){
            //console.log('ho cliccato sulla casella');
            casellaAttuale.classList.toggle('azzurro');
            console.log(this);
        })
    } 
}
/* ################################################## */ 

const buttonEl = document.querySelector('.btn');
let containerElement = document.querySelector('.container');
buttonEl.addEventListener('click', function(){
    //console.log('ho clicato');
    containerElement.innerHTML = '';
    cellsCreation(100, containerElement);
    const cellsEl = document.querySelectorAll('.cella');
    interazione(cellsEl);
})
