import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from 'dotenv';

dotenv.config();
//console.log(process.env);
import postRoutes from "./routes/posts.js";


const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

var corsOptions = {
  origin: ['http://localhost:3000', 'https://lulumarionnette.herokuapp.com'],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'] };
app.use(cors(corsOptions));

//app.use(cors);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  });
  mongoose.connection.on('connected', () => {
      console.log('DB Connected :-)');
  });
  // .then(() => app.listen(5001, () => console.log(`MongoDB has been connected`)))
  // .catch((error) => console.log(`${error} did not connect`));


  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });

// Serve static assets if in production
if(process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, "client",'build', 'index.html'));
  });

  app.post('/blablabla', (req, res) => {
    res.send('POST request to the homepage')
  })

  // app.post('*', (req, res) => {
  //   const productImageURL = `https://lulumarionnettebucket.s3.eu-west-2.amazonaws.com/${req.file.filename}`
  //   return res.send(productImageURL)
  // });
}



//mongoose.set('useFindAndModify', false); // Error: `useFindAndModify` is an invalid option

