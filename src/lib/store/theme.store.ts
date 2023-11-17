import { writable, type Writable } from "svelte/store";

// Checks if dark mode is active
const isDarkModeActive = () => document?.body?.classList.contains('dark');

export const darkMode: Writable<boolean> = writable(isDarkModeActive());

const updateDarkMode = (): void => {
  darkMode.set(isDarkModeActive());
};

// Subscribe to body changes to update dark mode
const bodyObserver = new MutationObserver(updateDarkMode);
bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

// Clean observer on destroy
$: () => {
  return () => bodyObserver.disconnect();
};
