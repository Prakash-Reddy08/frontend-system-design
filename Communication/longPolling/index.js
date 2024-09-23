import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 4040;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json())
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
let data = 'Initial Data'
const waitingClients = []
app.get("/getData", (req, res) => {
    if (data !== req.query.lastData) {
        res.json({ data })
    } else {
        waitingClients.push(res)
    }
})
app.get("/updateData", (req, res) => {
    data = req.query.newData;
    while (waitingClients.length) {
        const client = waitingClients.pop();
        client.json({ data })
    }
    res.end()
})
app.listen(PORT, () => {
    console.log('server Started on Port %d', PORT)
})