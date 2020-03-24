// let productPrice = +prompt("Введіть вартість товару", "");
// let currency = "грн";
// function calcDiscount() {
// 	let discount = 0;
// 	if (productPrice <= 1000) discount=0.03
// 	if (productPrice > 1000 && productPrice <= 5000) discount=0.05
// 	if (productPrice > 5000) discount=0.07
// 	let productPriceWithDiscount = productPrice - (productPrice * discount);
// 	console.log ("Вартість товару зі знижкою " + productPriceWithDiscount + " " + currency);
// }
// calcDiscount();


// let x = +prompt("Введіть x", "");
// let y = +prompt("Введіть y", "");
// let z = true;
// function test(a,b,c) {
// 	let bigger = 0;
// 	let smaller = 0;
// 	if (a > b){ 
// 		bigger = a;
// 		smaller = b;
// 	}
// 	if (a < b){ 
// 		bigger = b;
// 		smaller = a;
// 	}
// 	if (z) console.log(bigger)
// 	else console.log(smaller)	
// }
// test(x,y,z);



// let array = [1,2,3,4,5,6];
// console.log(array[array.length - 1]);

// let array = [5, 10, 15, 20];
// let arraySum = 0;
// for (let i = 0; i < array.length; i++) {
// 	arraySum = arraySum + array[i]
// }
// console.log(arraySum);



let array = [2, 9, 6, 3, 12, 15, 10];
let arrayMax = array[0];
let arrayMin = array[0];
for (let i = 0; i < array.length; i++) {
	if (array[i] < arrayMin) {
		arrayMin = array[i]
	}
	if (array[i] > arrayMax) {
		arrayMax = array[i]
	}
}
console.log(arrayMin);
console.log(arrayMax);