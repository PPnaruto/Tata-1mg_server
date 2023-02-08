const fs = require('fs/promises')

async function checkAllKeys(req,res,next){
        const body = req.body;
        if(body.hasOwnProperty("name") && body.hasOwnProperty("description") && body.hasOwnProperty("category") &&
        body.hasOwnProperty("price") && body.hasOwnProperty("quantity") && body.hasOwnProperty("rating") && body.hasOwnProperty("image")){
                next();
        }else{
            return res.status(400).send({
                err: "All the fields are not there"
            })
        }
}

async function record(id,value){

   await fs.appendFile( "./record.txt",`The document with id:${id} has been ${value}.`)
}

module.exports = {
    checkAllKeys,
    record
}