require('dotenv').config();
const express = require('express');
const cors = require('cors');

const url = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';

const apiRoutes = require('./routes/api');
const mongoConnect = require('./db/mongoConnect');

const app = express();

mongoConnect();
app.use(express.json());
app.use(cors());

app.use('/', apiRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});

//////////////////////
