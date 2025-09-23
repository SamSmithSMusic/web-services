import {MongoClient} from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.URL;

export const client = new MongoClient(URL);