<script lang="ts" context="module">
    import { Button, ButtonSize, ButtonType } from '$atoms/buttons'
    export const meta = {
        title: 'Atoms/Button',
        component: Button,
        tags: ['autodocs'],
        argTypes: {
            type: {
                control: { type: 'select' },
                options: Object.values(ButtonType),
            },
            size: {
                control: { type: 'select' },
                options: Object.values(ButtonSize),
            },
            label: { control: 'text' },
            darkmode: { control: 'boolean' },
            disabled: { control: 'boolean' },
            icon: {
                control: { type: 'select' },
                options: Object.values(IconEnum),
            },
            href: { control: 'text' },
            isExternal: { control: 'boolean' },
        },
    } satisfies Meta<Button>
</script>

<script lang="ts">
    import { IconEnum } from '$components'
    import { isDarkModeEnabled } from '$storybook'
    import { Story, Template } from '@storybook/addon-svelte-csf'
    import type { Meta } from '@storybook/svelte'
</script>

<Template let:args>
    {@const reactiveArgs = { ...args, darkmode: $isDarkModeEnabled }}
    <Button {...reactiveArgs}></Button>
</Template>

<Story
    name="Primary"
    args={{
        type: ButtonType.Primary,
        label: 'Primary',
        size: ButtonSize.Medium,
        darkmode: $isDarkModeEnabled,
        disabled: false,
    }}
/>

<Story
    name="Secondary"
    args={{
        type: ButtonType.Secondary,
        label: 'Secondary',
        size: ButtonSize.Medium,
        darkmode: $isDarkModeEnabled,
        disabled: false,
    }}
/>

<Story
    name="Ghost"
    args={{
        type: ButtonType.Ghost,
        label: 'Ghost',
        size: ButtonSize.Medium,
        darkmode: $isDarkModeEnabled,
        disabled: false,
    }}
/>

<Story
    name="Destructive"
    args={{
        type: ButtonType.Destructive,
        label: 'Destructive',
        size: ButtonSize.Medium,
        darkmode: $isDarkModeEnabled,
        disabled: false,
    }}
/>

<Story
    name="IconText"
    args={{
        type: ButtonType.Primary,
        label: 'IconText',
        size: ButtonSize.Medium,
        darkmode: $isDarkModeEnabled,
        disabled: false,
        icon: IconEnum.UpRightArrow,
    }}
/>

<Story
    name="Icon"
    args={{
        type: ButtonType.Secondary,
        size: ButtonSize.Medium,
        darkmode: $isDarkModeEnabled,
        disabled: false,
        icon: IconEnum.UpRightArrow,
    }}
/>

<Story
    name="Primary As Link"
    args={{
        type: ButtonType.Primary,
        label: 'Primary',
        size: ButtonSize.Medium,
        darkmode: $isDarkModeEnabled,
        disabled: false,
        href: 'https://iota.org',
        isExternal: true,
        icon: IconEnum.UpRightArrow,
    }}
/>
