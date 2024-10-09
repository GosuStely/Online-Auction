import mysteryBoxes from "../data/mysteryBoxes.js";
import getBiggestBid from "../Helpers/BiggestBid.js";
export const getAllMysteryBoxes = (req, res) => {
    const { categories, name,search } = req.query;

    let filteredBoxes = mysteryBoxes;

    // Convert categories query to an array
    const categoriesArray = categories ? categories.split(',') : [];

    if (categoriesArray.length > 0) {
        filteredBoxes = filteredBoxes.filter(box =>
            categoriesArray.some(category =>
                box.category.toLowerCase().includes(category.toLowerCase())
            )
        );
    }

    if (name){
        filteredBoxes = filteredBoxes.filter((box,index) => getBiggestBid(index).name.toLowerCase().includes(name.toLowerCase()));
    }

    if (search) {
        filteredBoxes = filteredBoxes.filter(box =>
            box.productName.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (filteredBoxes.length === 0) {
        return res.status(404).json({ message: "No mystery boxes found." });
    }

    res.status(200).json(filteredBoxes);
};
export const getMysteryBox = (req, res) => {
    const id = Number.parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= mysteryBoxes.length) {
        return res.status(400).json({ message: "Invalid ID or out of bounds" });
    }
    console.log("Sent:",mysteryBoxes[id]);
    const bidHolder = getBiggestBid(id);
    if (bidHolder.amount === 0) {
        bidHolder.amount = mysteryBoxes[id].startingPrice;
    }
    res.status(200).json({mysteryBox: mysteryBoxes[id],bidHolder: bidHolder});

};
export const postMysteryBox = (req, res) => {
    const mysteryBox = req.body;
    console.log(mysteryBox);
    if (!mysteryBox) {
        res.status(400).json({message: "Empty Body"});
    } else if (!mysteryBox.productName || !mysteryBox.items || !mysteryBox.startingPrice || !mysteryBox.auctionEndDate || !mysteryBox.category) {
        res.status(400).json({message: "Wrong input : Missing arguments"});
    } else {
        mysteryBox.bids = [];
        mysteryBoxes.push(mysteryBox);
        res.status(200).json({message: "MysteryBox Created", mysteryBox});
    }
};
export const deleteMysteryBox = (req, res) => {
    const id = Number.parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= mysteryBoxes.length) {
        return res.status(400).json({ message: "Invalid ID or out of bounds" });
    }
    const deletedBox = mysteryBoxes.splice(id, 1);
    res.status(200).json({ message: "MysteryBox deleted", deletedBox });

};
export const postBid = (req, res) => {
    const id = req.params.id;
    const bid = req.body;
    console.log("received",bid);
    if (id >= mysteryBoxes.length || id < 0) {
        res.status(400).json({message: "id out of bound"});
    }
    if (!bid) {
        res.status(400).json({message: "Empty Body"});
    } else if (!bid.amount || !bid.name) {
        res.status(400).json({message: "Wrong input : Missing arguments"});
    } else {
        const bidHolder = getBiggestBid(id);
        bid.amount += bidHolder.amount;
        mysteryBoxes[id].bids.push(bid);
        res.status(200).json({message: "Bid created", mysteryBox: mysteryBoxes[id], bidHolder:bid});
    }
}