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
    import { CUSTOM_VIEWPORTS } from '$lib/storybook/constants'
    import { ViewportsEnum } from '$lib/storybook/enums'
    import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
    import { MediaType } from '$components'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}

    <HeroComponent {...reactiveArgs}></HeroComponent>
</Template>

<Story
    name="Hero"
    parameters={{
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS, ...CUSTOM_VIEWPORTS },
            defaultViewport: ViewportsEnum.Screen,
        },
    }}
    args={{
        backgroundMedia: {
            type: MediaType.Video,
            src: 'https://videos.ctfassets.net/xit7f234flxz/vWgyEvbf4sULsQJPaIKqf/a32fcfbefb146832045cb338f9b210b0/earth.webm',
        },
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

<Story
    name="Animation Hero"
    parameters={{
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS, ...CUSTOM_VIEWPORTS },
            defaultViewport: ViewportsEnum.Screen,
        },
    }}
    args={{
        backgroundMedia: {
            type: MediaType.Animation,
            src: 'https://lottie.host/e6da585b-705b-438b-b6b3-e53cb9c869a3/hfD2AcCSuN.json',
            backgroundColor: '#131f37e6',
        },
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
