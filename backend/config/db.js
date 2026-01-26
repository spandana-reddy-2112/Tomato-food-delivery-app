import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://spandanalbf578:Kutty4234@cluster0.lgnsx7f.mongodb.net/food-del'
    );
    console.log("DB Connected");
  } catch (err) {
    console.error("DB connection error:", err.message);
    process.exit(1); // exit if DB fails to connect
  }
};
