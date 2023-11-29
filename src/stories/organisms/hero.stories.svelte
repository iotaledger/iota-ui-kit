<script lang="ts" context="module">
import type { Meta } from '@storybook/svelte'

import { Hero as HeroComponent } from '$organisms'
import { ButtonType, IconEnum } from '$components'
import { HeroVariant } from '$components/organisms'

export const meta = {
    title: 'Organisms/Hero',
    component: HeroComponent,
    tags: ['autodocs'],
    argTypes: {
        darkmode: {
            control: {
                type: 'boolean',
            },
        },
        variant: {
            control: { type: 'select' },
            options: Object.values(HeroVariant),
        },
        buttons: {
            control: {
                type: 'object',
            },
        },
        iconFeatures: {
            control: {
                type: 'object',
            },
        },
        anchorLinks: {
            control: {
                type: 'object',
                values: [],
            },
        },
    },
} satisfies Meta<HeroComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$lib/storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
</script>


<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <HeroComponent {...reactiveArgs}></HeroComponent>
</Template>

<Story
    name="Hero"
    args={{
        backgroundVideo:
            'https://s3-figma-videos-production-sig.figma.com/video/624900379542150991/TEAM/5442/38b0/-4c06-431d-aef6-803d9cc1dceb?Expires=1701648000&Signature=bu3XS23KqkOlUieagh8dGh2gMGND9nBF~etZ8Xgwti1eIQDWLLrv1Yo3CC~I4t-6cs9It423ATmxcD2m1w11iFW5Do5vrgOfe8B0MSfZvoLA4iRVeNT2zRRvq20QpYccEx-NaIajEOFd8kVxRfkCYae4qJ9XBkQ719ycuqWp4OA0sltkQX8JdcnDIaMKwKRNYta2mWmQAmIZZgTVQVdJlxWG0MFFSCCkea4JUyP61-3wWmC6sIMn6P2631s2DzQ-pQWDBLX0flfXSgIDpD2XeeXcDaWg-Y831iPFa-ittLMlm4UuA4-sdUC50X385WghCDoLyHFEylfvNk-Th3y63w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        overline: 'Overline',
        title: 'Our Pathway To Bring Digital Autonomy To Everyone',
        subtitle:
            'Blockchains write data in form of small blocks into the ledger in a sequential way',
        paragraph:
            'The Tangle describes a novel leaderless, probabilistic consensus protocol that enables parallel validation of transactions without requiring total ordering.',
        buttons: [
            {
                type: ButtonType.Primary,
                label: 'Button',
                icon: IconEnum.UpRightArrow,
            },
            {
                type: ButtonType.Secondary,
                label: 'Button',
                icon: IconEnum.UpRightArrow,
            },
        ],
        iconFeatures: new Array(3).fill(0).map(() => ({
            icon: IconEnum.UpRightArrow,
            label: 'Icon Feature',
        })),
        anchorLinks: new Array(3).fill(0).map(() => ({
            label: 'Anchor link',
            href: '#',
        })),
        media: 'https://videos.ctfassets.net/xit7f234flxz/7BqsHwcJ0cjnSY77lhYyO7/5d5d9c6688a791d21cc651fa54f2896c/woman.webm',
        variant: HeroVariant.Secondary,
    }}
/>
