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
app.get("/getData", (req, res) => {
    res.send({
        data
    })
})
app.get("/updateData", (req, res) => {
    data = "Updated Data"
    res.send({
        data
    })
})
app.listen(PORT, () => {
    console.log('server Started on Port %d', PORT)
})