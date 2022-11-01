<script lang="ts">
  import Thumbnail from "../lib/Thumbnail.svelte";

  type Project = {
    name: string;
    desc: string;
    repo: string;
    thumbnail?: string;
    toolsUsed: string[];
  };

  let projects: Project[] = [
    {
      name: "farellukas.github.io",
      desc: "This project is the website you are seeing right now. It is my personal portfolio website that I will use to showcase my skills and experience.",
      repo: "https://github.com/farellukas/farellukas.github.io",
      toolsUsed: ["svelte", "tailwindcss", "typescript"],
    },
    {
      name: "vCard QR Code Generator",
      desc: "A web application that generates a QR code containing a customized virtual contact file.",
      repo: "https://github.com/farellukas/vcard-qrcode-gen",
      toolsUsed: ["python", "django", "bootstrap"],
    },
    {
      name: "Chew Finder",
      desc: "A web application that helps users find new restaurants to eat in a dating app style.",
      repo: "https://github.com/farellukas/chew-finder",
      toolsUsed: ["react", "tailwindcss", "typescript", "nodejs", "express"],
    },
  ];

  let currentProject = 0;
</script>

<main class="flex h-screen justify-center items-center">
  <div class="max-w-md w-full px-8">
    <Thumbnail project={projects[currentProject]} />
    <div class="flex justify-evenly mt-4">
      {#each Array(projects.length) as _, i}
        <div
          class="w-6 h-6 border-black border-4 {currentProject === i
            ? 'bg-black'
            : ''}"
          on:click={() => (currentProject = i)}
          on:keypress={(event) => {
            if (event.key == "\n") {
              currentProject = i;
            }
          }}
        />
      {/each}
    </div>
  </div>
</main>
