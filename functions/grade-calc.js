let gradeCal = function (studentScore, totalScore) {
    let percent = (studentScore / totalScore) * 100
    letterGrade = ''
    if (percent >= 90) {
        letterGrade = "'A'"
    } else if (percent >= 80)  {
        letterGrade = "'B'"
    } else if (percent >= 70) {
        letterGrade = "'C'"
    } else if (percent >= 60) {
        letterGrade = "'D'"
    } else {
        letterGrade = "'F'"
}
    return `You got a ${letterGrade} (${percent}%)`
}

let result = gradeCal(182.5, 250)
console.log(result)