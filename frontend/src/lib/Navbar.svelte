<script>
  import { Link } from "svelte-routing";
  let path = window.location.pathname;
  const updatePath = () => {
    path = window.location.pathname;
  };
</script>

<nav class="flex items-stretch shadow-[0_4px_0_black] absolute w-full">
  <Link
    to="/"
    class="flex-none py-4 px-8 font-mono font-bold text-4xl"
    on:click={updatePath}><h3>farel_lukas</h3></Link
  >
  <div class="flex-auto" />
  <Link
    to="/"
    class="flex items-center flex-none px-8 font-mono font-bold text-2xl {path ===
    '/'
      ? 'text-white bg-black'
      : 'text-black bg-transparent'}"
    on:click={updatePath}><h5>about</h5></Link
  >
  <Link
    to="/projects"
    class="flex items-center flex-none px-8 font-mono font-bold text-2xl {path ===
    '/projects'
      ? 'text-white bg-black'
      : 'text-black bg-transparent'}"
    on:click={updatePath}><h5>projects</h5></Link
  >
  <Link
    to="/contact"
    class="flex items-center flex-none px-8 font-mono font-bold text-2xl {path ===
    '/contact'
      ? 'text-white bg-black'
      : 'text-black bg-transparent'}"
    on:click={updatePath}><h5>contact</h5></Link
  >
</nav>
