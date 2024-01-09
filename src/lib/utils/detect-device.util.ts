export function isMobileDevice() {
    const userAgent = navigator.userAgent
    const userAgentRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    return userAgentRegex.test(userAgent)
}
