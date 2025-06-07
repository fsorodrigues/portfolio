<script>
  import ToggleSwitch from "$lib/atoms/toggle-switch/ToggleSwitch.svelte";
  import GitHub from "$lib/icons/GitHub.svelte";

  let { page, config } = $props()
  const borderConfig = {
    active: "border-primary-light-500 dark:border-primary-dark-500",
    inactive: "border-gray-200 hover:border-primary-light-500 dark:border-gray-800 hover:dark:border-primary-dark-500"
  }
</script>

<header class='flex items-center justify-between fixed top-0 left-0 right-0 h-12 bg-gray-50 dark:bg-gray-950 z-50'>
  <div class='flex items-center h-full py-1 px-3 font-mono'>
    <ToggleSwitch />
    {#each Object.entries(config) as  [ route, label ]}
      {@const border = route === $page.route.id
        ? borderConfig['active']
        : borderConfig['inactive']
      }
      <a
        href={route}
        class="mr-6 border-b-4 {border}"
      >{label}</a>
    {/each}
    <a 
      href="https://blog.fsorodrigues.dev" 
      class="mr-6 border-b-4 {borderConfig['inactive']}"
    >blog</a> 
  </div>
  <div class='px-3'>
    <a
      class="hover:drop-shadow-light hover:dark:drop-shadow-dark"
      href="https://github.com/fsorodrigues"
    >
      <GitHub />
    </a>
  </div>
</header>

