<script>
  const tags = ["Geek"];
</script>

<svelte:head>
  <title>About Raphael Megzari</title>
</svelte:head>

<style>
  .content-grid {
    display: grid;
    grid-template-columns: 15vw 70vw 15vw;
    grid-template-rows: 10vh minmax(80vh, auto) 10vh;
    grid-template-areas:
      ". . ."
      ". content ."
      ". . .";
  }

  .content {
    grid-area: content;
  }
</style>

<div class="content-grid">
  <div
    class="content w-full text-xl leading-normal text-white"
    style="font-family: Georgia, serif;"
  >
    <!--Title-->
    <div class="font-sans">
      <h1
        class="font-sans break-normal text-white pt-6 pb-2 text-3xl md:text-4xl"
      >
        About me
      </h1>
      <p class="text-sm font-normal text-gray-500">
        Tags: {#each tags as tag}
        <span
          class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 text-blue-500 border-2 border-blue-500 mx-1 my-1"
        >
          {tag}
        </span>
        {/each}
      </p>
    </div>
  </div>
</div>
<!--/container-->
