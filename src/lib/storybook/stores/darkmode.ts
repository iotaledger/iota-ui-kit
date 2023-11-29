import { writable } from 'svelte/store'

function initializeDarkMode() {
    function _isDarkModeActive() {
        return document?.body?.classList.contains('dark')
    }
    const isDarkModeActive = _isDarkModeActive()
    const { subscribe, set, update } = writable(isDarkModeActive)
    const updateDarkMode = () => {
        update(() => _isDarkModeActive())
    }
    const bodyObserver = new MutationObserver(updateDarkMode)
    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    return {
        subscribe,
        refresh: updateDarkMode,
        reset: () => set(false),
    }
}

export const isDarkModeEnabled = initializeDarkMode()
