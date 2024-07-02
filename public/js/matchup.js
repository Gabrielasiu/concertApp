

const voteButtons = document.querySelectorAll('.votes');
const incrementVotesB = document.querySelector('#votes-b');
//const numberOfVotes = document.querySelector('.numberOfVotes');
//const numberOfVotesB = document.querySelector('.numberOfVotes');
//const voteButtons = document.querySelectorAll('#votes-a');
let votesCount = document.querySelectorAll('.votes-count');
let count = 0


function submitVote(event) {
    console.log(event.target.id)
    // votesCount.textContent = count++
    // return count++


}
voteButtons.forEach(button => {
    button.addEventListener("click", submitVote)
})




