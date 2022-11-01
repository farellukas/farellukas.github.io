<script lang="ts">
  import { Link } from "svelte-routing";
  import github from "../assets/github.svg";
  import linkedin from "../assets/linkedin.svg";

  let path = window.location.pathname;
  function updatePath(newPath: string) {
    path = newPath;
  }
</script>

<nav class="flex items-stretch shadow-[0_4px_0_black] absolute w-full">
  <Link
    to="/"
    class="flex-none py-4 px-8 font-mono font-bold text-4xl"
    on:click={() => {
      updatePath("/");
    }}><h3>farel_lukas</h3></Link
  >
  <div class="flex-auto" />
  <div class="flex items-center flex-none px-8 gap-6">
    <a
      href="https://github.com/farellukas"
      target="_blank"
      rel="noopener noreferrer"
      ><img src={github} alt="github" class="aspect-auto h-10" /></a
    >
    <a
      href="https://www.linkedin.com/in/farellukas"
      target="_blank"
      rel="noopener noreferrer"
      ><img src={linkedin} alt="github" class="aspect-auto h-10" /></a
    >
  </div>
  <Link
    to="/"
    class="flex items-center flex-none px-8 font-mono font-bold text-2xl {path ===
    '/'
      ? 'text-white bg-black'
      : 'text-black bg-transparent'}"
    on:click={() => {
      updatePath("/");
    }}><h5>about</h5></Link
  >
  <Link
    to="/projects"
    class="flex items-center flex-none px-8 font-mono font-bold text-2xl {path ===
    '/projects'
      ? 'text-white bg-black'
      : 'text-black bg-transparent'}"
    on:click={() => {
      updatePath("/projects");
    }}><h5>projects</h5></Link
  >
  <Link
    to="/contact"
    class="flex items-center flex-none px-8 font-mono font-bold text-2xl {path ===
    '/contact'
      ? 'text-white bg-black'
      : 'text-black bg-transparent'}"
    on:click={() => {
      updatePath("/contact");
    }}><h5>contact</h5></Link
  >
</nav>
