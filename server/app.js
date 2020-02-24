const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
//app.use(errorhandler);

app.listen(port, console.log(`Server started on port ${port}`));

module.exports = app;