const accounts = require('../models/accounts');

class registryController{
    index(req,res){ 
        res.render('registry');
    }
    store(req,res,next){
        accounts.find({})
            .then(accounts_ => {
                accounts_ = accounts_.map(accounts => accounts.toObject());
                const account = new accounts(req.body);
                account.is_admin = false;
                var check = false;
                var error = 'Email này đã có người sử dụng';
                for(var i =0; i < accounts_.length; i++){
                    if (accounts_[i].email == account.email){
                        check = true;
                        break;
                    }
                }
                if (check){
                    
                    res.render('registry', {
                        error,
                        fullname: account.fullname,
                        email:account.email,
                        phone: account.phone,
                        password: account.password,
                    });
                }
                else{   
                    account.save()
                        .then(() => res.redirect('/login'))
                        .catch(next)
                }
            })
            .catch(next);
    }
}
module.exports = new registryController();
