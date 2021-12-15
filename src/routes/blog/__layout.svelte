<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css" integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<div class="content-grid">
  <div
    class="content w-full text-xl leading-normal text-white"
    style="font-family: Georgia, serif;"
  >
    <slot />
  </div>
</div>

<style>
  .content-grid {
    display: grid;
    grid-template-columns: 15vw 70vw 15vw;
    grid-template-rows: 10vh minmax(60vh, auto) 10vh;
    grid-template-areas:
      '. . .'
      '. content .'
      '. . .';
  }

  .content {
    grid-area: content;
  }
</style>
