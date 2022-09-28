let grade_conversion = function(grade){
    if (grade >= 90) {
        return "A"
    }
    else if (80 <= grade && grade <= 89){
        return "B"
    }
    else if (70 <= grade && grade <= 79){
        return "C"
    }
    else if (60 <= grade && grade <= 69){
        return "D"
    }
    else{
        return "F"
    }
}

console.log(grade_conversion())