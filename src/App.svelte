<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Navbar from "./lib/Navbar.svelte";
  import About from "./routes/About.svelte";
  import Contact from "./routes/Contact.svelte";
  import Projects from "./routes/Projects.svelte";
</script>

<Router>
  <Navbar />
  <Route path="/">
    <About />
  </Route>
  <Route path="/projects">
    <Projects />
  </Route>
  <Route path="/contact">
    <Contact />
  </Route>
</Router>
