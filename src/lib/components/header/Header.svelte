<script>
 import ToggleSwitch from "$lib/atoms/toggle-switch/ToggleSwitch.svelte";
</script>

<header class='fixed top-0 left-0 right-0 h-12'>
  <div class='flex items-center h-full py-1 px-3 font-mono'>
    <ToggleSwitch />
    <p class="mr-6 border-b-4 border-primary-light-500 dark:border-primary-dark-500">me</p>
    <a 
      href="https://blog.fsorodrigues.dev" 
      class="mr-6 border-b-4 border-gray-200 hover:border-primary-light-500 dark:border-gray-800 hover:dark:border-primary-dark-500">blog</a> 
  </div>
</header>
