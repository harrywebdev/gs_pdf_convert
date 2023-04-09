const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Define a route that accepts a multipart form data POST request
app.post('/upload', upload.single('file'), (req, res) => {
  // Handle the uploaded file here
  console.log(req.file);
  res.send('File uploaded successfully');
});

// Start the server
app.listen(80, () => {
  console.log('Server started on port 80');
});
