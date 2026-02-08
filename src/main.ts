import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import { env } from "./env.js";
import admin from "./routes/admin.js"

const app = express();
const server = createServer(app);

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use("/admin", admin)

app.get('/', (req, res) => {
    res.send('root route');
});

server.listen(env.SERVER_PORT, () => {
    console.log('server on');
})