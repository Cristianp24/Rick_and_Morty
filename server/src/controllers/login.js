const user = require('../utils/users');


const login = (req,res) => {
    let { email, password } = req.query;
    console.log({email,password});
    if(user[0].email === email && user[0].password === password){
        res.status(200).json({access:true})
    }
    else {
        res.status(200).json({access:false})
    }

}
     
module.exports = login;