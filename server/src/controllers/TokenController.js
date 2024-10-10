import users from "../data/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import secret from "../data/secret.js";

const createToken = async (req, res) => {
    const { email, password } = req.body;
    const userExists = users.find((user) =>  user.email === email);
    if (!userExists) {
        return res.status(401).send({message:"Invalid credentials"});
    }
    const isMatch = await bcrypt.compare(password, userExists.password);
    if (!isMatch) {
        return res.status(401).send({message:"Invalid credentials"});
    }

    const token = jwt.sign({id: userExists.id, isAdmin: userExists.isAdmin}, secret, {expiresIn: "1h"});
    res.json({token});
}
export default createToken;