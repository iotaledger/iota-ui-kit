import { BROWSER } from 'esm-env'

export function isMobileDevice() {
    if (BROWSER) {
        const userAgent = window.navigator.userAgent
        const userAgentRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        return userAgentRegex.test(userAgent)
    }
    return false
}
