/* 
OPerations:

4 | 3
3 & 1
5 ^ 2
~2
4 << 2
128 >> 1
-2 >>> 1
*/

console.log(4 | 3); // 7

const firstNumber = (4).toString(2).padStart(32, 0);
const secundNumber = (3).toString(2).padStart(32, 0);

console.log({
  firstNumber,
  secundNumber,
});
/* 
firstNumber:00000000000000000000000000000100
secundNumber:00000000000000000000000000000011
  0 to 1 = 1
  0 to 1 = 1
  1 to 0 = 1
*/
console.log(0b111); // 7
