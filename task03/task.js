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
//create a Map with a Key Age and value will be the object with male: count and female:count
let ageSexCountMap = new Map();

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


    for (let i = 0; i < studentsWithAge.length; i++) {
        let current = studentsWithAge[i];
        let age = current.age;
        let gender = current.gender;

        if (!ageSexCountMap.has(age)) {
            ageSexCountMap.set(age, {
                "male": gender.toUpperCase().trim() === "MALE" ? 1 : 0,
                "female": gender.toUpperCase().trim() === "FEMALE" ? 1 : 0
            });
        } else {
            let existing = ageSexCountMap.get(age);
            if (gender.toUpperCase().trim() === "MALE") {
                existing.male = existing.male++;
            } else if (gender.toUpperCase.trim() === "FEMALE") {
                existing.female = existing.female++;
            }
        }
    }
    return {histogram: ageSexCountMap};
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

function generateStackedBarChart() {
    let obj = {};

    ageSexCountMap.forEach((value, key) => {
        obj = [...obj, {label: key, valueMale: value.male, valueFemale: value.female}];
    });

    return obj;
}

function generateData(inputData) {

    let studentsWithAge = inputData.classroom.map(each => {
        let age = getAge(each.birthdate);
        return {...each, age};
    });

    let histogram = generateHistogram(studentsWithAge);
    let pieChart = generatePicaChart(studentsWithAge);
    let barChart = generateBarChart(studentsWithAge);
    let stackedBarChart = generateStackedBarChart();

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

    generateData(dtoIn);
}

//@@viewOff:main
generateData(data);