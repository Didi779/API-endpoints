const express = require('express');
const app = express();

// Parse JSON data
app.use(express.json());

// Create a GET endpoint for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

// Create a POST endpoint
app.post('/api/endpoint', (req, res) => {
  try {
    // Extract the string data from the request body
    const { data } = req.body;

    if (!data || typeof data !== 'string') {
      throw new Error('Invalid or missing data in request body');
    }

    // Convert the string into an array of characters
    const charArray = data.split('');

    // Return the array as a word in JSON format
    res.json({ word: charArray.join('') });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
