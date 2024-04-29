<script lang="ts" context="module">
    import { IconEnum } from '$components'
    import { ContentStripType } from '$components/molecules/content-strip/content-strip.enums'
    import { Align } from '$lib/enums'
    import { ContentStrip as ContentStripComponent } from '$molecules'

    export const meta = {
        title: 'Molecules/ContentStrip',
        component: ContentStripComponent,
        tags: ['autodocs'],
        argTypes: {
            strip: {
                control: {
                    type: 'object',
                },
            },
            spaceBetween: {
                control: {
                    type: 'boolean',
                },
            },
            align: {
                control: {
                    type: 'select',
                    labels: getEnumLabels(Align),
                },
                options: Object.values(Align),
            },
        },
    } satisfies Meta<ContentStripComponent>
</script>

<script lang="ts">
    import { isDarkModeEnabled } from '$storybook'
    import { getEnumLabels } from '$storybook/utils/map-enum-labels'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <ContentStripComponent {...reactiveArgs}></ContentStripComponent>
</Template>

<Story
    name="AnchorLink Strip"
    args={{
        strip: {
            type: ContentStripType.AnchorStrip,
            items: new Array(3).fill(0).map(() => ({
                label: 'Anchor Link',
                darkmode: true,
                href: '',
            })),
        },
        spaceBetween: false,
        align: Align.Center,
    }}
/>

<Story
    name="IconText Strip"
    args={{
        strip: {
            type: ContentStripType.IconStrip,
            items: new Array(3).fill(0).map(() => ({
                label: 'Icon Text',
                icon: IconEnum.ArrowTopRight,
            })),
        },
        spaceBetween: false,
        align: Align.Center,
    }}
/>
