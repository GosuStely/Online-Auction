<script>
    import MainButton from "../components/buttons/MainButton.svelte";
    import img from "../assets/MysteryBox.webp";
    import Bid from "../components/Bid.svelte";
    import { get } from "svelte/store";
    import tokenStore from "../stores/tokenStore";
    import RedirectButton from "../components/buttons/RedirectButton.svelte";
    import page from "page";
    export let params;
    const id = params.params.id.split(":")[1];

    const address = `http://localhost:3000/api/items/${id}`;
    let profile = null;
    let holder = "";
    let message = "";
    const token = get(tokenStore);
    async function fetchProfile() {
        if (!token) {
            alert("You need to be logged in to view the profile.");
            page("/login");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/users", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (response.ok) {
                profile = data;
                return data;
            } else {
                alert(data.message);
                page("/login");
            }
        } catch (error) {
            alert("An error occurred while fetching the profile.");
            page("/login");
        }
    }
    const getItemData = async () => {
        const response = await fetch(address, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (response.ok) {
            console.log(data);
            holder = data.bidHolder.name;
            return data;
        } else {
            alert("Bad response");
        }
    };
    const bid = async (bid) => {
        if (holder === profile.username) {
            message = "You cant bid while holding!";
            return;
        }
        const data = { name: profile.username, amount: bid };
        try {
            const response = await fetch(address + "/bids", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (response.ok) {
                message = result.message;
                holder = profile.username;
            } else {
                message = result.message;
            }
        } catch (error) {
            message = error;
        }
    };
    const isAuctionEnded = (auctionEndDate) => {
        const endDate = new Date(auctionEndDate);
        const currTime = new Date();
        const timeLeftMs = endDate.getTime() - currTime.getTime();
        return timeLeftMs < 0;
    };
    const deletePage = async () => {
        try {
            const response = await fetch(address, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const result = await response.json();
            if (!response.ok) {
                message = result.message;
            }
        } catch (error) {
            message = error;
        }
    };
    const bidOneEuro = () => {
        bid(1);
    };
    const bidTwoEuro = () => {
        bid(2);
    };
    const bidFiveEuro = () => {
        bid(5);
    };
    fetchProfile();
</script>

<main class="bg-neon-black text-white h-screen flex px-10 py-20 gap-10">
    {#await getItemData()}
        <p>Loading...</p>
    {:then item}
        <section class="h-full w-2/5">
            <section class="w-fit h-fit">
                <img src={img} alt="Mystery Box" />
            </section>
            <h2 class="text-center pt-5 font-bold text-2xl">
                {item.mysteryBox.productName}
            </h2>
            {#if isAuctionEnded(item.mysteryBox.auctionEndDate)}
                <h2 class="text-center mt-5">{item.mysteryBox.items}</h2>
                <h2>
                    You owe
                    <span class="text-green-600">{item.bidHolder.amount}$</span>
                </h2>
            {:else}
                <section class="grid grid-cols-3 justify-center gap-5 pt-20">
                    <MainButton label="Bid 1 $" handleClick={bidOneEuro} />
                    <MainButton label="Bid 2 $" handleClick={bidTwoEuro} />
                    <MainButton label="Bid 5 $" handleClick={bidFiveEuro} />
                </section>
            {/if}
            <div class="flex justify-center pt-10">
                {#await fetchProfile() then data}
                    {#if data.isAdmin}
                        <RedirectButton
                            label="Delete"
                            redirectPath="/"
                            position="align-self-center"
                            action={deletePage}
                        />
                    {/if}
                {/await}
            </div>

            <p class="text-center pt-5">{message}</p>
        </section>
        <section class="h-full w-full flex gap-20">
            <section class="w-3/4">
                <h2 class="text-xl text-center">Description</h2>
                <p>
                    {item.mysteryBox.description}
                </p>
            </section>
            <section class="w-1/4 overflow-auto">
                <h2 class="text-xl text-center">Bid History</h2>
                {#each item.mysteryBox.bids.reverse() as { amount, name }}
                    <Bid {amount} {name} />
                {/each}
            </section>
        </section>
    {/await}
</main>
