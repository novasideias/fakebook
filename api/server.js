const express = require('express')
const cors = require('cors')
const app = express()
const root = require('./routers/root')

app.use(express.json())
app.use(cors())

root(app)


const port = process.env.PORT || 3003
app.listen(port, () => console.log(`Listening on port ${port}`))