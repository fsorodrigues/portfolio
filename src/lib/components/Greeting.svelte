<script lang="ts">
  import { onMount } from "svelte";
  let greeting = $state("Hello");
  let animate = $state(false);
  let msg = $state(greeting)
  let duration = $derived(greeting.length * 100);
  // $effect(() => console.log(greeting, animate, duration));
  $effect(() => { if (animate) greeting = msg });

  onMount(() => {
    setTimeout(() => {
      msg = "Hi"
      animate = true;
    }, 1000);
    setTimeout(() => {
      animate = false;
    }, 2000);
    setTimeout(() => {
      msg = "Hey"
      animate = true;
    }, 3000);
  });

  function typewriter(
    node: HTMLElement, 
    { speed = 1, delay = 0 } : { speed?: number, delay?: number }
  ) {
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent!;

		return {
			duration,
      delay,
			tick: (t: number) => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
  }
  
</script>

<h1 class="text-3xl font-bold underline">
  {#key greeting}
    <span 
      in:typewriter={{ speed: 1, delay: duration, }}
      out:typewriter={{ speed: 1, }}
    >{greeting}</span>
  {/key}
  , world!
</h1>

