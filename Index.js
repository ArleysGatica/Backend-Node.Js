const express = require('express');
const routerApi = require('./Router');
const app = express();
const port = 3000;

//Middleware for create a new product 
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

routerApi(app);

app.listen(port, () => { console.log(`Example app listening on port ${port}!`) });

