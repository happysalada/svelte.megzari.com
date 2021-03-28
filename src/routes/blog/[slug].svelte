<script context="module" lang="ts">
  /**
	 * @type {import('@sveltejs/kit').Load}
	 */
  export async function load({ page, fetch }) {
    const res = await fetch(`/blog/${page.params.slug}.json`)
    if (res.ok) {
			return {
				props: {
					post: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load blog/${page.params.slug}.json`)
		};
  }
</script>

<script>
  import { onMount } from 'svelte';
  import Tag from "../../components/Tag.svelte";
  export let post;
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