const User = require('../models/user'); 
const Program = require('../models/program'); 
const jwt = require('jsonwebtoken'); 
const config = require('../config/database'); 

module.exports = (router) => {


  //consultar programas
  router.get('/allPrograms', (req, res) => { 
    Program.find({}, (err, programs) => { 
      if (err) {
        res.json({ success: false, message: err }); 
      } else {
        if (!programs) {
          res.json({ success: false, message: 'No se han encontrado programas' }); 
        } else {
          res.json({ success: true, programs: programs }); 
        }
      }
    }).sort({ '_id': -1 }); 
  });


  //consulta por programa

  router.get('/singleProgram/:id', (req, res) => {
    if (!req.params.id) {
      res.json({ success: false, message: 'No se encontró programa' }); 
    } else {
      Program.findOne({ _id: req.params.id }, (err, program) => {
        if (err) {
          res.json({ success: false, message: 'No se encontró programa' }); 
        } else {
          if (!program) {
            res.json({ success: false, message: 'No se encontró programa' }); 
          } else {
            //consultar programas por ususario
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              if (err) {
                res.json({ success: false, message: err }); 
              } else {
                if (!user) {
                  res.json({ success: false, message: 'No has iniciado sesión' });
                } else {
                  
                  
                    res.json({ success: true, program: program }); 
                  
                }
              }
            });
          }
        }
      });
    }
  });

  //cancelar inscripción

  router.delete('/deleteProgram/:id', (req, res) => {
    
    if (!req.params.id) {
      res.json({ success: false, message: 'Selecciona curso.' }); 
    } else { 
      Program.findOne({ _id: req.params.id }, (err, program) => {
        if (!program) {
            res.json({ success: false, messasge: 'No te has inscrito a este programa' }); 
          } else {
            
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              program.remove((err) => {
                if (err) {
                  res.json({ success: false, message: err }); 
                } else {
                  res.json({ success: true, message: 'Hemos borrado tu inscripción a este programa' }); 
                }
                    });
                  });
                }
              });
            }
          });
        
        return router;
      };