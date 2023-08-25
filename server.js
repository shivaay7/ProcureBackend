import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js ';
import authRoutes from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

//configure env
dotenv.config(); 

//config DB
connectDB();

//rest object
const app = express();

//middlewares

app.use(cors({
  origin: 'https://procurefrontend.onrender.com'
}));
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://procurefrontend.onrender.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//routes
app.use('/api/v1/auth', authRoutes)
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);


//rest api
app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials","true")
    res.send("<h1>Welcome to My Ecommerce App</h1>")
})


//port 
const PORT = process.env.PORT;

//run listen 
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})
