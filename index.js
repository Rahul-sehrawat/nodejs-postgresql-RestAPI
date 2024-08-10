const express = require('express')

const app = express()
app.use(express.json())

app.use(require('./routes/categoryRoute'))
app.use(require('./routes/productRoute'))

app.listen(3000,()=> console.log('server listening...'))
