const productService = {};

productService.total = (products) =>{
	total = 0;
	for (index in products) {
  		total += products[index].price;
	}
	return total;
}

productService.totalWithCountryTax = (products,country)=>{
	total = productService.total(products);
	tax = ((country.tax*total)/100);
	return total + tax;
}

productService.compra = (user,products,country) =>{
	if(user.id !== null){
		total =productService.totalWithCountryTax(products,country);
		if(total > 0){
			return {finish:true,total : total}
		}
	}
	return {finish:false,total : 0}
}


module.exports = productService;