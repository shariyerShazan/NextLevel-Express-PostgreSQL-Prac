import { Pool } from "pg"
import dotenv from "dotenv"
dotenv.config()

// database and connection
export const pool = new Pool({
    connectionString: process.env.DATABASE_URL!,
    ssl: {
        rejectUnauthorized: false, 
      },
})
export const initDB = async () => {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          email VARCHAR(150) UNIQUE NOT NULL,
          age INT,
          phone VARCHAR(15),
          address TEXT,
          createdAt TIMESTAMP DEFAULT NOW(),
          updatedAt TIMESTAMP DEFAULT NOW()
        );
      `);
      await pool.query(`
        CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY ,
        userId INT REFERENCES users(id) ON DELETE CASCADE ,
        title VARCHAR(200) NOT NULL ,
        description TEXT ,
        completed BOOLEAN DEFAULT false ,
        dueDate DATE,
        createdAt TIMESTAMP DEFAULT NOW(),
        updatedAt TIMESTAMP DEFAULT NOW()
        )
        `)
  
      console.log("Database connected & users table ready");
    } catch (error : any) {
      console.error("Database initialization failed:", error);
    }
  };
  