import { writable } from "svelte/store";

function initializeDarkMode() {
  function _isDarkClassActive() {
    return document?.body?.classList.contains('dark')
  }
  const isDarkMode = _isDarkClassActive()
  const { subscribe, set, update } = writable(isDarkMode);

  return {
    subscribe,
    refresh: () => set(_isDarkClassActive()),
    toggle: () => update((n) => !n),
    reset: () => set(false)
  };
}

export const isDarkModeEnabled = initializeDarkMode();

