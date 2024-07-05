document.addEventListener('DOMContentLoaded', () => {
  const voteButtons = document.querySelectorAll('.votes');
  // Create an object to store the votes made by the user
  const userVotes = {};

  voteButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      const button = event.target.closest('.votes'); // Ensure the correct element is targeted
      const matchupId = button.dataset.matchup;
      const voteType = button.id.split('-')[1]; // 'a' or 'b'

      // Check if the user has already voted in this matchup
      if (userVotes[matchupId]) {
        alert('You have already voted in this matchup.');
        return;
      }

      // Ask for confirmation before proceeding
      const confirmed = confirm('Are you sure you want to vote for this artist?');
      if (!confirmed) {
        return; // Exit if the user cancels
      }

      try {
        // Send the PUT request to the server to update the votes
        const response = await fetch('/api/matchup/matchup', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ matchupId, voteType }),
        });

        if (!response.ok) {
          throw new Error('Error updating votes');
        }

        // Mark that the user has voted in this matchup
        userVotes[matchupId] = true;

        // Update the vote count in the DOM
        let voteCountElement;
        if (voteType === 'a') {
          voteCountElement = button.closest('.info-matchup').querySelector('.total-votes');
        } else {
          voteCountElement = button.closest('.info-matchup').querySelector('.total-votes');
        }

        let currentVotes = parseInt(voteCountElement.textContent, 10);
        voteCountElement.textContent = currentVotes + 1;

      } catch (error) {
        console.error('Error:', error);
      }
    });
  });
});
