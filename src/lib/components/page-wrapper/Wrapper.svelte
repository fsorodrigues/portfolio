<script>
 const { children } = $props()
</script>

<main class="mt-12 lg:mt-40 px-3 lg:px-10 xl:px-56 py-4 flex-1 flex flex-col gap-y-12 font-mono">
  {@render children()}
</main>
