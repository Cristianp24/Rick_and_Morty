const data = require('../utils/users');


const login = (req,res) => {
    let { email, password } = req.query;
    console.log({email,password});

}
     
module.exports = login;