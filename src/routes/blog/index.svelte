<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import Tag from "../../components/Tag.svelte";
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

  <ul>
    {#each posts as {title, tags, outline, slug}}
    <!-- we're using the non-standard `rel=prefetch` attribute to
        tell Sapper to load the data for the page as soon as
        the user hovers over the link or taps it, instead of
        waiting for the 'click' event -->
    <li>
      <a class="text-blue-500" rel="prefetch" href="blog/{slug}">
        <h2>
          {title}
        </h2>
        <p class="mt-3 text-white text-base">
          {outline}
        </p>

        <p class="mt-3 text-sm font-normal text-gray-500">
          Tags: {#each tags as tag}
            <Tag { tag }/>
          {/each}
        </p>
      </a>
    </li>
    {/each}
  </ul>
</div>
