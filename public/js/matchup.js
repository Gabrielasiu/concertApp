

// const voteButtons = document.querySelectorAll('.votes');
// const incrementVotesB = document.querySelector('#votes-b');
// //const numberOfVotes = document.querySelector('.numberOfVotes');
// //const numberOfVotesB = document.querySelector('.numberOfVotes');
// //const voteButtons = document.querySelectorAll('#votes-a');
// let votesCount = document.querySelectorAll('.votes-count');
// let count = 0


// function submitVote(event) {
//     console.log(event.target.id)
//     // votesCount.textContent = count++
//     // return count++


// }
// voteButtons.forEach(button => {
//     button.addEventListener("click", submitVote)
// })




document.addEventListener('DOMContentLoaded', () => {
    const voteButtons = document.querySelectorAll('.votes');
    voteButtons.forEach(button => {
      button.addEventListener('click', async (event) => {
        const button = event.target;
        const matchupId = button.dataset.matchup;
        const artistA = button.dataset.artistA;
        const artistB = button.dataset.artistB;
        const voteType = button.id.split('-')[1]; // 'a' o 'b'
        let artist;
        if (voteType === 'a') {
          artist = artistA;
        } else {
          artist = artistB;
        }
        try {
          const response = await fetch('/api/matchup/matchup', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ matchupId, voteType }),
          });
          if (!response.ok) {
            throw new Error('Error al actualizar los votos');
          }
          // Actualizar el conteo de votos en el DOM
          const voteCountElement = button.previousElementSibling.querySelector('.votes-count');
          let currentVotes = parseInt(voteCountElement.textContent, 10);
          voteCountElement.textContent = currentVotes + 1;
        } catch (error) {
          console.error('Error:', error);
        }
      });
    });
  });