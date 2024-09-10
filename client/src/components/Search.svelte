<script>
    export let placeholder = "Search...";
    let searchQuery = "";

    // Handle the input event
    const handleInput = (event) => {
        searchQuery = event.target.value;
    };
</script>

<div class="relative">
    <input
        type="text"
        bind:value={searchQuery}
        {placeholder}
        class="w-80 pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none text-gray-700"
        on:input={handleInput}
    />
    <span class="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
</div>
