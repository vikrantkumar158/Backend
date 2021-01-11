const express = require('express')
const cors = require('cors')

const configVars = require('./config')

const app = express()
const port = configVars.port
const corsOptions ={
    origin: configVars.allowedIP
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.json({message: 'Hello World'})
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})