const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = [...elements];
for (let i = 0; i < otherElements.length; i++) {
  const element = otherElements[i];
  newArray.push(element);
}

const answer = elements.concat(otherElements);
const answer2 = [...elements, ...otherElements];
const answer3 = [...elements, ...'random'];
console.log('for', newArray);
console.log('concat', answer);
console.log('...', answer2);
console.log('answer3', answer3);
elements.push(...otherElements);
console.log('elements', elements);