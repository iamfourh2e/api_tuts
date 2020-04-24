import GeneralFn from "../imports/general_function";
import { Product } from "../imports/collections/product";

GeneralFn.routes('post', '/products/add' ,function(req,res,next){

    // const id = Product.insert(req.body); //body , headers , query
    
    
    // GeneralFn.sendResult(res,{
    //     data: {
    //         id,
    //         code: 201
    //     }
    // })

    new Promise((resolve,reject) => {
         Product.insert(req.body, function(err,id){
             if(err) {
                 reject(err.message);
             }else{
                 resolve(id)
             }
         }); //body , headers , query

    })
    .then(val => {
        GeneralFn.sendResult(res, {
            data: {
                code: 201,
                data: val
            }
        })
    })
    .catch(val => {
        GeneralFn.sendResult(res, {
            data: {
                code: 403,
                data: val
            }
        })
    })
}); 

GeneralFn.routes('get', '/products',function(req,res,next){
    const {created_by,id,price} = req.query;
    let selector = {};

    if(created_by) {
        selector.createdBy = created_by;
    }
    if(price){
        selector.price = +price;
    }
    if(id) {
        selector._id = id;
    }
    if(Object.keys(selector).length === 0){
        GeneralFn.sendResult(res, {
            data: {
                code: 403,
                msg: "Ah pakach we need selector to query bro"
            }
        })
    }
   const docs = Product.find(selector).fetch();
   GeneralFn.sendResult(res,{
       data: {
           code: 201,
           data: docs
       }
   })
})

GeneralFn.routes('post', '/products/query',function(req,res,next){
    const {created_by} = req.query;
    const {id, price} = req.body;
    let selector = {};

    if(created_by) {
        selector.createdBy = created_by;
    }
    if(price){
        selector.price = price;
    }
    if(id) {
        selector._id = id;
    }
    if(Object.keys(selector).length === 0){
        GeneralFn.sendResult(res, {
            data: {
                code: 403,
                msg: "Ah pakach we need selector to query bro"
            }
        })
    }
   const docs = Product.find(selector).fetch();
   GeneralFn.sendResult(res,{
       data: {
           code: 201,
           data: docs
       }
   })
})