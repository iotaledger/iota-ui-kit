<script lang="ts" context="module">
    import type { Meta } from '@storybook/svelte'

    import { Hero as HeroComponent } from '$organisms'
    import { ButtonType, IconEnum, TitleSize, TitleTag } from '$components'
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
            bottomStrip: {
                control: {
                    type: 'object',
                },
            },
            titleSize: {
                control: {
                    type: 'select',
                    labels: getEnumLabels(TitleSize),
                },
                options: Object.values(TitleSize),
            },
            titleTag: {
                control: {
                    type: 'select',
                    labels: getEnumLabels(TitleTag),
                },
                options: Object.values(TitleTag),
            },
        },
    } satisfies Meta<HeroComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import { CUSTOM_VIEWPORTS } from '$storybook/constants'
    import { ViewportsEnum } from '$storybook/enums'
    import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
    import { MediaType } from '$components'
    import { getEnumLabels } from '$storybook/utils/map-enum-labels'
    import { BottomStripType } from '$components/organisms/hero/hero.enums'
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
                icon: IconEnum.ArrowTopRight,
            },
            {
                type: ButtonType.Secondary,
                label: 'Button',
                icon: IconEnum.ArrowTopRight,
            },
        ],
        bottomStrip: {
            type: BottomStripType.AnchorLink,
            items: new Array(3).fill(0).map(() => ({
                label: 'Anchor link',
                href: '#',
            })),
        },
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
                icon: IconEnum.ArrowTopRight,
            },
            {
                type: ButtonType.Secondary,
                label: 'Button',
                icon: IconEnum.ArrowTopRight,
            },
        ],
        bottomStrip: {
            type: BottomStripType.AnchorLink,
            items: new Array(3).fill(0).map(() => ({
                label: 'Anchor link',
                href: '#',
            })),
        },
        media: 'https://videos.ctfassets.net/xit7f234flxz/7BqsHwcJ0cjnSY77lhYyO7/5d5d9c6688a791d21cc651fa54f2896c/woman.webm',
        variant: HeroVariant.Secondary,
    }}
/>
