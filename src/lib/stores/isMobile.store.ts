import { BREAKPOINTS } from '$lib/constants'
import { writable, type Writable } from 'svelte/store'

// Create a writable store with an initial value based on the current screen width
export const isMobile: Writable<boolean> = writable(_isMobile())

// Update the store value when the screen is resized
if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
        isMobile.set(_isMobile())
    })
}

function _isMobile(): boolean {
    // Check if window is defined (runs only in browser environment)
    if (typeof window !== 'undefined') {
        return window.innerWidth < BREAKPOINTS.sm
    }
    // Return false if window is not defined (for server-side rendering)
    return false
}
