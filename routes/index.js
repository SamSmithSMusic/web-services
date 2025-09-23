import express from "express";
import lesson1 from "../controllers/lesson1.js";
import lesson2 from "../controllers/lesson2.js";

export const routes = express.Router();

routes.get('/', lesson1.sam);
routes.get('/wife', lesson1.wife);
routes.get('/contacts', lesson2.contacts);
routes.get('/contacts/:id', lesson2.contacts);