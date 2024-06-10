import mongoose from "mongoose";

export default async function ConnectDb() {
   try {
      const connect = await mongoose.connect(
         process.env.MONGODB_URI + "/jobapp"
      );
      console.log("mongoDb connection sucess: ", connect.connection.host);
   } catch (error) {
      console.log("Error conneting DB", error);
      process.exit(1);
   }
}
