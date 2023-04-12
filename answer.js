//1.Find all the information about each products

db.product.find ({})

//2.Find the product price which are between 400 to 800

db.product.find({product_price:{$gte:400,$lte:800}})

//3.Find the product price which are not between 400 to 600

db.product.find({product_price:{$not:{$gte:400,$lte:800}}})

//4.List the four product which are grater than 500 in price 

db.product.find({product_price:{$gte:500}}).limit(4)

//5.Find the product name and product material of each products

db.product.find({},{_id:0,product_name:1,product_material:1})

//6.Find the product with a row id of 10

db.product.find({id:"10"})

//7.Find only the product name and product material

db.product.find({},{_id:0,product_name:1,product_material:1})


//8.Find all products which contain the value of soft in product material 

db.product.find({product_material:"soft"})

//9.Find products which contain product color indigo  and product price 492.00

db.product.find({product_color:"indigo"})
db.product.find({product_price:492.00})

//10.Delete the products which product price value are same

db.product.aggregate([{$group:{_id:"$product_price",products:{$push:"$product_name"},count:{$gt:1}}},{$project:{_id:0,products:1}}])

