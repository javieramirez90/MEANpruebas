const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://jajavier:donna123@ds147589.mlab.com:47589/mean-project-3'; 
  process.env.databaseName = 'mean-project-3'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/mean-project-3'; 
  process.env.databaseName = 'mean-project-3'; // Database name
}