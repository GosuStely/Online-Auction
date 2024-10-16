import express from 'express';
import cors from 'cors';
import auth from './routes/auth.js';
import mysteryBox from "./routes/MysteryBoxRouter.js";
import user from './routes/UserRouter.js';
const app = express()
const port = process.env.PORT || 3000


app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use("/api/tokens", auth);
app.use("/api/items", mysteryBox);
app.use("/api/users", user);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})