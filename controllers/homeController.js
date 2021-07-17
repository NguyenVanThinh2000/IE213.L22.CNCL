const products = require('../models/products');

class homeController{
    index(req,res,next){
        products.find({})
            .then(home => {
                var temp = home.map(products => products.toObject());
                var highlight = [];
                var hot = [];
                var new_products = [];
                var l = temp.length;

                for (var i=0; i<l; i++){
                    if (temp[i].status == 'highlight'){
                        var h_l = highlight.length;
                        if (h_l < 8){
                            highlight.push(temp[i]);
                        }
                    }
                    else if (temp[i].status == 'hot'){
                        var h_l = hot.length;
                        if (h_l < 8){
                            hot.push(temp[i]);
                        }
                    }
                };

                for (var j=l-1; j>(l-7); j--){
                    new_products.push(temp[j]);
                };
                var first_highlight = highlight[0];
                var first_hot = hot[0];

                res.render('index', {highlight, hot, first_highlight, first_hot, new_products});
            })
            .catch(next);
    }
}
module.exports = new homeController();
