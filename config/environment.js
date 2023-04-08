require("dotenv").config();

const db_name = process.env.MYSQLDATABASE;
const db_user = process.env.MYSQLUSER;
const db_pass = process.env.MYSQLPASSWORD;
const db_host = process.env.MYSQLHOST;
const db_port = process.env.MYSQLPORT;


module.exports = {
    db_name,
    db_user,
    db_pass,
    db_host,
    db_port
}

// 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