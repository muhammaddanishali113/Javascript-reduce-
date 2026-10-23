// const products = [
//     { id: 1, name: "Laptop", quantity: 1, price: 90000, rating: 4.5 },
//     { id: 2, name: "Mouse", quantity: 2, price: 1200, rating: 4.2 },
//     { id: 3, name: "Keyboard", quantity: 8, price: 4500, rating: 4.8 },
//     { id: 4, name: "Monitor", quantity: 2, price: 35000, rating: 4.3 },
//     { id: 5, name: "Headphones", quantity: 5, price: 3000, rating: 4.9 },
//     { id: 6, name: "Webcam", quantity: 6, price: 6500, rating: 4.1 }
// ];

// // //////////////////////////////////////////////////////
// // JavaScript Practice Sort & Reduce
// // //////////////////////////////////////////////////////

// // 1 Sort products by price (low to high).

// products.sort((a,b) => a.price -b.price)


// console.log(products)

// // 2 Sort products by price (high to low).

// products.sort((a,b) => b.price -a.price)

// console.log(products)

// // 3 Sort products by name (A to Z).

// products.sort((a,b) => b.name >a.name ? -1 : 1)

// console.log(products)

// // 4 Sort products by rating (highest first)
// // .
// products.sort((a,b) => b.rating > a.rating ? 1 : -1)

// console.log(products)

// // 5  Sort products by quantity (lowest to highest).

// const filterProduct = products.filter((product) => product.price < 10000).sort((a,b) => a.price -b.price)

// console.log(filterProduct)

// // 6 Find the 3 most expensive products using sort() and slice().

// const topRatedProducts =products.sort((a,b) => b.rating > a.rating ? 1 : -1).slice(0,3)

//  console.log(topRatedProducts)

// // 7 Find the 2 cheapest products using sort() and slice().

// const cheapestProducts = [...products]
//   .sort((a, b) => a.price - b.price)
//   .slice(0, 3);

// console.log(cheapestProducts);

// // 8 Filter products priced below Rs. 10,000, then sort by price (low to high).

// const lowTohighest = products.filter((product) => product.price <= 10000).sort((a,b) => a.price -b.price)

// console.log(lowTohighest)

// // 9 Find the top 3 highest-rated products using sort() and slice()
 
// const Rating = products.sort((a,b) => b.rating > a.rating ? 1 : -1).slice(0,3)

// console.log(Rating)


// // 10  Sort products by rating (highest first). If ratings are equal, sort by price (low to high).

// products.sort((a, b) => {
//     if (b.rating !== a.rating) {
//       return b.rating - a.rating;
//     }
//     return a.price - b.price;
//   });

//   console.log(products)


// ////////////////////////////////////////////////
// Part 2: Reduce Questions (Easy to Medium)
// ////////////////////////////////////////////////



// // 1. Total price of all products
// const totalPrice = products.reduce((total, product) => {
//   return total + product.price;
// }, 0);

// console.log("1. Total Price:", totalPrice);


// // 2. Total quantity of all products
// const totalQuantity = products.reduce((total, product) => {
//   return total + product.quantity;
// }, 0);

// console.log("2. Total Quantity:", totalQuantity);


// // 3. Average price of all products
// const averagePrice = totalPrice / products.length;

// console.log("3. Average Price:", averagePrice);


// // 4. Most expensive product using reduce()
// const mostExpensive = products.reduce((max, product) => {
//   return product.price > max.price ? product : max;
// });

// console.log("4. Most Expensive Product:", mostExpensive);


// // 5. Cheapest product using reduce()
// const cheapest = products.reduce((min, product) => {
//   return product.price < min.price ? product : min;
// });

// console.log("5. Cheapest Product:", cheapest);


// // 6. Highest-rated product using reduce()
// const highestRated = products.reduce((best, product) => {
//   return product.rating > best.rating ? product : best;
// });

// console.log("6. Highest-Rated Product:", highestRated);


// // 7. Count products with price greater than Rs. 5,000
// const priceAbove5000 = products.filter(product => {
//   return product.price > 5000;
// }).length;

// console.log("7. Products Above Rs. 5000:", priceAbove5000);


// // 8. Total inventory value (price * quantity)
// const inventoryValue = products.reduce((total, product) => {
//   return total + product.price * product.quantity;
// }, 0);

// console.log("8. Total Inventory Value:", inventoryValue);


// // 9. Total quantity of products with rating above 4.3
// const quantityAboveRating = products.reduce((total, product) => {
//   return product.rating > 4.3
//     ? total + product.quantity
//     : total;
// }, 0);

// console.log("9. Quantity with Rating Above 4.3:", quantityAboveRating);


// // 10. One reduce() for total products, quantity and inventory value
// const summary = products.reduce((acc, product) => {
//   acc.totalProducts++;
//   acc.totalQuantity += product.quantity;
//   acc.totalInventoryValue += product.price * product.quantity;

//   return acc;
// }, {
//   totalProducts: 0,
//   totalQuantity: 0,
//   totalInventoryValue: 0
// });

// console.log("10. Final Summary:", summary);