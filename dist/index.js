"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('module-alias/register');
const person_1 = require("@controllers/person");
const express = require("express");
let app = express();
let port = 3000;
app.get('/', (req, res) => {
    let person = new person_1.PersonController("Marlon Conrado González");
    return res.send(`Bienvendido ${person.getName()}`);
});
app.listen(port, () => {
    console.log(`Running in port ${port}`);
});
