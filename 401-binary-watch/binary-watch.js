/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
  const result = [];

  // Helper: generate all numbers formed by turning on `count` bits from `bits` length
  const generate = (count, bits) => {
    const res = [];

    const backtrack = (start, ones, value) => {
      if (ones === count) {
        res.push(value);
        return;
      }
      for (let i = start; i < bits; i++) {
        backtrack(i + 1, ones + 1, value | (1 << i));
      }
    };

    backtrack(0, 0, 0);
    return res;
  };

  for (let h = 0; h <= Math.min(4, turnedOn); h++) {
    const m = turnedOn - h;
    if (m > 6) continue; // only 6 minute LEDs available

    const hours = generate(h, 4);
    const minutes = generate(m, 6);

    for (const hour of hours) {
      if (hour > 11) continue;
      for (const minute of minutes) {
        if (minute > 59) continue;
        result.push(`${hour}:${minute.toString().padStart(2, '0')}`);
      }
    }
  }

  return result;
};