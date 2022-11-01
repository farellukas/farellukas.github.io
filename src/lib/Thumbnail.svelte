<script lang="ts">
  type Project = {
    name: string;
    desc: string;
    repo: string;
    thumbnail?: string;
    toolsUsed: string[];
  };

  export let project: Project;
  let showDesc = false;

  function toggleDesc() {
    showDesc = !showDesc;
  }
</script>

<svelte:head>
  <!-- import icons CDN -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
  />
</svelte:head>

<div
  class="w-full aspect-square {project.thumbnail
    ? 'bg-[url({project.thumbnail})] bg-cover'
    : 'bg-black'} flex flex-col justify-center items-center font-mono text-white p-10"
  on:click={toggleDesc}
  on:keypress={(event) => {
    if (event.key == " ") {
      toggleDesc();
    }
  }}
>
  {#if !showDesc}
    <h5 class="font-bold text-2xl">{project.name}</h5>
    <p class="text-base">(click to see more)</p>
  {:else}
    <p class="text-base border-b-2 border-t-white basis-1/2">
      {project.desc}
    </p>
    <div class="basis-1/2 w-full">
      <h6 class="font-bold text-base text-center p-4">Tools Used</h6>
      <div class="grid grid-cols-3 justify-items-center p-4">
        {#each project.toolsUsed as tool}
          <i class={`devicon-${tool}-plain text-4xl`} />
        {/each}
      </div>
    </div>
  {/if}
</div>
