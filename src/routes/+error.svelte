<script>
  import { page } from '$app/stores'
</script>

<!--
  This example requires updating your template:

  ```
  <html class="h-full">
  <body class="h-full">
  ```
-->
<main
  class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen"
>
  <div class="text-center">
    <p class="text-base font-semibold text-primary-600">{$page.status}</p>
    <h1
      class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
    >
      Error
    </h1>
    <p class="mt-6 text-base leading-7 text-gray-600">
      {$page.error?.message || 'No error message'}
    </p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a
        href="/"
        class="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
        >Go back home</a
      >
      <a
        href="mailto:postmaster@megzari.com"
        class="text-sm font-semibold text-gray-900"
        >Contact support <span aria-hidden="true">&rarr;</span></a
      >
    </div>
  </div>
</main>
