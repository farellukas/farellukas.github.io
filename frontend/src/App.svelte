<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Navbar from "./lib/Navbar.svelte";
  import About from "./routes/About.svelte";
</script>

<Router>
  <Navbar />
  <Route path="/">
    <About />
  </Route>
</Router>
