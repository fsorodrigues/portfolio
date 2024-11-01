import { writable } from 'svelte/store';

const mode = writable('',(s) => {
  s('light')

  return () => s('')
});

export default mode;

