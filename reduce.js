const totals = [1,2,3,4];

let add = 0;
for (let i = 0; i < totals.length; i++) {
  const element = totals[index];
  add = add + element;
}
console.log(add);

const answer = totals.reduce((add, element) => add + element, 0);
console.log('answer', answer);

const items = [1, 3, 2, 3, 3, 1, 10];

const answer = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(answer);

const data = [
  {
    name: "Alberto",
    level: "hight"
  },
  {
    name: "Andrea",
    level: "low"
  },
  {
    name: "Sofia",
    level: "hight"
  },
  {
    name: "Daniela",
    level: "medium"
  },
  {
    name: "Mariza",
    level: "hight"
  },
  {
    name: "Cindy",
    level: "medium"
  },
  {
    name: "Alejandra",
    level: "low"
  },
  {
    name: "Paola",
    level: "low"
  }
];

const answer = data
.map(item => item.level)
.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(answer);