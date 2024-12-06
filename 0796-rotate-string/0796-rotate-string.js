/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let newS=s+s;
    if(s.length !=goal.length){
        return false;
    }
    if(newS.includes(goal)){
        return true;
    }
    return false;
};