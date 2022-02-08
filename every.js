const numbers = [1,30,49,29,10,14];

let answer = true;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element >= 40) {
    answer = false
  }
}
console.log('for', answer);
const answer2 = numbers.every(item => item <= 40);
console.log('answer2', answer2);