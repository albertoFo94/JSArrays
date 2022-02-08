const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let i = 0; i < pets.length; i++) {
  const element = pets[i];
  if (element === 'dog') {
    includeInArray = true;
    break;
  }
}
console.log('for'. includeInArray);
const answer = pets.includes('dog');
console.log('includes', answer);