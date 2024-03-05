import { ViewportsEnum } from '../enums'
import type { ICustomViewports } from '../interfaces'

export const CUSTOM_VIEWPORTS: ICustomViewports = {
    screen: {
        name: ViewportsEnum.Screen,
        styles: {
            width: '100vw',
            height: '100vh',
        },
    },
}
