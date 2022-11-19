import cluster from 'node:cluster';
import {cpus} from 'os'
import express from 'express'

const app = express()
const num = cpus().length

if(cluster.isPrimary){
    console.log(`PID Master ${process.pid}`)
    for(let i = 0; i < num; i++){
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`)
        cluster.fork()
    })
}else{
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
}



