<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`about.json`)
      .then((r) => r.json())
      .then((projects) => {
        return { projects }
      })
  }
</script>

<script>
  import Project from '../components/Project.svelte'
  export let projects
</script>

<svelte:head>
  <title>About Raphael Megzari</title>
</svelte:head>
<div class="content-grid">
  <div
    class="content w-full text-xl leading-normal text-white"
    style="font-family: Georgia, serif;"
  >
    <div style="height: 80vh;">
      <!--Title-->
      <div class="font-sans">
        <h1
          class="font-sans break-normal text-white pt-6 pb-2 text-3xl
          md:text-4xl"
        >
          About me
        </h1>
      </div>
      <p class="py-6">
        I'm a developper who thinks of programming as a form of Art!
        <br />
        <br />
        I'm quite interested in the biotech space. contact me if there is
        something you want to make.
        <br />
        <br />
        raphael at megzari dot com
        <br />
        <br />
        Here is my portfolio
      </p>
    </div>
    {#each projects as project}
      <Project {project} />
    {/each}
  </div>
</div>
<!--/container-->

<style>
  .content-grid {
    display: grid;
    grid-template-columns: 15vw auto 15vw;
    grid-template-rows: 10vh minmax(80vh, auto) 10vh;
    grid-template-areas:
      '. . .'
      '. content .'
      '. . .';
  }

  .content {
    grid-area: content;
  }
</style>
