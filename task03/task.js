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


function generateHistogram(studentsWithAge) {

    //create a Map with a Key Age and value will be the object with male: count and female:count
    let myMap = new Map();
    for (let i = 0; i < studentsWithAge.length; i++) {
        let current = studentsWithAge[i];
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

function generatePicaChart(studentsWithAge) {

    let manCount = 0;
    let womanCount = 0;
    for (let i = 0; i < studentsWithAge.length; i++) {
        let current = studentsWithAge[i];
        let gender = current.gender;
        if ("MALE" === gender.toUpperCase().trim())
            manCount++;
        else if ("FEMALE" === gender.toUpperCase().trim())
            womanCount++;
    }

    return [
        {label: "Muž", value: manCount},
        {label: "Žena", value: womanCount}
    ];
}

//cetnost veku
function generateBarChart(studentsWithAge) {
    let obj = {};

    for (let i = 0; i < studentsWithAge.length; i++) {
        let current = studentsWithAge[i];
        if (obj[current.age]) {
            obj[current.age]++
        } else
            obj[current.age] = 1;
    }

    let resultArr = [];
    for (let key in obj) {
        resultArr.push({
            "label": key, "value": obj[key]
        })
    }

    return resultArr;
}

function generateStackedBarChart(studentsWithAge) {
    let obj = {

    };

    for (let i = 0; i < studentsWithAge.length; i++) {
        let current = studentsWithAge[i];
        let currentGender = current.gender;
        if (obj[current.age]) {
            obj[current.age] = current.age;
            if (obj[current.valueMale])
                obj[current.valueMale]++
            else if (obj[current.valueMale])
                obj[current.valueMale]++
        } else {
            obj[current.age] = current.age;
            if (obj[current.valueMale])
                obj[current.valueMale] = 1;
            else if (obj[current.valueMale])
                obj[current.valueMale] = 1;
        }
    }

    let resultArr = [];
    for (let key in obj) {
        resultArr.push({
            "label": key, "valueMale": obj[key], "valueFemale": obj[key]
        });
    }

    return resultArr;
}

function generateData() {

    let ageBirthDayArr = data.classroom.map(each => new Date(each.birthdate));
    let genderArr = data.classroom.map(each => each.gender);
    let studentsWithAge = data.classroom.map(each => {
        let age = getAge(each.birthdate);
        return {...each, age};
    });

    let histogram = generateHistogram(studentsWithAge);
    let pieChart = generatePicaChart(studentsWithAge);
    let barChart = generateBarChart(studentsWithAge);
    let stackedBarChart = generateStackedBarChart(studentsWithAge);

    console("blablabla")
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