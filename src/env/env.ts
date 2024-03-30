import dotenv from "dotenv";
dotenv.config();

const env = {
  port: process.env.PORT,
  userMongoDB: process.env.USER_MONGODB,
  passwordMongoDB: process.env.PASSWORD_MONGODB,
  databaseMongo: process.env.DATABASE_MONGODB,
};

export default env;
