var mysql      = require('mysql2');


var connection = mysql.createConnection({
  host     : process.env.MYSQL_HOST,
  port     : process.env.MYSQL_PORT,
  user     : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DATABASE,
});

connection.connect((err)=>{
    if(err) console.log("Error connecting to database",err)
    else{
        console.log("Database Connected")
    return connection;
    }
    
});


module.exports = connection;

