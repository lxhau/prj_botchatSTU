let mysql = require('mysql');

    let connection = mysql.createConnection({
     
      // multipleStatements: true,
      //  host: 'localhost',
      //  user: 'root',
      //  password: '',
      //  database: 'stu_mark',
      //  port: 3306
    });

    connection.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
        console.log('Connected to the MySQL server.');
      });


module.exports=connection;