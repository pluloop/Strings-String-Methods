// returns length of inputted string
function length(str){
    let current = 0;
    let strLength = 0;

    while(str[current] != null){
        current++;
        strLength++;
    }

    return strLength;
}

// returns part of a string starting from index start and not including end
function slice(str, start, end){
    newStr = "";

    let index = start;
    while(index < end){
        newStr += str[index];
        index++;
    }

    return newStr;
}

// replaces the first instance of one text with another
function replace(str, replaced, replacement){
    let current = 0;
    let firstLetter = replaced[0];
    let replacedLength = length(replaced);
    let strLength = length(str);
    let newStr = "";

    while(str[current] != null){
        if (str[current] == firstLetter && slice(str, current, current + replacedLength) == replaced){
            newStr += replacement + slice(str, current + replacedLength, strLength);
            return newStr;
        }
        newStr += str[current];
        current++;
    }

    return str; 
}

// replaces all instances of one text with another
function replaceAll(str, replaced, replacement){
    let current = 0;
    let firstLetter = replaced[0];
    let replacedLength = length(replaced);
    let newStr = "";
    let replacedFound = false;

    while(str[current] != null){
        if (str[current] == firstLetter && slice(str, current, current + replacedLength) == replaced){
            newStr += replacement;
            current += replacedLength;
            replacedFound = true;
        }
        else{
            newStr += str[current];
            current++;
        }
    }

    // checks if instances were found
    if (replacedFound){
        return newStr;
    }
    else{
        return str;
    }
}

// combines two strings together
function concat(str1, str2){
    return str1 + str2;
}

// returns the character at a specific index of a string
function charAt(str, index){
    if (index < length(str)){
        return str[index];
    }
    
    else{
        return "";
    }
}

// test for length
console.log(length("hello"));

// test for slice
console.log(slice("hello", 0, 2));

// test for replace
console.log(replace("hello", "ll", "aa")); // valid input
console.log(replace("hello", "y", "aa")); // invalid input

// test for replaceAll
console.log(replaceAll("hello there hello hello", "ll", "ao")); // valid input
console.log(replaceAll("hello there hello hello", "yy", "ao")); // invalid input

// test for concat
console.log(concat("hello", "hi"));

// test for charAt
console.log(charAt("hello", 1)); // valid input
console.log(charAt("hello", 11)); // invalid input