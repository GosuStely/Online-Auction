<script>
    import page from "page";
    export let label = "Redirect Button";
    export let redirectPath = "/";
    export let position = "";
    export let action;

    const handleClick = () => {
        page(redirectPath);
        action();
    };
</script>

<button
    on:click={handleClick}
    class="text-neon-yellow text-center {position} right-5 p-5 rounded-xl border hover:bg-neon-yellow hover:text-black transition-all"
    >{label}
</button>
