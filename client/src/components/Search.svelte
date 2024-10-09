<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let placeholder = "Search...";
    let searchQuery = "";

    // Handle the input event
    const handleInput = (event) => {
        searchQuery = event.target.value;
        dispatch("search", searchQuery);
    };
</script>

<div class="relative">
    <input
        type="text"
        bind:value={searchQuery}
        {placeholder}
        class="w-32 pl-8 pr-4 py-2 border rounded-full focus:outline-none text-gray-700 focus:w-42 focus:pl-4 transition-all hover:border-neon-blue md:focus:w-96"
        on:input={handleInput}
    />
</div>
