// Import required modules
const express = require('express');
const app = express();

// Parse JSON data
app.use(express.json());

// Create a welcome route
app.get('/', (req, res) => {
  try {
    res.send('Welcome to Character Sorter');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Create a POST endpoint
app.post('/api/endpoint', (req, res) => {
  try {
    // Get the string data from the request body
    const { data } = req.body;

    // Convert the string into an array of characters
    const charArray = data.split('');

    // Sort the array alphabetically
    charArray.sort();

    // Return the sorted array as a word in JSON format
    res.json({ word: charArray });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Export the app as a module
module.exports = app;
