const express = require('express');
const app = express();

app.use(express.json());

app.post('/sort-characters', (req, res) => {
  const { data } = req.body;

  if (typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid input, expected a string.' });
  }
  // Convert string to an array of characters
  let charArray = data.split('');

  // Sort the array alphabetically
  charArray.sort();

  // Return the sorted array as JSON
  res.json({ word: charArray });
});

app.get('/', (req, res) => {
  res.send('Welcome to the character sorter!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
