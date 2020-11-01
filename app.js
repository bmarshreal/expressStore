const express = require('express')

const app = express()

app.use('/home', (req, res, next) => {
  res.send('<h1>Welcome to the Home Page!</h1>')
})

app.use('/users', (req, res, next) => {
  res.send('<h1>Hello Users!</h1>')
})

app.listen(3000)
