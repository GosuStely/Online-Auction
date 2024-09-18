import express from 'express';
import {getAllMysteryBoxes,getMysteryBox,postMysteryBox,deleteMysteryBox} from '../controllers/MysteryBoxController.js'
const router = express.Router();

router.get('/',getAllMysteryBoxes)
router.get('/:id', getMysteryBox)
router.post('/', postMysteryBox)
router.delete('/:id', deleteMysteryBox)

export default router;