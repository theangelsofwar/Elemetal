import { TinyColor as Color } from '@ctrl/tinycolor';

import gray from 'gray-percentage';

interface ColorMap {
  [colorName: string]: string
}

interface GrayColorMap extends ColorMap {
  calm: string
}

export interface ColorsTheme {
  bgDark: string
  defaultHover: string
  defaultLink: string
  gray: GrayColorMap
  primary: string
  secondary: ColorMap
  textDark: string
  textDarkMuted: string
  textLight: string
  textLightMuted: string
  textMediumMuted: string
}

const primary = 'blanchedalmond';

const secondaryColors = {
  dark5: 'darkslategray',
  light0: 'gainsboro',
  light5: 'mintcream',
  light7: 'ghostwhite',
  main: 'slategray',
}

const colors: ColorsTheme = Object.freeze({
  primary,
  secondary: secondaryColors,
  bgDark: 'darkslategray',

  gray: {
    calm: gray(80, 'cool'),
  },

  defaultHover: new Color(secondaryColors.light7)
    .setAlpha(0.8)
    .toPercentageRgbString(),

  defaultLink: new Color(primary).setAlpha(0.8).toPercentageRgbString(),

  textDark: 'rgba(0, 0, 0, .8)',
  textDarkMuted: 'rgba(0, 0, 0, .6)',
  textLight: 'hsla(0, 0%, 100%, .8)',
  textLightMuted: 'rgba(220, 220, 220, .8)',
  textMediumMuted: 'rgba(0, 0, 0, .7)',
})

export default colors;