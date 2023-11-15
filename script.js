function length(str){
    let current = 0
    let strLength = 0;

    while(str[current] != null){
        current++;
        strLength++;
    }

    return strLength;
}

function slice(str, start, end){
    newStr = "";

    let index = start;
    while(index < end){
        newStr += str[index];
    }

    return newStr;
}