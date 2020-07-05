const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routers/index');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api', route); // app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, () => console.log(`express is running on ${port}`));
