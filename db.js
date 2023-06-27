var mysql      = require('mysql2');


var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  port     : process.env.DB_PORT,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE,
});

connection.connect((err)=>{
    if(err) console.log("Error connecting to database",err)
    else{
        console.log("Database Connected")
    return connection;
    }
    
});


module.exports = connection;

