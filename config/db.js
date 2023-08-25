import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URL);
    console.log(
      `Connected to the MongoDB Database ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error in mongoBD  :-${error}`.bgRed.white);
  }
};

export default connectDB;