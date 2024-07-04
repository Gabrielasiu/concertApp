//cuando seleccionemos los conciertos de la galeris (<3)
//se van a ir al seeds y de ahi se van a ir conectando 
//con el matchup handlebars


const heartButton = document.querySelectorAll('.wishlist');
const spanOption = document.querySelector('#option');
let selectedCounter = 0
const matchupBtn = document.getElementById('newMatchButton');

heartButton.forEach(button => {
    button.addEventListener('click', async (event) => {
        console.log("click", button.id)
        console.log(spanOption);
        console.log(button.dataset.isselected)

        if (button.dataset.isselected === "false") {
            if (selectedCounter < 2) {
                button.style.color = "black"
                button.dataset.isselected = "true"
                selectedCounter++
                spanOption.textContent = Number(spanOption.textContent) - 1
            }
        } else {
            button.style.color = "white"
            button.dataset.isselected = "false"
            selectedCounter--;
            spanOption.textContent = Number(spanOption.textContent) + 1
        }
        if (selectedCounter === 2) {
            console.log(matchupBtn)
            matchupBtn.style.display = "block"
        } else {
            matchupBtn.style.display = "none"

        }
    });
});


