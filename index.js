const express = require('express');
const routerApi = require('./Router');
const cors = require('cors');
const { LogError, ErrorHandler, BoomError } = require('./Middleware/ErrorHandler');

const app = express();
const port = process.env.PORT || 3000;

//Middleware for create a new product 
app.use(express.json());

const whitelist = ['http://localhost:5000', 'https://myapp.co'];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('no permitido'));
        }
    }
}
app.use(cors(options));

app.get("/", (req, res) => {
    res.send("Hello World!♥!");
});

routerApi(app);

//aqui se pone el error handler para que se ejecute antes de que se ejecute el error handler
app.use(LogError);
app.use(BoomError);
app.use(ErrorHandler);

app.listen(port, () => { console.log(`Example app listening on port ${port}!`) });



// CREATE TABLE Categories (
//     id serial PRIMARY KEY,
//         name varchar(50) NOT NULL,
//         image varchar(255) NOT NULL
//         completed boolean default false

// )
 
// CREATE TABLE Product(
//     id serial PRIMARY KEY,
//     name varchar(50) NOT NULL,
//     description varchar(255) NOT NULL,
//     price numeric(10, 2) NOT NULL,
//     category_id integer NOT NULL,
//     FOREIGN KEY(category_id) REFERENCES Categories(id)
// )

/* CREATE TABLE Users(
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(255) NOT NULL,
    role varchar(50) NOT NULL
) */

