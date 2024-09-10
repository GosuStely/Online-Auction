<script>
  import router from "page";
  import HomePage from "./pages/HomePage.svelte";
  import "./app.css";
  let page;
  let params;
  let currentRoute;

  router("/", (ctx) => {
    page = HomePage;
    currentRoute = ctx.pathname;
  });
  router("/about", (ctx) => {
    // page = About;
    currentRoute = ctx.pathname;
    params = ctx;
  });

  router.start();
</script>

<HomePage />
