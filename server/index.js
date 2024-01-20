import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { registerUser } from './routers/auth.routers.js'; 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static("public"))

// // Middleware to log when a request is made to /auth
// app.use("/auth", (req, res, next) => {
//     console.log('Request made to /auth');
//     next(); // Call next to pass control to the next middleware or route handler
//   });

// ROUTES
app.use("/auth", registerUser)

// Mongoose setup
mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_NAME}`)
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is listening on port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(`ERROR: MongoDB connetion error - ${err}`);
})

export { app }
