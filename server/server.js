import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/config.js';
import session from 'express-session'

// config env
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

//database connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'));

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        httpOnly:true,
        maxAge:1000*60*60*24 // 1 day
    }
}));


//import routes
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js'

app.use('/api/user',userRoutes);
app.use('/api/product',productRoutes);

app.get('/',(req,res)=>{
    res.send('TastyBites Server is Running.!!');
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

