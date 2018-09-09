const getTip = (amount) => {
    if(typeof amount === 'number') {
        return amount * .25
    } else {
        // throw 'argument must be a number'
        throw Error('argument must be a number')
    }

}

// const result = getTip(true)
// console.log(result)

try {
    const result = getTip(10)
    console.log(result)
} catch (e) {
    console.log('catch block is running')
}

const gradeCalc = (score, totalScore) => {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Please provide numbers only')
    }

    const percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'c'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)`
}

try {
    const result = gradeCalc(4, 9)
    console.log(result)
} catch (e) {
    console.log(e.message)
}