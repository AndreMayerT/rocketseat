let temp_convertion = function(temp){
    if (temp[temp.length - 1] === "C") {
        degrees = temp.slice(0, temp.length - 1)
        converted = degrees * 9 / 5 + 32
        return converted + "F"
        
    }
    else if (temp[temp.length - 1] === "F") {
        degrees = temp.slice(0, temp.length - 1)
        converted = (degrees - 32) * 5/9
        return converted + "C"
    }
}


console.log(temp_convertion("40C"))