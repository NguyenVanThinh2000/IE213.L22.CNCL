const products = require('../models/products');

class all_productsController{

    index(req,res, next){
        // res.render('all_products');
        products.find({})
            .then(products => {
                products = products.map(products => products.toObject());
                var names = 'Tất cả sản phẩm';
                var product = products;
                res.render('product', {product, names});
            })
            .catch(next);
    };
    show(req, res, next){
        if (req.params.slug === 'ban'){
            products.find({})
            .then(ban => {
                var temp = ban.map(products => products.toObject());
                var ban = [];
                var l = temp.length;
                for (var i=0; i<l; i++){
                    if (temp[i].type == 'ban')
                        ban.push(temp[i]);
                };
                var product = ban;
                var names = 'Bàn';
                res.render('product', {product, names});
            })
            .catch(next);
        }
        if (req.params.slug === 'ghe'){
            products.find({})
            .then(ghe => {
                var temp = ghe.map(products => products.toObject());
                var ghe = [];
                var l = temp.length;
                for (var i=0; i<l; i++){
                    if (temp[i].type == 'ghe')
                        ghe.push(temp[i]);
                };
                var product = ghe;
                var names = 'Ghế';
                res.render('product', {product, names});
            })
            .catch(next);
        }
        if (req.params.slug === 'ke_sach'){
            products.find({})
            .then(ke_sach => {
                var temp = ke_sach.map(products => products.toObject());
                var ke_sach = [];
                var l = temp.length;
                for (var i=0; i<l; i++){
                    if (temp[i].type == 'ke_sach')
                        ke_sach.push(temp[i]);
                };
                var product = ke_sach;
                var names = 'Kệ sách';
                res.render('product', {product, names});
            })
            .catch(next);
        }
        if (req.params.slug === 'tu_quan_ao'){
            products.find({})
            .then(tu_quan_ao => {
                var temp = tu_quan_ao.map(products => products.toObject());
                var tu_quan_ao = [];
                var l = temp.length;
                for (var i=0; i<l; i++){
                    if (temp[i].type == 'tu_quan_ao')
                        tu_quan_ao.push(temp[i]);
                };
                var product = tu_quan_ao;
                var names = 'Tủ quần áo';
                res.render('product', {product, names});
            })
            .catch(next);
        }
    };

    detail(req, res, next){
        products.find({})
            .then(detail => {
                var temp = detail.map(products => products.toObject());
                var l = temp.length;
                var detail;
                for (var i=0; i<l; i++){
                    if (temp[i].name === req.params.id){
                        detail = temp[i];
                        break;
                    }
                };
                res.render('detail', {detail});
            })
            .catch(next);
    };
}
module.exports = new all_productsController();
