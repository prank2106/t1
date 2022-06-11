//@@viewOff:const
//@@viewOff:const

//@@viewOn:helpers
function calculateMetrics(arrayOfStudents) {
    let metrics = null;
    if (arrayOfStudents === null || arrayOfStudents.length ===0)
        return metrics;

    let total = 0;
    let sumOfAge = 0;
    let minAge = Number.MAX_SAFE_INTEGER;
    let maxAge = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arrayOfStudents.length; i++) {

    }
}
//@@viewOff:helpers

//@@viewOn:main
/**
 * @param {object} dtoIn input data
 * @return {object} output data
**/
function main(dtoIn={}) {

    return calculateMetrics(arrayOfStudents);

}
//@@viewOff:main

//{
//  "total": 5,
//  "avg": 33.6,
//  "min": 22,
//  "max": 40,
//  "median": 39,
//  "ages": [22,25,39,40,42]
// }