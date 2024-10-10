<script>
    import tokenStore from "../stores/tokenStore";
    import { get } from "svelte/store";
    import Item from "../components/Item.svelte";
    import page from "page";
    import RedirectButton from "../components/buttons/RedirectButton.svelte";
    let items = [];
    let message = "";
    let profile = {
        isAdmin: false,
    };
    const token = get(tokenStore);

    const getItemData = async () => {
        const address = `http://localhost:3000/api/items?name=${encodeURIComponent(profile.username)}`;
        const response = await fetch(address, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (data.message) {
            message = data.message;
        } else {
            items = data;
        }
        console.log(items);
    };
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
                getItemData();
            } else {
                alert(data.message);
                page("/login");
            }
        } catch (error) {
            alert("An error occurred while fetching the profile.");
            page("/login");
        }
    }
    const logOut = () => {
        tokenStore.set(null);
    };
</script>

<main class="bg-neon-black text-white">
    <RedirectButton
        label="Log out"
        redirectPath="/login"
        position="mt-5"
        action={logOut}
    />
    {#await fetchProfile()}
        <p class="h-screen">Loading...</p>
    {:then}
        <h2 class="text-center pt-5 text-xl">
            Auctions where you are leading:
        </h2>
        <div
            class="grid grid-cols-1 min-h-screen gap-10 py-10 px-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        >
            {#if message}
                <p>{message}</p>
            {:else}
                {#each items as item, index}
                    <Item {...item} {index}></Item>
                {/each}
            {/if}
        </div>
    {/await}
</main>
