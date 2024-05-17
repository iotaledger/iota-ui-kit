# IOTA UI Kit 🧰

Official UI Kit for IOTA apps built with Svelte, TypeScript, and Tailwind CSS. This kit provides you with reusable, easy-to-use components for building consistent interfaces with the IOTA design system.

## Features ✨

- **Reusable Components**: Efficient pre-built components.
- **Easy to Use**: Developer-friendly design for seamless integration.
- **Storybook**: Visual documentation and testing in an isolated environment.

## Installation 🛠️

Add the UI Kit to your project with Yarn:

```bash
yarn add @iota/ui-kit
```

## Usage 📦

Here's a simple example to demonstrate how to use our components in a Svelte project:

```svelte
<script lang="ts">
  import { Button, ButtonType, ButtonSize } from '@iota/ui-kit';
  import { ComponentProps } from 'svelte';

  const BUTTON: ComponentProps<Button> = {
    type: ButtonType.Primary,
    label: 'Click Me',
  }

  const handleOnClick = () => {
    console.log('Button clicked!');
  }
</script>

<Button { ...BUTTON } on:click={handleOnClick} />
```

### Stores 🏪

The UI Kit uses Svelte stores to manage global state. You can import them from `@iota/ui-kit/stores` and use them in your components:

- **isSmallScreen**: Returns true if the innerWidth of the screen is less than 1024px. 
- **isMobile**: Returns true if the innerWidth of the screen is less than 768px.

## Requirements 📋

Ensure you have the following installed:

- Node.js >= 18.12.x
- Yarn >= 1.22.x

## Development 🧑‍💻

To view and test the components in Storybook, run:

```sh
yarn storybook
```
This command will start a development server at http://localhost:6006. Open it in your browser to explore and interact with the components.
