const express = require('express');
const app = express();

const dotenv = require('dotenv'); 
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 7000;

//Import Routes
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');
const orderRouter = require('./routes/orderRoute');
const uploadRouter = require('./routes/uploadRoute.js');


dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongodbUrl = config.MONGODB_URL;

//connect to database
mongoose.connect( mongodbUrl, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true 
}, () => {console.log("Connected to DB");});

app.use(bodyParser.json());

//Routes middleware
app.use('/api/uploads', uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
  });

 __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.listen(port, () => {
    console.log(`Server started at  http://localhost:${port}...`);
});