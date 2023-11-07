import type { ComponentType, SvelteComponent } from "svelte"
import { DestructiveButton, GhostButton, PrimaryButton, SecondaryButton } from "."
import { ButtonType } from "./button.enums"

export const BUTTON_TYPE: Record<ButtonType, ComponentType<SvelteComponent>> = {
  [ButtonType.Ghost]: GhostButton,
  [ButtonType.Primary]: PrimaryButton,
  [ButtonType.Secondary]: SecondaryButton,
  [ButtonType.Destructive]: DestructiveButton,
}
