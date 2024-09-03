import api from './api';

// Call the API request function
api.getCharacterSorter('didimalangphele@gmail.com')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
