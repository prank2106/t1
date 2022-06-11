//@@viewOff:const
const genders = ["male", "female"];
Object.freeze(genders);
const todayDate = new Date();
const minAge = 18;
const maxAge = 50;
const count = 50;
const namesMale = ["Aleš", "Martin", "Jarda", "Kamil", "Ivo", "Karel", "Rudolf", "Petr", "Lukáš", "Vašek", "Jindřich",
    "Albert", "Štefan", "Honza", "Bruno", "Josef", "Ondřej", "Vladimír", "Roman", "Daniel", "Ladislav", "Marek", "Radek",
    "Matěj", "Dominik"]
const namesFemale = ["Jana", "Marie", "Eva", "Hana", "Anna", "Lenka", "Kateřina", "Lucie", "Věra", "Alena", "Petra",
    "Veronika", "Jaroslava", "Tereza", "Martina", "Michaela", "Jitka", "Helena", "Ludmila", "Zdeňka", "Ivana", "Monika",
    "Eliška", "Zuzana", "Markéta"]
const surnamesMale = ["Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Pospíšil",
    "Pokorný", "Král", "Hájek", "Jelínek", "Růžička", "Beneš", "Fiala", "Babiš", "Sedláček", "Doležal", "Zeman", "Krejčí",
    "Kolář", "Navrátil", "Čermák"]
const surnamesFemale = ["Kratochvílová", "Šimková", "Blažková", "Křížová", "Kopecká", "Strejcová", "Podlipská",
    "Wilhelmová", "Vágnerová", "Holubová", "Sýkorová", "Drozdová", "Korelusová", "Černá", "Dostálová", "Soukupová",
    "Marešová", "Valentová", "Šestáková", "Gabrielová", "Konečná", "Musilová", "Malá", "Stehlíková", "Šobrová"]
let todayMinus50Years;
let todayMinus18Years;


//@@viewOff:const

//@@viewOn:helpers
/**
 * Returns random number in range <min,max>
 *
 * @param {number} min min value
 * @param {number} max max value
 * @return {number} random number
 **/
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function defineTodayMinus50years() {
    if (todayMinus50Years === null || todayMinus50Years === undefined) {
        const base = new Date(todayDate);
        base.setFullYear(base.getFullYear() - maxAge);
        todayMinus50Years = base;
        Object.freeze(todayMinus50Years);
    }
}


function defineTodayMinus18years() {
    if (todayMinus18Years === null || todayMinus18Years === undefined) {
        const base = new Date(todayDate);
        base.setFullYear(base.getFullYear() - minAge);
        todayMinus18Years = base;
        Object.freeze(todayMinus18Years);
    }
}


//@@viewOff:helpers
function generateRandomBirthDateForAgeInRange() {
    let fromDate = todayMinus50Years.getTime();
    let toDate = todayMinus18Years.getTime();
    return new Date(fromDate + Math.random() * (toDate - fromDate)).toISOString();
}


function generateRandomStudent() {
    let randomNr = getRandom(0, 1);
    const gender = genders[randomNr];
    const isMale = gender.toUpperCase() === "MALE";

    let name;
    let surname;

    if (isMale) {
        name = getRandomElementFromArray(namesMale);
        surname = getRandomElementFromArray(surnamesMale);
    } else {
        name = getRandomElementFromArray(namesFemale);
        surname = getRandomElementFromArray(surnamesFemale);
    }

    let birthdate = generateRandomBirthDateForAgeInRange(todayMinus50Years, maxAge - minAge);

    return {gender, birthdate, name, surname};
}

function getRandomElementFromArray(names) {
    return names[getRandom(0, names.length - 1)];
}

/**
 * @param {Number} count Defines count of generated Students
 * */
function generateNRandomStudents(count) {
    const students = [];
    for (let i = 0; i < count; i++) {
        students.push(generateRandomStudent());
    }
    return students;
}

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {array} output data
 **/
function main(dtoIn = {}) {
    defineTodayMinus50years();
    defineTodayMinus18years();
    return generateNRandomStudents(count);
}

//@@viewOff:main