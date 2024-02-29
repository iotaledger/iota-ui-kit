export function isMobileDevice() {
    if (window !== undefined && window?.navigator) {
        const userAgent = window.navigator.userAgent
        const userAgentRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        return userAgentRegex.test(userAgent)
    }

    return false
}
