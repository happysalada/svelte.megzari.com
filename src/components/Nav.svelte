<script>
  export let segment;
  let open = false;
  let nav_active_classes = "text-white bg-gray-900 ";
  let nav_inactive_classes = "text-gray-300 hover:text-white hover:bg-gray-700";
  function toggleOpen() {
    open = !open;
  }
</script>

<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex items-center px-2 lg:px-0">
        <div class="flex-shrink-0">
          <img class="block lg:hidden h-8 w-auto" alt="" />
          <img class="hidden lg:block h-8 w-auto" alt="" />
        </div>
        <div class="hidden lg:block lg:ml-6">
          <div class="flex">
            <a
              href="."
              class="{ segment === undefined ? nav_active_classes : nav_inactive_classes}
								px-3 py-2 rounded-md text-sm leading-5 font-medium focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >Home</a
            >
            <a
              href="/about"
              class="{ segment === 'about' ? nav_active_classes : nav_inactive_classes}
								ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >About</a
            >
            <a
              href="/blog"
              class="{ segment === 'blog' ? nav_active_classes : nav_inactive_classes}
								ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
              >Blog</a
            >
          </div>
        </div>
      </div>
      <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
        <div class="max-w-lg w-full">
          <label for="search" class="sr-only">Search</label>
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              id="search"
              class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white sm:text-sm transition duration-150 ease-in-out"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div class="flex lg:hidden">
        <button
          on:click="{toggleOpen}"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
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
  <div class="{open ? 'block' : 'hidden'} lg:hidden">
    <div class="px-2 pt-2 pb-3">
      <a
        href="."
        class="{ segment === undefined ? nav_active_classes : nav_inactive_classes}
					block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >Home</a
      >
      <a
        href="about"
        class="{ segment === 'about' ? nav_active_classes : nav_inactive_classes}
					mt-1 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >About</a
      >
      <a
        href="blog"
        class="{ segment === 'blog' ? nav_active_classes : nav_inactive_classes}
					mt-1 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >Blog</a
      >
    </div>
  </div>
</nav>
