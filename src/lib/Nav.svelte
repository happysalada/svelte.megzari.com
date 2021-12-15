<script lang="ts">
  export let path
  let open = false
  function toggleOpen() {
    open = !open
  }
</script>

<style>
  .nav-default {
    @apply px-3 py-2 rounded-md text-sm leading-5 font-medium  transition duration-150 ease-in-out;
  }

  .nav-default:focus {
    @apply ring text-blue-500 bg-black;
  }

  .nav-active {
    @apply text-blue-500 border-2 border-blue-500;
  }

  .nav-active:hover {
    @apply text-black bg-blue-500;
  }

  .nav-inactive {
    @apply text-white;
  }

  .nav-inactive:hover {
    @apply text-black bg-blue-500;
  }
</style>

<div class="mx-auto px-2 sm:px-4 lg:px-8">
  <div class="relative flex items-center justify-between h-16">
    <div class="flex items-center px-2 lg:px-0">
      <div class="hidden lg:block lg:ml-6">
        <div class="flex space-x-4">
          <a
            href="/"
            class="{ path === '/' ? 'nav-active' : 'nav-inactive' } nav-default"
            >Home</a
          >
          <a
            href="/about"
            class="{ path === '/about' ? 'nav-active' : 'nav-inactive'} nav-default"
            >About</a
          >
          <a
            href="/blog"
            class="{ path === '/blog' ? 'nav-active' : 'nav-inactive' } nav-default"
            >Blog</a
          >
        </div>
      </div>
    </div>
    <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end"></div>
    <div class="md:hidden">
      <button
        on:click="{toggleOpen}"
        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out bg-transparent"
      >
        <svg
          class="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            class="{open ? 'hidden' : 'inline-flex' }"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            class="{open ? 'inline-flex' : 'hidden' }"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</div>
<div class="{open ? 'block' : 'hidden'} md:hidden">
  <div class="px-2 pt-2 pb-3 flex flex-col space-y-1">
    <a
      href="/"
      class="{ path === '/' ? 'nav-active' : 'nav-inactive'} nav-default"
      >Home</a
    >
    <a
      href="/about"
      class="{ path === '/about' ? 'nav-active' : 'nav-inactive'} nav-default"
      >About</a
    >
    <a
      href="/blog"
      class="{ path === '/blog' ? 'nav-active' : 'nav-inactive'} nav-default"
      >Blog</a
    >
  </div>
</div>
