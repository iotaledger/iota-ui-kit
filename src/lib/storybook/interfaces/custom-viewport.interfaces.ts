import type { ViewportsEnum } from '../enums'

export interface ICustomViewports {
    [key: string]: {
        name: ViewportsEnum
        styles: {
            width: string
            height: string
        }
    }
}
