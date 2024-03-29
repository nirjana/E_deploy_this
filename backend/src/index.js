import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
import router from "./routes.js";
// import {connectDatabase} from "./database/connection.js"
import errorHandler from './middleware/errorHandler.js';

const app = express()

dotenv.config();
// dotenv.config({path : 'Library/Library_management_System/backend/.env'});
console.log(process.env.PORT)
app.use(cors());
app.use(bodyParser.json());

app.use(router)
app.use(errorHandler);
// connectDatabase()

// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${process.env.PORT}`)
// })
app.listen(8000, () => {
    console.log(`Example app listening on port 8000`)
})