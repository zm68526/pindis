
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const cors = require('cors');


// Connect Database
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('Hello World!'));


const conn_str = 'mongodb+srv://pindis:webwizards@cluster0.qh4iqx1.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {
    useUnifiedTopology : true,
    useNewUrlParser : true
})
.then(() => {
    app.listen(port);
    console.log('MongoDB Connection Suceeded...');
})
.catch(err => {
    console.log('Error in DB Connection ${err}');
});

app.get('/home', (req, res) => res.send("hello from home"));

