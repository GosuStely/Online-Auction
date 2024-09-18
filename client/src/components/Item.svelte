<script>
    import img from "../assets/MysteryBox.webp";
    export let productName;
    export let items;
    export let bids = [];
    export let startingPrice;
    export let auctionEndDate;
    export let category;
    const getBiggestBid = () => {
        let biggestBid = 0;
        bids.forEach((element) => {
            if (element > biggestBid) {
                biggestBid = element;
            }
        });
        return biggestBid;
    };
    const getTimeLeft = async () => {
        const currTime = new Date();
        const timeLeftMs = auctionEndDate - currTime.getTime();
        const hours = Math.floor(timeLeftMs / (1000 * 60 * 60));
        const minutes = Math.floor(
            (timeLeftMs % (1000 * 60 * 60)) / (1000 * 60),
        );
        return `${hours}h ${minutes}m`;
    };
</script>

<button
    class="max-w-sm overflow-hidden size-full p-10 shadow-md relative hover:shadow-xl transition-shadow"
>
    <div class="w-full flex flex-wrap">
        <img src={img} alt="Mystery Box" class="w-full rounded-t-xl" />
    </div>
    <h2 class="font-bold text-xl">{productName}</h2>
    <h3 class="font-semibold">
        {bids.length == 0 ? startingPrice : getBiggestBid()}
        <span class="text-green-800">$</span>
    </h3>
    <h3 class="absolute bottom-2 right-5">{getTimeLeft()} h</h3>
</button>
