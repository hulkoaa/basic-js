module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let trn = Math.pow(2, disksNumber) - 1;
    let trnHour = turnsSpeed/3600
    let scd = trn/trnHour;
    
    return {turns: trn, seconds: scd}
}
