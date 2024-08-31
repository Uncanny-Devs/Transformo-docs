import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { uploadController } from './controllers/upload.controller.js';
import { searchController } from './controllers/search.controller.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.post('/upload', uploadController);

app.post('/search', searchController);

app.listen(3000, () => {
  console.log('Server up 🚀 and running on http://localhost:3000');
});