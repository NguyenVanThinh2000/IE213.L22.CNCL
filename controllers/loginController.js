const accounts = require('../models/accounts') 
class loginController{
    index(req,res,next){
        res.render('login');
    }
    check_login(req,res,next){
        accounts.find({})
            .then( accounts_ => {
                accounts_ = accounts_.map(accounts => accounts.toObject());
                var check = false;
                var account = req.body;
                for (var i=0; i < accounts_.length; i++){
                    if (accounts_[i].email == account.email && accounts_[i].password == account.password){
                        check = true;
                        account.password = undefined;
                        account.is_admin = accounts_[i].is_admin;
                        account.fullname = accounts_[i].fullname;
                        break;
                    }
                }
                if (check){
                    req.session.isAuthenticated = true;
                    req.session.authUser = account;
                    res.redirect('/');
                }
                else {
                    res.render('login', {error:'Email hoặc mật khẩu không đúng'})
                }
            })
    }
    logout(req,res,next){
        req.session.isAuthenticated = false;
        res.redirect('/')
    }
}
module.exports = new loginController();
