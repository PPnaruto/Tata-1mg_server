const express = require('express');
const { addData,getAlldata,updateData,deleteData } = require('../controller/controller');
// const { addData,getAlldata,updateData,deleteData } = require('../controller/controller');
// const { checkAllKeys, record } = require('../middlewares/middleware');
const router = express.Router();

router.get('/', async (req,res)=>{
    try{
        // const {price_low,price_high,category} = req.query;
        // const data = await getAlldata(price_low,price_high,category);
        const data = await getAlldata();
        return res.send({
            message:"Request Completed Successfully",
            data:data
        })
    }catch(err){
        console.error(err.message);
        return res.status(400).send({
            message:"something went wrong",
        })
    }
})


// router.post('/',checkAllKeys,async(req,res)=>{
//     try{
//         const data = req.body;
//         const product = await addData(data);

//         return res.send({
//             data:product
//         })
//     }catch(err){
//         console.error(err.message);
//         return res.status(400).send({
//             message:"something went wrong",
//         })
//     }
// });

// router.patch('/:id',async(req,res)=>{
//     try{
//         const id = req.params.id;
//         const body = req.body;
//         const data = await updateData(id,body);
//         record(id,"updated");
//         return res.send({
//             data:data
//         })
//     }catch(err){
//         console.error(err.message);
//         return res.status(400).send({
//             message:"something went wrong",
//         })
//     }
    

// })
// router.delete('/:id',async(req,res)=>{
//     try{
//         const id = req.params.id;
//         const data = await deleteData(id);
//         record(id,"deleted");
//         return res.send({
//             data:data
//         })
//     }catch(err){
//         console.error(err.message);
//         return res.status(400).send({
//             message:"something went wrong",
//         })
//     }
    

// })

module.exports  = router;