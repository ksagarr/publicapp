module.exports = {
  presets: [require('frappe-ui/src/utils/tailwind.config')],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/frappe-ui/src/components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'right-left': 'moveRightToLeft 0.5s ease-out;',
      },
      keyframes: {
        moveRightToLeft: {
          'from': {
            transform: 'translateX(100%)'
          },
          'to': {
            transform: 'translateX(0%)'
          },
        }
      },
      colors: {
        'slate': {
          50: '#f8fafc',
          100:'#f1f5f9',
          200:'#e2e8f0',
          300:'#cbd5e1',
          400:'#94a3b8',
          500:'#64748b',
          600:'#475569',
          700:'#334155',
          800:'#1e293b',
          900:'#0f172a',
          950:'#020617',
          
        },
        'indigo': {
          50: '#eef2ff',
          100:'#e0e7ff',
          200:'#c7d2fe',
          300:'#a5b4fc',
          400:'#818cf8',
          500:'#6366f1',
          600:'#4338ca',
          700:'#4338ca',
          800:'#3730a3',
          900:'#312e81',
          950:'#1e1b4b',
          
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-counters': theme('colors.gray[900]'),
            '--tw-prose-bullets': theme('colors.gray[900]'),
            '--tw-prose-links': theme('color.blue[500]'),
            li: {
              p: {
                margin:0
              }
            },
            blockquote: {
              p: {
                margin: 0
              }
            },
            a: {
              color:'#68CEF8'
            }
           
        },
      },
    }),
    },
  },
  plugins: [ require('@tailwindcss/typography')],
}
