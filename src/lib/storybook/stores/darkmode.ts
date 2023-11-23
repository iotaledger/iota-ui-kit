import { writable } from "svelte/store";

function initializeDarkMode() {
  const _isDarkClassActive = () => document?.body?.classList.contains('dark')
  const isDarkMode = _isDarkClassActive()

  const updateDarkMode = () => {
    set(_isDarkClassActive());
  };

  const { subscribe, set, update } = writable(isDarkMode);
  const bodyObserver = new MutationObserver(updateDarkMode);
  bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  return {
    subscribe,
    refresh: () => updateDarkMode(),
    toggle: () => update((n) => !n),
    reset: () => set(false)
  };
}

export const isDarkModeEnabled = initializeDarkMode();

