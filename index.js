const express = require('express')
const app = express()
const port = 5000

// working under process 

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/society',(req,res)=>{
    console.log("in society");
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


