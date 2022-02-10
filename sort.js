const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a - b);
console.log(numbers);
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);
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
  }
];
orders.sort((a,b) => b.total - a.total);
console.log(orders);