<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="container w-full mx-auto pt-20">
  <div
    class="w-full px-4 md:px-6 text-xl leading-normal text-indigo-100"
    style="font-family:Georgia,serif;"
  >
    <!--Title-->
    <div class="font-sans">
      <h1
        class="font-sans break-normal text-white pt-6 pb-2 text-3xl md:text-4xl"
      >
        {post.title}
      </h1>
      <p class="text-sm md:text-base font-normal text-gray-500">
        Published { post.published_at }
      </p>
      <p class="text-sm font-normal text-gray-500">
        Tags: {#each post.tags as tag}
        <span
          class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800"
        >
          {tag}
        </span>
        {/each}
      </p>
    </div>

    {@html post.html }
  </div>
</div>
<!--/container-->
