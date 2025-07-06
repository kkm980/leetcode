/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    

    let res = [];
    function back(start,comb){
        if(comb.length == k ){
            res.push([...comb]);
            return
        }

        for(let i =start; i<=n;i++ ){
            comb.push(i);
            back(i+1,comb);
            comb.pop()
        }  


    }
    back(1,[]);
    return res;

};