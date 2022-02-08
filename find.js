const numbers = [1,30,49,29,10,14];

let answer = undefined;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element === 30) {
    answer = element;
    break;
  }
}
console.log('for', answer);
const answer2 = numbers.find(item => item === 30);
console.log('find', answer2);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '1'
  },
  {
    name: "Burger",
    price: 23,
    id: '2'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '3'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '4'
  }
];

const answer3 = products.find(item => item.id === '1');
console.log('find', answer3);
const answer4 = products.findIndex(item => item.id === '1');
console.log('findIndex', answer4);