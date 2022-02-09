const elements = ["Fire", "Air", "Water"];

let finalAnswer = '';
const separator = '--';
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  finalAnswer = finalAnswer + element + separator;
}

const answer = elements.join('--');
console.log('for', finalAnswer);
console.log('join', answer);

const title = 'Arrays manipulation course';

const finalTitle = title.split(' ').join('-').toLowerCase();
console.log();