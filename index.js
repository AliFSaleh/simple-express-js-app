const express = require('express');
require('dotenv').config()

const port = process.env.PORT
const app = express()

const mongoose = require('mongoose');
const httpStatusText = require('./utils/HttpRequestText')
const cors = require('cors')

const url = process.env.MONGO_URL;

mongoose.connect(url).then(
    console.log('mongo connect')
)

const coursesRouter = require('./routes/courses.route');
const usersRouter = require('./routes/users.route');

app.use(cors());
app.use(express.json());

app.use('/api/courses', coursesRouter);
app.use('/api/users', usersRouter);

app.all('*', (req, res, next)=>{
    return res.status(404).json({status:httpStatusText.ERROR, message:"this resource is not defined"})
})


app.listen(port, ()=>{
    console.log(`you are listening on port: ${port}`);
})