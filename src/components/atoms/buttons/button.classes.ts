import { ButtonSize, ButtonType } from '.'

export const TEXT_SIZES: Record<ButtonSize, string> = {
  [ButtonSize.Small]: 'text-sm leading-5',
  [ButtonSize.Medium]: 'text-base leading-6',
  [ButtonSize.Large]: 'text-lg leading-7',
}

export const VARIANT_COLORS: Record<
  ButtonType,
  { light: string; dark?: string }
> = {
  [ButtonType.Primary]: {
    light:
      'text-white bg-iota-blue-700 hover:bg-iota-blue-800 active:bg-iota-blue-900 focus:outline focus:outline-2 focus:outline-iota-blue-500 focus:outline-offset-2',
  },
  [ButtonType.Secondary]: {
    light:
      'text-iota-gray-900 border-[1.5px] border-iota-blue-400 hover:bg-iota-blue-700/0.08 active:bg-iota-blue-700/d0.16 focus:outline focus:outline-2 focus:outline-iota-blue-500 focus:outline-offset-2',
    dark: 'text-white border-[1.5px] border-iota-blue-400 hover:bg-white/0.08 active:bg-white/d0.16',
  },
  [ButtonType.Ghost]: {
    light:
      'text-iota-gray-900 hover:bg-iota-blue-700/0.08 active:bg-iota-blue-700/d0.16',
    dark: 'text-white hover:bg-white/0.08 active:bg-white/d0.16',
  },
  [ButtonType.Destructive]: {
    light:
      'text-white bg-[#E73333] hover:bg-[#D81A1A] active:bg-[#B21A1A] focus:outline focus:outline-2 focus:outline-iota-blue-500 focus:outline-offset-2',
  },
}
