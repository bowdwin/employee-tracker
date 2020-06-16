const connection = mysql.createConnection({
  //add the creds
});

connection.connect();
module.exports = connection;
