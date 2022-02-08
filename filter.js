const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let i = 0; i < words.length; index++) {
  const item = words[i];
  if (item.length >= 6) {
    newArray.push(item);
  }
}
console.log('newArray', newArray);
console.log('original', words);
const newArray2 = words.filter(item => item.length >=6);
console.log('newArray2', newArray2);
console.log('original', words);

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
  },
  {
    customerName: 'Daniela',
    total: 30,
    delivered: false
  }
];
const newArray3 = orders.filter(order => order.delivered && order.total >= 100);
console.log('newArray3', newArray3);

const search = (query) => {
  return orders.filter(order => {
    return order.customerName.includes(query);
  });
};

console.log(search('Dani'));
console.log(search('a'));
console.log(search('ajkfkjdfshkdasf'));