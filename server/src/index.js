import express from 'express';
import cors from 'cors';
const app = express()
const port = 3000

import auth from './routes/auth.js';
import users from './data/users.js';
import mysteryBoxes from './data/mysteryBoxes.js';

app.use("/auth", auth);

app.use(cors({
  origin: 'http://localhost:5173'  // Allow only this origin
}));


app.get("/api/items",(req,res) =>{
  console.log(req.hostname);
  res.status(200).json(mysteryBoxes);
});

app.get("/api/items/:id",(req,res) =>{
  const id = req.params.id;
  res.status(200).json(mysteryBoxes[id]);
});

app.post("/api/items",(req, res) =>{
  const user = req.body;
  users.push(mysteryBoxes);
  res.status(201).json(mysteryBoxes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})