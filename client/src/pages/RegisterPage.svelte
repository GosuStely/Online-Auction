<script>
    // @ts-nocheck
    import MainButton from "../components/buttons/MainButton.svelte";
    import TextField from "../components/TextField.svelte";
    import tokenStore from "../stores/tokenStore";

    let username = "";
    let password = "";
    let repeatPassword = "";
    let email = "";
    let isEmailValid = true;
    let isPasswordValid = true;
    let isRepeatedPasswordValid = true;
    let message = "";

    const handleSubmit = async (e) => {
        validateEmail();
        validatePassword();
        validateRepeatedPassowrd();

        e.preventDefault();
        if (!isEmailValid) {
            message = "Email is not valid!";
            return;
        }
        if (!isPasswordValid) {
            message =
                "Password must have minimum eight characters, at least one letter, one number and one special character!";
            return;
        }
        if (!isRepeatedPasswordValid) {
            message = "Passwords do not match!";
            return;
        }

        const data = { username, email, password };

        try {
            const response = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (response.ok) {
                tokenStore.set(result.token);
                localStorage.setItem("token", result.token);
                window.location.pathname = "/";
            } else {
                message = `Error: ${result.message}`;
            }
        } catch (error) {
            message = `Error: ${error.message}`;
        }
    };
    const validatePassword = () => {
        const pattern =
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        isPasswordValid = pattern.test(password);
    };

    const validateEmail = () => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        email = email.toLowerCase();
        isEmailValid = pattern.test(email);
    };
    const validateRepeatedPassowrd = () => {
        isRepeatedPasswordValid = repeatPassword === password;
    };
</script>

<main class="flex justify-center align-items-center h-screen bg-neon-black">
    <form
        class="flex flex-col flex-wrap justify-center align-items-center w-1/3"
        method="post"
    >
        <TextField
            label="Username"
            bind:value={username}
            placeholder="Enter your name"
        />
        <TextField
            label="Email"
            bind:value={email}
            placeholder="Enter your password"
            error={isEmailValid ? false : true}
            validateField={validateEmail}
        />

        <TextField
            label="Password"
            bind:value={password}
            placeholder="Enter your password"
            error={isPasswordValid ? false : true}
            validateField={validatePassword}
        />

        <TextField
            label="Repeat Password"
            bind:value={repeatPassword}
            placeholder="Enter your password"
            error={isRepeatedPasswordValid ? false : true}
            validateField={validateRepeatedPassowrd}
        />
        <p class="text-red-600 italic">{message}</p>
        <MainButton label="Register" type="submit" handleClick={handleSubmit} />
    </form>
</main>
