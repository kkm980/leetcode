/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
// var timeRequiredToBuy = function(tickets, k) {
//     let queue = [];
    
//     // Initialize queue with [index, tickets[i]]
//     for (let i = 0; i < tickets.length; i++) {
//         queue.push([i, tickets[i]]);
//     }
    
//     let time = 0;
    
//     while (queue.length > 0) {
//         let [index, ticketCount] = queue.shift(); // Person at front buys one ticket
//         ticketCount -= 1;
//         time++;
        
//         if (ticketCount > 0) {
//             queue.push([index, ticketCount]); // Goes to end of line
//         }
        
//         if (index === k && ticketCount === 0) {
//             return time; // Our person finished
//         }
//     }
    
//     // return time;
// };


var timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            time += Math.min(tickets[i], tickets[k]);
        } else {
            time += Math.min(tickets[i], tickets[k] - 1);
        }
    }
    return time;
};


