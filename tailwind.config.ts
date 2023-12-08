const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.slate,
        info: colors.blue,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red,
        body: {
          bg: colors.slate[50],
          color: colors.slate[900],
        },
        link: {
          DEFAULT: colors.sky[600],
          hover: colors.sky[700],
        },
        muted: colors.slate[600],
        border: colors.gray[200],
        auto: Object.fromEntries(
          [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
            (value) => [value, `rgba(var(--color-${value}), <alpha-value>)`],
          ),
        ),
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ theme, addUtilities }) => {
      const autoColors: Record<string, Record<string, string>> = {}
      const colors = theme('colors')

      const hexToRgb = (hex: string) => {
        let fullHex = hex

        // Convert #RGB to #RRGGBB format
        if (hex.length === 4) {
          fullHex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
        }

        // Function to convert hex to RGB
        const bigint = parseInt(fullHex.slice(1), 16)
        const r = (bigint >> 16) & 255
        const g = (bigint >> 8) & 255
        const b = bigint & 255
        return [r, g, b].join(', ')
      }

      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const colorPalette: Record<string, string> = {}

          for (const colorInner in colors[color]) {
            const hexValue = colors[color][colorInner]
            const rgbValue = hexToRgb(hexValue)
            colorPalette[`--color-${colorInner}`] = rgbValue
          }

          autoColors[`.color-${color}`] = colorPalette
        }
      }

      addUtilities(autoColors, ['responsive', 'hover', 'focus', 'active'])
    }),
  ],
}
