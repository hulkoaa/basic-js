module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = [];

    for (i = 0; i < members.length; i++) {
      if (typeof (members[i]) != "string") continue ;
      let temp = members[i].split('');
      top:
      
      for (j = 0; j < temp.length; j++) {
        if (/\w/.test(temp[j])) {
          arr.push(temp[j].toLowerCase()); break top;
        }
      }
     
    }
    arr.sort();
    return arr.join('').toUpperCase();
  } return false;
};