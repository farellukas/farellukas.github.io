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
  ];

  let currentProject = 0;
</script>

<main class="flex h-screen justify-center items-center">
  <div class="max-w-md w-full">
    <Thumbnail project={projects[currentProject]} />
  </div>
</main>
