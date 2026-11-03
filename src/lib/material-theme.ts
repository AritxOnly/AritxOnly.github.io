import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities'

export const profile = {
  username: 'AritxOnly',
  avatar: 'https://avatars.githubusercontent.com/AritxOnly?s=256',
  fallbackSeed: '#526b52',
}
export const paletteCacheKey = `avatar-palette-v2:${profile.username}`

/** Paired M3 roles preserve readable foregrounds in both modes. */
export function materialStyles(seed: number): string {
  const theme = themeFromSourceColor(seed)
  return (['light', 'dark'] as const)
    .map((mode) => {
      const roles = Object.entries(theme.schemes[mode].toJSON())
        .map(
          ([role, color]) =>
            `--md-${role.replace(/[A-Z]/g, (letter) => '-' + letter.toLowerCase())}:${hexFromArgb(color)};`,
        )
        .join('')
      const neutral = theme.palettes.neutral
      const surfaceRoles = Object.entries({
        background: mode === 'dark' ? 6 : 98,
        'surface-container-low': mode === 'dark' ? 10 : 96,
        'surface-container': mode === 'dark' ? 12 : 94,
        'surface-container-high': mode === 'dark' ? 17 : 92,
        'surface-container-highest': mode === 'dark' ? 22 : 90,
      })
        .map(([role, tone]) => `--md-${role}:${hexFromArgb(neutral.tone(tone))};`)
        .join('')
      return `:root[data-theme="github-${mode}"]${mode === 'light' ? ',:root[data-theme="auto"]' : ''}{${roles}${surfaceRoles}}`
    })
    .join('\n')
}
export const fallbackStyles = materialStyles(argbFromHex(profile.fallbackSeed))
