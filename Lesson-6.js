'use strict';

var positions = [
    'Телепорт бытовой VZHIH-101',
    'Отвертка ультразвуковая WHO-D',
    'Ховерборд Mattel 2016',
    'Нейтрализатор FLASH black edition',
    'Меч световой FORCE (синий луч)'
  ];
  
var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];
  
var hitName = positions[2], hitPrice = prices[2];


// Задание 1
let hit = {};

hit.name =  hitName;
hit.price = hitPrice;

// console.log(`Хит продаж мартобря: <${hit['name']}> цена ${hit['price']} Q`); // Не красиво
console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`); // Красиво и универсально


// Задание 2
let items = [];

let teleport = {
  name : 'Телепорт бытовой VZHIH-101',
  price : 10000
};
let screwdriver = {
  name : 'Отвертка ультразвуковая WHO-D',
  price : 4800
};
let howerboard = {
  name : 'Ховерборд Mattel 2016',
  price : 9200
};
let neytroluzer = {
  name : 'Нейтрализатор FLASH black edition',
  price : 2500
};
let sword = {
  name : 'Меч световой FORCE (синий луч)',
  price : 57000
};

items = [teleport, screwdriver, howerboard, neytroluzer, sword];

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);


// Задание 3
function showDiscount(product, amount, discountPercent = 0) {
  if (amount <= 10) {
    discountPercent = 0.05;
  }
  if (amount > 10 && amount <= 50) {
    discountPercent = 0.07;
  }
  if (amount > 50 && amount <= 100) {
    discountPercent = 0.10;
  }
  if (amount > 100) {
    discountPercent = 0.15;
  }

  let sumCost = product.price * amount;
  let discountCost = sumCost - (sumCost * discountPercent);
  let difference = sumCost - discountCost;

  console.log(`${product.name} — стоимость партии из ${amount} штук ${discountCost} Q (скидка ${discountPercent} %), ваша выгода ${difference} Q!`);
}

showDiscount(items[0], 12);
showDiscount(items[3], 97);

// Задание 4
items[3].amount = 4;
function updateAmount(item, consumption = 1) {
	if ('amount' in item) {
		if (item.amount === 0 || consumption > item.amount) {
			console.log(`${item.this} закончился на складе.`);
		}
		if (item.amount > consumption) {
			item.amount = item.amount - consumption;
			console.log(`${item.name} — остаток ${item.amount} шт.`);
		}
		if(item.amount === consumption) {
			console.log(`Это был последний ${item.name}, вам повезло!.`);
		}
	}
	else {
		return;
	}
}
updateAmount(items[1], 17);
updateAmount(items[3], 3);
updateAmount(items[3]);