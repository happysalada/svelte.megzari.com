<style>
  .content-grid {
    display: grid;
    grid-template-columns: 15vw 70vw 15vw;
    grid-template-rows: 10vh minmax(60vh, auto) 10vh;
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
    <slot></slot>
  </div>
</div>
