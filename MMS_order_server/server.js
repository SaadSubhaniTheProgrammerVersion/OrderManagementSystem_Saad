const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
var cartController = require('./Controllers/cart.js')
var orderController = require('./Controllers/order.js')
var cors = require('cors')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'))


app.use(cors()) // Use this after the variable declaration


app.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});

app.use('/cart', cartController)
app.use('/order', orderController)