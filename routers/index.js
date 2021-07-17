const all_productsRouter = require('./all_products');
const adminRouter = require('./admin');
const homeRouter = require('./home');
const loginRouter = require('./login');
const registryRouter = require('./registry');
const searchRouter = require('./search');
const cartRouter = require('./cart');
const payRouter = require('./pay');

function route(app){
    app.use('/pay', payRouter);

    app.use('/cart', cartRouter);

    app.use('/search', searchRouter);

    app.use('/login', loginRouter);

    app.use('/registry', registryRouter);

    app.use('/admin', adminRouter);
    
    app.use('/all-products', all_productsRouter);
    
    app.get('/', homeRouter);
}

module.exports = route;
