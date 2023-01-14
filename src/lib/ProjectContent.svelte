<script lang="ts">
  type Project = {
    name: string;
    preview: string;
    desc: string;
    tools: string[];
    repo: string;
  };

  export let project: Project;
</script>

<div class="flex flex-col gap-4">
  <img src={project.preview} alt={project.name} />

  <div class="flex flex-col gap-2">
    <p class="font-bold">{project.name}</p>
    <p>
      {project.desc}
    </p>
  </div>

  <div class="flex flex-col gap-2">
    <p class="font-bold">tools used:</p>
  </div>
</div>
