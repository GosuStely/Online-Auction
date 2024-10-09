<script>
    export let label = "Redirect Button";
    export let redirectPath = "/";
    export let position = "";
    export let action;

    const handleClick = () => {
        window.location.pathname = redirectPath;
        action();
    };
</script>

<button
    on:click={handleClick}
    class="text-neon-yellow text-center {position} right-5 p-5 rounded-xl border hover:bg-neon-yellow hover:text-black transition-all"
    >{label}
</button>
