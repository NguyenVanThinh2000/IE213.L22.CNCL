const products = require('../models/products');
const {mongooseToObject} = require('../util/mongoose');
class adminController{
    index(req,res,next){
        if (req.session.isAuthenticated){
            products.find({})
                .then(products => {
                    products = products.map(products => products.toObject());
                    res.render('admin', {products});
                })
                .catch(next);
        }else{
            res.render('login');
        }
    }

    add(req,res,next){
        res.render('add_products');
    }
    store(req,res,next){
        var l = 0;
        const product = new products(req.body);
        products.find({})
        .then(products => {
            products = products.map(products => products.toObject());
            l = products.length;
            // const formData = req.body;
            product.id = l+1;
            product.save()
                .then(() => res.redirect('/admin'))
                .catch(error => {})
        })
        .catch(next);
    }

    edit(req,res,next){
        products.findById(req.params.id)
            .then(products => res.render('edit_products', {
                product : mongooseToObject(products)
            }))
            .catch(next);
    }

    update(req,res,next){
        products.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin'))
            .catch(next)
    }

    delete(req,res,next){
        products.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new adminController();
