const products = require('../models/products');
const account_carts = require('../models/account_carts');
const {convert_price} = require('../util/mongoose');
const orders = require('../models/orders');
class payController{
    index(req,res,next){
        if (req.session.isAuthenticated){
            account_carts.find({})
                .then(account_carts => {
                    var user = req.session.authUser;
                    account_carts = account_carts.map(account_carts => account_carts.toObject())
                    var temp_price = 0;
                    for(var i=0; i<account_carts.length; i++){
                        if(user.email == account_carts[i].email){
                            temp_price += convert_price(account_carts[i].price);
                        }
                    }
                    var total_price = temp_price + 30000;
                    res.render('pay', {temp_price, total_price});
                })
        }else{
            res.render('login');
        }
    }

    order(req,res,next){
        
        account_carts.find({})
            .then(account_carts => {
                var user = req.session.authUser;
                var order_info = req.body;
                order_info.email = req.session.authUser.email;
                account_carts = account_carts.map(account_carts => account_carts.toObject())
                var temp = 0;
                order_info.list_order = [];
                for(var i=0; i<account_carts.length; i++){
                    if(user.email == account_carts[i].email){
                        temp += 1;
                        var product = 'product_' + account_carts[i].id + '_' + account_carts[i].price;
                        order_info.list_order.push(product);
                    }
                }
                var order = new orders(order_info);
                order.save()
                    .then(() => res.redirect('/'))
                    .catch(error => {})
            })
    }
}

module.exports = new payController();
