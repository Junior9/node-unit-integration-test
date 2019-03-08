const produtoService = require("../service/produto-service");
const expect = require('expect');

products = [
	{name:"sal",price:10},
	{name:"pam",price:14},
	{name:"arroz",price:20},
	{name:"frijole",price:6}
];

coutres = [
	{name:"Brazil",tax:15},
	{name:"Mexico",tax:9},
	{name:"Colombia",tax:10}, 
]

user = {
	id:1,
	name:"Francisco"
}

it('Total price of list of products is : 50',()=>{
	var total= produtoService.total(products);
	expect(total).toBe(50);
})

it('Total price of list of products more Brazil tax : 57.5',()=>{
	var total= produtoService.totalWithCountryTax(products,coutres[0]);
	expect(total).toBe(57.5);
})

it('Total price of list of products more Mexico tax : 54.5',()=>{
	var total= produtoService.totalWithCountryTax(products,coutres[1]);
	expect(total).toBe(54.5);
})

it('Total price of list of products more Colombia tax : 55',()=>{
	var total= produtoService.totalWithCountryTax(products,coutres[2]);
	expect(total).toBe(55);
})

it('Buy list of product of Brazil : 57.5',()=>{
	var compra = produtoService.compra(user,products,coutres[0]);
	expect(compra.finish).toBeTruthy();
	expect(compra.total).toBe(57.5);
})

it('Buy with invalid user',()=>{
	user = {
		id:null,
		name:"Francisco"
	}
	var compra = produtoService.compra(user,products,coutres[0]);
	expect(compra.finish).toBeFalsy();
})