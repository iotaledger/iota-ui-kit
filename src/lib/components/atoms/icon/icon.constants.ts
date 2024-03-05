import type { ComponentType, SvelteComponent } from 'svelte'
import { IconEnum } from './icon.enums'
import {
    Bullet,
    CollectiveInvitation,
    ConflictOfInterest,
    Duplication,
    Funding,
    Interview,
    MarketValue,
    Menu,
    OpenSource,
    RelevanceImpact,
    Risk,
    Submission,
    UpRightArrow,
} from './icons'

export const ICON_MAP: Record<IconEnum, ComponentType<SvelteComponent>> = {
    [IconEnum.Bullet]: Bullet,
    [IconEnum.CollectiveInvitation]: CollectiveInvitation,
    [IconEnum.ConflictOfInterest]: ConflictOfInterest,
    [IconEnum.Duplication]: Duplication,
    [IconEnum.Funding]: Funding,
    [IconEnum.Interview]: Interview,
    [IconEnum.MarketValue]: MarketValue,
    [IconEnum.Menu]: Menu,
    [IconEnum.OpenSource]: OpenSource,
    [IconEnum.RelevanceImpact]: RelevanceImpact,
    [IconEnum.Risk]: Risk,
    [IconEnum.Submission]: Submission,
    [IconEnum.UpRightArrow]: UpRightArrow,
}
