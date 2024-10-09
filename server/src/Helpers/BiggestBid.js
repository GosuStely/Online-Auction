import mysteryBoxes from "../data/mysteryBoxes.js";
const getBiggestBid = (id) => {
    const biggestBid = {
        amount: 0,
        name: "",
    };
    mysteryBoxes[id].bids.forEach((element) => {
        if (element.amount > biggestBid.amount) {
            biggestBid.amount = element.amount;
            biggestBid.name = element.name;
        }
    });
    return biggestBid;
};
export default getBiggestBid;