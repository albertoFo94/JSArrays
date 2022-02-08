const letters = ['a', 'b', 'c'];

const newArray = letters.map(item => item + '++');
const newArray = [];
for (let i = 0; i < letters.length; i++) {
  const element = letters[i];
  newArray.push(element + '++');
}
console.log('original', letters);
console.log('new', newArray);

const orders = [
  {
    customerName: 'ALberto',
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
  }
];
console.log('original', orders);
const newArray = orders.map(item => item.total);
console.log('newArray', newArray);

const newArray2 = orders.map(item => {
  item.tax = .19;
  return item;
});
console.log('newArray2', newArray2);
console.log('original', orders);
const newArray3 = orders.map(order => {
  return {
    ...order,
    tax: .19
  };
});
console.log('newArray2', newArray2);
console.log('original', orders);