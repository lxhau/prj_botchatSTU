let mysql = require('mysql');

    let connection = mysql.createConnection({
      host: 'db4free.net',
      user: 'huxle99',
      password: 'Fsb.Uwnjkg7!d7S',
      database: 'stu_mark',
      port: 3306
        // host: 'localhost',
        // user: 'root',
        // password: '',
        // database: 'stu_mark',
        // port: 3306
    });

    connection.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
        console.log('Connected to the MySQL server.');
      });


module.exports=connection;