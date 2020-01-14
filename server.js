const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');

// console.log(path.join(__dirname, './public'))

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));


app.get('/', (req, res) => {
  res.status(200);
  res.write('hi');
  res.end()
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))