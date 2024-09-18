import mysteryBoxes from "../data/mysteryBoxes.js";
export const getAllMysteryBoxes = (req, res) => {
    res.status(200).json(mysteryBoxes);
};
export const getMysteryBox = (req, res) => {
    const id = req.params.id;
    if (id < mysteryBoxes.length) {
        console.log("Sent:",mysteryBoxes[id]);
        res.status(200).json(mysteryBoxes[id]);
    } else{
        res.status(400).json({message: "Not Found"});
    }
};
export const postMysteryBox = (req, res) => {
    const mysteryBox = req.body;
    console.log(mysteryBox);
    if (!mysteryBox) {
        res.status(400).json({message: "Empty Body"});
    } else if (!mysteryBox.productName || !mysteryBox.items || !mysteryBox.startingPrice || !mysteryBox.auctionEndDate || !mysteryBox.category) {
        res.status(400).json({message: "Wrong input : Missing arguments"});
    } else {
        res.status(200).json({message: "MysteryBox Created"});
    }
};
export const deleteMysteryBox = (req, res) => {
    const id = req.params.id;
    if (id >= mysteryBoxes.length) {
        res.status(400).json({message: "id out of bound"});
    } else{
        res.status(200).json(mysteryBoxes.splice(id, 1));
    }
};