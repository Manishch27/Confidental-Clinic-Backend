import dotenv from "dotenv";
dotenv.config();
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import formsRouter from "./routes/forms.router.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Configure CORS

app.use(cors({
    origin: 'http://localhost:3001',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}));


app.get("/", (req, res)=> res.send("Hello!"));

app.use('/api/v1/form', formsRouter);


app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})