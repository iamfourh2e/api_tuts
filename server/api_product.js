import GeneralFn from "../imports/general_function";
import { Product } from "../imports/collections/product";

GeneralFn.routes('post', '/products/add' ,function(req,res,next){

    const id = Product.insert(req.body);

    
    GeneralFn.sendResult(res,{
        data: {
            id,
            code: 201
        }
    })
}); 