const matriz = [
  [1,2,3],
  [4,5,6, [1,2, [1,2]]],
  [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}
const answer = matriz.flat(3);
console.log('for', newArray);
console.log('flat', answer);