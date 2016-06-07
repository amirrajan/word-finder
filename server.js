import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import { search } from './lib/words';

const app = express();

const dictionary = JSON.parse(
  fs.readFileSync('./lib/dictionary.json')
).dictionary;

app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use('/public', express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', { pattern: null });
});

app.post('/search', function (req, res) {
  res.render('result', {
    words: search(req.body.pattern, dictionary).result,
    pattern: req.body.pattern
  });
});

app.listen(process.env.PORT || 3000);

console.log('Listening on port: ' + (process.env.PORT || 3000));
