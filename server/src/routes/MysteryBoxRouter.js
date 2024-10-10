import express from 'express';
import {getAllMysteryBoxes,getMysteryBox,postMysteryBox,deleteMysteryBox, postBid} from '../controllers/MysteryBoxController.js'
import authenticateToken from "../middleware/AuthenticateToken.js";
const router = express.Router();

router.get('/',authenticateToken, getAllMysteryBoxes)
router.get('/:id',authenticateToken, getMysteryBox)
router.post('/',authenticateToken, postMysteryBox)
router.delete('/:id',authenticateToken, deleteMysteryBox)
router.post('/:id/bids',authenticateToken, postBid)

export default router;