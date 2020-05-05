const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const mockUserData = [
  { name: 'Mark' },
  { name: 'Jill' }
]

app.get('/users', function (req, res) {
  res.json({
    success: true,
    message: 'successfully got users. Nice!',
    users: mockUserData
  })
})

app.get('/users/:id', function (req, res) {
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id
  })
})

// handle POST request at /login
app.post('/login', function (req, res) {
  const username = req.body.username
  const password = req.body.password

  const mockUsername = 'billyTheKid'
  const mockPassword = 'superSecret'

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: 'password and username match',
      token: 'encrypted token goes here'
    })
  } else {
    res.json({
      success: false,
      message: 'password and username do not match'
    })
  }
})

app.post('/pay', function (req, res) {
  if (req.body.amount < 40) {
    return res.json({
      message: 'Payment failed',
      reason: 'You owe more than $40'
    })
  }

  res.json({
    message: 'Thank you for your payment',
    receipt: '0455678'
  })
})

app.listen(8000, function () {
  console.log('server is running')
})
