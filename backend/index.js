const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();
const app = express();
const port = 5000;

<<<<<<< HEAD
app.use(cors())
app.use(express.json())
=======
app.use(cors({
  origin: '*',
}));
app.use(express.json());
>>>>>>> f1186bb28fb92ca2db7dc418c6825a1d5af916fb

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})