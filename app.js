import express from 'express';
import Post from './models/Post.js';
import mongoose from 'mongoose';

const app = express();
//connect to mongodb
mongoose.connect(
  'mongodb+srv://ogulcan:12qwaszx@database.xjxvdni.mongodb.net/cleanblogdb?retryWrites=true&w=majority',
);

//template engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', { posts });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/post', (req, res) => {
  res.render('post');
});
app.get('/add-post', (req, res) => {
  res.render('add_post');
});

app.post('/take-post', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
