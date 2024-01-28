// Kết nối với database

// get the client
import mysql from "mysql2/promise";

// create the connection to database
const poll = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "jwt",
  // password: 'password'
});

export default poll;
