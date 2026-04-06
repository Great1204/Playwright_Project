import mysql from 'mysql2/promise'
import {details} from "./testData"


export async function getConnection(){
    return await mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Nila@4125',
    database : 'mydb',
    port : 3306
    })

}
export async function createTable(){
    const conn =await getConnection();
    conn.execute(`
        CREATE TABLE AutomationExercise (id INT PRIMARY KEY AUTO_INCREMENT, Username VARCHAR(50) NOT NULL ,Email VARCHAR(50) NOT NULL UNIQUE, Password VARCHAR(50) NOT NULL ) `  )
    }

export async function storeValues(){
    const conn = await getConnection();
  const [values] = conn.execute(`
        INSERET INTO  AutomationExercise (Username ,Email , Password ) VALUES (${details.username},${details.email}, ${details.password}) `  )
        return values;
    }




// export async function storeUserPass(username,password){
//     const conn =await getConnection();
//     conn.execute(`
//         insert into users (username,pass_word)values (?,?)`,[username,password]
//     )
//     await conn.end();
// }
// export async function getUser() {
//     const conn = await getConnection();
//      const [rows] = await conn.execute(
//         'SELECT username, pass_word FROM users LIMIT 2'
//     );

//     await conn.end();
//     return rows[0];

// }


