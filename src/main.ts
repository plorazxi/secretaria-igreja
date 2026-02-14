import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import swaggerUI from "swagger-ui-express";
import { generateOpenApiDocs } from "./lib/openApiGenerator.js";
import { env } from "./lib/env.js";
import admin from "./routes/admin.js";
import users from "./routes/users.js";

import "./docs/admin.docs.js";
import "./docs/users.docs.js";

const app = express();
const server = createServer(app);
const swaggerDocs = generateOpenApiDocs();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use("/admin", admin);

app.use("/users", users);

app.get('/', (req, res) => {
    res.send('root route');
});

server.listen(env.SERVER_PORT, () => {
    console.log('server on');
})