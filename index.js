const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/eve', (request,response) =>{
    response.sendFile('eve.html', {root: path.join(__dirname)})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//http methods
//GET - (is for reading a resource)
//POST - (is for creating a resource)
//PUT - (is for updating all resource details)
//PATCH - (is for updating a part or all resource details)
//DELETE - (is for deleting a resource)

