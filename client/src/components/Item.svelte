<script>
    import img from "../assets/MysteryBox.webp";
    export let index;
    export let productName;
    export let bids = [];
    export let startingPrice;
    export let auctionEndDate;
    let biggestBid = null;
    let time = "";
    const getBiggestBid = () => {
        let biggestBider = {
            amount: 0,
            name: null,
        };
        bids.forEach((element) => {
            if (element.amount > biggestBider.amount) {
                biggestBider = element;
            }
        });
        biggestBid = biggestBider;
    };
    const getTimeLeft = () => {
        const endDate = new Date(auctionEndDate);
        const currTime = new Date();
        const timeLeftMs = endDate.getTime() - currTime.getTime();
        if (timeLeftMs < 0) {
            time = `Finished`;
            return time;
        }
        const days = Math.floor(timeLeftMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeLeftMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
            (timeLeftMs % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((timeLeftMs % (1000 * 60)) / 1000);
        time = `${days} Days ${hours} Hours ${minutes} Mins ${seconds} Secs`;
        return time;
    };
    getBiggestBid();
    setInterval(getTimeLeft, 1000);
</script>

<a
    href="/details:{index}"
    class="max-w-sm overflow-hidden size-fit pb-14 rounded-t-xl shadow-sm relative border border-neon-blue-light hover:shadow-xl transition-all shadow-neon-blue-light"
>
    <div class="w-full flex flex-wrap">
        <img src={img} alt="Mystery Box" class="w-full" />
    </div>
    <h2 class="font-bold text-sm sm:text-sm md:text-base 2xl:text-xl ml-5 mt-2">
        {productName}
    </h2>
    <h3 class="font-semibold text-sm sm:text-sm md:text-base ml-5">
        {bids.length == 0 ? startingPrice : biggestBid.amount}
        <span class="text-green-800">$</span>
        {#if biggestBid.name}
            By {biggestBid.name}
        {/if}
    </h3>
    {#await getTimeLeft()}
        <p>Loading...</p>
    {:then}
        <h5
            class="absolute bottom-2 left-5 text-wrap text-sm sm:text-sm lg:text-base"
        >
            {time}
        </h5>
    {/await}
</a>
