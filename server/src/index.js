import express from 'express';
import cors from 'cors';
const app = express()
const port = process.env.PORT || 3000

import auth from './routes/auth.js';
import mysteryBox from "./routes/MysteryBoxRouter.js";

app.use("/auth", auth);

app.use(cors({
  origin: 'http://localhost:5173'  // Allow only this origin
}));

app.use('/api/items',mysteryBox)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})