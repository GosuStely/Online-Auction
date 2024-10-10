<script>
    // @ts-nocheck
    import TextField from "../components/TextField.svelte";
    import MainButton from "../components/buttons/MainButton.svelte";
    import { get } from "svelte/store";
    import page from "page";
    import tokenStore from "../stores/tokenStore";
    let productName = "";
    let items = "";
    let category = "";
    let description = "";
    let startingPrice = "";
    let auctionEndDate = new Date();
    auctionEndDate.setMonth(auctionEndDate.getMonth() + 1);
    auctionEndDate = auctionEndDate.toJSON().slice(0, 10);
    let message = "";
    let profile = null;
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
                if (!data.isAdmin) {
                    alert("You don't have permission to be here !");
                    page("/login");
                }
                profile = data;
            } else {
                alert(data.message);
                page("/login");
            }
        } catch (error) {
            alert("An error occurred while fetching the profile.");
            page("/login");
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (productName.length < 3) {
            message = "Product name should be at least 3 symbols!";
            return;
        }
        if (category.length < 3) {
            message = "Category name should be at least 3 symbols!";
            return;
        }
        if (!description) {
            message = "There should be description!";
            return;
        }
        if (items.split(",").length < 4) {
            message = "There should be at least 4 items split by ','";
            return;
        }
        auctionEndDate = new Date(auctionEndDate);
        if (auctionEndDate.getTime() <= Date.now()) {
            message = "The deadline should be in the future!";
            return;
        }
        startingPrice = Number.parseInt(startingPrice);
        if (Number.isNaN(startingPrice)) {
            startingPrice = 10;
        }
        const data = {
            productName,
            items,
            category,
            description,
            startingPrice,
            auctionEndDate,
        };

        try {
            const response = await fetch("http://localhost:3000/api/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (response.ok) {
                alert("Item have been added!");
                page("/");
            } else {
                message = `Error: ${result.message}`;
            }
        } catch (error) {
            message = `Error: ${error.message}`;
        }
    };
    const handleInput = () => {
        console.log(new Date(auctionEndDate));
    };
</script>

<main class="bg-neon-black text-white h-screen flex justify-center">
    <form
        class="flex flex-col flex-wrap justify-center align-items-center w-1/3"
    >
        <TextField
            label="Product Name"
            bind:value={productName}
            placeholder="Enter mystery name"
            on:input={handleInput}
        />

        <TextField
            label="Items"
            bind:value={items}
            placeholder="Enter items split by ','"
            on:input={handleInput}
        />
        <TextField
            label="Category"
            bind:value={category}
            placeholder="Enter category"
            on:input={handleInput}
        />
        <TextField
            label="Description"
            bind:value={description}
            placeholder="Enter description"
            on:input={handleInput}
        />
        <TextField
            label="Starting Price"
            bind:value={startingPrice}
            placeholder="Enter starting price"
            on:input={handleInput}
        />
        <label for="date" class="block text-sm font-medium mb-1 text-neon-blue"
            >Auction Deadline</label
        >
        <input
            type="date"
            name="date"
            class="border border-neon-blue bg-neon-black text-neon-blue rounded-md w-1/5 mb-5"
            value={auctionEndDate}
            on:input={(e) =>
                (auctionEndDate = e.target.value || auctionEndDate)}
        />
        <p class="text-red-600 italic">{message}</p>
        <MainButton label="Submit" type="submit" handleClick={handleSubmit} />
    </form>
</main>
