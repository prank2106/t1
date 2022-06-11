const tools = require("../tools/tools")
const path = require("path");

const dtoIn = {
  classroom: [
    {"gender":"male","birthdate":"1974-11-18T23:00:00.000Z","name":"Aleš","surname":"Bartoš"},{"gender":"male","birthdate":"1991-08-09T22:00:00.000Z","name":"Tomáš","surname":"Šimek"},{"gender":"female","birthdate":"1977-09-12T23:00:00.000Z","name":"Věra","surname":"Procházková"},{"gender":"male","birthdate":"1990-06-24T22:00:00.000Z","name":"Miloslav","surname":"Jelínek"},{"gender":"female","birthdate":"1978-01-22T23:00:00.000Z","name":"Anna","surname":"Křížová"},{"gender":"male","birthdate":"1987-01-09T23:00:00.000Z","name":"Roman","surname":"Růžička"},{"gender":"female","birthdate":"1999-05-19T22:00:00.000Z","name":"Veronika","surname":"Poláková"},{"gender":"female","birthdate":"1991-08-16T22:00:00.000Z","name":"Michaela","surname":"Růžičková"},{"gender":"female","birthdate":"1972-06-12T23:00:00.000Z","name":"Růžena","surname":"Fialová"},{"gender":"male","birthdate":"1973-04-22T23:00:00.000Z","name":"Štěpán","surname":"Doležal"}]
};

async function runFile(file) {
  const dtoOut = await tools.runFile(path.resolve(__dirname, file), dtoIn);
  console.log(JSON.stringify(dtoOut, null, 1));
}

runFile("task.js");
