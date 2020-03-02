module.exports = function repeater(str, options) {
    let resStr = str;
    let arr = [];
    let numberRepeatTimes = 1;
    let separator = '+';
    let addition = '';
    let numberAddititionRepeatTimes = 1;
    let additionSeparator = '|';
    let finalArr = [];
    for (let key in options) {
        if (key == 'repeatTimes') {
            if(Number.isInteger(options[key])){
                numberRepeatTimes = options[key];
            } 
        }
        if (key == 'separator') {
            separator = options[key];
        }
        if (key == 'addition') {
            addition = `${options[key]}`;
        }
        if (key == 'additionRepeatTimes') {
            if(Number.isInteger(options[key])){
                numberAddititionRepeatTimes = options[key];
            } 
        }
        if (key == 'additionSeparator') {
            additionSeparator = options[key];
        }
    }

    for(i=0;i<numberAddititionRepeatTimes;i++){
        arr[i]=addition;
    }
    resStr = resStr + arr.join(additionSeparator);
    for(i=0;i<numberRepeatTimes;i++){
        finalArr[i] = resStr;
    }
    return finalArr.join(separator);
};
