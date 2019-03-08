const controller = {};


controller.compra = (req,res) =>{
	req.getConnection((err,connection) => {
		connection.query('SELECT * FROM customer',(err,customers) =>{
			if(err){
				res.json(err);
			}
			console.log(customers);
			res.render('customers',{
				data:customers
			});

		})
	});
};


module.exports = controller;