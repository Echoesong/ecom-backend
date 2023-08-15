require("dotenv").config();
require('./config/db.connection.js');
const express = require('express');
const itemsRouter = require('./routes/itemsRouter.js')
const {PORT} = process.env
const cors = require("cors");
const morgan = require("morgan")
const app = express();


// MIDDLEWARE //
app.use(express.urlencoded({extended:true}))
app.use(express.json()); // parse json bodies
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/items', itemsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
