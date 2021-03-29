<script context="module" lang="ts">
  const posts = import.meta.glob('./*.svx')

  let body = []

  for (const path in posts) {
    body.push(posts[path]().then(({metadata}) => metadata))
  }
  /**
	 * @type {import('@sveltejs/kit').Load}
	 */
  export async function load({ page, fetch }) {
    const posts = await Promise.all(body)
    return {
      props: {
        posts
      }
    };
  }
</script>

<script>
  import Tag from "$lib/Tag.svelte";
  export let posts;
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
    {#each posts as {title, tags, outline, slug}}
    <!-- we're using the non-standard `rel=prefetch` attribute to
        tell Sapper to load the data for the page as soon as
        the user hovers over the link or taps it, instead of
        waiting for the 'click' event -->
    <li class="list-none">
      <a
        class="text-blue-500 space-y-3"
        rel="prefetch"
        href="blog/{slug}"
      >
        <h2>
          {title}
        </h2>

        <p class="text-white text-base">
          {outline}
        </p>

        <p class="text-sm font-normal text-gray-500">
          Tags: {#each tags as tag}
            <Tag { tag }/>
          {/each}
        </p>
      </a>
    </li>
    {/each}
  </ul>
</div>
