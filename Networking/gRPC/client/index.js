import express from 'express'
import client from './client.js';

const PORT = 4040

const app = express();
app.use(express.json())

// TODO to expose rest call
// which internally calls gRPC server functions using gRPCClient


app.get('/', (req, res) => {
    client.getAll(null, (err, data) => {
        if (!err) {
            res.status(200).json(data.customers)
        } else {
            console.log(err)
        }
    })
})


app.listen(PORT, () => {
    console.log("App Started on PORT: %d", PORT)
})