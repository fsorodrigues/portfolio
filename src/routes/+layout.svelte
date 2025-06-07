<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import mode from '$lib/stores/Mode'
  import { page } from '$app/stores'

  // import css
  import "../app.css";

  // import components
  import Header from '$lib/components/header/Header.svelte';
  import Footer from '$lib/components/footer/Footer.svelte';

  // import util functions
  import store from '$lib/utils/storage'

  let unsubscribe : () => void = () => {};

  onMount(() => {
    let preferredMode : { mode: string } = JSON.parse(localStorage.getItem('mode')!)
    if (preferredMode) {
      mode.set(preferredMode.mode)
    }
    else {
      const isDarkMediaQuery : boolean = window
        .matchMedia('(prefers-color-scheme: dark)')
        .matches;
      preferredMode = isDarkMediaQuery ? { mode: 'dark' } : { mode: 'light' } 

      mode.set(preferredMode.mode) 
      store.saveToStore(localStorage, 'mode', preferredMode)
    } 
    
    unsubscribe = mode.subscribe((v) => store.saveToStore(localStorage, 'mode', { mode: v }))
  });
 
  onDestroy(unsubscribe);

  let { children } = $props()
  const headerConfig = {'/': 'me', '/work': 'work', '/lineup': 'lineup'}
</script>

<div class="{$mode}" data-theme={$mode}>
  <div class="transition-colors text-gray-950 dark:text-gray-200 bg-gray-50 dark:bg-gray-950 flex min-h-screen">
    <Header {page} config={headerConfig} />
    {@render children()}
    <Footer />
  </div>
</div>
