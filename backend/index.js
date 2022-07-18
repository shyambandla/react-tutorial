// create express server
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.json());

const {faker}=require('@faker-js/faker');






app.get('/users', (req, res) => {
   
const users=[];

for(let i=0;i<10;i++){
    
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

let jobTitle = faker.name.jobTitle();
let prefix = faker.name.prefix(); 
let suffix = faker.name.suffix();
let jobArea = faker.name.jobArea();

let phone = faker.phone.number();


let user = {
    firstName:firstName,
    lastName:lastName,
    jobTitle:jobTitle,
    prefix:prefix,
    suffix:suffix,
    jobArea:jobArea,
    phone:phone
};

users.push(user);

}

res.send(JSON.stringify(users));

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));