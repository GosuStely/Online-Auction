<script>
    export let filter;
    export let handleFilterChange;
    const onChange = (event) => {
        handleFilterChange(event.target.checked, filter);
    };
</script>

<div class="flex items-center space-x-3 mx-3 my-3 p-2 rounded-lg shadow-sm">
    <input
        type="checkbox"
        name={filter}
        id={filter}
        class="w-5 h-5"
        on:change={onChange}
    />
    <label for={filter} class="font-medium cursor-pointer select-none">
        {filter}
    </label>
</div>
