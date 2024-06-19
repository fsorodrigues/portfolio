<script lang="ts">
  // import components
  import Header from '$lib/components/header/Header.svelte';
  import Main from '$lib/components/main/Main.svelte';
</script>

<Header />
<Main />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
