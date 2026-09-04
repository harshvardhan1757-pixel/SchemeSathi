const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Serve static files from "public"
app.use(express.static(path.resolve(__dirname, 'public')));

// Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Chat API route
app.post('/chat', (req, res) => {
  const { question } = req.body;
  res.json({ answer: `You asked: ${question}. This is a placeholder response.` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Serving index.html from:', path.resolve(__dirname, 'public', 'index.html'));
});
