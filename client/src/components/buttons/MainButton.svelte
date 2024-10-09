<script>
    // @ts-nocheck
    export let handleClick;
    export let label = "Main Button";
    export let type = "button";
    export let disabled = false;
</script>

<button
    class="bg-neon-blue text-neon-black-darkest font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-neon-blue-dark hover:text-neon-black transition duration-300 ease-in-out"
    on:click={handleClick}
    {type}
    {disabled}
>
    {label}
</button>
