const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const routers = require('./routers')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use((req, res, next) => {
  req.app.set('layout', 'layouts/default')
  next()
})

app.get('/', (req, res) => res.render('index'))
app.use('/login/', routers.login)
// app.use('/product/', routers.product)
// app.use('/order/', routers.order)
// app.use('/shop/', routers.shop)
// app.use('/ticket/', routers.ticket)
// app.use('/address', routers.address)

const port = 4000
app.listen(port, () => { console.log(`localhost:${port} is running...`) })