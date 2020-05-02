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
  import { onMount } from 'svelte';
  import Tag from "../../components/Tag.svelte";
  export let post;
  onMount(async () => {
    const commento=document.createElement('script')
    commento.setAttribute("type","text/javascript")
    commento.setAttribute("src", "https://cdn.commento.io/js/commento.js")
    document.head.appendChild(commento);
	});
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

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
    <Tag {tag} />
    {/each}
  </p>
</div>

{@html post.html }

<div id="commento"></div>
