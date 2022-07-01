require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

/*Middleware*/
app.use(cors());
app.use(express.json());


/*Routes*/  
const authRoute = require('./routes/authRoute');

app.use('/auth', authRoute);

app.listen(PORT, () => {
    console.log("Server is running at localhost:8080")
});