const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 for development

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// An example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

