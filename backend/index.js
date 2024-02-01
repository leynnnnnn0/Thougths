import express from "express";
const app = express();
import { PORT_NUMBER, DATA_BASE_URL } from "./configuration/config.js";
import connectionDB from "./connection/connectionDB.js";
import route from "./routes/thougtsRoute.js";

app.use(express.json());

app.use("/", route)

connectionDB(DATA_BASE_URL);

app.listen(PORT_NUMBER, () => {
    console.log("Very nice")
})

