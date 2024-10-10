<script>
    import MainButton from "../components/buttons/MainButton.svelte";
    import TextField from "../components/TextField.svelte";
    import tokenStore from "../stores/tokenStore";
    import page from "page";

    let email = "";
    let password = "";
    let message = "";

    const handleInput = (e) => {};

    async function handleSubmit() {
        try {
            const response = await fetch("http://localhost:3000/api/tokens", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                tokenStore.set(data.token);
                page("/");
            } else {
                message = data.message;
            }
        } catch (error) {
            message = "An error occurred during login.";
        }
    }
</script>

<div class="flex justify-center align-items-center h-screen bg-neon-black">
    <div
        class="flex flex-col flex-wrap justify-center align-items-center w-1/3"
    >
        <TextField
            label="Email"
            bind:value={email}
            placeholder="Enter your email"
            on:input={handleInput}
        />
        <TextField
            label="Password"
            bind:value={password}
            placeholder="Enter your password"
            on:input={handleInput}
        />
        <a
            href="/register"
            class="italic py-2 text-neon-blue hover:text-neon-blue-light"
            >Sign up</a
        >
        <p class="text-red-600 italic">{message}</p>

        <MainButton label="Log in" handleClick={handleSubmit} />
    </div>
</div>
