//cuando seleccionemos los conciertos de la galeris (<3)
//se van a ir al seeds y de ahi se van a ir conectando 
//con el matchup handlebars


const heartButton = document.querySelectorAll('.wishlist');
const spanOption = document.querySelector('#option');
let selectedCounter = 0
const matchupBtn = document.getElementById('newMatchButton');
const matchupBody = {
    user_id: localStorage.getItem("userId"),
    votesA: 0,
    votesB: 0
}

heartButton.forEach(button => {
    button.addEventListener('click', async (event) => {
        console.log("click", button.id)
        console.log(spanOption);
        console.log(button.dataset.isselected)

        if (button.dataset.isselected === "false") {
            if (selectedCounter < 2) {
                button.style.color = "red"
                button.dataset.isselected = "true"
                selectedCounter++
                spanOption.textContent = Number(spanOption.textContent) - 1
                if (selectedCounter === 1) {
                    matchupBody.artistA = button.dataset.artist
                    matchupBody.imageA = button.dataset.image
                    console.log(matchupBody);
                }
                if (selectedCounter === 2) {
                    matchupBody.artistB = button.dataset.artist
                   matchupBody.imageB = button.dataset.image
                }
                //hhacer eso para imagenes
                //seguir la logica de esta 
                //agregar en modelo imagen a imagen bv y en handle bars

            }
        } else {
            button.style.color = "white"
            button.dataset.isselected = "false"
            selectedCounter--;
            spanOption.textContent = Number(spanOption.textContent) + 1
        }
        if (selectedCounter === 2) {
            matchupBtn.style.display = "block"
        } else {
            matchupBtn.style.display = "none"

        }
    });
});


matchupBtn.addEventListener('click', async (event) => {
    const response = await fetch('/api/matchup', {
        method: 'POST',
        body: JSON.stringify(matchupBody), //siempre se manda un objeto. El matchup body ya es una constante que es un objeto 
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/matchup');
    } else {
        alert(response.statusText);
    }

    console.log(matchupBody);
});