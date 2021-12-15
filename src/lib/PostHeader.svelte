<script lang="ts">
  import Tag from "$lib/Tag.svelte";
  export let title;
  export let published_at;
  export let tags;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<!--Title-->
<div class="font-sans mb-10">
  <h1
    class="font-sans break-normal text-white pt-6 pb-2 text-3xl md:text-4xl"
  >
    {title}
  </h1>
  <p class="text-sm md:text-base font-normal text-gray-500">
    Published { published_at }
  </p>
  <p class="text-sm font-normal text-gray-500">
    Tags: {#each tags as tag}
    <Tag {tag} />
    {/each}
  </p>
</div>