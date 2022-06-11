//@@viewOff:const
const data = {
    "classroom": [
        {"gender":"female","birthdate":"1978-12-03T23:00:00.000Z","name":"Jitka","surname":"Němcová"},
        {"gender":"female","birthdate":"1999-01-13T23:00:00.000Z","name":"Jitka","surname":"Blažková"},
        {"gender":"male","birthdate":"1982-01-13T23:00:00.000Z","name":"David","surname":"Kolář"},
        {"gender":"male","birthdate":"1980-08-02T22:00:00.000Z","name":"Marek","surname":"Zeman"},
        {"gender":"female","birthdate":"1995-05-27T22:00:00.000Z","name":"Marcela","surname":"Doležalová"}
    ]
};
//@@viewOff:const

//@@viewOn:helpers

function generateHistogram(ageArr) {
    let result = {};

    for (let i = 0; i < ageArr.length; i++) {
        res
    }

    return result;
}

function generateData() {

    let ageBirthDayArr = data.classroom.map(each => new Date(each.birthdate));
    let genderArr = data.classroom.map(each => each.gender);
    let ageArr = data.classroom.map(each => {
        let age = getAge(each.birthdate);
        return {...each, age};
    });

    let histogram = generateHistogram(ageArr);


    for (let i = 0; i < data.classroom.length; i++) {

    }
}

function getAge(birthdate) {

    let today = new Date();
    let birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return Number(age);
}

//@@viewOff:helpers



//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {object} output data
**/
function main(dtoIn={}) {

    generateData();
}
//@@viewOff:main
generateData();
/*
* {
 "histogram": {
  "22": {"male": 0,"female": 1},
  "25": {"male": 0,"female": 1},
  "39": {"male": 1,"female": 0},
  "40": {"male": 1,"female": 0},
  "42": {"male": 0,"female": 1}
 },
 "chartData": {
  "pieChart": [
   {"label": "Muž","value": 2},
   {"label": "Žena","value": 3}
  ],
  "barChart": [
   {"label": "22","value": 1},
   {"label": "25","value": 1},
   {"label": "39","value": 1},
   {"label": "40","value": 1},
   {"label": "42","value": 1}
  ],
  "stackedBarChart": [
   {"label": "22","valueMale": 0,"valueFemale": 1},
   {"label": "25","valueMale": 0,"valueFemale": 1},
   {"label": "39","valueMale": 1,"valueFemale": 0},
   {"label": "40","valueMale": 1,"valueFemale": 0},
   {"label": "42","valueMale": 0,"valueFemale": 1}
  ]
 }
}
* */