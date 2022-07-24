const express = require('express');
const routerApi = require('./Router');
const { LogError, ErrorHandler, BoomError } = require('./Middleware/ErrorHandler');
const app = express();
const port = 3000;

//Middleware for create a new product 
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

routerApi(app);

//aqui se pone el error handler para que se ejecute antes de que se ejecute el error handler
app.use(LogError);
app.use(BoomError);
app.use(ErrorHandler);

app.listen(port, () => { console.log(`Example app listening on port ${port}!`) });

