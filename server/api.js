import {Post} from '../imports/collections/post';
import './api_product';

const sendResult = JsonRoutes.sendResult;
import GeneralFn from '../imports/general_function';
GeneralFn.routes('get', '/hello_world',function (req, res, next) {
    var id = req.params.id;
  
    JsonRoutes.sendResult(res, {
      data: "Hello world"
    });
});
GeneralFn.routes('post', '/posts/add', function(req,res,next){
    
    const id = Post.insert(req.body);

    sendResult(res, {
        data: {
            id,
            code: 201
        }
    })
})

GeneralFn.routes('get', '/posts',function(req,res,next){
    sendResult(res,{
        data: {
            docs: Post.find({}).fetch(),
            code: 201
        }
    })
})





