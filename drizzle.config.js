

console.log("DB Connection String:", process.env.NEXT_PUBLIC_DB_CONNECTION_STRING);


/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
    }
  };