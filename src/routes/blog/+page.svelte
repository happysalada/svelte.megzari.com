<script lang="ts">
  import type { PageData } from './$types'
  import Tag from '$lib/Tag.svelte'

  export let data: PageData
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<!--Title-->
<div class="font-sans">
  <h1 class="font-sans break-normal text-white pt-6 pb-2 text-3xl md:text-4xl">
    Recent posts
  </h1>

  <ul class="list-none">
    {#each data.posts as { title, tags, outline, slug }}
      <li class="list-none">
        <a class="text-blue-500 space-y-3" rel="prefetch" href="blog/{slug}">
          <h2>
            {title}
          </h2>

          <p class="text-white text-base">
            {outline}
          </p>

          <p class="text-sm font-normal text-gray-500">
            Tags: {#each tags as tag}
              <Tag {tag} />
            {/each}
          </p>
        </a>
      </li>
    {/each}
  </ul>
</div>
