<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let filter;
    function handleChange(event) {
        dispatch("filter", {
            isChecked: event.target.checked,
            filter,
        });
    }
</script>

<div
    class="flex flex-col flex-wrap items-center space-x-3 my-4 pt-4 ml-2 rounded-lg shadow-sm shadow-neon-blue-light hover:scale-105 transition-all md:p-2 xl:flex-row"
>
    <input
        type="checkbox"
        name={filter}
        id={filter}
        class="w-5 h-5"
        on:change={handleChange}
    />
    <label
        for={filter}
        class="font-medium cursor-pointer select-none text-sm xl:text-base md:text-center"
    >
        {filter}
    </label>
</div>
