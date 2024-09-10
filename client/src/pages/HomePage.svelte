<script>
    import Header from "../components/Header.svelte";
    import Filter from "../components/Filter.svelte";
    import Search from "../components/Search.svelte";
    import Item from "../components/Item.svelte";
    let items = [];
    let filterOptions = [];
    let filteredItem = [];
    const getItemData = async () => {
        const address = "http://localhost:3000/api/items";
        const response = await fetch(address);
        items = await response.json();
        filteredItem = items;
        console.log(items);
        console.log(filteredItem);
        getFilterOptions();
    };
    getItemData();
    const getFilterOptions = () => {
        let uniqueFilters = new Set();
        items.forEach((element) => {
            const tokens = element.category;
            uniqueFilters.add(tokens);
        });
        uniqueFilters.forEach((e) => {
            filterOptions.push(e);
        });
        filterOptions = filterOptions;
    };
    const handleFilter = (filter) => {
        items.forEach((element) => {
            if (element.category != filter) {
                filteredItem.push(element);
            }
        });
        filteredItem = filteredItem;
    };
</script>

<body>
    <Header></Header>
    <main class="flex">
        <div class=" min-h-dvh w-2/12 pt-20">
            {#each filterOptions as filter}
                <Filter {filter} {handleFilter}></Filter>
            {/each}
        </div>
        <div class=" min-h-dvh w-11/12">
            <div class="flex justify-center mt-10">
                <Search></Search>
            </div>
            <div class="grid grid-cols-4 gap-20 min-h-screen py-10 px-5">
                {#each filteredItem as item}
                    <Item {...item}></Item>
                {/each}
            </div>
        </div>
    </main>
</body>
