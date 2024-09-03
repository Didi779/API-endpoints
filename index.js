// Import required modules
const express = require('express');
const app = express();

// Parse JSON data
app.use(express.json());

// Create a POST endpoint
app.post('/api/endpoint', (req, res) => {
  // Extract the string data from the request body
  const { data } = req.body;

  // Convert the string into an array of characters
  const charArray = data.split('');

  // Sort the array alphabetically
  charArray.sort();

  // Return the sorted array as a word in JSON format
  res.json({ word: charArray });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
