<script lang="ts">
  import ProjectContent from "./ProjectContent.svelte";
  import l_arrow from "../assets/l_arrow.svg";
  import r_arrow from "../assets/r_arrow.svg";

  type Project = {
    preview: string;
    name: string;
    desc: string;
    tools: string[];
    repo: string;
  };

  const projects: Project[] = [
    {
      preview: "/src/assets/previews/farellukas.png",
      name: "farellukas.github.io",
      desc: "This project is the website you are seeing right now. It is my personal portfolio website that I will use to showcase my skills and experience.",
      tools: ["svelte", "tailwind", "typescript"],
      repo: "https://github.com/farellukas/farellukas.github.io",
    },
    {
      preview: "/src/assets/previews/vcard_generator.gif",
      name: "vCard QR Code Generator",
      desc: "A web application that generates a QR code containing a customized virtual contact file.",
      tools: ["python", "django", "bootstrap"],
      repo: "https://github.com/farellukas/vcard-qrcode-gen",
    },
    {
      preview: "/src/assets/previews/chew_finder.gif",
      name: "Chew Finder",
      desc: "A web application that helps users find new restaurants to eat in a dating app style.",
      tools: ["react", "tailwind", "typsescript", "node", "express"],
      repo: "https://github.com/farellukas/chew-finder",
    },
  ];

  // indexing projects
  let i: number = 0;
  const prevProject = () => {
    i--;
  };
  const nextProject = () => {
    i++;
  };
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
  />
</svelte:head>

<section id="projects" class="bg-[#3C2317] text-white">
  <div class="max-w-4xl m-auto p-8 flex flex-col gap-8">
    <h5 class="">🔧 projects i made.</h5>

    <ProjectContent project={projects[i]} />

    <div class="flex justify-between">
      <img src={l_arrow} alt="left arrow" on:click={i !== 0 && prevProject} />
      <a href={projects[i].repo} target="_blank" rel="noreferrer">
        <i class="devicon-github-original text-[32px]" />
      </a>
      <img
        src={r_arrow}
        alt="right arrow"
        on:click={i !== projects.length - 1 && nextProject}
      />
    </div>
  </div>
</section>
