const Product = require("../models/models");

async function getAlldata(){
    // if(price_low && price_high){
    //     const data = await Product.find({price:{$gte:price_low,$lte:price_high}});

    //     return data;
    // }
    // if(category){
    //     const data = await Product.find({category:category});

    //     return data;
    // }
    const data = await Product.find();
    return data;
}

// async function addData(data){
//     const items = Product.create({...data});
//    return items;
// }

// async function updateData(id,body){
//     const data = await Product.findByIdAndUpdate(id,{...body},{new:true});
//     return data;
// }
// async function deleteData(id){
//     const data = await Product.findByIdAndDelete(id);
//     return data;
// }

module.exports = {
    // addData,
    getAlldata,
    // updateData,
    // deleteData
}