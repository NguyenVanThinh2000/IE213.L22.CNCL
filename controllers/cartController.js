const products = require('../models/products');
const account_carts = require('../models/account_carts');
const {convert_price} = require('../util/mongoose');
class cartController{
    index(req,res,next){
        account_carts.find({})
            .then(account_carts => {
                var order_account =[];
                account_carts = account_carts.map(account_carts => account_carts.toObject());
                for(var i=0; i<account_carts.length; i++){
                    if (account_carts[i].email == req.session.authUser.email){
                        order_account.push(account_carts[i]);
                    }
                }
                var price = 0;
                for(var j=0; j<order_account.length; j++){
                    price += convert_price(order_account[j].price);
                }
                res.render('cart', {order_account, price});
            })
            .catch(next);
    }

    add_to_cart(req,res,next){
        if (!req.session.isAuthenticated){
            res.redirect('/login');
        }
        else{
            products.find({})
                .then(products => {
                    var product;
                    products = products.map(products => products.toObject());
                    for(var i=0; i<products.length; i++){
                        if (products[i].id == req.params.id)
                        {
                            product = products[i];
                        }
                    }
                    var order = new account_carts({
                        email: req.session.authUser.email,
                        id: product.id,
                        price: product.price,
                        image: product.image,
                        name: product.name,
                    })
                    order.save()
                        .then(() => res.redirect('/cart'))
                        .catch(error => {})
                })
                .catch(next);   
        }
    }
    delete(req,res,next){
        account_carts.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new cartController();
