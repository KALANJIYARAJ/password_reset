const mongodb = require("mongodb");
const mongoclient = mongodb.MongoClient;
const app = express();
const dotenv = require("dotenv").config();
const URL = process.env.DB;
const bcrypt = require('bcrypt');

app.use(
  cors({
    orgin:"http://localhost:3000/",
  })
);

app.use(express.json());




app.listen(process.env.PORT || 3003);