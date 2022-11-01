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
  const customIconStyle = {
    express: "original",
  };

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
    : 'bg-black'} flex flex-col justify-center items-center font-mono text-white p-8"
  on:click={toggleDesc}
  on:keypress={(event) => {
    if (event.key == "\n") {
      toggleDesc();
    }
  }}
>
  {#if !showDesc}
    <h5 class="font-bold text-2xl text-center">{project.name}</h5>
    <p class="text-base text-center">(click to see more)</p>
  {:else}
    <p class="text-base pb-4 flex-grow">
      {project.desc}
    </p>
    <div class="w-full border-y-2 py-4 border-t-white">
      <h6 class="font-bold text-base text-center">Tools Used</h6>
      <div class="grid grid-cols-3 justify-items-center gap-4 pt-4">
        {#each project.toolsUsed as tool}
          <i
            class={`devicon-${tool}-${
              customIconStyle[tool] ? customIconStyle[tool] : "plain"
            } text-4xl`}
          />
        {/each}
      </div>
    </div>
    <a
      on:click|stopPropagation
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      class="pt-4"
    >
      <i class="devicon-github-original text-4xl" />
    </a>
  {/if}
</div>
