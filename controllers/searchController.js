const products = require('../models/products')
const {removeAccents} = require('../util/mongoose');

class searchController{
    index(req,res,next){
        products.find({})
            .then(products => {
                products = products.map(products => products.toObject());


                var query = req.query.search;
                var querys = query.split(' ');
                var products_len = products.length;
                var res_search = [];


                for (var i = 0; i < products_len; i++){
                    var product = products[i].name.split(' ');
                    var count = 0;
                    for(var k = 0; k < product.length; k++){
                        for (var h = 0; h < querys.length; h++){
                            if (removeAccents(product[k].toLowerCase()) == removeAccents(querys[h].toLowerCase())){
                                count+=1;
                            }

                        }
                    }
                    if (count > 0){
                        res_search.push(products[i]);
                    }
                }
                res.render('search', {res_search, query});

            })
            .catch(next);
            
    }
}
module.exports = new searchController();
