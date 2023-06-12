const express = require('express')


const port = 3001

const app =  express()

app.post('/review/new', (request, response) => {
    const ip=request.ip
    return response.status(201).json({message:"Create successful", ip})
})


app.listen(port, ()=>{
    console.log("Great review");
})