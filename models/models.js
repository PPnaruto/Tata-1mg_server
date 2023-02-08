const mongoose  = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id:Number,
    title:String,
    desc:String,
    rating: Number,
    price: String,
    discount:Number,
    category: String,
    brand:String,
    product_form:String,
    gender:String,
    age:String,
    image:String,
    variants:[{
        size:String,
        price:String
    }]
//     "id": 8,
//   "title": "Power Gummies - Hair & Nail Vitamins with Biotin",
//   "desc": "bottle of 60 gummies",
//   "rating": 4.5,
//   "price": 1200,
//   "discount": 26,
//   "category": "Vitamins",
//   "brand": "Power Gummies",
//   "product_form": "Gummy",
//   "gender": "Female",
//   "age": "All",
//   "image": "https://onemg.gumlet.io/images/f_auto,w_150,c_fit,q_auto,h_150/w1svhbtzbtivld4nmrrn/power-gummies-hair-nail-vitamins-with-biotin.jpg",
//   "variants": [
//     {
//       "size": "bottle of 60 gummies",
//       "price": 1200
//     },
//     {
//       "size": "bottle of 30 gummies",
//       "price": 600
//     }
//   ]
})

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;