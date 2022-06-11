//@@viewOff:const
const data = {
    "classroom": [
        {"gender": "female", "birthdate": "1978-12-03T23:00:00.000Z", "name": "Jitka", "surname": "Němcová"},
        {"gender": "female", "birthdate": "1999-01-13T23:00:00.000Z", "name": "Jitka", "surname": "Blažková"},
        {"gender": "male", "birthdate": "1982-01-13T23:00:00.000Z", "name": "David", "surname": "Kolář"},
        {"gender": "male", "birthdate": "1980-08-02T22:00:00.000Z", "name": "Marek", "surname": "Zeman"},
        {"gender": "female", "birthdate": "1995-05-27T22:00:00.000Z", "name": "Marcela", "surname": "Doležalová"}
    ]
};

const chartDataPreview = `{
    "chartData": {
        "pieChart": [
            {"label": "Muž", "value": 0},
            {"label": "Žena", "value": 0}
        ],
        "barChart": [
            {"label": "0", "value": 0}
        ],
        "stackedBarChart": [
            {"label": "0", "valueMale": 0, "valueFemale": 0}
        ]
    }
}`;
//@@viewOff:const

//@@viewOn:helpers


function generateHistogram(ageArr) {

    //create a Map with a Key Age and value will be the object with male: count and female:count
    let myMap = new Map();
    for (let i = 0; i < ageArr.length; i++) {
        let current = ageArr[i];
        let age = current.age;
        let gender = current.gender;

        if (!myMap.has(age)) {
            myMap.set(age, {
                "male": gender.toUpperCase().trim() === "MALE" ? 1 : 0,
                "female": gender.toUpperCase().trim() === "FEMALE" ? 1 : 0
            });
        } else {
            let existing = myMap.get(age);
            if (gender.toUpperCase().trim() === "MALE") {
                existing.male = existing.male++;
            } else if (gender.toUpperCase.trim() === "FEMALE") {
                existing.female = existing.female++;
            }
        }
    }
    let blablabla = {histogram: myMap};
    return {histogram: myMap};
}

function generateChartData(ageArr) {

    const parsedObj = JSON.parse(chartDataPreview);

    for (let i = 0; i < ageArr; i++) {
        let current = ageArr[i];
        let age = current.age;
        let gender = current.gender;
        let translatedGender;
        if ("MALE" === gender.toUpperCase().trim()) {
            translatedGender = "Muž";
            let test = Object.values(parsedObj.pieChart.label.get(translatedGender));
            console.log(test);
        }
        else if ("FEMALE" === gender.toUpperCase().trim())
            translatedGender = "Žena";




    }

    return parsedObj;
}

function generateData() {

    let ageBirthDayArr = data.classroom.map(each => new Date(each.birthdate));
    let genderArr = data.classroom.map(each => each.gender);
    let ageArr = data.classroom.map(each => {
        let age = getAge(each.birthdate);
        return {...each, age};
    });

    let histogram = generateHistogram(ageArr);
    let chartData = generateChartData(ageArr);

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
function main(dtoIn = {}) {

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