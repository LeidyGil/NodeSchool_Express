const express = require('express');
const app = express(); //app contiene la ejecución de express
app.use(express.static(process.argv[3]))
app.listen(process.argv[2]);