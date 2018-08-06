const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise;
const Schema = require('mongoose').Schema

const bcrypt = require('bcrypt-nodejs');

let emailLengthChecker = (email) => {
  if(!email) {
    return false;
  } else {
    if(email.length < 5 || email.length > 45){
      return false;
    } else {
      return true;
    }
  }
};

let validEmail = (email) => {
  if(!email){
    return false;
  } else {
    //tomado de internet
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email);
  }
}



const emailValidators = [
  {
    validator: emailLengthChecker, message: "El correo debe tener minimó 5 y máximo 30 caracteres"
  },
  {
    validator: validEmail, message: "El formato debe ser de un email válido"
  }
];

let usernameLengthChecker = (username) => {
  if(!username){
    return false;
  } else {
    if(username.length < 3 || username > 15){
      return false;
    } else {
      return true;
    }
  }
};

let validUsername = (username) => {
  if(!username) {
    return false;
  } else {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(username);
  }
};

const usernameValidators = [
  {
    validator: usernameLengthChecker, message: "El nombre de usuario debe tener minimó 4 y máximo 15 caracteres"
  },
  {
    validator: validUsername, message: "El nombre de usuario no debe tener ningún caracter especial"
  }
];

let passwordLengthChecker = (password) => {
  if(!password){
    return false;
  }else {
    if(password.length < 8 || password.length >35){
      return false;
    }else {
      return true;
    }
  }
};

let validPassword = (password) => {
  if (!password) {
    return false;
  } else {
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    return regExp.test(password);
  }
};

const passwordValidators = [
  {
    validator: passwordLengthChecker, message: "El password debe tener por lo menos 8 caracteres y no más de 35"
  },
  {
    validator: validPassword, message: "La contraseña debe tener al menos una letra mayúscula, un caracter especial y un número"
  }
]

const userSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true,
    validate: emailValidators
  },
  username: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true,
    validate: usernameValidators
  },
  password: {
    type: String,
    required: true,
    validate: passwordValidators
  }
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


//middleware for the userSchema

userSchema.pre('save', function(next) {
  if(!this.isModified('password'))
  return next();

  bcrypt.hash(this.password, null, null, (err,hash) => {
    if(err) return next(err);
    this.password = hash;
    next();
  })
});

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};


// userSchema.Schema.plugin();
module.exports = require('mongoose').model('User', userSchema);


//   firstName: String,
//   lastName: String,
//   lastName2: String,
//   email: String,
//   status: {
//     type: String,
//     enum: ['potential', 'client']
//   },
//   profile: {
//     type: Schema.Types.ObjectId,
//     ref: 'User'
//   },
//   programsInterestedIn: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Program'
//     }  
//   ],
//   programsEnrolledIn: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Program'
//     }
//   ]
// },{
//   timestamps:{
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
//   }
// });


