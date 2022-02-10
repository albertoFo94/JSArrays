const numbers = [1, 2, 3, 4];

let answer = false;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element % 2 === 0) {
    answer = true;
    break;
  }
}
console.log('answer', answer);

const answer2 = numbers.some(item => item % 2 === 0);
console.log('answer2', answer2);

const orders = [
  {
    customerName: 'Alberto',
    total: 70,
    delivered: true
  },
  {
    customerName: 'Sofia',
    total:80,
    delivered:false
  },
  {
    customerName: 'Andrea',
    total: 70,
    delivered: false
  },
  {
    customerName: 'Daniela',
    total: 40,
    delivered: true
  },
  {
    customerName: 'Daniela',
    total: 30,
    delivered: false
  }
];

const answer3 = orders.some(order => order.delivered);
console.log('answer3', answer3);