import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/config.js';

// config env
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

//database connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json())

//import routes
import userRoutes from './routes/userRoutes.js';

app.use('/api/user',userRoutes);

app.get('/',(req,res)=>{
    res.send('TastyBites Server is Running.!!');
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

