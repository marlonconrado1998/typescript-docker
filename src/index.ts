require('module-alias/register');
import { PersonController as Person } from '@controllers/person';
import * as express from 'express';


let app = express();
let port = 3000;

app.get('/', (req, res) => {
    let person = new Person("Marlon Conrado González");
    return res.send(`Bienvendido ${person.getName()}`);
});

app.listen(port, () => {
    console.log(`Running in port ${port}`);
});