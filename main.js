const express = require('express')
const app = express()

let ejs = require('ejs')
const port = 3000

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');




app.get('/:message/:name', (req, res) => {
  let message=req.params.message
  let name=req.params.name

  console.log(`Received message: ${message}, name: ${name}`);  // Log incoming data


    res.render("index",{message:message,name:name});
     

  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})