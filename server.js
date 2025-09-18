import { routes } from "./routes/index.js";
import express from "express";

const app = express();

app.use('/', routes);
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});