<script>
    import Filter from "../components/Filter.svelte";
    import Search from "../components/Search.svelte";
    import Item from "../components/Item.svelte";
    import RedirectButton from "../components/buttons/RedirectButton.svelte";
    // @ts-ignore
    import tokenStore from "../stores/tokenStore";
    import { get } from "svelte/store";
    let items = [];
    let filterOptions = [];
    let selectedFilters = new Set();
    let filteredItems = [];
    let profile = {
        isAdmin: false,
    };
    const getItemData = async () => {
        const address = "http://localhost:3000/api/items";
        const response = await fetch(address);
        items = await response.json();
        getFilterOptions();
        applyFilter();
    };
    const getFilterOptions = () => {
        let uniqueFilters = new Set();
        items.forEach((element) => {
            const tokens = element.category;
            uniqueFilters.add(tokens);
        });
        filterOptions = Array.from(uniqueFilters);
    };
    const applyFilter = () => {
        if (selectedFilters.size === 0) {
            filteredItems = items;
        } else {
            filteredItems = items.filter((item) =>
                selectedFilters.has(item.category),
            );
        }
    };
    const handleFilterChange = (event) => {
        const { isChecked, filter } = event.detail;
        if (isChecked) {
            selectedFilters.add(filter);
        } else {
            selectedFilters.delete(filter);
        }
        applyFilter();
    };
    const handleSearch = (event) => {
        const query = event.detail;
        if (query.trim()) {
            filteredItems = items.filter((item) =>
                item.productName.toLowerCase().includes(query),
            );
        } else {
            applyFilter();
        }
    };
    // @ts-ignore
    async function fetchProfile() {
        const token = get(tokenStore);
        if (!token) {
            alert("You need to be logged in to view the profile.");
            window.location.pathname = "/login";
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
                window.location.pathname = "/login";
            }
        } catch (error) {
            alert("An error occurred while fetching the profile.");
            window.location.pathname = "/login";
        }
    }
    setInterval(getItemData, 60_000);
</script>

<main class="bg-neon-black text-white">
    {#await fetchProfile()}
        <p class="h-screen">Loading...</p>
    {:then}
        <section class="flex">
            <section class="h-1/2 w-2/5 pt-20 sticky top-0 md:w-3/12 xl:w-2/12">
                {#each filterOptions as filter}
                    <Filter {filter} on:filter={handleFilterChange} />
                {/each}
            </section>
            <section class=" min-h-dvh w-11/12">
                <div class="flex justify-center mt-10 relative">
                    <Search on:search={handleSearch} />
                    {#if profile.isAdmin}
                        <RedirectButton
                            redirectPath="/create"
                            label="Create"
                            position="absolute"
                            action
                        />
                    {/if}
                </div>
                <div
                    class="grid grid-cols-1 min-h-screen gap-10 py-10 px-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
                >
                    {#each filteredItems as item, index}
                        <Item {...item} {index}></Item>
                    {/each}
                </div>
            </section>
        </section>
    {/await}
</main>
