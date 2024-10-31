<script>
 import ToggleSwitch from "$lib/atoms/toggle-switch/ToggleSwitch.svelte";
</script>

<header class='fixed top-0 left-0 right-0 h-12'>
  <div class='flex items-center h-full py-1 px-3'>
    <ToggleSwitch />
    <p class="mr-6 border-b-4 border-primary-light-500 dark:border-primary-dark-500 font-mono">me</p>
    <a href="https://blog.fsorodrigues.dev" class="mr-6 hover:opacity-90 hover:underline underline-offset-2 decoration-primary-light-500 dark:decoration-primary-dark-500 font-mono" >blog</a> 
  </div>
</header>
