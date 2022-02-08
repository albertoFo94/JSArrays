const letters = ['a', 'b', 'c'];

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  console.log('for', letter);
}

letters.forEach(letter => console.log('forEach', item));