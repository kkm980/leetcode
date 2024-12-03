/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.bigSpace=big;
    this.medSpace=medium;
    this.smallSpace=small;
    
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
     if(carType===1){
            if(this.bigSpace>=1){
                this.bigSpace--;
                return true;
            }
            return false;
        }
        else if(carType===2){
            if(this.medSpace>=1){
                this.medSpace--;
                return true;
            }
            return false;
        }
        else if(carType===3){
            if(this.smallSpace>=1){
                this.smallSpace--;
                return true;
            }
            return false;
        }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */