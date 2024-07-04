//NO LO NECESITAMOS ESTE ARCHIVO

// const submitButton = document.querySelector('#create-button');
// const newFormHandler = async (event) => {
//   event.preventDefault();
//   console.log('hello');

//   const name = document.querySelector('#concert-name').value.trim();
//   const needed_funding = document.querySelector('#concert-funding').value.trim();
//   const description = document.querySelector('#concert-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/concert`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create concert');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/concert/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete concert');
//     }
//   }
// };

// function hello(event){
//   event.preventDefault()
//   console.log('goodbye');
// }
// document
//   .querySelector('.new-concert-form')
//   .addEventListener('submit' , newFormHandler);
// // submitButton.addEventListener('submit', hello);

// document
//   .querySelector('.concert-list')
//   .addEventListener('click', delButtonHandler);
