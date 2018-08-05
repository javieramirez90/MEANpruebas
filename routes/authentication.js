const User = require('../models/user')

module.exports = (router) => {

  router.post('/register', (req, res) => {
    // req.body.email;
    // req.body.username;
    // req.body.password;

    if(!req.body.email) {
      res.json({success: false, message: "Debes proporcionar un correo válido"});
    } else {
      if (!req.body.username){
        res.json({success: false, message: "Debes proporcionar un nombre de ususario"});
      } else {
        if(!req.body.password){
          res.json({success: false, message: "Debes proporcionar una contraseña válida"});
        } else {
          

          let user = new User({
            email: req.body.email.toLowerCase(),
            username: req.body.username.toLowerCase(),
            password: req.body.password
          });
          user.save((err) => {
            if(err){
              if(err.code === 11000) {
                res.json({success: false, message: "El usuario ya se encuentra registrado"});  
              } else {
                if(err.errors) {
                  if(err.errors.email){
                    res.json({success: false, message: err.errors.email.message});
                  } else {
                    if(err.errors.username){
                      res.json({success: false, message: err.errors.username.message});
                    } else {
                      if(err.errors.password){
                        res.json({success: false, message: err.errors.password.message});
                      }else {
                        res.json({success: false, message: err});
                      }
                    }
                  }
                } else {
                  res.json({success: false, message: "Imposible guardar usuario. Error: ", err});
                }
              }
            } else {
              res.json({success: true, message: "Cuenta registrada"});
            }
          });
        }
      }
    }
  });
  
  return router;
}