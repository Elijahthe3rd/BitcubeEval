const { Client } = require("pg");
const { connection } = require("./dbConnector");

require("dotenv/").config();

let client = new Client({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "projectdb",
});

let cmd = "select";
let identifier = "*";
let table_name = "student";

let DBConnectionManager = async() => {
    try {
        await client.connect((err) => {
            if (err) {
                console.error(`connection failed ${err}`);
            } else {

                // dropTables(tableName)

                console.log("\nconnection to database successful\n\npress Ctrl+C to terminate the db connection")
                    // console.clear()
                    // createTables();
                    // QueryFullDbTable();
                    // // sqlInsertToTable();
                    // // QueryFullDbTable()
                    // // sqlInsertToTable('insert', 'into', tableName)
            }
        });
    } catch (error) {
        client.query("ROLLBACK");
        return error;
    }
};

async function createTables() {
    const createTableQuery = `CREATE TABLE IF NOT EXISTS student
    (id SERIAL PRIMARY KEY,
        fore_names TEXT [] NOT NULL,
        surname VARCHAR(50) NOT NULL,
        date_of_birth Date NOT NULL, 
        email varchar(50) NOT NULL, 
        degree TEXT [] NOT NULL, 
        first_name varchar(50) NOT NULL, 
        full_name varchar(200) NOT NULL);`;

    try {
        // dropTables(table_name)
        await client.query("BEGIN");

        await client.query(createTableQuery);
        console.log(`\n\ Table $ { table_name } created successfully.\n `);
        await client.query("COMMIT");
    } catch (error) {
        console.log({ message: error });

        client.query("ROLLBACK");
    } finally {
        console.log("\t\tplease wait still processing...\n");
        client.end;
    }
}

async function QueryFullDbTable() {
    try {
        // dropTables(table_name)
        await client.query("BEGIN");

        let { rows } = await client.query("SELECT * FROM student");

        console.table(rows);

        await client.query("COMMIT");
    } catch (error) {
        console.log({ message: error });

        client.query("ROLLBACK");
    } finally {
        client.end;
    }
}


let sqlInsertToTable = async() => {

    try {
        await client.query('BEGIN')
        await client.query(`INSERT INTO student(id,fore_names,surname,date_of_birth,email,degree,first_name,full_name)
        values(3,'{"Clive MMaphuti"}','Sepuru','/1995/02/02','clive.hm@yahoo.com','{"advanced driving"}','Hector','Hector Makgabo Sepuru');`)
    } catch (error) {
        console.log('something went side ways ' + error)
        await client.query('ROLLBACK')
    } finally {
        console.log('\n\t insertion progress in execution please wait\n')
        client.end

    }
}

DBConnectionManager();