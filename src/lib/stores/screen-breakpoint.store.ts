import { BREAKPOINTS } from '$lib/constants'
import { ScreenSize } from '$lib/enums'
import { derived, writable, type Readable, type Writable } from 'svelte/store'

// Create a writable store with an initial value based on the current screen width
export const screenBreakpoint: Writable<ScreenSize> = writable(getCurrentScreenBreakpoint())
export const isMobile: Readable<boolean> = derived(
    screenBreakpoint,
    ($screenBreakPoint) => $screenBreakPoint === ScreenSize.Sm
)
export const isSmallScreen: Readable<boolean> = derived(
    screenBreakpoint,
    ($screenBreakPoint) =>
        $screenBreakPoint === ScreenSize.Md || $screenBreakPoint === ScreenSize.Sm
)

// Update the store value when the screen is resized
if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
        screenBreakpoint.set(getCurrentScreenBreakpoint())
    })
}

function getCurrentScreenBreakpoint(): ScreenSize {
    let breakpoint: ScreenSize = ScreenSize.Xl

    // Check if window is defined (runs only in browser environment)
    if (typeof window !== 'undefined') {
        const width = window.innerWidth

        const sortedBreakpoints = Object.keys(BREAKPOINTS).sort(
            (a, b) => BREAKPOINTS[a as ScreenSize] - BREAKPOINTS[b as ScreenSize]
        )

        for (const key of sortedBreakpoints) {
            if (width < BREAKPOINTS[key as ScreenSize]) {
                breakpoint = key as ScreenSize
                break
            }
        }
    }
    return breakpoint
}
