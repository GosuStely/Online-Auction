import express from 'express';
import {getAllMysteryBoxes,getMysteryBox,postMysteryBox,deleteMysteryBox, postBid} from '../controllers/MysteryBoxController.js'
const router = express.Router();

router.get('/',getAllMysteryBoxes)
router.get('/:id', getMysteryBox)
router.post('/', postMysteryBox)
router.delete('/:id', deleteMysteryBox)
router.post('/:id/bids', postBid)

export default router;