const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

require('dotenv').config()


const app = express();

// importing routes
const customersRoutes = require('./routes/customers');

// setings
app.set('port', process.env.PORT || 3000 );
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

// minddlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  port: 3306,
  database: 'crudnodejsmysql'
}, 'single'));

  // para agregar a la base de datos
app.use(express.urlencoded({
  extended: false //por que no va a enviar cosas como imagenes, o datos codificados o cosas complicadas
}));

// routers

app.use('/', customersRoutes);

// static files

app.use(express.static(path.join(__dirname,'views')));

app.listen(app.get('port'), () => {
  console.log("server on port 3000");
});