<script lang="ts">
  import l_arrow from "../assets/l_arrow.svg";
  import r_arrow from "../assets/r_arrow.svg";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
  />
</svelte:head>

<section id="projects" class="bg-[#3C2317] text-white">
  <div class="max-w-4xl m-auto py-8 flex flex-col gap-8">
    <h5 class="">🔧 the projects i made.</h5>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <p class="font-bold">name of project</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div class="flex flex-col gap-2">
        <p class="font-bold">tools used:</p>
      </div>
    </div>

    <div class="flex justify-between">
      <img src={l_arrow} alt="left arrow" />
      <i class="devicon-github-original text-[32px]" />
      <img src={r_arrow} alt="right arrow" />
    </div>
  </div>
</section>
