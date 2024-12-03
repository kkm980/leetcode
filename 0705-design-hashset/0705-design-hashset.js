
var MyHashSet = function() {
    let set = [];
    this.set=set;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if(this.contains(key)){
        return;
    }
    this.set.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let ind = this.set.indexOf(key);
    if(ind !=-1){
        this.set.splice(ind,1)
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    if(this.set.indexOf(key) != -1){
        return true;
    } else {
        return false;
    }
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */