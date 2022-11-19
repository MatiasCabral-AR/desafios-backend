import express from 'express'

const app = express()

const PORT = parseInt(process.argv[2] || 8080)
app.get('/' ,(req, res) => {
    res.send(`Server on port ${PORT} - PID ${process.pid} - ${new Date().toLocaleString()}`)
})
app.listen(PORT, error => {
    if(!error){
        console.log(`Server listening on ${PORT} - PID ${process.pid}`)
    }
})


