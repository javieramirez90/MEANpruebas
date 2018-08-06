const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config/database')

module.exports = (router) => {
  
  
  router.post('/register', (req, res) => {
    
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


  router.get('/checkEmail/:email', (req, res) => {
    if(!req.params.email) {
      res.json({success: false, message: "Debes proporcionar un correo"});
    } else {
      User.findOne({email: req.params.email}, (err, user) => {
        if(err) {
          res.json({success: false, message: err})
        } else {
          if(user) {
            res.json({success: false, message: 'Este correo ya ha sido registrado'});
          } else {
            res.json({success: true, message: "Correo disponible"});
          }
        }
      });
    }
  });

  router.get('/checkUsername/:username', (req, res) => {
    if(!req.params.username) {
      res.json({success: false, message: "Debes proporcionar un nombre de usuario"});
    } else {
      User.findOne({username: req.params.username}, (err, user) => {
        if(err) {
          res.json({success: false, message: err})
        } else {
          if(user) {
            res.json({success: false, message: 'Este nombre de usuario ya está en uso'});
          } else {
            res.json({success: true, message: "Nombre de usuario disponible"});
          }
        }
      });
    }
  });


  //____________________________________
  router.post('/login', (req, res) => {
    if (!req.body.email) {
      res.json({ success: false, message: 'No se ha introducido correo electrónico.' }); 
    } else {
      if (!req.body.password) {
        res.json({ success: false, message: 'No se ha proporcionado contraseña.' }); 
      } else {
        User.findOne({ email: req.body.email}, (err, user) => {  
          if (err) {
            res.json({ success: false, message: err }); 
          } else {
            if (!user) {
              res.json({ success: false, message: 'No se encuentra el registro  del usuario.' }); 
            } else {
              const validPassword = user.comparePassword(req.body.password); 
              if (!validPassword) {
                res.json({ success: false, message: 'El password no coincide.' }); 
              } else {
                const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '2h' }); 
                res.json({ success: true, message: 'Inicio de sesión correcto', token: token, user: { email: user.email } }); //jsonwebtoken método para mantener la sesión iniciada
              }
            }
          }
        });
      }
    }
  });
  
  return router;
}