const connectToMongo = require('./db');
const express = require('express');
const app = express();
var cors = require('cors')

connectToMongo();
const port = 5000;

app.use(cors());
app.use(express.json());

//Available routes
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/notes'));

app.listen(port, () => {
    console.log(`Server is started at http://localhost:${port}`)
})
