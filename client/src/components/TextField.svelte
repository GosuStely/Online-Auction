<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let label = "sds";
    // export let type = "text";
    export let value = "";
    export let placeholder = "";
    export let disabled = false;
    export let error = false;
    export let validateField = null;

    const handleInput = (e) => {
        value = e.target.value;
        dispatch("input", { value });
    };
</script>

<div class="mb-4">
    {#if label}
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label
            class="block text-sm font-medium {error
                ? 'text-red-600'
                : 'text-neon-blue'} mb-1"
        >
            {label}
        </label>
    {/if}
    <input
        class="w-full px-3 py-2 border {error
            ? 'border-red-600 text-red-600 focus:ring-red-600 focus:border-red-600'
            : 'border-neon-blue-light text-neon-blue focus:ring-neon-blue-dark focus:border-neon-blue-dark'} rounded-md shadow-md bg-neon-black focus:outline-none focus:ring-2 disabled:bg-neon-black-lighter disabled:text-gray-400 disabled:cursor-not-allowed"
        type="text"
        bind:value
        {placeholder}
        {disabled}
        on:input={handleInput}
        on:blur={validateField}
    />
</div>
