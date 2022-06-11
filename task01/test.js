//console.log(new Date());

/*for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100);
    console.log(number < 50 ? "0" : "1");
}*/

/*let date = new Date();
for (let i = 0; i < 10; i++) {
    console.log(date + " DATE");
    date.setFullYear(2022-50);
    let random = Math.floor(Math.random() * (32+1))
    date.setFullYear(date.getFullYear() + random)
    console.log(date.getFullYear() + " random date")
}
*/
/*function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 50; i++) {
    console.log(getRandom(0,1))
}*/

//console.log("male".toUpperCase() === "MALE")

/*function getRandomDate2(fromDate, toDate) {
    fromDate = fromDate.getTime();
    toDate = toDate.getTime();
    return new Date(fromDate + Math.random() * (toDate - fromDate));
}

for (let i = 0; i < 10; i++) {
    console.log(getRandomDate2(new Date(1972,5,11),new Date(2004,5,11)))
}*/

/*
const isValidDate = function(date) {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

console.log(isValidDate("hello"))
console.log(isValidDate("1994-11-13T10:58:06.816Z"))
*/


let arr = [40,10,20,15];
console.log(arr.sort())