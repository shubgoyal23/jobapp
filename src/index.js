import "dotenv/config";
import app from "./app.js";
import ConnectDb from "./connectDb/ConnectDb.js";

const PORT = process.env.PORT;

ConnectDb()
   .then(() => {
      app.listen(PORT, () => {
         console.log(`server started at http://localhost:${PORT}`);
      });
   })
   .catch((error) => console.log(error));
