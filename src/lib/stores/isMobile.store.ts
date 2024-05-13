import { writable } from 'svelte/store'
import { BREAKPOINTS } from '$lib/constants'

// Function to determine if the screen is mobile
function _isMobile() {
    // Check if window is defined (runs only in browser environment)
    if (typeof window !== 'undefined') {
        return window.innerWidth < BREAKPOINTS.sm
    }
    // Return false if window is not defined (for server-side rendering)
    return false
}

// Create a writable store with an initial value based on the current screen width
export const isMobile = writable(_isMobile())

// Update the store value when the screen is resized
if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
        isMobile.set(_isMobile())
    })
}
