const products = [
  { title: "Pizza", price: 121, id: "1" },
  { title: "Burger", price: 121, id: "2" },
  { title: "Hot Cakes", price: 122, id: "3" }
];
const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));
const productIndex = products.findIndex(item => item.id === "2");
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

// Update

const productsV2 = [
  { title: "Pizza", price: 121, id: "1" },
  { title: "Burger", price: 121, id: "2" },
  { title: "Hot Cakes", price: 122, id: "3" }
];
const update = {
  id: "3",
  changes: {
    price: 200,
    description: "Delicious"
  }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
  ...productsV2[productIndexV2],
  ...update.changes
};
console.log(productsV2);