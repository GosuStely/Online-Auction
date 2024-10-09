<script>
  import router from "page";
  import HomePage from "./pages/HomePage.svelte";
  import LoginPage from "./pages/LoginPage.svelte";
  import "./app.css";
  import DetailsPage from "./pages/DetailsPage.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import RegisterPage from "./pages/RegisterPage.svelte";
  import CreatePage from "./pages/CreatePage.svelte";
  import ProfilePage from "./pages/ProfilePage.svelte";
  let page;
  let params;
  let currentRoute;

  router("/", (ctx) => {
    page = HomePage;
    currentRoute = ctx.pathname;
  });
  router("/details:id", (ctx) => {
    page = DetailsPage;
    currentRoute = ctx.pathname;
    params = ctx;
  });
  router("/login", (ctx) => {
    page = LoginPage;
    currentRoute = ctx.pathname;
  });
  router("/register", (ctx) => {
    page = RegisterPage;
    currentRoute = ctx.pathname;
  });
  router("/create", (ctx) => {
    page = CreatePage;
    currentRoute = ctx.pathname;
  });
  router("/profile", (ctx) => {
    page = ProfilePage;
    currentRoute = ctx.pathname;
  });
  router.start();
</script>

<Header />
<main class="font-mono">
  <svelte:component this={page} {params} />
</main>
<Footer />
