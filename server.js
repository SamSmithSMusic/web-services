import { sam, wife } from "./controllers/lesson1.js";
import express from "express";

const app = express();
 
app.get('/', sam);
app.get('/wife', wife);
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});