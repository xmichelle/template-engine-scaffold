const express = require('express');
const app = express();
const path = require('path');
const port = 3300;


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Howdy',
    message: 'Hiya world!',
    fruits: [
      'watermelon',
      'papaya',
      'orange'
    ]
  });
})

app.listen(port, () => {console.log(`We are listening to port ${port}.`)});