<script>
  import Tag from "./Tag.svelte";
  export let project;
</script>
<div
  class="flex flex-col justify-center text-center my-auto mx-auto"
  style="height: 80vh;"
>
  <h2
    class="text-4xl tracking-tight leading-10 font-extrabold text-white mt-3 md:mt-10"
  >
    { project.title }
  </h2>
  <p class="mt-3 md:mt-10 text-base md:text-xl">
    For:
    <a
      href="https://www.mystays.com/"
      class="leading-6 text-blue-500 hover:text-blue-300"
    >
      { project.client.name }
    </a>
    - { project.client.caption }
  </p>

  <p class="mt-3 md:mt-10 text-base md:text-xl">
    { project.description }
  </p>
  <p class="mt-3 md:mt-10 text-sm font-normal text-gray-500">
    Tags: {#each project.tags as tag}
      <Tag { tag }/>
    {/each}
  </p>
</div>
